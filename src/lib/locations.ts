export interface Location {
  slug: string;
  label: string;
  headline: string;
  subheadline: string;
  description: string;
  suburbs: string[];
  services: string[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
  localContent?: string;
  /**
   * Plumbing problems that are genuinely characteristic of this area —
   * driven by its housing stock, soil, or coastline. This is what makes a
   * location page worth ranking; keep it specific and true, never padding.
   */
  commonProblems?: { title: string; body: string }[];
  /**
   * For a suburb page, the slug of the region it sits inside. Regions leave
   * this undefined. It drives the breadcrumb up to the region page and the
   * list of sibling suburbs, which is most of the point of having suburb
   * pages at all — a single page for "plumber Newtown" ranks for very little
   * on its own, but a region page linking down to twenty suburb pages that
   * link back up is a structure search engines can read.
   */
  parent?: string;
}

export const locations: Location[] = [
  {
    slug: "inner-west",
    label: "Inner West",
    headline: "Plumber Inner West Sydney",
    subheadline: "Fast, reliable plumbing across Newtown, Balmain, Leichhardt, and beyond.",
    description:
      "Mr. Clog is the Inner West's trusted local plumber. We service all homes and businesses across the Inner West — from the heritage terraces of Balmain to the apartments of Newtown. Available 24/7 with $0 call-out fee.",
    suburbs: [
      "Newtown", "Balmain", "Leichhardt", "Annandale",
      "Glebe", "Rozelle", "Drummoyne", "Marrickville",
      "Petersham", "Stanmore", "Enmore", "Dulwich Hill",
      "Summer Hill", "Haberfield", "Lilyfield",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "How quickly can you reach the Inner West?", a: "We have plumbers based in and around the Inner West. In most cases we can reach you within 30–60 minutes." },
      { q: "Do you work on heritage and terrace properties?", a: "Yes — we have extensive experience with Inner West's older housing stock, including heritage sandstone, cast iron pipes, and terrace drainage systems." },
      { q: "Do you service strata and apartment buildings?", a: "Yes — we work with both individual unit owners and strata managers across Inner West apartment buildings." },
    ],
    metaTitle: "Plumber Inner West Sydney | 24/7",
    metaDescription: "Local plumber in Sydney's Inner West. Newtown, Balmain, Leichhardt, Marrickville and more. Available 24/7, $0 call-out fee. Call (02) 9139 8945.",
    localContent:
      "Mr. Clog regularly works on the Inner West's distinctive housing stock — Victorian and Federation-era terraces with original cast iron waste pipes, sandstone foundations, and narrow side easements that demand specialist knowledge. We’re familiar with Inner West Council’s requirements and the ageing water infrastructure common in suburbs like Balmain, Glebe, and Newtown. From CCTV drain surveys under heritage sandstone to emergency repairs in tight Marrickville terrace alleyways, our team has seen it all.",
    commonProblems: [
      { title: "Tree roots in old earthenware drains", body: "The Inner West's plane trees and figs are the reason so many terraces block every few months. Pre-war drainage here is mostly earthenware laid in short sections, and every joint is a seam that roots can find once it perishes. Cutting the roots clears the line for a season; sealing the joints is what ends the cycle. We camera the run first so you can see whether the pipe is sound enough to reline or whether one collapsed section needs replacing." },
      { title: "Shared and party-wall drainage between terraces", body: "Terraces in Balmain, Newtown and Annandale frequently share a drainage line running along or under the party wall. That means a blockage at your neighbour's end backs up into your bathroom, and a repair may need access from both properties. It also complicates who pays. We work out where the boundary trap sits before quoting, so responsibility is clear before anyone starts digging." },
      { title: "Cast iron waste pipes reaching end of life", body: "Federation and Victorian homes across the Inner West still run original cast iron waste stacks. Cast iron rusts from the inside out, so the first symptoms are slow drainage, staining on the wall below a joint, or a persistent smell with no obvious source. By the time it weeps visibly the pipe wall is usually thin throughout, and patching one section buys very little time." },
      { title: "Access in narrow terrace sites", body: "A Marrickville terrace with a metre-wide side passage and no rear lane changes how a job gets done. Machinery may not fit, and excavation can undermine a shared wall. This is where no-dig methods earn their keep — relining a damaged drain through an existing inspection opening avoids both the access problem and the cost of reinstating tiled courtyards." },
    ],
  },
  {
    slug: "eastern-suburbs",
    label: "Eastern Suburbs",
    headline: "Plumber Eastern Suburbs Sydney",
    subheadline: "Premium plumbing service across Bondi, Randwick, Coogee, and surrounds.",
    description:
      "From Bondi Beach apartments to Randwick family homes, Mr. Clog delivers prompt, professional plumbing across Sydney's Eastern Suburbs. We understand the coastal environment and the challenges it creates for plumbing — from corrosion to ageing infrastructure.",
    suburbs: [
      "Bondi", "Bondi Beach", "Bondi Junction", "Double Bay",
      "Rose Bay", "Vaucluse", "Edgecliff", "Woollahra",
      "Paddington", "Randwick", "Coogee", "Maroubra",
      "Kingsford", "Kensington", "Bronte", "Clovelly",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you service high-rise apartments in Bondi Junction?", a: "Yes — we work with apartment owners, tenants, and building managers across all types of Eastern Suburbs properties." },
      { q: "Can you handle saltwater corrosion issues?", a: "Yes — properties near the coast often have accelerated pipe corrosion. We assess and replace corroded pipework using marine-appropriate materials." },
      { q: "Are you available on weekends in the Eastern Suburbs?", a: "Yes — we're available 24/7 including weekends and public holidays with $0 call-out fee." },
    ],
    metaTitle: "Plumber Eastern Suburbs Sydney | 24/7",
    metaDescription: "Trusted plumber in Sydney's Eastern Suburbs. Bondi, Randwick, Coogee, Paddington and more. Available 24/7, $0 call-out fee. Call (02) 9139 8945.",
    localContent:
      "Properties in Sydney’s Eastern Suburbs face unique plumbing challenges: salt-laden sea air accelerates pipe corrosion in Bondi and Coogee, older infrastructure in Paddington and Woollahra requires heritage-sensitive repairs, and high-density apartment towers in Randwick and Bondi Junction demand plumbers experienced with strata. Mr. Clog works closely with Randwick City Council and Woollahra Council inspectors and understands the building codes for this area inside out.",
    commonProblems: [
      { title: "Salt air corroding fittings and roof plumbing", body: "Within a few streets of the water at Bondi, Bronte and Coogee, salt-laden air attacks exposed metal continuously. Gutters, downpipes, flashings and outdoor tap fittings corrode noticeably faster than the same components a few kilometres inland. It is the reason coastal homes need roof plumbing checked on a shorter cycle, and why material choice matters more here than almost anywhere else in Sydney." },
      { title: "Hot water and pressure in apartment blocks", body: "Much of the Eastern Suburbs lives in strata. That changes the problem: a lukewarm shower in a unit may be your own system, a shared plant issue, or a pressure-limiting valve somewhere in the building. Diagnosing it means establishing quickly whether the fault is inside your lot or in common property — which decides both who fixes it and who pays." },
      { title: "Sand-based soils and stormwater", body: "The sandy ground across much of the Eastern Suburbs drains well until it does not. Sand migrates into cracked stormwater lines, and a pipe can silt up substantially without any single obvious blockage. Yards that flood in heavy rain despite clean gutters are often carrying a stormwater line partly full of sand rather than debris." },
      { title: "Pool top-ups and backflow requirements", body: "Pools are common here, and an automatic top-up connected to the mains creates exactly the cross-connection that backflow prevention exists to stop. Many owners inherit a device with the property and have no idea it needs testing. If your property has a pool auto-fill, irrigation, or a plumbed rainwater tank, it is worth confirming your obligations with Sydney Water." },
    ],
  },
  {
    slug: "north-shore",
    label: "North Shore",
    headline: "Plumber North Shore Sydney",
    subheadline: "Reliable plumbing across Chatswood, Lane Cove, Mosman, and the North Shore.",
    description:
      "Mr. Clog services the entire North Shore — from the Lower North Shore suburbs of Mosman and Neutral Bay through to Chatswood, Lane Cove, and beyond. We're familiar with the area's mix of older homes, new developments, and everything in between.",
    suburbs: [
      "Chatswood", "Lane Cove", "Mosman", "Neutral Bay",
      "Cremorne", "Artarmon", "Willoughby", "Lindfield",
      "Killara", "Gordon", "Turramurra", "Pymble",
      "Wahroonga", "Hornsby", "Roseville", "Castle Cove",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you service apartment blocks in Chatswood?", a: "Yes — we work with apartment buildings, strata managers, and individual owners across all North Shore high-rise and unit complexes." },
      { q: "Can you handle large family homes in Wahroonga and Pymble?", a: "Absolutely. We regularly service larger Federation and post-war homes across the upper North Shore, including hot water systems, drainage, and bathroom renovations." },
      { q: "Do you offer same-day service on the North Shore?", a: "Yes — in most cases we can reach Chatswood, Lane Cove and the upper North Shore within 30–60 minutes for emergency calls." },
    ],
    metaTitle: "Plumber North Shore Sydney | 24/7",
    metaDescription: "Local plumber across Sydney's North Shore. Chatswood, Lane Cove, Mosman, Wahroonga, Hornsby and more. 24/7, $0 call-out fee. Call (02) 9139 8945.",
    localContent:
      "The North Shore stretches from leafy Wahroonga and Pymble down through Chatswood and Lane Cove. Mr. Clog handles everything from large heritage Federation homes on bushland blocks to modern apartment towers in Chatswood and St Ives. We’re familiar with Ku-ring-gai and Willoughby Council requirements and the unique drainage challenges of properties built on sandstone bushland with steep gradients.",
    commonProblems: [
      { title: "Mature tree roots in long drain runs", body: "The North Shore's tree canopy is its best feature and its most expensive plumbing problem. Established eucalypts, camphor laurels and figs sit close to drainage lines that often run a long way from the house to the street on these big blocks. Roots find the smallest perished joint and work in from there. The long runs also mean a blockage can sit well away from the house, so guessing where to dig gets costly quickly — a camera survey is the cheaper first move." },
      { title: "Steep and sloping blocks", body: "A lot of North Shore homes sit well above or below the street. That affects drainage fall, where stormwater ends up, and whether a lower-level bathroom or granny flat can drain by gravity at all. Homes cut into a slope often rely on a pump system for the lowest fixtures, and when that pump fails the symptoms show up fast. Any renovation below street level is worth checking for fall before the tiling starts." },
      { title: "Older homes with original pipework", body: "Large Federation and mid-century homes across Wahroonga, Gordon and Pymble frequently still run substantial lengths of original pipe. Galvanised steel water lines corrode internally and narrow, which shows up as falling pressure and occasional discoloured water after the house sits unused. Replacement is usually staged rather than done all at once, and knowing which sections matter most is the difference between a sensible budget and a blank cheque." },
      { title: "Tree protection and excavation", body: "Councils across the North Shore protect significant trees, which means digging near one is not always straightforward even on your own land. This is where no-dig repair earns its place: relining a damaged drain through an existing access point avoids the root zone entirely. It is worth raising early, because it can change both the approvals needed and the cost of the job." },
    ],
  },
  {
    slug: "hills-district",
    label: "Hills District",
    headline: "Plumber Hills District Sydney",
    subheadline: "Trusted plumbing across Castle Hill, Kellyville, Baulkham Hills and the Hills.",
    description:
      "Mr. Clog services the entire Hills District — from established suburbs like Baulkham Hills and Castle Hill through to the newer release areas of Norwest, Bella Vista, and Rouse Hill. We're set up for both classic family homes and modern duplexes.",
    suburbs: [
      "Castle Hill", "Kellyville", "Baulkham Hills", "Norwest",
      "Bella Vista", "Rouse Hill", "Glenhaven", "Dural",
      "Cherrybrook", "West Pennant Hills", "Pennant Hills", "Beecroft",
      "Carlingford", "Winston Hills", "Kings Langley", "Stanhope Gardens",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you service new developments in Norwest and Bella Vista?", a: "Yes — we work on both established homes and newly built properties across the Hills, including townhouse and duplex developments." },
      { q: "Can you do hot water replacements in Castle Hill?", a: "Yes — we replace and install all major hot water systems including gas, electric, heat pump, and solar." },
      { q: "Do you handle commercial plumbing in Norwest Business Park?", a: "Yes — we service offices, retail, and light industrial properties across the Norwest precinct." },
    ],
    metaTitle: "Plumber Hills District Sydney | Castle Hill, Kellyville",
    metaDescription: "Local plumber in the Hills District. Castle Hill, Kellyville, Baulkham Hills, Norwest, Bella Vista and more. 24/7, $0 call-out fee. Call (02) 9139 8945.",
    localContent:
      "The Hills District is one of Sydney’s fastest-growing regions, with new home releases in Rouse Hill and Box Hill alongside established Federation and post-war homes in Castle Hill and Baulkham Hills. Mr. Clog regularly services Hills Shire Council and Hornsby Council areas, and we’re familiar with the modern plumbing requirements of new builds as well as the older infrastructure in long-settled streets.",
    commonProblems: [
      { title: "Long service runs on large blocks", body: "Castle Hill, Kellyville and Dural properties often sit a long way back from the street, with correspondingly long sewer and water runs. That means more pipe, more joints, and more distance between the symptom at the fixture and the fault in the ground. It also means a blockage can be many metres from the house, which makes camera locating the sensible first step rather than an optional extra." },
      { title: "Irrigation systems and backflow obligations", body: "Garden irrigation is common across the Hills, and an in-ground system connected to mains water creates exactly the cross-connection that backflow prevention exists to stop. Many owners inherit a device with the property and never learn it needs regular testing. If your property has irrigation, a pool auto-fill or a plumbed rainwater tank, it is worth confirming your obligations with Sydney Water." },
      { title: "Early defects in newer estates", body: "The newer estates around Rouse Hill and Kellyville throw up a consistent set of early faults: waste pipes laid at insufficient fall, shower waterproofing failing at the junction, and fittings never fully tightened at handover. Caught in the first year or two these are minor. Left alone while water tracks into a wall cavity or slab, they stop being minor." },
      { title: "Clay soil moving drainage", body: "Much of the Hills sits on soil that swells when wet and shrinks in dry spells. That seasonal movement is hard on rigid drainage — joints separate, sections sag and hold water, and pipes crack. It is the usual explanation when a drain blocks in the same place year after year with no obvious cause at the fixture." },
    ],
  },
  {
    slug: "south-sydney",
    label: "Inner South",
    headline: "Plumber Inner South Sydney",
    subheadline: "Reliable plumbing across Mascot, Botany, Rosebery, Eastlakes and surrounds.",
    description:
      "Mr. Clog services Sydney's Inner South — the busy Mascot, Botany, and Rosebery corridor along with the residential pockets of Eastlakes, Pagewood, and Daceyville. We work with both home owners and the area's many warehouse and light-industrial businesses.",
    suburbs: [
      "Mascot", "Botany", "Rosebery", "Eastlakes",
      "Pagewood", "Banksmeadow", "Daceyville", "Hillsdale",
      "Matraville", "Eastgardens", "Beaconsfield", "Tempe",
      "Sydenham", "St Peters", "Wolli Creek",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you service businesses near Sydney Airport?", a: "Yes — we service the warehouses, offices, and light-industrial properties across Mascot, Botany, and the airport precinct." },
      { q: "Can you handle blocked stormwater in Mascot and Botany?", a: "Yes — the area’s flat terrain and ageing stormwater pipes mean blockages are common. We have CCTV cameras and high-pressure jetters to clear them fast." },
      { q: "Do you respond after hours in the Inner South?", a: "Yes — 24/7 emergency plumbing across Mascot, Botany, Rosebery and the wider Inner South with $0 call-out." },
    ],
    metaTitle: "Plumber Inner South Sydney | Mascot, Botany",
    metaDescription: "Local plumber in Sydney's Inner South. Mascot, Botany, Rosebery, Eastlakes, Pagewood and more. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "Sydney’s Inner South sits between the CBD and the airport — a working precinct with apartment towers in Wolli Creek and Zetland alongside warehouses and light industrial buildings in Mascot and Botany. Mr. Clog services Bayside Council and City of Sydney properties here, and we’re familiar with the area’s flat terrain, ageing stormwater drainage, and the commercial plumbing demands of the airport-adjacent business parks.",
    commonProblems: [
      { title: "New apartment towers and early defects", body: "Mascot, Zetland and Green Square have added enormous numbers of apartments in a short time, and newer buildings carry a recognisable set of early plumbing faults: waste pipes at marginal fall, waterproofing failing at the shower junction, and fittings never fully tightened at handover. In strata these are worth documenting early, because responsibility and defect periods both have time limits." },
      { title: "Converted warehouses and mixed old-new services", body: "Alexandria and Rosebery are full of industrial buildings converted to homes and offices, where new fixtures have been connected to drainage laid for an entirely different use decades earlier. The common result is recurring slow drainage rather than a clean blockage — the line works, but it was never sized or graded for what it now carries." },
      { title: "Low-lying ground and stormwater", body: "Much of South Sydney sits low and flat near Botany Bay, so stormwater has little fall to work with and drains slowly once a line is partly restricted. Yards that hold water after rain, or basement and ground-floor areas that take water in a downpour, usually point at stormwater capacity rather than a single blockage." },
      { title: "Sandy soils moving into pipework", body: "The sandy ground across the area migrates into cracked stormwater and drainage lines, silting them up progressively. It rarely presents as a sudden blockage — more often as a line that drains a little worse each season until it stops coping with heavy rain." },
    ],
  },
  {
    slug: "western-sydney",
    label: "Western Sydney",
    headline: "Plumber Western Sydney",
    subheadline: "Local plumbing across Blacktown, Penrith, Auburn, Strathfield and surrounds.",
    description:
      "Mr. Clog services the heart of Western Sydney — from the established suburbs around Strathfield and Burwood through to the growth corridors of Blacktown and Penrith. We’re a fully licensed local plumber covering everything from emergency repairs to bathroom renovations.",
    suburbs: [
      "Blacktown", "Penrith", "Auburn", "Strathfield",
      "Burwood", "Homebush", "Lidcombe", "Flemington",
      "Concord", "Concord West", "Toongabbie", "Mount Druitt",
      "Quakers Hill", "Seven Hills", "Kingswood", "St Marys",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you service Blacktown and Mount Druitt for emergencies?", a: "Yes — we have plumbers covering the wider Western Sydney corridor including Blacktown, Mount Druitt, and Penrith with same-day emergency response." },
      { q: "Can you replace hot water systems in Strathfield?", a: "Yes — we install and replace all major brands of gas, electric, and heat pump hot water units across Strathfield, Burwood, and Homebush." },
      { q: "Do you handle commercial work in Auburn and Lidcombe?", a: "Yes — we work on commercial properties, warehouses, and shopfronts across Auburn, Lidcombe, and the wider Inner West-adjacent corridor." },
    ],
    metaTitle: "Plumber Western Sydney | Blacktown, Penrith",
    metaDescription: "Local plumber across Western Sydney. Blacktown, Penrith, Auburn, Strathfield, Burwood and more. 24/7, $0 call-out fee. Call (02) 9139 8945.",
    localContent:
      "Western Sydney covers a huge area with very different plumbing needs. Established suburbs like Strathfield, Burwood, and Concord have older Federation and post-war homes with original cast iron drainage. The Penrith and Blacktown corridor mixes long-settled streets with newer estates. Mr. Clog services Cumberland, Blacktown, Penrith, Strathfield, and Burwood Council areas, and we’re set up for both heritage repairs and modern fit-outs.",
    commonProblems: [
      { title: "Asbestos cement pipework in older homes", body: "Homes built through the middle of last century across Western Sydney often contain asbestos cement pipe, in drainage and sometimes in water supply. It is stable while undisturbed and hazardous when cut or broken. Any work involving it needs correct identification and licensed handling, which is a genuine reason to be wary of a cheap quote on an older property. If your home is from that era, it is worth knowing what is in the ground before work starts." },
      { title: "Hot water systems working harder", body: "Western Sydney runs hotter in summer and colder in winter than the coastal suburbs. Hot water systems here cycle harder across the year than the same unit near the water, which tends to shorten the comfortable working life of an ageing system. If yours is over ten years old and already struggling, planning the replacement beats discovering the problem mid-winter." },
      { title: "Large blocks, long drain runs", body: "Older Western Sydney homes on generous blocks carry long drainage runs with many joints, often in clay pipe. More joints means more entry points for roots and more places for ground movement to pull a line apart. It also means the fault is frequently nowhere near the fixture that is misbehaving." },
      { title: "Pressure variation across the network", body: "Water pressure varies more across Western Sydney than many owners expect, and properties on higher ground can sit noticeably lower than the suburb average. Persistently weak pressure is worth testing properly rather than assuming — it can equally be a partly closed valve, a failing pressure-limiting valve, or a corroded supply line inside the house." },
    ],
  },
  {
    slug: "northern-beaches",
    label: "Northern Beaches",
    headline: "Plumber Northern Beaches Sydney",
    subheadline: "Coastal plumbing across Manly, Dee Why, Mona Vale, Avalon and the beaches.",
    description:
      "From the southern beaches at Manly through to Palm Beach, Mr. Clog services the entire Northern Beaches. We understand the unique challenges of coastal plumbing — salt corrosion, sand-laden runoff, and the distance between the peninsula and the rest of Sydney.",
    suburbs: [
      "Manly", "Dee Why", "Brookvale", "Narrabeen",
      "Collaroy", "Curl Curl", "Freshwater", "Fairlight",
      "Balgowlah", "Seaforth", "Frenchs Forest", "Belrose",
      "Terrey Hills", "Warriewood", "Mona Vale", "Newport",
      "Avalon", "Palm Beach",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you cover the entire Northern Beaches including Palm Beach?", a: "Yes — we service the full peninsula from Manly through to Palm Beach, including Mona Vale, Avalon, and Whale Beach." },
      { q: "Can you handle salt corrosion on coastal properties?", a: "Yes — we’re experienced with the accelerated pipe and fixture corrosion common in beachfront homes from Manly to Avalon." },
      { q: "Do you service strata buildings in Dee Why and Manly?", a: "Yes — we work with apartment owners, residents, and strata managers across the beaches." },
    ],
    metaTitle: "Plumber Northern Beaches Sydney | Manly, Mona Vale",
    metaDescription: "Local plumber across Sydney's Northern Beaches. Manly, Dee Why, Mona Vale, Avalon, Palm Beach and more. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "Sydney’s Northern Beaches stretch nearly 30km from Manly to Palm Beach, separated from the rest of the city by water. Mr. Clog has plumbers based on the peninsula so we don’t leave you waiting. Coastal homes here face salt-air corrosion, sand-clogged drains, and bushfire-overlay restrictions in the upper beaches. We’re familiar with Northern Beaches Council and the unique demands of beachfront, hillside, and bushland properties from Freshwater through to Palm Beach.",
    commonProblems: [
      { title: "Steep blocks and pump systems", body: "From Seaforth up through Avalon, a great many homes sit on slopes where the lowest bathroom or laundry cannot drain to the sewer by gravity. Those properties rely on a pump, and a pump is the component most likely to fail with no warning at all. Gurgling or backing up at the lowest fixture during normal use points at the pump before it points at a blockage." },
      { title: "Salt, sand and coastal wear", body: "Close to the water at Manly, Dee Why and Narrabeen, salt-laden air works on exposed metal continuously while sand finds its way into stormwater lines. Gutters, downpipes and outdoor fittings wear faster than they would a few kilometres inland, and a stormwater line can silt up with sand without any single obvious blockage." },
      { title: "Holiday homes and dry traps", body: "The Northern Beaches has a high share of weekenders and holiday lets, and an unused house develops a very specific problem: the water seal in each drain trap evaporates, letting sewer gas into the house. Owners often return to a smell they assume is a blockage. Running every tap and tipping water into floor wastes solves a surprising share of these calls before a plumber is needed." },
      { title: "Stormwater on sloping sites", body: "Water coming off a steep block arrives fast and concentrated. Where stormwater lines are undersized, blocked or discharging poorly, the result is erosion around footings and water tracking towards the house rather than away from it. It is worth checking before storm season rather than after the first serious downpour." },
    ],
  },
  {
    slug: "sydney-cbd",
    label: "Sydney CBD & City",
    headline: "Plumber Sydney CBD",
    subheadline: "Fast plumbing across the city, Surry Hills, Darlinghurst, Redfern and surrounds.",
    description:
      "Mr. Clog services Sydney CBD and the immediate inner-city. We’re used to high-rise apartments, retail and office plumbing, and the tight access of inner-city streets. 24/7 emergency response across the city core.",
    suburbs: [
      "Sydney CBD", "Surry Hills", "Darlinghurst", "Redfern",
      "Waterloo", "Zetland", "Alexandria", "Erskineville",
      "Chippendale", "Ultimo", "Haymarket", "Woolloomooloo",
      "Potts Point", "Elizabeth Bay", "Kings Cross", "Pyrmont",
      "The Rocks", "Barangaroo",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you service high-rise apartments in the CBD?", a: "Yes — we work with high-rise residents, building managers, and strata across the Sydney CBD and surrounding city precincts." },
      { q: "Can you handle commercial plumbing in city offices?", a: "Yes — we service office buildings, retail tenants, hospitality venues, and shopfronts across the city core." },
      { q: "How fast can you reach the CBD for an emergency?", a: "Usually within 30–60 minutes — we cover the city 24/7 and will give you an accurate ETA when you call." },
    ],
    metaTitle: "Plumber Sydney CBD | 24/7 City Plumber",
    metaDescription: "24/7 plumber for Sydney CBD, Surry Hills, Darlinghurst, Redfern, Pyrmont and the city core. $0 call-out fee. Call (02) 9139 8945.",
    localContent:
      "Sydney CBD plumbing is a different game — high-rise apartment towers, hospitality fit-outs, retail tenancies, and the heritage buildings of The Rocks all sit within a few kilometres. Mr. Clog regularly services strata buildings, office tenancies, and hospitality venues across the City of Sydney. We’re familiar with the access constraints, after-hours work requirements, and trade waste regulations that make CBD plumbing more complex than suburban work.",
    commonProblems: [
      { title: "Commercial kitchens and grease traps", body: "Food businesses in the CBD typically need a grease trap, serviced on a schedule, with records kept. A neglected trap is both a compliance exposure and the most common cause of a kitchen drain backing up mid-service. The cost of scheduled servicing is trivial next to closing a kitchen at dinner time." },
      { title: "High-rise pressure zones and hot water", body: "Tall buildings split the water supply into pressure zones, with valves and often shared hot water plant. When an apartment or tenancy loses pressure or hot water, the fault may be in your space or in building services several floors away. Working out which comes first — it decides who is responsible and who pays." },
      { title: "Backflow prevention on building services", body: "Fire services, cooling systems and commercial equipment create cross-connections that require backflow prevention devices, and testable devices generally need annual testing by an accredited plumber with results submitted to the water authority. In a managed building this is one of the easiest obligations to let slip, because nothing visibly goes wrong when it is overdue." },
      { title: "Access, after-hours work and older buildings", body: "CBD work runs on building access rules, loading dock bookings and after-hours windows, and the older stock carries pipework that has been modified repeatedly over decades. Both realities are worth building into the plan rather than discovering on the day — an isolation that affects other tenancies needs arranging in advance, not at the moment the water goes off." },
    ],
  },
  {
    slug: "ryde-macquarie-park",
    label: "Ryde & Macquarie Park",
    headline: "Plumber Ryde & Macquarie Park",
    subheadline: "Local plumbing across Ryde, Macquarie Park, Eastwood, Epping and surrounds.",
    description:
      "Mr. Clog services the Ryde and Macquarie Park corridor — from established residential streets through to the Macquarie Park business and university precinct. We work with homes, businesses, and strata buildings across the area.",
    suburbs: [
      "Ryde", "West Ryde", "Meadowbank", "Macquarie Park",
      "Ermington", "Putney", "Gladesville", "Hunters Hill",
      "Boronia Park", "Eastwood", "Epping", "North Ryde",
      "Marsfield", "Dundas", "Denistone", "Top Ryde",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you service Macquarie University and the business park?", a: "Yes — we work on commercial properties throughout the Macquarie Park business district and surrounding streets." },
      { q: "Can you handle townhouse complexes in Eastwood and Epping?", a: "Yes — we work with townhouse owners, body corporates, and individual residents across the area." },
      { q: "Do you do hot water replacements in Ryde?", a: "Yes — we replace gas, electric, heat pump, and solar hot water systems across Ryde and the surrounding suburbs." },
    ],
    metaTitle: "Plumber Ryde & Macquarie Park | 24/7",
    metaDescription: "Local plumber across Ryde, Macquarie Park, Eastwood, Epping, Hunters Hill and more. 24/7, $0 call-out fee. Call (02) 9139 8945.",
    localContent:
      "Ryde and Macquarie Park combine established residential suburbs with a major business and university precinct. Mr. Clog services everything from older Federation homes in Hunters Hill and Gladesville through to high-rise apartments along the Macquarie Park corridor and commercial offices in the business park. We’re familiar with City of Ryde and Hunters Hill Council requirements.",
    commonProblems: [
      { title: "Mid-century homes with galvanised supply", body: "A lot of the housing through Ryde, Denistone and Eastwood dates from the 1950s to 70s, and galvanised steel water pipe from that era corrodes internally. The bore narrows over decades, so pressure falls gradually enough that owners stop noticing until a new shower or appliance underperforms. Discoloured water after the house sits unused is the other classic sign." },
      { title: "High-density towers around Macquarie Park", body: "The tower developments bring strata plumbing: shared hot water plant, pressure-limiting valves, and a boundary between your lot and common property that decides responsibility. A lukewarm shower in a unit is a different diagnostic problem from the same complaint in a freestanding house, and it starts with establishing where your lot ends." },
      { title: "Commercial and office fitouts", body: "The business park and university precinct generate a steady stream of tenancy fitouts — new kitchens, amenities and staff facilities added to buildings whose services were sized for something else. The common failure is a new fixture connected to drainage that was never intended to carry it, which shows up as recurring slow drainage rather than an outright blockage." },
      { title: "Trees on established streets", body: "The older residential streets carry mature street trees close to drainage laid in clay. Roots enter at perished joints and the drain then blocks on a predictable cycle. Cutting them back clears it for a season; sealing the joints is what actually stops the cycle." },
    ],
  },
  {
    slug: "canterbury-bankstown",
    label: "Canterbury-Bankstown",
    headline: "Plumber Canterbury-Bankstown",
    subheadline: "Local plumbing across Bankstown, Canterbury, Campsie, Lakemba and surrounds.",
    description:
      "Mr. Clog services the Canterbury-Bankstown LGA — from Canterbury and Campsie through to Bankstown and the southern suburbs. We work with home owners, renters, business owners, and strata across the area.",
    suburbs: [
      "Bankstown", "Canterbury", "Campsie", "Belmore",
      "Lakemba", "Wiley Park", "Punchbowl", "Roselands",
      "Beverly Hills", "Narwee", "Padstow", "Revesby",
      "Panania", "East Hills", "Condell Park", "Greenacre",
      "Bass Hill", "Yagoona",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you service all of Canterbury-Bankstown?", a: "Yes — we cover the full Canterbury-Bankstown LGA including Bankstown, Canterbury, Campsie, Lakemba, Padstow, and Revesby." },
      { q: "Can you handle commercial plumbing in Bankstown?", a: "Yes — we service shopfronts, offices, and warehouses across Bankstown CBD and the surrounding industrial areas." },
      { q: "Do you offer same-day service in Lakemba and Punchbowl?", a: "Yes — in most cases we can be there within 30–60 minutes during business hours, and we're available 24/7 for emergencies." },
    ],
    metaTitle: "Plumber Canterbury-Bankstown | 24/7",
    metaDescription: "Local plumber across Canterbury-Bankstown. Bankstown, Canterbury, Campsie, Lakemba, Padstow, Revesby and more. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "Canterbury-Bankstown is one of Sydney’s largest LGAs by population, mixing established post-war housing with newer townhouse and apartment developments. Mr. Clog services the entire area from the Canterbury end through to Padstow and East Hills. We’re familiar with the area’s ageing terracotta drainage, the demands of multi-tenant townhouse complexes, and the commercial plumbing needs of the busy Bankstown and Campsie shopping strips.",
    commonProblems: [
      { title: "Granny flats and secondary dwellings", body: "Secondary dwellings are common across Canterbury-Bankstown, and the plumbing is where corners most often get cut. A granny flat needs its drainage properly connected and the work done by a licensed plumber — not tied into a convenient nearby line. Badly connected secondary dwellings cause recurring blockages and become a problem at sale time, when the paperwork gets examined." },
      { title: "Older clay sewer lines", body: "Much of the area's post-war housing drains through clay pipe laid in short sections. Every joint is a potential entry point for roots and a place for ground movement to pull the line apart. Where a house blocks repeatedly in the same spot, the pipe itself is usually the cause rather than what is being flushed." },
      { title: "Heavy fixture use in multi-generational homes", body: "Plenty of homes here run more people through the same bathrooms and laundry than the plumbing was designed for. That accelerates everything — more hair and soap through the same waste, more demand on the hot water system, more cycles on tap washers. Systems that would last a decade in a two-person household need looking at sooner." },
      { title: "Low-lying land near the river", body: "Parts of the area sit low relative to the Georges and Cooks River systems, and in heavy rain stormwater capacity becomes the limiting factor. Yards that pond, water tracking back towards the house, or a stormwater line that cannot clear as fast as the roof fills it are all worth resolving before storm season rather than during it." },
    ],
  },
  {
    slug: "lower-north-shore",
    label: "Lower North Shore",
    headline: "Plumber Lower North Shore",
    subheadline: "Plumbing across Kirribilli, North Sydney, Crows Nest, Cammeray and surrounds.",
    description:
      "Mr. Clog services the Lower North Shore — from Kirribilli and Milsons Point at the harbour through North Sydney, Crows Nest, and the inner-northern suburbs. We work with high-rise residents, heritage homes, and businesses across the area.",
    suburbs: [
      "Kirribilli", "McMahons Point", "Lavender Bay", "Blues Point",
      "Milsons Point", "North Sydney", "Cammeray", "Naremburn",
      "Waverton", "Wollstonecraft", "Crows Nest", "St Leonards",
      "Northbridge", "Greenwich",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you service high-rise apartments in North Sydney?", a: "Yes — we work with strata, building managers, and individual unit owners across the North Sydney CBD high-rise market." },
      { q: "Can you handle heritage homes in Kirribilli and Cammeray?", a: "Yes — we have experience with the Federation and Edwardian homes common across the Lower North Shore, including original drainage and gas fittings." },
      { q: "How quickly can you reach the Lower North Shore?", a: "Usually within 30–45 minutes — we have plumbers covering the area daily." },
    ],
    metaTitle: "Plumber Lower North Shore | Kirribilli, North Sydney",
    metaDescription: "Plumber for the Lower North Shore. Kirribilli, North Sydney, Crows Nest, Cammeray, Waverton and more. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "The Lower North Shore packs a lot into a small area: high-rise commercial and residential towers in North Sydney, harbour-front heritage homes in Kirribilli and Lavender Bay, and dense apartment-and-terrace neighbourhoods in Crows Nest, Cammeray, and Naremburn. Mr. Clog handles the full mix — strata maintenance, heritage repairs, and commercial fit-outs — with North Sydney and Lane Cove Council requirements front of mind.",
    commonProblems: [
      { title: "Inter-war apartment blocks and shared risers", body: "Mosman, Neutral Bay and Cremorne are full of 1920s and 30s walk-up blocks, and many still run original cast iron or galvanised risers shared between units. A leak inside a riser affects several apartments at once and sits in common property, not your lot. Establishing that boundary early matters — it decides whether you are arranging the repair or the owners corporation is." },
      { title: "Harbourside blocks below street level", body: "Plenty of homes here sit well below the road, with the bathroom or laundry lower than the sewer connection. Those properties depend on a pump-out system, and pumps are the part of a plumbing system most likely to fail without warning. If your lowest fixtures back up during heavy use, the pump is the first thing to check, not the drain." },
      { title: "Heritage constraints on visible work", body: "Much of the Lower North Shore sits in conservation areas where external pipework, flashings and gutter profiles are not a free choice. Replacing a rusted gutter on a heritage-listed home can mean matching a profile rather than fitting the nearest stock item. Worth knowing before a quote, because it changes both material cost and lead time." },
      { title: "Narrow streets and access", body: "Steep, narrow streets with limited parking make machinery access genuinely difficult around the harbour foreshore. For a drain repair that would normally mean an excavator, the practical options here are often relining or a hand-dug repair. Both are worth pricing before committing, since access can cost more than the plumbing." },
    ],
  },
  {
    slug: "sutherland-shire",
    label: "Sutherland Shire",
    headline: "Plumber Sutherland Shire",
    subheadline: "Local plumbing across Cronulla, Miranda, Sutherland, Caringbah and the Shire.",
    description:
      "Mr. Clog services the entire Sutherland Shire — from Cronulla’s beachfront homes through Miranda, Sutherland, and Caringbah to the bushland suburbs of Engadine and Heathcote. We’re a fully licensed local plumber covering everything from emergency leaks to bathroom renovations.",
    suburbs: [
      "Cronulla", "Miranda", "Sutherland", "Caringbah",
      "Engadine", "Menai", "Bangor", "Gymea",
      "Sylvania", "Sylvania Waters", "Kirrawee", "Loftus",
      "Heathcote", "Como", "Oyster Bay", "Jannali",
      "Yowie Bay", "Burraneer", "Woolooware", "Kurnell",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you cover the entire Sutherland Shire?", a: "Yes — we service the full Shire from Cronulla and Bundeena across to Engadine, Heathcote, Menai, and Bangor. We’re available 24/7 with $0 call-out fee." },
      { q: "Can you handle saltwater corrosion in Cronulla and Burraneer?", a: "Yes — properties near the coast and the Georges River often have accelerated pipe and fitting corrosion. We replace corroded sections with marine-grade or copper alternatives." },
      { q: "Do you service the bushland suburbs like Engadine and Heathcote?", a: "Yes — we work across the Shire including the bushland fringe suburbs. We understand the bushfire-overlay requirements and the steep, rocky blocks common in those areas." },
    ],
    metaTitle: "Plumber Sutherland Shire | Cronulla, Miranda | 24/7",
    metaDescription: "Local plumber for the Sutherland Shire. Cronulla, Miranda, Sutherland, Caringbah, Engadine, Menai and more. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "The Sutherland Shire stretches from Cronulla’s beaches across to the bushland suburbs of Heathcote and Engadine, with the busy commercial centres of Miranda, Sutherland, and Caringbah in between. Mr. Clog services the full Shire under the Sutherland Shire Council area. Coastal properties in Cronulla, Burraneer, and Woolooware face salt corrosion and storm-water blockages from sand and seaweed; bushland suburbs like Engadine and Heathcote sit on rocky, steep blocks where pipe alignment and root intrusion are common issues.",
    commonProblems: [
      { title: "Salt and sand near the coast", body: "Around Cronulla and the beachside suburbs, salt-laden air works continuously on exposed metal while sand finds its way into stormwater lines. Gutters, downpipes, flashings and outdoor fittings wear faster than they do inland, and a stormwater line can silt with sand rather than blocking on debris." },
      { title: "Pools, outdoor showers and backflow", body: "Pools are common across the Shire, and a pool with an automatic mains top-up creates the exact cross-connection backflow prevention exists to stop. The same applies to irrigation and to rainwater tanks plumbed into the house supply. Many owners inherit a device with the property and never learn it requires regular testing — worth confirming with Sydney Water if any of those apply." },
      { title: "Rainwater tanks plumbed into the house", body: "Tank water feeding toilets, laundry or garden taps is widespread here. Where a tank is connected to the household supply it needs proper separation from mains water, and the switching arrangement is a common point of failure. Symptoms are usually intermittent rather than dramatic: pressure that changes for no clear reason, or a toilet that fills inconsistently." },
      { title: "Established trees on older streets", body: "The Shire's older residential streets carry mature trees alongside clay drainage. Roots enter at perished joints and the line then blocks on a cycle of months rather than years. Cutting them back buys a season; sealing the joints is the repair that ends it." },
    ],
  },
  {
    slug: "st-george",
    label: "St George",
    headline: "Plumber St George Sydney",
    subheadline: "Local plumbing across Hurstville, Kogarah, Rockdale, Bexley and the St George area.",
    description:
      "Mr. Clog services the St George area — the southern Sydney corridor running from Hurstville and Kogarah through Rockdale, Bexley, and Brighton-Le-Sands. We work on family homes, apartment buildings, and the area’s busy retail strips.",
    suburbs: [
      "Hurstville", "Kogarah", "Rockdale", "Bexley",
      "Carlton", "Allawah", "Brighton-Le-Sands", "Sans Souci",
      "Ramsgate", "Mortdale", "Penshurst", "Oatley",
      "Hurstville Grove", "Beverley Park", "Kogarah Bay", "Monterey",
      "Dolls Point", "Kyle Bay",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you service the entire St George area?", a: "Yes — from Hurstville and Kogarah through Rockdale, Bexley, and Brighton-Le-Sands down to Sans Souci and Ramsgate." },
      { q: "Can you handle high-rise apartments in Hurstville and Rockdale?", a: "Yes — we work with strata, building managers, and individual unit owners across the high-rise developments along the Princes Highway corridor." },
      { q: "Do you do emergency plumbing in the St George area?", a: "Yes — 24/7 emergency plumbing across St George with $0 call-out fee. We’re usually onsite within 30–60 minutes." },
    ],
    metaTitle: "Plumber St George Sydney | Hurstville, Kogarah",
    metaDescription: "Local plumber for the St George area. Hurstville, Kogarah, Rockdale, Bexley, Brighton-Le-Sands and more. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "The St George area sits between the Inner South and the Sutherland Shire, covering Georges River and Bayside Council territory. Mr. Clog regularly works on the area’s mix of post-war family homes, the high-rise apartment corridor along the Princes Highway in Hurstville and Rockdale, and the beachfront properties in Brighton-Le-Sands and Sans Souci. The proximity to Botany Bay means salt-driven corrosion is a recurring issue, and the older terracotta drainage in suburbs like Bexley and Penshurst is prone to root intrusion.",
    commonProblems: [
      { title: "Apartment growth over older infrastructure", body: "Hurstville, Kogarah and Rockdale have added dense apartment development above suburbs whose underlying drainage is considerably older. That mix produces two very different jobs: strata plumbing in new towers, and ageing clay and galvanised pipe in the houses around them. Which one you are dealing with changes the first question entirely." },
      { title: "Low-lying land near the river and bay", body: "Parts of St George sit low relative to the Cooks River and Botany Bay, and heavy rain finds the limits of stormwater quickly. Ponding yards, water moving towards footings, or a stormwater line that cannot keep up with the roof are worth addressing before storm season, not after." },
      { title: "Post-war homes with original pipework", body: "The area's brick homes from the 1950s and 60s often still run galvanised water pipe and clay drainage. Galvanised corrodes inward and quietly strangles pressure; clay drainage gives roots an entry at every joint. Both are manageable when planned and expensive when they fail unexpectedly." },
      { title: "Parking and site access", body: "Dense streets with limited parking make machinery access genuinely awkward in parts of St George. For drain repairs that would ordinarily call for excavation, relining through an existing access point is often the practical option — worth pricing early, because access constraints can drive the cost more than the repair itself." },
    ],
  },
  {
    slug: "parramatta",
    label: "Parramatta",
    headline: "Plumber Parramatta Sydney",
    subheadline: "Local plumbing across Parramatta, Westmead, Harris Park and the Parramatta CBD.",
    description:
      "Mr. Clog services Parramatta — Sydney’s second CBD — along with the surrounding suburbs. We work with apartment towers, family homes, hospital and university precincts, and the area’s many small businesses.",
    suburbs: [
      "Parramatta", "Harris Park", "Westmead", "North Parramatta",
      "Rosehill", "Granville", "Merrylands", "Wentworthville",
      "Northmead", "Old Toongabbie", "Pendle Hill", "Constitution Hill",
      "South Wentworthville", "Mays Hill", "Rydalmere", "Camellia",
      "Telopea", "Dundas Valley",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you service Parramatta CBD high-rise apartments?", a: "Yes — we work with strata, building managers, and unit owners across the Parramatta CBD high-rise market. We’re used to access procedures for tower buildings." },
      { q: "Can you handle commercial plumbing in Westmead?", a: "Yes — we service medical and commercial properties in the Westmead health and education precinct." },
      { q: "Are you available 24/7 in Parramatta?", a: "Yes — 24/7 emergency plumbing across Parramatta and the wider area with $0 call-out fee." },
    ],
    metaTitle: "Plumber Parramatta | Westmead, Harris Park | 24/7",
    metaDescription: "Local plumber for Parramatta and surrounds. Parramatta CBD, Westmead, Harris Park, Granville, Merrylands and more. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "Parramatta is Sydney’s second CBD with one of the densest mixes of property types anywhere in the city: high-rise residential and commercial towers in the CBD, the Westmead health and education precinct, post-war family homes in Harris Park and Granville, and the older Federation properties in North Parramatta and Northmead. Mr. Clog services City of Parramatta and Cumberland Council areas, and we’re set up for both the access requirements of high-rise plumbing and the heritage drainage of older streets.",
    commonProblems: [
      { title: "Reactive clay soil moving drains out of line", body: "Much of the Parramatta area sits on reactive clay that swells when wet and shrinks back in dry spells. That seasonal movement is hard on rigid drainage: joints pull apart, sections sag, and pipes crack. It explains a pattern we see constantly here — a drain that blocks reliably every year or two, in the same spot, with no obvious cause at the fixture." },
      { title: "Two very different housing stocks, two different problems", body: "Parramatta spans post-war brick and fibro homes with ageing clay drainage, and a dense band of newer apartment towers. The older homes bring root intrusion and perished joints. The newer buildings bring pressure-limiting valves, shared hot water plant, and strata boundaries that decide who is responsible. Knowing which you are in changes the first question worth asking." },
      { title: "Hot water systems working harder", body: "Western Sydney summers run hotter than the coast, and winters get colder. Heat pump and electric systems here cycle harder across the year than the same unit in a coastal suburb, which tends to shorten the comfortable working life of a tired system. If yours is over ten years old and struggling, it is worth planning the replacement rather than waiting for a cold shower." },
      { title: "Defects in newer builds", body: "Newer estates and apartments around Parramatta throw up a recognisable set of early faults: waste pipes laid at insufficient fall, shower waterproofing that fails at the junction, and fittings that were never fully tightened at handover. These are cheap to fix early and expensive once water has been tracking into a wall or slab for a year." },
    ],
  },
  {
    slug: "liverpool-fairfield",
    label: "Liverpool & Fairfield",
    headline: "Plumber Liverpool & Fairfield",
    subheadline: "Local plumbing across Liverpool, Fairfield, Cabramatta and the south-west.",
    description:
      "Mr. Clog services the Liverpool and Fairfield corridor in Sydney’s south-west. We work with home owners, businesses, and the multicultural retail strips that define the area, with full coverage from Liverpool CBD through to Fairfield, Cabramatta, and surrounds.",
    suburbs: [
      "Liverpool", "Fairfield", "Cabramatta", "Canley Vale",
      "Canley Heights", "Smithfield", "Wetherill Park", "Bonnyrigg",
      "Edensor Park", "Prairiewood", "Carramar", "Lansvale",
      "Warwick Farm", "Chipping Norton", "Casula", "Moorebank",
      "Hinchinbrook", "Green Valley", "Mount Pritchard",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you service the entire Liverpool and Fairfield area?", a: "Yes — from Liverpool CBD through Fairfield, Cabramatta, Wetherill Park, and the surrounding suburbs." },
      { q: "Can you handle commercial plumbing in Cabramatta and Wetherill Park?", a: "Yes — we service shopfronts, restaurants, and warehouses across the south-west’s busy commercial precincts." },
      { q: "How quickly can you reach Liverpool for an emergency?", a: "Usually within 45–60 minutes — we have plumbers covering the south-west corridor with 24/7 emergency response." },
    ],
    metaTitle: "Plumber Liverpool & Fairfield | Cabramatta | 24/7",
    metaDescription: "Local plumber for Liverpool, Fairfield, Cabramatta, Wetherill Park and Sydney's south-west. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "Liverpool and Fairfield form a major south-western Sydney service area with a mix of post-war housing, busy multicultural retail strips, and large light-industrial precincts in Wetherill Park, Smithfield, and Prestons. Mr. Clog services Liverpool and Fairfield Council areas. The flat terrain and ageing terracotta drainage common across these suburbs make blocked drains a frequent issue; we use CCTV inspection and high-pressure jetting to clear and diagnose without unnecessary digging.",
    commonProblems: [
      { title: "Trade waste from commercial premises", body: "The area carries a large number of food businesses, workshops and light industrial premises, and anything discharging more than ordinary household waste generally needs a trade waste arrangement and the right pre-treatment — a grease trap for a kitchen, an interceptor for a workshop. Neglected equipment is both a compliance exposure and the usual cause of a drain backing up at the worst moment." },
      { title: "Flood-prone land near the Georges River", body: "Parts of Liverpool and Fairfield sit low relative to the Georges River system, where heavy rain tests stormwater capacity quickly. Ponding, water tracking towards the house, or a stormwater line that cannot clear as fast as the roof fills it are worth resolving before the season rather than during it." },
      { title: "Older housing with asbestos cement pipe", body: "Homes from the middle of last century across the area often contain asbestos cement pipe in drainage and sometimes in supply. It is stable undisturbed and hazardous when cut or broken, so any work involving it requires correct identification and licensed handling. On an older property it is worth establishing what is in the ground before work starts." },
      { title: "Secondary dwellings and added bathrooms", body: "Granny flats and added bathrooms are common here, and they are where shortcuts show up. New fixtures connected to drainage never intended to carry them produce recurring slow drainage rather than a clean blockage, and unlicensed work becomes a problem at sale time when the paperwork is examined." },
    ],
  },
  {
    slug: "macarthur",
    label: "Macarthur",
    headline: "Plumber Macarthur",
    subheadline: "Local plumbing across Campbelltown, Camden, Narellan and Sydney’s south-west growth corridor.",
    description:
      "Mr. Clog services the Macarthur region in Sydney’s south-west — from established Campbelltown and Ingleburn through to the rapidly growing release areas of Oran Park, Gregory Hills, and Mount Annan. We’re set up for both heritage repairs and modern new-build plumbing.",
    suburbs: [
      "Campbelltown", "Camden", "Narellan", "Ingleburn",
      "Minto", "Glenfield", "Leumeah", "Mount Annan",
      "Currans Hill", "Oran Park", "Gregory Hills", "Harrington Park",
      "Spring Farm", "Cobbitty", "Macquarie Fields", "Bradbury",
      "Ambarvale", "Rosemeadow", "Eagle Vale", "Eschol Park",
      "Raby",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you service the new release areas in Oran Park and Gregory Hills?", a: "Yes — we work on new builds across the Macarthur growth corridor including Oran Park, Gregory Hills, Mount Annan, and Spring Farm." },
      { q: "Can you handle blocked drains in older Campbelltown homes?", a: "Yes — we use CCTV cameras and high-pressure jetters to clear blockages in the older terracotta drainage common in established Campbelltown and Ingleburn streets." },
      { q: "Are you available for emergency plumbing in Camden?", a: "Yes — 24/7 emergency plumbing across the Macarthur region with $0 call-out. We have plumbers covering the south-west growth corridor." },
    ],
    metaTitle: "Plumber Macarthur | Campbelltown, Camden | 24/7",
    metaDescription: "Local plumber for the Macarthur region. Campbelltown, Camden, Narellan, Ingleburn, Mount Annan, Oran Park and more. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "The Macarthur region is one of Sydney’s biggest growth corridors. Established suburbs like Campbelltown, Ingleburn, and Camden sit alongside the rapidly developing release areas of Oran Park, Gregory Hills, and Spring Farm. Mr. Clog services Campbelltown and Camden Council areas — we work on the older Federation and post-war housing common in established streets, and we’re set up for the modern materials and connection requirements of new-estate plumbing.",
    commonProblems: [
      { title: "Brand-new estates and handover defects", body: "Camden, Narellan and the Campbelltown growth areas are dominated by recent construction, and new builds carry a consistent set of early plumbing faults: waste pipes laid at marginal fall, shower waterproofing failing at the junction, and fittings never properly tightened. These are cheap to fix inside the defect period and expensive once water has been tracking into a slab or wall cavity." },
      { title: "Expansive clay soils", body: "Much of the Macarthur region sits on soil that swells and shrinks substantially with the seasons. That movement is hard on rigid drainage — joints pull apart, lines sag and hold water, pipes crack. It is the usual explanation for a drain that blocks in the same place every year or two with nothing obviously wrong at the fixture." },
      { title: "Acreage properties and long service runs", body: "Rural-fringe properties around Camden and Razorback carry very long runs between the house, the tank, the shed and the street. More distance means more joints, more ground movement, and a fault that can sit a hundred metres from the symptom. Locating before digging is not optional on a property like that; it is the only affordable way to work." },
      { title: "Rainwater tanks and pump systems", body: "Tank water is part of everyday supply on many properties here, and the pump is the component most likely to fail without warning. Pressure that drops off under demand, a pump that cycles constantly, or a system that loses prime are the common presentations — and each points somewhere different, so testing beats replacing on a guess." },
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
