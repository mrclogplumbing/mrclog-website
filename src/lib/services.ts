export interface Service {
  slug: string;
  label: string;
  headline: string;
  subheadline: string;
  description: string;
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "emergency-plumbing",
    label: "Emergency Plumbing",
    headline: "24/7 Emergency Plumbing Sydney",
    subheadline: "Burst pipes, major leaks, flooding — we're on call around the clock.",
    description:
      "Plumbing emergencies don't wait for business hours. Mr. Clog's emergency team is available 24 hours a day, 7 days a week, 365 days a year across all Sydney metro areas. We arrive fast, diagnose quickly, and fix it right — with $0 call-out fee.",
    benefits: [
      "Average response time under 60 minutes",
      "$0 call-out fee, any time of day",
      "Fully stocked vans — most jobs fixed on the first visit",
      "Upfront pricing before any work begins",
      "Licensed & insured technicians",
    ],
    process: [
      { step: "01", title: "Call Us", desc: "Call (02) 9139 8945 any time. Our team answers 24/7 — no automated menus." },
      { step: "02", title: "Fast Dispatch", desc: "The nearest available plumber is dispatched to your address immediately." },
      { step: "03", title: "Diagnose & Quote", desc: "We assess the issue and give you a fixed price before starting any work." },
      { step: "04", title: "Problem Solved", desc: "We fix the issue efficiently and clean up the worksite before we leave." },
    ],
    faqs: [
      { q: "How quickly can you arrive?", a: "In most Sydney metro areas we aim to arrive within 30–60 minutes. We'll give you an accurate ETA when you call." },
      { q: "Do you charge extra for after-hours callouts?", a: "We charge $0 call-out fee at any time. We'll give you a transparent quote before starting — no surprise fees." },
      { q: "What counts as a plumbing emergency?", a: "Burst pipes, major leaks, sewage backups, no hot water, gas leaks, and flooding all qualify. When in doubt, call us." },
      { q: "Are your plumbers licensed?", a: "Yes — all Mr. Clog plumbers hold current NSW Fair Trading licences and are fully insured." },
    ],
    metaTitle: "24/7 Emergency Plumber Sydney | Mr. Clog | Fast Response",
    metaDescription: "Emergency plumber in Sydney available 24/7. Burst pipes, leaks, flooding — Mr. Clog responds in 60 min or less. $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "blocked-drains",
    label: "Blocked Drains",
    headline: "Blocked Drain Specialists Sydney",
    subheadline: "Fast, permanent solutions for blocked drains — no mess, no fuss.",
    description:
      "Blocked drains are one of the most common plumbing problems in Sydney homes and businesses. Mr. Clog uses CCTV drain cameras and high-pressure water jetting to locate and clear blockages fast — including tree roots, grease build-up, and foreign objects.",
    benefits: [
      "CCTV drain inspection to find the exact cause",
      "High-pressure water jetting for a thorough clean",
      "Same-day service available",
      "Permanent solutions, not just temporary fixes",
      "All drain types: kitchen, bathroom, stormwater, sewer",
    ],
    process: [
      { step: "01", title: "Inspection", desc: "We run a CCTV camera through your drain to pinpoint the blockage." },
      { step: "02", title: "Diagnose", desc: "We identify the cause — roots, grease, debris, or collapsed pipe — and quote the fix." },
      { step: "03", title: "Clear", desc: "We use high-pressure jetting or a drain snake to fully clear the blockage." },
      { step: "04", title: "Verify", desc: "We re-inspect after clearing to confirm the drain is flowing freely." },
    ],
    faqs: [
      { q: "How do I know if I have a blocked drain?", a: "Slow draining sinks, gurgling sounds, bad smells from drains, or water backing up are all signs of a blockage." },
      { q: "Can you clear tree root intrusions?", a: "Yes — we use high-pressure water jetting and root cutting tools to remove roots. For severe cases, pipe relining may be recommended." },
      { q: "How long does it take to unblock a drain?", a: "Most standard blockages are cleared within 1–2 hours. Complex cases involving root intrusions or collapsed pipes may take longer." },
      { q: "Will you make a mess?", a: "We take every precaution to protect your property. We use drop sheets and clean up thoroughly when the job is done." },
    ],
    metaTitle: "Blocked Drain Plumber Sydney | Mr. Clog | Same-Day Service",
    metaDescription: "Blocked drains cleared fast in Sydney. CCTV inspection, high-pressure jetting, same-day service. Mr. Clog — $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "hot-water-systems",
    label: "Hot Water Systems",
    headline: "Hot Water System Repairs & Replacements",
    subheadline: "No hot water? We'll have it back on fast — same day in most cases.",
    description:
      "From a pilot light that won't stay lit to a fully failed hot water system, Mr. Clog repairs and replaces all major hot water brands across Sydney. We work on electric, gas, solar, and heat pump systems and carry common parts in our vans to get you hot water back fast.",
    benefits: [
      "All brands and system types serviced",
      "Same-day repairs and next-day installations",
      "Supply and install new systems",
      "Energy-efficient upgrade advice",
      "$0 call-out fee",
    ],
    process: [
      { step: "01", title: "Diagnose", desc: "We inspect your hot water system and identify whether it needs a repair or replacement." },
      { step: "02", title: "Quote", desc: "We provide upfront pricing for repairs or a range of replacement options." },
      { step: "03", title: "Repair or Install", desc: "We fix or replace your system using quality parts and brands." },
      { step: "04", title: "Test & Sign Off", desc: "We test the system thoroughly and walk you through the new setup before leaving." },
    ],
    faqs: [
      { q: "How long do hot water systems last?", a: "Most systems last 8–12 years. If yours is older than 10 years and failing, replacement is often more cost-effective than repair." },
      { q: "What size system do I need?", a: "It depends on your household size. We'll assess your usage and recommend the right capacity and type for your situation." },
      { q: "Can you replace my system the same day?", a: "In many cases yes — we carry common models in our vans. More complex installations may be scheduled for the next day." },
      { q: "Do you offer solar or heat pump systems?", a: "Yes — we supply, install and service solar hot water and heat pump systems and can advise on rebates available." },
    ],
    metaTitle: "Hot Water System Repairs Sydney | Mr. Clog | Same-Day Service",
    metaDescription: "Hot water repairs and replacements across Sydney. All brands, all system types. Mr. Clog — fast, reliable, $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "taps-and-toilets",
    label: "Taps & Toilets",
    headline: "Tap & Toilet Repairs Sydney",
    subheadline: "Dripping taps and running toilets waste water and money. We fix them fast.",
    description:
      "A dripping tap can waste thousands of litres of water a year. Mr. Clog repairs and replaces all types of taps, mixers, and toilets across Sydney — including washers, cartridges, cisterns, and full fixture replacements. Quality parts, clean work, upfront pricing.",
    benefits: [
      "All tap and toilet brands and types",
      "Washer and cartridge replacements",
      "Cistern and flush mechanism repairs",
      "Full tap and toilet suite installations",
      "Same-day service available",
    ],
    process: [
      { step: "01", title: "Assess", desc: "We check the tap or toilet and identify the fault — washer, cartridge, valve, or full fixture." },
      { step: "02", title: "Quote", desc: "We give you a fixed price for the repair or replacement before starting." },
      { step: "03", title: "Fix", desc: "We carry common parts in our vans and fix most issues on the first visit." },
      { step: "04", title: "Test", desc: "We test for leaks and confirm everything is working before we pack up." },
    ],
    faqs: [
      { q: "Is it worth repairing a dripping tap?", a: "Yes — a dripping tap wastes up to 20,000 litres per year and adds to your water bill. A simple washer or cartridge replacement is inexpensive." },
      { q: "My toilet keeps running — is that a big deal?", a: "A constantly running toilet can waste 200+ litres a day. It's usually a worn flapper valve or float — a quick, inexpensive fix." },
      { q: "Can you supply and install a new tap or toilet?", a: "Absolutely. We can source and install most styles and brands. Bring us a model number or let us recommend something that suits your bathroom." },
      { q: "Do you fix outdoor taps?", a: "Yes — garden taps, hose taps, and outdoor fixtures are all in our scope." },
    ],
    metaTitle: "Tap & Toilet Repairs Sydney | Mr. Clog Plumbing",
    metaDescription: "Dripping taps and running toilets fixed fast across Sydney. Mr. Clog — quality repairs, $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "pipe-relining",
    label: "Pipe Relining",
    headline: "No-Dig Pipe Relining Sydney",
    subheadline: "Repair cracked or root-damaged pipes without digging up your yard.",
    description:
      "Pipe relining is a modern, trenchless method of repairing damaged pipes from the inside. Instead of digging up your garden or driveway, we insert a resin-coated liner into the existing pipe and cure it in place — creating a new pipe within the old one. Less disruption, longer lasting.",
    benefits: [
      "No excavation — your yard stays intact",
      "25+ year lifespan on relined pipes",
      "Works on cracked, root-damaged, or collapsed pipes",
      "Suitable for stormwater, sewer, and drain pipes",
      "CCTV inspection included",
    ],
    process: [
      { step: "01", title: "CCTV Inspection", desc: "We camera your drain to assess the damage and confirm relining is the right solution." },
      { step: "02", title: "High-Pressure Clean", desc: "We jet blast the pipe to remove roots, debris, and build-up before lining." },
      { step: "03", title: "Reline", desc: "A resin-impregnated liner is inserted and inflated, then cured in place — typically within hours." },
      { step: "04", title: "Post-Inspection", desc: "We camera the pipe again to confirm the lining is smooth, sealed, and flowing freely." },
    ],
    faqs: [
      { q: "Is pipe relining as good as replacing the pipe?", a: "In many cases it's better. The cured resin liner is smooth and resistant to root intrusion, corrosion, and cracking for 25+ years." },
      { q: "How long does pipe relining take?", a: "Most residential relining jobs are completed in a single day. Longer pipe sections or difficult access may take longer." },
      { q: "What pipes can be relined?", a: "Most types — clay, concrete, cast iron, and PVC. We'll confirm suitability after the CCTV inspection." },
      { q: "Will my garden be dug up?", a: "No — that's the key benefit of relining. We access the pipe through existing inspection openings wherever possible." },
    ],
    metaTitle: "Pipe Relining Sydney | No-Dig Pipe Repair | Mr. Clog",
    metaDescription: "No-dig pipe relining across Sydney. Fix cracked or root-damaged pipes without excavation. Mr. Clog — $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "leak-detection",
    label: "Leak Detection",
    headline: "Professional Leak Detection Sydney",
    subheadline: "Find hidden leaks fast — without tearing up walls or floors.",
    description:
      "Hidden water leaks can cause thousands of dollars of damage before they're found. Mr. Clog uses acoustic leak detection and thermal imaging technology to locate leaks inside walls, under slabs, and underground — with minimal disruption to your property.",
    benefits: [
      "Non-invasive acoustic and thermal imaging technology",
      "Leaks found under slabs, behind walls, and underground",
      "Fast, accurate location — no unnecessary digging",
      "Report provided with leak location",
      "Repair quote included",
    ],
    process: [
      { step: "01", title: "Site Assessment", desc: "We discuss your symptoms — high water bills, damp patches, mould — to narrow the search area." },
      { step: "02", title: "Detection", desc: "We use acoustic listening devices and thermal cameras to pinpoint the leak non-invasively." },
      { step: "03", title: "Report", desc: "We provide a clear report of the leak location and recommend the repair approach." },
      { step: "04", title: "Repair", desc: "We carry out the repair — patching, pipe replacement, or relining as appropriate." },
    ],
    faqs: [
      { q: "How do I know if I have a hidden leak?", a: "Signs include unexplained water bill increases, damp patches on walls or ceilings, the sound of running water when taps are off, and mould growth." },
      { q: "Will you need to break tiles or walls?", a: "We try to avoid it. Our detection technology locates the leak precisely so any access is minimal and targeted." },
      { q: "Can you detect leaks under a concrete slab?", a: "Yes — this is one of our specialities. Slab leaks are detected acoustically and confirmed with pressure testing." },
      { q: "Is the detection charge separate from the repair?", a: "We provide one transparent quote covering detection and repair. No hidden fees." },
    ],
    metaTitle: "Leak Detection Sydney | Find Hidden Leaks | Mr. Clog",
    metaDescription: "Professional leak detection in Sydney. Find leaks under slabs, walls, and underground without damage. Mr. Clog — $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "jett-blasting",
    label: "Jett Blasting",
    headline: "High-Pressure Jett Blasting Sydney",
    subheadline: "The most effective way to clear stubborn blockages and clean your drains.",
    description:
      "Jett blasting uses a high-pressure water jet to blast through even the most stubborn blockages — grease, roots, scale, and built-up debris — and leave your pipes clean and flowing freely. It's faster and more thorough than a drain snake, and leaves no chemical residue.",
    benefits: [
      "Clears grease, roots, scale, and debris",
      "Environmentally friendly — no chemicals",
      "Leaves pipes clean, not just unblocked",
      "Suitable for all pipe sizes",
      "CCTV inspection available before and after",
    ],
    process: [
      { step: "01", title: "Inspect", desc: "We use a CCTV camera to assess the blockage type and location before jetting." },
      { step: "02", title: "Jet", desc: "High-pressure water is propelled through the pipe, scouring walls and blasting through blockages." },
      { step: "03", title: "Flush", desc: "Dislodged material is flushed through and out of the drain system." },
      { step: "04", title: "Re-inspect", desc: "We camera the pipe again to confirm it's fully clear and flowing." },
    ],
    faqs: [
      { q: "Is jett blasting different from drain snaking?", a: "Yes — a drain snake punctures a blockage, while jett blasting clears the entire pipe diameter and cleans the walls. It's more thorough and longer-lasting." },
      { q: "Can jett blasting damage my pipes?", a: "Our operators adjust pressure for your pipe type. Modern jett blasting is safe for most pipes when performed correctly." },
      { q: "How often should I have my drains jett blasted?", a: "For residential properties, every 2–3 years is a good preventative measure. Commercial kitchens may need it more frequently." },
      { q: "Does it remove tree roots?", a: "Jett blasting can cut through fine root intrusions. For heavier root infestations, we may use root cutting attachments or recommend pipe relining." },
    ],
    metaTitle: "Jett Blasting Sydney | High-Pressure Drain Cleaning | Mr. Clog",
    metaDescription: "Professional jett blasting across Sydney. Clear stubborn drains with high-pressure water jetting. Mr. Clog — $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "gas-fitting",
    label: "Gas Fitting",
    headline: "Licensed Gas Fitting Sydney",
    subheadline: "Gas installations, repairs, and safety checks by fully licensed gas fitters.",
    description:
      "Gas work must be carried out by a licensed gas fitter — it's the law in NSW. Mr. Clog's licensed gas plumbers install, repair, and service all types of gas appliances and pipework across Sydney. We also carry out gas leak detection and safety inspections.",
    benefits: [
      "All gas fitters fully licensed under NSW law",
      "Gas leak detection and safety inspections",
      "New gas appliance connections",
      "Gas line repairs and extensions",
      "Certificates of compliance provided",
    ],
    process: [
      { step: "01", title: "Safety First", desc: "If you suspect a gas leak, we advise you to evacuate and call us immediately. We respond as an emergency." },
      { step: "02", title: "Assess", desc: "We inspect your gas system, appliances, and pipework to identify any faults or requirements." },
      { step: "03", title: "Quote & Approve", desc: "We provide a clear upfront quote. No work starts without your approval." },
      { step: "04", title: "Install & Certify", desc: "We complete the work to Australian standards and provide a compliance certificate." },
    ],
    faqs: [
      { q: "What are the signs of a gas leak?", a: "The smell of gas (rotten egg odour), hissing sounds near gas lines or appliances, dead vegetation over gas lines, or higher-than-normal gas bills." },
      { q: "What should I do if I smell gas?", a: "Leave the building immediately, don't operate any electrical switches, and call us from outside. We treat gas leaks as emergencies." },
      { q: "Can I connect a new gas appliance myself?", a: "No — in NSW, gas appliance connections must be done by a licensed gas fitter. Unlicensed work is illegal and dangerous." },
      { q: "Do you work on natural gas and LPG?", a: "Yes — we're licensed for both natural gas and LPG systems." },
    ],
    metaTitle: "Licensed Gas Fitter Sydney | Gas Leaks & Installations | Mr. Clog",
    metaDescription: "Licensed gas fitting in Sydney. Gas leaks, appliance connections, safety inspections. Mr. Clog — $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "bathroom-renovations",
    label: "Bathroom Renovations",
    headline: "Bathroom Renovation Plumbing Sydney",
    subheadline: "Complete plumbing fit-outs for bathroom renovations — done right, on time.",
    description:
      "Whether you're doing a full bathroom renovation or updating fixtures, Mr. Clog handles all the plumbing rough-in and fit-out work. We work with your builder or tiler, or we can manage the full project. From repositioning waste points to installing basins, showers, and bathtubs.",
    benefits: [
      "Full rough-in and fit-out plumbing",
      "Works with your builder or as lead contractor",
      "All fixture types — basins, showers, baths, toilets",
      "Waterproofing advice and coordination",
      "Inspections and compliance certificates",
    ],
    process: [
      { step: "01", title: "Design & Plan", desc: "We review your renovation plans and advise on waste and water supply positioning." },
      { step: "02", title: "Rough-In", desc: "We install all rough-in plumbing — pipes, waste points, and water supply before tiling." },
      { step: "03", title: "Fit-Off", desc: "After tiling, we return to install and connect all fixtures and fittings." },
      { step: "04", title: "Test & Certify", desc: "We pressure-test, check for leaks, and provide compliance documentation." },
    ],
    faqs: [
      { q: "Can you move waste and water points?", a: "Yes — repositioning drain waste and water supply points is common in renovations and is part of our rough-in service." },
      { q: "Do I need to use the same plumber for rough-in and fit-off?", a: "Not always, but it's much easier. Using Mr. Clog for both means continuity and accountability through the whole project." },
      { q: "Do you supply fixtures or just install?", a: "Both options are available. We can supply quality fixtures or work with what you've purchased yourself." },
      { q: "How long does bathroom plumbing take?", a: "Rough-in typically takes 1 day. Fit-off is another 1–2 days depending on the number of fixtures." },
    ],
    metaTitle: "Bathroom Renovation Plumber Sydney | Mr. Clog Plumbing",
    metaDescription: "Expert bathroom renovation plumbing across Sydney. Rough-in, fit-off, all fixtures. Mr. Clog — $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "roof-plumbing",
    label: "Roof Plumbing",
    headline: "Roof Plumbing Sydney",
    subheadline: "Gutters, downpipes, stormwater, and roof drainage — sorted.",
    description:
      "Roof plumbing covers everything above the gutter line — gutters, downpipes, stormwater drains, roof flashings, and rainwater tanks. Mr. Clog's roof plumbers repair, replace, and install roof drainage systems across Sydney, keeping your home protected from water damage.",
    benefits: [
      "Gutter repairs and replacements",
      "Downpipe installations and repairs",
      "Stormwater drainage solutions",
      "Roof flashings and overflow relief",
      "Rainwater tank connections",
    ],
    process: [
      { step: "01", title: "Inspect", desc: "We inspect your roof drainage system for rust, leaks, blockages, and compliance issues." },
      { step: "02", title: "Quote", desc: "We provide a detailed, upfront quote covering all required work." },
      { step: "03", title: "Install or Repair", desc: "We carry out the work using quality materials and correct fall calculations." },
      { step: "04", title: "Test", desc: "We run water through the system to confirm correct drainage and no leaks." },
    ],
    faqs: [
      { q: "How often should gutters be cleaned?", a: "Twice a year is recommended — before summer storm season and after autumn leaf fall. Overhanging trees may require more frequent clearing." },
      { q: "Can blocked downpipes cause interior water damage?", a: "Yes — overflowing gutters can penetrate roof cavities and cause significant interior damage. Don't delay on blocked downpipes." },
      { q: "Do you install rainwater tanks?", a: "Yes — we connect rainwater tanks to your stormwater and indoor plumbing, including toilet and laundry connections where approved." },
      { q: "Are you licensed for roof plumbing in NSW?", a: "Yes — roof plumbing requires a specific licence endorsement in NSW. All Mr. Clog roof plumbers hold the required endorsements." },
    ],
    metaTitle: "Roof Plumber Sydney | Gutters & Stormwater | Mr. Clog",
    metaDescription: "Roof plumbing across Sydney. Gutters, downpipes, stormwater, and flashings. Mr. Clog — licensed, $0 call-out fee. Call (02) 9139 8945.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}slug: "stormwater-drainage",
    label: "Stormwater Drainage",
    headline: "Stormwater Drainage Solutions Sydney",
    subheadline: "Blocked stormwater, flooding, and drainage design — solved fast.",
    description:
      "Poor stormwater drainage can cause flooding, structural damage, and costly repairs. Mr. Clog designs, installs, and repairs stormwater drainage systems for homes and businesses across Sydney. From clearing blocked pits to full drainage redesigns, we keep water moving away from your property.",
    benefits: [
      "Stormwater pit and pipe clearing",
      "New drainage system design and installation",
      "CCTV inspection of stormwater lines",
      "Overflow relief gully installation",
      "Compliance with Sydney Water and council requirements",
    ],
    process: [
      { step: "01", title: "Assess", desc: "We inspect your property's drainage — pits, pipes, and surface flow — to identify where water is pooling or not flowing correctly." },
      { step: "02", title: "Diagnose", desc: "We identify the root cause — blockage, incorrect fall, undersized pipe, or failed pit — and quote the fix." },
      { step: "03", title: "Clear or Install", desc: "We clear blockages, repair damaged pits, or install new drainage infrastructure as required." },
      { step: "04", title: "Test", desc: "We test the system under simulated flow conditions and confirm all water is draining correctly." },
    ],
    faqs: [
      { q: "Water pools in my yard after rain — what causes this?", a: "Usually either a blocked stormwater pit or pipe, incorrect surface fall, or a drainage system that was never properly installed. We'll identify the cause quickly." },
      { q: "Is stormwater plumbing licensed work in NSW?", a: "Yes — stormwater drainage is licensed plumbing work. DIY installations are not compliant and can create liability issues when selling your property." },
      { q: "Can you connect my downpipes to the stormwater system?", a: "Yes — we connect roof downpipes to underground stormwater drainage as part of new installations or upgrades." },
      { q: "Do you install ag drains and subsoil drainage?", a: "Yes — subsoil drainage and agricultural drains are part of our stormwater drainage service for properties with persistent wet areas." },
    ],
    metaTitle: "Stormwater Drainage Sydney | Blocked Pits & Drainage Design | Mr. Clog",
    metaDescription: "Stormwater drainage solutions across Sydney. Blocked pits, new drainage systems, CCTV inspection. Mr. Clog — $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "cctv-drain-inspection",
    label: "CCTV Drain Inspection",
    headline: "CCTV Drain Camera Inspection Sydney",
    subheadline: "See exactly what's inside your pipes — before you spend a dollar on repairs.",
    description:
      "A CCTV drain inspection sends a high-resolution camera through your pipes to reveal blockages, cracks, root intrusions, and collapsed sections — with pinpoint accuracy. Mr. Clog uses professional drain cameras on every blocked drain job and as a standalone inspection service for home buyers, property managers, and anyone with recurring drainage issues.",
    benefits: [
      "High-resolution colour camera footage",
      "Pinpoint location of blockages, cracks, and root intrusions",
      "Footage and report provided",
      "Essential for pre-purchase property inspections",
      "Recommended before any pipe relining or major drain work",
    ],
    process: [
      { step: "01", title: "Access", desc: "We locate the nearest inspection opening or cleanout point to access your drain." },
      { step: "02", title: "Camera", desc: "We feed a flexible camera through the pipe, recording footage and noting any defects, blockages, or damage." },
      { step: "03", title: "Report", desc: "We provide a clear written report with footage and our recommended course of action." },
      { step: "04", title: "Quote", desc: "If repairs are needed, we quote upfront before any work begins." },
    ],
    faqs: [
      { q: "When should I get a CCTV drain inspection?", a: "Before buying a property, after recurring drain blockages, before a renovation, or if you suspect root intrusion or pipe damage." },
      { q: "Do I get to see the footage?", a: "Yes — we show you the footage on-site and provide a copy with our written report." },
      { q: "How long does a CCTV inspection take?", a: "Most residential inspections take 30–60 minutes depending on the length and complexity of the drain system." },
      { q: "Is CCTV inspection included with blocked drain jobs?", a: "Yes — we include a camera inspection on blocked drain jobs to identify the cause and confirm the drain is clear after jetting." },
    ],
    metaTitle: "CCTV Drain Camera Inspection Sydney | Mr. Clog Plumbing",
    metaDescription: "Professional CCTV drain inspections across Sydney. Identify blockages, cracks, and root intrusion fast. Mr. Clog — $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "kitchen-plumbing",
    label: "Kitchen Plumbing",
    headline: "Kitchen Plumbing Sydney",
    subheadline: "Sink repairs, dishwasher connections, and kitchen fit-outs — done right.",
    description:
      "From a blocked kitchen sink to a full kitchen renovation fit-out, Mr. Clog handles all kitchen plumbing across Sydney. We install and repair sinks, mixers, garbage disposals, dishwashers, and under-bench filtration systems — quickly, cleanly, and with upfront pricing.",
    benefits: [
      "Kitchen sink repairs and replacements",
      "Dishwasher supply and waste connections",
      "Mixer tap and filter tap installation",
      "Garbage disposal installation",
      "Kitchen renovation rough-in and fit-off",
    ],
    process: [
      { step: "01", title: "Assess", desc: "We inspect your kitchen plumbing — sink, waste, supply lines — and identify any faults or requirements." },
      { step: "02", title: "Quote", desc: "We provide a fixed upfront price for the repair or installation before starting." },
      { step: "03", title: "Install or Repair", desc: "We carry common parts and fittings in our vans and complete most jobs on the first visit." },
      { step: "04", title: "Test", desc: "We run water through the full system and check for leaks before packing up." },
    ],
    faqs: [
      { q: "My kitchen sink is draining slowly — what's causing it?", a: "Usually a grease build-up in the waste trap or drain line. We clear it with high-pressure jetting and can fit a grease trap if it's a recurring problem." },
      { q: "Can you connect my new dishwasher?", a: "Yes — dishwasher connections require both a water supply and a waste connection to your sink plumbing. We handle both." },
      { q: "Can you install a filtered water tap?", a: "Yes — we install under-bench filtration systems and filter taps for all major brands." },
      { q: "Do you do kitchen renovation plumbing?", a: "Yes — we carry out full kitchen renovation plumbing including repositioning waste and supply points, installing new sinks, and connecting all appliances." },
    ],
    metaTitle: "Kitchen Plumber Sydney | Sinks, Dishwashers & Renovations | Mr. Clog",
    metaDescription: "Kitchen plumbing across Sydney. Sink repairs, dishwasher connections, filter taps, and kitchen renovations. Mr. Clog — $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "laundry-plumbing",
    label: "Laundry Plumbing",
    headline: "Laundry Plumbing Sydney",
    subheadline: "Washing machine connections, trough repairs, and laundry fit-outs across Sydney.",
    description:
      "Mr. Clog handles all laundry plumbing — from connecting a new washing machine to installing a laundry trough or carrying out a full laundry renovation fit-out. We work on hot and cold supply lines, waste connections, and overflow relief to keep your laundry functioning safely.",
    benefits: [
      "Washing machine supply and waste connections",
      "Laundry trough installation and repairs",
      "Tap and mixer replacements",
      "Overflow relief and drainage upgrades",
      "Full laundry renovation fit-outs",
    ],
    process: [
      { step: "01", title: "Assess", desc: "We inspect your laundry plumbing and identify what's needed — repair, connection, or installation." },
      { step: "02", title: "Quote", desc: "Fixed upfront price before any work starts." },
      { step: "03", title: "Install", desc: "We complete connections and installations neatly and to Australian standards." },
      { step: "04", title: "Test", desc: "We run a full cycle test and check for leaks before leaving." },
    ],
    faqs: [
      { q: "Can you connect my new washing machine?", a: "Yes — washing machine connections include hot and cold inlet hoses and a waste outlet to your laundry drain. We also fit compliant tap sets where needed." },
      { q: "My laundry is flooding when the machine drains — why?", a: "Usually a blocked laundry drain or an overflow relief gully that's too small for the machine's flow rate. We diagnose and fix both." },
      { q: "Can you install a new laundry trough?", a: "Yes — we supply and install laundry troughs with tap sets and waste connections." },
      { q: "Do you do full laundry fit-outs for renovations?", a: "Yes — including repositioning waste and supply points, new tapware, and troughs as part of a full laundry renovation." },
    ],
    metaTitle: "Laundry Plumber Sydney | Washing Machine Connections | Mr. Clog",
    metaDescription: "Laundry plumbing across Sydney. Washing machine connections, trough installation, drain repairs. Mr. Clog — $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "backflow-prevention",
    label: "Backflow Prevention",
    headline: "Backflow Prevention Testing & Installation Sydney",
    subheadline: "Annual backflow testing and device installation by certified testers.",
    description:
      "Backflow prevention devices protect Sydney's drinking water supply from contamination. NSW regulations require annual testing of all registered backflow prevention devices by a certified tester. Mr. Clog is certified to test, certify, repair, and install backflow prevention devices for commercial and residential properties across Sydney.",
    benefits: [
      "Annual backflow testing and certification",
      "Testable and non-testable device installation",
      "Compliance certificates issued",
      "Repairs and device replacements",
      "Required for commercial, industrial, and many residential properties",
    ],
    process: [
      { step: "01", title: "Test", desc: "A certified technician tests your backflow prevention device using calibrated test equipment." },
      { step: "02", title: "Certify or Repair", desc: "If the device passes, we issue a compliance certificate. If it fails, we repair or replace the device on the spot where possible." },
      { step: "03", title: "Lodge", desc: "We lodge the test results with Sydney Water on your behalf as required by regulation." },
      { step: "04", title: "Remind", desc: "We schedule your next annual test so you never fall out of compliance." },
    ],
    faqs: [
      { q: "What is backflow prevention?", a: "A backflow prevention device stops contaminated water from flowing back into the mains drinking water supply. They're required on properties where there's a risk of cross-connection." },
      { q: "How often do backflow devices need to be tested?", a: "Annually — NSW regulations require all registered testable backflow devices to be tested by a certified tester every 12 months." },
      { q: "What happens if I don't test my backflow device?", a: "Sydney Water can issue notices and fines for non-compliant properties. Untested devices can also fail silently, creating a contamination risk." },
      { q: "Do residential properties need backflow devices?", a: "Some do — especially properties with irrigation systems, pools, or other non-drinking water connections to the mains. We can advise whether your property requires one." },
    ],
    metaTitle: "Backflow Prevention Testing Sydney | Certified Testers | Mr. Clog",
    metaDescription: "Backflow prevention testing, certification, and installation across Sydney. Certified testers, compliance certificates. Mr. Clog — Call (02) 9139 8945.",
  },
  {
    slug: "water-pressure",
    label: "Water Pressure",
    headline: "Low Water Pressure Repairs Sydney",
    subheadline: "Diagnose and fix low water pressure in your home or business fast.",
    description:
      "Low water pressure makes showers weak, taps slow, and appliances inefficient. Mr. Clog diagnoses the cause — whether it's a failing pressure limiting valve, a partially closed isolation valve, a hidden leak, or a mains supply issue — and fixes it fast across all Sydney suburbs.",
    benefits: [
      "Pressure limiting valve (PLV) testing and replacement",
      "Pipe scale and blockage diagnosis",
      "Leak detection for pressure loss",
      "Pressure boosting pump installation",
      "Mains supply pressure assessment",
    ],
    process: [
      { step: "01", title: "Test", desc: "We measure your water pressure at multiple points to pinpoint where the pressure drop is occurring." },
      { step: "02", title: "Diagnose", desc: "We identify the cause — PLV failure, partial blockage, leak, or supply issue — and quote the fix." },
      { step: "03", title: "Repair", desc: "We replace the PLV, clear the blockage, fix the leak, or install a pressure booster as required." },
      { step: "04", title: "Confirm", desc: "We retest pressure throughout the property to confirm normal flow has been restored." },
    ],
    faqs: [
      { q: "What causes low water pressure?", a: "The most common causes are a failing pressure limiting valve (PLV), a partially closed stop valve, scale build-up in older pipes, or a hidden leak reducing flow." },
      { q: "What is a pressure limiting valve?", a: "A PLV regulates mains water pressure down to a safe level for your internal plumbing. When it fails, you get either very low or very high pressure. Most need replacement every 10 years." },
      { q: "Can you install a pressure booster pump?", a: "Yes — if your mains pressure is genuinely low, a pressure booster pump can significantly improve flow throughout your property." },
      { q: "Is high water pressure a problem too?", a: "Yes — excessively high pressure accelerates wear on fixtures, valves, and appliances. A correctly set PLV protects your entire plumbing system." },
    ],
    metaTitle: "Low Water Pressure Plumber Sydney | PLV Repairs | Mr. Clog",
    metaDescription: "Fix low water pressure across Sydney. PLV testing and replacement, leak detection, pressure boosters. Mr. Clog — $0 call-out fee. Call (02) 9139 8945.",
  },
];

export function getService(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
}
