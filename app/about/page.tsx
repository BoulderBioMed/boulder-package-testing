import type { Metadata } from 'next';
import Link from 'next/link';
import FamilyStrip from '@/components/FamilyStrip';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Boulder Package Testing',
  description: 'Boulder Package Testing is a contract medical device package validation lab, part of the Boulder BioMed family. Located in Boulder, CO.',
  alternates: { canonical: 'https://boulderpackagetest.com/about' },
  openGraph: { title: 'About Boulder Package Testing', description: 'Contract medical device package validation lab in Boulder, CO.', url: 'https://boulderpackagetest.com/about', type: 'website', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }])) }} />

      <nav className="bg-gray-light py-3 border-b border-gray-medium/20" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-navy/60">
            <li><Link href="/" className="hover:text-teal">Home</Link></li>
            <li>/</li>
            <li className="text-navy font-medium">About</li>
          </ol>
        </div>
      </nav>

      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">About Boulder Package Testing</h1>
          <p className="text-lg text-white/80 max-w-2xl">A contract medical device package validation lab, part of the Boulder BioMed family of companies.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-10">
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Our Mission</h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              Boulder Package Testing exists to give medical device manufacturers an expert partner for package validation without the round trips. We execute ISTA-aligned test methods and ISO 17025-aligned protocols under the Boulder BioMed ISO 13485 quality management system. Our unique advantage is co-location with Boulder Sterilization — the only US arrangement where EO and chlorine dioxide sterilization and package testing operate on the same campus.
            </p>
            <p className="text-navy/80 leading-relaxed">
              This means devices move from sterilization to distribution simulation, accelerated aging, and integrity testing without ever leaving our chain of custody. One protocol, one report, one quality system — the way package validation should work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Leadership</h2>
            <div className="bg-gray-light rounded-lg p-6">
              <h3 className="font-bold text-navy text-lg">Jim Kasic</h3>
              <p className="text-teal font-medium text-sm mb-3">Founder & Principal — AAMI Certified Industrial Sterilization Specialist</p>
              <p className="text-navy/80 leading-relaxed mb-4">
                Jim Kasic is the founder of the Boulder BioMed family of companies and an AAMI Certified Industrial Sterilization Specialist. With decades of experience in medical device manufacturing, sterilization, and quality systems, Jim established Boulder Package Testing to give medical device companies the only US lab co-located with EO and chlorine dioxide sterilization — eliminating the round trips, re-sterilization risk, and broken chain of custody that have long defined contract package validation.
              </p>
              <p className="text-navy/80 leading-relaxed mb-4">
                Jim&apos;s expertise spans the full lifecycle of medical device commercialization, from design and manufacturing (Boulder iQ) through regulatory and quality consulting (Boulder RA/QA), biological testing (Boulder BioLabs), and sterilization (Boulder Sterilization). This integrated perspective ensures that package validation programs are designed with the full regulatory and manufacturing context in mind.
              </p>
              <Link href="/about/jim-kasic" className="inline-block text-teal font-medium hover:underline">
                Read Jim&apos;s full bio &rarr;
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Location & Contact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-navy mb-2">Address</h3>
                <p className="text-navy/70 text-sm">
                  5375 Western Ave.<br />
                  Boulder, CO 80301<br />
                  United States
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-2">Contact</h3>
                <p className="text-navy/70 text-sm">
                  Phone: <a href="tel:303-531-1238" className="text-teal hover:underline">303-531-1238</a><br />
                  Email: <a href="mailto:info@boulderpackagetest.com" className="text-teal hover:underline">info@boulderpackagetest.com</a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Quality System</h2>
            <p className="text-navy/80 leading-relaxed">
              Boulder Package Testing operates under the Boulder BioMed ISO 13485 quality management system. All equipment is calibrated, all methods are procedure-controlled, and all testing is performed by trained personnel with documented competency. We are pursuing ISO 17025 accreditation and ISTA certification to further formalize our testing laboratory quality system.
            </p>
          </section>
        </div>
      </div>

      <FamilyStrip />
    </>
  );
}
