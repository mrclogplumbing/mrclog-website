import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Mr. Clog Plumbing",
  description: "Terms of Service for Mr. Clog Plumbing. Read our terms and conditions for plumbing services across Sydney.",
};

export default function TermsPage() {
  return (
    <section className="section-container py-20 pt-28">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-logo font-extrabold text-4xl mb-2" style={{ color: "var(--color-dark)" }}>
          Terms of Service
        </h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: April 2025</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="font-logo font-bold text-xl mb-3" style={{ color: "var(--color-dark)" }}>1. Services</h2>
            <p>
              Mr. Clog Plumbing provides residential and commercial plumbing services across Sydney, NSW. All work is carried out by licensed plumbers in accordance with the Plumbing and Drainage Act 2011 (NSW) and Australian Standards.
            </p>
          </div>

          <div>
            <h2 className="font-logo font-bold text-xl mb-3" style={{ color: "var(--color-dark)" }}>2. Quotes and Pricing</h2>
            <p>
              We provide upfront pricing before commencing any work. Quotes are based on the information available at the time of inspection. If the scope of work changes (e.g., additional issues discovered), we will advise you and obtain approval before proceeding with additional work.
            </p>
          </div>

          <div>
            <h2 className="font-logo font-bold text-xl mb-3" style={{ color: "var(--color-dark)" }}>3. Call-Out Fee</h2>
            <p>
              We charge a $0 call-out fee. This means there is no charge simply for us attending your property. Charges apply to the work performed, as quoted.
            </p>
          </div>

          <div>
            <h2 className="font-logo font-bold text-xl mb-3" style={{ color: "var(--color-dark)" }}>4. Payment</h2>
            <p>
              Payment is due upon completion of work unless otherwise agreed in writing. We accept cash, card, and bank transfer. For larger jobs, a deposit may be required prior to commencement.
            </p>
          </div>

          <div>
            <h2 className="font-logo font-bold text-xl mb-3" style={{ color: "var(--color-dark)" }}>5. Warranty</h2>
            <p>
              All workmanship is warranted for 12 months from the date of completion. Manufacturer warranties apply to fixtures and materials supplied by us. Warranty does not cover damage caused by misuse, accidental damage, or work performed by others.
            </p>
          </div>

          <div>
            <h2 className="font-logo font-bold text-xl mb-3" style={{ color: "var(--color-dark)" }}>6. Liability</h2>
            <p>
              Our liability is limited to the value of the work performed. We are not liable for consequential losses arising from plumbing failures beyond our reasonable control. We carry full public liability insurance.
            </p>
          </div>

          <div>
            <h2 className="font-logo font-bold text-xl mb-3" style={{ color: "var(--color-dark)" }}>7. Access</h2>
            <p>
              You agree to provide safe and reasonable access to the work area. We reserve the right to decline or cease work if conditions are unsafe.
            </p>
          </div>

          <div>
            <h2 className="font-logo font-bold text-xl mb-3" style={{ color: "var(--color-dark)" }}>8. Cancellations</h2>
            <p>
              Please give us as much notice as possible if you need to cancel or reschedule. For standard bookings, cancellations with less than 2 hours notice may incur a fee.
            </p>
          </div>

          <div>
            <h2 className="font-logo font-bold text-xl mb-3" style={{ color: "var(--color-dark)" }}>9. Governing Law</h2>
            <p>
              These terms are governed by the laws of New South Wales, Australia. Any disputes will be resolved under NSW jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="font-logo font-bold text-xl mb-3" style={{ color: "var(--color-dark)" }}>10. Contact</h2>
            <p>
              For questions about these terms:<br />
              Mr. Clog Plumbing<br />
              Email: <a href="mailto:info@mrclog.com.au" style={{ color: "var(--color-brand-blue)" }}>info@mrclog.com.au</a><br />
              Phone: <a href="tel:+61291398945" style={{ color: "var(--color-brand-blue)" }}>(02) 9139 8945</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
