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
    metaDescription: "Local plumber in Marrickville, Dulwich Hill and Sydenham. Blocked drains, stormwater, hot water and 24/7 emergency plumbing. $0 call-out fee. Call (02) 9139 8945.",
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
    subheadline: "Apartment and commercial plumbing across the Parramatta CBD, Harris Park and Westmead.",
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
    metaTitle: "Plumber Parramatta CBD | Apartment & Strata Plumbing",
    metaDescription: "Local plumber in the Parramatta CBD, Harris Park and Westmead. Blocked drains, strata plumbing, CCTV inspection and emergency repairs. Call (02) 9139 8945.",
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
];
