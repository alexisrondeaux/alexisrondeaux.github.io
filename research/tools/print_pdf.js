const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const [dir, pdfName, footer] = process.argv.slice(2);
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file://' + path.resolve(dir, '_print.html'), { waitUntil: 'networkidle' });
  await p.pdf({ path: path.resolve(dir, pdfName), format: 'A4', printBackground: true, displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `<div style="font-size:7px;color:#777;width:100%;padding:0 15mm;display:flex;justify-content:space-between;font-family:DejaVu Sans,Arial"><span>Student research for educational purposes only. Not investment advice.</span><span>${footer} | <span class="pageNumber"></span></span></div>`,
    margin: { top: '16mm', bottom: '18mm', left: '15mm', right: '15mm' } });
  await b.close();
})();
