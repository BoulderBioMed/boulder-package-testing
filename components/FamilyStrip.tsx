const companies = [
  { name: 'Boulder iQ', desc: 'Engineering, Design & Manufacturing', url: 'https://boulderiq.com' },
  { name: 'Boulder Sterilization', desc: 'EO & Chlorine Dioxide Sterilization', url: 'https://bouldersterilization.com' },
  { name: 'Boulder RA/QA', desc: 'Regulatory & Quality Consulting', url: 'https://boulderraqa.com' },
  { name: 'Boulder BioLabs', desc: 'Biological Testing', url: 'https://boulderbiolabs.com' },
  { name: 'Boulder BioMed', desc: 'Parent Company & Authority Hub', url: 'https://boulderbiomed.com' },
];

export default function FamilyStrip() {
  return (
    <section className="bg-gray-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-navy text-center mb-2">The Boulder BioMed Family</h2>
        <p className="text-center text-navy/60 mb-8 text-sm">Five companies, one campus, one quality system.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {companies.map((co) => (
            <a
              key={co.url}
              href={co.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-gray-medium/20"
            >
              <h3 className="font-semibold text-navy text-sm mb-1">{co.name}</h3>
              <p className="text-xs text-navy/60">{co.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
