import Link from "next/link";
import BoulderLockup from "./BoulderLockup";

// Slim navy family bar — identical across every Boulder BioMed site.
// Standard order is LOCKED: BioMed · iQ · Sterilization · RA/QA · BioLabs · Package Testing · Applied AI.
// Set CURRENT to the site this bar lives on; that entry renders as the active link to "/".
const CURRENT = "Package Testing";

const FAMILY: { name: string; href: string }[] = [
  { name: "Boulder BioMed", href: "https://boulderbiomed.com/" },
  { name: "Boulder iQ", href: "https://boulderiq.com/" },
  { name: "Boulder Sterilization", href: "https://bouldersterilization.com/" },
  { name: "Boulder RA/QA", href: "https://boulderraqa.com/" },
  { name: "Boulder BioLabs", href: "https://boulderbiolabs.com/" },
  { name: "Boulder Package Testing", href: "https://boulderpackagetest.com/" },
  { name: "Boulder Applied AI", href: "https://boulderappliedai.com/" },
];

export function FamilyBar() {
  return (
    <div style={{ background: "#0B2545", color: "#C9CFD6", padding: "0.5rem 1.5rem", fontSize: "0.85rem" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <BoulderLockup word="BioMed" variant="dark" size={18} />
          <span style={{ fontSize: "0.72rem", color: "#5B8FC7", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Family of Companies</span>
        </div>
        <nav style={{ display: "flex", gap: "1.1rem", flexWrap: "wrap" }}>
          {FAMILY.map((s) => {
            const isCurrent = s.name.endsWith(CURRENT);
            return isCurrent ? (
              <Link key={s.name} href="/" style={{ color: "#5B8FC7", fontWeight: 700 }}>{s.name}</Link>
            ) : (
              <a key={s.name} href={s.href} target="_blank" rel="noopener" style={{ color: "#C9CFD6" }}>{s.name}</a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
