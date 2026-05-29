import Link from 'next/link';
import Image from 'next/image';
import QuoteForm from '@/components/QuoteForm';
import { type StandardInfo, getStandardBySlug } from '@/content/standards';

interface TestPageLayoutProps {
  standard: StandardInfo;
  image?: string;
  imageAlt?: string;
}

export default function TestPageLayout({ standard, image, imageAlt }: TestPageLayoutProps) {
  const relatedStandards = standard.relatedSlugs
    .map(getStandardBySlug)
    .filter(Boolean) as StandardInfo[];

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-gray-light py-3 border-b border-gray-medium/20" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-navy/60">
            <li><Link href="/" className="hover:text-teal">Home</Link></li>
            <li>/</li>
            <li><Link href="/tests/ista-3a" className="hover:text-teal">Test Methods</Link></li>
            <li>/</li>
            <li className="text-navy font-medium">{standard.name}</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">{standard.fullName}</h1>
          <p className="text-lg text-white/80 max-w-2xl">{standard.subtitle}</p>
        </div>
      </section>

      {image && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
          <Image src={image} alt={imageAlt || standard.name} width={1600} height={900} sizes="(max-width: 1280px) 100vw, 1280px" priority className="w-full rounded-lg shadow-lg h-auto" style={{ objectFit: 'cover' }} />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-xl font-bold text-navy mb-3">What It Is</h2>
              <p className="text-navy/80 leading-relaxed">{standard.whatItIs}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy mb-3">When You Need It</h2>
              <p className="text-navy/80 leading-relaxed">{standard.whenYouNeedIt}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy mb-3">What We Do</h2>
              <p className="text-navy/80 leading-relaxed">{standard.whatWeDo}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy mb-3">Equipment & Methodology</h2>
              <p className="text-navy/80 leading-relaxed">{standard.equipmentNote}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy mb-3">How It Fits Into ISO 11607</h2>
              <p className="text-navy/80 leading-relaxed">{standard.iso11607Connection}</p>
              <Link href="/standards/iso-11607" className="inline-block mt-3 text-teal font-medium hover:underline">
                Learn more about ISO 11607 validation programs &rarr;
              </Link>
            </section>

            {/* FAQ */}
            {standard.faqs.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {standard.faqs.map((faq) => (
                    <div key={faq.question} className="border-b border-gray-medium/20 pb-4">
                      <h3 className="font-semibold text-navy mb-2">{faq.question}</h3>
                      <p className="text-sm text-navy/70">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <section className="bg-gray-light rounded-lg p-8">
              <h2 className="text-xl font-bold text-navy mb-2">Ready to Start Testing?</h2>
              <p className="text-navy/70 mb-4">Contact us to discuss your {standard.name} testing requirements.</p>
              <Link
                href="/contact"
                className="inline-block bg-teal text-white px-6 py-3 rounded font-semibold hover:bg-teal/90 transition-colors"
              >
                Request a Quote
              </Link>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Related Standards */}
            <div className="bg-gray-light rounded-lg p-6">
              <h3 className="font-semibold text-navy mb-4">Related Standards</h3>
              <ul className="space-y-2">
                {relatedStandards.map((rel) => (
                  <li key={rel.slug}>
                    <Link
                      href={rel.slug === 'iso-11607' ? '/standards/iso-11607' : `/tests/${rel.slug}`}
                      className="text-sm text-teal hover:underline"
                    >
                      {rel.name} — {rel.subtitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick contact */}
            <div className="bg-navy rounded-lg p-6 text-white">
              <h3 className="font-semibold mb-2">Talk to Our Team</h3>
              <p className="text-sm text-white/70 mb-3">Discuss your {standard.name} project scope and timeline.</p>
              <p className="text-sm"><a href="tel:303-531-1238" className="text-teal hover:underline">303-531-1238</a></p>
              <p className="text-sm"><a href="mailto:info@boulderpackagetest.com" className="text-teal hover:underline">info@boulderpackagetest.com</a></p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
