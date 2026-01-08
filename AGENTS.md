# Repository Guidelines

## Project Structure & Module Organization

- `index.html`: single-page site shell; content is injected at runtime.
- `contents/`: Markdown + config inputs.
  - `contents/*.md`: section content (e.g., `home.md`, `publications.md`, `awards.md`).
  - `contents/config.yml`: key/value text injected into elements whose `id` matches the key.
- `static/`: front-end assets.
  - `static/css/`: site styles.
  - `static/js/`: site scripts and vendored libraries (avoid editing `*.min.js` unless necessary).
  - `static/assets/img/`: images (e.g., `background.jpeg`, `photo.png`).

To add a new section: create `contents/<section>.md`, add `<section>` to `section_names` in `static/js/scripts.js`, and add the corresponding container/nav entry in `index.html`.

## Build, Test, and Development Commands

This repo is static (no build step). Run locally with a simple HTTP server from the repo root:

- `python3 -m http.server 8000`: serve the site at `http://localhost:8000`.

## Coding Style & Naming Conventions

- Indentation: 4 spaces in HTML/CSS/JS; avoid tabs.
- Keep `contents/` filenames lowercase and match section ids (e.g., `publications.md` → `publications-md` target in `index.html`).
- Prefer small, readable diffs; don’t reformat vendored files in `static/js/` (e.g., `bootstrap.bundle.min.js`, `marked.min.js`).

## Testing Guidelines

No automated tests are configured. Before opening a PR:

- Load the site locally and verify each section renders (Markdown, images, and MathJax/LaTeX).
- Check the browser console for fetch/parse errors (YAML ids missing, broken links).

## Commit & Pull Request Guidelines

- Commit messages in history are short and descriptive (e.g., `update awards`, `update pubs`, `doc: ...`). Follow the same convention.
- PRs should include: a brief summary, a list of edited sections/files (e.g., `contents/home.md`), and a screenshot or link showing the rendered change.

## Security & Configuration Tips

- Treat everything in this repo as public (GitHub Pages); never commit secrets or private data.
- Keep external links and embedded assets trustworthy and version-pinned when possible.
