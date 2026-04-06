import { StarIcon } from "@/components/ui/ServiceIcons";

const reviews = [
  {
    name: "Sarah M.",
    time: "2 weeks ago",
    rating: 5,
    text: "Called Mr. Clog at 10pm for a burst pipe — they were at my door within 45 minutes. Incredibly professional, fixed everything on the spot, and the price was exactly what they quoted. Couldn't recommend them more highly.",
  },
  {
    name: "James T.",
    time: "1 month ago",
    rating: 5,
    text: "Had a really stubborn blocked drain that two other plumbers couldn't fix. Mr. Clog came out, used their CCTV camera to find the root cause (literally — tree roots), and sorted it same day. These guys know what they're doing.",
  },
  {
    name: "Michelle K.",
    time: "3 months ago",
    rating: 5,
    text: "Replaced our entire hot water system in a few hours. Anthony was transparent about the options, didn't push us to the most expensive choice, and the work was clean and tidy. Hot water restored by lunchtime. 10/10.",
  },
];

function GoogleLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function SocialProof() {
  return (
    <section className="section-padding" style={{ background: "var(--color-grey-100)" }}>
      <div className="section-container">

        <div className="text-center mb-4">
          <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
            Google Reviews
          </p>
          <h2 className="font-logo font-extrabold text-3xl md:text-4xl mb-4" style={{ color: "var(--color-black)" }}>
            What Sydney Homeowners Say
          </h2>
        </div>

        {/* Overall rating */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => <StarIcon key={i} size={20} />)}
          </div>
          <span className="font-logo font-bold text-lg" style={{ color: "var(--color-black)" }}>5.0</span>
          <span style={{ color: "var(--color-grey-600)" }} className="text-sm">based on 18 Google reviews</span>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => <StarIcon key={i} size={16} />)}
                </div>
                <GoogleLogo />
              </div>
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--color-grey-800)" }}>
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-black)" }}>{review.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--color-grey-600)" }}>{review.time}</p>
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold font-logo flex-shrink-0"
                  style={{ background: "var(--color-brand-blue)" }}
                  aria-hidden="true"
                >
                  {review.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="https://g.page/r/mrclog" target="_blank" rel="noopener noreferrer" className="btn-outline">
            See All Reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
