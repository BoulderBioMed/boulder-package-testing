import type { Metadata } from 'next';
import TestPageLayout from '@/components/TestPageLayout';
import { iso11607 } from '@/content/standards';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: iso11607.metaTitle,
  description: iso11607.metaDescription,
  alternates: { canonical: 'https://boulderpackagetesting.com/standards/iso-11607' },
  openGraph: { title: iso11607.metaTitle, description: iso11607.metaDescription, url: 'https://boulderpackagetesting.com/standards/iso-11607', type: 'website', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(iso11607.fullName, iso11607.description, '/standards/iso-11607')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(iso11607.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Standards', url: '/standards/iso-11607' }, { name: 'ISO 11607', url: '/standards/iso-11607' }])) }} />
      <TestPageLayout standard={iso11607} />
    </>
  );
}
