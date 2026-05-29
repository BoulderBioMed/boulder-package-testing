# Boulder Package Testing - stage, commit, push, and trigger Vercel deploy.
# Same pattern as boulder-biolabs/deploy.ps1. See that file for context.

param(
  [Parameter(Mandatory=$true)][string]$Message,
  [switch]$SkipCommit
)

$ErrorActionPreference = 'Stop'
$repoRoot    = Split-Path -Parent $MyInvocation.MyCommand.Path
$git         = 'C:\Program Files\Git\bin\git.exe'
$projectId   = 'prj_riXyHVhfZZgJl6OWkei0xYeE2nIj'
$teamId      = 'team_cJTblZcxdRH2BIIzWg5IHhu1'
$projectName = 'boulder-package-testing'
$githubOrg   = 'BoulderBioMed'
$tokenPath   = Join-Path $env:USERPROFILE 'Documents\Vault1\06-Credentials\vercel-token.txt'

$vercelToken = $env:VERCEL_TOKEN
if (-not $vercelToken -and (Test-Path $tokenPath)) {
  $vercelToken = (Get-Content $tokenPath -Raw).Trim()
}
if (-not $vercelToken) {
  throw "Vercel token not found. Set VERCEL_TOKEN env var or place token in: $tokenPath"
}

function Invoke-Git {
  param([string[]]$GitArgs, [switch]$AllowFailure)
  $tmpOut = [System.IO.Path]::GetTempFileName()
  $tmpErr = [System.IO.Path]::GetTempFileName()
  try {
    $quoted = $GitArgs | ForEach-Object {
      if ($_ -match '\s' -or $_ -eq '') { '"' + ($_ -replace '"','\"') + '"' } else { $_ }
    }
    $cmdLine = ($quoted -join ' ')
    $p = Start-Process -FilePath $git -ArgumentList $cmdLine `
        -WorkingDirectory $repoRoot -NoNewWindow -Wait -PassThru `
        -RedirectStandardOutput $tmpOut -RedirectStandardError $tmpErr
    $out = (Get-Content $tmpOut -Raw)
    $err = (Get-Content $tmpErr -Raw)
    if ($out) { Write-Host $out.TrimEnd() }
    if ($err) { Write-Host $err.TrimEnd() }
    if ($p.ExitCode -ne 0 -and -not $AllowFailure) {
      throw "git $($GitArgs -join ' ') failed (exit $($p.ExitCode))"
    }
    return @{ ExitCode = $p.ExitCode; Out = $out; Err = $err }
  } finally {
    Remove-Item -Force -ErrorAction SilentlyContinue $tmpOut, $tmpErr
  }
}

Remove-Item -Force -ErrorAction SilentlyContinue `
  (Join-Path $repoRoot '.git\index.lock'), `
  (Join-Path $repoRoot '.git\HEAD.lock'), `
  (Join-Path $repoRoot '.git\objects\maintenance.lock')

if (-not $SkipCommit) {
  Write-Host "[1/4] Staging tracked changes..."
  Invoke-Git -GitArgs @('add','-A') | Out-Null

  foreach ($f in @('.gitignore','tsconfig.json')) {
    if (Test-Path (Join-Path $repoRoot $f)) {
      $r = Invoke-Git -GitArgs @('diff','--cached','-w','--exit-code','--',$f) -AllowFailure
      if ($r.ExitCode -eq 0) { Invoke-Git -GitArgs @('reset','HEAD','--',$f) -AllowFailure | Out-Null }
    }
  }

  Write-Host "[2/4] Committing..."
  $r = Invoke-Git -GitArgs @('commit','-m',$Message) -AllowFailure
  if ($r.ExitCode -ne 0 -and ($r.Out + $r.Err) -match 'nothing to commit') {
    Write-Host "Nothing to commit - continuing."
  } elseif ($r.ExitCode -ne 0) {
    throw "git commit failed (exit $($r.ExitCode))"
  }
}

Write-Host "[3/4] Pushing to origin/main..."
Invoke-Git -GitArgs @('push','origin','main') | Out-Null

$shaResult = Invoke-Git -GitArgs @('rev-parse','HEAD')
$sha = $shaResult.Out.Trim()

Write-Host "[4/4] Triggering Vercel deploy for sha $($sha.Substring(0,7))..."
$body = @{
  name = $projectName
  gitSource = @{ type = 'github'; org = $githubOrg; repo = $projectName; ref = 'main' }
  target = 'production'
} | ConvertTo-Json -Depth 6

$headers = @{ Authorization = "Bearer $vercelToken"; 'Content-Type' = 'application/json' }
$resp = Invoke-RestMethod -Method Post -Headers $headers `
        -Uri "https://api.vercel.com/v13/deployments?teamId=$teamId" -Body $body
Write-Host "Deployment $($resp.id) - state $($resp.readyState)"
Write-Host "Inspect:  $($resp.inspectorUrl)"
Write-Host "Live URL: https://$($resp.url)"
Write-Host "Done. Production build typically completes in ~60s."
