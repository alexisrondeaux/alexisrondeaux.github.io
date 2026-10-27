# Alexis Rondeaux: online CV

A static site (HTML, CSS and a little JavaScript). No build step, no backend, free to host.

```
index.html                 Home page (the CV)
experience/*.html          One page per internship
activities/*.html          One page per extracurricular activity
content.js                 ALL THE TEXT OF THE SITE (edit this file)
main.js                    Turns content.js into pages (no need to touch)
styles.css                 Design (colors at the top, in :root)
assets/                    CV PDF, photo, preview image, favicon
404.html, robots.txt, sitemap.xml, .nojekyll
```

## 1. Updating the text

Open `content.js` and edit the text between the quotes. Save, then push to GitHub (step 3). The site updates in about a minute.

- **New CV:** replace `assets/Alexis_RONDEAUX_CV.pdf` and keep the exact same file name.
- **New photo:** replace `assets/alexis-rondeaux.jpg` (480x600) and `assets/alexis-rondeaux@2x.jpg` (960x1200).
- **Page titles and the link preview text** (what LinkedIn shows) live at the top of each `.html` file, in `<title>` and `<meta name="description">`. They must stay in the HTML so LinkedIn can read them.
- To preview locally: in this folder, run `python3 -m http.server 8080` and open http://localhost:8080.

## 2. Contact form (Web3Forms, free)

1. Go to https://web3forms.com.
2. Under "Create your Access Key", enter **rondeauxalexis17@gmail.com** and click "Create Access Key".
3. Check your Gmail inbox (and spam folder) for an email from Web3Forms with a key that looks like `a1b2c3d4-....`.
4. Open `content.js`. Near the top, replace `YOUR_WEB3FORMS_ACCESS_KEY` with your key, keeping the quotes:
   ```js
   web3formsKey: "a1b2c3d4-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
   ```
5. Push to GitHub, open your live site and send yourself a test message.

The key is meant to be public (it only allows sending to your inbox). The free plan includes 250 messages per month. Until the key is set, the form tells visitors to email you directly. The mailto link next to the form always works.

## 3. Deploy on GitHub Pages (free)

**First time only**

1. Create a free account at https://github.com if you don't have one. Pick your username carefully: your address will be `https://USERNAME.github.io`.
2. Click **New repository**. Name it exactly `USERNAME.github.io` (replace USERNAME with your GitHub username), set it to **Public**, and click **Create repository**.
3. On the new repository page, click **uploading an existing file**. Drag in **everything inside** the `alexis-rondeaux-site` folder (the files and the `assets`, `experience` and `activities` folders, not the outer folder itself). Click **Commit changes**.
   - `.nojekyll` is a hidden file and may not show up for dragging. That's fine, the site works without it.
4. Go to **Settings > Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then click **Save**.
5. After 1 to 2 minutes, your site is live at `https://USERNAME.github.io`.

**Fix the absolute links (once).** The preview image and canonical links use `https://alexisrondeaux.github.io`. If your address is different, replace that text in every `.html` file plus `robots.txt` and `sitemap.xml`. In VS Code: Edit > Replace in Files. In a terminal:

```bash
grep -rl "alexisrondeaux.github.io" . | xargs sed -i '' 's#https://alexisrondeaux.github.io#https://YOUR-REAL-ADDRESS#g'   # macOS
grep -rl "alexisrondeaux.github.io" . | xargs sed -i 's#https://alexisrondeaux.github.io#https://YOUR-REAL-ADDRESS#g'      # Linux
```

**Later updates:** on GitHub, open the file, click the pencil icon, edit, and click **Commit changes**. Or use "Add file > Upload files" to replace a file.

**Check the LinkedIn preview:** paste your URL into https://www.linkedin.com/post-inspector/. If LinkedIn shows an old preview, run it through the inspector again to refresh it.

### Alternative: Vercel

1. Push the site to a GitHub repository (any name).
2. On https://vercel.com, sign in with GitHub, click **Add New > Project** and import the repository.
3. Framework preset: **Other**. Leave the build command empty and the output directory as root. Click **Deploy**.
4. You get a `something.vercel.app` address. Replace the `alexisrondeaux.github.io` links with it, as described above.

## 4. Custom domain (later)

1. Buy a domain, for example `alexisrondeaux.com`, from Cloudflare, OVH, Namecheap or Google/Squarespace Domains (about 10 to 15 EUR per year).
2. **GitHub Pages:** go to repository **Settings > Pages > Custom domain**, enter `alexisrondeaux.com` and click **Save**. GitHub creates a `CNAME` file for you.
3. At your domain registrar, add these DNS records:
   | Type  | Name | Value |
   |-------|------|-------|
   | A     | @    | 185.199.108.153 |
   | A     | @    | 185.199.109.153 |
   | A     | @    | 185.199.110.153 |
   | A     | @    | 185.199.111.153 |
   | CNAME | www  | USERNAME.github.io |
4. Wait for DNS to update (from a few minutes up to 24 hours). Then in Settings > Pages, tick **Enforce HTTPS**.
5. Replace `https://alexisrondeaux.github.io` with `https://alexisrondeaux.com` in the files (see step 3), push, and refresh the LinkedIn Post Inspector.

**Vercel:** go to Project > **Settings > Domains**, add your domain, and copy the DNS records Vercel shows you into your registrar.
