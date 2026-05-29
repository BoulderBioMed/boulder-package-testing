import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Orthopedic Device Package Testing',
  description: 'Package validation for orthopedic implants and instruments. Distribution simulation, accelerated aging, and sterile barrier integrity testing in Boulder, CO.',
  alternates: { canonical: 'https://boulderpackagetest.com/industries/orthopedic' },
  openGraph: { title: 'Orthopedic Device Package Testing | Boulder Package Testing', description: 'Package validation for orthopedic implants and instruments.', url: 'https://boulderpackagetest.com/industries/orthopedic', type: 'website', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
};

const faqs = [
  { question: 'What packaging challenges are unique to orthopedic devices?', answer: 'Orthopedic implants often have sharp edges, high weight, and complex geometries that stress sterile barrier materials. Packaging must protect against puncture, maintain seal integrity through heavy distribution loads, and accommodate devices that may include metal, ceramic, and polymer components in a single kit.' },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Industries', url: '/industries/orthopedic' }, { name: 'Orthopedic', url: '/industries/orthopedic' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />

      <nav className="bg-gray-light py-3 border-b border-gray-medium/20" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-navy/60">
            <li><Link href="/" className="hover:text-teal">Home</Link></li>
            <li>/</li>
            <li><Link href="/industries/orthopedic" className="hover:text-teal">Industries</Link></li>
            <li>/</li>
            <li className="text-navy font-medium">Orthopedic</li>
          </ol>
        </div>
      </nav>

      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Orthopedic Device Sterile Packaging Validation</h1>
          <p className="text-lg text-white/80 max-w-2xl">Package testing designed for the unique challenges of orthopedic implants, instruments, and surgical kits.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <img src="/img/industry-orthopedic.png" alt="Orthopedic implants - spine, joint, trauma devices" className="w-full rounded-lg shadow-lg" style={{ aspectRatio: '16/9', objectFit: 'cover' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-10">
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Industry-Specific Challenges</h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              Orthopedic device packaging faces challenges that most other medical device categories do not. Heavy implants made of titanium, cobalt-chrome, or ceramic can weigh several hundred grams each, placing significant compressive and puncture stress on sterile barrier materials during distribution. Sharp edges on screws, plates, and cutting instruments can compromise seals if not properly restrained within the packaging system.
            </p>
            <p className="text-navy/80 leading-relaxed mb-4">
              Surgical kits containing multiple components (screws, instruments, trials, implants) in a single tray require careful packaging design to prevent component movement while maintaining sterile barrier integrity. Many orthopedic manufacturers use rigid thermoformed trays with Tyvek lids, where seal width, seal strength, and tray flange design are critical quality attributes.
            </p>
            <p className="text-navy/80 leading-relaxed">
              Distribution environments for orthopedic devices range from controlled pallet shipments to trunk stock held in sales representatives' vehicles — one of the most aggressive real-world distribution conditions in medical devices. Validation programs must account for this variability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Relevant Test Methods</h2>
            <ul className="space-y-2">
              <li><Link href="/tests/ista-3a" className="text-teal hover:underline font-medium">ISTA 3A</Link> — Parcel delivery simulation for device kits and individual units</li>
              <li><Link href="/tests/astm-d4169" className="text-teal hover:underline font-medium">ASTM D4169</Link> — Distribution simulation with custom hazard levels for heavy shipments</li>
              <li><Link href="/tests/astm-f1980" className="text-teal hover:underline font-medium">ASTM F1980</Link> — Accelerated aging for shelf-life claims (typically 5 years for implants)</li>
              <li><Link href="/tests/astm-f88" className="text-teal hover:underline font-medium">ASTM F88</Link> — Seal strength testing for Tyvek-to-tray configurations</li>
              <li><Link href="/tests/astm-f1929" className="text-teal hover:underline font-medium">ASTM F1929</Link> — Dye penetration for sterile barrier integrity verification</li>
              <li><Link href="/standards/iso-11607" className="text-teal hover:underline font-medium">ISO 11607</Link> — Complete validation program framework</li>
            </ul>
          </section>

          <section className="bg-gray-light rounded-lg p-6">
            <h2 className="text-xl font-bold text-navy mb-3">Case Study</h2>
            <p className="text-navy/60 italic">Anonymized case study placeholder — contact us to discuss specific orthopedic device packaging validation projects we have supported.</p>
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
            <h2 className="text-xl font-bold mb-2">Discuss Your Orthopedic Device Packaging Validation</h2>
            <p className="text-white/70 mb-4">Tell us about your implant, instrument, or surgical kit packaging. We will propose a test plan tailored to orthopedic distribution and shelf-life requirements.</p>
            <Link href="/contact" className="inline-block bg-teal text-white px-6 py-3 rounded font-semibold hover:bg-teal/90 transition-colors">
              Request a Quote
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
