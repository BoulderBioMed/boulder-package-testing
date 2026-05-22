export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'What is ISO 11607 and what testing does it require?',
    answer: 'ISO 11607 is the global consensus validation standard for terminally sterilized medical device packaging. Part 1 covers requirements for materials, sterile barrier systems, and packaging systems. Part 2 covers validation of forming, sealing, and assembly processes. A typical ISO 11607 program includes package conditioning (ASTM D4332), distribution simulation (ASTM D4169 or an ISTA profile such as 3A), accelerated aging (ASTM F1980), seal strength (ASTM F88), visual inspection of seals (ASTM F1886), dye penetration (ASTM F1929), and bubble or gross leak testing (ASTM F2096).',
  },
  {
    question: 'What is the difference between ISTA 3A and ASTM D4169 for medical device packaging?',
    answer: 'Both are recognized distribution test schemes used to demonstrate that a sterile barrier system survives shipping. ASTM D4169 is a flexible framework where the manufacturer selects assurance levels and hazard sequences to match their distribution channel. ISTA 3A is the industry-standard prescriptive profile for packaged products of 150 lb or less shipped through parcel-delivery networks, and is widely used for medical devices. ISTA 2A is a partial-simulation profile for less rigorous distribution scenarios.',
  },
  {
    question: 'What is ASTM F1980 accelerated aging?',
    answer: 'ASTM F1980 is the standard guide that uses elevated temperature to simulate the effect of time on a sterile barrier system, allowing manufacturers to support shelf-life claims before real-time aging completes. Using a Q10 of 2.0, one year of real-time shelf life can be simulated in roughly 52 days at 55 degrees C.',
  },
  {
    question: 'How long does a standard medical device packaging validation take?',
    answer: 'For a standard one-year shelf life claim using ASTM F1980 accelerated aging at 55 degrees C, end-to-end turnaround is typically 8 to 12 weeks. Each additional year of shelf life adds roughly four weeks to the overall project.',
  },
  {
    question: 'Is Boulder Package Testing accredited?',
    answer: 'Boulder Package Testing operates ISTA-aligned and ISO 17025-aligned protocols under the Boulder BioMed ISO 13485 quality management system. Full ISTA certification and ISO 17025 accreditation are in progress. All testing is performed to the methods and reporting requirements of the relevant ISO, ASTM, and ISTA standards.',
  },
  {
    question: 'What makes Boulder Package Testing different from other contract labs?',
    answer: 'We are the only US package testing lab co-located with EO and chlorine dioxide sterilization. Devices sterilized by Boulder Sterilization move directly to package testing without leaving our campus. This means one chain of custody, one quality system, and faster turnaround compared to shipping samples between separate facilities.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve medical device manufacturers across all device categories, including orthopedic implants, cardiovascular devices, in vitro diagnostics, dental devices, surgical instruments, and combination products. Our testing protocols are tailored to the specific distribution and shelf-life requirements of each device category.',
  },
  {
    question: 'What is the sterilization-to-test workflow?',
    answer: 'Devices sterilized by Boulder Sterilization (EO or chlorine dioxide) transfer directly into distribution simulation and aging testing in our package testing lab on the same campus. This eliminates shipping between facilities, reduces chain-of-custody complexity, and shortens overall project timelines.',
  },
  {
    question: 'Do you offer real-time aging in addition to accelerated aging?',
    answer: 'Yes. All accelerated aging programs include paired real-time aging studies that run concurrently. Accelerated aging provides interim shelf-life support for product release, while real-time aging confirms the accelerated results over the full claimed shelf life.',
  },
  {
    question: 'What seal testing methods do you offer?',
    answer: 'We execute seal strength testing per ASTM F88 (peel test), burst testing per ASTM F1140, dye penetration testing per ASTM F1929, bubble leak testing per ASTM F2096, and visual seal inspection per ASTM F1886. These methods are typically combined in an ISO 11607 validation program for comprehensive seal and sterile barrier evaluation.',
  },
  {
    question: 'Can you design a complete validation protocol for my device?',
    answer: 'Yes. We work with your engineering and quality teams to design audit-ready ISO 11607-1 and ISO 11607-2 validation programs tailored to your device, packaging configuration, distribution environment, and shelf-life requirements. The protocol defines sample sizes, test methods, acceptance criteria, and reporting format.',
  },
  {
    question: 'Where are you located?',
    answer: 'Boulder Package Testing is located at 5375 Western Ave., Boulder, CO 80301, on the same campus as Boulder Sterilization, Boulder iQ, Boulder RA/QA, and Boulder BioLabs. We serve medical device manufacturers nationwide as the only US package testing lab co-located with EO and chlorine dioxide sterilization.',
  },
  {
    question: 'How do I get started with a packaging validation project?',
    answer: 'Contact us with your device description, packaging configuration, target standards, and desired shelf-life claim. We will propose a test plan, provide a quote, and schedule your project. Most projects begin with a protocol review call to align on scope, sample requirements, and timeline.',
  },
  {
    question: 'What quality system do you operate under?',
    answer: 'Boulder Package Testing operates under the Boulder BioMed ISO 13485 quality management system. All equipment is calibrated, all methods are procedure-controlled, and all testing is performed by trained personnel with documented competency. We are pursuing ISO 17025 accreditation to further formalize our testing laboratory quality system.',
  },
  {
    question: 'Do you handle sample conditioning before testing?',
    answer: 'Yes. All samples are conditioned per ASTM D4332 in calibrated environmental chambers before testing begins. We document conditioning time, temperature, and humidity with continuous data logging, ensuring full traceability from sample receipt through conditioning to test completion.',
  },
];
