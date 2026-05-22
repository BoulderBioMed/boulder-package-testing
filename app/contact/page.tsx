import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Boulder Package Testing',
  description: 'Request a quote for medical device package validation. Distribution simulation, accelerated aging, seal testing, and sterile barrier integrity in Boulder, CO.',
  alternates: { canonical: 'https://boulderpackagetest.com/contact' },
  openGraph: { title: 'Contact Boulder Package Testing', description: 'Request a quote for medical device package validation.', url: 'https://boulderpackagetest.com/contact', type: 'website', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }])) }} />

      <nav className="bg-gray-light py-3 border-b border-gray-medium/20" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-navy/60">
            <li><Link href="/" className="hover:text-teal">Home</Link></li>
            <li>/</li>
            <li className="text-navy font-medium">Contact</li>
          </ol>
        </div>
      </nav>

      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-lg text-white/80 max-w-2xl">Tell us about your device and packaging. We will propose a test plan within one business day.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-navy mb-6">Request a Quote</h2>
            <QuoteForm />
          </div>

          <aside className="space-y-6">
            <div className="bg-gray-light rounded-lg p-6">
              <h3 className="font-semibold text-navy mb-3">Direct Contact</h3>
              <div className="space-y-3 text-sm text-navy/70">
                <div>
                  <p className="font-medium text-navy">Phone</p>
                  <a href="tel:303-531-1238" className="text-teal hover:underline">303-531-1238</a>
                </div>
                <div>
                  <p className="font-medium text-navy">Email</p>
                  <a href="mailto:info@boulderpackagetest.com" className="text-teal hover:underline">info@boulderpackagetest.com</a>
                </div>
              </div>
            </div>

            <div className="bg-gray-light rounded-lg p-6">
              <h3 className="font-semibold text-navy mb-3">Location</h3>
              <p className="text-sm text-navy/70">
                5375 Western Ave.<br />
                Boulder, CO 80301<br />
                United States
              </p>
              <p className="text-sm text-navy/70 mt-3">
                Hours: Monday - Friday, 8:00 AM - 5:00 PM MT
              </p>
            </div>

            <div className="bg-navy rounded-lg p-6 text-white">
              <h3 className="font-semibold mb-2">What to Include</h3>
              <ul className="text-sm text-white/70 space-y-2">
                <li>Device description and classification</li>
                <li>Package configuration (pouch, tray, box)</li>
                <li>Target standards (ISO 11607, ISTA 3A, etc.)</li>
                <li>Desired shelf-life claim</li>
                <li>Sterilization method (EO, CD, other)</li>
                <li>Sample availability timeline</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
