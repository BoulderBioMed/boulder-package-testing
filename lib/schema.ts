const SITE_URL = 'https://boulderpackagetest.com';
const ORG_NAME = 'Boulder Package Testing';
const PARENT_ORG = 'Boulder BioMed';
const ADDRESS = {
  streetAddress: '5375 Western Ave.',
  addressLocality: 'Boulder',
  addressRegion: 'CO',
  postalCode: '80301',
  addressCountry: 'US',
};
const GEO = { latitude: 40.0274, longitude: -105.2519 };
const PHONE = '303-531-1238';
const EMAIL = 'info@boulderpackagetest.com';

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

export function personSchema(person: {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  worksFor?: string;
  knowsAbout?: string[];
  memberOf?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    url: `${SITE_URL}${person.url}`,
    worksFor: {
      '@type': 'Organization',
      name: person.worksFor ?? ORG_NAME,
      url: SITE_URL,
    },
    ...(person.knowsAbout ? { knowsAbout: person.knowsAbout } : {}),
    ...(person.memberOf
      ? { memberOf: person.memberOf.map((name) => ({ '@type': 'Organization', name })) }
      : {}),
  };
}

export function articleSchema(article: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    url: `${SITE_URL}${article.url}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: {
      '@type': 'Person',
      name: article.authorName,
      url: `${SITE_URL}${article.authorUrl}`,
    },
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${article.url}`,
    },
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
