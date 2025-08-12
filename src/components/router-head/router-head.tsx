import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      
      {/* Performance and SEO Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="origin-when-cross-origin" />
      
      {/* Performance hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preconnect" href="https://trae-api-us.mchost.guru" />
      <link rel="dns-prefetch" href="//trae-api-us.mchost.guru" />
      
      {/* Google Tag Manager */}
      <script dangerouslySetInnerHTML={`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NDJ54799');
      `} />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml" />
      {/* Preload optimizado removido para mejorar rendimiento */}
      
      {/* Critical CSS inline for faster LCP */}
      <style dangerouslySetInnerHTML={`
        @font-face {
          font-family: 'Eagle Lake';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/eaglelake/v24/ptRMTiqbaqZn9NjFKnJeGOiVx1lPBNJX.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: 'Libre Caslon Display';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/librecaslondisplay/v15/TuGOUUFzXI5FBtUq5a8bj6wRbzxTFMX40kFQRx0zjuDt.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        .font-eagle { font-family: 'Eagle Lake', cursive; }
         .font-libre { font-family: 'Libre Caslon Display', serif; }
         
         /* Critical layout styles to prevent forced reflow */
         body { margin: 0; padding: 0; }
         * { box-sizing: border-box; }
         img { max-width: 100%; height: auto; }
         
         /* Critical heading styles */
         h1, h2, h3, h4, h5, h6 {
           font-family: 'Eagle Lake', cursive;
           text-transform: uppercase;
           font-weight: 400;
           margin: 0;
         }
         
         /* Critical text styles */
         p, span, div:not(.heading-font) {
           font-family: 'Libre Caslon Display', serif;
           font-size: 1.125rem;
           text-transform: uppercase;
           line-height: 1.6;
           margin: 0;
         }
      `} />
      
      {/* Preconnect for faster font loading */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.style })}
        />
      ))}

      {head.scripts.map((s) => (
        <script
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.script })}
        />
      ))}
    </>
  );
});
