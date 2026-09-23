import Script from "next/script";

/**
 * Google Analytics 4, plus click tracking on phone links.
 *
 * This is Google's standard gtag.js tag for the Mr. Clog GA4 property
 * (G-J1TRXMCXCQ). NEXT_PUBLIC_GA_ID in Vercel overrides the ID if the
 * property ever changes.
 *
 * Phone tracking: any anchor carrying data-call-cta, or any tel: link,
 * fires a "phone_call_click" event. That is the closest thing to a
 * conversion signal for a business that takes most of its jobs by phone.
 *
 * Form tracking: any form posting to Formspree fires "generate_lead" with
 * the form's hidden source field, so enquiries can be traced to a page.
 * Sent as a beacon because the native form post navigates away.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-J1TRXMCXCQ";

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
      <Script id="ga-phone-tracking" strategy="afterInteractive">
        {`
          document.addEventListener('click', function (e) {
            var a = e.target && e.target.closest ? e.target.closest('a') : null;
            if (!a) return;
            var href = a.getAttribute('href') || '';
            if (a.hasAttribute('data-call-cta') || href.indexOf('tel:') === 0) {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_call_click', {
                  link_url: href,
                  page_path: window.location.pathname,
                });
              }
            }
          }, true);
        `}
      </Script>
      <Script id="ga-form-tracking" strategy="afterInteractive">
        {`
          document.addEventListener('submit', function (e) {
            var f = e.target;
            if (!f || !f.getAttribute) return;
            if ((f.getAttribute('action') || '').indexOf('formspree.io') === -1) return;
            if (typeof gtag === 'function') {
              var src = f.querySelector('input[name="source"]');
              gtag('event', 'generate_lead', {
                form_source: src ? src.value : 'contact',
                page_path: window.location.pathname,
                transport_type: 'beacon',
              });
            }
          }, true);
        `}
      </Script>
    </>
  );
}
