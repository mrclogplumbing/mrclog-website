import type { Location } from "@/lib/locations";

/**
 * Suburb pages.
 *
 * The site already had sixteen region pages — Inner West, Eastern Suburbs and
 * so on — and named 274 suburbs across them with no page for any of them.
 * "Plumber Inner West" is contested by every large operator in Sydney.
 * "Blocked drain Newtown" is not, and it is the search someone makes when
 * they are about to call somebody.
 *
 * These are deliberately a couple of dozen rather than all 274. A page per
 * suburb with the name swapped out is thin content, search engines treat it
 * as such, and it would undo the work the rest of the site is doing. Each
 * page here says something true and specific about plumbing in that suburb —
 * its housing stock, its soil, its trees, its drainage — and where there is
 * nothing particular to say, the suburb does not get a page.
 *
 * Everything asserted here is either observable (housing age and type, the
 * coast, mature street trees) or a well-established characteristic of Sydney
 * building stock. Nothing is invented to fill space.
 */
export const suburbPages: Location[] = [
  {
    slug: "newtown",
    parent: "inner-west",
    label: "Newtown",
    headline: "Plumber Newtown",
    subheadline: "Terrace plumbing, blocked drains and root intrusion — 24/7 across Newtown, Enmore and Erskineville.",
    description:
      "Newtown is terrace country, and terrace plumbing has its own rules. Most homes here were built between the 1880s and the 1920s, which means original earthenware sewer lines, no side access, and a shared wall with the neighbour on each side. Mr. Clog works on these every week.",
    localContent:
      "The two things that bring us to Newtown most often are tree roots and access. King Street's plane trees and the big figs through Camperdown send roots a long way, and a hundred-year-old clay sewer joint is the easiest water source they will find. Access is the other half of the job — there is usually no side path, so equipment comes through the house. We work to that, with drop sheets down and boots off.",
    suburbs: ["Enmore", "Erskineville", "Camperdown", "Stanmore", "St Peters", "Alexandria"],
    services: ["Blocked Drains", "Pipe Relining", "Emergency Plumbing", "Leak Detection", "Bathroom Renovations", "Hot Water Systems"],
    commonProblems: [
      {
        title: "Tree roots in original clay sewer lines",
        body: "Almost every unrelined terrace in Newtown still drains through earthenware pipe laid before the war. The joints were never watertight by modern standards, and mature street trees find them. A camera inspection tells you whether it is a clean-out or a relining job before anyone quotes.",
      },
      {
        title: "No side access",
        body: "Terraces share walls on both sides, so there is rarely a path to the back. Drain machines, jetter hoses and hot water units all come through the front door and down the hall. It is normal here and we plan for it rather than charging extra for it.",
      },
      {
        title: "Shared and boundary drainage",
        body: "Terraces frequently share a sewer line or a stormwater run with the house next door, and the responsibility for a blockage is not always obvious. A camera locates exactly where the fault sits relative to the boundary, which matters before anyone starts paying for it.",
      },
    ],
    faqs: [
      { q: "Can you get equipment into a Newtown terrace?", a: "Yes. Most terraces have no side access and we work through the house as a matter of course — drop sheets down, and everything out again the same day." },
      { q: "My drain keeps blocking every few months. Why?", a: "Recurring blockages in Newtown are usually roots returning to the same joint. Clearing works, but it is a maintenance cycle. Relining that section stops it permanently, and a camera inspection tells you which you are dealing with." },
      { q: "Do you work on heritage-listed terraces?", a: "Yes. Much of Newtown is in a conservation area. We work within those constraints and will tell you upfront if something needs council or heritage approval before we start." },
    ],
    metaTitle: "Plumber Newtown | Blocked Drains & Terrace Plumbing",
    metaDescription: "Local plumber in Newtown, Enmore and Erskineville. Blocked drains, root intrusion, pipe relining and emergency plumbing. $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "marrickville",
    parent: "inner-west",
    label: "Marrickville",
    headline: "Plumber Marrickville",
    subheadline: "Blocked drains, stormwater and hot water across Marrickville, Dulwich Hill and Sydenham.",
    description:
      "Marrickville mixes interwar brick bungalows with Victorian terraces and a growing number of converted warehouses. It also sits low against the Cooks River, which shapes the kind of plumbing work the suburb needs.",
    localContent:
      "Drainage is the recurring theme here. Parts of Marrickville sit low and flat, and stormwater that copes for years will find its limit in a heavy Sydney downpour. We see blocked and undersized stormwater lines, surcharging gullies and water pooling against the house. The other half of the work is the brick bungalows — original clay sewer, original galvanised water service, and both reaching the end of a long life at about the same time.",
    suburbs: ["Dulwich Hill", "Sydenham", "Tempe", "St Peters", "Petersham", "Hurlstone Park"],
    services: ["Blocked Drains", "Stormwater Drainage", "Hot Water Systems", "Emergency Plumbing", "Pipe Relining", "Leak Detection"],
    commonProblems: [
      {
        title: "Stormwater that cannot keep up",
        body: "Low-lying streets and original stormwater lines are a bad combination in a downpour. Water pooling near the house, a gully surcharging, or a downpipe backing up usually means the line is blocked, undersized, or has lost its fall.",
      },
      {
        title: "Galvanised water service on its way out",
        body: "Interwar homes here were plumbed in galvanised steel, which rusts closed from the inside. Pressure drops off so gradually that people assume it is the mains. Replacing the service in copper restores it, and the difference is immediate.",
      },
      {
        title: "Warehouse conversions with retrofitted drainage",
        body: "Converted industrial buildings often run waste through lines that were never designed for residential use. When a shower or laundry drains slowly in a converted space, the cause is usually fall or pipe size rather than a blockage.",
      },
    ],
    faqs: [
      { q: "Water pools in my yard every time it rains. Is that a plumbing job?", a: "Usually yes. It normally means the stormwater line is blocked, has lost its fall, or is too small for the roof area feeding it. We camera the line and tell you which before quoting." },
      { q: "How quickly can you get to Marrickville?", a: "Marrickville is one of our core areas and we are usually onsite within 30–60 minutes for emergencies. We will give you an accurate ETA when you call." },
      { q: "Do you handle Sydney Water requirements for drainage work?", a: "Yes. Any work connecting to the sewer or affecting stormwater is done to Sydney Water and council requirements, and we tell you upfront when approvals are needed." },
    ],
    metaTitle: "Plumber Marrickville | Blocked Drains & Stormwater",
    metaDescription: "Local plumber in Marrickville, Dulwich Hill and Sydenham. Blocked drains, stormwater, hot water and 24/7 emergency plumbing. $0 call-out. Call (02) 9139 8945.",
  },
  {
    slug: "leichhardt",
    parent: "inner-west",
    label: "Leichhardt",
    headline: "Plumber Leichhardt",
    subheadline: "Root intrusion, pipe relining and emergency plumbing across Leichhardt, Annandale and Lilyfield.",
    description:
      "Leichhardt is Federation and Victorian housing with the mature gardens to match. Big established trees on big established blocks make it one of the worst suburbs in Sydney for root intrusion, and one where relining usually beats digging.",
    localContent:
      "The classic Leichhardt job is a sewer line that has been cleared three times already. Old clay pipe, a mature tree within ten metres, and a blockage that returns every wet season. Clearing it is the cheap answer and it works for a while. Relining the affected section is the expensive answer that ends it. A camera inspection is what tells you honestly which one your pipe needs, and we would rather you spent the money once.",
    suburbs: ["Annandale", "Lilyfield", "Haberfield", "Rozelle", "Petersham", "Ashfield"],
    services: ["Pipe Relining", "Blocked Drains", "CCTV Drain Inspection", "Jet Blasting", "Emergency Plumbing", "Leak Detection"],
    commonProblems: [
      {
        title: "Repeat root intrusion",
        body: "Mature street and garden trees plus original earthenware sewer is the defining plumbing problem in Leichhardt. If your drain blocks on a cycle rather than once, roots are the likely cause and clearing alone will not end it.",
      },
      {
        title: "Collapsed or misaligned sections",
        body: "Clay pipe a century old does not only crack — sections drop and joints pull apart as the ground moves. A camera shows whether you are looking at a clean-out, a reline, or a dig, and those are very different numbers.",
      },
      {
        title: "Original bathrooms on original waste",
        body: "Many Leichhardt bathrooms are still on their first waste and vent arrangement. When renovating, the rough-in usually needs redoing to current standards, and it is better to find that before the tiler is booked than after.",
      },
    ],
    faqs: [
      { q: "Is pipe relining better than replacing the pipe?", a: "In Leichhardt, usually. Relining avoids excavating a mature garden or a driveway, and a relined section will not let roots back in. Where a pipe has collapsed completely, digging is sometimes the only option — the camera tells us which." },
      { q: "How long does relining take?", a: "Most residential sections are done in a day. We inspect, jet the line clean, install the liner and re-inspect before we leave." },
      { q: "Will you need to dig up my garden?", a: "Relining is done through existing access points, so usually not. If excavation is unavoidable we will show you the camera footage and explain why before you commit." },
    ],
    metaTitle: "Plumber Leichhardt | Pipe Relining & Root Removal",
    metaDescription: "Local plumber in Leichhardt, Annandale and Lilyfield. Tree root removal, pipe relining, CCTV drain inspection and emergency plumbing. Call (02) 9139 8945.",
  },
  {
    slug: "balmain",
    parent: "inner-west",
    label: "Balmain",
    headline: "Plumber Balmain",
    subheadline: "Heritage terrace plumbing, drainage and hot water across Balmain, Rozelle and Birchgrove.",
    description:
      "Balmain sits on a sandstone peninsula, and that shapes the plumbing more than anything else. Steep blocks, rock close to the surface, heritage terraces and harbour-side stormwater all make for work that needs planning rather than brute force.",
    localContent:
      "Excavation is the constant here. Sandstone sits shallow across the peninsula, which makes trenching slow and expensive — one of the reasons relining so often makes sense in Balmain rather than replacing a line. The gradient is the other factor: steep blocks running down to the harbour move stormwater fast, and where a line has lost fall or a gully has silted up, it shows in a downpour rather than gradually.",
    suburbs: ["Rozelle", "Birchgrove", "Lilyfield", "Drummoyne", "Annandale", "Glebe"],
    services: ["Pipe Relining", "Blocked Drains", "Stormwater Drainage", "Emergency Plumbing", "Hot Water Systems", "Bathroom Renovations"],
    commonProblems: [
      {
        title: "Sandstone close to the surface",
        body: "Shallow rock makes excavation slow and costly across the peninsula. It is the main reason relining a damaged sewer usually works out better here than digging it up and replacing it.",
      },
      {
        title: "Steep blocks and stormwater fall",
        body: "Homes stepping down toward the water rely on their stormwater keeping up. Blocked or silted lines on a steep block do not drain slowly, they overflow, and usually at the worst point of the storm.",
      },
      {
        title: "Heritage constraints on renovations",
        body: "Much of Balmain is heritage-controlled. Bathroom and kitchen work often needs to respect original fabric and approval conditions, which is worth establishing before the design is finalised rather than after.",
      },
    ],
    faqs: [
      { q: "Can you reline instead of digging? My yard is solid rock.", a: "That is exactly why relining suits Balmain. It is done through existing access points, so shallow sandstone stops being a problem rather than a cost." },
      { q: "Do you work on heritage-listed properties?", a: "Yes. We work within heritage constraints and will tell you upfront where something needs council approval before we start." },
      { q: "How fast can you reach Balmain in an emergency?", a: "Usually within 30–60 minutes. We are available 24/7 and there is no call-out fee." },
    ],
    metaTitle: "Plumber Balmain | Heritage Terraces & Pipe Relining",
    metaDescription: "Local plumber in Balmain, Rozelle and Birchgrove. Pipe relining, blocked drains, stormwater and emergency plumbing. $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "surry-hills",
    parent: "sydney-cbd",
    label: "Surry Hills",
    headline: "Plumber Surry Hills",
    subheadline: "Terrace and apartment plumbing, shared drainage and 24/7 emergency work across Surry Hills and Darlinghurst.",
    description:
      "Surry Hills is dense, old, and built on top of itself. Victorian terraces, warehouse conversions and small apartment blocks all share boundaries and often share drainage, which makes locating a fault as important as fixing it.",
    localContent:
      "The question that comes up most in Surry Hills is whose pipe it is. Terraces here commonly share a sewer line, and in a converted or strata building the boundary between a private fault and common property is rarely obvious from the inside. A camera inspection settles it before anyone spends money, which matters more here than almost anywhere — it decides whether the owner, the neighbour or the strata is paying.",
    suburbs: ["Darlinghurst", "Redfern", "Chippendale", "Paddington", "Waterloo", "Ultimo"],
    services: ["Blocked Drains", "CCTV Drain Inspection", "Emergency Plumbing", "Leak Detection", "Taps & Toilets", "Hot Water Systems"],
    commonProblems: [
      {
        title: "Shared sewer lines between terraces",
        body: "Rows of terraces frequently drain into one line. A blockage affects several houses and the responsibility depends on exactly where it sits. Locating it precisely is what determines who pays.",
      },
      {
        title: "Strata versus private responsibility",
        body: "In converted warehouses and small blocks, the split between common property and a private fault is often unclear. A camera inspection with a located depth and distance gives strata something definite to work from.",
      },
      {
        title: "Grease from ground-floor kitchens",
        body: "Surry Hills has commercial kitchens under residential floors across much of the suburb. Grease in a shared line causes blockages upstream of where it was ever poured, and recurring blockages with no obvious cause often trace back to this.",
      },
    ],
    faqs: [
      { q: "The blockage might be the neighbour's. How do you tell?", a: "We run a camera and locate the fault to a measured depth and distance from the access point. That is what establishes whether it sits on your property, theirs, or common land." },
      { q: "Do you work with strata managers?", a: "Yes, regularly. We provide camera footage and a written report so the committee has something concrete rather than a verbal description." },
      { q: "Can you come out after hours?", a: "Yes — 24/7, with no call-out fee. Surry Hills is close to our core area and we are usually there within 30–60 minutes." },
    ],
    metaTitle: "Plumber Surry Hills | Blocked Drains & Strata Plumbing",
    metaDescription: "Local plumber in Surry Hills and Darlinghurst. Blocked drains, shared sewer lines, CCTV inspection and 24/7 emergency plumbing. Call (02) 9139 8945.",
  },
  {
    slug: "bondi",
    parent: "eastern-suburbs",
    label: "Bondi",
    headline: "Plumber Bondi",
    subheadline: "Corrosion, apartment plumbing and emergency work across Bondi, Bondi Junction and North Bondi.",
    description:
      "Bondi plumbing is shaped by salt. Everything metal within a few streets of the water corrodes faster than it does inland, and a great deal of Bondi's housing is Art Deco and post-war blocks where one failure affects several apartments.",
    localContent:
      "Salt air is the difference here. Roof plumbing, gutters, external pipework, tap spindles and hot water units all have a shorter life in Bondi than the same fittings would have in Chatswood. The practical consequence is that things fail earlier than owners expect, and in an apartment block a hot water unit or a burst flexible hose does not stay one apartment's problem for long.",
    suburbs: ["Bondi Junction", "North Bondi", "Bondi Beach", "Tamarama", "Bronte", "Waverley"],
    services: ["Emergency Plumbing", "Hot Water Systems", "Roof Plumbing", "Leak Detection", "Taps & Toilets", "Blocked Drains"],
    commonProblems: [
      {
        title: "Salt air corrosion",
        body: "Gutters, downpipes, external pipework and tapware all corrode faster this close to the ocean. Fittings that would last fifteen years inland can need attention much sooner, and roof plumbing is usually the first to show it.",
      },
      {
        title: "Apartment block water damage",
        body: "In a block, a failed flexible hose or a leaking hot water unit runs into the apartment below before anyone notices. Isolating quickly matters more than the repair itself, which is why knowing where your stop tap is matters in Bondi.",
      },
      {
        title: "Sand in drainage lines",
        body: "Sand carried in from the beach and blown into stormwater lines settles and builds up over years. It reduces the effective size of the pipe and shows up as a line that drains slowly long before it blocks completely.",
      },
    ],
    faqs: [
      { q: "Why does my tapware keep corroding?", a: "Proximity to salt air. It is normal in Bondi and it is worth choosing fittings rated for coastal conditions when you replace them — the difference in lifespan is significant." },
      { q: "Water is coming through my ceiling from the apartment above. What now?", a: "Call us and, if you can, have the apartment above turn off their stop tap. We attend 24/7 and will locate the source, which is often a failed flexible hose under a vanity or sink." },
      { q: "Do you work with strata in Bondi?", a: "Yes. We provide written reports and camera footage where relevant so the committee has something definite to act on." },
    ],
    metaTitle: "Plumber Bondi | Emergency Plumbing & Hot Water",
    metaDescription: "Local plumber in Bondi, Bondi Junction and North Bondi. Emergency plumbing, hot water, corrosion and apartment leaks. $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "randwick",
    parent: "eastern-suburbs",
    label: "Randwick",
    headline: "Plumber Randwick",
    subheadline: "Blocked drains, hot water and leak detection across Randwick, Kensington and Kingsford.",
    description:
      "Randwick is a mix of Federation homes on established blocks, post-war brick, and a large number of apartments around the hospital and university. The plumbing work splits along the same lines — root intrusion in the older streets, shared-stack problems in the blocks.",
    localContent:
      "The older parts of Randwick have the mature trees and the original clay sewer lines that go with them, so root intrusion is common away from the main roads. Closer to the hospital and UNSW the housing is denser and the problems change — shared waste stacks, high-turnover rentals, and the kind of blockages that come from many people sharing one line rather than from anything structural.",
    suburbs: ["Kensington", "Kingsford", "Coogee", "Clovelly", "Maroubra", "Centennial Park"],
    services: ["Blocked Drains", "Leak Detection", "Hot Water Systems", "Emergency Plumbing", "Pipe Relining", "Taps & Toilets"],
    commonProblems: [
      {
        title: "Root intrusion in the older streets",
        body: "Federation homes on established blocks with mature trees and original earthenware sewer is a familiar combination. Blockages that return on a cycle rather than once are almost always roots.",
      },
      {
        title: "Shared waste stacks in apartment blocks",
        body: "A blocked stack in a walk-up affects every apartment above the blockage. It usually presents as several units reporting slow drainage at once, which is the clearest sign the fault is not inside any one of them.",
      },
      {
        title: "Hot water in high-turnover rentals",
        body: "Rental stock around the university often runs hot water units well past their service life. Rust at the base or water around the unit means it is failing, and replacing it before it lets go avoids the flood.",
      },
    ],
    faqs: [
      { q: "Several apartments have slow drains at once. What does that mean?", a: "Almost certainly a blockage in the shared stack rather than in any one apartment. It needs clearing from the common line, which is usually a strata matter." },
      { q: "How do I know if my hot water unit is about to fail?", a: "Rust staining down the tank, water pooling underneath, or hot water running out faster than it used to. Any of those means it is near the end and worth replacing before it bursts." },
      { q: "Do you charge a call-out fee in Randwick?", a: "No. There is no call-out fee anywhere we work, including after hours." },
    ],
    metaTitle: "Plumber Randwick | Blocked Drains & Hot Water",
    metaDescription: "Local plumber in Randwick, Kensington and Kingsford. Blocked drains, hot water, leak detection and 24/7 emergency plumbing. Call (02) 9139 8945.",
  },
  {
    slug: "chatswood",
    parent: "north-shore",
    label: "Chatswood",
    headline: "Plumber Chatswood",
    subheadline: "Apartment and family-home plumbing across Chatswood, Willoughby and Artarmon.",
    description:
      "Chatswood is two suburbs in one for plumbing purposes — high-rise apartments around the station, and large older homes on established blocks a few streets out. The work is completely different depending on which side of that line you are on.",
    localContent:
      "In the towers, the recurring issues are shared stacks, pressure-limiting valves and hot water units in confined cupboards. In the surrounding streets it is mature trees against clay sewer lines, and original bathrooms in brick homes that have not been touched since they were built. Both are routine for us; they just need different equipment on the van.",
    suburbs: ["Willoughby", "Artarmon", "Lane Cove", "Roseville", "Northbridge", "Naremburn"],
    services: ["Blocked Drains", "Hot Water Systems", "Bathroom Renovations", "Leak Detection", "Emergency Plumbing", "Pipe Relining"],
    commonProblems: [
      {
        title: "Mature trees against old sewer lines",
        body: "The streets around Chatswood have large established trees and original clay drainage. Root intrusion here is a maintenance cycle unless the affected section is relined.",
      },
      {
        title: "Apartment hot water in tight cupboards",
        body: "Units installed in confined internal cupboards are harder to service and a failure has nowhere to drain except into the apartment. Replacement needs planning around access rather than being a straight swap.",
      },
      {
        title: "Original bathrooms in post-war brick",
        body: "Many homes here still have their first bathroom, on original waste and vent work. A renovation almost always means redoing the rough-in to current standards, which is better known before the quote than after.",
      },
    ],
    faqs: [
      { q: "Can you replace a hot water unit in an apartment cupboard?", a: "Yes. Access is the constraint rather than the work itself. We will assess it and tell you upfront if anything unusual is needed to get the old unit out and the new one in." },
      { q: "My drain blocks every winter. Why then?", a: "Roots seek water, and a slow winter leak at an old clay joint is an easy source. The seasonal pattern is a strong sign it is roots rather than a one-off blockage." },
      { q: "Do you cover the whole North Shore?", a: "Yes, from Chatswood up through Roseville, Lindfield and Gordon, and across to Willoughby and Northbridge." },
    ],
    metaTitle: "Plumber Chatswood | Blocked Drains & Hot Water",
    metaDescription: "Local plumber in Chatswood, Willoughby and Artarmon. Blocked drains, hot water, bathroom renovations and emergency plumbing. Call (02) 9139 8945.",
  },
  {
    slug: "manly",
    parent: "northern-beaches",
    label: "Manly",
    headline: "Plumber Manly",
    subheadline: "Coastal corrosion, apartment plumbing and emergency work across Manly, Fairlight and Balgowlah.",
    description:
      "Manly combines the corrosion problems of a beachside suburb with the density of an inner-city one. Older semis and cottages sit alongside apartment blocks, and both are close enough to the water that salt air shortens the life of anything metal outside.",
    localContent:
      "Roof plumbing is the work that comes up most. Gutters, downpipes and flashings on the ocean side of Manly corrode noticeably faster than the same material further inland, and a failed gutter does its damage into the eaves before anyone sees it from the ground. The other constant is apartment work — blocks here are often older, and a burst flexible hose or a failing hot water unit travels quickly through a building.",
    suburbs: ["Fairlight", "Balgowlah", "Freshwater", "Queenscliff", "North Manly", "Seaforth"],
    services: ["Roof Plumbing", "Emergency Plumbing", "Hot Water Systems", "Leak Detection", "Blocked Drains", "Taps & Toilets"],
    commonProblems: [
      {
        title: "Gutters and flashings corroding early",
        body: "Salt air takes years off roof plumbing on the ocean side. Rust perforations in a gutter usually leak into the eaves rather than over the edge, so the damage shows up inside the house before anyone notices the gutter.",
      },
      {
        title: "Older apartment blocks",
        body: "Many Manly blocks are decades old and still on their original common pipework. One failure affects several apartments, and establishing whether it is a private or common-property fault is often the first job.",
      },
      {
        title: "Sand and salt in stormwater",
        body: "Sand settles in stormwater lines near the beach and reduces their capacity gradually. Lines that coped for years start overflowing in heavy rain, and the cause is build-up rather than a sudden blockage.",
      },
    ],
    faqs: [
      { q: "How often should gutters be checked this close to the beach?", a: "More often than inland — annually is sensible in Manly. Corrosion tends to start where water sits, so it is worth looking at the low points and behind the fascia rather than just clearing leaves." },
      { q: "Do you cover the Northern Beaches at night?", a: "Yes, 24/7 with no call-out fee. Travel times to the far northern beaches are longer, and we will give you an honest ETA when you call rather than a standard one." },
      { q: "Can you find a leak without pulling up tiles?", a: "Usually. We use acoustic detection, thermal imaging and dye testing to locate leaks before anything is opened up." },
    ],
    metaTitle: "Plumber Manly | Roof Plumbing & Emergency Repairs",
    metaDescription: "Local plumber in Manly, Fairlight and Balgowlah. Roof plumbing, corrosion, hot water and 24/7 emergency plumbing. $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "mosman",
    parent: "lower-north-shore",
    label: "Mosman",
    headline: "Plumber Mosman",
    subheadline: "Drainage, relining and bathroom plumbing across Mosman, Cremorne and Neutral Bay.",
    description:
      "Mosman is steep, leafy and largely built on older housing stock with mature gardens. That combination produces two consistent problems: stormwater that has to cope with a gradient, and tree roots in drainage lines that were laid a long time ago.",
    localContent:
      "The terrain does most of the work here. Blocks stepping down towards the harbour move a lot of water quickly in a storm, and stormwater lines that have silted up or lost fall will overflow rather than drain slowly. Combined with established gardens over old clay sewer, it makes Mosman a suburb where camera inspection before quoting saves people a great deal of money — the difference between a clean-out and a reline is large, and you cannot tell from the surface.",
    suburbs: ["Cremorne", "Neutral Bay", "Cammeray", "Balmoral", "Beauty Point", "Clifton Gardens"],
    services: ["Stormwater Drainage", "Pipe Relining", "Blocked Drains", "CCTV Drain Inspection", "Bathroom Renovations", "Leak Detection"],
    commonProblems: [
      {
        title: "Stormwater on steep blocks",
        body: "Gradient means water arrives fast. A line that has silted up or lost its fall does not cope in a downpour, and the overflow usually finds the lowest point of the house rather than the garden.",
      },
      {
        title: "Established gardens over old drainage",
        body: "Mature plantings and original clay sewer is a difficult combination, and excavating a landscaped Mosman garden is expensive. Relining through existing access points is usually the better answer.",
      },
      {
        title: "Retaining walls and subsurface drainage",
        body: "Terraced blocks rely on drainage behind retaining walls that is rarely inspected. When it blocks, water builds up behind the wall — a structural problem as much as a plumbing one.",
      },
    ],
    faqs: [
      { q: "Water comes into the garage in heavy rain. Is that stormwater?", a: "Usually. On a steep block it generally means the stormwater line is blocked, undersized or has lost fall. A camera inspection identifies which before any digging is considered." },
      { q: "Will relining damage my garden?", a: "No — it is done through existing access points, which is the main reason it suits Mosman. Excavating an established garden is the expense we are usually trying to avoid." },
      { q: "Do you provide reports for strata or building inspections?", a: "Yes. We supply camera footage and a written report with located depths and distances." },
    ],
    metaTitle: "Plumber Mosman | Stormwater & Pipe Relining",
    metaDescription: "Local plumber in Mosman, Cremorne and Neutral Bay. Stormwater drainage, pipe relining, blocked drains and emergency plumbing. Call (02) 9139 8945.",
  },
  {
    slug: "hurstville",
    parent: "st-george",
    label: "Hurstville",
    headline: "Plumber Hurstville",
    subheadline: "Blocked drains, hot water and apartment plumbing across Hurstville, Kogarah and Beverly Hills.",
    description:
      "Hurstville has changed faster than most Sydney suburbs — post-war brick homes on generous blocks now sit beside high-rise apartments built in the last decade. The plumbing problems divide neatly between the two.",
    localContent:
      "In the older streets it is original clay sewer, galvanised water service and bathrooms that have never been touched. In the new towers it is shared stacks, pressure-limiting valves and the kind of faults where the trouble is two floors above the apartment reporting it. Knowing which of those you are dealing with before booking anyone saves time, and a camera answers it quickly.",
    suburbs: ["Kogarah", "Beverly Hills", "Penshurst", "Mortdale", "Carlton", "Allawah"],
    services: ["Blocked Drains", "Hot Water Systems", "Emergency Plumbing", "Leak Detection", "Bathroom Renovations", "Taps & Toilets"],
    commonProblems: [
      {
        title: "Original clay sewer under post-war homes",
        body: "Brick homes built in the fifties and sixties still drain through their first clay line. Root intrusion and cracked joints are common, and the blockage usually returns unless the section is relined.",
      },
      {
        title: "Shared stacks in newer towers",
        body: "In high-rise, a blockage in a common stack presents as slow drainage across several apartments. It is a common-property fault and needs clearing from the stack rather than from any one unit.",
      },
      {
        title: "Galvanised water service reaching its end",
        body: "Older homes here were plumbed in galvanised steel, which closes up with rust from the inside. Falling pressure over years rather than suddenly is the signature, and the fix is replacing the service in copper.",
      },
    ],
    faqs: [
      { q: "My water pressure has dropped over the years. Is that the mains?", a: "Rarely. In older Hurstville homes it is usually the galvanised water service rusting closed internally. Replacing it in copper restores pressure immediately." },
      { q: "Do you work in apartment buildings?", a: "Yes. We work with owners and strata managers, and provide camera footage and written reports where the fault is in common property." },
      { q: "How fast can you reach Hurstville?", a: "Usually within 30–60 minutes, 24/7, with no call-out fee." },
    ],
    metaTitle: "Plumber Hurstville | Blocked Drains & Hot Water",
    metaDescription: "Local plumber in Hurstville, Kogarah and Beverly Hills. Blocked drains, hot water, apartment plumbing and emergency repairs. Call (02) 9139 8945.",
  },
  {
    slug: "rockdale",
    parent: "st-george",
    label: "Rockdale",
    headline: "Plumber Rockdale",
    subheadline: "Stormwater, blocked drains and emergency plumbing across Rockdale, Brighton-Le-Sands and Arncliffe.",
    description:
      "Rockdale sits low and close to Botany Bay, and drainage is the theme that runs through most of the plumbing work here. Add post-war housing stock on original pipework and the pattern becomes familiar quickly.",
    localContent:
      "Low-lying ground and heavy rain is the combination that brings us to Rockdale most often. Stormwater lines that cope all year will surcharge in a serious downpour, and water finds the lowest point — which on a flat block is frequently the garage or the back of the house. The second theme is the age of the drainage itself: original clay sewer with decades of root intrusion behind it.",
    suburbs: ["Brighton-Le-Sands", "Arncliffe", "Banksia", "Bexley", "Kogarah", "Wolli Creek"],
    services: ["Stormwater Drainage", "Blocked Drains", "Emergency Plumbing", "Jet Blasting", "Pipe Relining", "Hot Water Systems"],
    commonProblems: [
      {
        title: "Stormwater surcharging in heavy rain",
        body: "Flat, low-lying ground gives water nowhere to go once a line is at capacity. Overflow at a gully or water pooling against the house in a downpour usually means the line is blocked or undersized.",
      },
      {
        title: "Root intrusion in original sewer",
        body: "Post-war homes on their first clay sewer, with decades of street tree growth around them. Recurring blockages on a seasonal cycle are the giveaway.",
      },
      {
        title: "Garage and low-point flooding",
        body: "On a flat block the garage is often the lowest point. Water entering during storms is usually a stormwater capacity or blockage problem rather than anything to do with the building.",
      },
    ],
    faqs: [
      { q: "My garage floods when it rains hard. Can that be fixed?", a: "Usually yes. We camera the stormwater line to establish whether it is blocked, undersized or has lost fall, then quote the actual fix rather than guessing." },
      { q: "What is jet blasting and do I need it?", a: "High-pressure water that scours the pipe wall rather than just punching a hole through a blockage. For root intrusion and built-up silt it is far more effective than a drain machine alone." },
      { q: "Are you available after hours in Rockdale?", a: "Yes, 24/7, with no call-out fee at any hour." },
    ],
    metaTitle: "Plumber Rockdale | Stormwater & Blocked Drains",
    metaDescription: "Local plumber in Rockdale, Brighton-Le-Sands and Arncliffe. Stormwater drainage, blocked drains and 24/7 emergency plumbing. Call (02) 9139 8945.",
  },
  {
    slug: "bankstown",
    parent: "canterbury-bankstown",
    label: "Bankstown",
    headline: "Plumber Bankstown",
    subheadline: "Blocked drains, hot water and emergency plumbing across Bankstown, Yagoona and Padstow.",
    description:
      "Bankstown is largely post-war brick on generous blocks, much of it still running its original drainage and water service. It is straightforward plumbing country, and most of the work is the same handful of problems reaching the end of a long life at once.",
    localContent:
      "Homes built in the forties through the sixties were plumbed to last, and a lot of them have. What that means now is a suburb where clay sewer lines, galvanised water services and first-generation hot water units are all past their design life simultaneously. Most of what we do in Bankstown is replacing one of those three, and often the customer has been putting up with the symptoms for years.",
    suburbs: ["Yagoona", "Padstow", "Revesby", "Punchbowl", "Chester Hill", "Greenacre"],
    services: ["Blocked Drains", "Hot Water Systems", "Pipe Relining", "Emergency Plumbing", "Water Pressure", "Taps & Toilets"],
    commonProblems: [
      {
        title: "Clay sewer past its service life",
        body: "Original earthenware drainage under a seventy-year-old brick home will have cracked joints and root intrusion. Clearing buys time; relining the affected section ends it.",
      },
      {
        title: "Galvanised pipe closing up",
        body: "Rust builds inward until the pipe is a fraction of its original bore. Pressure falls away so slowly that people adjust to it. Replacing the service in copper is a same-day job with an immediate difference.",
      },
      {
        title: "Hot water units well past their age",
        body: "Many units here are fifteen or twenty years old. Rust at the base or water on the floor means the tank is going, and replacing it beforehand is far cheaper than dealing with the flood afterwards.",
      },
    ],
    faqs: [
      { q: "How long should a hot water system last?", a: "Ten to fifteen years for most electric storage units. Past that, replacing it on your terms is much better than replacing it after it fails and floods a cupboard." },
      { q: "Is relining worth it on an older home?", a: "If the pipe is structurally sound but has cracked joints and root intrusion, yes — it is usually cheaper than excavating and it stops the blockages returning." },
      { q: "Do you charge extra for weekends?", a: "No. Same pricing, no call-out fee, seven days." },
    ],
    metaTitle: "Plumber Bankstown | Blocked Drains & Hot Water",
    metaDescription: "Local plumber in Bankstown, Yagoona and Padstow. Blocked drains, hot water systems, pipe relining and 24/7 emergency plumbing. Call (02) 9139 8945.",
  },
  {
    slug: "cronulla",
    parent: "sutherland-shire",
    label: "Cronulla",
    headline: "Plumber Cronulla",
    subheadline: "Coastal corrosion, apartment plumbing and emergency work across Cronulla, Caringbah and Woolooware.",
    description:
      "Cronulla has the two things that define beachside plumbing: salt air that shortens the life of anything metal outside, and sand that works its way into drainage over years. Add a lot of apartment stock and the pattern is set.",
    localContent:
      "Roof plumbing and external pipework corrode faster here than they do a few kilometres inland, and the failures tend to be hidden — a rusted-through gutter leaks into the eaves rather than over the front of the house. The other recurring job is sand in stormwater. It does not block a line suddenly; it reduces its capacity gradually until a heavy storm finds the limit.",
    suburbs: ["Caringbah", "Woolooware", "Burraneer", "Gymea", "Miranda", "Kurnell"],
    services: ["Roof Plumbing", "Stormwater Drainage", "Hot Water Systems", "Emergency Plumbing", "Blocked Drains", "Leak Detection"],
    commonProblems: [
      {
        title: "Salt air on roof plumbing",
        body: "Gutters, downpipes and flashings corrode early this close to the water, and the leak usually goes into the eaves rather than over the edge. It shows up as a stain on an internal ceiling long after it started.",
      },
      {
        title: "Sand in stormwater lines",
        body: "Sand settles and accumulates over years, reducing the effective bore. Lines that coped for a decade start overflowing in heavy rain without anything having obviously changed.",
      },
      {
        title: "Corroded fittings and tapware",
        body: "Spindles, outdoor taps and exposed fittings have a shorter life in a coastal suburb. Choosing coastal-rated fittings at replacement time makes a real difference to how long the next set lasts.",
      },
    ],
    faqs: [
      { q: "My ceiling has a stain but the roof looks fine. What is it?", a: "Often a corroded gutter leaking backwards into the eaves rather than a roof leak. We check the gutter line and flashings, which is where it usually is in a coastal suburb." },
      { q: "Why does my stormwater overflow now when it never used to?", a: "Usually sand and silt accumulation reducing the pipe's capacity. Jetting the line clears it and a camera confirms whether anything structural is involved." },
      { q: "Do you cover the whole Sutherland Shire?", a: "Yes — Cronulla through to Sutherland, Miranda, Caringbah and the surrounding suburbs, 24/7." },
    ],
    metaTitle: "Plumber Cronulla | Roof Plumbing & Stormwater",
    metaDescription: "Local plumber in Cronulla, Caringbah and Woolooware. Roof plumbing, stormwater, corrosion and 24/7 emergency plumbing. Call (02) 9139 8945.",
  },
  {
    slug: "castle-hill",
    parent: "hills-district",
    label: "Castle Hill",
    headline: "Plumber Castle Hill",
    subheadline: "Drainage, hot water and bathroom plumbing across Castle Hill, Baulkham Hills and Kellyville.",
    description:
      "The Hills is newer housing on reactive clay soil, and that soil does more damage to drainage than anything else in the district. Large homes on large blocks also mean long runs of pipe, which is where the movement shows.",
    localContent:
      "Reactive clay swells when wet and shrinks when dry, and it moves whatever is buried in it. On a long drainage run under a large Hills home, that movement pulls joints apart and cracks pipe over years. It is why blockages here often have nothing to do with what has gone down the drain, and why a camera inspection matters — the fault is structural, and clearing it will not keep it clear.",
    suburbs: ["Baulkham Hills", "Kellyville", "Bella Vista", "West Pennant Hills", "Rouse Hill", "Glenhaven"],
    services: ["Blocked Drains", "Pipe Relining", "CCTV Drain Inspection", "Hot Water Systems", "Bathroom Renovations", "Stormwater Drainage"],
    commonProblems: [
      {
        title: "Soil movement cracking drainage",
        body: "Reactive clay expands and contracts with the seasons and takes buried pipe with it. Joints pull apart and pipe cracks, which is a structural fault rather than a blockage — and it will recur until it is repaired properly.",
      },
      {
        title: "Long drainage runs on large blocks",
        body: "Bigger homes on bigger blocks mean more pipe between the house and the connection. More length means more joints, more fall to maintain, and more places for a fault to sit unnoticed.",
      },
      {
        title: "Stormwater and absorption on clay",
        body: "Clay does not absorb well, so stormwater has to be moved rather than soaked away. Where a system was undersized or has partially blocked, water ponds on the surface instead.",
      },
    ],
    faqs: [
      { q: "My drain blocks even though we are careful about what goes down it. Why?", a: "In the Hills that usually points to soil movement cracking the pipe or pulling a joint apart, rather than anything you have put down it. A camera inspection confirms it." },
      { q: "Can relining fix a pipe damaged by soil movement?", a: "In many cases yes, where the pipe is still structurally continuous. Where a section has dropped or separated completely it needs excavation — the camera footage shows which, and we will show you." },
      { q: "How far out do you travel in the Hills?", a: "Castle Hill, Baulkham Hills, Kellyville, Bella Vista, Rouse Hill and the surrounding areas. Travel times are longer than the inner suburbs and we will give you an honest ETA." },
    ],
    metaTitle: "Plumber Castle Hill | Blocked Drains & Pipe Relining",
    metaDescription: "Local plumber in Castle Hill, Baulkham Hills and Kellyville. Blocked drains, pipe relining, hot water and emergency plumbing. Call (02) 9139 8945.",
  },
  {
    slug: "coogee",
    parent: "eastern-suburbs",
    label: "Coogee",
    headline: "Plumber Coogee",
    subheadline: "Apartment plumbing, corrosion and emergency work across Coogee, Clovelly and South Coogee.",
    description:
      "Coogee is dense, coastal and heavily apartment-based. Salt air shortens the life of external metalwork, and in a block of units a single failure rarely stays in one apartment.",
    localContent:
      "Most Coogee callouts are one of two things: something corroded that should have lasted longer, or water in an apartment that started somewhere else in the building. Both come down to the same thing — locating the source quickly. A burst flexible hose under a vanity two floors up can do more damage than a major pipe failure, simply because nobody is home to notice.",
    suburbs: ["Clovelly", "South Coogee", "Randwick", "Bronte", "Maroubra", "Kensington"],
    services: ["Emergency Plumbing", "Leak Detection", "Hot Water Systems", "Taps & Toilets", "Blocked Drains", "Roof Plumbing"],
    commonProblems: [
      { title: "Failed flexible hoses in apartments", body: "The single most common cause of apartment flooding. They fail without warning, usually under a vanity or kitchen sink, and can empty a great deal of water into the units below before anyone is home." },
      { title: "Corrosion on external pipework", body: "Coastal air takes years off exposed metal. Outdoor taps, roof plumbing and balcony drainage all need replacing sooner here than inland." },
      { title: "Shared stacks in walk-up blocks", body: "When several apartments report slow drainage at once, the fault is in the common stack rather than in any one unit — and it is a strata matter rather than an owner's." },
    ],
    faqs: [
      { q: "How do I stop a leak before you arrive?", a: "Find your stop tap and turn it off. In an apartment it is usually under the sink or in the bathroom cupboard. Knowing where it is before an emergency is worth five minutes of looking now." },
      { q: "Should I replace my flexible hoses?", a: "If they are more than about five years old, yes. They are inexpensive, and a failure is one of the most expensive things that can happen in an apartment." },
      { q: "Do you attend Coogee at night?", a: "Yes, 24/7, with no call-out fee." },
    ],
    metaTitle: "Plumber Coogee | Emergency & Apartment Plumbing",
    metaDescription: "Local plumber in Coogee, Clovelly and South Coogee. Emergency plumbing, apartment leaks, hot water and corrosion repairs. Call (02) 9139 8945.",
  },
  {
    slug: "maroubra",
    parent: "eastern-suburbs",
    label: "Maroubra",
    headline: "Plumber Maroubra",
    subheadline: "Blocked drains, hot water and emergency plumbing across Maroubra, Pagewood and Matraville.",
    description:
      "Maroubra is mostly post-war brick and mid-century blocks, close enough to the coast for salt to matter but with the drainage problems of any suburb still on its original pipework.",
    localContent:
      "The housing here is the right age for everything to need attention at once — clay sewer lines with decades of root growth around them, galvanised water services rusting closed, and hot water units well past their service life. Closer to the beach, corrosion on roof plumbing and external fittings is added to that list.",
    suburbs: ["Pagewood", "Matraville", "Malabar", "Chifley", "Kingsford", "South Coogee"],
    services: ["Blocked Drains", "Hot Water Systems", "Water Pressure", "Emergency Plumbing", "Pipe Relining", "Roof Plumbing"],
    commonProblems: [
      { title: "Root intrusion in original sewer", body: "Post-war homes still on clay drainage, with mature street trees above them. Blockages that return seasonally are the clearest sign." },
      { title: "Falling water pressure", body: "Galvanised services rust closed from the inside over decades. It is gradual enough that people stop noticing, and replacing the service in copper is a same-day fix." },
      { title: "Coastal corrosion on roof plumbing", body: "Near the beach, gutters and flashings corrode early and leak into the eaves rather than over the edge, so the damage appears inside before anyone sees the cause." },
    ],
    faqs: [
      { q: "Is low water pressure worth fixing?", a: "Usually, and it is often a bigger difference than people expect. If the service is galvanised, replacing it in copper restores full pressure immediately." },
      { q: "How much does clearing a blocked drain cost?", a: "Most straightforward blockages fall between $150 and $400. We give you a fixed price before starting, and there is no call-out fee." },
      { q: "Do you service Maroubra after hours?", a: "Yes, 24 hours a day, seven days, with no after-hours surcharge." },
    ],
    metaTitle: "Plumber Maroubra | Blocked Drains & Hot Water",
    metaDescription: "Local plumber in Maroubra, Pagewood and Matraville. Blocked drains, hot water, water pressure and emergency plumbing. Call (02) 9139 8945.",
  },
  {
    slug: "alexandria",
    parent: "sydney-cbd",
    label: "Alexandria",
    headline: "Plumber Alexandria",
    subheadline: "Warehouse conversions, commercial plumbing and blocked drains across Alexandria, Zetland and Waterloo.",
    description:
      "Alexandria is a suburb built for industry and now largely lived in. Warehouse conversions, new apartment blocks and remaining commercial premises sit side by side, often sharing drainage that was designed for none of them.",
    localContent:
      "The recurring issue in converted buildings is drainage doing a job it was not designed for. Industrial waste lines retrofitted to serve kitchens and bathrooms frequently have the wrong fall or the wrong pipe size, so a shower that drains slowly is a design problem rather than a blockage. Working out which is the first job, because they have very different fixes.",
    suburbs: ["Zetland", "Waterloo", "Beaconsfield", "Erskineville", "Rosebery", "Redfern"],
    services: ["Blocked Drains", "CCTV Drain Inspection", "Jet Blasting", "Emergency Plumbing", "Leak Detection", "Hot Water Systems"],
    commonProblems: [
      { title: "Retrofitted drainage in conversions", body: "Industrial buildings converted to residential often run waste through lines never intended for it. Slow drainage that has always been slow is usually fall or pipe size, not a blockage." },
      { title: "Grease from commercial kitchens", body: "Mixed-use buildings put commercial kitchens on shared lines. Grease sets and narrows the pipe well upstream of where it entered, causing blockages that seem to come from nowhere." },
      { title: "Legacy industrial pipework", body: "Some lines here are old, oversized, and made of materials no longer used. A camera inspection is the only reliable way to establish what you actually have before quoting work on it." },
    ],
    faqs: [
      { q: "My shower has always drained slowly. Is that a blockage?", a: "If it has always been slow rather than getting worse, it is usually insufficient fall or undersized pipe from the conversion, not a blockage. A camera inspection confirms it and avoids you paying to clear a line that is already clear." },
      { q: "Do you do commercial work in Alexandria?", a: "Yes. We work on commercial and mixed-use premises as well as residential, including grease-related drain problems." },
      { q: "Can you inspect drainage before I buy?", a: "Yes. A pre-purchase CCTV drain inspection is worth doing on any converted building, and we provide footage and a written report." },
    ],
    metaTitle: "Plumber Alexandria | Blocked Drains & Commercial Plumbing",
    metaDescription: "Local plumber in Alexandria, Zetland and Waterloo. Blocked drains, warehouse conversions, CCTV inspection and emergency plumbing. Call (02) 9139 8945.",
  },
  {
    slug: "lane-cove",
    parent: "north-shore",
    label: "Lane Cove",
    headline: "Plumber Lane Cove",
    subheadline: "Root intrusion, stormwater and bathroom plumbing across Lane Cove, Northwood and Longueville.",
    description:
      "Lane Cove is bushland suburbia — big established trees, steep blocks running down toward the river, and housing old enough that most of it is still on original drainage.",
    localContent:
      "Trees are the defining factor. Lane Cove has more mature vegetation than almost anywhere on the lower North Shore, and old clay sewer beneath it. The second factor is gradient: blocks falling away toward the river move stormwater quickly, and a line that has lost fall or silted up overflows rather than drains slowly.",
    suburbs: ["Northwood", "Longueville", "Riverview", "Greenwich", "Artarmon", "Chatswood"],
    services: ["Pipe Relining", "Blocked Drains", "Stormwater Drainage", "CCTV Drain Inspection", "Bathroom Renovations", "Leak Detection"],
    commonProblems: [
      { title: "Heavy root intrusion", body: "Mature bushland trees and hundred-year-old clay drainage. Root intrusion here is persistent, and clearing alone rarely holds for more than a season or two." },
      { title: "Stormwater on falling blocks", body: "Steep ground toward the river means water arrives fast. Silted or misaligned lines overflow in a downpour rather than draining slowly." },
      { title: "Excavation through established gardens", body: "Digging up a mature Lane Cove garden is expensive and slow. Relining through existing access points is usually the better economic answer as well as the tidier one." },
    ],
    faqs: [
      { q: "The same drain blocks every year. Is relining the answer?", a: "In Lane Cove, usually. Annual blockages almost always mean roots re-entering at the same joint, and relining that section closes it permanently." },
      { q: "Will you damage my garden?", a: "Relining works through existing access points, so in most cases no digging is needed at all." },
      { q: "Do you do pre-purchase drain inspections?", a: "Yes. In a suburb with this much mature vegetation it is worth doing before buying, and we provide the footage and a written report." },
    ],
    metaTitle: "Plumber Lane Cove | Pipe Relining & Root Removal",
    metaDescription: "Local plumber in Lane Cove, Northwood and Longueville. Tree root removal, pipe relining, stormwater and emergency plumbing. Call (02) 9139 8945.",
  },
  {
    slug: "ryde",
    parent: "ryde-macquarie-park",
    label: "Ryde",
    headline: "Plumber Ryde",
    subheadline: "Blocked drains, hot water and bathroom plumbing across Ryde, West Ryde and Gladesville.",
    description:
      "Ryde is post-war brick on established blocks, with mature gardens and original drainage under most of it. Newer apartment stock around Macquarie Park adds a second, quite different type of work.",
    localContent:
      "The older streets have the familiar combination — clay sewer, established trees, galvanised water service, and a bathroom that has not been touched since the house was built. Closer to Macquarie Park the housing is newer and denser, and the problems shift to shared stacks and apartment hot water. We carry equipment for both because the suburb needs both.",
    suburbs: ["West Ryde", "Gladesville", "Meadowbank", "Denistone", "Eastwood", "Macquarie Park"],
    services: ["Blocked Drains", "Hot Water Systems", "Bathroom Renovations", "Pipe Relining", "Emergency Plumbing", "Water Pressure"],
    commonProblems: [
      { title: "Roots in original clay drainage", body: "Established gardens over pipe laid decades ago. Seasonal blockages are the signature, and a camera tells you whether clearing or relining is the right spend." },
      { title: "Original bathrooms needing full rough-in", body: "Many Ryde bathrooms are still on their first waste and vent work. Renovating almost always means redoing the rough-in to current standards." },
      { title: "Apartment hot water near Macquarie Park", body: "Newer blocks put hot water units in confined internal cupboards. Access rather than the work itself is usually what makes replacement complicated." },
    ],
    faqs: [
      { q: "We are renovating a bathroom. When should a plumber be involved?", a: "Before the design is finalised. Waste positions and vent requirements shape what is possible, and finding that out after the tiler is booked is expensive." },
      { q: "Do you cover Macquarie Park as well?", a: "Yes — Ryde, West Ryde, Macquarie Park, Eastwood and the surrounding suburbs." },
      { q: "Is there a call-out fee?", a: "No, and that applies after hours and on weekends too." },
    ],
    metaTitle: "Plumber Ryde | Blocked Drains & Bathroom Plumbing",
    metaDescription: "Local plumber in Ryde, West Ryde and Gladesville. Blocked drains, hot water, bathroom renovations and emergency plumbing. Call (02) 9139 8945.",
  },
  {
    slug: "miranda",
    parent: "sutherland-shire",
    label: "Miranda",
    headline: "Plumber Miranda",
    subheadline: "Blocked drains, hot water and emergency plumbing across Miranda, Gymea and Caringbah.",
    description:
      "Miranda is post-war brick on solid blocks with established gardens, far enough from the water that salt is less of a factor than it is in Cronulla, but old enough that original drainage is reaching its limit.",
    localContent:
      "The work here is mostly the predictable consequences of housing age. Clay sewer lines with roots in them, galvanised water services closing up, and hot water units running a decade past where they should have been replaced. It is straightforward work, and the main thing we can offer is telling people honestly which of the three is actually causing their problem.",
    suburbs: ["Gymea", "Caringbah", "Sutherland", "Kirrawee", "Yowie Bay", "Sylvania"],
    services: ["Blocked Drains", "Hot Water Systems", "Water Pressure", "Pipe Relining", "Emergency Plumbing", "Taps & Toilets"],
    commonProblems: [
      { title: "Roots in established gardens", body: "Mature planting over original clay drainage. Recurring blockages point to roots rather than to anything going down the drain." },
      { title: "Ageing hot water systems", body: "A great many units here are past fifteen years. Rust at the base or water on the floor is the warning, and acting on it avoids a flooded cupboard." },
      { title: "Galvanised water service", body: "Internal rust narrows the pipe until pressure is a fraction of what it should be. Replacement in copper is a one-day job with an immediate result." },
    ],
    faqs: [
      { q: "How do I know whether to clear or reline a drain?", a: "A camera inspection. If the pipe is sound and roots are entering at a joint, relining that section ends it. If it is a one-off blockage, clearing is all you need — and we will tell you which." },
      { q: "Can you replace a hot water system same day?", a: "In most cases yes. We carry common units and can usually have hot water back on the same day." },
      { q: "Do you cover the Shire 24/7?", a: "Yes, across Miranda, Gymea, Caringbah, Sutherland and Cronulla, with no call-out fee." },
    ],
    metaTitle: "Plumber Miranda | Blocked Drains & Hot Water",
    metaDescription: "Local plumber in Miranda, Gymea and Caringbah. Blocked drains, hot water systems, water pressure and emergency plumbing. Call (02) 9139 8945.",
  },
  {
    slug: "parramatta-cbd",
    parent: "parramatta",
    label: "Parramatta CBD",
    headline: "Plumber Parramatta CBD",
    subheadline: "Apartment towers, strata buildings and commercial tenancies in the Parramatta city centre.",
    description:
      "The Parramatta CBD has changed faster than almost anywhere in Sydney. High-rise apartments and commercial towers now sit among older terraces and post-war homes, and the plumbing problems reflect both.",
    localContent:
      "In the towers it is shared stacks, pressure-limiting valves and the question of where a private fault ends and common property begins. In the older streets around Harris Park it is original drainage on reactive clay, which cracks and separates as the ground moves. The two need different approaches and different equipment, and a camera settles which one you have.",
    suburbs: ["Harris Park", "Westmead", "North Parramatta", "Rosehill", "Granville", "Merrylands"],
    services: ["Blocked Drains", "CCTV Drain Inspection", "Emergency Plumbing", "Hot Water Systems", "Leak Detection", "Taps & Toilets"],
    commonProblems: [
      { title: "Shared stacks in high-rise", body: "Several apartments reporting slow drainage at once means the fault is in the common stack, not in any one unit. It needs clearing from the stack and is a strata responsibility." },
      { title: "Soil movement on older blocks", body: "Reactive clay through the older streets cracks pipe and pulls joints apart over years. These are structural faults, and clearing them will not keep them clear." },
      { title: "Strata versus private responsibility", body: "Establishing exactly where a fault sits decides who pays for it. A located camera inspection with a measured depth and distance gives strata something definite." },
    ],
    faqs: [
      { q: "Who pays for a blockage in an apartment building?", a: "It depends where the fault sits. If it is inside your apartment it is yours; if it is in the common stack it is strata. We locate it precisely so nobody is guessing." },
      { q: "Do you provide reports for strata committees?", a: "Yes — camera footage plus a written report with located depth and distance." },
      { q: "How quickly can you reach Parramatta?", a: "Usually within 30–60 minutes. We are available 24/7 with no call-out fee." },
    ],
    metaTitle: "Plumber Parramatta CBD | Towers & Strata",
    metaDescription: "Plumber for the Parramatta CBD: apartment towers, strata buildings, shared stacks and commercial tenancies. CCTV reports for strata. Call (02) 9139 8945.",
    seeAlso: {
      slug: "parramatta",
      text: "In Westmead, Granville, Merrylands or another suburb around Parramatta? Our Parramatta & Surrounding Suburbs page covers the wider area.",
    },
  },
  {
    slug: "campsie",
    parent: "canterbury-bankstown",
    label: "Campsie",
    headline: "Plumber Campsie",
    subheadline: "Blocked drains, hot water and emergency plumbing across Campsie, Canterbury and Belmore.",
    description:
      "Campsie is interwar and post-war housing with a large amount of mid-century walk-up apartment stock, much of it still on the pipework it was built with.",
    localContent:
      "The walk-up blocks are what make Campsie distinctive. Built in the sixties and seventies, they share waste stacks and common water services, and when something fails it affects several apartments at once. The houses around them follow the familiar older-Sydney pattern — clay sewer with roots in it, and galvanised water service rusting closed.",
    suburbs: ["Canterbury", "Belmore", "Clemton Park", "Earlwood", "Lakemba", "Croydon Park"],
    services: ["Blocked Drains", "Hot Water Systems", "Emergency Plumbing", "Pipe Relining", "Water Pressure", "Taps & Toilets"],
    commonProblems: [
      { title: "Shared stacks in walk-up blocks", body: "A blockage in a common waste stack affects every apartment above it. Multiple units reporting slow drainage at the same time is the clearest sign." },
      { title: "Root intrusion in original sewer", body: "Interwar homes on their first clay drainage, with decades of tree growth around them. Blockages recur seasonally until the section is relined." },
      { title: "Ageing common water services", body: "Older blocks often still run galvanised common services. Pressure drops across the whole building rather than in one apartment, which points at the service rather than the unit." },
    ],
    faqs: [
      { q: "Low pressure in every apartment in the block — what causes that?", a: "Usually the common water service rather than anything in individual apartments. It is a building-wide issue and normally a strata matter." },
      { q: "Do you work with strata managers?", a: "Yes, regularly, and we provide written reports and camera footage so committees have something concrete." },
      { q: "Are you available on weekends?", a: "Yes, seven days and 24 hours, with no call-out fee or after-hours surcharge." },
    ],
    metaTitle: "Plumber Campsie | Blocked Drains & Strata Plumbing",
    metaDescription: "Local plumber in Campsie, Canterbury and Belmore. Blocked drains, apartment plumbing, hot water and emergency repairs. Call (02) 9139 8945.",
  },
  {
    slug: "point-piper",
    parent: "eastern-suburbs",
    label: "Point Piper",
    headline: "Plumber Point Piper",
    subheadline: "Drainage, relining and discreet plumbing work across Point Piper, Double Bay and Rose Bay.",
    description:
      "Point Piper is a small peninsula of large, old, harbourside homes. Steep blocks, established gardens and drainage laid a long time ago make it a suburb where the cost of a repair depends far more on access than on the fault itself.",
    localContent:
      "Two things shape plumbing here. The first is gradient — properties stepping down to the water move stormwater fast, so a line that has silted up or lost fall overflows rather than draining slowly. The second is what sits over the pipe. Excavating a mature harbourside garden or a tiled terrace is expensive, which is why a camera inspection before quoting matters more in Point Piper than almost anywhere: relining through existing access points is very often the cheaper answer.",
    suburbs: ["Double Bay", "Rose Bay", "Darling Point", "Vaucluse", "Edgecliff", "Woollahra"],
    services: ["Pipe Relining", "Blocked Drains", "Stormwater Drainage", "CCTV Drain Inspection", "Leak Detection", "Bathroom Renovations"],
    commonProblems: [
      {
        title: "Stormwater on steep harbourside blocks",
        body: "Water arrives fast on a gradient. A silted or misaligned line does not drain slowly — it overflows, and on these blocks the overflow finds the house rather than the garden.",
      },
      {
        title: "Old drainage under established gardens",
        body: "Original clay sewer beneath mature landscaping. Digging it up is the expensive option here, which is why relining through existing access points usually wins on cost as well as disruption.",
      },
      {
        title: "Access and reinstatement costs",
        body: "Sandstone, terracing, tiled terraces and pool surrounds all sit over drainage. What it costs to put the surface back is often more than the plumbing, so the repair method matters.",
      },
    ],
    faqs: [
      { q: "Can a drain be repaired without digging up the garden?", a: "Usually. Relining works through existing access points, and in Point Piper avoiding excavation is normally the difference between a manageable job and an expensive one." },
      { q: "Do you work discreetly on occupied properties?", a: "Yes. Drop sheets down, equipment in and out the same day, and we clean up properly before leaving." },
      { q: "Is there a call-out fee?", a: "No — no call-out fee at any hour, any day." },
    ],
    metaTitle: "Plumber Point Piper | Drainage & Pipe Relining",
    metaDescription: "Local plumber in Point Piper, Double Bay and Rose Bay. Blocked drains, pipe relining, stormwater and emergency plumbing. $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "hunters-hill",
    parent: "ryde-macquarie-park",
    label: "Hunters Hill",
    headline: "Plumber Hunters Hill",
    subheadline: "Heritage drainage, relining and stormwater across Hunters Hill, Woolwich and Gladesville.",
    description:
      "Hunters Hill is one of the oldest surviving suburbs in Sydney, and its plumbing reflects that. Sandstone houses from the 1850s onwards, mature gardens, and drainage that in many cases has been in the ground longer than anywhere else we work.",
    localContent:
      "The age of the housing stock is the whole story here. Original earthenware drainage under a home built in the 1870s has had a very long time to crack, settle and take on roots, and the gardens above it are just as old. Add a peninsula that falls away to the water on both sides and you get the second theme, which is stormwater with a great deal of gradient behind it. Heritage controls across much of the suburb also mean excavation is rarely the simple option.",
    suburbs: ["Woolwich", "Gladesville", "Henley", "Huntleys Point", "Boronia Park", "Ryde"],
    services: ["Pipe Relining", "Blocked Drains", "CCTV Drain Inspection", "Stormwater Drainage", "Leak Detection", "Bathroom Renovations"],
    commonProblems: [
      {
        title: "Some of the oldest drainage in Sydney",
        body: "Houses here predate most of the city. Earthenware laid in the nineteenth century has cracked joints and root intrusion as a matter of course, and clearing it is a maintenance cycle rather than a repair.",
      },
      {
        title: "Heritage controls limiting excavation",
        body: "Much of Hunters Hill is heritage-controlled, and sandstone sits shallow. Between the two, digging up a damaged line is slow, expensive and sometimes needs approval. Relining avoids all three.",
      },
      {
        title: "Stormwater falling to the river",
        body: "The peninsula drops away on both sides, so stormwater moves quickly. Lines that have silted or lost fall overflow during heavy rain rather than backing up gradually.",
      },
    ],
    faqs: [
      { q: "Our house is from the 1800s. Is the original drainage still in use?", a: "Very often yes, at least in part. A camera inspection shows what you actually have and what condition it is in, which is worth knowing before a renovation rather than during one." },
      { q: "Will drain work need heritage approval?", a: "Repairs generally do not, but excavation near a heritage structure can. We will tell you upfront if that applies and it is another reason relining usually suits this suburb." },
      { q: "Do you do pre-purchase drain inspections in Hunters Hill?", a: "Yes, and in a suburb with housing this old it is worth doing. We provide camera footage and a written report." },
    ],
    metaTitle: "Plumber Hunters Hill | Heritage Drainage & Relining",
    metaDescription: "Local plumber in Hunters Hill, Woolwich and Gladesville. Blocked drains, pipe relining, heritage drainage and stormwater. Call (02) 9139 8945.",
  },
  {
    slug: "dee-why",
    parent: "northern-beaches",
    label: "Dee Why",
    headline: "Plumber Dee Why",
    subheadline: "Unit block plumbing, coastal corrosion and blocked drains across Dee Why, Curl Curl and Collaroy.",
    description:
      "Dee Why has a higher share of residents in flats and units than most of the Northern Beaches. Walk-up blocks went up through the 1960s and 70s, taller buildings have followed around the town centre since, and the whole suburb sits between a surf beach and a lagoon.",
    localContent:
      "That mix sets the work. In the older walk-ups, a slow drain or a drop in pressure is often a shared problem rather than one flat's, because the waste stack and the water service are common to the building. In the newer towers it is the same question with more floors in between. Down towards the beach and around Dee Why Lagoon, salt air and sandy ground add their own wear, and on the headland the ground turns to sandstone, which changes how any excavation is priced.",
    suburbs: ["Curl Curl", "Collaroy", "Narrabeen", "Brookvale", "Freshwater", "Manly"],
    services: ["Blocked Drains", "Emergency Plumbing", "Leak Detection", "Hot Water Systems", "Roof Plumbing", "Taps & Toilets"],
    commonProblems: [
      {
        title: "Common stacks in 1960s and 70s walk-ups",
        body: "Blocks of this era usually run one waste stack for several flats. When the ground-floor unit gets water backing up into the shower, the cause is often a partial blockage further down the shared line, which makes it an owners corporation matter rather than the tenant's.",
      },
      {
        title: "Salt-worn fittings near the beach",
        body: "Streets closest to the surf take a steady load of salt spray. Exposed brass, copper and steel, from garden taps to gutters and roof flashings, pits and fails years ahead of the same fitting a few kilometres inland.",
      },
      {
        title: "Water through the ceiling from the flat above",
        body: "In a unit block, a leak you can see is rarely where the leak is. Failed shower waterproofing or a split flexi hose upstairs can travel along a slab before it shows. Finding the true source first stops two owners paying for the wrong repair.",
      },
    ],
    faqs: [
      { q: "The flat above is leaking into mine. Who fixes it?", a: "Whoever owns the part that has failed. Fixtures inside a unit are generally the owner's, while common pipework is usually the owners corporation's. We trace the leak to its source and give both parties the same written findings." },
      { q: "Do you work on strata buildings in Dee Why?", a: "Yes. We work for individual owners, tenants' agents and strata managers, and provide photos or camera footage so a committee can see what was found." },
      { q: "Why do my outdoor taps keep seizing?", a: "Close to the beach, salt corrodes tap bodies and spindles faster than people expect. A tap with a better-suited finish, and servicing before it seizes completely, usually saves replacing the fitting behind it." },
    ],
    metaTitle: "Plumber Dee Why | Unit Blocks, Leaks & Blocked Drains",
    metaDescription: "Local plumber in Dee Why, Curl Curl and Collaroy. Strata and unit plumbing, leak detection, blocked drains and coastal corrosion repairs. Call (02) 9139 8945.",
  },
  {
    slug: "bondi-junction",
    parent: "eastern-suburbs",
    label: "Bondi Junction",
    headline: "Plumber Bondi Junction",
    subheadline: "High-rise, heritage semis and shopfront plumbing across Bondi Junction, Waverley and Queens Park.",
    description:
      "Bondi Junction is two suburbs in one. Around the rail and bus interchange and the Oxford Street mall it is towers, offices and shops; a couple of streets back it is Victorian and Federation terraces and semis, with interwar flat blocks between them. Waverley Council covers the lot.",
    localContent:
      "The towers and the terraces need opposite approaches. In a high-rise the job is usually about finding which floor, which riser and whose responsibility, and working within building management rules to shut anything off. In the older streets it is about pipe that has been in the ground for a century: earthenware sewer with root intrusion, and cast iron or galvanised pipework that has corroded from the inside.",
    suburbs: ["Waverley", "Queens Park", "Bronte", "Woollahra", "Bondi", "Randwick"],
    services: ["Blocked Drains", "Leak Detection", "Emergency Plumbing", "Pipe Relining", "Hot Water Systems", "Kitchen Plumbing"],
    commonProblems: [
      {
        title: "Tower plumbing and building shut-downs",
        body: "Residential towers around the interchange feed apartments through shared risers and pressure-reducing valves. Isolating water for a repair can affect several floors, so it has to be arranged with the building manager rather than done on the spot.",
      },
      {
        title: "Earthenware sewer behind the semis",
        body: "The older semis and terraces in the streets off Ebley Street and Bondi Road still often drain through their original clay pipe. Where a street tree or a backyard gum sits close to the line, roots in the joints are the usual reason a toilet or floor waste backs up.",
      },
      {
        title: "Food outlets on shared drainage",
        body: "Cafés and takeaways along the mall and the side streets send fats and oils into drains that may also serve the flats above. Grease sets further down the line, so the back-up can appear in a unit rather than in the kitchen that caused it.",
      },
    ],
    faqs: [
      { q: "Can you work in my apartment building without shutting off the whole tower?", a: "Usually yes. Most apartments have their own isolation valve. Where a riser has to be isolated, we arrange the time with building management so other residents get notice." },
      { q: "My semi shares a drain with next door. Is that normal?", a: "In older Bondi Junction semis it is common. A camera inspection shows where the shared section starts and where the fault sits, which is what decides who is responsible." },
      { q: "Do you do commercial plumbing around the mall?", a: "Yes. We work in shops, cafés and offices as well as homes, and can schedule work around trading hours." },
    ],
    metaTitle: "Plumber Bondi Junction | Apartments, Semis & Shops",
    metaDescription: "Plumber in Bondi Junction, Waverley and Queens Park. High-rise and strata plumbing, blocked drains, leak detection and emergency repairs. Call (02) 9139 8945.",
  },
  {
    slug: "paddington",
    parent: "eastern-suburbs",
    label: "Paddington",
    headline: "Plumber Paddington",
    subheadline: "Victorian terrace plumbing, box gutters and drainage across Paddington, Edgecliff and Woollahra.",
    description:
      "Paddington is one of Sydney's largest runs of Victorian terraces, mostly built between the 1840s and the 1890s on steep streets that fall away from Oxford Street. The suburb is split along Oxford Street between Woollahra Council to the north and the City of Sydney to the south, and much of it is a heritage conservation area.",
    localContent:
      "Plumbing in a Paddington terrace is shaped by the building's age, its roof and its slope. The roofs hide box gutters behind parapets that overflow inside rather than outside when they block. The drainage is old enough to be earthenware with lead or cast iron above ground. And because many streets drop steeply, a terrace can have its sewer connection at one end and its stormwater running hard towards the other. Where there is a rear lane, it is usually the best way in.",
    suburbs: ["Edgecliff", "Woollahra", "Darlinghurst", "Surry Hills", "Centennial Park", "Bondi Junction"],
    services: ["Roof Plumbing", "Blocked Drains", "Pipe Relining", "Leak Detection", "Bathroom Renovations", "Stormwater Drainage"],
    commonProblems: [
      {
        title: "Box gutters behind parapets",
        body: "Terrace roofs drain into narrow box gutters hidden behind the front parapet or along the party wall. When leaves or a failed outlet block them, water has nowhere to go but into the ceiling. Stains on the upstairs front room after rain usually point here first.",
      },
      {
        title: "Original drainage under a heritage home",
        body: "Many terraces still run nineteenth-century earthenware beneath the back courtyard, often with later additions tacked on. Relining the line from inside avoids lifting sandstone flagging or brick paving that is expensive or difficult to replace in a conservation area.",
      },
      {
        title: "Upstairs bathrooms added later",
        body: "Most terraces were built without an upstairs bathroom. The ones added since often run waste through tight floor spaces with minimal fall, and a slow-draining shower on the first floor is frequently a design limit rather than a blockage.",
      },
    ],
    faqs: [
      { q: "Water is coming through my ceiling but only in heavy rain. What is it?", a: "In a Paddington terrace, a blocked or undersized box gutter is the most likely cause. We check the gutter, its outlet and the rainhead before looking for anything more complicated." },
      { q: "Do I need council approval for drainage work on a heritage terrace?", a: "Routine repairs generally do not. Work that alters the fabric of a heritage item or the streetscape can, and which council applies depends on which side of Oxford Street you are on. We will tell you before starting if we think approval is needed." },
      { q: "Can you get equipment in without going through the house?", a: "If your terrace backs onto a lane, usually yes. Otherwise we come through the front with drop sheets down." },
    ],
    metaTitle: "Plumber Paddington | Terrace Plumbing & Box Gutters",
    metaDescription: "Local plumber in Paddington, Edgecliff and Woollahra. Victorian terrace plumbing, box gutters, blocked drains and pipe relining. Call (02) 9139 8945.",
  },
  {
    slug: "north-sydney",
    parent: "lower-north-shore",
    label: "North Sydney",
    headline: "Plumber North Sydney",
    subheadline: "Office, strata and older-home plumbing across North Sydney, Waverton and McMahons Point.",
    description:
      "North Sydney is one of Sydney's main office centres, with towers along Miller, Walker and Berry Streets, and a growing number of apartment buildings around the Victoria Cross Metro station. Behind them are streets of Victorian and Federation houses on sandstone ridges that fall towards the harbour and Lavender Bay.",
    localContent:
      "Commercial and residential work sit side by side here. In the office towers and mixed-use buildings, plumbing faults usually mean tenancy fit-outs, shared risers and work booked around building hours. In the older streets it is the sandstone that matters: rock sits close to the surface, so trenching is slow, and a relined pipe is often a better answer than a dug-up one. North Sydney Council is the local authority for both.",
    suburbs: ["Waverton", "McMahons Point", "Lavender Bay", "Crows Nest", "Cammeray", "Neutral Bay"],
    services: ["Emergency Plumbing", "Leak Detection", "Blocked Drains", "Pipe Relining", "Backflow Prevention", "Hot Water Systems"],
    commonProblems: [
      {
        title: "Tenancy fit-outs on shared building services",
        body: "Office kitchens and bathrooms added during fit-outs connect into risers that serve the whole building. A slow drain or a leak on one floor can originate in a connection made years ago by someone else, and locating it needs access to more than one tenancy.",
      },
      {
        title: "Sandstone under older homes",
        body: "The ridges through North Sydney are sandstone with little soil cover. Replacing a damaged sewer line by digging means cutting rock, so a camera inspection to see whether relining will work is worth doing before anyone quotes an excavation.",
      },
      {
        title: "Steep blocks falling to the harbour",
        body: "Houses on the slopes towards Lavender Bay and the harbour shed stormwater quickly. Where a pit has silted or a line has lost its fall, the result in a storm is water pooling against the downhill wall of the house.",
      },
    ],
    faqs: [
      { q: "Do you work in North Sydney office buildings after hours?", a: "Yes. Commercial work that needs water isolated is usually best done outside business hours, and we schedule it with building management." },
      { q: "Can you test backflow devices in North Sydney buildings?", a: "Yes. Testable backflow prevention devices generally need an annual test by an accredited plumber, and we can test, repair and lodge the results." },
      { q: "Will fixing my sewer mean digging through rock?", a: "Not necessarily. If the pipe is intact enough to line, relining through existing access points avoids cutting sandstone altogether. A camera inspection tells us which." },
    ],
    metaTitle: "Plumber North Sydney | Commercial, Strata & Relining",
    metaDescription: "Plumber in North Sydney, Waverton and McMahons Point. Commercial and strata plumbing, backflow testing, relining and emergency repairs. Call (02) 9139 8945.",
  },
  {
    slug: "crows-nest",
    parent: "lower-north-shore",
    label: "Crows Nest",
    headline: "Plumber Crows Nest",
    subheadline: "Restaurant, apartment and Federation cottage plumbing across Crows Nest, St Leonards and Wollstonecraft.",
    description:
      "Crows Nest is a village of restaurants and cafés along Willoughby Road and the Pacific Highway, surrounded by Federation cottages, interwar flats and, increasingly, apartment towers. The Metro station that opened in 2024 has brought rezoning and new building to the precinct around it. The suburb sits within North Sydney Council.",
    localContent:
      "The food strip is what sets Crows Nest apart from its neighbours. A concentration of commercial kitchens within a few blocks means grease is a constant presence in the local drainage, and a restaurant's drain problem can also be the problem of the flats above it. Away from Willoughby Road, the Federation and interwar houses bring the usual older-Sydney mix of clay sewer, established trees and galvanised water services.",
    suburbs: ["St Leonards", "Wollstonecraft", "Naremburn", "Cammeray", "North Sydney", "Artarmon"],
    services: ["Blocked Drains", "Kitchen Plumbing", "Jet Blasting", "CCTV Drain Inspection", "Hot Water Systems", "Emergency Plumbing"],
    commonProblems: [
      {
        title: "Grease in commercial kitchen drains",
        body: "Restaurant kitchens send fats and oils down drains that cool and set them within metres. A grease arrestor that is overdue for pumping, or a line that has not been jetted, blocks at the worst possible time: in the middle of a busy service.",
      },
      {
        title: "Shop-top housing on one drainage line",
        body: "Older shop-top buildings along Willoughby Road put flats over shops, sharing a sewer connection. When a blockage forms, the tenancy downstairs and the residents upstairs are often both affected, and establishing which use caused it needs a camera, not a guess.",
      },
      {
        title: "Galvanised water services in older cottages",
        body: "Federation and interwar cottages that have not been re-piped may still draw water through galvanised steel. It narrows with rust over decades, so the first sign is usually weak pressure when two taps are running at once.",
      },
    ],
    faqs: [
      { q: "Can you jet our restaurant drains outside trading hours?", a: "Yes. We schedule commercial drain cleaning before opening or after close so the kitchen does not lose a service." },
      { q: "Why does the drain in my flat back up when the café downstairs is busy?", a: "If the two share a line, grease from the kitchen can narrow the pipe downstream of both. A camera inspection shows where the build-up is and gives the building something definite to act on." },
      { q: "Is weak pressure in an old Crows Nest house fixable?", a: "Usually. If the cause is a galvanised service, replacing it with copper or modern polyethylene restores flow. We test pressure at the meter first to rule out a supply issue." },
    ],
    metaTitle: "Plumber Crows Nest | Restaurant & Home Plumbing",
    metaDescription: "Local plumber in Crows Nest, St Leonards and Wollstonecraft. Commercial kitchen drains, blocked drains, water pressure and hot water. Call (02) 9139 8945.",
  },
  {
    slug: "sydney-cbd-city",
    parent: "sydney-cbd",
    label: "Sydney CBD",
    headline: "Plumber for the Sydney CBD City Centre",
    subheadline: "Apartment towers, sandstone heritage buildings and commercial tenancies in the city centre itself.",
    description:
      "This page is about the city centre proper, from Circular Quay down to Central and from Darling Harbour across to Hyde Park. It is mostly office towers and residential high-rise, with nineteenth-century sandstone and brick buildings still standing between them, and it is administered by the City of Sydney.",
    localContent:
      "Almost nothing in the CBD is a standalone building with one owner, so most plumbing jobs start with the question of access and responsibility rather than the pipe itself. Residential towers bring apartment-level faults such as failed tap cartridges, cracked flexi hoses and leaking shower wastes, with a lot of people living directly underneath. The heritage buildings bring pipework that has been altered by every tenant for a century and needs tracing before it can be trusted.",
    suburbs: ["The Rocks", "Barangaroo", "Haymarket", "Pyrmont", "Ultimo", "Surry Hills"],
    services: ["Emergency Plumbing", "Leak Detection", "Taps & Toilets", "Hot Water Systems", "Backflow Prevention", "Blocked Drains"],
    commonProblems: [
      {
        title: "Leaks into the apartment below",
        body: "In a tower, a leak inside one apartment is soon a problem for the one underneath. Shower wastes, toilet seals and flexi hoses are the usual sources. Isolating the apartment quickly and then tracing the source limits both the damage and the argument afterwards.",
      },
      {
        title: "Apartment hot water in tight cupboards",
        body: "City apartments often have a small electric storage heater squeezed into a laundry or hallway cupboard, or draw from central plant shared across the building. Which one you have decides whether a cold shower is your repair or the building's.",
      },
      {
        title: "Heritage buildings with layered pipework",
        body: "Sandstone and brick buildings from the 1800s have been re-plumbed piecemeal as uses changed from warehouses to offices to restaurants. Old lines are sometimes left in place but disconnected, so tracing which pipe is live comes before any repair.",
      },
    ],
    faqs: [
      { q: "Do I call the building manager or a plumber first?", a: "For anything leaking into another apartment or common area, tell the building manager straight away and turn off your own isolation valve. We can then work with the manager on access and on anything that involves shared services." },
      { q: "Do you need a loading dock booking to work in my building?", a: "Many CBD buildings require one for trades. If yours does, let us know the rules when you book and we will arrive within them." },
      { q: "Do you work on heritage-listed buildings in the city?", a: "Yes. We work within the building's conservation requirements and will tell you upfront if a change to visible pipework or fabric may need approval." },
    ],
    metaTitle: "Sydney CBD City Centre Plumber | Towers & Strata",
    metaDescription: "Plumber for the Sydney city centre, Circular Quay to Central: apartment towers, strata buildings, offices and heritage sandstone. 24/7. Call (02) 9139 8945.",
    seeAlso: {
      slug: "sydney-cbd",
      text: "In Surry Hills, Darlinghurst, Redfern, Pyrmont or elsewhere around the city? Our Sydney CBD & Inner City page covers the wider inner-city suburbs.",
    },
  },
  {
    slug: "blacktown",
    parent: "western-sydney",
    label: "Blacktown",
    headline: "Plumber Blacktown",
    subheadline: "Reactive clay, post-war housing and granny flat plumbing across Blacktown, Seven Hills and Doonside.",
    description:
      "Blacktown grew fast after the Second World War. Housing Commission estates and privately built brick veneer and fibro homes went up across the district through the 1950s, 60s and 70s, mostly on full-sized blocks. Blacktown City Council now oversees a suburb where many of those houses are being extended, subdivided or replaced.",
    localContent:
      "The ground is the starting point. Blacktown sits on the Cumberland Plain, on clay derived from Wianamatta shale that swells when wet and shrinks when dry, and that movement cracks rigid pipe and pulls joints apart over the years. On top of that, the houses are now old enough for their original drainage and water services to be near the end of their life, just as owners add granny flats and second bathrooms that ask more of them.",
    suburbs: ["Seven Hills", "Toongabbie", "Quakers Hill", "Mount Druitt", "St Marys", "Kings Langley"],
    services: ["Blocked Drains", "Pipe Relining", "CCTV Drain Inspection", "Hot Water Systems", "Water Pressure", "Emergency Plumbing"],
    commonProblems: [
      {
        title: "Pipes cracked by moving clay",
        body: "Reactive clay heaves in wet years and shrinks in droughts. Clay and early PVC sewer lines laid in the post-war decades crack or separate at the joints as it does, and roots then find the gaps. A drain that blocks after a dry spell breaks is a common pattern.",
      },
      {
        title: "Granny flats on old connections",
        body: "Secondary dwellings are a common way to use Blacktown's large blocks, and each one adds fixtures to a sewer line designed for a single house. Before building, a camera inspection of the existing line shows whether it can take the extra load.",
      },
      {
        title: "Asbestos in fibro homes",
        body: "Fibro houses from the 1950s and 60s are very likely to contain bonded asbestos cement sheeting, and some properties of that era also have asbestos cement pipe. Plumbing work that means cutting into a wall or disturbing old pipe needs to be planned around it, not discovered halfway through.",
      },
    ],
    faqs: [
      { q: "My drain blocked after a long dry spell. Why?", a: "Clay soil shrinks as it dries, and a pipe that was sound can shift and open a joint. Roots follow the moisture. A camera inspection shows whether it is a one-off clear or a section that needs relining." },
      { q: "Can my sewer line handle a granny flat?", a: "Often, but not always. We camera the existing line and check its condition and grade before the new connection is made, which is much cheaper than finding out after the flat is built." },
      { q: "Is it safe to work on plumbing in a fibro house?", a: "Yes, with the right precautions. Bonded asbestos sheeting is low-risk left alone. We avoid cutting it where we can, and where removal is needed it must be done by a licensed asbestos removalist." },
    ],
    metaTitle: "Plumber Blacktown | Blocked Drains & Pipe Relining",
    metaDescription: "Local plumber in Blacktown, Seven Hills and Toongabbie. Blocked drains, clay soil pipe damage, granny flat plumbing and hot water. Call (02) 9139 8945.",
  },
  {
    slug: "penrith",
    parent: "western-sydney",
    label: "Penrith",
    headline: "Plumber Penrith",
    subheadline: "Hot water, drainage and heat-stressed plumbing across Penrith, Kingswood and Jamisontown.",
    description:
      "Penrith sits on the Nepean River at the foot of the Blue Mountains. It grew from a small town into a regional city after the war, with most of its housing built between the 1950s and the 1980s, and newer estates and apartments since. Penrith City Council covers the suburb and its floodplain.",
    localContent:
      "Two things about Penrith shape its plumbing. The first is heat: it is one of the hottest parts of Sydney in summer, which is hard on hot water systems, exposed pipework and anything plastic that sits in the sun. The second is the ground, which ranges from alluvial soil near the river to reactive shale clay further east, and each treats buried pipe differently. The lower parts of town are also mapped as Nepean River floodplain, which matters for anything built at ground level.",
    suburbs: ["Kingswood", "Jamisontown", "South Penrith", "Emu Plains", "St Marys", "Cambridge Park"],
    services: ["Hot Water Systems", "Blocked Drains", "Stormwater Drainage", "Water Pressure", "Emergency Plumbing", "Leak Detection"],
    commonProblems: [
      {
        title: "Hot water systems working hard in the heat",
        body: "Outdoor storage heaters, their valves and any exposed plastic pipe sit in full sun through summers that regularly pass 40 degrees. Heat and sunlight age plastic fittings and pipe lagging faster, so checking the relief valve, the anode and exposed pipework on a schedule is worth more here than in milder suburbs.",
      },
      {
        title: "Clay movement on the eastern side",
        body: "Away from the river, Penrith sits on Wianamatta shale clay that shrinks hard in a heatwave and swells after heavy rain. Sewer and stormwater lines laid in the sixties and seventies crack at the joints as the ground moves.",
      },
      {
        title: "Stormwater in heavy rain",
        body: "Low, flat blocks and big summer storms test stormwater lines that cope the rest of the year. Water pooling against a slab, or downpipes overflowing at the base, usually means a blocked or collapsed line rather than too much rain.",
      },
    ],
    faqs: [
      { q: "Why does my hot water relief valve keep dripping?", a: "A small discharge during heating is normal. Constant dripping usually means the valve is worn or the mains pressure is high. We check the valve and the incoming pressure." },
      { q: "Is my property in a flood zone?", a: "Penrith City Council and the NSW SES publish flood maps for the Nepean River. Check those for your address; we can then advise on where to position a new hot water unit or other equipment." },
      { q: "Do you cover the new estates around Penrith as well as the older streets?", a: "Yes. The work differs: older homes more often need drainage repairs, and newer ones more often need fixtures, hot water or warranty-related diagnosis." },
    ],
    metaTitle: "Plumber Penrith | Hot Water & Blocked Drains",
    metaDescription: "Local plumber in Penrith, Kingswood and Jamisontown. Hot water systems, blocked drains, stormwater and emergency plumbing. Call (02) 9139 8945.",
  },
  {
    slug: "liverpool",
    parent: "liverpool-fairfield",
    label: "Liverpool",
    headline: "Plumber Liverpool",
    subheadline: "City-centre apartments, older homes and commercial plumbing across Liverpool, Warwick Farm and Casula.",
    description:
      "Liverpool is one of the oldest European towns in Australia, founded by Governor Macquarie in 1810 at the head of the Georges River. Today it is a regional city centre with a rising skyline of apartments and offices, ringed by post-war houses on larger blocks. Liverpool City Council covers the suburb.",
    localContent:
      "The work divides by distance from the station. In the city centre it is apartment and commercial plumbing: shared waste stacks, hot water in units, restaurants and shops on common drainage. Further out it is the housing built from the 1950s onwards, on clay that moves with the seasons, with sewer and water services that have now been in the ground for sixty years or more.",
    suburbs: ["Warwick Farm", "Casula", "Moorebank", "Chipping Norton", "Lurnea", "Prestons"],
    services: ["Blocked Drains", "Emergency Plumbing", "Hot Water Systems", "Pipe Relining", "Kitchen Plumbing", "Leak Detection"],
    commonProblems: [
      {
        title: "Shared stacks in new apartment blocks",
        body: "Several units draining slowly together points to the common stack, not an individual apartment. Clearing it is a strata job, and a camera record of where the blockage sat helps the building prevent the next one.",
      },
      {
        title: "Sixty-year-old drainage on moving ground",
        body: "Post-war homes around the centre drain through pipe laid on reactive clay. Seasonal ground movement opens joints and lets roots in, which is why blockages here tend to recur rather than happen once.",
      },
      {
        title: "Commercial kitchens in the city centre",
        body: "Restaurants and takeaways through the Liverpool centre generate grease that builds up in their drains and grease arrestors. Regular pumping and jetting costs far less than a blockage that closes a kitchen.",
      },
    ],
    faqs: [
      { q: "My whole apartment floor has slow drains. Who pays?", a: "If the fault is in the shared stack it is normally a strata cost. We locate the blockage and provide the building with a written report." },
      { q: "Why does my drain keep blocking in the same spot?", a: "In older Liverpool homes it is usually roots re-entering an open joint. Clearing works temporarily; relining that section stops it recurring. A camera inspection tells you which is worth doing." },
      { q: "Do you do commercial plumbing in the Liverpool CBD?", a: "Yes, including kitchen drains, grease-related blockages and tenancy work, and we can schedule around trading hours." },
    ],
    metaTitle: "Plumber Liverpool | Blocked Drains & Strata Plumbing",
    metaDescription: "Local plumber in Liverpool, Warwick Farm and Casula. Blocked drains, strata and apartment plumbing, hot water and commercial work. Call (02) 9139 8945.",
  },
  {
    slug: "campbelltown",
    parent: "macarthur",
    label: "Campbelltown",
    headline: "Plumber Campbelltown",
    subheadline: "Blocked drains, hot water and older-home plumbing across Campbelltown, Leumeah and Ambarvale.",
    description:
      "Campbelltown was laid out as a Macquarie town in 1820, but most of what stands today dates from the 1970s and 80s, when it was declared a growth area and filled with detached homes on quarter-acre blocks. Campbelltown City Council now oversees a regional centre where apartments are going up near the station and Macarthur Square.",
    localContent:
      "Houses from the seventies and eighties have reached the age where their original fittings and pipework are wearing out together. Many hot water units have already been replaced at least once, taps and toilet cisterns need rebuilding, and sewer lines on the local shale clay have had forty-odd years of ground movement to crack and take on roots. Most of that is predictable, which makes it cheaper to deal with before it fails.",
    suburbs: ["Leumeah", "Ambarvale", "Bradbury", "Rosemeadow", "Minto", "Ingleburn"],
    services: ["Blocked Drains", "Hot Water Systems", "Taps & Toilets", "Pipe Relining", "Water Pressure", "Emergency Plumbing"],
    commonProblems: [
      {
        title: "Growth-era drainage on shale clay",
        body: "Depending on the year they were built, homes here drain through clay pipe or early PVC. Both suffer as the reactive clay around them shifts between wet and dry years, and cracked or displaced joints are where roots get in.",
      },
      {
        title: "Hot water units due for replacement",
        body: "Many homes still have an electric storage heater in the position the builder chose decades ago. When it fails, it is worth asking whether a like-for-like swap is the right choice or whether gas, heat pump or solar suits the household better.",
      },
      {
        title: "Ageing taps, valves and cisterns",
        body: "Four decades of hard use shows in dripping taps, running toilets and seized stop valves. A seized stop valve matters most, because it is what you need to turn off in an emergency.",
      },
    ],
    faqs: [
      { q: "Should I replace my hot water system before it fails?", a: "If it is past its expected service life and showing rust or a weeping relief valve, planning the replacement avoids an urgent swap on a cold morning. We can inspect it and tell you honestly whether it has life left." },
      { q: "Are clay pipes still used in Campbelltown homes?", a: "In older homes, yes. Many 1970s houses were built with clay sewer pipe, while later ones generally used PVC. A camera inspection shows which you have and its condition." },
      { q: "Do you cover the newer suburbs around Campbelltown?", a: "Yes. We work across the Macarthur region, from the older Campbelltown streets to the newer estates." },
    ],
    metaTitle: "Plumber Campbelltown | Blocked Drains & Hot Water",
    metaDescription: "Local plumber in Campbelltown, Leumeah and Ambarvale. Blocked drains, hot water replacement, taps and toilets and emergency plumbing. Call (02) 9139 8945.",
  },
  {
    slug: "hornsby",
    parent: "north-shore",
    label: "Hornsby",
    headline: "Plumber Hornsby",
    subheadline: "Bushland blocks, steep drainage and apartment plumbing across Hornsby, Waitara and Asquith.",
    description:
      "Hornsby grew up as a railway junction town where the main northern line meets the North Shore line. Its town centre now has apartment buildings along the Pacific Highway, while the surrounding streets are post-war and older houses on the edge of steep bushland gullies. Hornsby Shire Council covers the area.",
    localContent:
      "The bush is the defining feature. Many Hornsby homes back onto sandstone gullies, with large eucalypts overhead and the ground falling steeply behind the house. That means gutters and downpipes that fill with leaves and bark, stormwater that has to be carried safely down a slope, and sewer lines that often run through the back of the block towards the gully. Nearer the station, the plumbing is the more familiar apartment work of shared services and strata responsibilities.",
    suburbs: ["Waitara", "Asquith", "Normanhurst", "Wahroonga", "Mount Colah", "Hornsby Heights"],
    services: ["Roof Plumbing", "Stormwater Drainage", "Blocked Drains", "Hot Water Systems", "Emergency Plumbing", "CCTV Drain Inspection"],
    commonProblems: [
      {
        title: "Leaf-choked gutters and downpipes",
        body: "Eucalypts shed leaves and bark all year. Gutters that fill quickly overflow into eaves, and debris washed into downpipes blocks the stormwater line below. Regular clearing and suitable guards cut down on both.",
      },
      {
        title: "Stormwater on steep bushland blocks",
        body: "Water running off a roof and down a steep block has to be discharged in a controlled way. Where a line has broken or its outlet has scoured out, the slope below erodes and water can end up under the house instead.",
      },
      {
        title: "Sewer lines through the back of the block",
        body: "On lots that fall to a gully, the sewer often runs away from the street through the rear of the property, under gardens and established trees. Roots and hard access make a camera inspection the sensible first step.",
      },
    ],
    faqs: [
      { q: "How often should gutters be cleared in Hornsby?", a: "It depends on the trees above your roof. Homes under large eucalypts often need clearing more than once a year. Overflow at the corners in rain is the sign it is overdue." },
      { q: "Water pools under my house after rain. What causes it?", a: "On a sloping block, usually stormwater from above that is not being collected or is escaping a broken line. We trace where it is coming from before recommending anything." },
      { q: "Do you work on apartment buildings near Hornsby station?", a: "Yes, for individual owners and for strata managers." },
    ],
    metaTitle: "Plumber Hornsby | Stormwater, Gutters & Blocked Drains",
    metaDescription: "Local plumber in Hornsby, Waitara and Asquith. Stormwater on steep blocks, gutters and downpipes, blocked drains and hot water. Call (02) 9139 8945.",
  },
  {
    slug: "epping",
    parent: "ryde-macquarie-park",
    label: "Epping",
    headline: "Plumber Epping",
    subheadline: "Apartment towers, established homes and bushland drainage across Epping, Eastwood and Carlingford.",
    description:
      "Epping has changed more than most suburbs in the last decade. Rezoning around the station brought apartment towers to what had been streets of Federation, interwar and post-war houses, many of which remain further out. Most of the suburb moved from Hornsby Shire into the City of Parramatta in 2016.",
    localContent:
      "It is really two plumbing markets. Around the station, newer towers raise strata questions: shared stacks, pressure-reducing valves and whose fault a leak is. In the established streets towards Terrys Creek and the bushland reserves, it is older homes with mature trees, clay sewer lines and stormwater running downhill to the creek valleys. The houses sit on shale-capped ridge with sandstone below, so digging can hit rock sooner than people expect.",
    suburbs: ["Eastwood", "Carlingford", "Marsfield", "North Ryde", "Denistone", "Macquarie Park"],
    services: ["Blocked Drains", "Leak Detection", "Pipe Relining", "Stormwater Drainage", "Hot Water Systems", "Emergency Plumbing"],
    commonProblems: [
      {
        title: "Leaks in new apartment towers",
        body: "In a newer building, a leak into the unit below can come from a shower, a hose or the building's own services. Establishing the source quickly matters, particularly while building defect warranties may still apply.",
      },
      {
        title: "Roots in established streets",
        body: "The older homes have large gardens and mature trees close to original clay sewer. Root intrusion at the joints is the most common cause of repeat blockages here.",
      },
      {
        title: "Stormwater falling to the creek valleys",
        body: "Streets that slope towards Terrys Creek and Devlins Creek carry stormwater downhill fast. A blocked pit or a failed line shows up as flooding at the low side of the property during heavy rain.",
      },
    ],
    faqs: [
      { q: "My apartment is only a few years old and is leaking. Is it a defect?", a: "Possibly. We can find the source and document it with photos, which you or your strata manager can use when raising a defect claim with the builder." },
      { q: "Is Epping in Parramatta or Hornsby council now?", a: "Most of Epping has been in the City of Parramatta since 2016. North Epping stayed with Hornsby Shire. It matters mainly for stormwater and development approvals." },
      { q: "Can you reline a sewer under a large garden?", a: "Usually yes, through existing access points, which avoids digging up established trees or landscaping." },
    ],
    metaTitle: "Plumber Epping | Apartments, Relining & Stormwater",
    metaDescription: "Local plumber in Epping, Eastwood and Carlingford. Apartment leaks, blocked drains, pipe relining and stormwater. Call (02) 9139 8945.",
  },
  {
    slug: "strathfield",
    parent: "western-sydney",
    label: "Strathfield",
    headline: "Plumber Strathfield",
    subheadline: "Federation homes on large blocks, relining and apartment plumbing across Strathfield, Homebush and Burwood.",
    description:
      "Strathfield is known for its Federation houses: large Queen Anne homes and grand estates built around 1900 on generous blocks, with heritage conservation areas protecting many of them. Apartment buildings cluster around the station and the town centre. The Municipality of Strathfield has governed the area since 1885.",
    localContent:
      "Big old houses on big old blocks means long runs of original pipe. A Strathfield sewer line can travel a long way from the house to the connection, under decades-old gardens and trees that have had a century to find it. The water service is often just as long and, in homes that have not been re-piped, just as old. Heritage controls add a reason to favour repairs that avoid excavation near a protected building or its garden.",
    suburbs: ["Homebush", "Burwood", "Concord", "Flemington", "Strathfield South", "Enfield"],
    services: ["Pipe Relining", "Blocked Drains", "CCTV Drain Inspection", "Water Pressure", "Bathroom Renovations", "Hot Water Systems"],
    commonProblems: [
      {
        title: "Long sewer runs under mature gardens",
        body: "On Federation-era blocks the sewer can run a long distance before it reaches the main, passing under trees planted when the house was new. Roots in the joints are common, and relining the affected lengths avoids lifting established landscaping.",
      },
      {
        title: "Old water services losing pressure",
        body: "Long water services laid in galvanised steel lose bore as they rust. In a large house the drop is most noticeable upstairs or at the far end from the meter.",
      },
      {
        title: "Renovating around a heritage home",
        body: "Adding bathrooms to a Federation house means finding a path for new waste and water without damaging period features. It is worth planning the plumbing before the design is finalised.",
      },
    ],
    faqs: [
      { q: "My heritage home needs a new sewer line. Do I have to dig?", a: "Often not. If the old pipe is intact enough to line, relining through existing access points avoids excavating near the house or its garden. A camera inspection tells us if it will work." },
      { q: "Why is my pressure worse upstairs?", a: "Height costs some pressure, but a large drop usually means an old, narrowed water service. Replacing it restores flow throughout the house." },
      { q: "Do you work on apartment buildings near Strathfield station?", a: "Yes, for owners, tenants and strata managers." },
    ],
    metaTitle: "Plumber Strathfield | Pipe Relining & Heritage Homes",
    metaDescription: "Local plumber in Strathfield, Homebush and Burwood. Pipe relining, blocked drains, water pressure and plumbing for Federation homes. Call (02) 9139 8945.",
  },
  {
    slug: "burwood",
    parent: "western-sydney",
    label: "Burwood",
    headline: "Plumber Burwood",
    subheadline: "High-rise, restaurant and Federation home plumbing across Burwood, Croydon and Enfield.",
    description:
      "Burwood was a stopping point on the road between Sydney and Parramatta and filled with Victorian and Federation houses in the late 1800s and early 1900s. Appian Way, a street of Federation homes, is state heritage listed. The town centre around the station, Westfield and Burwood Road is now dense with apartment towers and restaurants, under Burwood Council.",
    localContent:
      "Burwood's town centre packs towers, food courts and a long run of restaurants into a few blocks, which puts heavy demand on drainage and makes grease a constant factor. A short walk away, the residential streets are much older and quieter, and their plumbing problems are the ones that come with age: clay sewer with roots, and bathrooms and kitchens running on pipework that predates the current owners by generations.",
    suburbs: ["Croydon", "Enfield", "Strathfield", "Concord", "Ashfield", "Croydon Park"],
    services: ["Blocked Drains", "Kitchen Plumbing", "Jet Blasting", "Leak Detection", "Pipe Relining", "Hot Water Systems"],
    commonProblems: [
      {
        title: "Grease on the restaurant strip",
        body: "The concentration of restaurants around Burwood Road means commercial kitchen drains need regular jetting and grease arrestors need regular pumping. When either is missed, the blockage usually comes during service.",
      },
      {
        title: "Water damage between high-rise apartments",
        body: "In the newer towers, a failed hose, seal or shower waste becomes a problem for the apartment below. Isolating the leak and pinning down its source quickly limits the damage and settles responsibility.",
      },
      {
        title: "Original drainage in older houses",
        body: "Victorian and Federation houses in the residential streets often still use their original clay sewer. Roots at the joints and sections that have shifted cause recurring blockages until the line is relined or replaced.",
      },
    ],
    faqs: [
      { q: "Can you service our restaurant's drains before we open?", a: "Yes. We schedule commercial jetting early or late so it does not interrupt trade." },
      { q: "Who is responsible for a leak from the apartment above?", a: "Usually whoever owns the part that failed, which may be the owner upstairs or the owners corporation. We find the source and document it so it can be settled." },
      { q: "Do you work on heritage homes in Burwood?", a: "Yes, and we favour methods such as relining that avoid disturbing period features or gardens." },
    ],
    metaTitle: "Plumber Burwood | Restaurants, Apartments & Homes",
    metaDescription: "Local plumber in Burwood, Croydon and Enfield. Commercial kitchen drains, apartment leaks, blocked drains and pipe relining. Call (02) 9139 8945.",
  },
  {
    slug: "glebe",
    parent: "inner-west",
    label: "Glebe",
    headline: "Plumber Glebe",
    subheadline: "Victorian terraces, fig tree roots and low-lying drainage across Glebe, Forest Lodge and Annandale.",
    description:
      "Glebe runs along a ridge following Glebe Point Road, with streets of Victorian terraces falling away towards Blackwattle Bay on one side and Rozelle Bay on the other. Wentworth Park, on its eastern edge, was once Blackwattle Swamp and was filled in during the late 1870s. The suburb is within the City of Sydney.",
    localContent:
      "Glebe's big figs and plane trees are part of its character and part of its plumbing. Their roots travel a long way and find the joints in old earthenware sewer lines under the terraces. The other factor is the fall of the land: streets near the bays and Wentworth Park sit low, and stormwater from the ridge ends up there in a storm.",
    suburbs: ["Forest Lodge", "Annandale", "Ultimo", "Pyrmont", "Camperdown", "Chippendale"],
    services: ["Blocked Drains", "Pipe Relining", "CCTV Drain Inspection", "Stormwater Drainage", "Roof Plumbing", "Emergency Plumbing"],
    commonProblems: [
      {
        title: "Fig and plane tree roots",
        body: "Glebe's large street and park trees have extensive root systems, and old clay sewer joints are an easy source of water for them. Blockages caused by roots come back after clearing, so relining is often the lasting fix.",
      },
      {
        title: "Low-lying streets near the bays",
        body: "Properties near Blackwattle Bay and Wentworth Park sit at the bottom of the catchment. Stormwater arrives quickly from the ridge and, if a pit or line is blocked, backs up rather than drains.",
      },
      {
        title: "Terrace roofs and rear additions",
        body: "Victorian terraces often have box gutters, internal downpipes and rear additions that tie into the original roof. Blockages or failed joints there send water into ceilings rather than onto the ground.",
      },
    ],
    faqs: [
      { q: "Why does my Glebe terrace keep getting blocked drains?", a: "Most often roots from nearby trees entering the old clay sewer at the joints. A camera inspection confirms it and shows whether relining will stop it." },
      { q: "My courtyard floods in heavy rain. Can that be fixed?", a: "Usually. It is often a blocked grate, a collapsed line or a pit that is too small for the area draining into it. We find the cause before quoting." },
      { q: "Do you work on terraces with no side access?", a: "Yes. We bring equipment through the house with floor protection, or use a rear lane where there is one." },
    ],
    metaTitle: "Plumber Glebe | Terrace Drains & Root Removal",
    metaDescription: "Local plumber in Glebe, Forest Lodge and Annandale. Blocked drains, tree root removal, pipe relining and stormwater for Victorian terraces. Call (02) 9139 8945.",
  },
  {
    slug: "concord",
    parent: "western-sydney",
    label: "Concord",
    headline: "Plumber Concord",
    subheadline: "Our home suburb — interwar bungalows, blocked drains and hot water across Concord, Cabarita and Mortlake.",
    description:
      "Mr. Clog is based in Concord, so this is the suburb we know best. Most of it filled in between the wars, when big estates were cut up and streets such as Finch, Evelyn, Corby and Edith Avenues were laid out down to Canada Bay. The typical house is a solid-brick bungalow with a hip roof, twin front gables and a brick verandah. The suburb is part of the City of Canada Bay.",
    localContent:
      "A Concord bungalow is now around a century old, and its plumbing usually is too unless someone has already replaced it. That means clay sewer running under the back garden, a water service that may still be galvanised steel, and a bathroom that has been renovated over the top of the original waste pipes. Concord calls itself the Parkland Suburb, and between the reserves, the Parramatta River bays and the established gardens, there is no shortage of trees looking for water. Because we are based here, Concord jobs are close to home for us.",
    suburbs: ["Concord West", "Cabarita", "Mortlake", "Breakfast Point", "North Strathfield", "Five Dock"],
    services: ["Blocked Drains", "Pipe Relining", "Hot Water Systems", "Water Pressure", "Emergency Plumbing", "Bathroom Renovations"],
    commonProblems: [
      {
        title: "Interwar clay sewer under the garden",
        body: "The bungalows built across Concord in the 1920s and 1930s drain through earthenware pipe with a joint every short length. After a century of garden trees growing over them, roots in those joints are the most common reason a Concord sewer backs up. A camera shows whether the pipe is sound enough to reline.",
      },
      {
        title: "Galvanised water service in an unrenovated home",
        body: "Many interwar homes were plumbed in galvanised steel, which rusts and narrows from the inside. The usual sign is a shower that gets weaker year by year, or brown water after the taps have sat unused. Replacing the service from the meter fixes the cause rather than the symptom.",
      },
      {
        title: "New bathrooms on old waste lines",
        body: "Concord homes have often been extended or had bathrooms added at the back, joined onto drainage laid when the house was built. When a newer bathroom drains slowly or gurgles, the fault is frequently where new pipe meets old, not in the fixture itself.",
      },
    ],
    faqs: [
      { q: "Are you actually local to Concord?", a: "Yes. Mr. Clog is based in Concord, and Concord, Cabarita, Mortlake and North Strathfield are the streets closest to home." },
      { q: "My bungalow still has its original pipes. Should I replace them before they fail?", a: "Not blindly. A camera inspection of the sewer and a pressure test of the water service show what condition they are actually in, so you only spend money where it is needed." },
      { q: "Can you reline a sewer under a driveway or established garden?", a: "Usually, yes. Relining is done through existing access points, so the driveway and garden stay where they are. If a section has collapsed completely, we will show you the footage and explain why it needs digging." },
    ],
    metaTitle: "Plumber Concord | Local Concord-Based Plumber",
    metaDescription: "Mr. Clog is based in Concord. Blocked drains, pipe relining, hot water and emergency plumbing for Concord, Cabarita and Mortlake. Call (02) 9139 8945.",
  },
  {
    slug: "concord-west",
    parent: "western-sydney",
    label: "Concord West",
    headline: "Plumber Concord West",
    subheadline: "Blocked drains, stormwater and hot water across Concord West, North Strathfield and Rhodes.",
    description:
      "Concord West sits between Concord, Rhodes and North Strathfield, with Powells Creek along its western side and Concord Repatriation General Hospital at its northern end. It became a suburb in its own right in 1993 and is in the City of Canada Bay. Mr. Clog is based next door in Concord.",
    localContent:
      "Powells Creek shapes a lot of Concord West. It starts as a concrete stormwater channel in Strathfield, turns into a mangrove-lined estuary at Bressington Park and runs on through Bicentennial Park into Homebush Bay. Canada Bay Council has studied flooding on the land near the creek at Concord West and North Strathfield, and that is where stormwater problems show up first in heavy rain. Away from the creek the jobs are the everyday ones for an established suburb: roots in older sewer lines, hot water units reaching the end of their life, and leaks in homes that have been renovated more than once.",
    suburbs: ["Concord", "North Strathfield", "Rhodes", "Liberty Grove", "Homebush", "Mortlake"],
    services: ["Stormwater Drainage", "Blocked Drains", "Hot Water Systems", "CCTV Drain Inspection", "Leak Detection", "Emergency Plumbing"],
    commonProblems: [
      {
        title: "Stormwater near Powells Creek",
        body: "Properties on the low ground towards Powells Creek and Bressington Park have less fall to get rid of stormwater, and when the creek runs high, the water has nowhere to go. A silted pit or a blocked line on one of these blocks shows up as water sitting against the house during a storm.",
      },
      {
        title: "Roots in the older sewer lines",
        body: "Homes on the older streets still drain through clay pipe, and the parks and reserves that make Concord West green also send roots into those joints. A blockage that returns after each clearing is a sign to look at relining.",
      },
      {
        title: "Mixed housing, mixed pipework",
        body: "Concord West has older houses, knock-down rebuilds and townhouses on the same streets. A newer home can still connect to an older shared or council line, so a blockage is not always inside your own boundary. A camera tells you where it is.",
      },
    ],
    faqs: [
      { q: "My yard floods when Powells Creek is up. Can a plumber help?", a: "We can make sure your own stormwater lines, pits and grates are clear, sized correctly and falling the right way, which is what stops water sitting against the house. Flooding of the creek itself is a council and catchment matter." },
      { q: "How close are you to Concord West?", a: "Mr. Clog is based in neighbouring Concord, so Concord West is on our doorstep." },
      { q: "Do you work in Rhodes apartments too?", a: "Yes. We work for unit owners, tenants and strata managers in Rhodes as well as Concord West." },
    ],
    metaTitle: "Plumber Concord West | Drains, Stormwater & Hot Water",
    metaDescription: "Local plumber in Concord West, North Strathfield and Rhodes, based next door in Concord. Blocked drains, stormwater and hot water. Call (02) 9139 8945.",
  },
  {
    slug: "drummoyne",
    parent: "inner-west",
    label: "Drummoyne",
    headline: "Plumber Drummoyne",
    subheadline: "Waterfront homes, apartments and heritage houses across Drummoyne, Five Dock and Russell Lea.",
    description:
      "Drummoyne is a peninsula, with the Parramatta River around three sides, Iron Cove on one flank and Five Dock Bay on the other. It is the administrative centre of the City of Canada Bay. The Drummoyne Park Estate was subdivided in the early 1880s and built up with Victorian Italianate houses and then Federation homes, and over recent decades many waterfront houses have made way for apartments and townhouses. Mr. Clog is based in nearby Concord.",
    localContent:
      "Plumbing in Drummoyne splits roughly by street. Along the water, much of the work is in apartment buildings and townhouse complexes, where a leak or a blocked stack affects more than one owner. Inland, the older houses have the problems of their age: clay sewer, original water services, and bathrooms added long after the house was built. The fall of the land down to the river matters too. Stormwater runs downhill fast, and a blocked line on a sloping block overflows rather than draining slowly.",
    suburbs: ["Five Dock", "Russell Lea", "Abbotsford", "Rodd Point", "Chiswick", "Rozelle"],
    services: ["Blocked Drains", "Leak Detection", "Stormwater Drainage", "Hot Water Systems", "Pipe Relining", "Emergency Plumbing"],
    commonProblems: [
      {
        title: "Leaks between apartments",
        body: "In the apartment blocks along the water, a failed shower seal, flexible hose or waste pipe shows up in the ceiling of the unit below. Finding the source quickly limits the damage and settles whether it is a private repair or a strata matter.",
      },
      {
        title: "Stormwater on sloping blocks",
        body: "The land falls towards the river on most sides of the peninsula. When a stormwater line or pit on a sloping block is blocked, heavy rain goes over the top and towards the house or the neighbour below.",
      },
      {
        title: "Victorian and Federation houses on original drainage",
        body: "The older houses inland still often run their first sewer line. Roots at the clay joints and sections that have dropped are the usual causes of a blockage that keeps coming back.",
      },
    ],
    faqs: [
      { q: "Water is coming through my ceiling from the unit above. What should I do?", a: "Tell your neighbour and your strata manager straight away, and turn off the water to the affected fixture if you can. We find where the leak starts and document it, so repairs and responsibility can be sorted out." },
      { q: "Are you local to Drummoyne?", a: "Yes. Mr. Clog is based in Concord, just along the river." },
      { q: "Do you work on heritage homes in Drummoyne?", a: "Yes. Part of the Drummoyne shopping centre is a heritage conservation area, and we favour repairs such as relining that do not disturb period features." },
    ],
    metaTitle: "Plumber Drummoyne | Apartments, Leaks & Drains",
    metaDescription: "Local plumber in Drummoyne, Five Dock and Russell Lea, based in nearby Concord. Leak detection, blocked drains, stormwater and hot water. Call (02) 9139 8945.",
  },
  {
    slug: "homebush",
    parent: "western-sydney",
    label: "Homebush",
    headline: "Plumber Homebush",
    subheadline: "Heritage Village homes and new apartment blocks across Homebush, North Strathfield and Homebush West.",
    description:
      "Homebush is really two suburbs split by the railway. South of the line is the Village, subdivided from the Underwood Estate in 1878, with Victorian and Edwardian houses and heritage conservation areas along Abbotsford Road and Meredith Street. North of the line, where the abattoir and brickworks operated until the late 1980s, is mostly apartments built this century. It is in the Strathfield Municipal Council area, a short drive from our base in Concord.",
    localContent:
      "The two halves of Homebush need very different plumbing. In the Village, the work is on old houses: original clay sewer, galvanised water services and bathrooms that need planning around heritage fabric. North of the railway, it is apartment plumbing: shared stacks, hot water plant, leaks between units and strata responsibility. Powells Creek runs along the north and east of the suburb and Saleyards Creek along the west, both draining towards Homebush Bay.",
    suburbs: ["North Strathfield", "Strathfield", "Homebush West", "Concord West", "Flemington", "Sydney Olympic Park"],
    services: ["Blocked Drains", "Leak Detection", "Pipe Relining", "Hot Water Systems", "Water Pressure", "Emergency Plumbing"],
    commonProblems: [
      {
        title: "Old sewer lines in the Village",
        body: "Houses from the 1880s to the early 1900s south of the railway often still drain through their first earthenware sewer. Roots and shifted joints cause recurring blockages, and relining avoids digging through heritage gardens.",
      },
      {
        title: "Shared stacks in the newer apartment blocks",
        body: "In the apartments north of the line, several units drain into one stack. A blockage low in the building backs up into the lowest units first, even though they may not have caused it.",
      },
      {
        title: "Pressure loss in older water services",
        body: "Older homes that still have galvanised pipe lose flow as it corrodes internally. It tends to show first at the fixture furthest from the meter.",
      },
    ],
    faqs: [
      { q: "Do you work on heritage homes in the Homebush Village?", a: "Yes. We plan work around the heritage conservation areas and favour methods such as relining that leave period features alone." },
      { q: "My apartment's floor waste is backing up. Is it my problem?", a: "Often it is a blockage in the shared stack below you rather than in your unit. We find where it is so the owner or the owners corporation can deal with it." },
      { q: "Are you close to Homebush?", a: "Yes. Mr. Clog is based in Concord, just to the north." },
    ],
    metaTitle: "Plumber Homebush | Heritage Homes & Apartments",
    metaDescription: "Local plumber in Homebush and North Strathfield, based nearby in Concord. Blocked drains, apartment leaks, pipe relining and hot water. Call (02) 9139 8945.",
  },
  {
    slug: "haberfield",
    parent: "inner-west",
    label: "Haberfield",
    headline: "Plumber Haberfield",
    subheadline: "Federation garden-suburb plumbing across Haberfield, Five Dock and Ashfield.",
    description:
      "Haberfield was built from 1901 as a planned garden suburb, marketed as 'slumless, laneless and publess'. It has around 1,500 detached double-brick Federation and bungalow houses on long, narrow lots, with slate or Marseilles tile roofs and leadlight windows. The whole suburb is a heritage conservation area under Inner West Council. Mr. Clog is based a few minutes away in Concord.",
    localContent:
      "No back lanes is part of what makes Haberfield what it is, and it also shapes every plumbing job here. Access to the rear of the property is down the side of the house, so drainage work is planned around the side path, the garden and the heritage fabric of the house. The houses are all roughly the same age, which means their plumbing tends to wear out in the same ways: original clay sewer lines, galvanised water services and roof drainage on slate and terracotta roofs. The suburb is bordered by Iron Cove, Hawthorne Canal and Iron Cove Creek, and sits in both the Hawthorne Canal and Dobroyd Canal flood catchments.",
    suburbs: ["Five Dock", "Ashfield", "Summer Hill", "Leichhardt", "Lilyfield", "Rodd Point"],
    services: ["Pipe Relining", "Blocked Drains", "CCTV Drain Inspection", "Roof Plumbing", "Stormwater Drainage", "Bathroom Renovations"],
    commonProblems: [
      {
        title: "No rear lane for access",
        body: "Haberfield was designed without back lanes, so everything reaches the back yard down the side of the house. Relining through an existing access point is often the practical choice over excavating a long sewer run that way.",
      },
      {
        title: "Century-old sewer on long lots",
        body: "Lots here are about 150 feet deep, so drainage runs are long, passing under garden beds and paths. A run that long in original earthenware has many joints for roots to find.",
      },
      {
        title: "Gutters and downpipes on heritage roofs",
        body: "Slate and Marseilles tile roofs need care to work on, and their box gutters and downpipes are often original. A blocked or corroded outlet sends water into the ceiling or down the wall rather than into the stormwater.",
      },
    ],
    faqs: [
      { q: "Does heritage protection limit plumbing work in Haberfield?", a: "Routine repairs are not usually affected, but anything that changes the look of the house or its setting may need approval. We tell you before we start if something needs council sign-off." },
      { q: "How do you get equipment in without a back lane?", a: "Down the side path, with protection for paths and garden. Relining is often chosen because it needs little room to work." },
      { q: "Are you local?", a: "Yes. Mr. Clog is based in Concord, a few minutes away." },
    ],
    metaTitle: "Plumber Haberfield | Federation Homes & Relining",
    metaDescription: "Local plumber in Haberfield and Five Dock, based nearby in Concord. Pipe relining, blocked drains and roof plumbing for Federation homes. Call (02) 9139 8945.",
  },
  {
    slug: "lidcombe",
    parent: "western-sydney",
    label: "Lidcombe",
    headline: "Plumber Lidcombe",
    subheadline: "Blocked drains, stormwater and apartment plumbing across Lidcombe, Berala and Rookwood.",
    description:
      "Lidcombe grew up around Rookwood Cemetery, which opened in 1868, and was known as Rookwood until it was renamed in the 1910s. Industry followed, and so did housing, including the Marne Park soldiers' settlement of almost 100 homes built in 1920–22. The old Lidcombe Hospital precinct is now residential. Most of the suburb is in Cumberland Council, with a small industrial area in the north in the City of Parramatta. Mr. Clog is based nearby in Concord.",
    localContent:
      "Haslams Creek is the local factor to know. It rises in Rookwood, runs through Lidcombe in lined channels and pipes, and drains to Homebush Bay. Cumberland Council's Haslams Creek flood study records both overbank flooding and pipe drainage surcharging, so stormwater that backs up in a storm is a known local problem, not just bad luck. For homes, the work ranges from the older houses built between the wars to its apartment blocks, which make up a large share of Lidcombe's homes, where shared drainage and leaks between units are the common calls.",
    suburbs: ["Berala", "Auburn", "Rookwood", "Silverwater", "Flemington", "Newington"],
    services: ["Stormwater Drainage", "Blocked Drains", "Leak Detection", "Hot Water Systems", "Pipe Relining", "Emergency Plumbing"],
    commonProblems: [
      {
        title: "Stormwater surcharging near Haslams Creek",
        body: "When the creek and the pipes feeding it are full, stormwater backs up through pits and gullies. We check that your own lines and pits are clear and have the right fall, so they empty as soon as the system can take them.",
      },
      {
        title: "Interwar homes on original drainage",
        body: "Homes from Lidcombe's 1920s growth, including those around Marne Park, are now a century old. Their clay sewer and galvanised water pipes are often original and are nearing the end of their working life.",
      },
      {
        title: "Shared drainage in apartment blocks",
        body: "In Lidcombe's apartment blocks, one blocked stack or failed seal can affect several units. Pinpointing the fault settles whether it is a job for the owner or for strata.",
      },
    ],
    faqs: [
      { q: "Our street floods in big storms. Can you stop water getting into the house?", a: "We can make sure your property's own stormwater drains, pits and grates are clear and working. Flooding from the creek or the council system itself is a matter for Cumberland Council." },
      { q: "Do you work with strata in Lidcombe?", a: "Yes, for owners, tenants and strata managers, with camera footage or a written report where it helps." },
      { q: "How far are you from Lidcombe?", a: "Mr. Clog is based in Concord, a short drive east." },
    ],
    metaTitle: "Plumber Lidcombe | Stormwater, Drains & Strata",
    metaDescription: "Local plumber in Lidcombe, Berala and Auburn, based nearby in Concord. Stormwater, blocked drains, apartment leaks and hot water. Call (02) 9139 8945.",
  },
  {
    slug: "flemington",
    parent: "western-sydney",
    label: "Flemington",
    headline: "Plumber Flemington",
    subheadline: "Homes, shops and commercial plumbing across Flemington (Homebush West), Homebush and Lidcombe.",
    description:
      "Flemington has officially been called Homebush West since 1992, but most people still call it Flemington. It was the site of cattle saleyards, then Sydney Markets from 1975, and much of its housing was built for workers at the Ford factory that operated there from 1935 to 1994. It is in the Strathfield Municipal Council area, close to our base in Concord.",
    localContent:
      "Flemington's plumbing reflects its working history. Houses built for Ford workers are modest homes now decades old, often on their original sewer and water pipes. The shops on The Crescent and Henley Road beside the station are full of Vietnamese and other Asian eateries, grocers and butchers, which means grease and food waste in the drains. Saleyards Creek runs along the Homebush boundary in a concrete channel, lined in the 1930s, and partly under Sydney Markets, and the A3 cuts through the middle of the suburb.",
    suburbs: ["Homebush", "Lidcombe", "Strathfield", "Rookwood", "Sydney Markets", "Sydney Olympic Park"],
    services: ["Blocked Drains", "Kitchen Plumbing", "Jet Blasting", "Hot Water Systems", "Pipe Relining", "Emergency Plumbing"],
    commonProblems: [
      {
        title: "Grease in food-business drains",
        body: "Restaurants, butchers and grocers around Flemington station put grease and food waste into their drains every day. Without regular jetting and grease trap servicing, the blockage usually arrives during trade.",
      },
      {
        title: "Older workers' housing on original pipes",
        body: "Many homes built for Ford workers still have their first sewer and water pipes. Recurring blockages and falling water pressure are the usual signs those pipes are near the end.",
      },
      {
        title: "Mixing home and shop drainage",
        body: "Shop-top housing and houses converted to businesses often share drainage between a commercial kitchen and a home. A fault in one shows up in the other, so the whole line needs checking.",
      },
    ],
    faqs: [
      { q: "Is Flemington the same as Homebush West?", a: "Yes. Homebush West has been the official name since 1992, but Flemington is still widely used. We cover both names and the streets around the markets." },
      { q: "Can you jet our restaurant's drains outside trading hours?", a: "Yes. We schedule commercial drain cleaning early or late so it does not interrupt service." },
      { q: "Are you nearby?", a: "Yes. Mr. Clog is based in Concord, just north-east of Flemington." },
    ],
    metaTitle: "Plumber Flemington | Homebush West Homes & Shops",
    metaDescription: "Local plumber in Flemington (Homebush West), Homebush and Lidcombe, based in nearby Concord. Blocked drains, grease, hot water. Call (02) 9139 8945.",
  },
  {
    slug: "summer-hill",
    parent: "inner-west",
    label: "Summer Hill",
    headline: "Plumber Summer Hill",
    subheadline: "Victorian villas, apartments and canal-side drainage across Summer Hill, Lewisham and Ashfield.",
    description:
      "Summer Hill grew after its railway station opened in 1879 and was a well-to-do suburb until about 1910. Its heritage conservation areas protect Victorian Italianate and Filigree houses in stuccoed brick, weatherboard cottages, and Federation and interwar homes, while almost two-thirds of its dwellings are now apartments. It is in the Inner West Council area, a short drive from our base in Concord.",
    localContent:
      "Hawthorne Canal is the thing to understand about drainage in Summer Hill. Once Long Cove Creek, it runs through Lewisham, Summer Hill, Haberfield and Leichhardt to Iron Cove, and the council's flood study shows flooding concentrated along the canal and along overland flow paths through the streets. Stormwater that backs up in a storm often comes down to where a property sits on one of those paths. The housing adds the rest: very old houses on original drainage, and many apartment blocks with shared plumbing.",
    suburbs: ["Lewisham", "Ashfield", "Haberfield", "Dulwich Hill", "Petersham", "Croydon"],
    services: ["Stormwater Drainage", "Blocked Drains", "Pipe Relining", "Leak Detection", "Hot Water Systems", "Emergency Plumbing"],
    commonProblems: [
      {
        title: "Overland flow towards Hawthorne Canal",
        body: "Properties on the overland flow paths towards the canal take water from streets further up in heavy rain. Blocked grates and undersized stormwater lines make it worse, and fixing them is within reach even when the canal is full.",
      },
      {
        title: "Stuccoed Victorian houses on first-generation drainage",
        body: "Some houses built from the late 1870s onward have drainage that has never been replaced. Cracked earthenware, roots and joints that have pulled apart are all common.",
      },
      {
        title: "Apartment plumbing",
        body: "With most homes in Summer Hill now apartments, many calls involve shared plumbing: a blocked stack, a leak into the unit below, or a building hot water system. Finding the exact source settles who is responsible.",
      },
    ],
    faqs: [
      { q: "Water comes into my yard from the street when it pours. Can that be fixed?", a: "Often it can be reduced. We check that your grates, pits and stormwater lines are clear and large enough, and that surface water is directed away from the house." },
      { q: "Do you work on heritage houses in Summer Hill?", a: "Yes. We plan around the conservation areas and favour repairs such as relining that keep period fabric intact." },
      { q: "Are you local?", a: "Mr. Clog is based in Concord, close to Summer Hill." },
    ],
    metaTitle: "Plumber Summer Hill | Heritage Homes & Stormwater",
    metaDescription: "Local plumber in Summer Hill, Lewisham and Ashfield, based in nearby Concord. Stormwater, blocked drains, relining and apartment leaks. Call (02) 9139 8945.",
  },
  {
    slug: "lilyfield",
    parent: "inner-west",
    label: "Lilyfield",
    headline: "Plumber Lilyfield",
    subheadline: "Cottages, semis and low-lying drainage across Lilyfield, Leichhardt and Rozelle.",
    description:
      "Lilyfield only became a formal suburb in 1977, and its boundaries were extended to Iron Cove in 1993. The goods railway line splits it in two. The south is small brick and weatherboard cottages, terraces and semi-detached houses, and the north holds Callan Park, Leichhardt Park and the Iron Cove foreshore. Inner West Council looks after the suburb, and Mr. Clog is based nearby in Concord.",
    localContent:
      "Whites Creek runs between Lilyfield and Annandale down to Rozelle Bay. It was turned into a brick and concrete channel between 1898 and 1935, and the heritage-listed White's Creek Aqueduct on Piper Street still carries a sewer across it. The council's floodplain plan says most flooding in Lilyfield is overland flow, when pits and pipes overflow in heavy rain. Add small cottages and semis on narrow lots, often sharing drainage, and the local work is a mix of stormwater, old sewer lines and tight access.",
    suburbs: ["Leichhardt", "Rozelle", "Annandale", "Haberfield", "Rodd Point", "Balmain"],
    services: ["Stormwater Drainage", "Blocked Drains", "Pipe Relining", "CCTV Drain Inspection", "Hot Water Systems", "Emergency Plumbing"],
    commonProblems: [
      {
        title: "Pits and pipes overflowing in storms",
        body: "With overland flow the main flood risk, a silted pit or blocked stormwater line on your own property makes a big difference. Keeping them clear and correctly graded is where a plumber can help.",
      },
      {
        title: "Semis sharing a sewer line",
        body: "Semi-detached houses and small cottages often share a drain with the neighbour. When it blocks, both homes are affected, and pinpointing the fault with a camera settles whose side it is on.",
      },
      {
        title: "Weatherboard cottages with raised floors",
        body: "Many older timber cottages have pipes running under the floor, and a slow leak there can go unnoticed for a long time. Damp smells or a rising water bill are the usual clues.",
      },
    ],
    faqs: [
      { q: "Why does my drain overflow when it rains hard?", a: "Usually stormwater is getting into the sewer, or your stormwater line or pit is blocked. We camera the line to find which before quoting." },
      { q: "Can you work in narrow Lilyfield cottages?", a: "Yes. We bring gear through the house with floor protection, or use the side path where there is one." },
      { q: "Where are you based?", a: "Mr. Clog is based in Concord, and Lilyfield is an easy run in from there." },
    ],
    metaTitle: "Plumber Lilyfield | Stormwater & Blocked Drains",
    metaDescription: "Local plumber in Lilyfield, Leichhardt and Rozelle, based in nearby Concord. Stormwater, blocked drains, relining and emergency plumbing. Call (02) 9139 8945.",
  },
  {
    slug: "rozelle",
    parent: "inner-west",
    label: "Rozelle",
    headline: "Plumber Rozelle",
    subheadline: "Workers' cottages, terraces and apartments across Rozelle, Balmain and Lilyfield.",
    description:
      "Rozelle was Balmain West until 1892. Much of it was subdivided between 1860 and 1882, including Alfred Hancock's 'Homes for the People', many built in weatherboard and corrugated iron and sold to working men on instalments. Today it is a mix of terraces and semis, apartments and houses, with Iron Cove on one side and Rozelle and White Bays on the other. The suburb falls under Inner West Council, and our base in Concord is a short drive away.",
    localContent:
      "Rozelle's housing is some of the oldest in the Inner West, and it was built cheaply and quickly for working families. Many of those small homes have been renovated several times, with each round leaving another layer of pipework. That is what shows up here: waste lines joined in odd places, old clay sewer under newer bathrooms, and leaks hidden under timber floors. Around Victoria Road and in the apartment blocks, the calls are more often about shared drainage and leaks between units.",
    suburbs: ["Balmain", "Lilyfield", "Birchgrove", "Leichhardt", "Annandale", "Drummoyne"],
    services: ["Blocked Drains", "Leak Detection", "Pipe Relining", "Bathroom Renovations", "Hot Water Systems", "Emergency Plumbing"],
    commonProblems: [
      {
        title: "Layers of renovation",
        body: "Nineteenth-century cottages that have been renovated several times often have new plumbing joined to old in awkward places. A slow drain or a smell that will not go away is often at one of those joins.",
      },
      {
        title: "Original clay sewer",
        body: "Under the bathrooms and kitchens, the sewer line to the street is frequently still the original earthenware. Roots and cracks cause blockages that return, and relining is often the lasting fix.",
      },
      {
        title: "Hidden leaks under timber floors",
        body: "Older cottages with suspended floors can leak for months before anyone notices. A rising water bill, a musty smell or a soft floor near a wet area are worth checking.",
      },
    ],
    faqs: [
      { q: "Should I replace the old plumbing while I'm renovating?", a: "It is the cheapest time to do it. We can camera the sewer and check the water service first, so you know what needs replacing before the walls are closed." },
      { q: "Do you work on apartments near Victoria Road?", a: "Yes. We take calls from owners, renters and strata managers in Rozelle's apartment buildings." },
      { q: "Are you nearby?", a: "Yes. Mr. Clog is based in Concord, on the other side of Five Dock and Russell Lea." },
    ],
    metaTitle: "Plumber Rozelle | Cottages, Terraces & Apartments",
    metaDescription: "Local plumber in Rozelle, Balmain and Lilyfield, based in nearby Concord. Blocked drains, leak detection, relining and renovations. Call (02) 9139 8945.",
  },
  {
    slug: "annandale",
    parent: "inner-west",
    label: "Annandale",
    headline: "Plumber Annandale",
    subheadline: "Victorian villas, terraces and creek-side drainage across Annandale, Stanmore and Camperdown.",
    description:
      "Annandale was developed from 1877, when John Young bought the Johnston estate and laid out a grid around Johnston Street, the first 30-metre-wide street in Sydney. Boom-period Victorian villas and Gothic Revival houses sit alongside terraces and semis built for tradespeople and workers, and much of the suburb is a heritage conservation area. Annandale is part of Inner West Council, and Mr. Clog works there from our base in Concord.",
    localContent:
      "Annandale sits between two creeks: Johnstons Creek on its eastern boundary and Whites Creek on the west, both turned into brick and concrete channels in the late nineteenth and early twentieth centuries. Inner West Council notes that many natural drainage lines here were built over and piped, which is why low spots flood when the pipes cannot keep up. The houses add their own problems: Victorian drainage, cast iron and clay, and a lot of it still in service.",
    suburbs: ["Leichhardt", "Stanmore", "Camperdown", "Glebe", "Forest Lodge", "Lilyfield"],
    services: ["Stormwater Drainage", "Pipe Relining", "Blocked Drains", "CCTV Drain Inspection", "Roof Plumbing", "Emergency Plumbing"],
    commonProblems: [
      {
        title: "Built-over drainage lines",
        body: "Where old watercourses were piped and built over, water still follows its natural course in a big storm. Properties on those low spots need their own stormwater to be clear and flowing to cope.",
      },
      {
        title: "Victorian villa drainage",
        body: "The large villas from the 1880s and 1890s have long, branching drainage systems, and many are still largely original. Roots, cracked clay and failing cast iron all turn up, often in the same property.",
      },
      {
        title: "Terraces and semis sharing a line",
        body: "In the terrace and semi streets, a sewer line is often shared with the neighbour. A camera locates the blockage so it is clear whose side it is on before anyone pays.",
      },
    ],
    faqs: [
      { q: "Why does water pool around my Annandale house in a storm?", a: "Often it is a blocked grate or stormwater line, or the property sits on an old drainage path. We find the cause and tell you what will actually help." },
      { q: "Do you work on heritage villas in Annandale?", a: "Yes. We favour repairs such as relining that avoid disturbing heritage fabric, and tell you upfront if approval is needed." },
      { q: "Where are you based?", a: "Mr. Clog is based in Concord, a short drive west of Annandale." },
    ],
    metaTitle: "Plumber Annandale | Heritage Homes & Stormwater",
    metaDescription: "Local plumber in Annandale, Stanmore and Camperdown, based in nearby Concord. Stormwater, pipe relining and blocked drains. Call (02) 9139 8945.",
  },
  {
    slug: "dulwich-hill",
    parent: "inner-west",
    label: "Dulwich Hill",
    headline: "Plumber Dulwich Hill",
    subheadline: "Federation bungalows, apartments and stormwater across Dulwich Hill, Hurlstone Park and Marrickville.",
    description:
      "Dulwich Hill grew after trams arrived in 1889 and the railway in 1895, and much of it is Federation housing. In the south, orchards and market gardens were subdivided in the early 1900s and built out by 1920 with single-storey face-brick bungalows with slate roofs. More than half its homes are now apartments. The light rail runs on the old goods line, and the suburb stretches south to the Cooks River. Dulwich Hill is governed by Inner West Council; Mr. Clog is based in Concord.",
    localContent:
      "The south of Dulwich Hill runs down to the Cooks River and is covered by the council's Marrickville South flood study, while parts of the north drain to Hawthorne Canal. That gives the suburb two separate stormwater stories depending on which side of the hill you are on. The Federation bungalows of the South Dulwich Hill conservation area are more than a century old, and slate roofs, original gutters and first-generation clay sewer are still common among them.",
    suburbs: ["Hurlstone Park", "Marrickville", "Summer Hill", "Lewisham", "Petersham", "Earlwood"],
    services: ["Stormwater Drainage", "Roof Plumbing", "Blocked Drains", "Pipe Relining", "Hot Water Systems", "Leak Detection"],
    commonProblems: [
      {
        title: "Stormwater on the Cooks River side",
        body: "Streets falling towards the Cooks River take water from higher up in heavy rain. A blocked line or undersized pit shows up as ponding in the yard or water against the house.",
      },
      {
        title: "Slate roofs and original gutters",
        body: "Federation bungalows with slate roofs often keep their original gutters and downpipes. Rust, blocked outlets and failed joints send water into eaves and walls, and slate needs care to walk on.",
      },
      {
        title: "Apartment blocks with ageing plumbing",
        body: "More than half of Dulwich Hill's homes are apartments, where stacks and water pipes are shared. A leak into the unit below or a blocked common drain affects more than one owner.",
      },
    ],
    faqs: [
      { q: "Can you work on a slate roof?", a: "Yes. We repair and replace gutters and downpipes on slate roofs with care, and we will tell you if slate itself needs a roofer." },
      { q: "Does the Inner West heritage overlay affect plumbing work?", a: "Most repairs are not affected. Visible changes to a house in a conservation area may need approval, and we flag that before starting." },
      { q: "Are you local?", a: "Mr. Clog is based in Concord, and Dulwich Hill is well within our local area." },
    ],
    metaTitle: "Plumber Dulwich Hill | Federation Homes & Stormwater",
    metaDescription: "Local plumber in Dulwich Hill, Hurlstone Park and Marrickville, based in nearby Concord. Stormwater, roof plumbing, blocked drains. Call (02) 9139 8945.",
  },
  {
    slug: "petersham",
    parent: "inner-west",
    label: "Petersham",
    headline: "Plumber Petersham",
    subheadline: "Terraces, Victorian houses and restaurant drains across Petersham, Lewisham and Stanmore.",
    description:
      "Petersham is one of the Inner West's oldest suburbs: its railway opened in 1857 and it became a municipality in 1871. It is mostly terraces, with larger Victorian and Edwardian houses around Petersham Park, and the stretch of Audley Street known as Little Portugal. Its council is Inner West Council, and Mr. Clog is based a few suburbs away in Concord.",
    localContent:
      "Johnstons Creek begins in Petersham, and the suburb sits in both the Johnstons and Whites Creek flood study area and the Hawthorne Canal catchment. That makes stormwater a real consideration on the lower streets. On the higher ground, the work is about age: terraces and Victorian houses with original clay sewer and cast iron waste. And around the Portuguese restaurants and cafes, commercial kitchens need their drains and grease traps kept clear.",
    suburbs: ["Lewisham", "Stanmore", "Leichhardt", "Marrickville", "Dulwich Hill", "Summer Hill"],
    services: ["Blocked Drains", "Kitchen Plumbing", "Jet Blasting", "Pipe Relining", "Stormwater Drainage", "Emergency Plumbing"],
    commonProblems: [
      {
        title: "Grease in restaurant drains",
        body: "Commercial kitchens around Audley Street put grease into their drains daily. Regular jetting and grease trap servicing stop the blockage that otherwise arrives mid-service.",
      },
      {
        title: "Cast iron waste in Victorian homes",
        body: "Older houses often still have cast iron waste pipes, which rust from the inside. Slow drains, stains on walls near joints and persistent smells are early signs.",
      },
      {
        title: "Stormwater at the head of Johnstons Creek",
        body: "Lower-lying streets towards the creek collect water in heavy rain. Clear pits and correctly graded stormwater lines are what keep it away from the house.",
      },
    ],
    faqs: [
      { q: "Can you service our restaurant's drains before opening?", a: "Yes. We schedule commercial drain cleaning outside trading hours." },
      { q: "My terrace drain keeps blocking. Why?", a: "Usually roots or cracks in the old clay sewer. A camera inspection shows whether relining will fix it for good." },
      { q: "Where are you based?", a: "Mr. Clog is based in Concord, a few suburbs west of Petersham." },
    ],
    metaTitle: "Plumber Petersham | Terraces & Restaurant Drains",
    metaDescription: "Local plumber in Petersham, Lewisham and Stanmore, based in nearby Concord. Blocked drains, grease jetting, relining and stormwater. Call (02) 9139 8945.",
  },
  {
    slug: "stanmore",
    parent: "inner-west",
    label: "Stanmore",
    headline: "Plumber Stanmore",
    subheadline: "Victorian villas and Federation cottages across Stanmore, Enmore and Camperdown.",
    description:
      "Stanmore was subdivided in the 1880s and 1890s and grew up around its railway station, which opened in 1878, with Victorian villas, terraces, semis and Federation cottages. Several heritage conservation areas cover its northern streets, and Newington College and the Parramatta Road strip sit on its edges. Stanmore is in Inner West Council's area, near our Concord base.",
    localContent:
      "Percival Road is a useful dividing line in Stanmore: east of it, stormwater heads to Johnstons Creek, and west of it to Whites Creek, and both are covered by the council's flood study. The housing is almost all late Victorian and Federation, so the plumbing problems are the ones that come with that age. Many of these homes have been renovated inside while the drains under them have not been touched.",
    suburbs: ["Enmore", "Camperdown", "Annandale", "Petersham", "Newtown", "Leichhardt"],
    services: ["Pipe Relining", "Blocked Drains", "CCTV Drain Inspection", "Leak Detection", "Hot Water Systems", "Bathroom Renovations"],
    commonProblems: [
      {
        title: "Renovated homes on original drains",
        body: "A new kitchen or bathroom often drains into a sewer line laid over a century ago. When the old pipe cracks or roots get in, the new fittings are the first to show it.",
      },
      {
        title: "Tight access to terraces and semis",
        body: "Terraces and semis in Stanmore often have no side access, so equipment comes through the house. No-dig relining through an existing access point avoids lifting floors or courtyards.",
      },
      {
        title: "Stormwater on the low side of each catchment",
        body: "Streets falling towards Johnstons or Whites Creek take water from higher up in a storm. A blocked grate or line on those properties turns heavy rain into water in the house.",
      },
    ],
    faqs: [
      { q: "My renovated bathroom drains slowly. Is it the new work?", a: "Not necessarily. The fault is often in the old sewer line the new bathroom drains into. A camera inspection shows where it is." },
      { q: "Do you work in Stanmore's conservation areas?", a: "Yes. Routine plumbing is rarely affected, and we tell you before starting if anything needs approval." },
      { q: "Are you local?", a: "Mr. Clog is based in Concord, and Stanmore is one of the Inner West suburbs close to our base." },
    ],
    metaTitle: "Plumber Stanmore | Relining & Blocked Drains",
    metaDescription: "Local plumber in Stanmore, Enmore and Camperdown, based in nearby Concord. Pipe relining, blocked drains and plumbing for older homes. Call (02) 9139 8945.",
  },
  {
    slug: "kellyville",
    parent: "hills-district",
    label: "Kellyville",
    headline: "Plumber Kellyville",
    subheadline: "Recycled water, new estates and hot water across Kellyville, Beaumont Hills and Kellyville Ridge.",
    description:
      "Kellyville was semi-rural for most of the twentieth century. Around 900 homes were built near Acres Road from the 1960s to the 1980s, and new housing estates spread through the suburb from the 1990s. Kellyville Metro station opened in 2019. Cattai, Caddies and Second Ponds Creeks run through it, and it is in The Hills Shire.",
    localContent:
      "Kellyville is inside Sydney Water's Rouse Hill recycled water area, one of the oldest and largest residential recycling schemes in the world, with recycled water flowing to homes since 2001. Many homes here have two water supplies: drinking water, and recycled water in purple pipes for toilets, gardens and washing machines. That changes plumbing work. Any alteration has to keep the two systems completely separate, and it is worth knowing which taps are which before you connect a hose or a new appliance. The newer estates also have their own issues as homes pass fifteen or twenty years: hot water systems reaching the end of their life and fittings starting to leak.",
    suburbs: ["Beaumont Hills", "Kellyville Ridge", "North Kellyville", "Castle Hill", "Bella Vista", "Rouse Hill"],
    services: ["Hot Water Systems", "Leak Detection", "Blocked Drains", "Water Pressure", "Taps & Toilets", "Emergency Plumbing"],
    commonProblems: [
      {
        title: "Recycled water connections",
        body: "Homes on the Rouse Hill scheme have purple recycled water pipes alongside the drinking water. Renovations, new appliances and garden work must connect to the right one, and a cross-connection between them is a health risk. Work on these systems should always be done by a licensed plumber.",
      },
      {
        title: "Hot water in 1990s and 2000s estates",
        body: "Many homes from the first waves of estate building still have their original hot water units. Tanks of that age tend to start leaking or losing performance, and planning a replacement beats a cold shower.",
      },
      {
        title: "Older homes around Acres Road",
        body: "Houses from the 1960s to the 1980s have older drainage and water pipes than the estates around them. Roots in clay sewer and ageing copper or galvanised pipe are the usual faults.",
      },
    ],
    faqs: [
      { q: "How do I know if my home has recycled water?", a: "Look for purple pipes, taps and a second meter, usually near the drinking water meter. If you are unsure, we can check and label them." },
      { q: "Can I drink the recycled water?", a: "No. Recycled water is not for drinking. Sydney Water lists the approved uses, such as toilet flushing, garden watering and washing machines, so check its guidance before using it for anything else." },
      { q: "Do you cover Kellyville Ridge and North Kellyville too?", a: "Yes, along with Beaumont Hills, Bella Vista and Rouse Hill." },
    ],
    metaTitle: "Plumber Kellyville | Hot Water & Recycled Water",
    metaDescription: "Local plumber in Kellyville, Beaumont Hills and Kellyville Ridge. Hot water, recycled water connections, leak detection and blocked drains. Call (02) 9139 8945.",
  },
];
