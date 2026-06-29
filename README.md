# Affan Khan — Portfolio

A hand-built static portfolio site. No build step, no frameworks — just HTML, one
CSS file, and a small vanilla JavaScript file. Open `index.html` in a browser to view.

## Structure

```
index.html                 Home (hero, featured work, categories, about, accolades, contact)
academic_projects.html     Academic category listing
personal_projects.html     Personal category listing
acad_top_struct.html       Project: Generative AI for topology optimisation (flagship)
acad_cfd.html              Project: CFD solvers from scratch
acad_aero.html             Project: SAE Aero Design aircraft
acad_bio.html              Project: Compliant bionic arm
acad_supra.html            Project: Supra SAE India

assets/
  css/style.css            All styling (see "Changing the theme" below)
  css/fontawesome-all.min.css + webfonts/   icons (Font Awesome 5)
  js/main.js               nav toggle, scroll reveal, accolades card deck
  img/                     logo, avatar, about, category tiles, accolades, projects/<name>/
  video/                   project videos
  docs/                    resume, certificate & report PDFs
```

## Changing the theme

The whole colour palette lives in the `:root` block at the top of
`assets/css/style.css`. Edit those variables and the entire site updates.
A few ready-made palettes (emerald, amber, dark) are included as comments right
below `:root`. A dark theme is also wired up — add `data-theme="dark"` to the
`<html>` tag to try it.

## Images still needed

Several projects show "coming soon" placeholders because no images exist yet.
Drop files into these folders and swap the placeholder `<div class="media-placeholder">…</div>`
blocks for `<img>` tags:

- `assets/img/projects/topology/`    — generative-design renders, FEA/flow results
- `assets/img/projects/bionic-arm/`  — gripper model, servo setup, stress contours, demo
- `assets/img/projects/supra/`       — sprocket/engine-mount CAD, chassis, track footage
- Personal projects (water-filling system, 3D-printed speaker) — add build photos
  and link them in `personal_projects.html`.

Could also add separate write-up pages for the work experience (Coriolis flow
meter, in-space 3D printer, underwater robot) if you want them as full case studies.
