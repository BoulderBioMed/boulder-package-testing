// Boulder BioMed family logo lockup — Option 2, Medium (LOCKED).
// Shared, identical across every family site. See /docs/brand-style-guide.html.
// "Boulder" base size; descriptor 0.56× in Lato Regular; two-line descriptors
// center on the divider. variant: light header · dark navy footer · reverse color tile.
type Variant = "light" | "dark" | "reverse";

type BoulderLockupProps = {
  /** Descriptor word(s) to the right of the divider. Pass an array for two lines. */
  word: string | string[];
  variant?: Variant;
  /** Font size (px) of "Boulder". Descriptor is 0.56× this. */
  size?: number;
};

export default function BoulderLockup({ word, variant = "light", size = 42 }: BoulderLockupProps) {
  const c = {
    light: { b: "#414856", w: "#2968A0", r: "#9AA4B0" },
    dark: { b: "#C9CFD6", w: "#5B8FC7", r: "#7C8794" },
    reverse: { b: "#fff", w: "#fff", r: "rgba(255,255,255,.85)" },
  }[variant];
  const lines = Array.isArray(word) ? word : [word];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", fontFamily: "'Lato', sans-serif", lineHeight: 1 }}>
      <span style={{ fontSize: size, fontWeight: 400, color: c.b, letterSpacing: "-0.01em" }}>Boulder</span>
      <span style={{ width: 0, borderLeft: `1px solid ${c.r}`, height: size * 1.02, margin: `0 ${size * 0.32}px` }} />
      <span style={{ fontSize: size * 0.56, fontWeight: 400, color: c.w, lineHeight: 1.16 }}>
        {lines.map((l, i) => (
          <span key={i} style={{ display: "block" }}>{l}</span>
        ))}
      </span>
    </span>
  );
}
