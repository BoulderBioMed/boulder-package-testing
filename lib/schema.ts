const SITE_URL = 'https://boulderpackagetesting.com';
const ORG_NAME = 'Boulder Package Testing';
const PARENT_ORG = 'Boulder BioMed';
const ADDRESS = {
  streetAddress: '5421 Western Ave.',
  addressLocality: 'Boulder',
  addressRegion: 'CO',
  postalCode: '80301',
  addressCountry: 'US',
};
const GEO = { latitude: 40.0274, longitude: -105.2519 };
const PHONE = '303-531-1238';
const EMAIL = 'info@boulderpackagetesting.com';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORG_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    parentOrganization: {
      '@type': 'Organization',
      name: PARENT_ORG,
      url: 'https://boulderbiomed.com',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE,
      email: EMAIL,
      contactType: 'sales',
    },
    sameAs: [],
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: ORG_NAME,
    description: 'Medical device package validation lab executing ISTA-aligned and ISO 17025-aligned test methods. Co-located with EO and chlorine dioxide sterilization.',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    image: `${SITE_URL}/og-image.png`,
    telephone: PHONE,
    email: EMAIL,
    address: { '@type': 'PostalAddress', ...ADDRESS },
    geo: { '@type': 'GeoCoordinates', ...GEO },
    openingHours: 'Mo-Fr 08:00-17:00',
    priceRange: '$$',
    parentOrganization: {
      '@type': 'Organization',
      name: PARENT_ORG,
      url: 'https://boulderbiomed.com',
    },
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      '@type': 'Organization',
      name: ORG_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
