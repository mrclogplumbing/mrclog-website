import type { ServiceArea } from "@/lib/service-areas";
import { areaLinks, suburbForArea } from "@/lib/service-areas";
import type { Location } from "@/lib/locations";

/**
 * Blocked drains, suburb by suburb.
 *
 * The site has a Blocked Drains service page and it has suburb pages. What it
 * did not have is the page someone actually searches for — "blocked drain
 * Newtown" — which forced search engines to choose between two pages that each
 * answer half the question.
 *
 * This is the pattern that works for larger competitors, and it is also the
 * pattern Google's scaled-content policy exists to catch. The difference is
 * entirely in whether the pages say anything. A template with the suburb name
 * swapped in is spam and will be treated as such.
 *
 * So the causes below are written per suburb and are genuinely different:
 * roots through earthenware in the Inner West, sand accumulation at the
 * beaches, reactive clay cracking pipe in the Hills, shared stacks in the
 * apartment suburbs, grease from ground-floor kitchens in the inner city.
 * Where two suburbs really do have the same problem, they say so in their own
 * words rather than pretending to a difference that is not there.
 *
 * Blocked drains only, for now. It is the strongest keyword this business has
 * — it is close to being its name — and twenty-three pages is a test rather
 * than a bet. If Search Console shows it working, hot water and emergency
 * follow; if not, nothing much was spent finding out.
 */
export type BlockedDrainArea = ServiceArea;

export const blockedDrainAreas: BlockedDrainArea[] = [
  {
    suburb: "newtown",
    intro:
      "Most blocked drains in Newtown come down to two things: the age of the pipe and the size of the trees above it. Terraces here drain through earthenware laid before the war, and the street trees along King Street and through Camperdown have had a century to find the joints.",
    causes: [
      {
        title: "Roots through earthenware joints",
        body: "Unrelined terraces still run original clay pipe. The joints were never watertight to modern standards and mature roots exploit them. If your drain blocks on a cycle rather than once, this is almost certainly why.",
      },
      {
        title: "Shared lines between terraces",
        body: "Rows of terraces often drain into one line. A blockage can be caused by a neighbour's usage and sit on a neighbour's land, so locating it precisely decides who is responsible before anyone pays.",
      },
      {
        title: "Kitchen grease in narrow old pipe",
        body: "Century-old lines are narrower than modern ones to begin with, and decades of grease build-up narrows them further. Small amounts that a new pipe would carry away will catch here.",
      },
    ],
    faqs: [
      { q: "Can you get a drain machine into a Newtown terrace?", a: "Yes. There is rarely side access, so equipment comes through the house. We work that way as a matter of course — drop sheets down and everything back out the same day." },
      { q: "Why does my drain block every winter?", a: "Roots seek water, and a slow winter leak at an old clay joint is the easiest source they will find. A seasonal pattern is the clearest sign roots are the cause rather than anything you have put down the drain." },
      { q: "Is it my blockage or the neighbour's?", a: "A camera locates the fault to a measured depth and distance, which establishes whether it sits on your property or theirs. That is what settles who pays." },
    ],
  },
  {
    suburb: "marrickville",
    intro:
      "Marrickville blockages split between the sewer and the stormwater, and telling them apart matters. Low-lying ground near the Cooks River means heavy rain overwhelms stormwater lines that cope the rest of the year, while the brick bungalows drain through clay sewer that is now decades past its best.",
    causes: [
      {
        title: "Stormwater at capacity in heavy rain",
        body: "Flat, low ground gives water nowhere to go once a line is full. Overflow at a gully or water pooling against the house during a downpour is usually a stormwater problem, not a sewer one.",
      },
      {
        title: "Silt and debris in stormwater lines",
        body: "Years of leaf litter and silt reduce the effective bore of a stormwater line. It does not block suddenly — capacity falls until one serious storm finds the limit.",
      },
      {
        title: "Root intrusion in original clay sewer",
        body: "Interwar homes on their first earthenware line, with established street trees above. The blockages return seasonally until the affected section is relined.",
      },
    ],
    faqs: [
      { q: "My yard floods but the toilet works fine. What is blocked?", a: "That points to stormwater rather than sewer. They are separate systems and a stormwater blockage does not affect your toilets or sinks at all." },
      { q: "Will clearing it stop it happening again?", a: "If it is silt, clearing buys you several years. If it is roots or a collapsed section, it will return — a camera inspection tells you which you have before you decide what to spend." },
      { q: "How fast can you get to Marrickville?", a: "It is one of our core areas and we are usually onsite within 30–60 minutes. No call-out fee, any hour." },
    ],
  },
  {
    suburb: "leichhardt",
    intro:
      "Leichhardt is one of the worst suburbs in Sydney for root intrusion and there is no mystery about why — big established trees on big established blocks, sitting over clay sewer laid a century ago. The question here is rarely what is blocking the drain. It is whether clearing it again is worth the money.",
    causes: [
      {
        title: "Repeat root intrusion",
        body: "Mature street and garden trees against original earthenware. This is the defining drain problem in Leichhardt, and clearing alone is a maintenance cycle rather than a fix.",
      },
      {
        title: "Dropped and separated joints",
        body: "Century-old clay does not only crack. Sections settle and joints pull apart as ground moves, which catches debris that would otherwise flow through.",
      },
      {
        title: "Partial collapse",
        body: "Where a section has collapsed rather than cracked, no amount of clearing helps for long. A camera distinguishes this from a simple blockage, and the two cost very different amounts to fix.",
      },
    ],
    faqs: [
      { q: "I have had this drain cleared three times. What now?", a: "Three clears in a few years means the cause is structural — almost always roots at a joint. Relining that section closes it permanently, and we will show you the camera footage of what is actually happening down there." },
      { q: "Do you have to dig up the garden?", a: "Usually not. Relining works through existing access points, which is the main reason it suits Leichhardt — excavating an established garden is the expense worth avoiding." },
      { q: "How long does relining take?", a: "Most residential sections are done in a day: inspect, jet the line clean, install the liner, re-inspect before we leave." },
    ],
  },
  {
    suburb: "balmain",
    intro:
      "Blocked drains in Balmain are complicated less by the blockage than by what sits around the pipe. Sandstone runs close to the surface across the peninsula, so the usual answer of digging up the damaged section is slow and expensive here in a way it is not elsewhere.",
    causes: [
      {
        title: "Roots in heritage-era clay",
        body: "Terraces and older homes drain through original earthenware, with mature gardens above. The same root intrusion as the rest of the Inner West, on pipe just as old.",
      },
      {
        title: "Silted stormwater on steep blocks",
        body: "Blocks falling toward the harbour move water fast. A line that has silted up or lost fall does not drain slowly on a gradient — it overflows, usually at the worst point of a storm.",
      },
      {
        title: "Shallow rock limiting repairs",
        body: "Not a cause of blockages but the reason they are dealt with differently here. Where excavation means breaking rock, relining is usually both faster and cheaper.",
      },
    ],
    faqs: [
      { q: "My yard is solid sandstone. Can the drain still be fixed?", a: "Yes, and this is exactly where relining earns its keep. It works through existing access points, so shallow rock stops being a cost." },
      { q: "Do heritage controls affect drain work?", a: "Drain repairs generally sit outside heritage controls, but excavation near a heritage structure can need approval. We will tell you upfront if that applies." },
      { q: "Is there a call-out fee after hours?", a: "No. No call-out fee at any hour, any day." },
    ],
  },
  {
    suburb: "surry-hills",
    intro:
      "The hard part of a Surry Hills blockage is usually not clearing it — it is establishing whose it is. Terraces share sewer lines, converted buildings blur the line between private and common property, and ground-floor commercial kitchens put grease into drains that residents upstairs never poured anything into.",
    causes: [
      {
        title: "Grease from ground-floor kitchens",
        body: "Commercial kitchens sit under residential floors across much of the suburb. Grease sets and narrows shared lines well upstream of where it entered, causing blockages that appear to have no cause.",
      },
      {
        title: "Shared lines between terraces",
        body: "Rows of terraces frequently drain into one line, so a blockage affects several houses at once and responsibility depends entirely on where it sits.",
      },
      {
        title: "Strata boundaries in converted buildings",
        body: "In a warehouse conversion the split between common property and a private fault is rarely obvious from inside an apartment. It decides who pays, so it is worth establishing before work starts.",
      },
    ],
    faqs: [
      { q: "Several apartments have slow drains. Is that my problem?", a: "Almost certainly not. Multiple units affected at once means the blockage is in the shared stack, which is common property and a strata responsibility." },
      { q: "Can you give strata something in writing?", a: "Yes. We provide camera footage and a written report with the fault located to a measured depth and distance, which is what a committee needs to act." },
      { q: "Do you handle grease trap related blockages?", a: "Yes, including for commercial premises. Grease in a shared line usually needs jetting rather than a drain machine to properly scour the pipe wall." },
    ],
  },
  {
    suburb: "alexandria",
    intro:
      "Blocked drains in Alexandria are often not blockages at all. A great deal of the housing is converted industrial space, and waste lines retrofitted into buildings never designed for kitchens and bathrooms frequently have the wrong fall or the wrong bore. A drain that has always been slow is a different problem to one that has become slow.",
    causes: [
      { title: "Retrofitted drainage in conversions", body: "Industrial buildings converted to residential often run waste through lines never intended for it. Insufficient fall or undersized pipe means the drain was never going to keep up, and clearing it changes nothing." },
      { title: "Grease from ground-floor kitchens", body: "Mixed-use buildings put commercial kitchens on shared lines. Grease sets and narrows the pipe upstream of where it entered, producing blockages with no apparent cause." },
      { title: "Legacy industrial pipework", body: "Some lines here are old, oversized and made of materials no longer in use. A camera is the only reliable way to establish what is actually there before quoting work on it." },
    ],
    faqs: [
      { q: "My shower has always drained slowly. Is it blocked?", a: "If it has always been slow rather than getting worse, it is usually fall or pipe size from the conversion. A camera confirms it and stops you paying to clear a line that is already clear." },
      { q: "Do you do commercial drain work?", a: "Yes, including grease-related blockages in mixed-use buildings. Those generally need jetting rather than a drain machine to scour the pipe wall properly." },
      { q: "Can you inspect drainage before I buy?", a: "Yes. A pre-purchase CCTV inspection is worth doing on any converted building, and we provide footage and a written report." },
    ],
  },
  {
    suburb: "bondi",
    intro:
      "Bondi drains deal with two things nowhere inland has to: sand, and a great many apartments sharing one line. Sand blown and tracked in from the beach settles in stormwater over years, and in a block of units a blockage in the common stack affects everyone above it at once.",
    causes: [
      { title: "Sand accumulating in stormwater", body: "Sand settles and builds up, reducing the effective bore of the line. It does not block suddenly — capacity falls until a heavy storm finds the limit." },
      { title: "Shared stacks in apartment blocks", body: "A blocked common stack affects every apartment above the blockage. Several units reporting slow drainage at the same time is the clearest sign it is not a problem in any one of them." },
      { title: "Grease and food waste in unit kitchens", body: "High-density living puts a lot of kitchen waste into one line. In older blocks with narrow original pipework, that builds up faster than the system was designed for." },
    ],
    faqs: [
      { q: "Three apartments have slow drains. Whose problem is it?", a: "Almost certainly the common stack, which makes it strata rather than yours. We locate the blockage and provide footage so the committee has something definite." },
      { q: "Why does my stormwater overflow now when it never used to?", a: "Usually sand and silt reducing capacity gradually. Jetting clears it properly, and a camera confirms nothing structural is involved." },
      { q: "Do you attend Bondi after hours?", a: "Yes, 24/7, with no call-out fee at any hour." },
    ],
  },
  {
    suburb: "randwick",
    intro:
      "Randwick splits cleanly. In the older streets away from the main roads, blockages are roots in original clay sewer under established gardens. Closer to the hospital and the university, the housing is denser and the problem is shared stacks carrying more than they were built for.",
    causes: [
      { title: "Root intrusion in the older streets", body: "Federation homes on established blocks, mature trees, original earthenware. Blockages that return on a cycle rather than once are roots almost every time." },
      { title: "Overloaded shared stacks", body: "High-turnover rental blocks put considerable load through original pipework. A stack blockage presents as several apartments draining slowly simultaneously." },
      { title: "Wipes and foreign objects", body: "Dense rental housing sees more of what should not go down a drain. Wipes in particular do not break down and catch on any imperfection in the pipe." },
    ],
    faqs: [
      { q: "Are flushable wipes actually flushable?", a: "No. They do not break down like toilet paper and they are one of the most common causes of blockages we clear. Bin them regardless of what the packet says." },
      { q: "My drain blocks every year around the same time. Why?", a: "Roots seek water and a slow leak at an old joint is the easiest source. A seasonal pattern points to roots rather than anything you have put down the drain." },
      { q: "How quickly can you get to Randwick?", a: "Usually within 30–60 minutes, 24/7, with no call-out fee." },
    ],
  },
  {
    suburb: "coogee",
    intro:
      "Most blocked drain calls in Coogee come from apartment blocks, and most of those turn out to be the shared stack rather than anything inside the apartment that reported it. Add sand working its way into stormwater from the beach and you have the two causes that account for the majority of the suburb's drainage work.",
    causes: [
      { title: "Shared stacks in walk-up blocks", body: "Coogee is dense and largely apartment-based. A blockage in a common stack affects every unit above it, which is why several apartments often report the same problem at once." },
      { title: "Sand in stormwater lines", body: "Proximity to the beach means sand ends up in drainage. It accumulates rather than blocking suddenly, reducing capacity until heavy rain overwhelms what is left." },
      { title: "Narrow original pipework", body: "Older blocks were plumbed to a smaller standard than modern ones. Ordinary kitchen and bathroom use builds up faster in a narrower pipe." },
    ],
    faqs: [
      { q: "Do I pay or does strata?", a: "It depends where the blockage sits. Inside your apartment it is yours; in the common stack it is strata. We locate it precisely so nobody is guessing." },
      { q: "Can you clear a drain in a top-floor apartment?", a: "Yes. Access is usually from the stack rather than from inside the apartment, which is often less disruptive than people expect." },
      { q: "Is there an after-hours surcharge?", a: "No. No call-out fee and no after-hours surcharge, any day of the week." },
    ],
  },
  {
    suburb: "maroubra",
    intro:
      "Maroubra is post-war brick on solid blocks, and most of it still drains through the clay sewer it was built with. Seventy years of tree growth over seventy-year-old earthenware accounts for the large majority of blocked drains in the suburb.",
    causes: [
      { title: "Roots in original clay sewer", body: "Post-war homes on their first earthenware line with mature street trees above. Recurring blockages are the signature, and clearing alone does not end them." },
      { title: "Cracked and separated joints", body: "Decades of ground movement pull joints apart and crack pipe. Debris catches at the fault rather than flowing past, so the same spot blocks repeatedly." },
      { title: "Sand and silt closer to the beach", body: "Nearer the coast, sand works into stormwater lines and reduces their capacity gradually rather than blocking them outright." },
    ],
    faqs: [
      { q: "How much does clearing a blocked drain cost?", a: "Most straightforward blockages fall between $150 and $400. You get a fixed price before we start and there is no call-out fee." },
      { q: "Should I clear it again or reline it?", a: "If it has blocked more than twice, relining the affected section is usually the cheaper answer over a few years. The camera footage shows you what you are dealing with." },
      { q: "Do you offer same-day service?", a: "Yes, in most cases, and we are available 24/7 for emergencies." },
    ],
  },
  {
    suburb: "chatswood",
    intro:
      "Chatswood is two suburbs as far as drains are concerned. In the high-rise around the station it is shared stacks; a few streets out it is mature trees over old clay sewer under large family homes. The equipment that solves one is not the equipment that solves the other.",
    causes: [
      { title: "Mature trees against old clay", body: "The streets surrounding the centre have large established trees and original earthenware drainage. Root intrusion is a maintenance cycle here unless the section is relined." },
      { title: "Shared stacks in apartment towers", body: "In high-rise, a blocked common stack shows up as slow drainage across several apartments at once. It needs clearing from the stack, not from any one unit." },
      { title: "Kitchen grease in tower stacks", body: "Hundreds of kitchens on one stack means grease accumulates faster than in a house. Jetting scours the pipe wall; a drain machine only punches through." },
    ],
    faqs: [
      { q: "My apartment drains slowly but my neighbour is fine. Is it the stack?", a: "Probably not — if only one apartment is affected the blockage is usually within that unit's branch. A camera confirms it quickly either way." },
      { q: "Do you work with building managers?", a: "Yes, regularly. We provide camera footage and a written report with the fault located to a depth and distance." },
      { q: "Is there a call-out fee in Chatswood?", a: "No, and that applies at any hour, any day." },
    ],
  },
  {
    suburb: "lane-cove",
    intro:
      "Lane Cove has more mature vegetation than almost anywhere on the lower North Shore and drainage old enough to be vulnerable to it. If a drain here blocks more than once, roots are the overwhelming likelihood and the only real question is whether to keep clearing or to reline.",
    causes: [
      { title: "Heavy root intrusion from bushland trees", body: "Large established trees over hundred-year-old clay. Root intrusion in Lane Cove is persistent, and clearing rarely holds for more than a season or two." },
      { title: "Stormwater silting on falling blocks", body: "Ground dropping toward the river moves water fast. A line that has silted or lost fall overflows in a downpour rather than draining slowly." },
      { title: "Leaf litter in stormwater and gutters", body: "Heavy tree cover means constant leaf load. Gutters and stormwater pits fill faster here than in more open suburbs." },
    ],
    faqs: [
      { q: "The same drain blocks every year. Is relining worth it?", a: "In Lane Cove, usually. An annual blockage means roots re-entering at the same joint, and relining that section closes it permanently." },
      { q: "Will you have to dig up my garden?", a: "Generally no. Relining works through existing access points, which is the main reason it suits this suburb." },
      { q: "How often should stormwater be cleared here?", a: "With this much tree cover, checking gutters and pits annually before the storm season is sensible." },
    ],
  },
  {
    suburb: "mosman",
    intro:
      "A blocked drain in Mosman is usually straightforward to diagnose and awkward to reach. Steep blocks, established gardens and old clay sewer mean the fault is often roots or a dropped joint, and the expensive part is getting to it without taking apart a landscaped garden.",
    causes: [
      { title: "Roots under established gardens", body: "Mature plantings over original clay drainage. The intrusion is ordinary; the cost of excavating a landscaped Mosman garden to reach it is not." },
      { title: "Stormwater overwhelmed by gradient", body: "Blocks stepping down toward the harbour move water quickly. A silted line overflows rather than draining slowly, and the overflow finds the lowest point of the house." },
      { title: "Blocked subsurface drainage behind retaining walls", body: "Terraced blocks rely on drainage behind retaining walls that is almost never inspected. When it blocks, water builds behind the wall — a structural concern as much as a plumbing one." },
    ],
    faqs: [
      { q: "Water comes into the garage when it rains. Is that a blocked drain?", a: "Usually a stormwater blockage or a line that has lost fall. A camera establishes which before anyone talks about digging." },
      { q: "Can the pipe be fixed without excavating?", a: "In most cases yes. Relining runs through existing access points, which avoids the reinstatement cost that dominates a job in this suburb." },
      { q: "Do you provide reports for strata or building inspections?", a: "Yes — camera footage plus a written report with located depths and distances." },
    ],
  },
  {
    suburb: "manly",
    intro:
      "Manly combines beachside sand with older apartment blocks, and its blocked drains follow from both. Sand accumulates in stormwater over years, while blocks decades old still run their original common pipework and one blockage affects several apartments.",
    causes: [
      { title: "Sand in stormwater lines", body: "Sand settles near the beach and reduces the effective bore. Lines that coped for a decade start overflowing in heavy rain without anything obvious having changed." },
      { title: "Original common pipework in older blocks", body: "Many Manly blocks are on the pipework they were built with. Narrow original lines carry modern household loads and block more readily than newer systems." },
      { title: "Leaf and salt debris in gutters and downpipes", body: "Roof drainage fills with debris and corrodes early in coastal air. A blocked downpipe backs water into the gutter, which then leaks into the eaves rather than over the edge." },
    ],
    faqs: [
      { q: "Is a blocked gutter a plumbing job?", a: "Yes — roof plumbing and stormwater are ours. A blocked downpipe often shows up as a ceiling stain rather than as water over the gutter edge." },
      { q: "Several units are affected. What happens next?", a: "That points to the common line. We locate the blockage, clear it, and give the strata footage and a report." },
      { q: "How long does it take to get to Manly?", a: "Longer than the inner suburbs, and we will give you an honest ETA on the call rather than a standard one." },
    ],
  },
  {
    suburb: "point-piper",
    intro:
      "Blocked drains in Point Piper are rarely unusual faults. They are ordinary root intrusion and dropped joints in old clay sewer — under some of the most expensive ground in Australia. What decides the cost of the job is almost never the blockage; it is what has to be lifted to reach it.",
    causes: [
      { title: "Roots in original clay under mature gardens", body: "Large old homes on their original drainage with decades of established planting above. The intrusion is routine; reaching it through a landscaped harbourside garden is not." },
      { title: "Stormwater overwhelmed on steep blocks", body: "Properties stepping down to the water move stormwater fast. A silted or misaligned line overflows rather than draining slowly, and on these blocks it runs toward the house." },
      { title: "Drainage under terraces, pools and paving", body: "Tiled terraces, pool surrounds and sandstone paving all sit over drainage. Reinstating the surface frequently costs more than the plumbing underneath it." },
    ],
    faqs: [
      { q: "Can the drain be fixed without lifting the terrace?", a: "Usually. Relining runs through existing access points and leaves the surface untouched, which in Point Piper is normally the difference between a manageable job and an expensive one." },
      { q: "Will you need to bring machinery onto the property?", a: "Rarely for a blockage. Drain machine and jetter come in on foot. If excavation is genuinely unavoidable we will show you the camera footage and explain why before you commit." },
      { q: "Do you work discreetly?", a: "Yes. Drop sheets down, gear in and out the same day, and the site left clean." },
    ],
  },
  {
    suburb: "hunters-hill",
    intro:
      "Hunters Hill has some of the oldest drainage still in service anywhere in Sydney. Houses here date from the 1850s onwards, and a good deal of the earthenware beneath them has been in the ground for well over a century. Blocked drains in this suburb are usually a symptom of that age rather than of anything anyone has done.",
    causes: [
      { title: "Nineteenth-century earthenware",
        body: "Drainage this old has cracked joints, settled sections and long-established root intrusion as a matter of course. Clearing it is maintenance, not repair." },
      { title: "Heritage controls and shallow sandstone",
        body: "Not a cause of blockages but the reason they are handled differently here. Excavation can need approval and often means breaking rock, so relining is usually both faster and cheaper." },
      { title: "Stormwater falling to the river",
        body: "The peninsula drops away on both sides. Lines that have silted or lost fall overflow during heavy rain rather than backing up gradually." },
    ],
    faqs: [
      { q: "Is the original drainage from the 1800s still in use?", a: "Very often, at least in part. A camera inspection shows exactly what you have and what condition it is in — worth knowing before a renovation rather than during one." },
      { q: "Does drain work need heritage approval?", a: "Repairs generally do not. Excavation near a heritage structure can, which is another reason relining suits this suburb." },
      { q: "Can pipe that old really be relined?", a: "In most cases yes, provided the line is still structurally continuous. Where a section has collapsed it needs excavating, and the camera footage shows which you have." },
    ],
  },
  {
    suburb: "hurstville",
    intro:
      "Hurstville has changed faster than most suburbs and its blocked drains divide accordingly. Post-war brick homes still run original clay sewer with decades of root growth around it. The towers built in the last decade have shared stacks where one blockage affects a whole column of apartments.",
    causes: [
      { title: "Roots in post-war clay sewer", body: "Homes built in the fifties and sixties on their first earthenware line. Root intrusion returns seasonally unless the affected section is relined." },
      { title: "Shared stacks in high-rise", body: "A blockage in a common stack presents as slow drainage across several apartments simultaneously. It is common property and needs clearing from the stack." },
      { title: "Kitchen waste in dense housing", body: "A lot of kitchens on one line means grease and food waste accumulate faster than a house line ever would." },
    ],
    faqs: [
      { q: "Who is responsible for a blockage in an apartment building?", a: "It depends where it sits. Inside your apartment it is yours; in the common stack it is strata. We locate it precisely so it is not a matter of opinion." },
      { q: "My house is from the 1950s. Is the drain original?", a: "Very likely. A camera inspection tells you its condition, and whether you are looking at a clean-out or a reline." },
      { q: "Do you offer same-day drain clearing?", a: "Yes in most cases, and we are available 24/7 with no call-out fee." },
    ],
  },
  {
    suburb: "rockdale",
    intro:
      "Rockdale sits low and flat near Botany Bay, and that shapes its drainage problems more than anything else. Heavy rain overwhelms stormwater lines that cope the rest of the year, and the post-war housing above them still runs the clay sewer it was built with.",
    causes: [
      { title: "Stormwater at capacity in heavy rain", body: "Flat, low ground leaves water nowhere to go once a line is full. Overflow at a gully or water pooling against the house is a stormwater problem, not a sewer one." },
      { title: "Silt build-up reducing capacity", body: "Years of silt and debris narrow the effective bore. The line does not block suddenly — it simply stops coping in a serious storm." },
      { title: "Roots in original sewer lines", body: "Post-war homes on first-generation clay drainage with decades of street tree growth above. Seasonal recurrence is the giveaway." },
    ],
    faqs: [
      { q: "My garage floods in heavy rain. Can that be fixed?", a: "Usually. We camera the stormwater line to establish whether it is blocked, undersized or has lost fall, then quote the actual fix rather than guessing." },
      { q: "What is jet blasting and do I need it?", a: "High-pressure water that scours the pipe wall rather than punching a hole through the blockage. For roots and built-up silt it is far more effective than a drain machine alone." },
      { q: "Are you available after hours?", a: "Yes, 24/7, with no call-out fee at any hour." },
    ],
  },
  {
    suburb: "bankstown",
    intro:
      "Bankstown is post-war brick on generous blocks and most of it drains through original clay sewer. Seventy years is a long time for earthenware with mature trees above it, and the majority of blocked drains here trace back to exactly that.",
    causes: [
      { title: "Clay sewer past its service life", body: "Original earthenware under a seventy-year-old brick home will have cracked joints and root intrusion. Clearing buys time; relining the affected section ends it." },
      { title: "Root intrusion from established trees", body: "Large gardens and mature street trees over old pipe. Blockages that return on a cycle are roots almost every time." },
      { title: "Grease and food waste in narrow old pipe", body: "Decades of build-up narrows a line that was not generous to begin with, so material that would flow through new pipe catches here." },
    ],
    faqs: [
      { q: "Is relining worth it on an older home?", a: "If the pipe is structurally sound but has cracked joints and roots, yes — usually cheaper than excavating and it stops the blockages returning." },
      { q: "How long does clearing a drain take?", a: "Most standard blockages are cleared within one to two hours. Root intrusion or a collapsed section takes longer, and we will tell you which before starting." },
      { q: "Do you charge extra on weekends?", a: "No. Same pricing, no call-out fee, seven days." },
    ],
  },
  {
    suburb: "campsie",
    intro:
      "Campsie has a lot of mid-century walk-up apartment blocks, and they account for most of the suburb's blocked drain work. Built in the sixties and seventies, they share waste stacks, so a single blockage becomes several apartments' problem at once.",
    causes: [
      { title: "Shared stacks in walk-up blocks", body: "A blockage in a common waste stack affects every apartment above it. Multiple units reporting slow drainage at the same time is the clearest sign." },
      { title: "Root intrusion in interwar sewer", body: "The houses between the blocks are on their first clay drainage with decades of tree growth above. Blockages recur seasonally until the section is relined." },
      { title: "Narrow original pipework", body: "Older blocks were plumbed to a smaller standard. Ordinary household use builds up faster in a narrower pipe than in a modern one." },
    ],
    faqs: [
      { q: "Every apartment on my side of the block is slow. What now?", a: "That is the common stack rather than any one apartment. It is strata's responsibility and needs clearing from the stack itself." },
      { q: "Do you work with strata managers?", a: "Yes, regularly. We provide camera footage and written reports so committees have something concrete to act on." },
      { q: "Is there a call-out fee?", a: "No — none, at any hour, any day." },
    ],
  },
  {
    suburb: "cronulla",
    intro:
      "Cronulla drains have to cope with sand, and that is the single biggest difference between here and an inland suburb. It does not block a line overnight. It settles, accumulates, and quietly reduces what the pipe can carry until one heavy storm finds the limit.",
    causes: [
      { title: "Sand accumulating in stormwater", body: "Sand works into stormwater lines from the beach and settles. Capacity falls gradually rather than blocking suddenly, so the failure looks sudden when it finally happens." },
      { title: "Debris in gutters and downpipes", body: "Roof drainage blocks and backs water into the gutter, which in coastal air has often corroded and leaks into the eaves rather than over the edge." },
      { title: "Shared stacks in apartment blocks", body: "Cronulla has a good deal of apartment stock. A common stack blockage affects several units at once and is a strata matter rather than an owner's." },
    ],
    faqs: [
      { q: "Why does my stormwater overflow now when it never used to?", a: "Usually sand and silt reducing capacity over years. Jetting clears the line properly and a camera confirms nothing structural is involved." },
      { q: "My ceiling has a stain but the roof looks fine.", a: "Often a blocked or corroded gutter leaking backwards into the eaves. We check the gutter line and flashings, which is where it usually is in a coastal suburb." },
      { q: "Do you cover the whole Shire?", a: "Yes — Cronulla, Caringbah, Miranda, Sutherland and surrounds, 24/7." },
    ],
  },
  {
    suburb: "miranda",
    intro:
      "Miranda is post-war brick with established gardens, far enough from the water that sand is not the issue it is at Cronulla. What it has instead is ordinary, predictable root intrusion in drainage that has been in the ground for sixty or seventy years.",
    causes: [
      { title: "Roots in established gardens", body: "Mature planting over original clay drainage. Recurring blockages point to roots rather than anything going down the drain." },
      { title: "Cracked and settled joints", body: "Decades of ground movement crack pipe and pull joints apart. Debris catches at the fault, so the same section blocks again and again." },
      { title: "Grease build-up in older lines", body: "Long-accumulated grease narrows a pipe that was not wide to begin with, catching material a newer line would carry away." },
    ],
    faqs: [
      { q: "How do I know whether to clear or reline?", a: "A camera inspection. If the pipe is sound and roots enter at a joint, relining that section ends it. If it is a one-off blockage, clearing is all you need — and we will tell you which." },
      { q: "Can you come the same day?", a: "In most cases yes, and we are available 24/7 for emergencies." },
      { q: "What does it cost?", a: "Most straightforward blockages are $150 to $400, quoted as a fixed price before we start. No call-out fee." },
    ],
  },
  {
    suburb: "ryde",
    intro:
      "Ryde is post-war brick on established blocks with mature gardens, and most of it still runs the clay sewer it was built with. Closer to Macquarie Park the housing gets newer and denser, and the problem shifts from roots to shared stacks.",
    causes: [
      { title: "Roots in original clay drainage", body: "Established gardens over pipe laid decades ago. Seasonal blockages are the signature, and a camera shows whether clearing or relining is the right spend." },
      { title: "Shared stacks near Macquarie Park", body: "In the newer apartment stock, a common stack blockage affects several units at once and is a strata rather than an owner responsibility." },
      { title: "Cracked joints from ground movement", body: "Decades of settlement pull joints apart. Debris catches at the fault rather than flowing past, so the same spot blocks repeatedly." },
    ],
    faqs: [
      { q: "Do you cover Macquarie Park as well?", a: "Yes — Ryde, West Ryde, Macquarie Park, Eastwood and the surrounding suburbs." },
      { q: "My drain blocks every winter. Why then?", a: "Roots seek water and a slow winter leak at an old joint is the easiest source. The seasonal pattern is a strong sign it is roots." },
      { q: "Is there a call-out fee?", a: "No, and that applies after hours and on weekends too." },
    ],
  },
  {
    suburb: "castle-hill",
    intro:
      "Blocked drains in the Hills are often not about what went down the drain at all. Reactive clay soil swells when wet and shrinks when dry, and over years it pulls joints apart and cracks pipe on the long runs that large blocks require. The blockage is a symptom; the soil is the cause.",
    causes: [
      { title: "Soil movement cracking pipe", body: "Reactive clay moves whatever is buried in it. Joints separate and pipe cracks, and debris catches at the fault. Clearing it will not keep it clear." },
      { title: "Long runs on large blocks", body: "Bigger homes on bigger blocks mean more pipe between house and connection — more joints, more fall to maintain, more places for a fault to sit unnoticed." },
      { title: "Stormwater with nowhere to soak away", body: "Clay does not absorb well, so stormwater has to be moved rather than drained into the ground. An undersized or partly blocked system leaves water ponding on the surface." },
    ],
    faqs: [
      { q: "We are careful about what goes down the drain. Why does it still block?", a: "In the Hills that usually points to soil movement cracking the pipe rather than anything you have done. A camera inspection confirms it." },
      { q: "Can relining fix a pipe damaged by soil movement?", a: "Often yes, where the pipe is still structurally continuous. Where a section has dropped or separated completely it needs excavating — the footage shows which, and we will show you." },
      { q: "How far out do you travel in the Hills?", a: "Castle Hill, Baulkham Hills, Kellyville, Bella Vista, Rouse Hill and surrounds. Travel is longer than the inner suburbs and we will give you an honest ETA." },
    ],
  },
  {
    suburb: "parramatta-cbd",
    intro:
      "Parramatta has high-rise going up beside housing that predates most of it, and blocked drains here come from both directions. In the towers it is shared stacks. In the older streets around Harris Park it is clay sewer sitting in reactive soil that cracks it over years.",
    causes: [
      { title: "Shared stacks in high-rise", body: "Several apartments reporting slow drainage at once means the fault is in the common stack. It needs clearing from the stack and is strata's responsibility." },
      { title: "Soil movement in the older streets", body: "Reactive clay through the surrounding suburbs cracks pipe and separates joints over years. These are structural faults and clearing them does not keep them clear." },
      { title: "Grease and waste in dense housing", body: "A great many kitchens on one line means grease accumulates far faster than in a single house, and jetting rather than a drain machine is usually what is needed." },
    ],
    faqs: [
      { q: "Who pays for a blockage in an apartment building?", a: "It depends where it sits. Inside your apartment it is yours; in the common stack it is strata. We locate it to a measured depth and distance so nobody is guessing." },
      { q: "Do you provide reports for strata committees?", a: "Yes — camera footage plus a written report with the fault located." },
      { q: "How quickly can you reach Parramatta?", a: "Usually within 30–60 minutes, 24/7, with no call-out fee." },
    ],
  },
];

export function getBlockedDrainArea(suburb: string): BlockedDrainArea | undefined {
  return blockedDrainAreas.find((a) => a.suburb === suburb);
}

/** The suburb page this drains page belongs to, for the breadcrumb and links. */
export function suburbFor(area: BlockedDrainArea): Location | undefined {
  return suburbForArea(area);
}

/** Every blocked-drain suburb with its label, for listing on the service page. */
export function blockedDrainSuburbLinks(): { slug: string; label: string }[] {
  return areaLinks(blockedDrainAreas);
}
