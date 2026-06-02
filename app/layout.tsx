import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { FamilyBar } from '@/components/FamilyBar';
import { Analytics } from '@/components/Analytics';
import { organizationSchema, localBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: {
    default: 'Boulder Package Testing | Medical Device Package Validation',
    template: '%s | Boulder Package Testing',
  },
  description: 'Medical device package validation lab executing ISTA-aligned test methods and ISO 17025-aligned protocols. Co-located with EO and chlorine dioxide sterilization in Boulder, CO.',
  metadataBase: new URL('https://boulderpackagetest.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://boulderpackagetest.com',
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
  alternates: { canonical: 'https://boulderpackagetest.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap" rel="stylesheet" />
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
        <Analytics />
        <FamilyBar />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
