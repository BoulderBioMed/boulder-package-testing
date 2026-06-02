// Minimal, dependency-free email transport for form submissions.
//
// All Boulder family forms deliver to info@boulderiq.com. This sends via the
// Resend HTTP API when RESEND_API_KEY is set (no npm dependency required), and
// otherwise no-ops gracefully so dev/preview builds never fail on a missing key.
//
// Required Vercel env vars to enable real delivery:
//   RESEND_API_KEY   — Resend API key
//   FORM_FROM_EMAIL  — verified sender, e.g. "Boulder BioLabs <forms@boulderbiomed.com>"
//
// The recipient is fixed to info@boulderiq.com per the brand standard.

export const FORM_RECIPIENT = "info@boulderiq.com";

type SendArgs = { subject: string; text: string; replyTo?: string };

export async function sendFormEmail({ subject, text, replyTo }: SendArgs): Promise<{ sent: boolean }> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.FORM_FROM_EMAIL || "Boulder Forms <onboarding@resend.dev>";
  if (!key) {
    // No transport configured — caller still logs the submission so nothing is lost.
    return { sent: false };
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [FORM_RECIPIENT],
        subject,
        text,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
    return { sent: res.ok };
  } catch {
    return { sent: false };
  }
}
