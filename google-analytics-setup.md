// Google Analytics 4 and Google Tag Manager setup
// Add this to your layout.tsx head section

// Google Analytics 4
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 tracking ID

// Google Tag Manager
const GTM_ID = 'GTM-XXXXXXX'; // Replace with your GTM ID

// Add these scripts to your layout.tsx head section:

{/* Google Analytics 4 */}
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `,
  }}
/>

{/* Google Tag Manager */}
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');
    `,
  }}
/>

{/* Google Tag Manager (noscript) */}
<noscript>
  <iframe
    src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
    height="0"
    width="0"
    style={{ display: 'none', visibility: 'hidden' }}
  />
</noscript>
