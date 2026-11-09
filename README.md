# SUHAYON Official Website

A plain HTML/CSS/JavaScript website. No build step, no server.

## Files
- `index.html` — the website (all pages)
- `data.js` — **all content you can edit** (text, committee, activities, announcements, gallery, members)
- `logo.jpg`, `logo-wide.jpg` — your logo
- `constitution.pdf` — official constitution (replace with a new file of the same name to update)
- `images/` — put activity, gallery, and member photos here

## How to edit
Open `data.js` and change the text between the quotes. Examples for activities, announcements, gallery, and members are written inside the file; copy one, remove the `//`-style comment marks, and edit.
**Standing Committee:** when it is formed, write each name in `standing.members`.

## Deploy free on GitHub Pages
1. Create a GitHub account and a new public repository (for example `suhayon`).
2. Upload all files and the `images` folder (Add file → Upload files).
3. Settings → Pages → Source: "Deploy from a branch" → `main` → `/ (root)` → Save.
4. After about a minute the site is live at `https://YOUR-USERNAME.github.io/suhayon/`.
You can edit `data.js` directly in the GitHub web editor (pencil icon) from a phone or tablet.

## Search engines
Submit your site address in Google Search Console (free) to appear in search. Results take days to weeks.

## What this version does NOT have
- No admin login, database, or member registration. A visitor cannot change the site, because content lives in your repository.
- The contact form opens the visitor's email app (no server). A real form service can be added later.
- Parents' names and home addresses are intentionally not in the public files.
