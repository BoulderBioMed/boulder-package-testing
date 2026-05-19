import type { Metadata } from 'next';
import Link from 'next/link';
import { faqs } from '@/content/faqs';
import { faqPageSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'FAQ — Medical Device Package Testing',
  description: 'Frequently asked questions about medical device package validation, ISO 11607, ISTA 3A, ASTM F1980 accelerated aging, and sterile barrier testing.',
  alternates: { canonical: 'https://boulderpackagetesting.com/faq' },
  openGraph: { title: 'FAQ | Boulder Package Testing', description: 'Answers to common questions about medical device package validation.', url: 'https://boulderpackagetesting.com/faq', type: 'website', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'FAQ', url: '/faq' }])) }} />

      <nav className="bg-gray-light py-3 border-b border-gray-medium/20" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-navy/60">
            <li><Link href="/" className="hover:text-teal">Home</Link></li>
            <li>/</li>
            <li className="text-navy font-medium">FAQ</li>
          </ol>
        </div>
      </nav>

      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Frequently Asked Questions</h1>
          <p className="text-lg text-white/80 max-w-2xl">Answers to the questions QA engineers and packaging engineers ask most about medical device package validation.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-medium/20 pb-6">
              <h2 className="text-lg font-semibold text-navy mb-3">{faq.question}</h2>
              <p className="text-navy/70 leading-relaxed">{faq.answer}</p>
            </div>
          ))}

          <section className="bg-gray-light rounded-lg p-8 mt-8">
            <h2 className="text-xl font-bold text-navy mb-2">Still Have Questions?</h2>
            <p className="text-navy/70 mb-4">Our team is ready to discuss your specific packaging validation needs.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-teal text-white px-6 py-3 rounded font-semibold hover:bg-teal/90 transition-colors">
                Contact Us
              </Link>
              <a href="tel:303-531-1238" className="border border-navy/20 text-navy px-6 py-3 rounded font-semibold hover:bg-navy/5 transition-colors">
                Call 303-531-1238
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
