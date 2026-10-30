# usage: python3 build_pdf.py <report_dir>  -> writes <report_dir>/_print.html
import sys, json, subprocess, re, os
d=sys.argv[1]; m=json.load(open(os.path.join(d,"meta.json")))
md=open(os.path.join(d,"report.md")).read().split("\n")
if md[0].startswith("# "): md=md[1:]
md="\n".join(md).strip()
md=re.sub(r"\n\*Student research for educational purposes only\. Not investment advice\.\*\s*$","",md).rstrip().rstrip("-").rstrip()
md=md.replace("$","\\$")
md=re.sub(r"\n([^|\n][^\n]*)\n\|", r"\n\1\n\n|", md)
body=subprocess.run(["pandoc","-f","gfm","-t","html"],input=md,capture_output=True,text=True,check=True).stdout
body=re.sub(r'(https?://[^\s<"]+)</p>', r'\1</p>', body)
months=["January","February","March","April","May","June","July","August","September","October","November","December"]
def ld(s): y,mo,da=s.split("-"); return f"{int(da)} {months[int(mo)-1]} {y}"
css=open(os.path.join(os.path.dirname(__file__),"print.css")).read()
html=f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><title>{m['title']}</title><style>{css}</style></head><body>
<header class="cover"><p class="kicker">WEEKLY SECTOR SERIES</p><h1>{m['title']}</h1>
<p class="by">{m['author']} | Published: {ld(m['date'])} | Data as of {ld(m['data_as_of'])} | Coverage: {m['coverage']}</p></header>
<main>{body}</main><p class="disc">{m['disclaimer']}</p></body></html>"""
open(os.path.join(d,"_print.html"),"w").write(html)
