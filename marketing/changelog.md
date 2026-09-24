# Site changelog

Every change the agents make, newest first. The monthly SEO pass uses the
dates here to judge whether a change worked, so every published change
gets a line. Prefixes: blog, web, refresh, revert.

- 2026-09-24 web: site speed - hero photo on /, /services/* and suburb-service pages served lighter on phones (sizes + quality), Google Analytics library now loads after the page (lazyOnload), home service-area map no longer ships as client JS (owner approved, site review 24 Sep item 1)
- 2026-09-24 web: /locations/sydney-cbd vs /locations/sydney-cbd-city and /locations/parramatta vs /locations/parramatta-cbd - region pages now "Sydney CBD & Inner City" / "Parramatta & Surrounding Suburbs", suburb pages the city-centre cores; new titles, H1s, metas, intros and a cross-link callout on each (owner approved)
- 2026-09-24 web: titles and meta descriptions across the sitemap - all titles now 60 characters or fewer (brand suffix shortened or dropped when it doesn't fit, src/lib/seo.ts), all descriptions 160 or fewer, incl. blocked-drains/hot-water/pipe-relining suburb templates, 17 blog posts, offers, reviews, services (owner approved)
- 2026-09-24 web: removed "Sydney's #1 Plumber" and "Sydney's Most Trusted Plumbers" - home title/H1, layout metadata, OG/Twitter and Plumber schema now say "Local Sydney Plumbers" with the Google rating and count from reviews-summary.ts (owner approved)
- 2026-09-24 web: /services/strata-and-commercial-plumbing - new service page (strata managers, body corporates, apartment blocks, offices, retail, hospitality; FAQs; related links); linked from suburb pages whose titles mention strata/commercial and from /services/backflow-prevention (owner confirmed Mr Clog does this work)
- 2026-09-24 web: /contact - "Get a Quote: Jump to the Form" and call buttons at the top on phones/tablets; Type of Job list adds 24 Hour Plumber, Toilet Cistern Replacement, Strata & Commercial Plumbing (field name and existing options unchanged; owner approved)
- 2026-09-24 web: internal links - /locations lists every suburb page under its region (from the data); region pages list their suburb pages; each suburb page links to up to 4 other suburb pages in its region (existing blocked-drains/hot-water/relining links kept) (owner approved)
- 2026-09-24 web: BreadcrumbList JSON-LD on all /locations/ pages, matching a new visible breadcrumb (Service Areas / Region / Suburb) (backlog 1)
- 2026-09-24 web: BreadcrumbList JSON-LD on all /services/ pages, matching a new visible breadcrumb (Services / Service) (backlog 3)
- 2026-09-24 web: colour contrast - buttons, links and blue text use the deeper brand blue #0068C0 (was #1A9FFF, 2.8:1); sky blue kept for icons, glows and eyebrow text on dark backgrounds; small grey text darkened; blog CTA "btn-outline-white" buttons were undefined (dark text on dark panel) and now render as white outline buttons (owner approved)
- 2026-09-24 web: / (home hero) - fixed page spilling past the screen edge on phones (menu + call icon were off-screen); written-enquiry reply time set to 2 hours everywhere (was 30 minutes on home, contact form, offer pages; owner approved)
- 2026-09-23 web: /services/24-hour-plumber - new service page for nights, weekends and public holidays, cross-linked with /services/emergency-plumbing (target: "24 hour plumber sydney", "after hours plumber sydney"; owner approved)
- 2026-09-23 web: /services/toilet-cistern-replacement - new service page, cross-linked with /services/taps-and-toilets and the two toilet posts (target: "toilet cistern replacement"; owner approved)
- 2026-09-23 blog: added /blog/hot-water-not-working (target query: "hot water not working"; owner approved)
- 2026-09-23 web: job stories system (owner approved) - no visible change until first upload
- 2026-09-23 web: /contact form - optional urgency choice (owner approved)
- 2026-09-23 web: QuoteForm - optional urgency choice (owner approved)
- 2026-09-23 web: /locations/dee-why - new suburb page for Dee Why under /locations/northern-beaches (owner-approved batch of 15)
- 2026-09-23 web: /locations/bondi-junction - new suburb page for Bondi Junction under /locations/eastern-suburbs (owner-approved batch of 15)
- 2026-09-23 web: /locations/paddington - new suburb page for Paddington under /locations/eastern-suburbs (owner-approved batch of 15)
- 2026-09-23 web: /locations/north-sydney - new suburb page for North Sydney under /locations/lower-north-shore (owner-approved batch of 15)
- 2026-09-23 web: /locations/crows-nest - new suburb page for Crows Nest under /locations/lower-north-shore (owner-approved batch of 15)
- 2026-09-23 web: /locations/sydney-cbd-city - new suburb page for Sydney CBD under /locations/sydney-cbd (owner-approved batch of 15)
- 2026-09-23 web: /locations/blacktown - new suburb page for Blacktown under /locations/western-sydney (owner-approved batch of 15)
- 2026-09-23 web: /locations/penrith - new suburb page for Penrith under /locations/western-sydney (owner-approved batch of 15)
- 2026-09-23 web: /locations/liverpool - new suburb page for Liverpool under /locations/liverpool-fairfield (owner-approved batch of 15)
- 2026-09-23 web: /locations/campbelltown - new suburb page for Campbelltown under /locations/macarthur (owner-approved batch of 15)
- 2026-09-23 web: /locations/hornsby - new suburb page for Hornsby under /locations/north-shore (owner-approved batch of 15)
- 2026-09-23 web: /locations/epping - new suburb page for Epping under /locations/ryde-macquarie-park (owner-approved batch of 15)
- 2026-09-23 web: /locations/strathfield - new suburb page for Strathfield under /locations/western-sydney (owner-approved batch of 15)
- 2026-09-23 web: /locations/burwood - new suburb page for Burwood under /locations/western-sydney (owner-approved batch of 15)
- 2026-09-23 web: /locations/glebe - new suburb page for Glebe under /locations/inner-west (owner-approved batch of 15)
- 2026-09-23 blog: added /blog/braided-flexi-hose-failure (target query: "braided flexi hose failure")
- 2026-09-23 blog: added /blog/toilet-leaking-at-the-base (target query: "toilet leaking at the base")
- 2026-09-22 owner: Put the guarantee where customers can read it
- 2026-09-22 owner: Finish the hot water suburb pages
- 2026-09-22 owner: Add pipe relining pages for 25 suburbs
- 2026-09-22 owner: Add blocked drain pages for 25 suburbs
- 2026-09-22 owner: Say what the $0 call-out fee actually means
- 2026-09-21 owner: Add 23 suburb pages under the existing region pages
- 2026-09-21 owner: Remove three more invented reviews, and settle on one response time
- 2026-09-21 owner: Put Matthew's burst pipe repair on emergency plumbing
- 2026-09-21 owner: Remove a photo I captioned wrongly
- 2026-09-21 owner: Give kitchen plumbing a hero, and finish the gutter sequence
- 2026-09-21 owner: Photograph every service page we have a photo for
- 2026-09-21 owner: Put a real job behind the homepage headline
