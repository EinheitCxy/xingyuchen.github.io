# Xingyu Chen — Personal Website

A concise research homepage built with static HTML, Bootstrap, Markdown, and YAML. No build step is required.

## Content and design

- `contents/home.md`: introduction and current interests in model acceleration and model architecture design; email and GitHub links.
- `contents/research.md`: two selected research directions, each with one short description.
- `contents/experience.md`: selected RetailEye, Alibaba, and UBS work, one summary per role.
- `contents/honors.md`: education and selected honors. GPA **3.52/4.0**, rank **26/104**, updated from the owner's September 13 correction; the cohort size is retained from the CV.
- `contents/config.yml`: page title, name, and copyright.
- `static/css/main.css`: responsive portrait introduction, research cards, compact experience rows, and gallery styling.

This homepage intentionally summarizes selected work rather than reproducing the full CV. Dates and experience are based on `Xingyu_Chen_CV_Full.docx`; the owner's latest corrections take precedence. The earlier PDF remains in the repository but is not linked from the homepage because it is outdated.

## Photo gallery

Seven photos appear in the final content section, after education and honors and before the footer. Images load lazily. Slides advance every five seconds, with previous/next buttons, keyboard arrows, touch swiping, and pause/resume. Rotation pauses on hover, keyboard focus, or hidden tabs. Reduced-motion users start paused.

`static/assets/gallery/` contains JPEG copies with normalized orientation and EXIF removed; originals are unchanged. Edit figures in `index.html` to reorder photos. `static/js/gallery.js` derives slide counts and labels.

## Preview and verification

Run `uv run python -m http.server 8000` and open `http://localhost:8000`. Check desktop and mobile layouts, section order, content and images, carousel controls, and browser console. Run `git diff --check` and `node --check static/js/gallery.js` before committing.

## Attribution

Based on [Sen Li's academic website template](https://github.com/senli1073/senli1073.github.io), under the MIT license. Vendored Bootstrap, Marked, YAML, and MathJax assets retain their upstream behavior.
