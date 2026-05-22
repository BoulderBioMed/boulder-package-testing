import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'IVD Package Testing — In Vitro Diagnostics',
  description: 'Package validation for in vitro diagnostic devices and test kits. Distribution simulation, aging, and sterile barrier testing in Boulder, CO.',
  alternates: { canonical: 'https://boulderpackagetest.com/industries/ivd' },
  openGraph: { title: 'IVD Package Testing | Boulder Package Testing', description: 'Package validation for in vitro diagnostic devices.', url: 'https://boulderpackagetest.com/industries/ivd', type: 'website', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
};

const faqs = [
  { question: 'Do IVD test kits require sterile packaging validation?', answer: 'It depends on the device classification and intended use. Sterile IVD components (collection devices, sterile swabs, pipettes) require ISO 11607 validation. Non-sterile IVD kits still need distribution simulation to ensure product integrity through shipping and storage, particularly for temperature-sensitive reagents.' },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Industries', url: '/industries/orthopedic' }, { name: 'In Vitro Diagnostics', url: '/industries/ivd' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />

      <nav className="bg-gray-light py-3 border-b border-gray-medium/20" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-navy/60">
            <li><Link href="/" className="hover:text-teal">Home</Link></li>
            <li>/</li>
            <li><Link href="/industries/orthopedic" className="hover:text-teal">Industries</Link></li>
            <li>/</li>
            <li className="text-navy font-medium">In Vitro Diagnostics</li>
          </ol>
        </div>
      </nav>

      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">In Vitro Diagnostic Device Packaging Validation</h1>
          <p className="text-lg text-white/80 max-w-2xl">Package testing for IVD test kits, collection devices, and diagnostic instrument accessories.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-10">
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Industry-Specific Challenges</h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              In vitro diagnostic devices span a wide range of product types — from simple collection tubes and sterile swabs to complex multi-component test kits containing reagents, controls, and instrumentation accessories. Packaging validation requirements vary significantly across this spectrum, from full ISO 11607 sterile barrier validation for sterile components to distribution-focused testing for non-sterile kit assemblies.
            </p>
            <p className="text-navy/80 leading-relaxed mb-4">
              IVD manufacturers face the additional challenge of temperature-sensitive components. Reagents and biological materials may degrade if exposed to temperature extremes during distribution. Packaging validation must consider not only mechanical protection but also thermal performance of shipping configurations, including insulated shippers and cold chain packaging.
            </p>
            <p className="text-navy/80 leading-relaxed">
              The IVD regulatory pathway (510(k), De Novo, IVDR) increasingly demands documented packaging validation. As IVD products move toward point-of-care and at-home testing, distribution environments become more variable, making robust package testing essential for market access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Relevant Test Methods</h2>
            <ul className="space-y-2">
              <li><Link href="/tests/ista-3a" className="text-teal hover:underline font-medium">ISTA 3A</Link> — Distribution simulation for parcel-shipped test kits</li>
              <li><Link href="/tests/astm-d4169" className="text-teal hover:underline font-medium">ASTM D4169</Link> — Custom distribution simulation for pallet shipments</li>
              <li><Link href="/tests/astm-f1980" className="text-teal hover:underline font-medium">ASTM F1980</Link> — Accelerated aging for shelf-life claims</li>
              <li><Link href="/tests/astm-f88" className="text-teal hover:underline font-medium">ASTM F88</Link> — Seal strength for sterile component packaging</li>
              <li><Link href="/tests/astm-f1929" className="text-teal hover:underline font-medium">ASTM F1929</Link> — Dye penetration for sterile barrier integrity</li>
              <li><Link href="/standards/iso-11607" className="text-teal hover:underline font-medium">ISO 11607</Link> — Complete validation for sterile IVD components</li>
            </ul>
          </section>

          <section className="bg-gray-light rounded-lg p-6">
            <h2 className="text-xl font-bold text-navy mb-3">Case Study</h2>
            <p className="text-navy/60 italic">Anonymized case study placeholder — contact us to discuss specific IVD packaging validation projects.</p>
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
            <h2 className="text-xl font-bold mb-2">Discuss Your IVD Packaging Validation</h2>
            <p className="text-white/70 mb-4">Tell us about your diagnostic device or test kit packaging. We will propose a test plan tailored to IVD regulatory and distribution requirements.</p>
            <Link href="/contact" className="inline-block bg-teal text-white px-6 py-3 rounded font-semibold hover:bg-teal/90 transition-colors">
              Request a Quote
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
