'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/tests/ista-3a', label: 'Test Methods', children: [
    { href: '/tests/ista-3a', label: 'ISTA 3A' },
    { href: '/tests/astm-d4169', label: 'ASTM D4169' },
    { href: '/tests/astm-f1980', label: 'ASTM F1980' },
    { href: '/tests/astm-f88', label: 'ASTM F88' },
    { href: '/tests/astm-f1929', label: 'ASTM F1929' },
    { href: '/tests/astm-f2096', label: 'ASTM F2096' },
    { href: '/tests/astm-f1140', label: 'ASTM F1140' },
    { href: '/tests/astm-f1886', label: 'ASTM F1886' },
    { href: '/tests/astm-d4332', label: 'ASTM D4332' },
    { href: '/standards/iso-11607', label: 'ISO 11607' },
  ]},
  { href: '/industries/orthopedic', label: 'Industries', children: [
    { href: '/industries/orthopedic', label: 'Orthopedic' },
    { href: '/industries/cardiovascular', label: 'Cardiovascular' },
    { href: '/industries/ivd', label: 'In Vitro Diagnostics' },
    { href: '/industries/dental', label: 'Dental' },
  ]},
  { href: '/about', label: 'About' },
  { href: '/family', label: 'Our Family' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-navy text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img src="/logo-on-dark.svg" alt="Boulder Package Testing" className="h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium hover:text-teal transition-colors rounded"
                >
                  {link.label}
                  {link.children && <span className="ml-1 text-xs">&#9662;</span>}
                </Link>
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 bg-white text-navy shadow-lg rounded-md py-2 min-w-[200px] border border-gray-medium">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-light transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="ml-4 bg-teal text-white px-4 py-2 rounded text-sm font-semibold hover:bg-teal/90 transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 pb-4">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="block px-4 py-2 text-sm font-medium hover:text-teal"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-6">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-1.5 text-xs text-white/70 hover:text-teal"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-4 pt-2">
            <Link
              href="/contact"
              className="block bg-teal text-white px-4 py-2 rounded text-sm font-semibold text-center"
              onClick={() => setMobileOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
