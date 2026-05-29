"use client";

import { trackEvent } from "./Analytics";
import type { AnchorHTMLAttributes } from "react";

// <TrackedTel /> wraps a tel: link and fires phone_clicked on click.
export function TrackedTel({
  number,
  display,
  location,
  className,
  style,
}: {
  number: string; // digits only, e.g. "3035311238"
  display?: string;
  location: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={`tel:${number}`}
      className={className}
      style={style}
      onClick={() => trackEvent("phone_clicked", { location, number })}
    >
      {display || number}
    </a>
  );
}

// <TrackedExtLink /> wraps an external (typically sister-family) link and
// fires external_family_link_clicked on click.
export function TrackedExtLink({
  href,
  destination,
  location,
  children,
  className,
  style,
  ...rest
}: {
  href: string;
  destination: string;
  location: string;
  children: React.ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={() => trackEvent("external_family_link_clicked", { destination, href, location })}
      {...rest}
    >
      {children}
    </a>
  );
}
