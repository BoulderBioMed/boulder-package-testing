import type { Metadata } from 'next';
import TestPageLayout from '@/components/TestPageLayout';
import { standards } from '@/content/standards';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema';

const standard = standards.find((s) => s.slug === 'astm-f1980')!;

export const metadata: Metadata = {
  title: standard.metaTitle,
  description: standard.metaDescription,
  alternates: { canonical: 'https://boulderpackagetest.com/tests/astm-f1980' },
  openGraph: {
    title: standard.metaTitle,
    description: standard.metaDescription,
    url: 'https://boulderpackagetest.com/tests/astm-f1980',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(standard.fullName, standard.description, '/tests/astm-f1980')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(standard.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Test Methods', url: '/tests/ista-3a' }, { name: standard.name, url: '/tests/astm-f1980' }])) }} />
      <TestPageLayout standard={standard} />
    </>
  );
}
