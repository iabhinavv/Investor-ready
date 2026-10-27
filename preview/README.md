# Investor Ready

**Tagline:** Investor ready, funding ready.

A static site selling fundraising-readiness services to pre-seed to Series A founders. There is no backend and no build step. Open `index.html` in a browser, or publish the folder with GitHub Pages.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page: hero, problem and cost of delay, services (folder tabs, each linking to its page), the 21-Day Sprint, who does the work, pricing, guarantee, comparison, Scorecard, FAQ, booking |
| `investor-ready-sprint.html` | The core offer: value stack, day-by-day plan, guarantee, fit, FAQ |
| `investor-readiness-audit.html` | File 01: the 5-day Audit |
| `corporate-structure.html` | File 02: Delaware flip and holding-company review |
| `cap-table-cleanup.html` | File 03: cap table cleanup, SAFE conversion, option pool |
| `startup-valuation.html` | File 04: valuation methods and round design |
| `startup-financial-model.html` | File 05: investor-grade financial model |
| `pitch-deck-consultant.html` | File 06: pitch deck, written and designed |
| `investor-data-room.html` | File 07: data room and seed data room checklist |
| `due-diligence-preparation.html` | File 08: due-diligence pack |
| `about.html` | About the founder |
| `styles.css` | Shared styles for every page. The colours and fonts follow Country-Ledger; the folder tabs follow the Mining-Consulting site |
| `founder.jpg` | Founder photo used on the About page (640 × 640) |
| `sitemap.xml`, `robots.txt`, `llms.txt` | Search engine and AI-crawler files |
| `SEO-PLAN.md` | Competitor audit, keyword map, page plan and 12-month roadmap |

Each page has its own title, meta description, canonical URL and JSON-LD schema in the `<head>`. The service pages share the same header, footer, guarantee and call-to-action blocks; if you change one of those, change it on every page.

## Site address (canonical URLs)

Canonical links, Open Graph URLs, schema, `sitemap.xml`, `robots.txt` and `llms.txt` all use `https://iabhinavv.github.io/Investor-ready/`. When you connect a custom domain, search and replace that address across every file.

## Contact details and links (same as the mining site)

- Booking (main call to action): https://calendly.com/experimentsav/30min
- Phone and WhatsApp: +233 25 731 9254 (`https://wa.me/233257319254`)
- Email: experimentsav@gmail.com
- Office: 201, Blohum Rd, Accra, Ghana

To change any of these, search and replace across every `.html` file.

## How the interactive parts work

- **Market pricing** (home page, Pricing section). The drop-down swaps the four package prices. Prices live in the `P` object in the script at the bottom of `index.html`. The folder-tab prices, the Sprint value table and the service pages show US prices.
- **Scorecard** (home page). Visitors tick six statements and their score updates live. The "Email us my results" button opens their email app with a message to experimentsav@gmail.com. The message includes the score and every statement they ticked. Score bands: 0–2 Not ready, 3–4 Close, 5–6 Ready.
- **Booking**. Every "Book a call" button links straight to Calendly. The home page also has the Calendly scheduler built into the booking section.

## Prices in use (recommended, not market quotes)

| Package | US | UK | UAE | Singapore | India | Ghana / Nigeria |
|---|---|---|---|---|---|---|
| Investor-Ready Audit | $1,500 | £1,200 | AED 5,500 | S$2,000 | ₹40,000 | $500 |
| 21-Day Investor-Ready Sprint | $18,000 | £14,500 | AED 60,000 | S$22,000 | ₹4,50,000 | $5,000 |
| Raise-Ready Partner (per month) | $6,000 | £4,800 | AED 20,000 | S$7,500 | ₹1,50,000 | $1,500 |
| Investor Relations Desk (per month) | $1,500 | £1,200 | AED 5,000 | S$2,000 | ₹40,000 | $400 |

Sprint stated value: $41,500 (the 8 files at their standalone US prices, $36,500, plus 4 bonuses worth $5,000).

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
