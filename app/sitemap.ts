import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://boulderpackagetesting.com';
  const now = new Date();

  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/family', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.8, changeFrequency: 'monthly' as const },
    // Standards
    { url: '/standards/iso-11607', priority: 0.9, changeFrequency: 'monthly' as const },
    // Test methods
    { url: '/tests/ista-3a', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/tests/astm-d4169', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/tests/astm-f1980', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/tests/astm-f88', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/tests/astm-f1929', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/tests/astm-f2096', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/tests/astm-f1140', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/tests/astm-f1886', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/tests/astm-d4332', priority: 0.7, changeFrequency: 'monthly' as const },
    // Industries
    { url: '/industries/orthopedic', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/industries/cardiovascular', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/industries/ivd', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/industries/dental', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
