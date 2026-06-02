import Link from 'next/link';
import BoulderLockup from '@/components/BoulderLockup';
import { TrackedTel, TrackedExtLink } from '@/components/TrackedLinks';

// Standard locked family order: BioMed · iQ · Sterilization · RA/QA · BioLabs · Package Testing · Applied AI.
// The current site (Package Testing) renders as an active internal link to "/".
const familyCompanies = [
  { name: 'Boulder BioMed', url: 'https://boulderbiomed.com', current: false },
  { name: 'Boulder iQ', url: 'https://boulderiq.com', current: false },
  { name: 'Boulder Sterilization', url: 'https://bouldersterilization.com', current: false },
  { name: 'Boulder RA/QA', url: 'https://boulderraqa.com', current: false },
  { name: 'Boulder BioLabs', url: 'https://boulderbiolabs.com', current: false },
  { name: 'Boulder Package Testing', url: '/', current: true },
  { name: 'Boulder Applied AI', url: 'https://boulderappliedai.com', current: false },
];

const testLinks = [
  { href: '/standards/iso-11607', label: 'ISO 11607' },
  { href: '/tests/ista-3a', label: 'ISTA 3A' },
  { href: '/tests/astm-d4169', label: 'ASTM D4169' },
  { href: '/tests/astm-f1980', label: 'ASTM F1980' },
  { href: '/tests/astm-f88', label: 'ASTM F88' },
  { href: '/tests/astm-f1929', label: 'ASTM F1929' },
  { href: '/tests/astm-f2096', label: 'ASTM F2096' },
];

const industryLinks = [
  { href: '/industries/orthopedic', label: 'Orthopedic Devices' },
  { href: '/industries/cardiovascular', label: 'Cardiovascular' },
  { href: '/industries/ivd', label: 'In Vitro Diagnostics' },
  { href: '/industries/dental', label: 'Dental Devices' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="mb-4">
              <BoulderLockup word="Package Testing" variant="dark" size={38} />
            </div>
            <p className="text-sm text-white/70 mb-4">
              Medical device package validation under ISO 11607-1/-2, ASTM D4169, ASTM F1980, and the ISTA test series. A member of the Boulder BioMed family of companies.
            </p>
            <div className="text-sm text-white/70 space-y-1">
              <p>5375 Western Ave.</p>
              <p>Boulder, CO 80301</p>
              <p><TrackedTel number="3035311238" display="303-531-1238" location="footer" className="hover:text-teal transition-colors" /></p>
              <p><a href="mailto:info@boulderpackagetest.com" className="hover:text-teal transition-colors">info@boulderpackagetest.com</a></p>
            </div>
          </div>

          {/* Test Methods */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-teal">Test Methods</h3>
            <ul className="space-y-2">
              {testLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-teal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-teal">Industries</h3>
            <ul className="space-y-2">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-teal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <h3 className="text-sm font-semibold mb-2 text-teal">Company</h3>
              </li>
              <li><Link href="/about" className="text-sm text-white/70 hover:text-teal transition-colors">About</Link></li>
              <li><Link href="/about/jim-kasic" className="text-sm text-white/70 hover:text-teal transition-colors">Jim Kasic — Founder</Link></li>
              <li><Link href="/family" className="text-sm text-white/70 hover:text-teal transition-colors">Our Family</Link></li>
              <li><Link href="/resources" className="text-sm text-white/70 hover:text-teal transition-colors">Resources</Link></li>
              <li><Link href="/faq" className="text-sm text-white/70 hover:text-teal transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 hover:text-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Boulder BioMed Family */}
          <div>
            <div className="mb-3">
              <BoulderLockup word="BioMed" variant="dark" size={26} />
            </div>
            <h3 className="text-xs font-semibold mb-4 text-teal uppercase tracking-wide">Family of Companies</h3>
            <ul className="space-y-2">
              {familyCompanies.map((company) =>
                company.current ? (
                  <li key={company.name}>
                    <Link
                      href={company.url}
                      className="text-sm text-teal font-semibold hover:underline transition-colors"
                    >
                      {company.name} &rarr;
                    </Link>
                  </li>
                ) : (
                  <li key={company.name}>
                    <TrackedExtLink
                      href={company.url}
                      destination={company.name.toLowerCase().replace(/\s+/g, '-').replace(/[/]/g, '-')}
                      location="footer-family"
                      className="text-sm text-white/70 hover:text-teal transition-colors"
                    >
                      {company.name} &rarr;
                    </TrackedExtLink>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Compliance disclosure */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <p className="text-xs text-white/50 mb-4">
            Boulder Package Testing operates ISTA-aligned and ISO 17025-aligned protocols under the Boulder BioMed ISO 13485 quality management system. Full ISTA certification and ISO 17025 accreditation are in progress.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Boulder Package Testing. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              ISO 11607 &middot; ASTM D4169 &middot; ASTM F1980 &middot; ISTA 3A
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
