# Investor Ready

**Tagline:** Investor ready, funding ready.

A static two-page site selling fundraising-readiness services to pre-seed to Series A founders. There is no backend and no build step. Open `index.html` in a browser, or publish the folder with GitHub Pages.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page: hero, problem, services (folder tabs), the 21-Day Sprint, pricing, guarantee, comparison, Scorecard, FAQ, booking |
| `about.html` | About the founder: story, banking and startup experience, what the experience means for a raise, what we don't do, call to action |
| `styles.css` | Shared styles for both pages. The colours and fonts follow Country-Ledger; the folder tabs follow the Mining-Consulting site |
| `founder.jpg` | Founder photo used on the About page (640 × 640, from the Mining-Consulting site) |

## Contact details and links (same as the mining site)

- Booking (main call to action): https://calendly.com/experimentsav/30min
- Phone and WhatsApp: +233 25 731 9254 (`https://wa.me/233257319254`)
- Email: experimentsav@gmail.com
- Office: 201, Blohum Rd, Accra, Ghana

To change any of these, search and replace across `index.html` and `about.html`.

## How the interactive parts work

- **Market pricing** (home page, Pricing section). The drop-down swaps the four package prices. Prices live in the `P` object in the script at the bottom of `index.html`. The folder-tab prices and the Sprint value table are US only.
- **Scorecard** (home page). Visitors tick six statements and their score updates live. The "Email us my results" button opens their email app with a message to experimentsav@gmail.com. The message includes the score and every statement they ticked. Score bands: 0–2 Not ready, 3–4 Close, 5–6 Ready.
- **Booking**. Every "Book a call" button links straight to Calendly. The home page also has the Calendly scheduler built into the booking section.

## Prices in use (recommended, not market quotes)

| Package | US | UK | UAE | Singapore | India | Ghana / Nigeria |
|---|---|---|---|---|---|---|
| Investor-Ready Audit | $1,500 | £1,200 | AED 5,500 | S$2,000 | ₹40,000 | $500 |
| 21-Day Investor-Ready Sprint | $18,000 | £14,500 | AED 60,000 | S$22,000 | ₹4,50,000 | $5,000 |
| Raise-Ready Partner (per month) | $6,000 | £4,800 | AED 20,000 | S$7,500 | ₹1,50,000 | $1,500 |
| Investor Relations Desk (per month) | $1,500 | £1,200 | AED 5,000 | S$2,000 | ₹40,000 | $400 |

Sprint stated value: $42,000 (8 files plus 4 bonuses).

## Content rules

- No investor list and no investor introductions. The site must not promise to connect founders with investors.
- Do not describe the founder as a qualified CA. "CA Industrial" is used only as the HSBC job title.
- We are not a law firm, broker-dealer or registered valuer. Legal, securities and statutory valuation work goes to licensed partners.
- Never promise that a founder will raise money. The guarantee covers the preparation only.

## Check before launch

The About page uses these facts from the Mining-Consulting site and your own notes. Confirm each one is accurate as written:

- [ ] HSBC, CA Industrial: finance consolidation across Europe, China, Mexico and the USA
- [ ] Internal audit programmes, including work with IIM Rohtak, and banking audit
- [ ] Private equity methods applied to financial due diligence
- [ ] Co-founded Vayoo.store; founded Taxido
- [ ] Client business worth $25K+ a month won at Shoogloo Network
- [ ] Building an affiliate network across African markets, based in Accra
- [ ] Founder name shown as Abhinav Verma

Not on the site yet:

- **Testimonials and case studies.** Add them once you have real ones; never use placeholders.
- **Full 40-question Scorecard.** This needs a form tool such as Google Forms or Tally.

## Publish on GitHub Pages

1. Push this folder to a repository, with `index.html` at the repo root.
2. Go to Settings, then Pages. Set the source to deploy from the `main` branch, folder `/ (root)`.
3. The site appears at `https://<username>.github.io/<repo>/`.
