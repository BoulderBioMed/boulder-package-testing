import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white border border-gray-medium/30 rounded-lg p-6 hover:shadow-lg hover:border-teal/50 transition-all group"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-teal transition-colors">
        {title}
      </h3>
      <p className="text-sm text-navy/70">{description}</p>
    </Link>
  );
}
