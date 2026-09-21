export type ReviewTag =
  | "Emergency"
  | "Blocked Drains"
  | "Hot Water"
  | "Bathroom"
  | "Gas"
  | "Leak Detection"
  | "General";

export interface Review {
  name: string;
  initial: string;
  /** Relative time as shown on Google, e.g. "4 days ago" */
  when: string;
  tag: ReviewTag;
  text: string;
}

/**
 * Customer reviews, shared by the reviews page and the review strips on
 * service and location pages. Keep the text faithful to the Google original.
 */
export const reviews: Review[] = [
  {
    name: "Samantha M.",
    initial: "S",
    when: "4 days ago",
    tag: "General",
    text:
      "Absolute legend. Turned up on time, sorted the problem quickly and didn&apos;t charge a fortune. Super easy to deal with and cleaned up after the job too. Will definitely be using him again and would happily recommend to anyone needing a good plumber.",
  },
  {
    name: "Stephano A.",
    initial: "S",
    when: "1 week ago",
    tag: "General",
    text:
      "Excellent service from start to finish. Chris was professional, knowledgeable, and took the time to explain everything clearly before starting the job. He worked efficiently, kept the area clean, and made sure everything was done correctly. You can tell he takes pride in his work.",
  },
  {
    name: "Danny D.",
    initial: "D",
    when: "1 week ago",
    tag: "General",
    text:
      "Turned up on time and honest service, couldn&apos;t ask for much more.",
  },
  {
    name: "Daniel M.",
    initial: "D",
    when: "1 month ago",
    tag: "General",
    text:
      "Amazing customer service. Affordable. Jorge was an amazing tech! Highly recommend!",
  },
  {
    name: "Christ Angel S.",
    initial: "C",
    when: "2 months ago",
    tag: "General",
    text:
      "Mr. Jorge was so fast and so efficient. He did a clean job and was so nice.",
  },
  {
    name: "Chris M.",
    initial: "C",
    when: "a year ago",
    tag: "Emergency",
    text:
      "The team at Mr Clog were an absolute pleasure to deal with. I had my hot water tank burst at 4am and called them to assist with this issue and they were very prompt in coming out by 5am and having this issue rectified. Would use again and recommend highly.",
  },
  {
    name: "Joseph C.",
    initial: "J",
    when: "a year ago",
    tag: "Blocked Drains",
    text:
      "Matt and Anthony from Mr Clog have to be the best plumbing company in Sydney. I called for a blocked drain. I was left impressed by the quality of service I received. They arrived on time, guided me through every step and took care of the problem.",
  },
  {
    name: "Andrew B.",
    initial: "A",
    when: "a year ago",
    tag: "Blocked Drains",
    text:
      "Had the team from Mr Clog come to check out a problem I had with my sewer. They were able to rectify the problem and get it sorted out straight away at a very reasonable price. Will definitely be using the team again. Thanks Mr Clog!",
  },
  {
    name: "Braeden C.",
    initial: "B",
    when: "a year ago",
    tag: "Blocked Drains",
    text:
      "Anthony and Matthew are top blokes! Had them out to unblock our sewer. They came out on time, were extremely tidy and were a pleasure to deal with.",
  },
  {
    name: "Elias K.",
    initial: "E",
    when: "a year ago",
    tag: "Hot Water",
    text:
      "Had trouble with our hot water system for weeks and was unable to figure out the issue. Matt and Anthony came out the same day I enquired and the issue was resolved within an hour. Couldn&apos;t recommend enough!",
  },
  {
    name: "Valerie",
    initial: "V",
    when: "a year ago",
    tag: "Hot Water",
    text:
      "I would highly recommend Anthony and Matthew from Mr Clog plumbing. They were easy and trustworthy to deal with and fixed my leaking hot water system in no time.",
  },
  {
    name: "Jason",
    initial: "J",
    when: "a year ago",
    tag: "Leak Detection",
    text:
      "Just want to thank the team from Mr Clog for coming out today for an emergency water leak under my house. They were quick, reliable and fair priced. Thanks guys.",
  },
  {
    name: "Vania T.",
    initial: "V",
    when: "a year ago",
    tag: "Bathroom",
    text:
      "I want to acknowledge the high level of plumbing service I received. It was outstanding, and the bathroom-ware was exactly what I was looking for. I was so pleased with Matt from Mr Clog and the team. They went above and beyond to help me.",
  },
  {
    name: "Michael G.",
    initial: "M",
    when: "a year ago",
    tag: "Bathroom",
    text:
      "Excellent service and attention to detail. Matt was a pleasure to deal with throughout the whole process of upgrading our apartment.",
  },
  {
    name: "Isabelle B.",
    initial: "I",
    when: "a year ago",
    tag: "Blocked Drains",
    text:
      "Matt was fantastic in his work resolving ongoing drainage issues and providing practical solutions in a professional and friendly manner. Would definitely engage Mr Clog services for future plumbing needs.",
  },
  {
    name: "Simon D.",
    initial: "S",
    when: "a year ago",
    tag: "General",
    text:
      "Matt from Mr Clog was on time, professional, knowledgeable and lovely to interact with. Happy demeanour. Thoroughly looked at the issue to determine the best way to deal with it. A pleasure to deal with him and his company.",
  },
  {
    name: "Sydney W.",
    initial: "S",
    when: "a year ago",
    tag: "Emergency",
    text:
      "Just want to thank the team at Mr Clog. I urgently needed my toilet unclogged. Matt and Anthony came on the day and thankfully unclogged my toilet! Thanks once again.",
  },
  {
    name: "Matthew G.",
    initial: "M",
    when: "a year ago",
    tag: "General",
    text:
      "I&apos;ve used Matt and Anthony on multiple plumbing jobs at our house and can&apos;t speak highly enough of them. They walk through all the options and explain pros/cons to let you make a decision and always at a reasonable price. Will definitely use them again for my next plumbing work.",
  },
];

/** Reviews matching a tag, falling back to the most recent ones. */
export function reviewsForTag(tag: ReviewTag, count = 3): Review[] {
  const matching = reviews.filter((r) => r.tag === tag);
  if (matching.length >= count) return matching.slice(0, count);
  const rest = reviews.filter((r) => r.tag !== tag);
  return [...matching, ...rest].slice(0, count);
}
