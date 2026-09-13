# Experience content update (2026-09-13)

The research and work sections in `contents/research.md` and `contents/experience.md` have been updated against the September 13, 2026 Chinese and English CV revisions and reordered newest first. RetailEye includes May–November 2025 and June 2026–present, with shared responsibilities. The Alibaba internship ends in May 2026. Research content now includes chemical-data vectorization and independent training of domain-specific smaller models.

The source CVs disagree on Alibaba's start date and the end dates of the projects supervised by Baojian Zhou and Qingfu Liu. Pending confirmation, these retain the existing website values: November 2025, present, and January 2025, respectively. This update covers experience text; the downloadable PDF, education, and honors have not been refreshed.

Preview from the repository root with `uv run python -m http.server 8000`, open `http://localhost:8000`, and check Research, Experience, and the browser console. No build step is required.



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
