/* Investor Ready: cookie consent, Google Consent Mode v2 and the Meta Pixel.
   Paste your IDs below. Until a visitor opts in, no Google or Meta tag loads.
   With every ID empty, no banner shows (the site sets no tracking cookies). */
(function () {
  var GOOGLE_ADS_ID = '';  // Google Ads tag, e.g. 'AW-123456789'
  var GA4_ID = '';         // optional Google Analytics 4, e.g. 'G-ABC123XYZ'
  var META_PIXEL_ID = '';  // e.g. '123456789012345'
  var BOOKING_CONVERSION_LABEL = '';  // Google Ads conversion label for "Booked a call", e.g. 'AbC-D_efG-h12_34-567'

  var KEY = 'ir-consent', VERSION = 1, MAX_AGE = 365 * 864e5;
  var hasTags = !!(GOOGLE_ADS_ID || GA4_ID || META_PIXEL_ID);
  var gpc = navigator.globalPrivacyControl === true;

  // Consent Mode defaults: everything denied until the visitor chooses.
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { dataLayer.push(arguments); };
  gtag('consent', 'default', {
    ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
    analytics_storage: 'denied', functionality_storage: 'granted', security_storage: 'granted'
  });
  gtag('set', 'ads_data_redaction', true);

  function read() {
    try {
      var c = JSON.parse(localStorage.getItem(KEY));
      if (c && c.v === VERSION && Date.now() - c.t < MAX_AGE) return c;
    } catch (e) {}
    return null;
  }
  function save(c) {
    c.v = VERSION; c.t = Date.now();
    try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) {}
  }

  var googleLoaded = false, configured = {};
  function loadGoogle(c) {
    if (!googleLoaded) {
      googleLoaded = true;
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + (GOOGLE_ADS_ID || GA4_ID);
      document.head.appendChild(s);
      gtag('js', new Date());
    }
    if (GOOGLE_ADS_ID && c.ads && !configured.ads) { configured.ads = true; gtag('config', GOOGLE_ADS_ID); }
    if (GA4_ID && c.analytics && !configured.ga) { configured.ga = true; gtag('config', GA4_ID); }
  }

  function loadMeta() {
    if (window.fbq) { fbq('consent', 'grant'); return; }
    /* Meta Pixel base code */
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('consent', 'grant');
    fbq('init', META_PIXEL_ID);
    fbq('track', 'PageView');
  }

  function apply(c) {
    var ads = c.ads ? 'granted' : 'denied';
    gtag('consent', 'update', {
      ad_storage: ads, ad_user_data: ads, ad_personalization: ads,
      analytics_storage: c.analytics ? 'granted' : 'denied'
    });
    if ((c.ads && GOOGLE_ADS_ID) || (c.analytics && GA4_ID)) loadGoogle(c);
    if (c.ads && META_PIXEL_ID) loadMeta();
  }

  // Remove the advertising and analytics cookies we can reach, on this domain and its parents.
  function clearCookies() {
    var host = location.hostname.split('.'), domains = [''];
    for (var i = 0; i < host.length - 1; i++) domains.push('; domain=.' + host.slice(i).join('.'));
    document.cookie.split(';').forEach(function (part) {
      var name = part.split('=')[0].trim();
      if (/^(_ga|_gcl|_fbp|_fbc|_gid)/.test(name)) {
        domains.forEach(function (d) { document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + d; });
      }
    });
  }

  function choose(c) {
    var before = read();
    save(c);
    close();
    var withdrew = before && ((before.ads && !c.ads) || (before.analytics && !c.analytics));
    if (withdrew) { clearCookies(); location.reload(); return; }
    apply(c);
  }

  // Banner
  var box;
  function close() { if (box) { box.remove(); box = null; } }
  function open() {
    if (box) return;
    var c = read() || { ads: false, analytics: false };
    box = document.createElement('div');
    box.className = 'consent panel';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-labelledby', 'consent-h');
    box.innerHTML =
      '<h2 id="consent-h">Cookies and ad tracking</h2>' +
      '<p>We use one necessary item to remember your choice. With your permission, we also use Google and Meta cookies to see which ads bring founders to us and to show our ads to people who have visited. Read the <a href="cookies.html">Cookie Policy</a> and <a href="privacy.html">Privacy Policy</a>.</p>' +
      (gpc ? '<p class="consent-note">Your browser sent a Global Privacy Control signal, so advertising stays off unless you turn it on.</p>' : '') +
      '<div class="consent-opts" hidden>' +
        '<label><input type="checkbox" checked disabled><span>Necessary<small>Remembers your cookie choice. Always on.</small></span></label>' +
        (GA4_ID ? '<label><input type="checkbox" data-c="analytics"' + (c.analytics ? ' checked' : '') + '><span>Measurement<small>Google Analytics: counts visits and which pages are used.</small></span></label>' : '') +
        '<label><input type="checkbox" data-c="ads"' + (c.ads ? ' checked' : '') + '><span>Advertising<small>Google Ads and Meta Pixel: ad measurement and remarketing.</small></span></label>' +
      '</div>' +
      '<div class="cta-row">' +
        '<button type="button" class="btn" data-a="reject">Reject all</button>' +
        '<button type="button" class="btn" data-a="accept">Accept all</button>' +
        '<button type="button" class="btn" data-a="choose">Choose</button>' +
      '</div>';
    document.body.appendChild(box);
    var opts = box.querySelector('.consent-opts');
    box.addEventListener('click', function (e) {
      var a = e.target.getAttribute('data-a');
      if (a === 'reject') choose({ ads: false, analytics: false });
      else if (a === 'accept') choose({ ads: true, analytics: !!GA4_ID });
      else if (a === 'choose') {
        if (opts.hidden) { opts.hidden = false; e.target.textContent = 'Save choices'; }
        else {
          var pick = { ads: false, analytics: false };
          opts.querySelectorAll('[data-c]').forEach(function (x) { pick[x.getAttribute('data-c')] = x.checked; });
          choose(pick);
        }
      }
    });
    box.querySelector('[data-a="reject"]').focus({ preventScroll: true });
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('[data-consent-open]');
    if (link) { e.preventDefault(); open(); }
  });

  // A call booked in the embedded Calendly widget counts as a conversion, if the visitor allowed advertising.
  window.addEventListener('message', function (e) {
    if (e.origin !== 'https://calendly.com' || !e.data || e.data.event !== 'calendly.event_scheduled') return;
    var c = read();
    if (!c || !c.ads) return;
    if (GOOGLE_ADS_ID && BOOKING_CONVERSION_LABEL) gtag('event', 'conversion', { send_to: GOOGLE_ADS_ID + '/' + BOOKING_CONVERSION_LABEL });
    if (META_PIXEL_ID && window.fbq) fbq('track', 'Schedule');
  });

  var saved = read();
  if (saved) apply(saved);
  else if (hasTags) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', open);
    else open();
  }
})();
