export interface StandardInfo {
  slug: string;
  name: string;
  fullName: string;
  subtitle: string;
  description: string;
  whatItIs: string;
  whenYouNeedIt: string;
  whatWeDo: string;
  equipmentNote: string;
  iso11607Connection: string;
  relatedSlugs: string[];
  metaTitle: string;
  metaDescription: string;
  faqs: { question: string; answer: string }[];
}

export const standards: StandardInfo[] = [
  {
    slug: 'ista-3a',
    name: 'ISTA 3A',
    fullName: 'ISTA 3A — General Simulation Performance Test',
    subtitle: 'Parcel delivery simulation for medical device packaging',
    description: 'Industry-standard prescriptive profile for packaged products of 150 lb or less shipped through parcel-delivery networks.',
    whatItIs: 'ISTA 3A is the International Safe Transit Association\'s general simulation performance test for packaged products weighing 150 lb or less shipped via parcel delivery systems. It subjects packages to a prescribed sequence of atmospheric conditioning, random vibration, shock (drop), and compression hazards designed to replicate the stresses of a small-parcel distribution cycle. For medical device manufacturers, ISTA 3A is one of the most commonly referenced distribution simulation profiles in ISO 11607 validation programs because it provides a repeatable, standardized way to demonstrate that a sterile barrier system can survive the rigors of shipping.',
    whenYouNeedIt: 'You need ISTA 3A testing when validating the distribution component of an ISO 11607 sterile barrier system qualification, when your device ships via parcel carriers (FedEx, UPS, USPS), when your customer or regulatory submission requires a recognized distribution simulation standard, or when you need to compare package performance across design iterations.',
    whatWeDo: 'Boulder Package Testing executes ISTA 3A test methods in our Boulder, Colorado facility. We condition samples per ASTM D4332, then run the full ISTA 3A hazard sequence: atmospheric preconditioning, random vibration on a vibration table, drop testing from prescribed heights and orientations, and compression loading. After distribution simulation, samples proceed directly to sterile barrier integrity testing (dye penetration, bubble leak, seal strength, and visual inspection) — all under one chain of custody.',
    equipmentNote: 'Vibration table, drop tester, compression tester, conditioning chamber — calibrated and maintained under the Boulder BioMed quality system.',
    iso11607Connection: 'ISTA 3A fulfills the distribution simulation requirement of ISO 11607-1 Clause 6. It is typically paired with accelerated aging (ASTM F1980) and integrity tests (ASTM F1929, F2096, F88, F1886) to form a complete sterile barrier validation.',
    relatedSlugs: ['astm-d4169', 'astm-d4332', 'astm-f1980'],
    metaTitle: 'ISTA 3A Testing for Medical Device Packaging | Boulder Package Testing',
    metaDescription: 'ISTA 3A distribution simulation testing for medical device sterile barrier systems. Parcel delivery vibration, drop, and compression testing in Boulder, CO.',
    faqs: [
      { question: 'What is the difference between ISTA 3A and ASTM D4169?', answer: 'ISTA 3A is a prescriptive test profile with fixed hazard sequences for parcel shipments under 150 lb. ASTM D4169 is a flexible framework where you select assurance levels and hazard elements to match your specific distribution channel. Both are accepted for ISO 11607 distribution simulation.' },
      { question: 'How long does ISTA 3A testing take?', answer: 'The physical test sequence for ISTA 3A typically takes 2-3 days per sample set, not including conditioning time. Within a full ISO 11607 validation program, distribution simulation fits into an 8-12 week overall timeline.' },
      { question: 'How many samples does ISTA 3A require?', answer: 'ISTA 3A itself does not prescribe a fixed sample size — the number of test units is set by your validation protocol and statistical rationale. A common approach is to run three to ten packaged units through the hazard sequence and then evaluate sterile barrier integrity post-distribution.' },
      { question: 'Is ISTA 3A certification required for FDA submissions?', answer: 'FDA does not require ISTA certification, but it does require that distribution simulation be performed to a recognized standard as part of ISO 11607-1 compliance. ISTA 3A is one of the most widely accepted profiles in 510(k) submissions for parcel-shipped medical devices.' },
    ],
  },
  {
    slug: 'astm-d4169',
    name: 'ASTM D4169',
    fullName: 'ASTM D4169 — Performance Testing of Shipping Containers',
    subtitle: 'Flexible distribution simulation framework for medical devices',
    description: 'Flexible framework where manufacturers select assurance levels and hazard sequences to match their distribution channel.',
    whatItIs: 'ASTM D4169 is the Standard Practice for Performance Testing of Shipping Containers and Systems. Unlike prescriptive profiles like ISTA 3A, ASTM D4169 provides a framework of distribution cycles (DC) with multiple assurance levels, allowing manufacturers to tailor hazard sequences — including handling (drop and impact), stacking (compression), and vehicle vibration — to their specific distribution environment. This flexibility makes it particularly valuable for medical devices that ship via freight, pallet, or custom distribution channels rather than standard parcel delivery.',
    whenYouNeedIt: 'You need ASTM D4169 when your device ships via freight or pallet rather than parcel, when you need to customize hazard levels to match a specific distribution channel, when your customer or regulatory body specifically calls out ASTM D4169, or when the product exceeds ISTA 3A\'s 150 lb weight limit.',
    whatWeDo: 'Boulder Package Testing executes ASTM D4169 test methods with hazard sequences tailored to your distribution environment. We help you select the appropriate distribution cycle and assurance level, condition samples per ASTM D4332, and run the full sequence of handling, vibration, and compression hazards. Samples then proceed directly to integrity testing under one protocol and one chain of custody.',
    equipmentNote: 'Vibration table, drop tester, compression tester, conditioning chamber, incline impact tester — calibrated and maintained under the Boulder BioMed quality system.',
    iso11607Connection: 'ASTM D4169 satisfies the distribution simulation requirement of ISO 11607-1 Clause 6. Select the distribution cycle and assurance level that represents your worst-case shipping scenario.',
    relatedSlugs: ['ista-3a', 'astm-d4332', 'astm-f1980'],
    metaTitle: 'ASTM D4169 Distribution Testing | Boulder Package Testing',
    metaDescription: 'ASTM D4169 performance testing for medical device shipping containers. Custom distribution simulation with drop, vibration, and compression testing.',
    faqs: [
      { question: 'Which ASTM D4169 assurance level should I use?', answer: 'The assurance level depends on your distribution environment and risk tolerance. Level I represents the most severe conditions, Level III the mildest. Most medical device manufacturers use Level II for standard distribution or Level I for high-risk or high-value products.' },
      { question: 'Can I combine ASTM D4169 with ISTA 3A?', answer: 'Yes. Some manufacturers run both profiles — ISTA 3A for the parcel shipment leg and ASTM D4169 for the freight or pallet leg — especially when a product ships in mixed-mode distribution.' },
      { question: 'What is a Distribution Cycle in ASTM D4169?', answer: 'ASTM D4169 defines Distribution Cycles (DC) that represent typical shipping scenarios — DC 1 (small parcel), DC 3 (motor freight, less-than-truckload), DC 13 (air and motor freight, less-than-truckload), and so on. You select the DC that matches your actual distribution channel and then apply the appropriate assurance level.' },
      { question: 'Does ASTM D4169 cover environmental hazards like temperature and humidity?', answer: 'ASTM D4169 focuses on mechanical hazards (handling, stacking, vibration). Environmental conditioning is handled separately through ASTM D4332, which specifies temperature and humidity preconditioning that occurs before the D4169 hazard sequence.' },
    ],
  },
  {
    slug: 'astm-f1980',
    name: 'ASTM F1980',
    fullName: 'ASTM F1980 — Accelerated Aging of Sterile Barrier Systems',
    subtitle: 'Support shelf-life claims before real-time data matures',
    description: 'Standard guide using elevated temperature to simulate the effect of time on sterile barrier systems.',
    whatItIs: 'ASTM F1980 is the Standard Guide for Accelerated Aging of Sterile Barrier System Packages. It uses the Arrhenius reaction rate principle to expose sterile barrier materials to elevated temperatures, simulating months or years of ambient shelf life in a fraction of the time. Using a conservative Q10 factor of 2.0, one year of real-time shelf life can be simulated in approximately 52 days at 55 degrees C. This allows manufacturers to release product with a supported shelf-life claim while real-time aging studies run concurrently.',
    whenYouNeedIt: 'You need ASTM F1980 testing when establishing or extending a shelf-life claim for a terminally sterilized device, when you need to release product before real-time aging data is available, when making changes to packaging materials or sealing processes that affect shelf life, or when supporting regulatory submissions (510(k), CE marking) that require shelf-life evidence.',
    whatWeDo: 'Boulder Package Testing executes ASTM F1980 accelerated aging protocols with paired real-time aging in calibrated temperature and humidity chambers. We set up one-year and multi-year aging cycles at 55 degrees C with continuous monitoring. After aging, samples proceed directly to integrity testing — dye penetration, bubble leak, seal strength, and visual inspection — under one protocol and one chain of custody.',
    equipmentNote: 'Calibrated temperature/humidity aging chambers with continuous monitoring and data logging.',
    iso11607Connection: 'ASTM F1980 addresses the stability / shelf-life requirement of ISO 11607-1 Clause 6. Accelerated aging provides interim shelf-life support while real-time aging (also required) runs to completion.',
    relatedSlugs: ['astm-f88', 'astm-f1929', 'astm-f2096', 'astm-f1886'],
    metaTitle: 'ASTM F1980 Accelerated Aging Testing | Boulder Package Testing',
    metaDescription: 'ASTM F1980 accelerated aging for medical device sterile barrier systems. Support shelf-life claims with 52-day simulation of one-year aging at 55°C.',
    faqs: [
      { question: 'What Q10 value should I use for accelerated aging?', answer: 'ASTM F1980 recommends a conservative Q10 of 2.0 unless material-specific data supports a different value. A Q10 of 2.0 means the aging rate doubles for every 10 degrees C increase above ambient.' },
      { question: 'Do I still need real-time aging if I do accelerated aging?', answer: 'Yes. Accelerated aging provides interim shelf-life support for product release, but real-time aging is required to confirm that accelerated results are representative. Both studies should run concurrently.' },
      { question: 'What aging temperature should I use?', answer: 'Most ASTM F1980 protocols use 55 degrees C with controlled humidity. Higher temperatures shorten test duration but can introduce non-Arrhenius failure modes (such as adhesive melting), so the standard cautions against exceeding 60 degrees C for typical sterile barrier materials.' },
      { question: 'How long does ASTM F1980 testing take for a five-year shelf life?', answer: 'Using a Q10 of 2.0 at 55 degrees C, simulating five years of real-time aging requires approximately 260 days (about 37 weeks) of accelerated aging time. Integrity testing is performed at intermediate timepoints and at the end of the aging period.' },
    ],
  },
  {
    slug: 'astm-f88',
    name: 'ASTM F88',
    fullName: 'ASTM F88 — Seal Strength of Flexible Barrier Materials',
    subtitle: 'Peel testing to verify forming and sealing process capability',
    description: 'Peel testing for pouches and trays to verify seal strength and sealing process capability.',
    whatItIs: 'ASTM F88 is the Standard Test Method for Seal Strength of Flexible Barrier Materials. It measures the force required to separate (peel) a sealed area of flexible packaging, providing quantitative data on seal strength in units of force per width (typically N/m or lb/in). The test characterizes sealing process performance and helps establish seal strength specifications for incoming quality and process validation. For medical device sterile barrier systems, seal strength testing is a key element of both IQ/OQ/PQ validation and ongoing stability programs.',
    whenYouNeedIt: 'You need ASTM F88 testing when validating sealing processes for pouches, header bags, or lidded trays, when establishing seal strength specifications and control limits, when evaluating the effect of aging or distribution on seal performance, or when required by your ISO 11607 validation protocol.',
    whatWeDo: 'Boulder Package Testing executes ASTM F88 peel tests using calibrated tensile testing equipment. We test seals from all orientations and locations specified in your protocol, report peak force, average force, and failure mode (adhesive, cohesive, delamination, or material tear), and provide data in formats ready for statistical analysis and audit review.',
    equipmentNote: 'Calibrated tensile tester with appropriate grips and fixtures for medical device packaging materials.',
    iso11607Connection: 'ASTM F88 is referenced in ISO 11607-1 and ISO 11607-2 for seal strength evaluation as part of packaging process validation and stability testing.',
    relatedSlugs: ['astm-f1140', 'astm-f1886', 'astm-f1929'],
    metaTitle: 'ASTM F88 Seal Strength Testing | Boulder Package Testing',
    metaDescription: 'ASTM F88 peel testing for medical device packaging seal strength. Quantitative seal performance data for ISO 11607 validation programs.',
    faqs: [
      { question: 'What failure modes does ASTM F88 identify?', answer: 'ASTM F88 identifies four failure modes: adhesive failure (clean separation at the seal interface), cohesive failure (failure within the sealant layer), delamination (separation of material layers), and material tear (substrate breaks before the seal). Material tear or cohesive failure typically indicates a strong, well-formed seal.' },
      { question: 'How many samples do I need for ASTM F88 testing?', answer: 'Sample size depends on your protocol and statistical requirements. A common approach is 10-15 peel specimens per test condition, but your ISO 11607 validation protocol should specify the exact sample size based on your statistical rationale.' },
      { question: 'What grip technique should I use for ASTM F88?', answer: 'ASTM F88 defines three grip techniques: Technique A (unsupported), Technique B (supported at 90 degrees), and Technique C (supported at 180 degrees). Technique A is most common for medical device pouches, but the chosen technique must be documented and used consistently across all samples in a study.' },
      { question: 'What seal strength is acceptable for a sterile medical device pouch?', answer: 'There is no single universal value — acceptance criteria are set by the manufacturer based on the packaging design, sealing process capability, and risk analysis. Typical heat-sealed pouch peel strengths fall in the 1.0 to 4.0 lbf/in range, with the lower bound defined by the manufacturer-set specification.' },
    ],
  },
  {
    slug: 'astm-f1929',
    name: 'ASTM F1929',
    fullName: 'ASTM F1929 — Dye Penetration Testing of Porous Packaging',
    subtitle: 'Detect seal defects in porous sterile barrier materials',
    description: 'Dye-based sterile barrier integrity test for porous packaging materials.',
    whatItIs: 'ASTM F1929 is the Standard Test Method for Detecting Seal Leaks in Porous Medical Packaging by Dye Penetration. It uses a dye solution applied to the exterior of a sealed package to detect channels, voids, or defects in heat seals that could compromise sterile barrier integrity. The test is specifically designed for packages with at least one porous surface (such as Tyvek-to-film pouches or header bags) and provides a pass/fail result based on whether dye penetrates through the seal to the interior.',
    whenYouNeedIt: 'You need ASTM F1929 testing when verifying sterile barrier integrity after distribution simulation or aging, when validating sealing processes for porous packaging, when evaluating the effect of sterilization on seal integrity, or as part of an ISO 11607 sterile barrier system qualification.',
    whatWeDo: 'Boulder Package Testing executes ASTM F1929 dye penetration tests under controlled conditions. We apply the specified dye solution, allow the prescribed contact time, and evaluate seal integrity visually and under magnification. All results are documented with photographs and traceable to specific sample IDs in your validation protocol.',
    equipmentNote: 'Dye penetration test station with specified dye solutions, controlled application fixtures, and visual inspection with magnification.',
    iso11607Connection: 'ASTM F1929 is a primary method for demonstrating sterile barrier integrity as required by ISO 11607-1 Clause 5 (sterile barrier system requirements).',
    relatedSlugs: ['astm-f2096', 'astm-f1886', 'astm-f88'],
    metaTitle: 'ASTM F1929 Dye Penetration Testing | Boulder Package Testing',
    metaDescription: 'ASTM F1929 dye penetration testing for medical device sterile barrier integrity. Detect seal leaks in porous packaging materials.',
    faqs: [
      { question: 'Can ASTM F1929 be used on non-porous packaging?', answer: 'No. ASTM F1929 is designed for packages with at least one porous surface (e.g., Tyvek). For non-porous packages, use ASTM F2096 (bubble leak) or other methods appropriate for the material.' },
      { question: 'Is dye penetration testing destructive?', answer: 'Yes. ASTM F1929 is a destructive test — samples cannot be returned to inventory after testing. Plan your sample sizes accordingly in your validation protocol.' },
      { question: 'What size seal channel can ASTM F1929 detect?', answer: 'ASTM F1929 is sensitive to channel defects on the order of approximately 50 microns when the test is performed according to the standard. Sensitivity depends on dye contact time, seal geometry, and operator technique, all of which are controlled in our protocol.' },
      { question: 'Which dye penetration method should I use — Method A, B, or C?', answer: 'Method A uses dye injection into the package interior; Method B applies an edge-dip; Method C uses a syringe-applied dye externally along the seal. Method B is the most common for finished pouches in ISO 11607 validation programs, but the method choice should be defined in your protocol.' },
    ],
  },
  {
    slug: 'astm-f2096',
    name: 'ASTM F2096',
    fullName: 'ASTM F2096 — Bubble Leak Testing of Packaging',
    subtitle: 'Gross leak detection for sealed medical device packages',
    description: 'Bubble or gross leak detection testing for sealed medical device packaging.',
    whatItIs: 'ASTM F2096 is the Standard Test Method for Detecting Gross Leaks in Packaging by Internal Pressurization (Bubble Test). The test submerges a sealed package in water, pressurizes the interior with air, and observes for a steady stream of bubbles that indicates a gross leak in the seal or packaging material. It is a rapid, inexpensive screening method for detecting large defects that would clearly compromise sterile barrier integrity.',
    whenYouNeedIt: 'You need ASTM F2096 testing as a screening test before or alongside more sensitive methods like dye penetration (F1929), when evaluating package integrity after distribution or aging, when validating sealing processes as part of ISO 11607 programs, or for incoming quality inspection of sealed sterile barrier systems.',
    whatWeDo: 'Boulder Package Testing executes ASTM F2096 bubble leak tests in our controlled testing environment. We restrain each package in a water tank, introduce internal pressure at the rate and level specified in the standard, and observe for bubble streams indicating gross leaks. Results are documented with pass/fail determinations and photographic evidence.',
    equipmentNote: 'Bubble leak test tank, regulated air supply, restraint fixtures for various package formats.',
    iso11607Connection: 'ASTM F2096 addresses gross leak detection as part of the package integrity evaluation required by ISO 11607-1. It is typically used in combination with ASTM F1929 (dye penetration) for a comprehensive integrity assessment.',
    relatedSlugs: ['astm-f1929', 'astm-f1886', 'astm-f1140'],
    metaTitle: 'ASTM F2096 Bubble Leak Testing | Boulder Package Testing',
    metaDescription: 'ASTM F2096 bubble leak testing for medical device package integrity. Gross leak detection by internal pressurization for sterile barrier systems.',
    faqs: [
      { question: 'What is the difference between ASTM F2096 and ASTM F1929?', answer: 'ASTM F2096 (bubble leak) detects gross leaks using pressurized air and water submersion. ASTM F1929 (dye penetration) detects smaller seal channels using dye solution. F2096 is a screening test; F1929 provides higher sensitivity for seal defects in porous packaging.' },
      { question: 'Is ASTM F2096 sufficient by itself for sterile barrier validation?', answer: 'Typically no. ASTM F2096 detects gross leaks but may not detect small seal channels. Most ISO 11607 validation protocols use F2096 alongside F1929 (dye penetration) and F1886 (visual inspection) for comprehensive integrity evaluation.' },
      { question: 'What test pressure does ASTM F2096 use?', answer: 'Pressure is selected based on the package design and material. Typical test pressures fall in the 0.3 to 1.0 psig range, applied at a controlled rate so the package is fully pressurized before observation begins. The exact pressure used must be documented in your protocol.' },
      { question: 'Can ASTM F2096 be used on porous packaging?', answer: 'Bubble leak testing can be performed on porous packaging, but the porous side must be sealed off (for example with a plastic patch) so that air does not naturally pass through the porous material. For porous packages, ASTM F1929 dye penetration is usually the preferred integrity method.' },
    ],
  },
  {
    slug: 'astm-f1140',
    name: 'ASTM F1140',
    fullName: 'ASTM F1140 — Burst Testing of Flexible Packages',
    subtitle: 'Inflation burst testing for pouches and flexible packaging',
    description: 'Inflation/burst testing to verify package integrity and sealing process capability.',
    whatItIs: 'ASTM F1140 is the Standard Test Method for Internal Pressurization Failure Resistance of Unrestrained Packages. It inflates a sealed package with air at a controlled rate until the package bursts, recording the burst pressure. This provides quantitative data on the overall strength of the package — both seal and material — and is used to evaluate sealing process capability, compare package designs, and set incoming quality specifications.',
    whenYouNeedIt: 'You need ASTM F1140 testing when validating sealing processes for pouches or flexible packages, when establishing burst pressure specifications and control limits, when comparing package designs or materials, or when incoming quality testing requires a rapid, quantitative package strength measurement.',
    whatWeDo: 'Boulder Package Testing executes ASTM F1140 burst tests using calibrated burst testing equipment. We inflate packages at the specified rate, record burst pressure and failure location, and report results with statistical summaries ready for process validation and audit review.',
    equipmentNote: 'Calibrated burst tester with controlled inflation rate and pressure recording.',
    iso11607Connection: 'ASTM F1140 complements ASTM F88 (peel testing) in ISO 11607 validation programs by providing a whole-package strength measurement. It is particularly useful for process validation (IQ/OQ/PQ) of sealing equipment.',
    relatedSlugs: ['astm-f88', 'astm-f2096', 'astm-f1886'],
    metaTitle: 'ASTM F1140 Burst Testing | Boulder Package Testing',
    metaDescription: 'ASTM F1140 burst testing for medical device flexible packaging. Quantitative burst pressure data for sealing process validation.',
    faqs: [
      { question: 'What is the difference between ASTM F1140 and ASTM F88?', answer: 'ASTM F1140 tests the whole package by inflating it until burst, measuring overall package strength. ASTM F88 tests individual seal specimens by peeling, measuring seal strength at specific locations. Both are typically included in ISO 11607 validation programs.' },
      { question: 'Can ASTM F1140 replace seal strength testing?', answer: 'No. ASTM F1140 and ASTM F88 provide complementary information. Burst testing measures overall package strength, while peel testing characterizes seal-specific performance and failure modes. Most validation protocols require both.' },
      { question: 'What is the difference between ASTM F1140 and ASTM F2054?', answer: 'ASTM F1140 tests unrestrained packages — the package is inflated freely with no external support. ASTM F2054 tests restrained packages (held between plates), which more closely simulates seal stress during shipping and yields a more localized burst pressure result.' },
      { question: 'What is a typical burst pressure for a medical device pouch?', answer: 'Typical burst pressures range from 1 to 5 psig depending on pouch size, material, and seal design. The acceptance criterion is set by the manufacturer based on packaging design, sealing process capability, and risk analysis.' },
    ],
  },
  {
    slug: 'astm-f1886',
    name: 'ASTM F1886',
    fullName: 'ASTM F1886 — Visual Inspection of Seal Quality',
    subtitle: 'Non-destructive visual evaluation of package seals',
    description: 'Visual examination of seal quality for medical device packaging.',
    whatItIs: 'ASTM F1886 is the Standard Test Method for Determining Integrity of Seals for Flexible Barrier Materials via Visual Inspection. It provides a standardized procedure for visually examining heat seals to identify defects such as wrinkles, channels, incomplete seals, seal creep, contamination in the seal area, and other anomalies that could compromise sterile barrier integrity. Unlike dye penetration or burst testing, visual inspection is non-destructive and can be performed on 100% of samples.',
    whenYouNeedIt: 'You need ASTM F1886 testing as part of every ISO 11607 validation protocol for visual evaluation of seals, for incoming quality inspection of sealed sterile barrier systems, after distribution simulation and aging to evaluate seal appearance, or when investigating seal quality issues in production.',
    whatWeDo: 'Boulder Package Testing executes ASTM F1886 visual inspections under controlled lighting with trained inspectors. We examine seals for all defect categories defined in the standard, document findings with photographic evidence, and report results with clear pass/fail determinations based on predefined acceptance criteria.',
    equipmentNote: 'Controlled lighting station, magnification equipment, calibrated measurement tools for seal width verification.',
    iso11607Connection: 'ASTM F1886 is referenced in ISO 11607-1 and ISO 11607-2 as a standard method for visual seal evaluation. It is typically the first integrity test performed and is used alongside destructive methods (F1929, F88) for comprehensive assessment.',
    relatedSlugs: ['astm-f1929', 'astm-f88', 'astm-f2096'],
    metaTitle: 'ASTM F1886 Visual Seal Inspection | Boulder Package Testing',
    metaDescription: 'ASTM F1886 visual seal inspection for medical device packaging. Non-destructive seal quality evaluation for ISO 11607 validation.',
    faqs: [
      { question: 'What seal defects does ASTM F1886 detect?', answer: 'ASTM F1886 identifies wrinkles, channels, incomplete seals, seal creep, foreign material in the seal area, delamination, and other visible anomalies. It is most effective for defects visible to the trained eye under controlled lighting.' },
      { question: 'Is visual inspection sufficient for sterile barrier validation?', answer: 'No. ASTM F1886 is one component of a comprehensive integrity assessment. ISO 11607 validation programs typically combine visual inspection with dye penetration (F1929), bubble leak (F2096), and seal strength testing (F88).' },
      { question: 'What lighting conditions does ASTM F1886 specify?', answer: 'ASTM F1886 specifies inspection under uniform diffuse lighting at a defined illuminance level (typically a minimum of 540 lux at the inspection surface). We perform inspections at a controlled, calibrated workstation to ensure repeatability.' },
      { question: 'Can ASTM F1886 be used for 100% inspection in production?', answer: 'Yes. Because ASTM F1886 is non-destructive, it is suitable for 100% inspection of production units. Many medical device manufacturers use it as an in-process or post-seal inspection step in addition to its use within ISO 11607 validation testing.' },
    ],
  },
  {
    slug: 'astm-d4332',
    name: 'ASTM D4332',
    fullName: 'ASTM D4332 — Conditioning of Packages for Testing',
    subtitle: 'Standardized preconditioning before distribution and aging tests',
    description: 'Conditioning protocol for standardized sample preparation before package testing.',
    whatItIs: 'ASTM D4332 is the Standard Practice for Conditioning Containers, Packages, or Packaging Components for Testing. It specifies temperature and humidity conditions for preconditioning packages before they undergo distribution simulation, aging, or integrity testing. Proper conditioning ensures that test results are reproducible and comparable by establishing a known starting state for packaging materials. The standard defines multiple conditioning profiles based on the test requirements and material properties.',
    whenYouNeedIt: 'You need ASTM D4332 conditioning before distribution simulation (ISTA 3A or ASTM D4169), before accelerated aging (ASTM F1980), before seal strength or integrity testing when conditioning is specified, or whenever your test protocol requires a standardized environmental starting point.',
    whatWeDo: 'Boulder Package Testing conditions all samples per ASTM D4332 in calibrated environmental chambers before testing begins. We document conditioning time, temperature, and humidity with continuous data logging, ensuring traceability from sample receipt through conditioning to test completion.',
    equipmentNote: 'Calibrated environmental conditioning chambers with continuous temperature and humidity monitoring and data logging.',
    iso11607Connection: 'ASTM D4332 is referenced throughout ISO 11607 validation programs as the conditioning step that precedes distribution simulation and other test methods. Proper conditioning is essential for valid, reproducible test results.',
    relatedSlugs: ['ista-3a', 'astm-d4169', 'astm-f1980'],
    metaTitle: 'ASTM D4332 Package Conditioning | Boulder Package Testing',
    metaDescription: 'ASTM D4332 conditioning for medical device package testing. Standardized preconditioning in calibrated chambers before distribution and aging tests.',
    faqs: [
      { question: 'Why is conditioning required before package testing?', answer: 'Packaging materials are sensitive to temperature and humidity. Conditioning to ASTM D4332 ensures all samples start from a known, standardized state, making test results reproducible and comparable across labs, time periods, and product lots.' },
      { question: 'How long does ASTM D4332 conditioning take?', answer: 'Conditioning time depends on the profile selected and the packaging materials. Standard conditioning at 23 degrees C and 50% RH typically requires a minimum of 24 hours, but some protocols specify longer times for thick or multi-layer materials.' },
      { question: 'What atmospheres does ASTM D4332 define?', answer: 'ASTM D4332 defines several conditioning atmospheres, including 23 degrees C / 50% RH (standard), 38 degrees C / 90% RH (tropical), -18 degrees C (frozen), and others for specific distribution scenarios. The protocol selects the atmosphere(s) that match the worst-case distribution environment.' },
      { question: 'Does ASTM D4332 apply to both distribution and aging tests?', answer: 'Yes. ASTM D4332 conditioning is performed before distribution simulation per ASTM D4169 or ISTA 3A, and is also commonly used to establish a known starting state before accelerated aging or integrity testing.' },
    ],
  },
];

export const iso11607: StandardInfo = {
  slug: 'iso-11607',
  name: 'ISO 11607',
  fullName: 'ISO 11607 — Packaging for Terminally Sterilized Medical Devices',
  subtitle: 'The global consensus standard for sterile barrier validation',
  description: 'ISO 11607 is the global consensus validation standard for terminally sterilized medical device packaging.',
  whatItIs: 'ISO 11607 is the international standard for packaging of terminally sterilized medical devices. It consists of two parts: Part 1 covers requirements for materials, sterile barrier systems, and packaging systems, while Part 2 covers validation requirements for forming, sealing, and assembly processes. Together, they define the framework that medical device manufacturers must follow to demonstrate that their packaging maintains sterile barrier integrity through sterilization, distribution, storage, and use. A typical ISO 11607 validation program references multiple ASTM and ISTA test methods to demonstrate compliance.',
  whenYouNeedIt: 'You need ISO 11607 validation when launching a new terminally sterilized medical device, when making changes to packaging materials, sealing processes, or sterilization methods, when extending shelf-life claims, when responding to regulatory submissions (510(k), CE marking, MDR), or when your quality system requires periodic revalidation of packaging processes.',
  whatWeDo: 'Boulder Package Testing designs and executes complete ISO 11607-1 and ISO 11607-2 validation programs. We work with your engineering and quality teams to define the validation protocol, then execute the full test battery: package conditioning (ASTM D4332), distribution simulation (ISTA 3A or ASTM D4169), accelerated and real-time aging (ASTM F1980), seal strength (ASTM F88), burst testing (ASTM F1140), dye penetration (ASTM F1929), bubble leak (ASTM F2096), and visual inspection (ASTM F1886). All testing is performed under one chain of custody, one quality system, and — when sterilization is needed — on the same campus as Boulder Sterilization.',
  equipmentNote: 'Full suite of package testing equipment for all referenced ASTM and ISTA test methods, housed in our Boulder, Colorado facility.',
  iso11607Connection: 'ISO 11607 is the parent standard. All test methods offered by Boulder Package Testing are referenced within ISO 11607 validation programs.',
  relatedSlugs: ['ista-3a', 'astm-d4169', 'astm-f1980', 'astm-f88', 'astm-f1929', 'astm-f2096'],
  metaTitle: 'ISO 11607 Package Validation Programs | Boulder Package Testing',
  metaDescription: 'Complete ISO 11607-1 and ISO 11607-2 sterile barrier validation programs. Distribution simulation, accelerated aging, and integrity testing in Boulder, CO.',
  faqs: [
    { question: 'What is ISO 11607 and what testing does it require?', answer: 'ISO 11607 is the global consensus validation standard for terminally sterilized medical device packaging. Part 1 covers requirements for materials, sterile barrier systems, and packaging systems. Part 2 covers validation of forming, sealing, and assembly processes. A typical ISO 11607 program includes package conditioning (ASTM D4332), distribution simulation (ASTM D4169 or an ISTA profile such as 3A), accelerated aging (ASTM F1980), seal strength (ASTM F88), visual inspection of seals (ASTM F1886), dye penetration (ASTM F1929), and bubble or gross leak testing (ASTM F2096).' },
    { question: 'How long does a complete ISO 11607 validation take?', answer: 'For a standard one-year shelf life claim using ASTM F1980 accelerated aging at 55 degrees C, end-to-end turnaround is typically 8 to 12 weeks. Each additional year of shelf life adds roughly four weeks to the overall project.' },
    { question: 'Can I use ISO 11607 validation data for FDA and EU submissions?', answer: 'Yes. ISO 11607 is recognized globally and referenced by FDA guidance documents and the EU Medical Device Regulation (MDR). A well-executed ISO 11607 validation program provides the packaging evidence needed for 510(k), PMA, CE marking, and other regulatory submissions.' },
  ],
};

export function getStandardBySlug(slug: string): StandardInfo | undefined {
  if (slug === 'iso-11607') return iso11607;
  return standards.find((s) => s.slug === slug);
}
