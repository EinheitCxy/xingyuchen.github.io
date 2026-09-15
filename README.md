# Xingyu Chen — Personal Website

A concise research homepage built with static HTML, Bootstrap, Markdown, and YAML. No build step is required.

## Content and design

- `contents/home.md`: introduction and current interests in efficient VLA/VLM and model architecture design; email and GitHub links.
- `contents/research.md`: all five research experiences, each with a short description.
- `contents/experience.md`: all four work experiences: RetailEye, Alibaba, UBS, and Guotai Junan, one summary per role.
- `contents/honors.md`: education and honors, displayed within the opening introduction. GPA **3.57/4.0**, average score **91/100**, rank **20/109**; scholarships match the official certificate.
- `contents/config.yml`: page title, name, and copyright.
- `static/css/main.css`: navy-led color palette, responsive portrait introduction, research cards, compact experience rows, and gallery styling.

This homepage includes all research and work experiences while summarizing each role concisely. The introduction presents the name, biography, compact research interests, education, and honors. Dates and experience are based on `Xingyu_Chen_CV_Full.docx`; the owner's latest corrections take precedence. The earlier PDF remains in the repository but is not linked from the homepage because it is outdated.

## Photo gallery

Seven photos appear in the final content section, after research and work experience and before the footer. Captions use English only. Images load lazily. Slides advance every five seconds, with previous/next buttons, keyboard arrows, touch swiping, and pause/resume. Rotation pauses on hover, keyboard focus, or hidden tabs. Reduced-motion users start paused.

`static/assets/gallery/` contains JPEG copies with normalized orientation and EXIF removed; originals are unchanged. Edit figures in `index.html` to reorder photos. `static/js/gallery.js` derives slide counts and labels.

## Preview and verification

Run `uv run python -m http.server 8000` and open `http://localhost:8000`. Check desktop and mobile layouts, section order, content and images, carousel controls, and browser console. Run `git diff --check` and `node --check static/js/gallery.js` before committing.

## Attribution

Based on [Sen Li's academic website template](https://github.com/senli1073/senli1073.github.io), under the MIT license. Vendored Bootstrap, Marked, YAML, and MathJax assets retain their upstream behavior.
