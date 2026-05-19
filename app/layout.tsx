import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { organizationSchema, localBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: {
    default: 'Boulder Package Testing | Medical Device Package Validation',
    template: '%s | Boulder Package Testing',
  },
  description: 'Medical device package validation lab executing ISTA-aligned test methods and ISO 17025-aligned protocols. Co-located with EO and chlorine dioxide sterilization in Boulder, CO.',
  metadataBase: new URL('https://boulderpackagetesting.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://boulderpackagetesting.com',
    siteName: 'Boulder Package Testing',
    title: 'Boulder Package Testing | Medical Device Package Validation',
    description: 'Sterile barrier and distribution testing, co-located with sterilization. ISO 11607, ASTM D4169, ASTM F1980, ISTA 3A.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Boulder Package Testing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boulder Package Testing | Medical Device Package Validation',
    description: 'Sterile barrier and distribution testing, co-located with sterilization.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://boulderpackagetesting.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
