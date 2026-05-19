import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'The Boulder BioMed Family of Companies',
  description: 'Five companies, one campus, one quality system. Boulder iQ, Boulder Sterilization, Boulder RA/QA, Boulder BioLabs, and Boulder Package Testing.',
  alternates: { canonical: 'https://boulderpackagetesting.com/family' },
  openGraph: { title: 'The Boulder BioMed Family | Boulder Package Testing', description: 'Five medical device companies on one Boulder, CO campus.', url: 'https://boulderpackagetesting.com/family', type: 'website', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
};

const companies = [
  {
    name: 'Boulder iQ',
    url: 'https://boulderiq.com',
    description: 'Engineering, Design & Contract Manufacturing',
    detail: 'Full-service medical device development from concept through commercialization. Design controls, prototyping, verification and validation testing, and low-to-mid volume contract manufacturing — all under one quality system.',
  },
  {
    name: 'Boulder Sterilization',
    url: 'https://bouldersterilization.com',
    description: 'EO & Chlorine Dioxide Sterilization',
    detail: 'Contract sterilization services using both ethylene oxide (EO) and chlorine dioxide (CD). Boulder Sterilization operates the world\'s largest contract chlorine dioxide sterilization capacity, providing a validated alternative for EO-sensitive devices.',
  },
  {
    name: 'Boulder RA/QA',
    url: 'https://boulderraqa.com',
    description: 'Regulatory & Quality Consulting',
    detail: 'Regulatory strategy, 510(k) and CE marking submissions, quality management system development and auditing, and the AuditIQ platform for streamlined compliance management.',
  },
  {
    name: 'Boulder BioLabs',
    url: 'https://boulderbiolabs.com',
    description: 'Biological Testing & Microbiology',
    detail: 'Bioburden testing, sterility testing, bacterial endotoxin testing, and environmental monitoring for medical device manufacturers. Co-located with sterilization for integrated testing workflows.',
  },
  {
    name: 'Boulder Package Testing',
    url: 'https://boulderpackagetesting.com',
    description: 'Medical Device Package Validation',
    detail: 'Contract package testing lab executing ISTA-aligned test methods and ISO 17025-aligned protocols. Distribution simulation, accelerated aging, seal testing, and sterile barrier integrity — co-located with sterilization on the same campus.',
    current: true,
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Our Family', url: '/family' }])) }} />

      <nav className="bg-gray-light py-3 border-b border-gray-medium/20" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-navy/60">
            <li><Link href="/" className="hover:text-teal">Home</Link></li>
            <li>/</li>
            <li className="text-navy font-medium">Our Family</li>
          </ol>
        </div>
      </nav>

      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">The Boulder BioMed Family</h1>
          <p className="text-lg text-white/80 max-w-2xl">Five companies, one campus, one quality system. From design through sterilization and testing — everything your medical device needs under one roof.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-8">
          <p className="text-navy/80 leading-relaxed">
            The Boulder BioMed family of companies provides integrated services for medical device manufacturers. Located on a single campus in Boulder, Colorado, our five companies share one quality management system (ISO 13485), enabling seamless handoffs between design, manufacturing, sterilization, biological testing, and package validation.
          </p>

          {companies.map((co) => (
            <div key={co.name} className={`rounded-lg p-6 ${co.current ? 'bg-teal/10 border-2 border-teal' : 'bg-gray-light border border-gray-medium/20'}`}>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="text-lg font-bold text-navy">{co.name}</h2>
                  <p className="text-sm text-teal font-medium">{co.description}</p>
                </div>
                {co.current && <span className="text-xs bg-teal text-white px-2 py-1 rounded font-medium">You are here</span>}
              </div>
              <p className="text-navy/70 text-sm leading-relaxed mb-3">{co.detail}</p>
              {!co.current && (
                <a href={co.url} target="_blank" rel="noopener noreferrer" className="text-sm text-teal font-medium hover:underline">
                  Visit {co.name} &rarr;
                </a>
              )}
            </div>
          ))}

          <section className="bg-navy rounded-lg p-8 text-white mt-8">
            <h2 className="text-xl font-bold mb-2">Work With the Whole Family</h2>
            <p className="text-white/70 mb-4">Need more than package testing? Our integrated campus means your device can move from design to manufacturing to sterilization to package validation without leaving Boulder.</p>
            <Link href="/contact" className="inline-block bg-teal text-white px-6 py-3 rounded font-semibold hover:bg-teal/90 transition-colors">
              Contact Us
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
