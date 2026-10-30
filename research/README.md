# Research section: how to publish a new report

Each report lives in its own folder under `research/`, for example `research/sector-overview-02-<sector>/`.
The page reads the text and data from that folder, so publishing a new issue takes four steps.

## 1. Copy the report folder

Create `research/<slug>/` (the slug is the folder name, for example `sector-overview-02-banks`) with the same structure as issue #1:

```
research/<slug>/
  meta.json        title, date (publication), data_as_of (optional), sector, coverage, summary, key takeaways, PDF file name
  report.md        full text of the report (charts written as ![caption](charts/file.png))
  charts/          chart images (PNG)
  <file>.pdf       the PDF named in meta.json ("pdf")
  index.html       the page shell (step 2)
```

Use `-` (hyphen) and never em or en dashes in the text.

## 2. Create the page shell

Copy `research/sector-overview-01-luxury-goods/index.html` into the new folder and update the `<head>` only:
`<title>`, `meta name="description"` (the summary), `link rel="canonical"`, the `og:` tags
(title, description, url, image) and `article:published_time`. These must stay written in the HTML so LinkedIn previews work.
Also update the PDF link inside `<noscript>`.

## 3. Add the report to the list

In `content.js`, add the folder name to `research.reports`:

```js
reports: [
  "sector-overview-02-banks",
  "sector-overview-01-luxury-goods"
]
```

The Research page sorts reports by date (newest first) using `meta.json`, and only lists a report from its `date` onwards.
So you can prepare issues in advance: an issue dated next week stays hidden from the list until that day
(its page still works if someone has the direct link).
To list every report immediately, whatever its date, set `showScheduled: true` in `content.js` (currently on).

## 4. Sitemap, preview, publish

- Add `https://alexisrondeaux.github.io/research/<slug>/` to `sitemap.xml`.
- Preview with `python3 -m http.server 8080` and open http://localhost:8080/research/.
- Check the report page on a phone width, the charts and both "Download PDF" buttons, then push to `main`.

## Markdown supported in report.md

`##` headings (they also build the Contents list), paragraphs, `**bold**`, `*italic*`, `-` and `1.` lists,
pipe tables, images, `---` rules and bare `https://` links (they open in a new tab).
A paragraph that starts with `*` (a table footnote) is shown in small print.
The first `# Title` line and a final "Not investment advice" line are skipped, because the page header shows them.

## Building the PDF (optional)

`research/tools/` holds the scripts used for issues #2 and #3 (needs `pandoc`, Python and Playwright):

```
python3 research/tools/build_pdf.py research/<slug>          # writes research/<slug>/_print.html
node research/tools/print_pdf.js research/<slug> <file>.pdf "Sector Overview #N | Sector | Month Year"
rm research/<slug>/_print.html
```

`chartstyle.py` is the shared matplotlib style for the charts (1280 px wide PNG, title, source line).
