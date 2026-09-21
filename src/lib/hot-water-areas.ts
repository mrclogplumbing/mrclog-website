import type { ServiceArea } from "@/lib/service-areas";
import { areaLinks } from "@/lib/service-areas";

/**
 * Hot water systems, suburb by suburb.
 *
 * The honest starting position on this was that hot water does not vary much
 * by suburb — a tank fails the same way everywhere, and whether you live in a
 * house or an apartment matters more than which postcode it is in.
 *
 * That was half right. The fault does not vary. What varies, and varies a
 * great deal, is what can be installed and how it physically gets there:
 * salt air taking years off a tank at the beach, a terrace with no side
 * access where a 250 litre cylinder has to come down a hallway, strata
 * approval and a cupboard with no room for anything larger, heritage controls
 * on where an external unit or a flue can go, and large blocks where a heat
 * pump is actually viable.
 *
 * Those are the questions people ask before booking, so that is what these
 * pages answer. Where the honest answer is "the same as anywhere else", the
 * page says less rather than padding to match its neighbours.
 */
export const hotWaterAreas: ServiceArea[] = [
  {
    suburb: "newtown",
    intro:
      "Replacing a hot water system in a Newtown terrace is mostly a logistics problem. The unit is usually in a narrow external alcove or an internal cupboard, there is no side access, and the old cylinder has to come out the same way the new one goes in — down the hallway, past the furniture.",
    causes: [
      { title: "No side access for the changeover", body: "Terraces share walls on both sides. A 250 litre cylinder comes through the front door and down the hall, both ways. We plan for it rather than discovering it on the day." },
      { title: "Tight alcoves limiting what fits", body: "Original external recesses were sized for the unit that was there. Upgrading capacity often means checking what will physically fit before anything is ordered." },
      { title: "Conservation area rules on external units", body: "Much of Newtown is heritage-controlled, which can affect where an external unit or a flue is allowed to sit on a street-facing wall." },
    ],
    faqs: [
      { q: "Can you get a new tank into a terrace?", a: "Yes. It comes through the house with drop sheets down, and the old one goes out the same way. It is the normal case here, not an obstacle." },
      { q: "Can I upgrade to a bigger tank?", a: "Often, but not always — the alcove or cupboard sets the limit. We measure before quoting rather than after." },
      { q: "How quickly can hot water be restored?", a: "Most changeovers are done the same day. We carry common units and will tell you on the call whether yours is one of them." },
    ],
  },
  {
    suburb: "surry-hills",
    intro:
      "Surry Hills hot water is split between terraces with no room and apartments where the decision is not entirely yours. In a converted building or a small block, replacing a unit can mean strata approval, and the cupboard it sits in usually rules out anything larger than what is already there.",
    causes: [
      { title: "Strata approval in converted buildings", body: "Where a unit sits in common property or affects a shared flue or riser, the owners corporation has a say. Establishing that early avoids a cancelled booking." },
      { title: "Internal cupboards with no drainage", body: "A unit in an internal cupboard has nowhere to drain when it fails. That is how one apartment's tank becomes three apartments' ceiling." },
      { title: "No space to increase capacity", body: "Terrace and apartment cupboards were sized for the original unit. Upgrading usually means a more efficient unit of the same size rather than a bigger one." },
    ],
    faqs: [
      { q: "Do I need strata approval to replace my hot water unit?", a: "If it sits in common property, or affects a shared flue or riser, usually yes. If it is entirely inside your lot, usually not. We will tell you which applies before you book." },
      { q: "My unit is in a cupboard with no floor waste. Is that a problem?", a: "It is the main risk. When that tank fails the water goes into your floor and the apartment below. It is a strong argument for replacing it before it fails rather than after." },
      { q: "Can you work around trading hours?", a: "Yes, where the building allows it. We will agree a window before booking." },
    ],
  },
  {
    suburb: "bondi",
    intro:
      "Hot water units in Bondi do not last as long as the same unit inland, and that is worth knowing before you buy one. Salt air corrodes external tanks, fittings and flues faster, and much of Bondi's stock is apartments where a failure runs into the units below before anyone is home to notice.",
    causes: [
      { title: "Salt air shortening tank life", body: "External units and their fittings corrode faster this close to the ocean. A tank that would give you fifteen years inland can need replacing sooner, and it is worth choosing accordingly." },
      { title: "Units in apartments with nowhere to drain", body: "A cylinder in an internal cupboard has no floor waste. When it lets go, the water goes through the floor into the apartment below." },
      { title: "Limited placement in blocks", body: "Balcony and cupboard positions are fixed, and flue requirements limit what can replace what. The options are usually narrower than in a house." },
    ],
    faqs: [
      { q: "Why did my hot water system fail so early?", a: "Proximity to salt air. Corrosion is faster here, and it is worth specifying a unit rated for coastal conditions when you replace it." },
      { q: "How do I know it is about to fail?", a: "Rust staining down the tank, water pooling underneath, or hot water running out faster than it used to. Any of those means it is near the end." },
      { q: "Water is coming through my ceiling from above. What now?", a: "Have the apartment above turn off their stop tap if you can, and call us. We attend 24/7 with no call-out fee." },
    ],
  },
  {
    suburb: "coogee",
    intro:
      "Coogee is dense, coastal and mostly apartments, and hot water here is shaped by all three. Salt shortens the life of anything external, cupboards set a hard limit on what fits, and in a block the question of whose unit it is comes up as often as the question of what is wrong with it.",
    causes: [
      { title: "Coastal corrosion on external units", body: "Tanks, fittings and flues near the beach corrode faster than the same components inland. Expect a shorter service life and specify accordingly." },
      { title: "Cupboard space setting the limit", body: "Apartment cupboards were sized for the original unit. Upgrading usually means a more efficient unit of the same footprint rather than a larger tank." },
      { title: "Common versus private systems", body: "Some blocks run a central system and some give each apartment its own. It determines who is responsible and who authorises a replacement." },
    ],
    faqs: [
      { q: "Is my hot water system mine or the building's?", a: "It depends on the block. Individual units inside your lot are yours; a central system is common property. We will tell you which you have on the first visit." },
      { q: "Can I switch from electric to gas?", a: "Sometimes, but in an apartment it depends on gas availability and flue requirements, and often on strata approval. We check all three before quoting." },
      { q: "Can you replace it the same day?", a: "In most cases yes, provided access is straightforward and we have the right unit on the van." },
    ],
  },
  {
    suburb: "manly",
    intro:
      "Manly combines coastal corrosion with older apartment blocks, which is the least forgiving combination for hot water. Units age faster than inland, and in a block decades old the cupboard, the flue and the access are all fixed by decisions made a long time ago.",
    causes: [
      { title: "Salt air on external units and flues", body: "Corrosion is faster on the ocean side. Tanks, relief valves and flue components all have a shorter life here than a few kilometres inland." },
      { title: "Older blocks with fixed constraints", body: "Cupboard size, flue routes and access were set when the building went up. What can replace your unit is often narrower than the catalogue suggests." },
      { title: "Failures reaching other apartments", body: "A cylinder with no floor waste in an internal cupboard puts water into the apartment below when it fails." },
    ],
    faqs: [
      { q: "How long should a unit last here?", a: "Less than the manufacturer's headline figure, because of salt air. Ten to twelve years is a realistic expectation for an external electric storage unit near the water." },
      { q: "Do you travel to the Northern Beaches?", a: "Yes. Travel is longer than the inner suburbs and we will give you an honest ETA rather than a standard one." },
      { q: "Is there a call-out fee?", a: "No — none at any hour, any day." },
    ],
  },
  {
    suburb: "cronulla",
    intro:
      "Cronulla hot water has the same coastal problem as the rest of the beaches: salt takes years off everything external. The suburb also has a good deal of apartment stock, where the size of the cupboard decides the options more than the catalogue does.",
    causes: [
      { title: "Corrosion shortening service life", body: "External tanks and fittings corrode faster near the water. Choosing components rated for coastal conditions makes a measurable difference to how long the next one lasts." },
      { title: "Fixed cupboard and flue positions", body: "In apartments, the original position sets what can replace it. Upgrading capacity is often not possible without changing more than the unit." },
      { title: "Units well past their age", body: "A great many systems in the Shire are fifteen years or older. Rust at the base or water on the floor means the tank is going." },
    ],
    faqs: [
      { q: "Should I repair or replace?", a: "Under about eight years, repair usually wins. Past twelve, replacement generally pays for itself. Past fifteen it is living on borrowed time, and near the coast that arrives sooner." },
      { q: "Can you replace it the same day?", a: "Usually yes. We carry common units and can generally have hot water back on before we leave." },
      { q: "Do you cover the whole Shire?", a: "Yes — Cronulla, Caringbah, Miranda, Sutherland and surrounds, 24/7." },
    ],
  },
  {
    suburb: "balmain",
    intro:
      "Balmain hot water changeovers are about getting the cylinder to where it has to go. Steep blocks, narrow terrace frontages, stairs down to the house and heritage controls on external walls all conspire to make what is elsewhere a simple swap into a job that needs planning.",
    causes: [
      { title: "Steep blocks and stairs", body: "Carrying a cylinder up or down a flight of external stairs is a two-person job and sometimes more. It affects the time on site, so it is better established when quoting." },
      { title: "Heritage controls on external units", body: "Where an external unit or flue sits on a street-facing heritage wall, placement can be constrained. We will tell you before ordering anything." },
      { title: "Terrace alcoves with no room to grow", body: "Original recesses were sized for the original unit. Upgrading capacity usually means checking what fits first." },
    ],
    faqs: [
      { q: "My unit is down a flight of stairs. Is that a problem?", a: "Not an obstacle, but it is worth mentioning on the call so we bring the right people. It changes the time on site rather than the feasibility." },
      { q: "Can I put a heat pump in?", a: "Sometimes. They need clearance and airflow and they make noise, which matters on a tight Balmain block with close neighbours. We assess it properly rather than assuming." },
      { q: "Will heritage rules affect the replacement?", a: "For a like-for-like swap in the same position, generally not. If the position or flue has to change we will tell you upfront." },
    ],
  },
  {
    suburb: "castle-hill",
    intro:
      "The Hills is the part of Sydney where the full range of hot water options is genuinely open. Large blocks, room beside the house, and space for airflow mean heat pumps and solar are practical here in a way they are not in a terrace or a unit — so the conversation is about what to install rather than what will fit.",
    causes: [
      { title: "Space for heat pumps and solar", body: "Heat pumps need clearance and airflow, and solar needs roof area and a tank position. Hills blocks generally have both, which puts options on the table that inner-suburb homes do not have." },
      { title: "Larger homes, larger demand", body: "Bigger households run out of hot water faster. Sizing matters more here, and the unit that suited the previous owners may not suit you." },
      { title: "Long runs from tank to outlets", body: "In a large home the distance from the unit to the far bathroom means a wait for hot water and heat lost along the way. Placement and insulation are worth getting right." },
    ],
    faqs: [
      { q: "Is a heat pump worth it?", a: "On a Hills block with space and airflow, often yes — running costs are substantially lower than electric storage. They do make noise, so placement relative to bedrooms and neighbours matters." },
      { q: "What size system do I need?", a: "It depends on household size and peak demand rather than house size. We will size it on how many people shower in the morning, not on square metres." },
      { q: "How far out do you travel?", a: "Castle Hill, Baulkham Hills, Kellyville, Bella Vista, Rouse Hill and surrounds. We will give you an honest ETA." },
    ],
  },
  {
    suburb: "marrickville",
    intro:
      "Marrickville is mostly brick bungalows with the hot water unit in an external alcove beside the house, which makes changeovers straightforward. The complication here is age: a lot of these systems went in at the same time and are reaching the end together.",
    causes: [
      { title: "Systems all ageing at once", body: "Homes renovated through the same period have units of similar vintage. Many are now fifteen years or more, which is past where replacement stops being optional." },
      { title: "Original galvanised supply to the unit", body: "An older home may still feed the tank through galvanised pipe that has rusted closed internally. Poor flow at the hot tap is sometimes the pipe rather than the unit." },
      { title: "Space for a heat pump, but neighbours close", body: "Most blocks have room beside the house. Heat pumps make noise, and on a Marrickville block the neighbour's bedroom may be four metres away." },
    ],
    faqs: [
      { q: "My hot water pressure is poor but the tank is fine. Why?", a: "Often the galvanised supply rather than the unit. It rusts closed from the inside and replacing that run in copper restores flow immediately." },
      { q: "How do I know if my unit is about to go?", a: "Rust staining down the tank, water pooling underneath, or hot water running out faster than it used to." },
      { q: "Can you replace it today?", a: "In most cases yes — we carry common units and can usually have hot water back the same day." },
    ],
  },
  {
    suburb: "leichhardt",
    intro:
      "Leichhardt homes generally have space beside the house for an external unit, so the constraint is less about fitting it and more about what suits an older home with a big household and long runs of original pipework.",
    causes: [
      { title: "Long runs to distant bathrooms", body: "Deep blocks and rear extensions mean the far bathroom can be a long way from the tank. That is a wait for hot water and heat lost on the way." },
      { title: "Older supply pipework", body: "Original galvanised runs feeding the unit rust closed internally. Poor flow at the hot tap is sometimes the supply rather than the system." },
      { title: "Room for heat pumps, with caveats", body: "Most blocks have the clearance a heat pump needs. Noise and proximity to a neighbour's window is the thing to check before committing." },
    ],
    faqs: [
      { q: "Why does it take so long for hot water to reach the back bathroom?", a: "Distance from the unit, and sometimes uninsulated pipe. Relocating the unit or insulating the run both help, and we will tell you which is worth doing." },
      { q: "Repair or replace?", a: "Under about eight years, repair usually wins. Past twelve, replacement generally pays for itself in running costs alone." },
      { q: "Is there a call-out fee?", a: "No, at any hour." },
    ],
  },
  {
    suburb: "alexandria",
    intro:
      "Alexandria is warehouse conversions and newer apartments, and hot water here is constrained by what the building allows rather than by what you would prefer. Flue routes, cupboard positions and strata approval decide most of it.",
    causes: [
      { title: "Fixed flue and cupboard positions", body: "In a conversion, services were routed once and cannot easily be changed. What can replace your unit is usually narrower than the catalogue." },
      { title: "Strata approval for anything shared", body: "Where a unit affects a shared flue, riser or common cupboard, the owners corporation is involved. Establishing that early avoids a wasted booking." },
      { title: "No floor waste in internal cupboards", body: "A cylinder with nowhere to drain puts its contents into your floor and the tenancy below when it fails." },
    ],
    faqs: [
      { q: "Do I need strata approval?", a: "If the unit is entirely within your lot, usually not. If it touches a shared flue or riser, usually yes. We check before quoting." },
      { q: "Can I change from electric to gas?", a: "Only if gas is available to the lot and a compliant flue route exists. In converted buildings that is often the blocker rather than the cost." },
      { q: "Do you work on commercial premises?", a: "Yes, including mixed-use buildings." },
    ],
  },
  {
    suburb: "point-piper",
    intro:
      "Hot water in Point Piper is about placement and access. Large homes with multiple bathrooms need real capacity, blocks fall steeply to the water, and where an external unit or flue can sit is often constrained by the building and its outlook.",
    causes: [
      { title: "High demand across multiple bathrooms", body: "Several bathrooms running at once is a sizing question, not a brand question. An undersized system fails at the worst time rather than gradually." },
      { title: "Steep access for the changeover", body: "Getting a cylinder to a plant room down several levels is a genuine logistics exercise, and it belongs in the quote rather than in a surprise on the day." },
      { title: "Placement constrained by the building", body: "Where an external unit or flue can go is limited by outlook, heritage fabric and neighbours. Worth establishing before anything is ordered." },
    ],
    faqs: [
      { q: "How do I size a system for a large home?", a: "On peak simultaneous demand — how many showers run at once on a weekday morning — rather than on floor area. We will work it through with you." },
      { q: "Can you handle difficult access?", a: "Yes. Tell us on the call what is involved and we will bring the right people rather than discovering it on site." },
      { q: "Do you work discreetly?", a: "Yes. Drop sheets down, gear in and out, site left clean." },
    ],
  },
  {
    suburb: "hunters-hill",
    intro:
      "Hunters Hill hot water runs into the same constraint as everything else in the suburb: heritage. Where an external unit, a flue or a solar panel can sit is limited on many properties, and a like-for-like replacement in the existing position is often the simplest path for good reason.",
    causes: [
      { title: "Heritage limits on external units and flues", body: "Placement on a visible elevation can be constrained. A replacement in the existing position usually avoids the question entirely." },
      { title: "Solar and heat pump visibility", body: "Roof-mounted solar and external heat pumps are exactly the kind of addition heritage controls consider. Worth checking before committing to a system." },
      { title: "Older homes with long pipe runs", body: "Large old houses mean distance between the unit and the far bathroom, which is a wait for hot water and heat lost along the way." },
    ],
    faqs: [
      { q: "Can I install solar hot water on a heritage property?", a: "Sometimes, depending on visibility from the street and the specific listing. It is worth checking with council before you commit to a system." },
      { q: "Is a like-for-like replacement simpler?", a: "Generally yes. Keeping the existing position and flue avoids the approval question altogether." },
      { q: "Do you do pre-purchase plumbing inspections?", a: "Yes, and on a house this old it is worth doing." },
    ],
  },
  {
    suburb: "mosman",
    intro:
      "Mosman hot water is a logistics job as much as a plumbing one. Blocks step down toward the harbour, plant rooms are often below the house, and getting a cylinder in and the old one out can involve more stairs than most suburbs.",
    causes: [
      { title: "Steep access and stairs", body: "Carrying a cylinder down several levels is a multi-person job. It belongs in the quote rather than as a surprise on the day." },
      { title: "Large homes with high demand", body: "Multiple bathrooms running simultaneously is a sizing question. The right capacity matters more than the badge on the tank." },
      { title: "Placement affecting neighbours", body: "Heat pumps make noise and blocks here are close. Where the unit sits relative to a neighbour's window is worth thinking about before it goes in." },
    ],
    faqs: [
      { q: "The unit is down two flights. Can you still replace it?", a: "Yes. Mention it when you call so we bring the right crew — it affects time on site rather than whether it can be done." },
      { q: "Are heat pumps noisy?", a: "They run like an air conditioner outdoor unit. On a close Mosman block, placement relative to bedrooms and boundaries is worth planning rather than assuming." },
      { q: "Can you replace it the same day?", a: "Usually, provided access is workable and we have the right unit." },
    ],
  },
  {
    suburb: "chatswood",
    intro:
      "Chatswood divides between apartment towers where the cupboard and the flue decide everything, and family homes a few streets out where there is space for whatever you want. Which of those you are in changes the conversation completely.",
    causes: [
      { title: "Tower cupboards with no room to grow", body: "Units in confined internal cupboards can usually only be replaced with something of similar footprint. Upgrading capacity is often not available." },
      { title: "Access in occupied buildings", body: "Getting a cylinder in and out of a tower means lifts, corridors and building management. It is a booking question as much as a plumbing one." },
      { title: "Houses with room for anything", body: "A few streets from the centre, blocks have space and airflow for heat pumps and roof area for solar. The full range of options is genuinely open." },
    ],
    faqs: [
      { q: "Can you replace a unit in an apartment cupboard?", a: "Yes. Access is the constraint rather than the work. We assess it and tell you upfront if anything unusual is needed." },
      { q: "Do I need building management approval?", a: "For lift access and corridor protection, usually yes. We will tell you what to arrange before the booking." },
      { q: "Is a heat pump worth it in a house here?", a: "On a block with space and airflow, generally yes on running costs. Placement relative to bedrooms matters for noise." },
    ],
  },
  {
    suburb: "lane-cove",
    intro:
      "Lane Cove homes usually have room beside the house for an external unit, so the constraints are mild. What is worth thinking about here is heavy tree cover — it affects solar viability more than people expect, and it fills anything with a fan or a vent.",
    causes: [
      { title: "Tree cover limiting solar", body: "Roof-mounted solar hot water needs sun. Heavy canopy over a Lane Cove roof can make it a poor investment where it would be a good one two suburbs away." },
      { title: "Leaf litter around external units", body: "Heat pumps and anything with a fan or vent collect leaf debris here faster than in open suburbs, which affects efficiency and servicing intervals." },
      { title: "Steep blocks toward the river", body: "Access down a falling block adds time to a changeover, which is better in the quote than in a surprise." },
    ],
    faqs: [
      { q: "Is solar hot water worth it under trees?", a: "Often not. It needs genuine sun on the roof, and heavy canopy undermines it. A heat pump is usually the better electric option on a shaded block." },
      { q: "Do heat pumps need maintenance?", a: "Some. Keeping the intake clear of leaf litter matters more here than in an open suburb." },
      { q: "Can you replace it the same day?", a: "In most cases yes." },
    ],
  },
];

export function getHotWaterArea(suburb: string): ServiceArea | undefined {
  return hotWaterAreas.find((a) => a.suburb === suburb);
}

export function hotWaterSuburbLinks(): { slug: string; label: string }[] {
  return areaLinks(hotWaterAreas);
}
