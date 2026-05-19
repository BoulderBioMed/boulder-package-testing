import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Dental Device Package Testing',
  description: 'Package validation for dental implants, instruments, and sterile dental devices. ISO 11607 validation and distribution testing in Boulder, CO.',
  alternates: { canonical: 'https://boulderpackagetesting.com/industries/dental' },
  openGraph: { title: 'Dental Device Package Testing | Boulder Package Testing', description: 'Package validation for dental devices and implants.', url: 'https://boulderpackagetesting.com/industries/dental', type: 'website', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
};

const faqs = [
  { question: 'What dental devices require sterile packaging validation?', answer: 'Any terminally sterilized dental device requires ISO 11607 packaging validation. This includes dental implants (endosseous, subperiosteal), sterile surgical instruments (elevators, forceps, scalers), bone grafting materials, and prefilled syringes or cartridges containing sterile materials. Non-sterile reusable instruments that ship in protective packaging still benefit from distribution simulation testing.' },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Industries', url: '/industries/orthopedic' }, { name: 'Dental', url: '/industries/dental' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />

      <nav className="bg-gray-light py-3 border-b border-gray-medium/20" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-navy/60">
            <li><Link href="/" className="hover:text-teal">Home</Link></li>
            <li>/</li>
            <li><Link href="/industries/orthopedic" className="hover:text-teal">Industries</Link></li>
            <li>/</li>
            <li className="text-navy font-medium">Dental</li>
          </ol>
        </div>
      </nav>

      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Dental Device Sterile Packaging Validation</h1>
          <p className="text-lg text-white/80 max-w-2xl">Package testing for dental implants, surgical instruments, bone grafts, and sterile dental disposables.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-10">
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Industry-Specific Challenges</h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              Dental devices present packaging challenges driven by their small size, precise manufacturing tolerances, and diverse distribution channels. Dental implants are high-value, small-format devices that often ship individually in primary sterile barrier packaging nested within secondary and tertiary packaging. The packaging system must protect against contamination, moisture, and mechanical damage while being easy to open in a clinical setting.
            </p>
            <p className="text-navy/80 leading-relaxed mb-4">
              Dental instrument kits and procedure trays combine multiple components — implants, abutments, drills, guides — in a single package configuration. Validation must demonstrate that all components maintain their required condition through sterilization, distribution, and shelf life, with particular attention to internal restraint systems that prevent component-on-component damage.
            </p>
            <p className="text-navy/80 leading-relaxed">
              The dental device market includes a growing segment of small manufacturers and startups bringing innovative implant designs to market. These companies often need guidance on designing ISO 11607-compliant packaging validation programs from the ground up, including protocol development, sample size rationale, and acceptance criteria.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Relevant Test Methods</h2>
            <ul className="space-y-2">
              <li><Link href="/tests/ista-3a" className="text-teal hover:underline font-medium">ISTA 3A</Link> — Distribution simulation for parcel-shipped dental products</li>
              <li><Link href="/tests/astm-f1980" className="text-teal hover:underline font-medium">ASTM F1980</Link> — Accelerated aging for shelf-life claims</li>
              <li><Link href="/tests/astm-f88" className="text-teal hover:underline font-medium">ASTM F88</Link> — Seal strength for small-format pouch and blister configurations</li>
              <li><Link href="/tests/astm-f1929" className="text-teal hover:underline font-medium">ASTM F1929</Link> — Dye penetration for sterile barrier integrity</li>
              <li><Link href="/tests/astm-f1886" className="text-teal hover:underline font-medium">ASTM F1886</Link> — Visual seal inspection</li>
              <li><Link href="/standards/iso-11607" className="text-teal hover:underline font-medium">ISO 11607</Link> — Complete validation program framework</li>
            </ul>
          </section>

          <section className="bg-gray-light rounded-lg p-6">
            <h2 className="text-xl font-bold text-navy mb-3">Case Study</h2>
            <p className="text-navy/60 italic">Anonymized case study placeholder — contact us to discuss specific dental device packaging validation projects.</p>
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
            <h2 className="text-xl font-bold mb-2">Discuss Your Dental Device Packaging Validation</h2>
            <p className="text-white/70 mb-4">Tell us about your dental device and packaging requirements. We will propose a test plan tailored to dental market distribution and regulatory needs.</p>
            <Link href="/contact" className="inline-block bg-teal text-white px-6 py-3 rounded font-semibold hover:bg-teal/90 transition-colors">
              Request a Quote
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
