import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, getArticleBySlug } from '@/content/articles';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: 'Article not found' };
  }
  const url = `https://boulderpackagetest.com/resources/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: 'article',
      publishedTime: article.datePublished,
      authors: ['https://boulderpackagetest.com/about/jim-kasic'],
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = article.related
    .map((s) => getArticleBySlug(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const articleUrl = `/resources/${article.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline: article.title,
              description: article.description,
              url: articleUrl,
              datePublished: article.datePublished,
              authorName: 'Jim Kasic',
              authorUrl: '/about/jim-kasic',
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Resources', url: '/resources' },
              { name: article.title, url: articleUrl },
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
            <li>
              <Link href="/resources" className="hover:text-teal">
                Resources
              </Link>
            </li>
            <li>/</li>
            <li className="text-navy font-medium truncate max-w-[40ch]">{article.title}</li>
          </ol>
        </div>
      </nav>

      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-teal font-semibold uppercase tracking-wide mb-3">
            {formatDate(article.datePublished)} &middot; By{' '}
            <Link href="/about/jim-kasic" className="underline hover:text-white">
              Jim Kasic
            </Link>
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold mb-3 max-w-4xl">{article.title}</h1>
          <p className="text-lg text-white/80 max-w-3xl">{article.description}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <div className="prose prose-navy max-w-none">
              <p className="text-navy/80 leading-relaxed">[CONTENT]</p>
            </div>

            {related.length > 0 && (
              <section className="mt-12 border-t border-gray-medium/20 pt-8">
                <h2 className="text-xl font-bold text-navy mb-4">Related Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {related.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/resources/${rel.slug}`}
                      className="block border border-gray-medium/20 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <p className="text-xs text-teal font-semibold uppercase tracking-wide mb-1">
                        {formatDate(rel.datePublished)}
                      </p>
                      <h3 className="text-sm font-semibold text-navy leading-snug">{rel.title}</h3>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section className="mt-12 bg-navy rounded-lg p-8 text-white">
              <h2 className="text-xl font-bold mb-2">Ready to Discuss Your Validation Project?</h2>
              <p className="text-white/70 mb-4">
                Boulder Package Testing executes ISO 11607-1/-2 validation programs co-located with EO and chlorine dioxide sterilization. Talk to us about your device.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-teal text-white px-6 py-3 rounded font-semibold hover:bg-teal/90 transition-colors"
              >
                Request a Quote
              </Link>
            </section>
          </article>

          <aside className="space-y-6">
            <div className="bg-gray-light rounded-lg p-6">
              <h3 className="font-semibold text-navy mb-3">About the Author</h3>
              <p className="text-sm text-navy/70 mb-3">
                Jim Kasic is the founder of Boulder Package Testing and CEO of the Boulder BioMed family of companies.
              </p>
              <Link href="/about/jim-kasic" className="text-sm text-teal font-medium hover:underline">
                Read full bio &rarr;
              </Link>
            </div>

            <div className="bg-navy rounded-lg p-6 text-white">
              <h3 className="font-semibold mb-2">Talk to Our Team</h3>
              <p className="text-sm text-white/70 mb-3">
                Discuss your packaging validation scope and timeline.
              </p>
              <p className="text-sm">
                <a href="tel:303-531-1238" className="text-teal hover:underline">
                  303-531-1238
                </a>
              </p>
              <p className="text-sm">
                <a href="mailto:info@boulderpackagetest.com" className="text-teal hover:underline">
                  info@boulderpackagetest.com
                </a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
