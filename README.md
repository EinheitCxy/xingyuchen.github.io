# Xingyu Chen — Personal CV Website

A static personal website presenting education, research, and work experience. Content is loaded from Markdown and YAML without a build step.

## Content and maintenance

- `contents/home.md`: biography, education, coursework, skills, contact details, and CV download.
- `contents/research.md`: four research experiences, including W4A4 robotic-policy quantization.
- `contents/experience.md`: RetailEye, Alibaba, UBS, and Guotai Junan work experience.
- `contents/honors.md`: honors listed in the supplied full CV.
- `contents/config.yml`: page title and banner.
- `CV_陈星宇_English_New.pdf`: earlier CV, explicitly labeled as archived on the website. The latest DOCX conversion produced poor pagination, so it is not published as a replacement PDF.

The September 13, 2026 update uses `Xingyu_Chen_CV_Full.docx` as its source of truth. It supersedes earlier conflicting dates: Alibaba is January–May 2026; Baojian Zhou's project is January–July 2025; Qingfu Liu's project is September 2024–January 2025. RetailEye's first period is identified as an internship, followed by June 2026–present. Research intervention counts describe the experimental scope, not an improvement in success rate or speed.

## Preview and validation

Run `uv run python -m http.server 8000` from the repository root and open `http://localhost:8000`. Check all four content sections, the CV download, desktop and mobile layouts, and the browser console. Run `git diff --check` before submitting content changes.

## Homepage photo gallery

Seven photos appear below the home biography in a Bootstrap carousel. Slides advance every five seconds, with previous/next buttons, keyboard arrows, touch swiping, and a pause/resume button. Rotation pauses while hovered, keyboard-focused, or in a hidden tab. Reduced-motion users start with rotation paused and no slide transition.

`static/assets/gallery/` contains JPEG web copies (maximum 1600 pixels on either dimension), with orientation normalized and EXIF metadata removed. Source photos are unchanged. HEIC is decoded to JPEG for the website. To add or reorder photos, edit the figures in `index.html`; slide counts and labels are derived by `static/js/gallery.js`. Gallery styling is in `static/css/main.css`.

Validate image decoding, forward/backward wraparound, pause/resume, keyboard and touch navigation, and reduced motion before publishing.

## Template attribution

![Github Forks](https://img.shields.io/github/forks/senli1073/senli1073.github.io?style=flat)
![Github Stars](https://img.shields.io/github/stars/senli1073/senli1073.github.io?style=flat)
![License](https://img.shields.io/github/license/senli1073/senli1073.github.io)
![Last Commit](https://img.shields.io/github/last-commit/senli1073/senli1073.github.io)

# A simple Github Pages template for personal academic websites.

## Preview
[![Screenshot of the Website](https://raw.githubusercontent.com/senli1073/senli1073.github.io/main/screenshot_full.png)](https://senli1073.github.io/)


## Introduction

This personal academic website template is based on [bootstrap](https://github.com/StartBootstrap/startbootstrap-new-age).

The template is designed to integrate Markdown files as content input.  There's no need to compile the webpage before deployment.  Upon loading, the Markdown files are automatically parsed and embedded into the page.

This template supports LaTeX formula input. You can use `$...$` and `\(...\)` as delimiters for inline-math, or use `$$...$$` and `\[...\]` as delimiters for display-math. Macros such as `\ref{...}`, `\eqref{...}`, and `\begin{equation}...\end{equation}` are also supported. See [MathJax](https://docs.mathjax.org/en/latest/index.html) for more details.

:milky_way: Demo: https://senli1073.github.io/


## Getting Start
### 1. Fork this repository
The repository name should be `<username>.github.io`, which will also be your website's URL.


### 2. Edit page content

(1) Go to the folder where you want to store your project, and clone the new repository:
```
git clone https://github.com/<username>/<username>.github.io.git
```
The directory structure is as follows:

```.
.
├── contents
└── static
    ├── assets
    │   └── img
    ├── css
    └── js
```

(2) Modify the content of each section, which corresponds to `contents/*.md`.

(3) Adjust the title, copyright information, and other text of the website in `contents/config.yml`

(4) Replace background image and photo with new ones for your web pages in `static/assets/img/`

(5) Push it: 
```
git commit -am 'init'
git push
```

### 3. Setup
(1) Under your repository name, click `Settings`.

(2) In the "Code and automation" section of the sidebar, click `Pages`.

(3) Under "Build and deployment", under "Source", select Deploy from a branch. Then, use the branch dropdown menu and select a publishing source.

### 4. Enjoy

Fire up a browser and go to `https://<username>.github.io`

> Note that it can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub.


## License

Copyright Sen Li, 2023-2025. Licensed under an MIT license. You can copy and mess with this template.
