import type { ServiceArea } from "@/lib/service-areas";
import { areaLinks } from "@/lib/service-areas";

/**
 * Pipe relining, suburb by suburb.
 *
 * Relining repairs a damaged drain from the inside, through existing access
 * points, instead of digging it up. Whether that is worth paying for depends
 * almost entirely on what sits over the pipe — and that is what genuinely
 * varies between suburbs. Shallow sandstone in Balmain, heritage controls in
 * Hunters Hill, a tiled terrace in Point Piper and a landscaped garden in
 * Mosman all push the same repair in the same direction for different reasons.
 *
 * Where relining is not obviously the right answer, these pages say so. On an
 * open flat block in Rockdale, excavating can genuinely be cheaper, and a page
 * that pretends otherwise is selling rather than advising. In the Hills, soil
 * movement sometimes separates a pipe past the point where a liner will hold.
 * Saying that costs a little work and keeps the rest of the site honest.
 */
export const pipeReliningAreas: ServiceArea[] = [
  {
    suburb: "newtown",
    intro:
      "Newtown is close to the ideal case for relining. Terraces have no side access, share walls with the neighbours on both sides, and drain through earthenware that roots have been working on for a century. Excavating that line usually means going through the house or through a courtyard that cannot be put back cheaply.",
    causes: [
      { title: "No practical excavation route", body: "With no side access, reaching a damaged section by digging means lifting a courtyard, a hallway floor, or both. Relining runs through existing access points and leaves all of it in place." },
      { title: "Root intrusion at every joint", body: "A liner presents a continuous surface with no joints for roots to enter. On a terrace line that has blocked repeatedly, that is the difference between an annual problem and a finished one." },
      { title: "Heritage and conservation fabric", body: "Much of Newtown sits in a conservation area. Repairing from inside the pipe avoids disturbing original brickwork, tiling and paving that would be costly to reinstate." },
    ],
    faqs: [
      { q: "Do you need to dig up my courtyard?", a: "In most cases no. Relining works through existing access points, which is precisely why it suits terraces with no side path." },
      { q: "How long will a reline last?", a: "A properly installed liner is rated for decades and carries a structural design life well beyond the clay it is repairing. It will outlast the rest of the original line." },
      { q: "How do I know my drain needs relining rather than clearing?", a: "A camera inspection. If the pipe is cracked, has separated joints or roots entering at a joint, clearing is temporary. We show you the footage rather than asking you to take our word for it." },
    ],
  },
  {
    suburb: "marrickville",
    intro:
      "Marrickville's brick bungalows sit on clay sewer laid between the wars, and most of it has cracked joints and root intrusion by now. Blocks here are generally open enough that excavation is possible, so the question is genuinely one of cost and disruption rather than access.",
    causes: [
      { title: "Interwar clay at the end of its life", body: "Earthenware laid in the 1920s and 30s has settled, cracked and taken on roots. A liner seals the whole run rather than repairing one joint and waiting for the next." },
      { title: "Drainage under established gardens and paving", body: "Most of these homes have had decades of landscaping, paving and extensions built over the original line. Reinstating that is usually the larger part of an excavation bill." },
      { title: "Sewer and stormwater in the same yard", body: "Where both run through a small back yard, digging for one risks the other. Relining avoids opening ground near a line you were not intending to touch." },
    ],
    faqs: [
      { q: "Is relining cheaper than replacing the pipe?", a: "Usually, once reinstatement is counted — the paving, lawn or concrete that has to go back. On a completely open run with nothing over it, excavation can work out similar, and we will say so." },
      { q: "Can you reline a stormwater line as well as sewer?", a: "Yes. The method is the same and it suits stormwater lines that have cracked or been invaded by roots." },
      { q: "How long does it take?", a: "Most residential sections are done in a day: inspect, jet the line clean, install the liner, re-inspect before we leave." },
    ],
  },
  {
    suburb: "leichhardt",
    intro:
      "If a drain in Leichhardt has been cleared three times, relining is the conversation worth having. Mature gardens over century-old clay is the defining combination here, and it is the case relining exists for — the pipe is structurally there, but every joint is an open invitation.",
    causes: [
      { title: "Repeat root intrusion", body: "Clearing a root-invaded line works and then stops working. A liner has no joints to enter, so the cycle ends rather than resetting." },
      { title: "Established gardens over the line", body: "Decades of planting sit above the original drainage. The plumbing in an excavation is rarely the expensive part; putting the garden back is." },
      { title: "Long runs to the connection", body: "Deep blocks mean long drainage runs and more joints along them. Relining a whole section at once is more economic than chasing one failure at a time." },
    ],
    faqs: [
      { q: "I have had this drain cleared three times. Is relining worth it?", a: "Almost certainly. Three clears in a few years means the cause is structural, and you are paying for the same problem repeatedly rather than fixing it once." },
      { q: "Will the pipe be narrower afterwards?", a: "Slightly, but a liner is smooth where old earthenware is rough, so flow is generally as good or better than the pipe it replaced." },
      { q: "What if a section has collapsed completely?", a: "Then a liner has nothing to bond to and that section needs excavating. The camera shows this clearly and we will tell you before you commit to anything." },
    ],
  },
  {
    suburb: "balmain",
    intro:
      "Balmain is where relining earns its keep most obviously. Sandstone sits close to the surface across the peninsula, so excavating a damaged drain means breaking rock — slow, loud, and expensive in a way it simply is not on a clay block a few suburbs west.",
    causes: [
      { title: "Shallow sandstone", body: "Rock near the surface turns a routine trench into rock breaking. Relining goes through existing access points and never touches the ground, so the geology stops being a cost." },
      { title: "Heritage fabric and paving", body: "Sandstone flagging, original brick paving and heritage frontages are expensive and sometimes impossible to reinstate. Repairing from inside the pipe leaves them alone." },
      { title: "Steep blocks and restricted access", body: "Getting an excavator onto a steep harbourside block is often impractical. A relining rig works from an access point and needs nothing more." },
    ],
    faqs: [
      { q: "My yard is solid rock. Can the drain still be fixed?", a: "Yes, and this is exactly the situation relining is for. Shallow sandstone is the single biggest reason it makes sense in Balmain." },
      { q: "Does relining need council approval?", a: "Generally not, as no excavation is involved. Where a section does need digging near a heritage structure we will tell you upfront what is required." },
      { q: "How disruptive is it?", a: "Far less than digging. Equipment works from an access point, most jobs are a day, and there is no trench, no spoil and nothing to reinstate." },
    ],
  },
  {
    suburb: "surry-hills",
    intro:
      "Relining in Surry Hills is usually the only practical repair. Terraces share drainage, buildings sit hard against each other, and a great deal of the ground is covered by paving, courtyards or commercial floor space that cannot simply be opened up.",
    causes: [
      { title: "No ground to excavate", body: "Between shared walls, paved courtyards and commercial ground floors, there is frequently nowhere to dig. Relining works within the pipe and needs no open ground at all." },
      { title: "Shared lines serving several properties", body: "Digging up a line that serves multiple terraces means agreement from several owners. A liner installed through an access point avoids the negotiation as well as the trench." },
      { title: "Grease and age together", body: "Old narrow pipe plus decades of grease from ground-floor kitchens. A liner presents a smooth surface that grease clings to far less readily than rough old earthenware." },
    ],
    faqs: [
      { q: "The line is shared with next door. Who pays for relining?", a: "It depends where the damaged section sits. We locate it to a measured depth and distance, which is what establishes responsibility before anyone commits to the cost." },
      { q: "Can relining be done in a strata building?", a: "Yes, and it is often the preferred option because there is no excavation and minimal disruption to other residents. We provide footage and a report for the committee." },
      { q: "Will my business have to close?", a: "Rarely for a full day. We work around trading hours where we can and will give you a realistic window before booking." },
    ],
  },
  {
    suburb: "alexandria",
    intro:
      "Alexandria's converted warehouses sit on concrete slabs, and that changes the arithmetic completely. Breaking a slab to reach a drain is expensive, slow and disruptive to everybody else in the building, which is why relining is usually the first thing considered rather than the last.",
    causes: [
      { title: "Drainage under concrete slabs", body: "Industrial buildings put drainage under substantial slabs. Cutting one is a structural job and a reinstatement job before it is a plumbing job." },
      { title: "Shared and retrofitted lines", body: "Conversions often run waste through original industrial pipework serving several tenancies. Relining repairs it without taking anyone else's floor apart." },
      { title: "Old oversized pipework", body: "Some legacy lines are larger than residential standard and made of materials no longer used. A camera establishes what is actually there, because it determines whether a liner is even the right product." },
    ],
    faqs: [
      { q: "Can you reline a pipe under a concrete slab?", a: "Yes — that is one of the strongest cases for it. No slab cutting, no structural work, no reinstatement." },
      { q: "What if the pipe is a material you cannot reline?", a: "Some legacy pipework is not suitable, which is why we camera first. If a liner will not work we will tell you and quote the alternative honestly." },
      { q: "Do you work on commercial premises?", a: "Yes, including mixed-use buildings and tenancies with commercial kitchens." },
    ],
  },
  {
    suburb: "point-piper",
    intro:
      "The drainage faults in Point Piper are unremarkable. What is not unremarkable is what sits on top of them — tiled terraces, pool surrounds, sandstone paving and mature landscaping where the cost of putting the surface back comfortably exceeds the cost of the plumbing underneath.",
    causes: [
      { title: "Reinstatement cost dominates", body: "An excavation here is priced by what has to be rebuilt, not by the metre of pipe replaced. Relining removes that line from the quote entirely." },
      { title: "Drainage under pools, terraces and paving", body: "Original lines run beneath structures added decades later. Reaching them by digging means dismantling work that was expensive to build." },
      { title: "Steep blocks and restricted access", body: "Machinery access on a harbourside block stepping down to the water is often impractical. A relining rig works from an access point and needs no vehicle on the property." },
    ],
    faqs: [
      { q: "Can the drain be repaired without lifting the terrace?", a: "In most cases yes. That is the entire argument for relining here — the pipe repair is routine, and avoiding the reinstatement is where the money is saved." },
      { q: "How long will the work take?", a: "Most residential sections are done in a day, with no trench left open and nothing to rebuild afterwards." },
      { q: "Do you work discreetly?", a: "Yes. Drop sheets down, equipment in and out the same day, and the site left clean." },
    ],
  },
  {
    suburb: "hunters-hill",
    intro:
      "Hunters Hill has some of the oldest drainage still in service in Sydney, sitting under some of its most protected buildings. Between heritage controls and shallow sandstone, digging up a damaged line here is genuinely difficult — which makes relining less a preference than the practical option.",
    causes: [
      { title: "Heritage controls on excavation", body: "Much of the suburb is heritage-listed or in a conservation area. Repairing a pipe from the inside avoids ground disturbance near protected structures and the approvals that come with it." },
      { title: "Nineteenth-century earthenware", body: "Drainage laid in the 1800s has cracked joints and long-established root intrusion throughout. Relining seals a whole run rather than chasing one joint at a time." },
      { title: "Shallow rock and mature gardens", body: "Sandstone close to the surface and gardens as old as the houses. Both make excavation slow, and both are avoided entirely by working within the pipe." },
    ],
    faqs: [
      { q: "Can pipe that old really be relined?", a: "In most cases yes, provided the line is still structurally continuous. Where a section has collapsed it needs excavating, and the camera footage shows which you have." },
      { q: "Will heritage approval be needed?", a: "For relining, generally not — there is no excavation. For any section that does need digging near a heritage structure we will tell you upfront what is required." },
      { q: "Should I inspect the drains before renovating?", a: "In a suburb with housing this old, yes. Finding a collapsed section after the bathroom is tiled is considerably more expensive than finding it beforehand." },
    ],
  },
  {
    suburb: "mosman",
    intro:
      "Relining in Mosman is almost always about the garden rather than the pipe. Faults are ordinary — roots, dropped joints, cracked clay — but they sit under mature landscaping on steep blocks where excavating and reinstating is the part that costs real money.",
    causes: [
      { title: "Established gardens over old drainage", body: "Decades of planting and terracing above original clay. The plumbing is routine; rebuilding a landscaped Mosman garden afterwards is not." },
      { title: "Steep blocks limiting machinery", body: "Getting an excavator onto a block stepping down toward the harbour is frequently impractical. A relining rig works from an access point and needs no vehicle access at all." },
      { title: "Retaining walls and terracing over the line", body: "Drainage often runs beneath or behind retaining structures. Excavating near them is a structural question as well as a plumbing one." },
    ],
    faqs: [
      { q: "Will you damage my garden?", a: "Relining works through existing access points, so in most cases nothing is dug up at all. That is the main reason it suits this suburb." },
      { q: "Can you reline under a retaining wall?", a: "Yes, and it is usually preferable — excavating near a retaining structure raises questions relining avoids entirely." },
      { q: "How do I know relining is the right repair?", a: "A camera inspection first, every time. If the pipe has collapsed rather than cracked, we will tell you it needs digging instead." },
    ],
  },
  {
    suburb: "lane-cove",
    intro:
      "Lane Cove has heavier root intrusion than almost anywhere we work — mature bushland trees over drainage a century old. Relining here is less about avoiding a trench and more about ending a problem that clearing simply will not end.",
    causes: [
      { title: "Persistent root intrusion", body: "Clearing a root-invaded line in Lane Cove rarely holds more than a season or two. A liner has no joints for roots to enter, which is the only permanent answer short of replacement." },
      { title: "Large trees you would rather keep", body: "Removing the tree is the alternative fix and usually not one anyone wants. Relining lets the tree stay and the drain work." },
      { title: "Bushland gardens and steep blocks", body: "Established native gardens on ground falling toward the river. Excavation is disruptive and reinstatement is slow." },
    ],
    faqs: [
      { q: "Do I have to remove the tree?", a: "No. A relined section presents no joints for roots to enter, so the tree and the drain can coexist. That is usually the outcome people want." },
      { q: "How long does a reline last?", a: "Decades. A liner is rated well beyond the remaining life of the clay around it." },
      { q: "What does it cost compared with clearing?", a: "More up front and less over five years if you are clearing annually. We will show you the camera footage so you can judge which you are actually facing." },
    ],
  },
  {
    suburb: "chatswood",
    intro:
      "Chatswood splits between large family homes with mature trees over old clay, and apartment towers where common drainage runs under slabs and through risers. Relining suits both, for quite different reasons.",
    causes: [
      { title: "Mature trees over original clay", body: "The streets around the centre have large established trees and first-generation earthenware. Root intrusion here recurs until the section is lined." },
      { title: "Drainage under driveways and slabs", body: "Many homes have concrete driveways and extensions built over the original line. Cutting and reinstating concrete is usually the largest part of an excavation quote." },
      { title: "Common lines in apartment buildings", body: "In towers, relining repairs shared drainage without opening slabs or disrupting residents, which matters when the alternative affects everyone in the building." },
    ],
    faqs: [
      { q: "Can you reline under a concrete driveway?", a: "Yes, and it is one of the clearest cases for it — no cutting, no reinstatement, no cracked join to look at afterwards." },
      { q: "Do you work with strata and building managers?", a: "Yes. We provide camera footage and a written report with the fault located to a depth and distance so a committee can act on it." },
      { q: "How long is the drain out of use?", a: "Usually a matter of hours on the day. We will give you a realistic window before booking." },
    ],
  },
  {
    suburb: "bondi",
    intro:
      "Relining in Bondi is mostly apartment work. Blocks here are decades old, common drainage runs under slabs and through shared risers, and the alternative — opening up a slab in an occupied building — is disruptive in a way owners and committees will do a great deal to avoid.",
    causes: [
      { title: "Common drainage under slabs", body: "Excavating in an apartment block means slab work and disruption to residents. Relining repairs the line from inside and leaves the building intact." },
      { title: "Old narrow pipework", body: "Original lines are narrower than modern ones and rougher inside. A liner presents a smooth surface that resists build-up better than the pipe it repairs." },
      { title: "Sand and salt shortening pipe life", body: "Coastal conditions and sand ingress wear drainage faster than inland. Relining extends the life of a line without replacing it." },
    ],
    faqs: [
      { q: "Can common property drainage be relined?", a: "Yes, and in an apartment block it is usually the preferred option — no slab cutting and far less disruption to residents." },
      { q: "Who authorises the work in a strata building?", a: "The owners corporation for common property. We provide footage and a written report so the committee has something definite to decide on." },
      { q: "How long does the building lose drainage for?", a: "Typically hours rather than days, and we will confirm the window before anyone is notified." },
    ],
  },
  {
    suburb: "randwick",
    intro:
      "Randwick divides between older streets with established gardens over original clay, and denser housing around the hospital and university. Relining suits the first group most clearly, where the pipe is sound but every joint has roots in it.",
    causes: [
      { title: "Root intrusion in the older streets", body: "Federation homes with mature trees over earthenware. Recurring blockages are structural, and a liner ends them rather than postponing them." },
      { title: "Gardens, paving and extensions over the line", body: "Decades of building over the original drainage run. Reinstating paving and landscaping is usually the bigger half of an excavation bill." },
      { title: "Shared lines in denser housing", body: "Where several dwellings drain into one line, relining repairs it without an excavation that would affect all of them." },
    ],
    faqs: [
      { q: "How do I know whether to clear or reline?", a: "A camera inspection. Roots entering at a joint in an otherwise sound pipe is the textbook case for relining; a one-off blockage just needs clearing." },
      { q: "Is relining messy?", a: "Far less than digging. Work runs from an access point, there is no trench and no spoil to remove." },
      { q: "Do you guarantee the work?", a: "A properly installed liner is rated for decades. We re-inspect on camera before leaving and you see the finished line." },
    ],
  },
  {
    suburb: "hurstville",
    intro:
      "Hurstville's post-war homes are on original clay sewer with seventy years of root growth around it, and most of them have concrete driveways and additions built over the line. That combination is what usually makes relining the cheaper repair here.",
    causes: [
      { title: "Concrete driveways over the drainage", body: "Cutting and reinstating a driveway frequently costs more than the pipe repair underneath it. Relining removes that from the quote." },
      { title: "Roots in post-war clay", body: "Earthenware laid in the fifties and sixties with street trees above. Root intrusion recurs until the affected section is lined." },
      { title: "Common lines in newer towers", body: "In the high-rise, relining repairs shared drainage without slab work or disruption to residents." },
    ],
    faqs: [
      { q: "Will you have to cut my driveway?", a: "In most cases no. Relining works from existing access points and leaves concrete untouched, which is usually the deciding factor here." },
      { q: "How much does relining cost?", a: "It depends on the length and condition of the section. We camera first and quote a fixed price before any work starts." },
      { q: "Can you do it in an apartment building?", a: "Yes, and we provide footage and a written report for the strata committee." },
    ],
  },
  {
    suburb: "rockdale",
    intro:
      "Rockdale is one of the places where relining is not automatically the answer, and it is worth saying so. Blocks here are often flat and open with little over the drainage run, which means excavating can genuinely work out comparable. What decides it is what sits on top.",
    causes: [
      { title: "Open blocks can make digging viable", body: "Where a line runs under lawn with nothing built over it, excavation is straightforward and reinstatement is cheap. On those jobs we will tell you digging is the better value." },
      { title: "Driveways, slabs and additions change that", body: "Where concrete, a garage or an extension sits over the line, relining is usually cheaper once reinstatement is counted." },
      { title: "Low ground and groundwater", body: "Low-lying ground can mean water in an open trench, which slows excavation and adds cost. Relining is unaffected by it." },
    ],
    faqs: [
      { q: "Is relining always the better option?", a: "No. On an open flat block with nothing over the pipe, digging can be comparable or cheaper, and we will say so rather than selling you the more expensive method." },
      { q: "How do you decide which to recommend?", a: "Camera inspection first, then we price both where both are viable and show you the difference." },
      { q: "Can stormwater lines be relined?", a: "Yes — the method is the same and it suits cracked or root-invaded stormwater as well as sewer." },
    ],
  },
  {
    suburb: "castle-hill",
    intro:
      "The Hills is the one place where relining needs a caveat. Reactive clay moves whatever is buried in it, and where that movement has pulled a joint fully apart or dropped a section, a liner has nothing continuous to bond to. Often it still works. Sometimes it does not, and it is better to know before paying for it.",
    causes: [
      { title: "Soil movement, and its limits", body: "Reactive clay cracks pipe and separates joints. A liner repairs cracks and minor separations well; a fully dropped section needs excavating, and the camera shows which you have." },
      { title: "Long runs on large blocks", body: "Big homes mean long drainage runs with many joints. Lining a whole section at once is more economic than repairing failures one at a time." },
      { title: "Landscaping, driveways and pools over the line", body: "Newer estates have substantial paving, driveways and pools built over drainage. Reinstatement is the expensive half of any excavation." },
    ],
    faqs: [
      { q: "Will relining hold if the soil keeps moving?", a: "A liner is more flexible than the clay pipe around it and tolerates movement better. Where a section has already separated completely it needs excavating instead — we will tell you which you have." },
      { q: "My drain blocks but I am careful. Why?", a: "In the Hills that usually points to soil movement cracking the pipe rather than anything you have done. It is a structural fault, and clearing will not keep it clear." },
      { q: "Do you camera before quoting?", a: "Always. On reactive clay it is the only way to know whether a liner is the right product." },
    ],
  },
  {
    suburb: "bankstown",
    intro:
      "Bankstown homes sit on generous blocks with original clay sewer running a long way to the connection, usually under a concrete driveway or a slab added at some point along the way. Relining tends to win here on reinstatement cost rather than on access.",
    causes: [
      { title: "Concrete over the line", body: "Driveways, garages and slab additions built over original drainage. Cutting and replacing concrete is frequently the larger part of the bill." },
      { title: "Clay sewer past its service life", body: "Seventy-year-old earthenware with cracked joints and root intrusion throughout. Lining a full section beats repairing one joint and waiting for the next." },
      { title: "Long runs to the connection", body: "Deep blocks mean more pipe and more joints. A single lined section covers what would otherwise be several separate repairs." },
    ],
    faqs: [
      { q: "Is it worth relining an old house?", a: "If the pipe is structurally sound but has cracked joints and roots, yes — usually cheaper than excavating and it ends the blockages." },
      { q: "Will the driveway need cutting?", a: "In most cases no, which is generally what makes relining the cheaper option here." },
      { q: "How long does it take?", a: "Most residential sections are a single day, including inspection, cleaning, lining and a final camera check." },
    ],
  },
  {
    suburb: "coogee",
    intro:
      "Coogee relining is apartment work more often than not. Blocks are dense, common drainage runs under slabs, and opening one up in an occupied building affects everybody — which is why committees reach for relining first.",
    causes: [
      { title: "Common drainage under slabs", body: "Excavating in a block means slab work and disruption to every resident. A liner repairs the line from inside and leaves the building alone." },
      { title: "Narrow original pipework", body: "Older blocks were plumbed to a smaller standard and the pipe is rough inside. A liner is smooth and resists build-up better." },
      { title: "Sand and coastal wear", body: "Sand ingress and salt shorten the life of drainage near the beach. Relining extends a line's service life without replacing it." },
    ],
    faqs: [
      { q: "Can common property be relined?", a: "Yes, and in an apartment block it is usually preferred — no slab cutting and far less disruption." },
      { q: "Who decides, me or strata?", a: "Common property is the owners corporation's. We provide camera footage and a report so the committee has something definite." },
      { q: "How long is drainage unavailable?", a: "Typically hours, not days, and we confirm the window before residents are notified." },
    ],
  },
  {
    suburb: "maroubra",
    intro:
      "Maroubra is post-war brick with original clay sewer and, in most cases, a concrete driveway or slab sitting somewhere over the run. Relining usually wins on what does not have to be rebuilt afterwards.",
    causes: [
      { title: "Concrete and paving over the line", body: "Driveways and slab extensions built over original drainage. Cutting and reinstating them is frequently the larger cost." },
      { title: "Roots in seventy-year-old clay", body: "Mature street trees over first-generation earthenware. Blockages recur until the section is lined." },
      { title: "Established gardens", body: "Decades of planting above the drainage run, which excavation disturbs and relining does not." },
    ],
    faqs: [
      { q: "How do I know if my pipe can be relined?", a: "A camera inspection. A cracked or root-invaded line that is still structurally continuous is the standard case; a collapsed section needs digging." },
      { q: "Is it guaranteed?", a: "A properly installed liner is rated for decades, and we re-inspect on camera before leaving so you see the finished line." },
      { q: "Will you cut the driveway?", a: "Usually not — avoiding that is normally what makes relining the cheaper option." },
    ],
  },
  {
    suburb: "manly",
    intro:
      "Manly relining is split between older apartment blocks with common drainage under slabs, and cottages and semis where the line runs under paving added at some point in the last fifty years. Neither is an easy excavation.",
    causes: [
      { title: "Common lines in older blocks", body: "Many Manly blocks run their original shared drainage. Relining repairs it without slab work or disrupting other apartments." },
      { title: "Paving and courtyards over the line", body: "Small blocks are heavily paved. Lifting and reinstating that is usually the larger part of an excavation quote." },
      { title: "Coastal wear on old pipe", body: "Sand ingress and salt shorten drainage life near the beach. A liner extends it without replacement." },
    ],
    faqs: [
      { q: "Can you reline in an apartment block?", a: "Yes, and it is normally the least disruptive option for everyone in the building." },
      { q: "Do you travel to the Northern Beaches?", a: "Yes. Travel is longer than the inner suburbs and we will give you an honest ETA rather than a standard one." },
      { q: "Is there a call-out fee?", a: "No — none at any hour, any day." },
    ],
  },
  {
    suburb: "campsie",
    intro:
      "Campsie is interwar houses and mid-century walk-up blocks, most of them on their original drainage. In the blocks, relining avoids taking apart common areas; in the houses, it avoids the driveway.",
    causes: [
      { title: "Shared drainage in walk-up blocks", body: "Common lines serving several apartments. Relining repairs them without excavating shared ground or disrupting residents." },
      { title: "Concrete over house drainage", body: "Driveways and slab additions built over the original run. Reinstatement is usually the bigger half of a dig." },
      { title: "Root intrusion in interwar clay", body: "Earthenware laid between the wars with decades of tree growth above it. Blockages recur until the section is lined." },
    ],
    faqs: [
      { q: "Who pays in a strata building?", a: "Common property is the owners corporation's. We locate the fault precisely and provide a report so it is not a matter of opinion." },
      { q: "How long does relining take?", a: "Most residential sections are a single day from inspection to final camera check." },
      { q: "Can you reline a shared line?", a: "Yes. It is often the only practical repair where several dwellings drain into one pipe." },
    ],
  },
  {
    suburb: "cronulla",
    intro:
      "Cronulla drainage takes a beating from sand and salt, and much of the suburb is apartment stock where excavation means slab work. Relining extends the life of a line rather than replacing it, which is usually the more sensible spend here.",
    causes: [
      { title: "Coastal wear on old drainage", body: "Sand ingress and salt shorten pipe life near the beach. A liner adds decades without replacing the run." },
      { title: "Common drainage in apartment blocks", body: "Opening a slab in an occupied building is disruptive to everybody. Relining repairs from inside and leaves the building intact." },
      { title: "Paving and pool surrounds over the line", body: "Heavily paved blocks where reinstatement is expensive and slow." },
    ],
    faqs: [
      { q: "Does sand damage a relined pipe?", a: "Far less than old earthenware. A liner is smooth and continuous, so sand and silt pass through rather than catching on rough joints." },
      { q: "Can you reline under a pool surround?", a: "Yes, and avoiding lifting it is usually the entire reason the method pays for itself." },
      { q: "Do you cover the whole Shire?", a: "Yes — Cronulla, Caringbah, Miranda, Sutherland and surrounds." },
    ],
  },
  {
    suburb: "miranda",
    intro:
      "Miranda is post-war brick on solid blocks with established gardens and, almost always, a concrete driveway over part of the drainage run. Straightforward relining country: the pipe is usually sound, the joints are not.",
    causes: [
      { title: "Roots at the joints", body: "Mature planting over sixty-year-old earthenware. A liner has no joints to enter, which ends the cycle rather than resetting it." },
      { title: "Driveways and paving over the run", body: "Cutting and reinstating concrete is frequently the largest part of an excavation. Relining removes it from the quote." },
      { title: "Settled joints from ground movement", body: "Decades of settlement pull joints apart. A liner bridges them provided the pipe is still continuous." },
    ],
    faqs: [
      { q: "Clear it again or reline it?", a: "If it has blocked more than twice, relining is usually cheaper across a few years. The camera footage shows you what you are actually dealing with." },
      { q: "Will it narrow the pipe?", a: "Slightly, but a liner is smooth where old clay is rough, so flow is generally as good or better." },
      { q: "Same-day service?", a: "Inspection usually yes; the lining itself is booked once you have seen the footage and agreed the price." },
    ],
  },
  {
    suburb: "ryde",
    intro:
      "Ryde is established gardens and post-war brick over original clay, with newer apartment stock closer to Macquarie Park. In the houses relining avoids the garden and the driveway; in the blocks it avoids the slab.",
    causes: [
      { title: "Roots in original clay", body: "Established gardens over drainage laid decades ago. Recurring blockages are structural and a liner is what ends them." },
      { title: "Driveways and extensions over the line", body: "Concrete built over the original run at some point in the last fifty years. Reinstating it is the expensive half of a dig." },
      { title: "Common lines near Macquarie Park", body: "In newer apartment stock, relining repairs shared drainage without slab work or disruption." },
    ],
    faqs: [
      { q: "Do you cover Macquarie Park?", a: "Yes — Ryde, West Ryde, Macquarie Park, Eastwood and surrounds." },
      { q: "How long does a reline last?", a: "Decades. It is rated well beyond the remaining life of the pipe around it." },
      { q: "Do you camera first?", a: "Always, and you see the footage before agreeing to anything." },
    ],
  },
  {
    suburb: "parramatta-cbd",
    intro:
      "Parramatta has high-rise over ground that moves. In the towers, relining repairs common drainage without slab work. In the older streets around Harris Park, reactive clay cracks pipe the same way it does further out — with the same caveat about how far a liner can bridge.",
    causes: [
      { title: "Common drainage in high-rise", body: "Excavating in a tower means slab work and disruption to many residents. Relining repairs the line from inside." },
      { title: "Soil movement in the older streets", body: "Reactive clay cracks pipe and separates joints. A liner repairs cracks well; a fully dropped section needs digging, and the camera shows which." },
      { title: "Paving and development over old lines", body: "Decades of building over original drainage. Reinstatement is frequently the larger cost." },
    ],
    faqs: [
      { q: "Can common property drainage be relined?", a: "Yes, and in a tower it is usually the only practical repair. We provide footage and a report for the committee." },
      { q: "Will a liner hold on moving soil?", a: "It is more flexible than the clay around it and tolerates movement better. Where a section has already separated completely it needs excavating instead." },
      { q: "How quickly can you inspect?", a: "Usually within 30–60 minutes for an urgent look, 24/7, with no call-out fee." },
    ],
  },
];

export function getPipeReliningArea(suburb: string): ServiceArea | undefined {
  return pipeReliningAreas.find((a) => a.suburb === suburb);
}

export function pipeReliningSuburbLinks(): { slug: string; label: string }[] {
  return areaLinks(pipeReliningAreas);
}
