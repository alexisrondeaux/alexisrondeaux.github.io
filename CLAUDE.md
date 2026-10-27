# Alexis Rondeaux: online CV site

Static personal CV site (plain HTML, CSS, JS), deployed with GitHub Pages from `main` at https://alexisrondeaux.github.io. Pushing to `main` publishes the site within 1 to 2 minutes. The owner is not a developer: explain steps in simple French, and ask before pushing anything they did not request.

## Structure
- `content.js`: ALL site text (profile, education, experience, activities, skills, contact config). Text changes go here.
- `main.js`: renders the pages from `content.js`. No text lives here.
- `styles.css`: design. Colors are tokens in `:root` (navy palette, gold accent).
- `index.html`, `experience/*.html`, `activities/*.html`: page shells. Each holds its own `<title>`, meta description and Open Graph tags, which must stay static in the HTML so LinkedIn previews work. Update them when the matching content changes.
- `assets/`: CV PDF (`Alexis_RONDEAUX_CV.pdf`, keep this exact name), photo, `og-image.jpg` (LinkedIn preview), favicon.
- Absolute URLs (`https://alexisrondeaux.github.io`) appear in the HTML heads, `robots.txt` and `sitemap.xml`. Update them all if the domain changes.

## Content rules (set by Alexis, always apply)
- Use only information Alexis provided. Never invent achievements, numbers, dates or locations. If something is missing or unclear, ask first.
- No em dashes or en dashes anywhere in the site text. Use a hyphen with spaces for date ranges ("June - July 2025").
- Site language: English.
- Do not mention the front-office roles Alexis is targeting. The positioning is the master's applications for the Fall 2027 intake.
- No phone number on the site.
- Evernex: do not include the bonus provision forecasting mistake story. The commission figures example is fine.
- Evernex dates: "July - December 2026" (never "expected"). Locations: Evernex Courbevoie, Hexagone Finance Paris, SIPLEC - E.Leclerc Ivry (all France).
- Hexagone training audience: "15-person IT team". Entraide Scolaire Amicale: "recruited and trained 20 mentors".
- TradingView has no detail page (summary card only) until Alexis provides more details.
- Light grammar fixes and restructuring of Alexis's text are allowed, without adding facts.

## Design rules
- Clean, minimal, finance style: navy, white and grey with one gold accent, Inter font.
- Subtle animations only, and respect `prefers-reduced-motion`.
- Must stay fully responsive (recruiters read it on phones) and accessible (contrast, alt text, semantic HTML).

## Contact form
Web3Forms. The access key is in `content.js` (`config.web3formsKey`). It is public by design and the form is registered for `alexisrondeaux.github.io`.

## Before pushing
Preview with `python3 -m http.server 8080`. Check that every page renders, all links work (CV PDF, LinkedIn, navigation, Back to CV) and there is no horizontal scroll at 390px width. Grep the site for em and en dashes.
