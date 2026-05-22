export interface Article {
  slug: string;
  title: string;
  description: string;
  datePublished: string; // ISO date
  related: string[]; // related article slugs
}

export const articles: Article[] = [
  {
    slug: 'iso-11607-packaging-validation-mistakes',
    title: 'ISO 11607 Packaging Validation: What Medical Device Companies Actually Get Wrong',
    description:
      'The most common ISO 11607-1 and ISO 11607-2 packaging validation mistakes — and how to avoid them on your next submission.',
    datePublished: '2026-05-01',
    related: ['packaging-design-validation-cost-drivers', 'dhf-packaging-validation-documentation', 'medical-device-packaging-validation-cost'],
  },
  {
    slug: 'ista-3a-vs-astm-d4169',
    title: 'ISTA 3A vs. ASTM D4169: Which Distribution Test Does Your Medical Device Package Need?',
    description:
      'A practical comparison of ISTA 3A and ASTM D4169 distribution simulation for medical device packaging validation.',
    datePublished: '2026-05-01',
    related: ['astm-f1980-accelerated-aging', 'sterile-barrier-integrity-test-battery', 'iso-11607-packaging-validation-mistakes'],
  },
  {
    slug: 'astm-f1980-accelerated-aging',
    title: 'ASTM F1980 Accelerated Aging: The Math Behind Your Shelf Life Claim',
    description:
      'How the Arrhenius equation, Q10 factors, and 55°C aging chambers actually translate into a defensible shelf-life claim for your sterile medical device.',
    datePublished: '2026-05-01',
    related: ['sterile-barrier-integrity-test-battery', 'ista-3a-vs-astm-d4169', 'medical-device-packaging-validation-cost'],
  },
  {
    slug: 'packaging-design-validation-cost-drivers',
    title: 'Packaging Design for Sterile Medical Devices: 7 Decisions That Determine Your Validation Cost',
    description:
      'Seven early packaging design decisions — material, geometry, sealer, configuration — that drive validation cost more than any other factor.',
    datePublished: '2026-05-01',
    related: ['medical-device-packaging-validation-cost', 'when-to-involve-package-testing-lab', 'iso-11607-packaging-validation-mistakes'],
  },
  {
    slug: 'medical-device-packaging-validation-cost',
    title: 'What Does Medical Device Packaging Validation Actually Cost?',
    description:
      'A transparent breakdown of medical device packaging validation costs: protocol development, test execution, aging, distribution, and reporting.',
    datePublished: '2026-05-01',
    related: ['packaging-design-validation-cost-drivers', 'when-to-involve-package-testing-lab', 'dhf-packaging-validation-documentation'],
  },
  {
    slug: 'sterile-barrier-integrity-test-battery',
    title: 'Seal Strength, Burst Testing, and Visual Inspection: Understanding Your Sterile Barrier Integrity Test Battery',
    description:
      'ASTM F88, F1140, F1929, F2096, and F1886 — what each test measures, when to run them, and how they fit together in an ISO 11607 validation.',
    datePublished: '2026-05-01',
    related: ['astm-f1980-accelerated-aging', 'iso-11607-packaging-validation-mistakes', 'ista-3a-vs-astm-d4169'],
  },
  {
    slug: 'when-to-involve-package-testing-lab',
    title: 'When to Involve Your Package Testing Lab: The Right Answer Might Surprise You',
    description:
      'Most medical device companies bring in a package testing lab too late. Here is when to actually engage — and why earlier is cheaper.',
    datePublished: '2026-05-01',
    related: ['packaging-design-validation-cost-drivers', 'medical-device-packaging-validation-cost', 'iso-11607-packaging-validation-mistakes'],
  },
  {
    slug: 'dhf-packaging-validation-documentation',
    title: 'Medical Device Packaging Validation: Building the DHF Chapter Your Auditor Will Actually Like',
    description:
      'How to structure the packaging validation chapter of your Design History File so 510(k) reviewers and Notified Body auditors find what they need.',
    datePublished: '2026-05-01',
    related: ['iso-11607-packaging-validation-mistakes', 'medical-device-packaging-validation-cost', 'sterile-barrier-integrity-test-battery'],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
