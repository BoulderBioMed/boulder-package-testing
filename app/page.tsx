import type { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import StandardBadge from '@/components/StandardBadge';
import FamilyStrip from '@/components/FamilyStrip';
import QuoteForm from '@/components/QuoteForm';
import { faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Boulder Package Testing | Medical Device Package Validation',
  description: 'Sterile barrier and distribution testing co-located with EO and chlorine dioxide sterilization. ISO 11607, ISTA 3A, ASTM D4169, ASTM F1980 in Boulder, CO.',
  alternates: { canonical: 'https://boulderpackagetest.com' },
};

const services = [
  { title: 'Distribution Simulation', description: 'Drop, vibration, compression, and shock per ASTM D4169 and ISTA 3A/2A profiles for medical device packaging.', href: '/tests/astm-d4169', icon: '\u{1F4E6}' },
  { title: 'Accelerated & Real-Time Aging', description: 'ASTM F1980 accelerated aging with paired real-time aging to support one-year and multi-year shelf-life claims.', href: '/tests/astm-f1980', icon: '\u{23F1}\u{FE0F}' },
  { title: 'Sterile Barrier Integrity', description: 'Dye penetration (F1929), bubble leak (F2096), and visual inspection (F1886) to confirm sterile barrier integrity.', href: '/tests/astm-f1929', icon: '\u{1F6E1}\u{FE0F}' },
  { title: 'Seal Strength & Burst', description: 'Peel testing per ASTM F88 and burst testing per ASTM F1140 to verify sealing process capability.', href: '/tests/astm-f88', icon: '\u{1F4AA}' },
  { title: 'ISO 11607 Validation Programs', description: 'Complete ISO 11607-1 and ISO 11607-2 audit-ready validation programs for sterile barrier systems.', href: '/standards/iso-11607', icon: '\u{2705}' },
  { title: 'Sterilization-to-Test Workflow', description: 'Devices sterilized by Boulder Sterilization (EO or CD) transfer directly into package testing on the same campus.', href: '/about', icon: '\u{1F3ED}' },
];

const standardBadges = [
  { name: 'ISO 11607', href: '/standards/iso-11607', description: 'Sterile barrier validation' },
  { name: 'ISTA 3A', href: '/tests/ista-3a', description: 'Parcel delivery simulation' },
  { name: 'ASTM D4169', href: '/tests/astm-d4169', description: 'Distribution simulation' },
  { name: 'ASTM F1980', href: '/tests/astm-f1980', description: 'Accelerated aging' },
  { name: 'ASTM F88', href: '/tests/astm-f88', description: 'Seal strength / peel' },
  { name: 'ASTM F1929', href: '/tests/astm-f1929', description: 'Dye penetration' },
  { name: 'ASTM F2096', href: '/tests/astm-f2096', description: 'Bubble leak' },
  { name: 'ASTM F1140', href: '/tests/astm-f1140', description: 'Burst testing' },
  { name: 'ASTM F1886', href: '/tests/astm-f1886', description: 'Visual seal inspection' },
  { name: 'ASTM D4332', href: '/tests/astm-d4332', description: 'Package conditioning' },
];

const workflowSteps = [
  { step: 1, title: 'Sample Intake', desc: 'Receipt, photography, sample ID assignment, conditioning per ASTM D4332.' },
  { step: 2, title: 'Sterilization (Optional)', desc: 'EO or chlorine dioxide via Boulder Sterilization, on the same campus.' },
  { step: 3, title: 'Accelerated Aging', desc: 'ASTM F1980-driven cycles in calibrated temperature/humidity chambers.' },
  { step: 4, title: 'Distribution Simulation', desc: 'ASTM D4169 or ISTA 3A/2A: drop, vibration, compression, shock.' },
  { step: 5, title: 'Integrity Verification', desc: 'Dye penetration (F1929), bubble leak (F2096), seal strength (F88), visual inspection (F1886).' },
  { step: 6, title: 'Validated Report', desc: 'Audit-ready report mapped to ISO 11607-1/-2 and your DHF.' },
];

const whyBoulder = [
  { title: 'Co-located with sterilization', desc: 'Devices sterilized by Boulder Sterilization (EO or chlorine dioxide) move directly to package testing without leaving the campus.' },
  { title: 'One protocol, one report, one quality system', desc: 'Distribution, aging, and integrity testing share documentation, sample IDs, and chain of custody under the Boulder BioMed quality system.' },
  { title: 'Built for Medical Device Companies Who Need Results, Not Round Trips', desc: 'Medical device companies across the country have sent packaging samples to California or Minnesota for validation testing. Boulder Package Testing changes that equation. Co-located with EO and chlorine dioxide sterilization on a single Boulder, Colorado campus, we eliminate re-sterilization risk, reduce transit time, and maintain an unbroken chain of custody from sterilization through final validated report.' },
  { title: 'Backed by the Boulder BioMed family', desc: 'Engineering and design (Boulder iQ), regulatory and quality (Boulder RA/QA), microbiology (Boulder BioLabs), sterilization, and now package testing.' },
];

const testimonials = [
  {
    quote:
      "Jim's expertise caught something our internal team had missed entirely. By taking a half-inch off our tray length, we went from needing a large, custom sealing machine to a standard off-the-shelf sealer — and our package shifted to a standard off-the-shelf pouch size. The savings on tooling alone paid for the validation program.",
    role: 'Vice President of Operations',
    company: 'Colorado orthopedic device startup',
  },
  {
    quote:
      'We had budgeted for tray tooling and a full thermoforming qualification. Boulder walked us through why a card-and-pouch configuration would work for our device geometry — and get us to market in half the time at a fraction of the cost. We were shipping product four months sooner than our original plan.',
    role: 'CEO',
    company: 'Early-stage surgical device company',
  },
  {
    quote:
      'Before we ran a single test, Boulder reviewed our package design and identified three issues that would have caused us to fail distribution testing. By the time we ran samples, we already knew the design was right. We passed on the first run.',
    role: 'Packaging Engineer',
    company: 'IVD manufacturer',
  },
];

const homeFaqs = [
  { question: 'What is ISO 11607 and what testing does it require?', answer: 'ISO 11607 is the global consensus validation standard for terminally sterilized medical device packaging. Part 1 covers requirements for materials, sterile barrier systems, and packaging systems. Part 2 covers validation of forming, sealing, and assembly processes. A typical ISO 11607 program includes package conditioning (ASTM D4332), distribution simulation (ASTM D4169 or an ISTA profile such as 3A), accelerated aging (ASTM F1980), seal strength (ASTM F88), visual inspection of seals (ASTM F1886), dye penetration (ASTM F1929), and bubble or gross leak testing (ASTM F2096).' },
  { question: 'What is the difference between ISTA 3A and ASTM D4169?', answer: 'Both are recognized distribution test schemes. ASTM D4169 is a flexible framework where the manufacturer selects assurance levels and hazard sequences. ISTA 3A is a prescriptive profile for packaged products of 150 lb or less shipped through parcel-delivery networks. Both are accepted for ISO 11607 distribution simulation.' },
  { question: 'What is ASTM F1980 accelerated aging?', answer: 'ASTM F1980 uses elevated temperature to simulate the effect of time on a sterile barrier system. Using a Q10 of 2.0, one year of real-time shelf life can be simulated in roughly 52 days at 55 degrees C.' },
  { question: 'How long does a standard packaging validation take?', answer: 'For a standard one-year shelf life claim using ASTM F1980 accelerated aging at 55 degrees C, end-to-end turnaround is typically 8 to 12 weeks. Each additional year of shelf life adds roughly four weeks.' },
  { question: 'Is Boulder Package Testing accredited?', answer: 'Boulder Package Testing operates ISTA-aligned and ISO 17025-aligned protocols under the Boulder BioMed ISO 13485 quality management system. Full ISTA certification and ISO 17025 accreditation are in progress.' },
  { question: 'What makes you different from other contract labs?', answer: 'We are the only US package testing lab co-located with EO and chlorine dioxide sterilization. One chain of custody, one quality system, and faster turnaround compared to shipping samples between separate facilities.' },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(homeFaqs)) }}
      />

      <Hero />

      {/* Stats Row */}
      <section className="bg-white py-12 border-b border-gray-medium/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal">8-12 Weeks</div>
              <div className="text-sm text-navy/60 mt-1">Typical turnaround for 1-year shelf life</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal">10+</div>
              <div className="text-sm text-navy/60 mt-1">ASTM and ISTA test methods</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal">5 Companies</div>
              <div className="text-sm text-navy/60 mt-1">One campus, one quality system</div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Badges */}
      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy text-center mb-2">Test Methods & Standards</h2>
          <p className="text-center text-navy/60 mb-8">Every standard referenced in a typical ISO 11607 validation program.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {standardBadges.map((badge) => (
              <StandardBadge key={badge.href} {...badge} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy text-center mb-2">Our Services</h2>
          <p className="text-center text-navy/60 mb-8">Complete package validation under one roof.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      
      {/* Sister-site cross-link */}
      <section className="bg-white pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-light border border-gray-medium/20 rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 border-l-4 border-l-teal">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-navy mb-1">Need sterility, bioburden, or endotoxin testing too?</h3>
              <p className="text-sm text-navy/70">Microbiology testing â€” sterility, bioburden, method suitability, LAL/endotoxin, EO and CD residuals â€” is run by our sister company Boulder BioLabs on the same campus. Samples move between the labs without leaving the campus.</p>
            </div>
            <a href="https://boulderbiolabs.com/" target="_blank" rel="noopener" className="shrink-0 inline-block bg-teal text-white px-5 py-2.5 rounded font-semibold text-sm hover:bg-teal/90 transition-colors whitespace-nowrap">Visit Boulder BioLabs &rarr;</a>
          </div>
        </div>
      </section>

{/* Why Boulder */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Why Boulder Package Testing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyBoulder.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-teal/20 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-teal rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy text-center mb-2">What Our Clients Say</h2>
          <p className="text-center text-navy/60 mb-10">Anonymized client feedback from medical device companies we have supported.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <figure key={i} className="bg-white border border-gray-medium/20 rounded-lg p-6 flex flex-col">
                <blockquote className="text-sm text-navy/80 leading-relaxed flex-1">
                  <p className="text-teal text-3xl leading-none mb-2">&ldquo;</p>
                  {t.quote}
                </blockquote>
                <figcaption className="mt-4 pt-4 border-t border-gray-medium/20 text-sm">
                  <span className="font-semibold text-navy">{t.role}</span>
                  <br />
                  <span className="text-navy/60">{t.company}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy text-center mb-2">Chain of Custody Workflow</h2>
          <p className="text-center text-navy/60 mb-8">Six steps from sample intake to validated report.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-teal text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">{step.title}</h3>
                  <p className="text-sm text-navy/70">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Image src="/img/sterilization-to-test-transfer.png" alt="Chain of custody - sterilized devices transferred from sterilization to package testing on one campus" width={1600} height={900} sizes="(max-width: 1280px) 100vw, 1280px" loading="lazy" className="w-full rounded-lg shadow-lg h-auto" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Family Strip */}
      <FamilyStrip />

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {homeFaqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-medium/20 pb-6">
                <h3 className="font-semibold text-navy mb-2">{faq.question}</h3>
                <p className="text-sm text-navy/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-navy text-center mb-2">Start Your Validation Project</h2>
            <p className="text-center text-navy/60 mb-8">Tell us about your device and packaging. We will propose a test plan within one business day.</p>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
