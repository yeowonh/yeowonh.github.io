# yeowonh.github.io

Personal portfolio and résumé for Yewon Hwang. Built with [Astro](https://astro.build).
Layout follows the vCard portfolio pattern — sticky profile sidebar plus a tabbed content card —
reworked as a light theme.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # preview the build
```

## Where to edit

| To change | Edit |
| --- | --- |
| Name, title, intro, email, location, socials | `src/data/site.ts` |
| "What I'm Doing" cards | `src/data/site.ts` → `services` |
| Experience, education, publications, awards, certifications, languages | `src/data/resume.ts` |
| Projects | `src/content/projects/*.md` |
| Colors, spacing, print styles | `src/styles/global.css` |
| Icons | `src/components/Icon.astro` |

Anything marked `TODO:` is a placeholder waiting for real content.

### Palette

All colors are CSS custom properties at the top of `global.css`. The two accents are deliberate:
`--accent` is dark enough to pass contrast as body text, `--accent-bright` is used only for fills
(timeline dots, the rule under page titles).

To change the theme colour, edit the four `--accent-*` values. Three pre-checked alternatives —
teal, forest, graphite — are listed in the comment block above `:root`. Also update `--accent-line`,
`.avatar`, and the `.tint-*` thumbnail gradients so they stay in the same family.

The site is light-only by design. Adding a dark theme means redefining the same tokens inside
`@media (prefers-color-scheme: dark)` — no component CSS would need to change.

### Adding a project

Drop a `.md` file in `src/content/projects/`. The filename becomes the URL.

```markdown
---
title: Project name
summary: One line for the card and the meta description
category: Data / AI        # also becomes a filter button on /projects
period: '2025'
role: '4-person team · backend'
stack: ['Python', 'FastAPI']
tint: tint-1               # tint-1 | tint-2 | tint-3 — thumbnail gradient
mark: KG                   # 2 characters shown on the thumbnail
featured: true
order: 40                  # higher sorts first
links:
  - label: GitHub
    href: 'https://github.com/...'
---

## Problem
## Approach
## Result
## What I'd change
```

Set `draft: true` to keep it out of the build.

To use real screenshots instead of the gradient placeholders, put images in `public/` and swap the
`.thumb` block in `src/pages/projects/index.astro` for an `<img>`.

### Résumé PDF

`/resume` has print styles: the sidebar collapses into a header band, navigation and the print
button disappear, and sections avoid breaking across pages. Use the browser's print dialog and turn
off "background graphics".

## Deploy

GitHub Actions builds and deploys. **The repository must be public** for GitHub Pages to serve it on
the free plan.

After flipping the repo to public:

1. `Settings → Pages → Source` → `GitHub Actions`
2. Uncomment the `push:` lines in `.github/workflows/deploy.yml`
3. Push to `main` → live at https://yeowonh.github.io within a couple of minutes

## Before going public

- [ ] `git log --format='%ae' | sort -u` — no work email in the commit history
- [ ] `npx secretlint "**/*"` — no keys or tokens committed
- [ ] `site.ts` email is a personal address
- [ ] No internal system details or unreleased metrics in the project write-ups

Commit identity for this repo:

```bash
git config user.email "54229099+yeowonh@users.noreply.github.com"
```
