# Affan Khan — Portfolio

A hand-built static portfolio site. No build step, no frameworks — just HTML, one
CSS file, and a small vanilla JavaScript file. Open `index.html` in a browser to view.

## Structure

```
index.html                 Home (hero, featured work, categories, about, accolades, contact)
academic_projects.html     Academic category listing
personal_projects.html     Personal category listing
acad_cfd.html              Project: CFD solvers
acad_aero.html             Project: SAE Aero Design UAV
acad_top_struct.html       Project: Generative design / topology
acad_bio.html              Project: Compliant bionic arm
acad_supra.html            Project: Supra SAE India
pers_turbine.html          Project: CFD + ML turbine pipeline

assets/
  css/style.css            All styling (see "Changing the theme" below)
  css/fontawesome-all.min.css + webfonts/   icons (Font Awesome 5)
  js/main.js               nav toggle, scroll reveal, accolades carousel
  img/                     logo, avatar, about, category tiles, accolades, projects/<name>/
  video/                   project videos
  docs/                    certificate & report PDFs
```

## Changing the theme

The whole colour palette lives in the `:root` block at the top of
`assets/css/style.css`. Edit those variables and the entire site updates.
A few ready-made palettes (emerald, amber, dark) are included as comments right
below `:root`. A dark theme is also wired up — add `data-theme="dark"` to the
`<html>` tag to try it.

## Images still needed

Three projects currently show "coming soon" placeholders because no images exist
yet. Drop files into these folders and swap the placeholder `<div class="media-placeholder">…</div>`
blocks for `<img>` tags:

- `assets/img/projects/topology/`    — generative-design renders, FEA results
- `assets/img/projects/bionic-arm/`  — gripper model, servo setup, stress contours, demo
- `assets/img/projects/supra/`       — component CAD, chassis, track footage

Also optional: a real **profile photo** for the hero/about, and a **resume PDF**
(drop it in `assets/docs/` and link it from the hero button).
