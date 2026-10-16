# Aidan Marley — Engineering Portfolio (draft)

A static site for GitHub Pages. No build step: upload these files to the `amarley-portfolio` repository and the site updates at https://amarley-eng.github.io/amarley-portfolio/.

## Structure

```
index.html                         Home: intro, highlights, project cards, about, skills, education
(parked) sailboat-hull-cfd.html     Removed for now; saved outside the site folder to add back later
projects/wind-turbine-blades.html  Aerodynamics project (with exploded CAD video)
projects/energetiq-thermal.html    Internship, text-first (confidentiality)
projects/lamp-head-fan-attachment.html  Second internship project
projects/translation-stage.html    Instrumentation/controls project
projects/_project-template.html    Copy this for each new project
css/style.css                      All styling (colors at the top; dark mode automatic)
js/site.js                         Shows labeled placeholders for any image/video not yet added
assets/                            Put images, videos and your resume PDF here
```

## Adding figures (no code edits needed)

Every figure already points to a file path. Save your image or video at that exact path and it replaces the placeholder automatically. Until then, the page shows a gray box with a description and the expected filename.

**Resume:** `assets/Aidan_Marley_Resume.pdf` — added (Oct 2026 version; phone number removed for the public site)

**Wind turbine** (`assets/wind-turbine/`)
- `card.jpg` — added (exploded CAD view; home-page card)
- `exploded-assembly.mp4` — added (exploded CAD video; page hero)
- `chord-length.png`, `tubercle-blade.png`, `test-rig.jpg` — added
- `edge-points.png`, `matlab-overlay.png` — added from the earlier PDF portfolio
- `wind-tunnel.mp4` — added (wind tunnel footage)
- `control-sections.png` — added (cross-sections arranged for lofting)
- `matlab-overlay.png` — still needed (MATLAB edge-point overlay)
- `printed-blades.jpg`, `arduino.jpg` — added
- `nx-cfd.png`, `nx-fea.png` — still needed
- `results.png` — still needed (final results only; power output, control vs. tubercle)

**Sailboat hull CFD** (`assets/sailboat-hull-cfd/`)
- `card.jpg`, `hero.jpg`
- `lines-plan.jpg`, `offsets-matlab.png`, `lofted-surface.png (hull model, Siemens NX)`
- `mesh-domain.png`, `mesh-closeup.png`
- `mesh-independence.png`, `convergence.png`
- `resistance-trim-vs-froude.png` (key result, December)
- `wave-low.png`, `wave-transition.png`, `wave-planing.png`

**Energetiq** (`assets/energetiq-thermal/`) — added; generic image only (slide 1 of the internship presentation)
- `card.jpg`

**Fan-cooled lamp head attachment** (`assets/lamp-head-fan-attachment/`) — added; same generic image as the water-cooled card (slide 1)
- `card.jpg`

**Translation stage** (`assets/translation-stage/`)
- Added from the lab report: `card.jpg` (setup photo, also the page hero), `servo-range-x.png`, `lvdt-fit-x.png`, `logo-vertices.png`, `dotted-r.png`, `final-r.jpg` (rotated 180° so the R reads upright)
- Optional: `drawing.mp4` (a clip of the stage drawing) could replace the hero photo

**Engine** (`assets/engine/`)
- `card.jpg` — added (still from the NX CAD screen recording; home-page card)
- `card.mp4` — the screen recording itself (not currently shown; available for the engine project page)

**About photos**
- `assets/about/linkedin-photo.jpg` — added (poster presentation photo from LinkedIn)
- `assets/hands-on/boatshop-1.jpg`, `boatshop-2.jpg`, `boatshop-3.jpg` — added

Tips: export plots as PNG at ~1600 px wide; photos as JPG at ~1600 px wide and under ~400 KB each so pages load fast on phones.

## Before publishing

- [ ] Fill every yellow-highlighted `[bracketed]` item, or delete it.
- [ ] Get Energetiq's OK on what the internship page says and shows.
- [ ] Delete unused "Additional Project" placeholder cards on `index.html`.
- [ ] Check every page on a phone.

## Adding a project

1. Copy `projects/_project-template.html` and rename it.
2. Make a matching folder in `assets/`.
3. Turn one "Additional Project" card on `index.html` into a link to the new page.
4. Update the "Next" links at the bottom of neighboring project pages.

**Turbojet** (`assets/turbojet/`) — added: card.jpg (plot over faded 747-400, Unsplash, livery removed), fig-cost-vs-pr.png, fig-convergence.png, pv-cf6.jpg, pv-genx.jpg

**Energetiq photo** — `assets/energetiq-thermal/cleanroom.jpg` (used on both Energetiq pages; metadata stripped)

**Airfoil Drag Simulation** (`assets/airfoil/`) — still needed: card.jpg, hero.png, pressure.png, streamlines.png

**Airfoil** (`assets/airfoil/`)
- `card.jpg` (velocity contour crop; also the page hero), `geometry.png`, `mesh.png`, `boundary-conditions.png`, `residuals.png`, `pressure.png`, `streamlines.png` — from the Fluids Simulation Deliverables doc
