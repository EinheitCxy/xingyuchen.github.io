# Xingyu Chen — Personal Website

A concise research homepage built with static HTML, Bootstrap, Markdown, and YAML. No build step is required.

## Content and design

- `contents/home.md`: introduction and current interests in model acceleration, VLA models, and architecture design; email, GitHub, and current PDF CV links.
- `contents/research.md`: all five research experiences, each with a short description.
- `contents/experience.md`: all four work experiences: RetailEye, Alibaba, UBS, and Guotai Junan, one summary per role.
- `contents/honors.md`: education and honors, displayed within the opening introduction. GPA **3.57/4.0**, average score **91/100**, rank **20/109**; scholarships match the official certificate.
- `contents/config.yml`: page title, name, and copyright.
- `static/css/main.css`: navy-led color palette, responsive portrait introduction, research cards, compact experience rows, and gallery styling.

This homepage includes all research and work experiences while summarizing each role concisely. The introduction presents the name, biography, compact research interests, education, and honors. Dates and current project descriptions follow the owner's one-page CV and finalized PS/SoP, reviewed on November 8, 2026. The VLA project began in July 2026; the diffusion-language-model project ran from July 2025 to January 2026. Earlier experiences remain summarized here.

The downloadable CV is `static/assets/Xingyu_Chen_CV.pdf`, exported from the updated one-page Word CV. Replace that PDF when updating the downloadable version. TOEFL, GRE, and additional coursework appear with education. NEFTune's 64.2% is a raw pairwise preference rate against standard fine-tuning on 805 instructions judged by DeepSeek-V3, not an official AlpacaEval leaderboard score. Research interests in retail manipulation are not presented as deployed systems. The older root PDF remains unlinked.

## Photo gallery

Seven photos appear in the final content section, after research and work experience and before the footer. Captions use English only. Images load lazily. Slides advance every five seconds, with previous/next buttons, keyboard arrows, touch swiping, and pause/resume. Rotation pauses on hover, keyboard focus, or hidden tabs. Reduced-motion users start paused.

`static/assets/gallery/` contains JPEG copies with normalized orientation and EXIF removed; originals are unchanged. Edit figures in `index.html` to reorder photos. `static/js/gallery.js` derives slide counts and labels.

## Preview and verification

Run `uv run python -m http.server 8000` and open `http://localhost:8000`. Check desktop and mobile layouts, section order, content and images, carousel controls, and browser console. Run `git diff --check` and `node --check static/js/gallery.js` before committing.

Load one MathJax bundle only. Loading both SVG and CHTML combined bundles creates duplicate initialization errors.

## Attribution

Based on [Sen Li's academic website template](https://github.com/senli1073/senli1073.github.io), under the MIT license. Vendored Bootstrap, Marked, YAML, and MathJax assets retain their upstream behavior.
