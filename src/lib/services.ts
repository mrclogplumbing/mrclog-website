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
}
