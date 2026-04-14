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
      "Newtown", "Balmain", "Leichhardt", "Annandale", "Glebe", "Rozelle",
      "Drummoyne", "Marrickville", "Petersham", "Stanmore", "Enmore", "Dulwich Hill",
      "Summer Hill", "Haberfield", "Lilyfield", "Pyrmont",
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
  },
  {
    slug: "eastern-suburbs",
    label: "Eastern Suburbs",
    headline: "Plumber Eastern Suburbs Sydney",
    subheadline: "Premium plumbing service across Bondi, Randwick, Coogee, and surrounds.",
    description:
      "From Bondi Beach apartments to Randwick family homes, Mr. Clog delivers prompt, professional plumbing across Sydney's Eastern Suburbs. We understand the coastal environment and the challenges it creates for plumbing — from corrosion to ageing infrastructure.",
    suburbs: [
      "Bondi", "Bondi Beach", "Bondi Junction", "Double Bay", "Rose Bay",
      "Vaucluse", "Edgecliff", "Woollahra", "Paddington", "Randwick",
      "Coogee", "Maroubra", "Kingsford", "Kensington", "Bronte", "Clovelly",
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
  },
  {
    slug: "north-shore",
    label: "North Shore",
    headline: "Plumber North Shore Sydney",
    subheadline: "Reliable plumbing across Chatswood, Lane Cove, Mosman, and the North Shore.",
    description:
      "Mr. Clog services the entire North Shore — from the lower north shore suburbs of Mosman and Neutral Bay through to Chatswood, Lane Cove, and beyond. We're familiar with the area's mix of older homes, new developments, and everything in between.",
    suburbs: [
      "Chatswood", "Lane Cove", "Mosman", "Neutral Bay", "Cremorne",
      "Crows Nest", "St Leonards", "Artarmon", "Willoughby", "Lindfield",
      "Killara", "Gordon", "Turramurra", "Pymble", "Wahroonga", "Hornsby",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Can you work around the Harbour Bridge commute times?", a: "Absolutely — our North Shore-based plumbers don't need to cross the bridge, so traffic doesn't affect your response time." },
      { q: "Do you service bushland properties?", a: "Yes — we're experienced with properties near bushland reserves, including tree root intrusion into drains and stormwater systems." },
      { q: "Do you handle body corporate and strata work?", a: "Yes — we work with strata managers and body corporates across all North Shore suburbs." },
    ],
    metaTitle: "Plumber North Shore Sydney | Mr. Clog | 24/7 Available",
    metaDescription: "Local plumber on Sydney's North Shore. Chatswood, Lane Cove, Mosman, Neutral Bay and more. 24/7, $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "hills-district",
    label: "Hills District",
    headline: "Plumber Hills District Sydney",
    subheadline: "Trusted plumbing across Castle Hill, Kellyville, Baulkham Hills, and the Hills.",
    description:
      "The Hills District is one of Sydney's fastest-growing areas, and Mr. Clog is growing with it. We service new builds, established homes, and everything in between across Castle Hill, Kellyville, Baulkham Hills, and surrounds.",
    suburbs: [
      "Castle Hill", "Kellyville", "Baulkham Hills", "Norwest", "Bella Vista",
      "Rouse Hill", "Glenhaven", "Dural", "Cherrybrook", "West Pennant Hills",
      "Pennant Hills", "Beecroft", "Carlingford", "Winston Hills", "Seven Hills",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you work on new builds in the Hills District?", a: "Yes — we carry out plumbing rough-in and fit-off for new builds and work with builders and developers across the Hills." },
      { q: "Can you service properties with acreage?", a: "Yes — including septic systems, rainwater tanks, bore pumps, and extended drainage runs common on larger properties." },
      { q: "Is there a call-out fee for the Hills District?", a: "No — $0 call-out fee applies across all Hills District suburbs." },
    ],
    metaTitle: "Plumber Hills District Sydney | Mr. Clog | Castle Hill, Kellyville",
    metaDescription: "Trusted plumber in Sydney's Hills District. Castle Hill, Kellyville, Baulkham Hills and more. 24/7, $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "south-sydney",
    label: "South Sydney",
    headline: "Plumber South Sydney",
    subheadline: "Fast, professional plumbing across Sutherland Shire, St George, and South Sydney.",
    description:
      "Mr. Clog covers all of South Sydney — from the St George area through Sutherland Shire to Cronulla. We're familiar with the mix of older post-war housing, modern apartments, and beachside properties in this part of Sydney.",
    suburbs: [
      "Hurstville", "Kogarah", "Rockdale", "Brighton-Le-Sands", "Cronulla",
      "Miranda", "Sutherland", "Gymea", "Caringbah", "Engadine",
      "Menai", "Bangor", "Revesby", "Mortdale", "Penshurst",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you cover the Sutherland Shire?", a: "Yes — our South Sydney team covers the full Sutherland Shire including Cronulla, Miranda, Sutherland, and surrounds." },
      { q: "Are you familiar with older plumbing in St George area homes?", a: "Absolutely — clay and cast iron pipes are common in post-war homes throughout St George. We repair, reline, and replace them regularly." },
      { q: "What's the response time to South Sydney?", a: "We aim for 30–60 minutes from your call for emergency jobs. Standard bookings are typically same or next day." },
    ],
    metaTitle: "Plumber South Sydney | Sutherland Shire & St George | Mr. Clog",
    metaDescription: "Local plumber in South Sydney, St George, and Sutherland Shire. 24/7, $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "western-sydney",
    label: "Western Sydney",
    headline: "Plumber Western Sydney",
    subheadline: "Reliable plumbing across Parramatta, Blacktown, Penrith, and Western Sydney.",
    description:
      "Western Sydney is home to a huge range of properties — from Parramatta's high-rises to Penrith's family homes. Mr. Clog services the full western corridor, providing fast, dependable plumbing at competitive prices.",
    suburbs: [
      "Parramatta", "Blacktown", "Penrith", "Liverpool", "Campbelltown",
      "Auburn", "Merrylands", "Granville", "Fairfield", "Cabramatta",
      "Bankstown", "Lakemba", "Strathfield", "Burwood", "Homebush",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you cover Penrith and the outer west?", a: "Yes — our Western Sydney team services from Strathfield out to Penrith and the Blue Mountains foothills." },
      { q: "Is there a higher call-out fee for Western Sydney?", a: "No — $0 call-out fee everywhere, including all Western Sydney suburbs." },
      { q: "Can you handle high-density strata properties in Parramatta?", a: "Yes — we work with unit owners, tenants, and strata managers in Parramatta's growing apartment market." },
    ],
    metaTitle: "Plumber Western Sydney | Parramatta, Blacktown, Penrith | Mr. Clog",
    metaDescription: "Local plumber across Western Sydney. Parramatta, Blacktown, Penrith, Liverpool and more. 24/7, $0 call-out fee. Call (02) 9139 8945.",
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
 slug: "northern-beaches",
    label: "Northern Beaches",
    headline: "Plumber Northern Beaches Sydney",
    subheadline: "Fast, reliable plumbing across Manly, Dee Why, Brookvale, and the Northern Beaches.",
    description:
      "Mr. Clog is the Northern Beaches' trusted local plumber. From the high-rise apartments of Manly to the family homes of Dee Why and Brookvale, we service every property type across the Northern Beaches. Available 24/7 with $0 call-out fee.",
    suburbs: [
      "Manly", "Dee Why", "Brookvale", "Narrabeen", "Collaroy",
      "Curl Curl", "Freshwater", "Fairlight", "Balgowlah", "Seaforth",
      "Frenchs Forest", "Belrose", "Terrey Hills", "Warriewood", "Mona Vale",
      "Newport", "Avalon", "Palm Beach",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "How quickly can you reach the Northern Beaches?", a: "We have plumbers based on the Northern Beaches. In most cases we can reach you within 30–60 minutes without needing to cross the bridge." },
      { q: "Do you handle coastal corrosion issues?", a: "Yes — properties near the beach experience accelerated pipe and fixture corrosion. We use marine-appropriate materials and assess corrosion on every job." },
      { q: "Do you service strata and apartment buildings in Manly?", a: "Yes — we work with unit owners, tenants, and strata managers across all Northern Beaches apartment buildings and complexes." },
    ],
    metaTitle: "Plumber Northern Beaches Sydney | 24/7 | Mr. Clog",
    metaDescription: "Local plumber on Sydney's Northern Beaches. Manly, Dee Why, Brookvale, Narrabeen and more. Available 24/7, $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "sydney-cbd",
    label: "Sydney CBD & City",
    headline: "Plumber Sydney CBD & City",
    subheadline: "Commercial and residential plumbing in the CBD, Surry Hills, Darlinghurst, and Redfern.",
    description:
      "Mr. Clog services Sydney's CBD and inner city suburbs — from commercial fit-outs in the CBD to terrace homes in Surry Hills and apartments in Darlinghurst. We understand the unique demands of city plumbing, including high-rise access, strata coordination, and after-hours work.",
    suburbs: [
      "Sydney CBD", "Surry Hills", "Darlinghurst", "Redfern", "Waterloo",
      "Zetland", "Alexandria", "Erskineville", "Chippendale", "Ultimo",
      "Haymarket", "Woolloomooloo", "Potts Point", "Elizabeth Bay", "Kings Cross",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you work in high-rise commercial buildings in the CBD?", a: "Yes — we carry out commercial plumbing in offices, retail, and hospitality venues across the CBD, including after-hours work to minimise disruption." },
      { q: "Can you coordinate with strata managers in city apartment buildings?", a: "Absolutely — we work closely with strata managers and building managers across all inner city apartment towers and complexes." },
      { q: "Do you offer after-hours plumbing in the CBD?", a: "Yes — we're available 24/7 including weekends and public holidays with $0 call-out fee." },
    ],
    metaTitle: "Plumber Sydney CBD | City & Inner Suburbs | Mr. Clog",
    metaDescription: "Local plumber in Sydney CBD, Surry Hills, Darlinghurst, Redfern and surrounds. 24/7, $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "ryde-macquarie-park",
    label: "Ryde & Macquarie Park",
    headline: "Plumber Ryde & Macquarie Park Sydney",
    subheadline: "Trusted plumbing across Ryde, West Ryde, Meadowbank, and Macquarie Park.",
    description:
      "Mr. Clog services the Ryde and Macquarie Park area — one of Sydney's fastest-growing corridors. From the established homes of West Ryde to the new apartments of Meadowbank and Macquarie Park, we handle every type of plumbing job with fast response times and upfront pricing.",
    suburbs: [
      "Ryde", "West Ryde", "Meadowbank", "Macquarie Park", "Ermington",
      "Shepherd's Bay", "Putney", "Gladesville", "Hunters Hill", "Boronia Park",
      "Eastwood", "Epping", "North Ryde", "Marsfield", "Dundas",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you service the new apartment developments in Meadowbank?", a: "Yes — we work with residents, building managers, and strata in all the new high-density developments along the Parramatta River corridor." },
      { q: "Can you handle older homes in Ryde and Gladesville?", a: "Absolutely — older properties in this area often have ageing clay or cast iron drainage. We inspect, repair, and reline these systems regularly." },
      { q: "Is there a call-out fee for Ryde?", a: "No — $0 call-out fee applies across all Ryde and Macquarie Park suburbs." },
    ],
    metaTitle: "Plumber Ryde & Macquarie Park Sydney | Mr. Clog | 24/7",
    metaDescription: "Local plumber in Ryde, West Ryde, Meadowbank, Macquarie Park and surrounds. 24/7, $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "canterbury-bankstown",
    label: "Canterbury-Bankstown",
    headline: "Plumber Canterbury-Bankstown Sydney",
    subheadline: "Reliable plumbing across Bankstown, Canterbury, Campsie, and surrounds.",
    description:
      "Mr. Clog services the entire Canterbury-Bankstown area — one of Sydney's most densely populated regions. We work on everything from post-war brick homes to modern apartment blocks across Bankstown, Canterbury, Campsie, and surrounding suburbs, delivering fast, affordable plumbing with $0 call-out fee.",
    suburbs: [
      "Bankstown", "Canterbury", "Campsie", "Belmore", "Lakemba",
      "Wiley Park", "Punchbowl", "Roselands", "Beverly Hills", "Narwee",
      "Padstow", "Revesby", "Panania", "East Hills", "Condell Park",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you service older properties in Canterbury-Bankstown?", a: "Yes — post-war homes in this area commonly have clay and cast iron drainage. We repair, reline, and replace these pipes regularly." },
      { q: "How quickly can you reach Bankstown?", a: "We aim to reach most Canterbury-Bankstown suburbs within 30–60 minutes for emergency jobs." },
      { q: "Do you work on apartment buildings and strata in the area?", a: "Yes — we work with unit owners, tenants, and strata managers across all types of multi-residential properties." },
    ],
    metaTitle: "Plumber Canterbury-Bankstown Sydney | Mr. Clog | 24/7",
    metaDescription: "Local plumber in Canterbury-Bankstown. Bankstown, Campsie, Canterbury, Lakemba and more. 24/7, $0 call-out fee. Call (02) 9139 8945.",
  },
  {
    slug: "lower-north-shore",
    label: "Lower North Shore",
    headline: "Plumber Lower North Shore Sydney",
    subheadline: "Premium plumbing service across Kirribilli, McMahons Point, Lavender Bay, and surrounds.",
    description:
      "Mr. Clog services Sydney's prestigious lower north shore — from the heritage apartments of Kirribilli to the harbourside homes of McMahons Point and Lavender Bay. We're experienced with older plumbing systems, high-value properties, and the tight access that comes with many lower north shore homes.",
    suburbs: [
      "Kirribilli", "McMahons Point", "Lavender Bay", "Blues Point",
      "Milsons Point", "North Sydney", "Cammeray", "Naremburn",
      "Waverton", "Wollstonecraft", "Crows Nest", "St Leonards",
    ],
    services: [
      "Emergency Plumbing", "Blocked Drains", "Hot Water Systems", "Taps & Toilets",
      "Leak Detection", "Pipe Relining", "Gas Fitting", "Bathroom Renovations",
    ],
    faqs: [
      { q: "Do you work on heritage apartments in Kirribilli?", a: "Yes — we're experienced with the older plumbing systems common in lower north shore heritage buildings, including cast iron, lead, and galvanised steel pipes." },
      { q: "Can you access properties with difficult access or steep blocks?", a: "Yes — many lower north shore properties have challenging terrain and access. We're equipped to handle these situations safely." },
      { q: "Do you work on North Sydney commercial buildings?", a: "Yes — we carry out commercial and strata plumbing in North Sydney's office towers and apartment buildings." },
    ],
    metaTitle: "Plumber Lower North Shore Sydney | Kirribilli, North Sydney | Mr. Clog",
    metaDescription: "Local plumber on Sydney's lower north shore. Kirribilli, McMahons Point, North Sydney and more. 24/7, $0 call-out fee. Call (02) 9139 8945.",
  },
 
];

export function getLocation(slug: string): Location | undefined {
    return locations.find((l) => l.slug === slug);
}
