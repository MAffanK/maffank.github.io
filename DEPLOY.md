# Deploying this site

This is a **static site** (HTML/CSS/JS, no build step). Total size ~27 MB after
media optimization, so it works on any free host.

Recommended host: **Netlify** (free, fast, and handles the contact form for you).

---

## Option A — Netlify via Git (recommended, auto-updates on every push)

1. Create a GitHub repo and push this folder:
   ```sh
   git add -A
   git commit -m "Portfolio site ready for deploy"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
2. Go to https://app.netlify.com → **Add new site → Import an existing project**.
3. Pick GitHub → choose the repo.
4. Build settings: leave **Build command empty**, **Publish directory = `.`** (the
   included `netlify.toml` already sets this). Click **Deploy**.
5. You get a live URL like `https://<random-name>.netlify.app`.
   Rename it under **Site settings → Change site name**.
6. Every `git push` to `main` now redeploys automatically.

## Option B — Netlify drag-and-drop (no Git, fastest one-off)

1. Go to https://app.netlify.com/drop
2. Drag this whole `website` folder onto the page. Done — instant URL.
   (Downside: to update, you re-drag the folder each time.)

---

## Contact form

The form is already wired for **Netlify Forms**:
- Submissions show up in your Netlify dashboard under **Forms → contact**.
- To get emailed on each submission: **Site settings → Forms → Form notifications
  → Add email notification**.
- No extra code needed. (Not hosting on Netlify? Replace the `<form>` in
  `index.html` with a free [Formspree](https://formspree.io) endpoint instead.)

## Custom domain (optional, ~$10–12/yr)

1. Buy a domain (e.g. Cloudflare Registrar or Namecheap), e.g. `affankhan.com`.
2. In Netlify: **Domain settings → Add a domain** → follow the DNS steps.
3. Netlify provisions free HTTPS automatically.

---

## Still TODO (content)

- Add a **resume PDF** to `assets/docs/` and link it from the hero "View my work"
  area if you want a download button.
- Add images for the three placeholder projects (see `README.md`):
  `assets/img/projects/{topology,bionic-arm,supra}/`.
- Add your **GitHub** URL if you want it in the footer/socials.

## Note on media

Originals were large (≈418 MB). Images and videos were compressed to ≈27 MB total
for fast loading. If you ever need the originals, a backup was made outside the repo
during optimization — copy it somewhere permanent if you want to keep it, as temp
folders get cleared.
