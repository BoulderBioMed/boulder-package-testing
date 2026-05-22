import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: wire Postmark to info@boulderpackagetest.com
    // (Or Resend/SendGrid — see BLOCKERS.md. TO address must be info@boulderpackagetest.com.)
    console.log('[Contact Form Submission]', JSON.stringify(body, null, 2));
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
