import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-navy text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Sterile barrier and distribution testing, co-located with sterilization.
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            Boulder Package Testing is a contract medical device package validation lab executing ISTA-aligned test methods and ISO 17025-aligned protocols. We are the only US package testing lab co-located with EO and chlorine dioxide sterilization — on the same Boulder, Colorado campus.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-teal text-white px-6 py-3 rounded font-semibold hover:bg-teal/90 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/tests/ista-3a"
              className="border border-white/30 text-white px-6 py-3 rounded font-semibold hover:bg-white/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
