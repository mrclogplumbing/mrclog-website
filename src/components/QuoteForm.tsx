import { PhoneCallIcon } from "@/components/ui/ServiceIcons";

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";
const FORMSPREE = "https://formspree.io/f/xwvwawnp";

/** Optional urgency choice. Values arrive verbatim in the enquiry email. */
const URGENCY_OPTIONS = [
  "Emergency - need someone now",
  "In the next few days",
  "Just a quote / planning ahead",
];

interface QuoteFormProps {
  /**
   * Where the enquiry came from, e.g. "Blocked Drains" or "Inner West".
   * Submitted as a hidden field so enquiries can be traced to a page.
   */
  source: string;
  /** Heading above the form. */
  heading?: string;
  /** Sub-line under the heading. */
  blurb?: string;
}

/**
 * Short enquiry form for people who would rather type than call.
 *
 * Deliberately only two required fields — name and phone. Every extra
 * required field costs completions, and a phone number is all that is
 * needed to call someone back.
 */
export default function QuoteForm({ source, heading, blurb }: QuoteFormProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
      <h3 className="font-logo font-bold text-2xl mb-2" style={{ color: "var(--color-dark)" }}>
        {heading ?? "Request a Quote"}
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        {blurb ?? "Send a few details and we’ll get back to you with an upfront fixed price. No call-out fee."}
      </p>

      <form action={FORMSPREE} method="POST" className="space-y-4">
        <input type="hidden" name="_subject" value={`Website enquiry — ${source}`} />
        <input type="hidden" name="source" value={source} />

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`qf-name-${source}`} className="block text-sm font-semibold text-gray-700 mb-1.5">
              Name <span style={{ color: "var(--color-brand-blue)" }}>*</span>
            </label>
            <input
              id={`qf-name-${source}`}
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jane Smith"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ ["--tw-ring-color" as string]: "var(--color-brand-blue)" }}
            />
          </div>
          <div>
            <label htmlFor={`qf-phone-${source}`} className="block text-sm font-semibold text-gray-700 mb-1.5">
              Phone <span style={{ color: "var(--color-brand-blue)" }}>*</span>
            </label>
            <input
              id={`qf-phone-${source}`}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="04XX XXX XXX"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ ["--tw-ring-color" as string]: "var(--color-brand-blue)" }}
            />
          </div>
        </div>

        <div>
          <label htmlFor={`qf-suburb-${source}`} className="block text-sm font-semibold text-gray-700 mb-1.5">
            Suburb
          </label>
          <input
            id={`qf-suburb-${source}`}
            name="suburb"
            type="text"
            autoComplete="address-level2"
            placeholder="e.g. Newtown"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
            style={{ ["--tw-ring-color" as string]: "var(--color-brand-blue)" }}
          />
        </div>

        <fieldset>
          <legend className="block text-sm font-semibold text-gray-700 mb-1.5">How urgent is it?</legend>
          <div className="grid sm:grid-cols-3 gap-2">
            {URGENCY_OPTIONS.map((option, i) => (
              <label key={option} htmlFor={`qf-urgency-${source}-${i}`} className="block cursor-pointer">
                <input
                  id={`qf-urgency-${source}-${i}`}
                  type="radio"
                  name="urgency"
                  value={option}
                  className="peer sr-only"
                />
                <span className="flex items-center justify-center text-center min-h-[44px] px-3 py-2 rounded-xl border border-gray-300 text-sm text-gray-700 transition-colors hover:border-[var(--color-brand-blue)] peer-checked:border-[var(--color-brand-blue)] peer-checked:bg-[var(--color-brand-blue)] peer-checked:text-white peer-checked:font-semibold peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-brand-blue)] peer-focus-visible:ring-offset-2">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor={`qf-message-${source}`} className="block text-sm font-semibold text-gray-700 mb-1.5">
            What&rsquo;s the problem?
          </label>
          <textarea
            id={`qf-message-${source}`}
            name="message"
            rows={3}
            placeholder="A short description helps us quote accurately"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
            style={{ ["--tw-ring-color" as string]: "var(--color-brand-blue)" }}
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3.5 rounded-xl font-display font-bold text-white text-sm shadow-sm hover:opacity-90 transition-opacity"
          style={{ background: "var(--color-brand-blue)" }}
        >
          Request My Quote
        </button>

        <p className="text-xs text-center text-gray-500">
          In a hurry?{" "}
          <a href={PHONE_HREF} data-call-cta className="font-semibold inline-flex items-center gap-1" style={{ color: "var(--color-brand-blue)" }}>
            <PhoneCallIcon size={12} />
            Call {PHONE}
          </a>{" "}
          — we answer 24/7.
        </p>
      </form>
    </div>
  );
}
