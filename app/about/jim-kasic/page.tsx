import type { Metadata } from 'next';
import Link from 'next/link';
import FamilyStrip from '@/components/FamilyStrip';
import { breadcrumbSchema, personSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Jim Kasic — Founder, Boulder Package Testing',
  description: 'Jim Kasic is the founder of Boulder Package Testing and CEO of the Boulder BioMed family of companies. Medical device packaging, ISO 13485 QMS, sterile barrier system design, and ISO 11607 validation expertise.',
  alternates: { canonical: 'https://boulderpackagetest.com/about/jim-kasic' },
  openGraph: {
    title: 'Jim Kasic — Founder, Boulder Package Testing',
    description: 'Founder of Boulder Package Testing and CEO of the Boulder BioMed family of companies.',
    url: 'https://boulderpackagetest.com/about/jim-kasic',
    type: 'profile',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const JIM_DESCRIPTION =
  'Jim Kasic is the founder of Boulder Package Testing and CEO of the Boulder BioMed family of companies. He has designed medical device packages for more than two dozen products across orthopedic, cardiovascular, in vitro diagnostic, and surgical device categories. Jim has authored ISO 13485-compliant quality management systems for medical device manufacturers ranging from early-stage startups to established OEMs, and holds deep expertise in sterile barrier system design, ISO 11607 validation, and medical device regulatory affairs. He is a member of AAMI and has extensive experience navigating FDA 510(k) submissions and CE technical file reviews for Class II medical devices.';

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            personSchema({
              name: 'Jim Kasic',
              jobTitle: 'Founder, Boulder Package Testing; CEO, Boulder BioMed',
              description: JIM_DESCRIPTION,
              url: '/about/jim-kasic',
              knowsAbout: [
                'Medical device packaging',
                'Sterile barrier system design',
                'ISO 11607 validation',
                'ISO 13485 quality management systems',
                'FDA 510(k) submissions',
                'CE technical file review',
                'Medical device regulatory affairs',
                'EO sterilization',
                'Chlorine dioxide sterilization',
              ],
              memberOf: ['AAMI'],
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'About', url: '/about' },
              { name: 'Jim Kasic', url: '/about/jim-kasic' },
            ]),
          ),
        }}
      />

      <nav className="bg-gray-light py-3 border-b border-gray-medium/20" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-navy/60">
            <li>
              <Link href="/" className="hover:text-teal">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/about" className="hover:text-teal">
                About
              </Link>
            </li>
            <li>/</li>
            <li className="text-navy font-medium">Jim Kasic</li>
          </ol>
        </div>
      </nav>

      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Jim Kasic — Founder, Boulder Package Testing</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Founder of Boulder Package Testing and CEO of the Boulder BioMed family of companies.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-10">
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">About Jim</h2>
            <p className="text-navy/80 leading-relaxed">{JIM_DESCRIPTION}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Areas of Expertise</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-navy/80 text-sm">
              <li>&middot; Sterile barrier system design</li>
              <li>&middot; ISO 11607-1 / -2 validation</li>
              <li>&middot; ISO 13485 quality management systems</li>
              <li>&middot; FDA 510(k) submissions</li>
              <li>&middot; CE technical file review</li>
              <li>&middot; Class II medical device regulatory affairs</li>
              <li>&middot; EO sterilization</li>
              <li>&middot; Chlorine dioxide sterilization</li>
              <li>&middot; Medical device packaging design</li>
              <li>&middot; Distribution simulation (ISTA 3A, ASTM D4169)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Affiliations</h2>
            <p className="text-navy/80 leading-relaxed">
              Member, Association for the Advancement of Medical Instrumentation (AAMI).
            </p>
          </section>

          <section className="bg-navy rounded-lg p-8 text-white">
            <h2 className="text-xl font-bold mb-2">Talk to Jim About Your Project</h2>
            <p className="text-white/70 mb-4">
              Jim personally reviews every new validation program scoped at Boulder Package Testing. Tell us about your device and packaging.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-teal text-white px-6 py-3 rounded font-semibold hover:bg-teal/90 transition-colors"
            >
              Request a Quote
            </Link>
          </section>
        </div>
      </div>

      <FamilyStrip />
    </>
  );
}
