export interface Article {
  slug: string;
  title: string;
  description: string;
  datePublished: string; // ISO date
  related: string[]; // related article slugs
  /**
   * Article body as an ordered list of content blocks. Each block is rendered
   * by app/resources/[slug]/page.tsx. Headings start with "## "; everything else
   * is rendered as a paragraph. Plain, evidence-led explainer content on public
   * consensus standards — no invented metrics, client names, or lab-specific data.
   */
  body: string[];
}

export const articles: Article[] = [
  {
    slug: 'iso-11607-packaging-validation-mistakes',
    title: 'ISO 11607 Packaging Validation: What Medical Device Companies Actually Get Wrong',
    description:
      'The most common ISO 11607-1 and ISO 11607-2 packaging validation mistakes — and how to avoid them on your next submission.',
    datePublished: '2026-05-01',
    related: ['packaging-design-validation-cost-drivers', 'dhf-packaging-validation-documentation', 'medical-device-packaging-validation-cost'],
    body: [
      'ISO 11607 is the global consensus standard for packaging of terminally sterilized medical devices. It is referenced by FDA guidance and by the EU Medical Device Regulation, and a defensible ISO 11607 validation is effectively a prerequisite for any submission that involves a sterile barrier system. The standard is well written and widely used — and yet the same handful of mistakes show up again and again in packaging validation files. Most of them are not testing errors. They are planning, scoping, and documentation errors that surface long after the samples have been consumed.',
      '## Treating ISO 11607-1 and ISO 11607-2 as one requirement',
      'ISO 11607 is two standards. Part 1 covers the requirements for materials, sterile barrier systems, and packaging systems — essentially, does the package keep the device sterile through distribution, storage, and aseptic presentation. Part 2 covers validation of the forming, sealing, and assembly processes that produce the package — essentially, can you make that package reproducibly. A common mistake is to run a strong Part 1 integrity battery while leaving the Part 2 process validation thin: no installation/operational/performance qualification (IQ/OQ/PQ) of the sealer, no defined process window, no evidence that the sealing parameters used in production match the ones that produced the validated samples. A reviewer who sees integrity data but no process validation will ask where the validated package actually comes from.',
      '## Validating one configuration and claiming the whole family',
      'Manufacturers frequently validate a single package size or configuration and then extend the claim across an entire product family without a documented rationale. ISO 11607 allows family or bracketing approaches, but only when the rationale is written down: identify the worst-case configuration (largest and smallest seal area, heaviest device, sharpest geometry, most aggressive sterilization exposure) and justify why testing it bounds the rest. Skipping the worst-case rationale is one of the most common deficiencies cited against packaging files.',
      '## Forgetting that sterilization comes first',
      'The sterile barrier system has to survive the sterilization process before it ever sees distribution. Test articles should be sterilized using the same modality and a representative (typically maximum) cycle before aging and distribution simulation, because EO, chlorine dioxide, gamma, and steam each stress materials differently. Validating virgin, never-sterilized packages is a frequent and avoidable error. Co-locating sterilization with package testing — as Boulder Package Testing does on a shared campus with Boulder Sterilization — keeps the sterilize-then-test sequence under one chain of custody.',
      '## Confusing accelerated aging with shelf life',
      'ASTM F1980 accelerated aging supports an interim shelf-life claim while real-time aging matures. It does not replace real-time aging. ISO 11607 expects both: accelerated data lets you release product, and real-time data confirms the accelerated model was representative. Treating accelerated aging as the final word — and never starting the real-time study — is a deficiency that only becomes visible years later when the real-time data is requested and does not exist.',
      '## Setting acceptance criteria after the data is in',
      'Acceptance criteria for seal strength, burst, dye penetration, and visual inspection must be defined in the protocol, before testing, with a documented rationale tied to the packaging design and risk analysis. Writing the criteria after seeing the results — or having no quantitative criteria at all — undermines the entire validation. A protocol that states the methods, sample sizes, statistical rationale, and pass/fail limits up front is the single most effective defense against an auditor finding.',
      '## How to avoid them',
      'Most of these mistakes are prevented by engaging a package testing lab during packaging design rather than at the end. A lab that helps you write the protocol — worst-case rationale, sterilize-first sequence, both aging tracks, predefined acceptance criteria, and a complete Part 2 process validation — produces a file that reviewers can follow. Boulder Package Testing builds ISO 11607-1 and ISO 11607-2 programs around these requirements so the validation holds up the first time it is reviewed.',
    ],
  },
  {
    slug: 'ista-3a-vs-astm-d4169',
    title: 'ISTA 3A vs. ASTM D4169: Which Distribution Test Does Your Medical Device Package Need?',
    description:
      'A practical comparison of ISTA 3A and ASTM D4169 distribution simulation for medical device packaging validation.',
    datePublished: '2026-05-01',
    related: ['astm-f1980-accelerated-aging', 'sterile-barrier-integrity-test-battery', 'iso-11607-packaging-validation-mistakes'],
    body: [
      'Distribution simulation is the part of an ISO 11607 validation that asks a simple question: will the sterile barrier system survive shipping. ISO 11607-1 requires it, but it does not prescribe a single method. The two most common choices for medical device packaging are ISTA 3A and ASTM D4169. They take different philosophies, and picking the right one starts with how your product actually ships.',
      '## ISTA 3A: a prescriptive parcel profile',
      'ISTA 3A is the International Safe Transit Association\'s General Simulation Performance Test for packaged products of 150 lb or less moving through parcel-delivery networks — the FedEx, UPS, and USPS small-parcel world. It is prescriptive: the standard fixes the hazard sequence, including atmospheric conditioning, random vibration, drop testing from defined heights and orientations, and compression. You do not choose the levels; you run the profile. That makes ISTA 3A fast to scope and easy to defend, because everyone runs it the same way.',
      '## ASTM D4169: a flexible framework',
      'ASTM D4169, the Standard Practice for Performance Testing of Shipping Containers and Systems, is a framework rather than a fixed profile. You select a Distribution Cycle (DC) that matches your channel — for example DC 1 for small parcel, DC 3 for less-than-truckload motor freight, DC 13 for combined air and motor freight — and an assurance level (Level I most severe, Level III mildest) that reflects your risk tolerance. You then assemble the handling, vibration, and compression hazards that represent your actual distribution environment. That flexibility is the point: D4169 can model freight, pallet, and mixed-mode shipping that ISTA 3A is not designed for.',
      '## How to choose',
      'Start with the shipping reality. If your device ships as a small parcel under 150 lb, ISTA 3A is usually the most direct, widely recognized choice. If your device ships on pallets or by freight, exceeds the parcel weight limit, or moves through a custom or mixed-mode channel, ASTM D4169 lets you build a profile that matches. Customer or regulatory requirements can also decide it — when a submission or a customer specification names a standard, run that one.',
      '## You can run both',
      'Distribution is not always single-mode. A product that travels by freight to a distribution center and then ships to the end user as a parcel sees both environments. In that case it is reasonable to run ASTM D4169 for the freight leg and ISTA 3A for the parcel leg, so the validation covers the worst case of each. The decision should be documented in the protocol with a short rationale tied to the real distribution map.',
      '## What both have in common',
      'Whichever profile you choose, the package is conditioned first per ASTM D4332 to a defined temperature and humidity so the test starts from a known state, and after the hazard sequence the package proceeds to the sterile barrier integrity battery — visual inspection (ASTM F1886), dye penetration (ASTM F1929), bubble or gross leak (ASTM F2096), and seal strength (ASTM F88). Distribution simulation by itself proves nothing; it is the integrity testing afterward that demonstrates the barrier survived. Boulder Package Testing runs conditioning, distribution, and integrity testing under one protocol and one chain of custody so the post-distribution result is unambiguous.',
    ],
  },
  {
    slug: 'astm-f1980-accelerated-aging',
    title: 'ASTM F1980 Accelerated Aging: The Math Behind Your Shelf Life Claim',
    description:
      'How the Arrhenius equation, Q10 factors, and 55°C aging chambers actually translate into a defensible shelf-life claim for your sterile medical device.',
    datePublished: '2026-05-01',
    related: ['sterile-barrier-integrity-test-battery', 'ista-3a-vs-astm-d4169', 'medical-device-packaging-validation-cost'],
    body: [
      'A shelf-life claim on a sterile medical device is a promise: the sterile barrier system will still be intact after this many years on the shelf. Proving that in real time means waiting the full shelf life before you can sell anything, which is commercially impossible for a new product. ASTM F1980, the Standard Guide for Accelerated Aging of Sterile Barrier System Packages, exists to bridge that gap. It lets you support an interim claim using elevated temperature while the real-time study runs in parallel.',
      '## The Arrhenius principle',
      'Accelerated aging rests on the Arrhenius reaction-rate principle: chemical reaction rates increase with temperature. The degradation processes that eventually weaken a seal or a barrier film are, to a first approximation, temperature-dependent reactions. If you hold a package at a temperature above its normal storage temperature, those processes run faster, and a controlled amount of elevated-temperature exposure can simulate a much longer period at ambient.',
      '## The Q10 factor',
      'ASTM F1980 simplifies the Arrhenius relationship into a Q10 factor — the multiple by which the aging rate changes for every 10 degrees C change in temperature. The standard recommends a conservative Q10 of 2.0 unless you have material-specific data to justify another value. A Q10 of 2.0 means the aging rate doubles for each 10 degrees C above the ambient reference temperature. Choosing a higher Q10 shortens the test but is harder to defend; 2.0 is the widely accepted default precisely because it is conservative.',
      '## The math in practice',
      'The accelerated aging time is the desired real-time shelf life divided by the acceleration factor, where the acceleration factor is Q10 raised to the power of (aging temperature minus ambient) divided by 10. Using a Q10 of 2.0, an aging temperature of 55 degrees C, and an ambient reference of about 22 degrees C, the acceleration factor is roughly 10. That is why one year of real-time shelf life is commonly simulated in about 52 days at 55 degrees C, and a five-year claim takes on the order of 260 days of accelerated aging. Intermediate timepoints are pulled and tested so you have data along the curve, not only at the end.',
      '## Why 55 degrees C, and not higher',
      'It is tempting to push the temperature higher to finish faster, but the Arrhenius model only holds while the same degradation mechanisms dominate. Above roughly 60 degrees C, sterile barrier materials can start to fail by mechanisms that never occur at room temperature — adhesives soften or melt, films distort — which makes the accelerated result unrepresentative. ASTM F1980 cautions against exceeding about 60 degrees C for typical sterile barrier materials, and 55 degrees C with controlled humidity is the common, defensible setpoint.',
      '## Accelerated aging is not a substitute for real-time aging',
      'This is the point most often misunderstood. Accelerated aging supports product release; it does not replace the real-time study. ISO 11607 expects both to run concurrently: the accelerated data justifies the interim claim, and the real-time data, gathered at the actual shelf temperature over the actual shelf life, confirms that the accelerated model predicted reality. If the real-time data later diverges, the claim has to be revisited. Skipping the real-time arm is a deficiency that only becomes visible years later.',
      '## What the aging proves — and what proves the aging',
      'Aging on its own changes nothing you can see. The evidence comes from the integrity tests run on the aged samples: seal strength (ASTM F88), burst (ASTM F1140), dye penetration (ASTM F1929), bubble leak (ASTM F2096), and visual inspection (ASTM F1886). A complete shelf-life study ages the packages, then runs that battery at the defined timepoints, with acceptance criteria fixed in the protocol beforehand. Boulder Package Testing runs paired accelerated and real-time aging in calibrated, continuously monitored chambers and carries the aged samples directly into integrity testing under one chain of custody.',
    ],
  },
  {
    slug: 'packaging-design-validation-cost-drivers',
    title: 'Packaging Design for Sterile Medical Devices: 7 Decisions That Determine Your Validation Cost',
    description:
      'Seven early packaging design decisions — material, geometry, sealer, configuration — that drive validation cost more than any other factor.',
    datePublished: '2026-05-01',
    related: ['medical-device-packaging-validation-cost', 'when-to-involve-package-testing-lab', 'iso-11607-packaging-validation-mistakes'],
    body: [
      'By the time a package reaches validation, most of its cost is already locked in. The decisions that determine how much an ISO 11607 program will cost — and how long it will take — are made during packaging design, often before anyone has talked to a testing lab. Here are the seven that move the number the most.',
      '## 1. Sterile barrier material',
      'The choice of barrier material sets the testing path. A porous system such as a Tyvek-to-film pouch is validated for integrity primarily by dye penetration (ASTM F1929), while a non-porous package leans on bubble leak (ASTM F2096) and other methods, because dye penetration is only valid where at least one surface is porous. Material also drives how the package responds to sterilization and aging. Exotic or multi-layer films can introduce failure modes that complicate accelerated aging. The more standard and well-characterized the material, the more predictable the validation.',
      '## 2. Package format: pouch, header bag, or tray-and-lid',
      'Pouches and header bags are typically the least expensive to validate. Thermoformed tray-and-lid systems add process validation complexity because both the forming step and the sealing step have to be qualified under ISO 11607-2. The format decision is really a decision about how many processes you will have to validate.',
      '## 3. Seal geometry and seal area',
      'Seals are where packages fail, so seal design directly drives the integrity battery. Long, complex, or curved seal paths give more opportunity for channels and incomplete seals, which means more inspection and more samples. A clean, simple, generously dimensioned seal is cheaper to validate and more robust in production.',
      '## 4. Device geometry',
      'Sharp edges, points, and rigid protrusions stress the barrier from the inside during distribution. A device that can puncture or abrade its own packaging forces additional protective measures and can turn a routine distribution test into a repeated design-test-redesign loop. Accounting for device geometry in the packaging design — corner protection, restraint, fitment — avoids that loop.',
      '## 5. Sterilization modality',
      'EO, chlorine dioxide, gamma, and steam each stress packaging materials differently, and the test articles must be sterilized with the production modality and a representative cycle before aging and distribution. The modality decision therefore feeds straight into the validation plan, and a modality the package is not suited to can mean redesign. Co-locating sterilization with testing keeps this dependency in one place.',
      '## 6. Number of configurations and the bracketing strategy',
      'Every distinct package configuration is a potential validation. The cost lever here is a worst-case bracketing rationale: if you can justify that the largest and smallest, heaviest and sharpest configurations bound the family, you validate the brackets instead of every variant. That rationale has to be designed in and written down; it cannot be bolted on afterward.',
      '## 7. Shelf-life claim',
      'The shelf-life claim sets the aging duration, which is often the longest single element of the timeline. Using a Q10 of 2.0 at 55 degrees C, each additional year of claimed shelf life adds roughly four weeks of accelerated aging, plus the corresponding real-time study. Claiming more shelf life than the product actually needs adds cost and calendar time for no commercial benefit.',
      '## The common thread',
      'Every one of these is a design decision, not a testing decision — which is why involving a package testing lab during design, not after, is the most effective way to control validation cost. Boulder Package Testing reviews packaging designs against the full ISO 11607 test battery before the design is frozen, so the seven decisions above are made with their downstream cost in view.',
    ],
  },
  {
    slug: 'medical-device-packaging-validation-cost',
    title: 'What Does Medical Device Packaging Validation Actually Cost?',
    description:
      'A transparent breakdown of medical device packaging validation costs: protocol development, test execution, aging, distribution, and reporting.',
    datePublished: '2026-05-01',
    related: ['packaging-design-validation-cost-drivers', 'when-to-involve-package-testing-lab', 'dhf-packaging-validation-documentation'],
    body: [
      'There is no single price for packaging validation, because the work scales with the package, the shelf-life claim, and the number of configurations. But the cost is not a mystery either — it breaks down into a small number of components, and understanding them lets you scope a program intelligently rather than reacting to a quote. Note that the figures below are structural, not a price list; ask your lab for a quote against your specific protocol.',
      '## Protocol development',
      'The validation starts with a written protocol: the methods, sample sizes, statistical rationale, worst-case bracketing, sterilization sequence, aging plan, and predefined acceptance criteria. This is engineering time, not bench time, and it is the highest-leverage spend in the whole program. A well-built protocol prevents the most expensive failure mode in validation — discovering after the samples are consumed that the study did not answer the question a reviewer will ask.',
      '## Distribution simulation',
      'Distribution testing (ISTA 3A or ASTM D4169) is a defined sequence of conditioning, vibration, drop, and compression. The cost driver is the number of sample sets and the complexity of the profile — a flexible ASTM D4169 multi-leg sequence costs more to execute than a single prescriptive ISTA 3A run. The physical test sequence is typically a few days per sample set.',
      '## Aging',
      'Aging is usually the longest line item on the calendar even when it is modest on the invoice, because it is chamber time. Accelerated aging per ASTM F1980 at 55 degrees C with a Q10 of 2.0 runs about 52 days per simulated year; real-time aging runs for the full claimed shelf life. The cost is driven by the shelf-life claim and the number of timepoints pulled for testing.',
      '## Integrity and seal testing',
      'The integrity battery — visual inspection (ASTM F1886), dye penetration (ASTM F1929), bubble or gross leak (ASTM F2096), seal strength (ASTM F88), and burst (ASTM F1140) — is priced per sample per method. Sample size is set by your statistical rationale, so the protocol decisions above flow directly into this cost. Destructive tests consume the samples, so the count has to be planned, not improvised.',
      '## Reporting',
      'The final report ties the protocol, raw data, and acceptance criteria together into a document a 510(k) reviewer or Notified Body auditor can follow. Thorough reporting is not overhead — it is the deliverable that makes the testing usable in a submission. A study with good data and a weak report can still fail review.',
      '## What actually controls the total',
      'The largest swings come from decisions made before testing: the shelf-life claim (which sets aging duration), the number of configurations (which sets how much of the battery repeats), and the package and device design (which sets how likely you are to need a second round). A program scoped with a worst-case bracketing rationale and a shelf-life claim matched to actual need is dramatically cheaper than one that validates every variant for the longest possible claim.',
      '## Getting a real number',
      'Because cost is protocol-driven, the way to get an accurate figure is to scope the protocol first. Boulder Package Testing develops the protocol with your engineering and quality teams and quotes against it, so the number reflects your device, your claim, and your distribution channel rather than a generic package.',
    ],
  },
  {
    slug: 'sterile-barrier-integrity-test-battery',
    title: 'Seal Strength, Burst Testing, and Visual Inspection: Understanding Your Sterile Barrier Integrity Test Battery',
    description:
      'ASTM F88, F1140, F1929, F2096, and F1886 — what each test measures, when to run them, and how they fit together in an ISO 11607 validation.',
    datePublished: '2026-05-01',
    related: ['astm-f1980-accelerated-aging', 'iso-11607-packaging-validation-mistakes', 'ista-3a-vs-astm-d4169'],
    body: [
      'A sterile barrier integrity assessment is not a single test — it is a battery of complementary methods, each of which answers a different question about the package. No one method is sufficient on its own, which is why ISO 11607 validation programs combine them. Here is what each measures and how they fit together.',
      '## ASTM F1886 — visual inspection of seals',
      'Visual inspection is usually the first integrity test performed because it is non-destructive and can be run on every unit. ASTM F1886 standardizes the examination of heat seals under controlled, uniform lighting (typically a minimum of about 540 lux at the surface) to find wrinkles, channels, incomplete seals, seal creep, foreign material in the seal, and delamination. It catches the visible defects cheaply and early, but it cannot detect a channel too small to see, which is why it is paired with the methods below.',
      '## ASTM F88 — seal strength (peel)',
      'ASTM F88 measures the force required to peel a sealed area apart, reported as force per unit width. It characterizes the sealing process: a seal that is too weak risks opening, while one that is too strong can be impossible to open aseptically or can indicate an over-processed material. F88 also reports the failure mode — adhesive, cohesive, delamination, or material tear — which tells you how the seal is failing, not just at what force. It is central to both process validation and to tracking how seals hold up after aging and distribution.',
      '## ASTM F1140 — burst (unrestrained)',
      'Where F88 tests a specimen of the seal, ASTM F1140 tests the whole package by inflating it until it bursts and recording the burst pressure. It gives a single, fast measure of overall package strength and is well suited to sealing-process validation (IQ/OQ/PQ) and to comparing designs. F1140 tests unrestrained packages; the related ASTM F2054 restrains the package between plates to better simulate seal stress in shipping. Burst and peel are complementary — whole-package strength versus seal-specific behavior — and most protocols include both.',
      '## ASTM F1929 — dye penetration (porous packages)',
      'ASTM F1929 detects seal channels by applying a dye solution and looking for penetration through the seal. It is sensitive to channels on the order of about 50 microns and is the workhorse integrity test for porous systems such as Tyvek-to-film pouches, where at least one surface is porous. It is destructive, and it only applies to porous packages — a non-porous package needs a different method.',
      '## ASTM F2096 — bubble / gross leak',
      'ASTM F2096 submerges a pressurized package in water and watches for a steady bubble stream that indicates a gross leak. It is a fast, inexpensive screen for large defects. It is less sensitive than dye penetration to fine channels, so it is typically used alongside F1929 rather than instead of it. For porous packages the porous side must be sealed off so air does not simply pass through the material.',
      '## How they fit together',
      'The methods form a layered defense. Visual inspection (F1886) screens every unit for visible defects. Dye penetration (F1929) and bubble leak (F2096) probe for leaks the eye misses, at different sensitivities. Seal strength (F88) and burst (F1140) quantify how strong the seal and package are, and how they fail. A complete ISO 11607 validation runs the relevant subset of these — chosen for the package type — before and after sterilization, aging, and distribution, with acceptance criteria fixed in the protocol in advance. Boulder Package Testing executes the full battery under one protocol and one chain of custody so the integrity picture is consistent across timepoints.',
    ],
  },
  {
    slug: 'when-to-involve-package-testing-lab',
    title: 'When to Involve Your Package Testing Lab: The Right Answer Might Surprise You',
    description:
      'Most medical device companies bring in a package testing lab too late. Here is when to actually engage — and why earlier is cheaper.',
    datePublished: '2026-05-01',
    related: ['packaging-design-validation-cost-drivers', 'medical-device-packaging-validation-cost', 'iso-11607-packaging-validation-mistakes'],
    body: [
      'Most medical device companies engage a package testing lab when the design is frozen and the timeline says it is time to validate. By then, the decisions that determine whether validation goes smoothly — material, format, seal geometry, sterilization modality, shelf-life claim — are already locked. The right time to involve a lab is earlier than most teams think, and the reason is cost and schedule, not formality.',
      '## The late-engagement trap',
      'When a lab first sees a package at validation, it can only test what exists. If the design has a problem — a seal path prone to channels, a device geometry that abrades the barrier, a material that ages poorly, a configuration count with no bracketing rationale — the lab finds out by failing the test. Now the team is in a design-test-redesign loop: change the package, re-sterilize, re-age, re-run the battery. Each loop is weeks of chamber time and another set of consumed samples. The validation that looked like an 8-to-12-week project becomes two or three of those back to back.',
      '## Engage during packaging design',
      'The highest-leverage moment to involve a lab is while the packaging is still being designed. A lab reviewing the design against the ISO 11607 battery can flag the issues above before they are cast in tooling: it can steer the material and format toward well-characterized, testable choices, simplify the seal, confirm the sterilization sequence, and shape a worst-case bracketing strategy so you validate brackets instead of every variant. This is engineering review, not testing, and it is inexpensive relative to a failed validation round.',
      '## Engage when the shelf-life claim is set',
      'The shelf-life claim drives the longest part of the timeline. Bringing the lab in when the claim is being decided lets you match the claim to actual commercial need and plan the accelerated and real-time aging tracks from the start — including starting the real-time study early, since it runs for the full claimed life regardless of when you begin. A real-time study that should have started a year ago cannot be recovered later.',
      '## Engage before sterilization is finalized',
      'Because test articles must be sterilized with the production modality before aging and distribution, the sterilization decision and the package validation are linked. Aligning them early — ideally with sterilization and testing under one roof, as at the Boulder BioMed campus — removes the logistics and chain-of-custody gaps that otherwise appear between a contract sterilizer and a separate test lab.',
      '## The surprising answer',
      'The right time to involve your package testing lab is before you have a final package — during design, when the claim is set, and before sterilization is locked. Engaging that early feels premature, but it is the cheapest insurance available against a multi-round validation. Boulder Package Testing works with engineering and quality teams during design specifically to keep validation to a single, clean round.',
    ],
  },
  {
    slug: 'dhf-packaging-validation-documentation',
    title: 'Medical Device Packaging Validation: Building the DHF Chapter Your Auditor Will Actually Like',
    description:
      'How to structure the packaging validation chapter of your Design History File so 510(k) reviewers and Notified Body auditors find what they need.',
    datePublished: '2026-05-01',
    related: ['iso-11607-packaging-validation-mistakes', 'medical-device-packaging-validation-cost', 'sterile-barrier-integrity-test-battery'],
    body: [
      'Good packaging validation testing can still fail review if the documentation is hard to follow. A 510(k) reviewer or a Notified Body auditor does not re-run your tests — they read your file and decide whether it demonstrates compliance. The packaging chapter of the Design History File (DHF) is where that case is made. A well-structured chapter answers the reviewer\'s questions in the order they will ask them.',
      '## Start with the package definition and risk basis',
      'Open with an unambiguous definition of the sterile barrier system and the protective packaging: materials, format (pouch, header bag, tray-and-lid), seal design, and the device it protects. Tie the packaging requirements to the risk analysis so it is clear why the package has to do what it does. A reviewer who understands the package and its purpose can follow everything that follows.',
      '## State the validation strategy and worst-case rationale',
      'Document the strategy before the data: which ISO 11607-1 and ISO 11607-2 requirements are being addressed, how product families are bracketed, and why the tested configuration is the worst case. The worst-case rationale is one of the most frequently requested items in review — putting it up front, in writing, prevents the most common deficiency against packaging files.',
      '## Show the protocol with predefined acceptance criteria',
      'Include the validation protocol with methods, sample sizes, statistical rationale, the sterilization sequence, the aging plan, and acceptance criteria fixed before testing. The fact that criteria were defined in advance is itself evidence of a controlled validation. A chapter that presents results without the protocol that called for them invites the question of whether the criteria were chosen to fit the data.',
      '## Cover both parts of ISO 11607',
      'Make the Part 1 and Part 2 coverage explicit. Part 1: the sterile barrier system integrity evidence — distribution simulation (ISTA 3A or ASTM D4169), aging (ASTM F1980 accelerated plus real-time), and the integrity battery (ASTM F1886, F1929, F2096, F88, F1140). Part 2: the forming, sealing, and assembly process validation — the IQ/OQ/PQ of the sealing equipment, the defined process window, and the link between validated parameters and production. A file strong on Part 1 but silent on Part 2 is a recurring gap.',
      '## Present results so they map to criteria',
      'Lay out the test results next to the acceptance criteria they satisfy, with traceability to sample IDs, timepoints, and the conditions each sample saw (sterilized, aged, distributed). Photographs for visual and dye-penetration results, and statistical summaries for seal strength and burst, let a reviewer verify the conclusion without reconstructing it. The sterilize-then-age-then-distribute sequence should be visible in the sample histories.',
      '## Close with the conclusion and revalidation triggers',
      'End with a clear statement that the packaging system meets ISO 11607, the shelf-life claim it supports, and the conditions that would trigger revalidation — changes to materials, sealing process, sterilization modality, or shelf-life claim. This shows the validation is maintained, not one-and-done, which is exactly what an auditor wants to see.',
      '## The underlying principle',
      'A reviewer-friendly DHF chapter is one where the strategy, protocol, and results tell a single continuous story with no gaps for the reader to fill in. Boulder Package Testing structures its reports to drop directly into this DHF format — protocol, traceable data, predefined criteria, and conclusion — so the testing is usable in a submission, not just technically complete.',
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
