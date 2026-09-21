/**
 * What Mr. Clog promises, in one place.
 *
 * The 12 month workmanship term was already committed to — it has been in
 * clause 5 of the Terms of Service the whole time, where nobody reads it. The
 * site's own blog tells people to look for exactly that when choosing a
 * plumber, and then never mentioned that this business offers it. Surfacing it
 * is not a new liability; it is the end of an own goal.
 *
 * The exclusions are the part that matters. Every plumber in Sydney advertises
 * a satisfaction guarantee and almost none says what is not covered, which is
 * why nobody believes any of them. Naming the limits makes the promise
 * credible, and it protects the business: a customer whose roots return eight
 * months after a clear-out cannot reasonably claim they were promised
 * otherwise, because the page said so before they booked.
 *
 * The Australian Consumer Law line is not decoration. A "guarantee" that
 * merely restates rights a customer already has by statute is the kind of
 * thing the ACCC takes an interest in. Saying this sits on top of those rights
 * is both accurate and safer than implying it replaces them.
 *
 * Keep this in step with clause 5 of the Terms of Service. If the term ever
 * changes, both have to change.
 */
export const guarantee = {
  heading: "Our Guarantee",
  intro:
    "Three things we put in writing before you book, and one list of what they do not cover.",
  promises: [
    {
      title: "Fixed price, honoured",
      body: "The price we quote before starting is the price you pay. If we find something that changes the job, we stop and tell you before we touch it.",
    },
    {
      title: "12 months on our workmanship",
      body: "If something we installed or repaired fails because of how we did it, we come back and put it right at no charge.",
    },
    {
      title: "Manufacturer's warranty on parts, claimed by us",
      body: "Anything we supply carries its maker's warranty. If it fails inside that term, we make the claim rather than sending you to chase it.",
    },
  ],
  exclusionsHeading: "What it does not cover",
  exclusions: [
    "A new blockage in a pipe we cleared but did not repair. Clearing roots is not a permanent fix, and we will tell you at the time if relining is what the line actually needs.",
    "Damage caused by misuse, accident, or work carried out by somebody else.",
    "Faults we found, told you about, and you chose not to have fixed.",
  ],
  statutory:
    "This is in addition to your rights under the Australian Consumer Law. Nothing here limits them.",
};
