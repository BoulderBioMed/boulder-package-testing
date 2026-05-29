import type { Metadata } from 'next';
import TestPageLayout from '@/components/TestPageLayout';
import { standards } from '@/content/standards';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema';

const standard = standards.find((s) => s.slug === 'astm-f1929')!;

export const metadata: Metadata = {
  title: standard.metaTitle,
  description: standard.metaDescription,
  alternates: { canonical: 'https://boulderpackagetest.com/tests/astm-f1929' },
  openGraph: { title: standard.metaTitle, description: standard.metaDescription, url: 'https://boulderpackagetest.com/tests/astm-f1929', type: 'website', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(standard.fullName, standard.description, '/tests/astm-f1929')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(standard.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Test Methods', url: '/tests/ista-3a' }, { name: standard.name, url: '/tests/astm-f1929' }])) }} />
      <TestPageLayout standard={standard} image="/img/bpt-sterile-barrier-dye-pen.png" imageAlt="ASTM F1929 sterile barrier dye penetration testing" />
    </>
  );
}
