import { NextRequest, NextResponse } from 'next/server';
import { sendFormEmail, FORM_RECIPIENT } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Keep the server-side log so no submission is ever lost, even when no
    // email transport is configured (e.g. preview builds without RESEND_API_KEY).
    console.log('[Contact Form Submission]', JSON.stringify(body, null, 2));

    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const company = String(body.company ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const device = String(body.device ?? '').trim();
    const standards = String(body.standards ?? '').trim();
    const timeline = String(body.timeline ?? '').trim();

    const text = [
      'New quote request — Boulder Package Testing',
      '',
      `Name:      ${name || '—'}`,
      `Email:     ${email || '—'}`,
      `Company:   ${company || '—'}`,
      `Phone:     ${phone || '—'}`,
      '',
      'Device description:',
      device || '—',
      '',
      `Standards needed: ${standards || '—'}`,
      `Sample timeline:  ${timeline || '—'}`,
    ].join('\n');

    // Delivers to info@boulderiq.com via Resend when configured; no-ops gracefully otherwise.
    await sendFormEmail({
      subject: `Quote request — ${company || name || 'Boulder Package Testing'}`,
      text,
      replyTo: email || FORM_RECIPIENT,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
