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
    metaTitle: "Plumber Inner West Sydney | 24/7 | Mr. Clog",
    metaDescription: "Local plumber in Sydney's Inner West. Newtown, Balmain, Leichhardt, Marrickville and more. Available 24/7, $0 call-out fee. Call (02) 9139 8945.",
    localContent:
      "Mr. Clog regularly works on the Inner West's distinctive housing stock — Victorian and Federation-era terraces with original cast iron waste pipes, sandstone foundations, and narrow side easements that demand specialist knowledge. We’re familiar with Inner West Council’s requirements and the ageing water infrastructure common in suburbs like Balmain, Glebe, and Newtown. From CCTV drain surveys under heritage sandstone to emergency repairs in tight Marrickville terrace alleyways, our team has seen it all.",
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
    metaTitle: "Plumber Eastern Suburbs Sydney | Mr. Clog | 24/7",
    metaDescription: "Trusted plumber in Sydney's Eastern Suburbs. Bondi, Randwick, Coogee, Paddington and more. Available 24/7, $0 call-out fee. Call (02) 9139 8945.",
    localContent:
      "Properties in Sydney’s Eastern Suburbs face unique plumbing challenges: salt-laden sea air accelerates pipe corrosion in Bondi and Coogee, older infrastructure in Paddington and Woollahra requires heritage-sensitive repairs, and high-density apartment towers in Randwick and Bondi Junction demand plumbers experienced with strata. Mr. Clog works closely with Randwick City Council and Woollahra Council inspectors and understands the building codes for this area inside out.",
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
    metaTitle: "Plumber North Shore Sydney | Mr. Clog | 24/7",
    metaDescription: "Local plumber across Sydney's North Shore. Chatswood, Lane Cove, Mosman, Wahroonga, Hornsby and more. 24/7, $0 call-out fee. Call (02) 9139 8945.",
    localContent:
      "The North Shore stretches from leafy Wahroonga and Pymble down through Chatswood and Lane Cove. Mr. Clog handles everything from large heritage Federation homes on bushland blocks to modern apartment towers in Chatswood and St Ives. We’re familiar with Ku-ring-gai and Willoughby Council requirements and the unique drainage challenges of properties built on sandstone bushland with steep gradients.",
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
    metaTitle: "Plumber Hills District Sydney | Castle Hill, Kellyville | Mr. Clog",
    metaDescription: "Local plumber in the Hills District. Castle Hill, Kellyville, Baulkham Hills, Norwest, Bella Vista and more. 24/7, $0 call-out fee. Call (02) 9139 8945.",
    localContent:
      "The Hills District is one of Sydney’s fastest-growing regions, with new home releases in Rouse Hill and Box Hill alongside established Federation and post-war homes in Castle Hill and Baulkham Hills. Mr. Clog regularly services Hills Shire Council and Hornsby Council areas, and we’re familiar with the modern plumbing requirements of new builds as well as the older infrastructure in long-settled streets.",
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
    metaTitle: "Plumber Inner South Sydney | Mascot, Botany | Mr. Clog",
    metaDescription: "Local plumber in Sydney's Inner South. Mascot, Botany, Rosebery, Eastlakes, Pagewood and more. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "Sydney’s Inner South sits between the CBD and the airport — a working precinct with apartment towers in Wolli Creek and Zetland alongside warehouses and light industrial buildings in Mascot and Botany. Mr. Clog services Bayside Council and City of Sydney properties here, and we’re familiar with the area’s flat terrain, ageing stormwater drainage, and the commercial plumbing demands of the airport-adjacent business parks.",
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
    metaTitle: "Plumber Western Sydney | Blacktown, Penrith | Mr. Clog",
    metaDescription: "Local plumber across Western Sydney. Blacktown, Penrith, Auburn, Strathfield, Burwood and more. 24/7, $0 call-out fee. Call (02) 9139 8945.",
    localContent:
      "Western Sydney covers a huge area with very different plumbing needs. Established suburbs like Strathfield, Burwood, and Concord have older Federation and post-war homes with original cast iron drainage. The Penrith and Blacktown corridor mixes long-settled streets with newer estates. Mr. Clog services Cumberland, Blacktown, Penrith, Strathfield, and Burwood Council areas, and we’re set up for both heritage repairs and modern fit-outs.",
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
    metaTitle: "Plumber Northern Beaches Sydney | Manly, Mona Vale | Mr. Clog",
    metaDescription: "Local plumber across Sydney's Northern Beaches. Manly, Dee Why, Mona Vale, Avalon, Palm Beach and more. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "Sydney’s Northern Beaches stretch nearly 30km from Manly to Palm Beach, separated from the rest of the city by water. Mr. Clog has plumbers based on the peninsula so we don’t leave you waiting. Coastal homes here face salt-air corrosion, sand-clogged drains, and bushfire-overlay restrictions in the upper beaches. We’re familiar with Northern Beaches Council and the unique demands of beachfront, hillside, and bushland properties from Freshwater through to Palm Beach.",
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
      { q: "How fast can you reach the CBD for an emergency?", a: "Usually within 30 minutes — we have plumbers covering the city 24/7." },
    ],
    metaTitle: "Plumber Sydney CBD | 24/7 City Plumber | Mr. Clog",
    metaDescription: "24/7 plumber for Sydney CBD, Surry Hills, Darlinghurst, Redfern, Pyrmont and the city core. $0 call-out fee. Call (02) 9139 8945.",
    localContent:
      "Sydney CBD plumbing is a different game — high-rise apartment towers, hospitality fit-outs, retail tenancies, and the heritage buildings of The Rocks all sit within a few kilometres. Mr. Clog regularly services strata buildings, office tenancies, and hospitality venues across the City of Sydney. We’re familiar with the access constraints, after-hours work requirements, and trade waste regulations that make CBD plumbing more complex than suburban work.",
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
    metaTitle: "Plumber Ryde & Macquarie Park | Mr. Clog | 24/7",
    metaDescription: "Local plumber across Ryde, Macquarie Park, Eastwood, Epping, Hunters Hill and more. 24/7, $0 call-out fee. Call (02) 9139 8945.",
    localContent:
      "Ryde and Macquarie Park combine established residential suburbs with a major business and university precinct. Mr. Clog services everything from older Federation homes in Hunters Hill and Gladesville through to high-rise apartments along the Macquarie Park corridor and commercial offices in the business park. We’re familiar with City of Ryde and Hunters Hill Council requirements.",
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
    metaTitle: "Plumber Canterbury-Bankstown | Mr. Clog | 24/7",
    metaDescription: "Local plumber across Canterbury-Bankstown. Bankstown, Canterbury, Campsie, Lakemba, Padstow, Revesby and more. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "Canterbury-Bankstown is one of Sydney’s largest LGAs by population, mixing established post-war housing with newer townhouse and apartment developments. Mr. Clog services the entire area from the Canterbury end through to Padstow and East Hills. We’re familiar with the area’s ageing terracotta drainage, the demands of multi-tenant townhouse complexes, and the commercial plumbing needs of the busy Bankstown and Campsie shopping strips.",
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
    metaTitle: "Plumber Lower North Shore | Kirribilli, North Sydney | Mr. Clog",
    metaDescription: "Plumber for the Lower North Shore. Kirribilli, North Sydney, Crows Nest, Cammeray, Waverton and more. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "The Lower North Shore packs a lot into a small area: high-rise commercial and residential towers in North Sydney, harbour-front heritage homes in Kirribilli and Lavender Bay, and dense apartment-and-terrace neighbourhoods in Crows Nest, Cammeray, and Naremburn. Mr. Clog handles the full mix — strata maintenance, heritage repairs, and commercial fit-outs — with North Sydney and Lane Cove Council requirements front of mind.",
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
    metaTitle: "Plumber Sutherland Shire | Cronulla, Miranda | Mr. Clog 24/7",
    metaDescription: "Local plumber for the Sutherland Shire. Cronulla, Miranda, Sutherland, Caringbah, Engadine, Menai and more. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "The Sutherland Shire stretches from Cronulla’s beaches across to the bushland suburbs of Heathcote and Engadine, with the busy commercial centres of Miranda, Sutherland, and Caringbah in between. Mr. Clog services the full Shire under the Sutherland Shire Council area. Coastal properties in Cronulla, Burraneer, and Woolooware face salt corrosion and storm-water blockages from sand and seaweed; bushland suburbs like Engadine and Heathcote sit on rocky, steep blocks where pipe alignment and root intrusion are common issues.",
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
    metaTitle: "Plumber St George Sydney | Hurstville, Kogarah | Mr. Clog",
    metaDescription: "Local plumber for the St George area. Hurstville, Kogarah, Rockdale, Bexley, Brighton-Le-Sands and more. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "The St George area sits between the Inner South and the Sutherland Shire, covering Georges River and Bayside Council territory. Mr. Clog regularly works on the area’s mix of post-war family homes, the high-rise apartment corridor along the Princes Highway in Hurstville and Rockdale, and the beachfront properties in Brighton-Le-Sands and Sans Souci. The proximity to Botany Bay means salt-driven corrosion is a recurring issue, and the older terracotta drainage in suburbs like Bexley and Penshurst is prone to root intrusion.",
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
    metaTitle: "Plumber Parramatta | Westmead, Harris Park | Mr. Clog 24/7",
    metaDescription: "Local plumber for Parramatta and surrounds. Parramatta CBD, Westmead, Harris Park, Granville, Merrylands and more. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "Parramatta is Sydney’s second CBD with one of the densest mixes of property types anywhere in the city: high-rise residential and commercial towers in the CBD, the Westmead health and education precinct, post-war family homes in Harris Park and Granville, and the older Federation properties in North Parramatta and Northmead. Mr. Clog services City of Parramatta and Cumberland Council areas, and we’re set up for both the access requirements of high-rise plumbing and the heritage drainage of older streets.",
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
    metaTitle: "Plumber Liverpool & Fairfield | Cabramatta | Mr. Clog 24/7",
    metaDescription: "Local plumber for Liverpool, Fairfield, Cabramatta, Wetherill Park and Sydney's south-west. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "Liverpool and Fairfield form a major south-western Sydney service area with a mix of post-war housing, busy multicultural retail strips, and large light-industrial precincts in Wetherill Park, Smithfield, and Prestons. Mr. Clog services Liverpool and Fairfield Council areas. The flat terrain and ageing terracotta drainage common across these suburbs make blocked drains a frequent issue; we use CCTV inspection and high-pressure jetting to clear and diagnose without unnecessary digging.",
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
    metaTitle: "Plumber Macarthur | Campbelltown, Camden | Mr. Clog 24/7",
    metaDescription: "Local plumber for the Macarthur region. Campbelltown, Camden, Narellan, Ingleburn, Mount Annan, Oran Park and more. 24/7, $0 call-out. Call (02) 9139 8945.",
    localContent:
      "The Macarthur region is one of Sydney’s biggest growth corridors. Established suburbs like Campbelltown, Ingleburn, and Camden sit alongside the rapidly developing release areas of Oran Park, Gregory Hills, and Spring Farm. Mr. Clog services Campbelltown and Camden Council areas — we work on the older Federation and post-war housing common in established streets, and we’re set up for the modern materials and connection requirements of new-estate plumbing.",
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
