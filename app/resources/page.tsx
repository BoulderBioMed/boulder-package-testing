import type { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '@/content/articles';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Resources — Medical Device Packaging Validation',
  description:
    'Articles and guides on ISO 11607 packaging validation, sterile barrier testing, ASTM F1980 accelerated aging, distribution simulation, and shelf-life claims.',
  alternates: { canonical: 'https://boulderpackagetest.com/resources' },
  openGraph: {
    title: 'Resources — Medical Device Packaging Validation',
    description: 'Articles and guides on ISO 11607 packaging validation and sterile barrier testing.',
    url: 'https://boulderpackagetest.com/resources',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Resources', url: '/resources' },
            ]),
          ),
        }}
      />

      <nav className="bg-gray-light py-3 border-b border-gray-medium/20" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-navy/60">
            <li>
              <Link href="/" className="hover:text-teal">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-navy font-medium">Resources</li>
          </ol>
        </div>
      </nav>

      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Resources</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Articles and guides on ISO 11607 packaging validation, sterile barrier testing, accelerated aging, and distribution simulation for medical device manufacturers.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-white border border-gray-medium/20 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col"
            >
              <p className="text-xs text-teal font-semibold uppercase tracking-wide mb-2">
                {formatDate(article.datePublished)} &middot; By Jim Kasic
              </p>
              <h2 className="text-lg font-bold text-navy mb-2 leading-snug">
                <Link href={`/resources/${article.slug}`} className="hover:text-teal transition-colors">
                  {article.title}
                </Link>
              </h2>
              <p className="text-sm text-navy/70 mb-4 flex-1">{article.description}</p>
              <Link
                href={`/resources/${article.slug}`}
                className="text-sm text-teal font-medium hover:underline mt-auto"
              >
                Read article &rarr;
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-gray-light rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold text-navy mb-2">Need a Custom Validation Program?</h2>
          <p className="text-navy/70 mb-4 max-w-2xl mx-auto">
            Our published guides cover the framework. For a validation program scoped to your device, packaging, and shelf-life claim, talk to our team directly.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal text-white px-6 py-3 rounded font-semibold hover:bg-teal/90 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
