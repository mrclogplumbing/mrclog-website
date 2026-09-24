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
  typicalCost?: string;
  /** Extra guide sections shown under "About This Service". */
  sections?: { heading: string; intro?: string; items: { title: string; body: string }[] }[];
  /** Related pages linked near the bottom of the page. */
  related?: { href: string; label: string; desc: string }[];
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
    typicalCost: "From $180–$350 depending on job complexity",
  metaTitle: "24/7 Emergency Plumber Sydney | Fast Response",
    metaDescription: "Emergency plumber in Sydney available 24/7. Burst pipes, leaks, flooding — Mr. Clog responds in 60 min or less. $0 call-out fee. Call (02) 9139 8945.",
    related: [
      { href: "/services/24-hour-plumber", label: "24 Hour & After Hours Plumber", desc: "Night, weekend or public holiday? What can wait until morning, and what to shut off first." },
      { href: "/blog/burst-pipe-first-5-minutes", label: "Burst Pipe: The First 5 Minutes", desc: "Step-by-step: stop the water, kill the power, limit the damage." },
    ],
  },
  {
    slug: "24-hour-plumber",
    label: "24 Hour & After Hours Plumber",
    headline: "24 Hour & After Hours Plumber Sydney",
    subheadline: "Nights, weekends and public holidays: what needs a plumber tonight, and what to do until one arrives.",
    description:
      "Pipes rarely choose office hours to fail. A flexi hose lets go at 11pm, the only toilet overflows on a Sunday, the hot water tank splits on a public holiday with the whole family home. Mr. Clog takes calls around the clock, weekends and public holidays included, and sends a licensed plumber out after hours for problems that can't safely wait. Not every fault needs a night-time visit, though. The guide below helps you sort the urgent from the inconvenient, and shows the valves worth knowing before anything goes wrong.",
    benefits: [
      "Phones answered 24/7, including weekends and public holidays",
      "$0 call-out fee at any hour, day or night",
      "A fixed price before any work starts",
      "Fully stocked vans, so most jobs are fixed on the first visit",
      "Licensed & insured plumbers",
    ],
    process: [
      { step: "01", title: "Make It Safe", desc: "Shut the water off at the nearest valve, or get everyone outside if you smell gas. The steps are on this page." },
      { step: "02", title: "Ring Us", desc: "Tell us what is happening, the address, and what you have already turned off. Any hour is fine." },
      { step: "03", title: "Price Agreed", desc: "The plumber looks at the problem on site and gives you a fixed price. Nothing starts until you say yes." },
      { step: "04", title: "Repaired & Tested", desc: "The fault is repaired, the water is turned back on, and everything is checked for leaks before we go." },
    ],
    sections: [
      {
        heading: "Call Straight Away, Whatever the Time",
        intro: "These problems get worse by the minute or put people at risk. Don't wait for Monday.",
        items: [
          { title: "Water you can't stop", body: "A burst pipe, a split flexi hose or a leak that keeps running after you close the nearest valve. If only the main stop tap stops it, the house has no water until it is fixed." },
          { title: "Water near electrics", body: "Water coming through a ceiling light, pooling near power points or reaching the switchboard. Keep clear of it and treat the electrical risk first." },
          { title: "Sewage coming up inside", body: "A floor waste, shower or toilet backing up with waste water. This is a health risk, and flushing or running taps makes it worse." },
          { title: "A leaking hot water tank", body: "Water running from the tank itself, not just a drip from the relief pipe. A storage tank that has split will keep leaking until it is isolated and replaced." },
          { title: "A smell of gas", body: "Get everyone outside, leave switches and appliances alone, and ring 000 or your gas distributor's emergency line from outside. Then call a licensed gas fitter." },
        ],
      },
      {
        heading: "Usually Fine Until Morning",
        intro: "If you can isolate it and it isn't spreading, it can generally wait for a daytime booking.",
        items: [
          { title: "A dripping tap", body: "Annoying and wasteful, but not damaging overnight. Put a cloth in the basin if the noise keeps you awake." },
          { title: "A toilet that keeps running", body: "Turn off the small isolation valve on the wall behind the toilet. You can still flush once more by pouring a bucket of water into the bowl." },
          { title: "One blocked toilet when you have another", body: "Stop using it and use the other toilet. If it is the only toilet in the house, it moves up to urgent." },
          { title: "One slow drain", body: "A single sink or shower draining slowly, with everything else normal, is a local blockage. Avoid using it overnight." },
          { title: "No hot water, and nothing leaking", body: "We still take these calls at night, and with a baby, an elderly or unwell person in the house it may not be able to wait. If yours can manage until morning, our hot water troubleshooting guide covers the safe checks to try first." },
        ],
      },
      {
        heading: "Before We Arrive: Where to Turn Things Off",
        intro: "Find these on a quiet afternoon, not at midnight with a torch in your teeth.",
        items: [
          { title: "Fixture isolation valves", body: "Most toilets, basins, kitchen sinks and dishwashers have a small valve on the supply pipe underneath or behind them. Turning it off stops the water to that fixture only, so the rest of the house keeps running." },
          { title: "The main stop tap", body: "Usually beside the water meter near the front boundary, sometimes in a ground-level box. Turn it clockwise to shut off the whole property. Old taps can be stiff, so check yours turns before you need it." },
          { title: "The hot water system", body: "If the tank is leaking, close the cold water valve on the inlet pipe at the unit. For an electric system, switch off its circuit at the switchboard, but only if you can reach it without standing in water." },
          { title: "The gas meter", body: "The meter has a valve on the pipe coming into it. If it is safe to reach, turning the lever a quarter turn so it sits across the pipe closes the supply. If the smell is strong, leave first, then call from outside." },
          { title: "The electricity", body: "If water has reached power points, lights or the switchboard, switch off the main switch only if you can do it from dry ground. If you can't, stay away and ring 000, then call a licensed electrician." },
        ],
      },
      {
        heading: "How After-Hours Pricing Works",
        items: [
          { title: "No call-out fee", body: "Our call-out fee is $0 at any time, including nights, weekends and public holidays." },
          { title: "A fixed price first", body: "The plumber assesses the problem and gives you a fixed price for the work before starting, so you decide whether to go ahead knowing the full cost." },
        ],
      },
    ],
    faqs: [
      { q: "Will someone actually answer at 2am?", a: "Yes. Our phones are answered 24 hours a day, every day of the year, including weekends and public holidays." },
      { q: "Is there a call-out fee on weekends or public holidays?", a: "No. The call-out fee is $0 at any hour. You also get a fixed price for the work before anything starts." },
      { q: "My toilet is running at midnight. Should I call now?", a: "Usually not. Turn off the isolation valve behind the toilet and book a daytime visit. Call straight away if water is escaping onto the floor and the valve won't stop it." },
      { q: "What should I have ready when I call?", a: "Your address, what is happening and where, what you have already turned off, and whether water is near any electrics. Mention anything about access too, such as strata parking, a locked gate or pets." },
      { q: "Do you cover my suburb after hours?", a: "Our 24/7 service covers the Sydney metro area. Tell us your suburb when you call." },
    ],
    metaTitle: "24 Hour & After Hours Plumber Sydney",
    metaDescription: "After hours plumber in Sydney for nights, weekends and public holidays. What can't wait, what to shut off first, and $0 call-out fee at any hour.",
    related: [
      { href: "/services/emergency-plumbing", label: "Emergency Plumbing", desc: "Burst pipes, major leaks and flooding: our emergency plumbing service." },
      { href: "/blog/what-to-do-in-a-plumbing-emergency", label: "What to Do in a Plumbing Emergency", desc: "A calm plan for burst pipes, flooding, sewage and gas." },
      { href: "/blog/hot-water-not-working", label: "Hot Water Not Working?", desc: "Safe checks by symptom before you book a hot water repair." },
    ],
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
    typicalCost: "From $150–$400 for simple to complex blockages",
  metaTitle: "Blocked Drain Plumber Sydney | Same-Day Service",
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
    typicalCost: "Repairs from $150 · New system install from $800",
  metaTitle: "Hot Water System Repairs Sydney | Same-Day Service",
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
    typicalCost: "From $120–$250 for washer replacement to full install",
  metaTitle: "Tap & Toilet Repairs Sydney",
    metaDescription: "Dripping taps and running toilets fixed fast across Sydney. Mr. Clog — quality repairs, $0 call-out fee. Call (02) 9139 8945.",
    related: [
      { href: "/services/toilet-cistern-replacement", label: "Toilet Cistern Replacement", desc: "When a cistern needs replacing rather than repairing, and the types to choose from." },
      { href: "/blog/why-your-toilet-keeps-running", label: "Why Your Toilet Keeps Running", desc: "The three worn parts behind most running toilets." },
      { href: "/blog/toilet-leaking-at-the-base", label: "Toilet Leaking at the Base?", desc: "How to find where the water is really coming from." },
    ],
  },
  {
    slug: "toilet-cistern-replacement",
    label: "Toilet Cistern Replacement",
    headline: "Toilet Cistern Replacement Sydney",
    subheadline: "Running, cracked or leaking cistern? Find out whether it needs a part or a whole new cistern.",
    description:
      "Most cistern faults come down to one worn part, and a new inlet valve, flush valve or seal costs far less than a new cistern. Replacement is the right call when the cistern itself is cracked, when parts for an old model are no longer made, or when you want to trade an old single-flush cistern for a water-efficient dual flush. Mr. Clog repairs and replaces cisterns across Sydney, checks that the new cistern suits your existing pan, and replaces the whole suite when it doesn't.",
    benefits: [
      "Cistern and flush mechanism repairs",
      "Exposed and close-coupled cistern replacements",
      "Full toilet suite installations",
      "A fixed price before any work starts",
      "$0 call-out fee",
    ],
    process: [
      { step: "01", title: "Check the Fault", desc: "We find out whether a part or the cistern itself is at fault, and whether a new cistern will suit your pan." },
      { step: "02", title: "Fixed Quote", desc: "You get a fixed price for the repair, the new cistern, or a new suite if the pan needs replacing too." },
      { step: "03", title: "Swap It Over", desc: "We isolate the water, remove the old cistern, and fit the new one with a new seal and supply connection." },
      { step: "04", title: "Flush Test", desc: "We run full and half flushes and check the inlet, the seal and the pan for leaks." },
    ],
    sections: [
      {
        heading: "Repair or Replace? Signs to Look For",
        items: [
          { title: "Water running into the bowl", body: "Usually a worn flush valve seal or an inlet valve that won't shut off. Both are replaceable parts, so this is normally a repair, not a new cistern." },
          { title: "Phantom flushing", body: "The cistern refills for a few seconds on its own every so often. That is a slow leak past the flush valve seal, and a new seal or valve usually cures it." },
          { title: "A cracked cistern", body: "A crack in the porcelain can't be reliably repaired and can open up without warning. A cracked cistern should be replaced." },
          { title: "Leaking at the base", body: "Often the seal between the cistern and the pan, or the supply connection, rather than the cistern itself. Those are repairs. Replacement only comes into it if the cistern is damaged." },
          { title: "An old single-flush cistern", body: "Older single-flush cisterns commonly use around 11 litres every flush. Replacing one with a dual flush cistern or suite cuts water use substantially." },
          { title: "Parts no longer available", body: "Some older and discontinued cisterns take parts that are no longer made. When a repair isn't possible, replacement is the practical answer." },
        ],
      },
      {
        heading: "Types of Cistern",
        items: [
          { title: "Close-coupled", body: "The cistern sits directly on the back of the pan and is bolted to it through a rubber seal. This is the most common type in Sydney homes." },
          { title: "Exposed wall-mounted", body: "The cistern is fixed to the wall above the pan and joined to it by a flush pipe. Common in older homes and in some accessible bathrooms." },
          { title: "Concealed (in-wall)", body: "The cistern sits inside the wall, and only the flush plate shows. Most internal parts are serviced through the flush plate opening. Replacing the cistern body usually means opening the wall, so it is normally part of a renovation." },
          { title: "Dual flush", body: "A full flush and a half flush from two buttons. Dual flush was developed in Australia and is now the standard for new toilets here." },
          { title: "WELS rating", body: "Toilets sold in Australia carry a WELS label showing a star rating and water use. A 4-star dual flush suite typically uses 4.5 litres for a full flush and 3 litres for a half flush, an average of about 3.5 litres." },
        ],
      },
      {
        heading: "What the Job Involves",
        items: [
          { title: "Matching the pan", body: "The flush volume has to suit the pan. An older pan built for a large single flush may not clear properly with a modern low-volume cistern, which is why an upgrade is often a new suite rather than a cistern alone." },
          { title: "Isolate and remove", body: "The water is turned off at the isolation valve, the cistern is emptied and disconnected, and the old unit is lifted off." },
          { title: "Fit and connect", body: "The new cistern goes on with a new seal and fixings, and is connected to the water supply. An old or damaged flexi hose is worth replacing at the same time." },
          { title: "Licensed work", body: "Replacing a cistern means connecting to the water supply, and a new suite also connects to the sewer. In NSW that is work for a licensed plumber." },
        ],
      },
    ],
    faqs: [
      { q: "Can you replace just the cistern and keep my toilet pan?", a: "Often, yes, if a compatible cistern is available and the pan is in good condition. If the pan was designed for a much larger flush, or is cracked, a new suite is the better option." },
      { q: "My toilet keeps running. Do I need a new cistern?", a: "Usually not. A running toilet is almost always a worn flush valve seal or inlet valve inside the cistern, and both can be replaced." },
      { q: "What does a WELS star rating mean for a toilet?", a: "It shows how water-efficient the toilet is. More stars means less water per flush. A 4-star dual flush suite typically uses 4.5 litres for a full flush and 3 litres for a half flush." },
      { q: "Can I replace a toilet cistern myself?", a: "Not legally in NSW. Homeowners can replace some cistern washers, but replacing a cistern or toilet involves connecting to the water supply and is work for a licensed plumber." },
      { q: "Can you fix a concealed in-wall cistern?", a: "Yes. Most internal parts are reached through the flush plate opening. Replacing the cistern body itself usually means opening the wall, so we will tell you upfront if that applies." },
    ],
    metaTitle: "Toilet Cistern Replacement Sydney",
    metaDescription: "Toilet cistern replacement in Sydney. When to repair or replace, exposed vs concealed cisterns, dual flush and WELS ratings. $0 call-out fee.",
    related: [
      { href: "/services/taps-and-toilets", label: "Tap & Toilet Repairs", desc: "Running toilets, dripping taps and cistern repairs." },
      { href: "/blog/why-your-toilet-keeps-running", label: "Why Your Toilet Keeps Running", desc: "The three worn parts behind most running toilets, and the dye test." },
      { href: "/blog/toilet-leaking-at-the-base", label: "Toilet Leaking at the Base?", desc: "Condensation, a seal, or the pan connector: how to tell which." },
    ],
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
    typicalCost: "From $500 per metre (no-dig pipe repair)",
  metaTitle: "Pipe Relining Sydney | No-Dig Pipe Repair",
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
    typicalCost: "From $180–$350 for electronic leak detection",
  metaTitle: "Leak Detection Sydney | Find Hidden Leaks",
    metaDescription: "Professional leak detection in Sydney. Find leaks under slabs, walls, and underground without damage. Mr. Clog — $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "jet-blasting",
    label: "Jet Blasting",
    headline: "High-Pressure Jet Blasting Sydney",
    subheadline: "The most effective way to clear stubborn blockages and clean your drains.",
    description:
      "Jet Blasting uses a high-pressure water jet to blast through even the most stubborn blockages — grease, roots, scale, and built-up debris — and leave your pipes clean and flowing freely. It's faster and more thorough than a drain snake, and leaves no chemical residue.",
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
      { q: "Is Jet Blasting different from drain snaking?", a: "Yes — a drain snake punctures a blockage, while Jet Blasting clears the entire pipe diameter and cleans the walls. It's more thorough and longer-lasting." },
      { q: "Can Jet Blasting damage my pipes?", a: "Our operators adjust pressure for your pipe type. Modern Jet Blasting is safe for most pipes when performed correctly." },
      { q: "How often should I have my drains jet blasted?", a: "For residential properties, every 2–3 years is a good preventative measure. Commercial kitchens may need it more frequently." },
      { q: "Does it remove tree roots?", a: "Jet Blasting can cut through fine root intrusions. For heavier root infestations, we may use root cutting attachments or recommend pipe relining." },
    ],
    typicalCost: "From $250–$500 for residential drain cleaning",
  metaTitle: "Jet Blasting Sydney | High-Pressure Drain Cleaning",
    metaDescription: "Professional Jet Blasting across Sydney. Clear stubborn drains with high-pressure water jetting. Mr. Clog — $0 call-out fee. Call (02) 9139 8945.",
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
    typicalCost: "From $150–$400 for appliance connection to new install",
  metaTitle: "Licensed Gas Fitter Sydney | Gas Leaks & Installations",
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
    typicalCost: "Plumbing fit-out from $1,500 (scope dependent)",
  metaTitle: "Bathroom Renovation Plumber Sydney",
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
    typicalCost: "From $200–$600 for gutter repair to full replacement",
  metaTitle: "Roof Plumber Sydney | Gutters & Stormwater",
    metaDescription: "Roof plumbing across Sydney. Gutters, downpipes, stormwater, and flashings. Mr. Clog — licensed, $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "stormwater-drainage",
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
    typicalCost: "From $300–$1,200 for inspection to drainage design",
  metaTitle: "Stormwater Drainage Sydney | Blocked Pits & Drainage Design",
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
    typicalCost: "From $150–$280 for a single camera inspection",
  metaTitle: "CCTV Drain Camera Inspection Sydney",
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
    typicalCost: "From $150–$400 for repair to full kitchen fit-out",
  metaTitle: "Kitchen Plumber Sydney | Sinks, Dishwashers & Renovations",
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
    typicalCost: "From $150–$350 for connection to full fit-out",
  metaTitle: "Laundry Plumber Sydney | Washing Machine Connections",
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
    typicalCost: "From $120–$300 for test only to device install",
  metaTitle: "Backflow Prevention Testing Sydney | Certified Testers",
    metaDescription: "Backflow prevention testing, certification, and installation across Sydney. Certified testers, compliance certificates. Mr. Clog — Call (02) 9139 8945.",
    related: [
      { href: "/services/strata-and-commercial-plumbing", label: "Strata & Commercial Plumbing", desc: "Backflow testing alongside shared drains, hot water plant and leaks for strata and business premises." },
      { href: "/blog/backflow-prevention-testing-explained", label: "Backflow Testing Explained", desc: "What backflow is, who needs a device, and what the annual test involves." },
    ],
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
    typicalCost: "From $150–$350 for diagnosis to regulator install",
  metaTitle: "Low Water Pressure Plumber Sydney | PLV Repairs",
    metaDescription: "Fix low water pressure across Sydney. PLV testing and replacement, leak detection, pressure boosters. Mr. Clog — $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "strata-and-commercial-plumbing",
    label: "Strata & Commercial Plumbing",
    headline: "Strata & Commercial Plumbing Sydney",
    subheadline: "For strata managers, body corporates, apartment blocks, offices, shops, cafés and restaurants.",
    description:
      "Plumbing in a shared or working building is as much about access, responsibility and records as it is about pipes. Mr. Clog works with strata managers, owners corporations (body corporates) and building managers on apartment blocks, and with the owners and tenants of offices, shops and hospitality venues across Sydney. We find where a fault actually sits, so it is clear whether it belongs to a lot owner, the owners corporation or a tenant, and we put what we found in writing, with photos or camera footage.",
    benefits: [
      "Faults located, so lot and common property responsibility is clear",
      "Written reports with photos or CCTV footage for strata committees",
      "Planned water shut-offs arranged with the building manager",
      "Phones answered 24/7 for after-hours emergencies",
      "A fixed price before any work starts",
      "Licensed & insured plumbers",
    ],
    process: [
      { step: "01", title: "Tell Us the Problem", desc: "The strata manager, building manager, owner or tenant rings or emails with the address, the units or tenancies affected, and how we get in." },
      { step: "02", title: "Locate the Fault", desc: "We find where the fault sits, inside a lot or in common property, and check which other units or tenancies it affects." },
      { step: "03", title: "Fixed Quote", desc: "You get a fixed price before any work starts, so it can be approved by whoever is responsible for the repair." },
      { step: "04", title: "Repair & Report", desc: "We carry out and test the repair, then send a written summary with photos or camera footage for your records." },
    ],
    sections: [
      {
        heading: "Who We Work With",
        items: [
          { title: "Strata managers and owners corporations", body: "Common property plumbing in residential buildings: shared stacks and drains, stormwater, roof drainage and hot water plant. We can take instructions from the managing agent and arrange access with residents." },
          { title: "Apartment blocks and townhouse complexes", body: "Faults inside a lot, faults in common property, and the grey areas between them. The strata plan and by-laws decide who is responsible for what, so we report exactly where the fault is." },
          { title: "Offices", body: "Amenities, kitchenettes, hot water units, leaks and blocked drains in office tenancies and in the building's shared services." },
          { title: "Retail shops", body: "Amenities, sinks, hot water and leaks in shops and shopping strips, including tenancies where the landlord and the tenant each look after part of the plumbing." },
          { title: "Cafés, restaurants and bars", body: "Kitchen drains blocked with grease, hot water that can't keep up with service, leaking taps and pre-rinse sprays, and the call when something fails in the middle of a busy night." },
        ],
      },
      {
        heading: "Common Strata & Commercial Jobs",
        items: [
          { title: "Shared stacks and drains", body: "When several units report slow drains at once, the fault is usually in a shared stack or main drain, not in any one apartment. We clear it from the right access point and use a drain camera to show what caused it." },
          { title: "Backflow prevention testing", body: "Testable backflow devices on fire services, irrigation and commercial equipment need testing every year by a certified tester, with the results lodged with Sydney Water. We test, repair and replace devices." },
          { title: "Hot water plant", body: "Central hot water plant, banks of storage heaters and individual unit heaters. We work out whether a cold shower is a fault in the apartment or in the building's plant, because that decides who pays." },
          { title: "Leaks between units", body: "Water coming through a ceiling from the unit above. We trace the source, whether a shower waste, a toilet seal, a flexi hose or a pipe in the wall, so the strata manager can tell whether it is the lot owner's repair or common property." },
          { title: "After-hours access", body: "Burst pipes and overflowing drains don't keep business hours. We take calls 24/7 and work with building managers, concierges and on-call contacts to get in and shut off the right section." },
          { title: "Tenant and resident coordination", body: "Shutting off water or getting into several apartments or tenancies takes planning. We agree times with the building manager in advance, so residents and tenants can be told before the water goes off." },
        ],
      },
    ],
    faqs: [
      { q: "Who pays for a plumbing problem in a strata building?", a: "It depends on where the fault is. Generally, pipes that serve only one lot and sit within it are the lot owner's responsibility, and pipes in common property or serving more than one lot belong to the owners corporation. The strata plan and by-laws decide the details. We locate the fault and report exactly where it is, so the strata manager can decide." },
      { q: "Can you work directly with our strata manager or building manager?", a: "Yes. We can take instructions from the managing agent, send the quote to them for approval, and arrange access with the building manager and residents." },
      { q: "Do you provide written reports for strata committees?", a: "Yes. Camera footage or photos plus a written report showing where the fault is, what caused it, and what we recommend." },
      { q: "Do you test backflow prevention devices?", a: "Yes. Registered testable devices need testing every 12 months by a certified tester. We test them, repair or replace failed devices, and lodge the results with Sydney Water." },
      { q: "Can planned work be done outside trading hours?", a: "Often, yes. Emergencies are handled 24/7, and planned work can be booked at a time that suits the business, where the job and the building's access rules allow it." },
      { q: "Is there a call-out fee for strata or commercial jobs?", a: "No. The $0 call-out fee applies to strata and commercial jobs too, and you get a fixed price before any work starts." },
    ],
    metaTitle: "Strata & Commercial Plumbing Sydney",
    metaDescription: "Strata and commercial plumber in Sydney for strata managers, apartment blocks, offices, shops and restaurants. Shared drains, backflow, hot water plant, leaks.",
    related: [
      { href: "/services/backflow-prevention", label: "Backflow Prevention Testing", desc: "Annual testing, repairs and Sydney Water lodgement for testable devices." },
      { href: "/services/blocked-drains", label: "Blocked Drains", desc: "Shared stacks, main drains and kitchen drains cleared, with CCTV to show the cause." },
      { href: "/services/leak-detection", label: "Leak Detection", desc: "Finding the source of a leak into the unit below without opening every wall." },
      { href: "/services/hot-water-systems", label: "Hot Water Systems", desc: "Unit heaters and building hot water plant repaired and replaced." },
      { href: "/services/cctv-drain-inspection", label: "CCTV Drain Inspection", desc: "Camera footage that shows where a fault is and who is responsible for it." },
      { href: "/services/24-hour-plumber", label: "24 Hour & After Hours Plumber", desc: "Nights, weekends and public holidays: what can't wait, and what to shut off first." },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
