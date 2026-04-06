import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mr. Clog Plumbing",
  description: "Privacy Policy for Mr. Clog Plumbing. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="section-container py-20 pt-28">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-logo font-extrabold text-4xl mb-2" style={{ color: "var(--color-dark)" }}>
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: April 2025</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="font-logo font-bold text-xl mb-3" style={{ color: "var(--color-dark)" }}>1. Introduction</h2>
            <p>
              Mr. Clog Plumbing (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy. This policy explains what personal information we collect, how we use it, and your rights under the Australian Privacy Act 1988 and the Australian Privacy Principles.
            </p>
          </div>

          <div>
            <h2 className="font-logo font-bold text-xl mb-3" style={{ color: "var(--color-dark)" }}>2. Information We Collect</h2>
            <p>We may collect the following personal information:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Name and contact details (phone number, email address)</li>
              <li>Property address for service delivery</li>
              <li>Details about the plumbing work requested</li>
              <li>Payment information (processed securely — we do not store card details)</li>
              <li>Website usage data (via cookies and analytics)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-logo font-bold text-xl mb-3" style={{ color: "var(--color-dark)" }}>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Provide and schedule plumbing services</li>
              <li>Communicate with you about your job or enquiry</li>
              <li>Send invoices and process payments</li>
              <li>Improve our website and services</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-logo font-bold text-xl mb-3" style={{ color: "var(--color-dark)" }}>4. Sharing Your Information</h2>
            <p>
              We do not sell your personal information. We may share it with trusted third parties only as necessary to deliver our services (e.g., payment processors, scheduling software providers). These parties are required to handle your information in accordance with Australian privacy law.
            </p>
          </div>

          <div>
            <h2 className="font-logo font-bold text-xl mb-3" style={{ color: "var(--color-dark)" }}>5. Cookies</h2>
            <p>
              Our website uses cookies to improve your browsing experience and analyse traffic. You can disable cookies in your browser settings, though this may affect some site functionality.
            </p>
          </div>

          <div>
            <h2 className="font-logo font-bold text-xl mb-3" style={{ color: "var(--color-dark)" }}>6. Your Rights</h2>
            <p>
              Under the Australian Privacy Principles, you have the right to access and correct personal information we hold about you. To make a request, contact us at <a href="mailto:info@mrclog.com.au" style={{ color: "var(--color-brand-blue)" }}>info@mrclog.com.au</a>.
            </p>
          </div>

          <div>
            <h2 className="font-logo font-bold text-xl mb-3" style={{ color: "var(--color-dark)" }}>7. Contact Us</h2>
            <p>
              For privacy-related enquiries, contact:<br />
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
