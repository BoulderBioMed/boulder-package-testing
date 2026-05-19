import Link from 'next/link';

interface StandardBadgeProps {
  name: string;
  href: string;
  description: string;
}

export default function StandardBadge({ name, href, description }: StandardBadgeProps) {
  return (
    <Link
      href={href}
      className="block bg-white border border-gray-medium/30 rounded-lg p-4 hover:border-teal/50 hover:shadow-md transition-all group"
    >
      <span className="text-sm font-bold text-teal group-hover:text-navy transition-colors">{name}</span>
      <p className="text-xs text-navy/60 mt-1">{description}</p>
    </Link>
  );
}
