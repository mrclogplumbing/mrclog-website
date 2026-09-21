import { CheckCircleIcon } from "@/components/ui/ServiceIcons";
import { guarantee } from "@/lib/guarantee";

/**
 * The guarantee, including its exclusions.
 *
 * The exclusions are shown as prominently as the promises rather than being
 * tucked into a footnote. That is the point of the section — anyone can claim
 * a satisfaction guarantee, and stating the limits is what makes this one
 * worth reading.
 */
export default function Guarantee() {
  return (
    <section className="section-container py-16 md:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
            In Writing
          </p>
          <h2 className="font-logo font-bold text-3xl md:text-4xl" style={{ color: "var(--color-dark)" }}>
            {guarantee.heading}
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{guarantee.intro}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {guarantee.promises.map((p) => (
            <div key={p.title} className="rounded-2xl p-6 bg-blue-50">
              <CheckCircleIcon size={22} className="mb-3" />
              <h3 className="font-logo font-bold text-lg mb-2" style={{ color: "var(--color-dark)" }}>
                {p.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-6 md:p-8 border border-gray-200 bg-white">
          <h3 className="font-logo font-bold text-lg mb-4" style={{ color: "var(--color-dark)" }}>
            {guarantee.exclusionsHeading}
          </h3>
          <ul className="space-y-3">
            {guarantee.exclusions.map((e) => (
              <li key={e} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                <span
                  className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--color-grey-600)" }}
                  aria-hidden="true"
                />
                {e}
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-5 pt-5 border-t border-gray-100 leading-relaxed">
            {guarantee.statutory}
          </p>
        </div>
      </div>
    </section>
  );
}
