import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Cardiovascular Device Package Testing',
  description: 'Package validation for cardiovascular devices including stents, catheters, and pacemakers. ISO 11607 sterile barrier testing in Boulder, CO.',
  alternates: { canonical: 'https://boulderpackagetest.com/industries/cardiovascular' },
  openGraph: { title: 'Cardiovascular Device Package Testing | Boulder Package Testing', description: 'Package validation for cardiovascular devices.', url: 'https://boulderpackagetest.com/industries/cardiovascular', type: 'website', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
};

const faqs = [
  { question: 'What packaging challenges are unique to cardiovascular devices?', answer: 'Cardiovascular devices like stents and catheters are often long, thin, and delicate. Packaging must protect against kinking, crushing, and contamination while maintaining a sterile barrier through extended shelf lives often exceeding three years. Many cardiovascular devices use multi-layer pouch systems or custom thermoformed trays with chevron peels.' },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Industries', url: '/industries/orthopedic' }, { name: 'Cardiovascular', url: '/industries/cardiovascular' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />

      <nav className="bg-gray-light py-3 border-b border-gray-medium/20" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-navy/60">
            <li><Link href="/" className="hover:text-teal">Home</Link></li>
            <li>/</li>
            <li><Link href="/industries/orthopedic" className="hover:text-teal">Industries</Link></li>
            <li>/</li>
            <li className="text-navy font-medium">Cardiovascular</li>
          </ol>
        </div>
      </nav>

      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Cardiovascular Device Sterile Packaging Validation</h1>
          <p className="text-lg text-white/80 max-w-2xl">Package testing for stents, catheters, pacemakers, and cardiovascular surgical instruments.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <Image src="/img/industry-cardiovascular.png" alt="Cardiovascular medical devices - stents and catheters" width={1600} height={900} sizes="(max-width: 1280px) 100vw, 1280px" priority className="w-full rounded-lg shadow-lg h-auto" style={{ objectFit: 'cover' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-10">
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Industry-Specific Challenges</h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              Cardiovascular devices present unique packaging validation challenges driven by their physical characteristics and regulatory requirements. Stents, guidewires, and catheters are often long, flexible, and extremely sensitive to kinking or mechanical damage. Packaging systems must immobilize these devices during distribution without creating stress points that could affect device performance.
            </p>
            <p className="text-navy/80 leading-relaxed mb-4">
              Many cardiovascular devices require extended shelf-life claims of three to five years, demanding rigorous accelerated and real-time aging programs. The combination of EO sterilization and extended aging means that packaging materials must demonstrate long-term compatibility with sterilant residuals while maintaining sterile barrier integrity.
            </p>
            <p className="text-navy/80 leading-relaxed">
              Cardiovascular device manufacturers face stringent regulatory scrutiny from FDA and international bodies. ISO 11607 validation programs for these devices must be audit-ready and fully documented, with clear traceability from protocol through test execution to final report.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Relevant Test Methods</h2>
            <ul className="space-y-2">
              <li><Link href="/tests/astm-f1980" className="text-teal hover:underline font-medium">ASTM F1980</Link> — Extended accelerated aging for 3-5 year shelf-life claims</li>
              <li><Link href="/tests/astm-f88" className="text-teal hover:underline font-medium">ASTM F88</Link> — Seal strength for pouch and tray configurations</li>
              <li><Link href="/tests/astm-f1929" className="text-teal hover:underline font-medium">ASTM F1929</Link> — Dye penetration for sterile barrier integrity</li>
              <li><Link href="/tests/astm-f2096" className="text-teal hover:underline font-medium">ASTM F2096</Link> — Bubble leak detection</li>
              <li><Link href="/tests/ista-3a" className="text-teal hover:underline font-medium">ISTA 3A</Link> — Distribution simulation for parcel shipments</li>
              <li><Link href="/standards/iso-11607" className="text-teal hover:underline font-medium">ISO 11607</Link> — Complete validation program framework</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">FAQ</h2>
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-medium/20 pb-4 mb-4">
                <h3 className="font-semibold text-navy mb-2">{faq.question}</h3>
                <p className="text-sm text-navy/70">{faq.answer}</p>
              </div>
            ))}
          </section>

          <section className="bg-navy rounded-lg p-8 text-white">
            <h2 className="text-xl font-bold mb-2">Discuss Your Cardiovascular Device Packaging Validation</h2>
            <p className="text-white/70 mb-4">Tell us about your cardiovascular device and packaging requirements. We will propose a test plan tailored to your shelf-life and distribution needs.</p>
            <Link href="/contact" className="inline-block bg-teal text-white px-6 py-3 rounded font-semibold hover:bg-teal/90 transition-colors">
              Request a Quote
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
