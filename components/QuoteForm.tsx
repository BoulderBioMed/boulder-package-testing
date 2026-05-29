'use client';

import { useState } from 'react';
import { trackEvent } from '@/components/Analytics';

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = Object.fromEntries(data.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setSubmitted(true);
        trackEvent('quote_request_submitted', {
          standards: body.standards,
          timeline: body.timeline,
        });
      }
    } catch {
      // Silently handle - form data is logged server-side
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-teal/10 border border-teal/30 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-navy mb-2">Thank you for your inquiry.</h3>
        <p className="text-navy/70">We will review your project details and respond within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-gray-medium rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">Work Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-gray-medium rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-navy mb-1">Company *</label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full border border-gray-medium rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border border-gray-medium rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
          />
        </div>
      </div>
      <div>
        <label htmlFor="device" className="block text-sm font-medium text-navy mb-1">Device Description</label>
        <textarea
          id="device"
          name="device"
          rows={3}
          placeholder="Tell us about the device and package configuration"
          className="w-full border border-gray-medium rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
        />
      </div>
      <div>
        <label htmlFor="standards" className="block text-sm font-medium text-navy mb-1">Standards Needed</label>
        <input
          type="text"
          id="standards"
          name="standards"
          placeholder="e.g., ISO 11607, ISTA 3A, ASTM F1980"
          className="w-full border border-gray-medium rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
        />
      </div>
      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-navy mb-1">Sample Timeline</label>
        <input
          type="text"
          id="timeline"
          name="timeline"
          placeholder="When can you ship samples?"
          className="w-full border border-gray-medium rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
        />
      </div>
      <p className="text-xs text-navy/50">
        By submitting, you agree to be contacted by Boulder Package Testing about your inquiry. We never share project details outside the Boulder BioMed family.
      </p>
      <button
        type="submit"
        disabled={submitting}
        className="bg-teal text-white px-6 py-3 rounded font-semibold hover:bg-teal/90 transition-colors disabled:opacity-50"
      >
        {submitting ? 'Sending...' : 'Request a Quote'}
      </button>
    </form>
  );
}
