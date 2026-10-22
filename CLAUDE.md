# Theo Dwyer — Portfolio Site

Static portfolio site for Theo Dwyer, junior level / technical designer (Unreal Engine 5).
Hosted on GitHub Pages from the `main` branch root, at https://theodwyer.com (custom domain set by the `CNAME` file; DNS at Porkbun; theodwyer.ca forwards to it). Old address ehlien8d.github.io redirects there.
Plain HTML + one shared `style.css`. No build step, no frameworks, no JavaScript unless there's a real need.

## Files
- `index.html` — home: project cards, About, contact footer
- `picture-perfect.html`, `tetra.html`, `the-great-wander.html`, `blaze-a-maze.html` — one page per project
- `style.css` — all styling; colour tokens live in `:root`
- `lightbox.js` — click-to-enlarge viewer for page images
- `video/` — home page banner: `tetra-hero-1080-av1.mp4` (desktop, AV1, ~8 MB), `tetra-hero-1080.mp4` (desktop fallback, H.264, ~14 MB), `tetra-hero-720.mp4` (phones, H.264, ~5 MB), `tetra-hero-poster.webp`. Script in index.html picks one by screen width and AV1 support. Source: E:\PortfolioTingz\Tetra\TetraSmall.mp4 with the first 2 frames of each scene cut (grass pop-in). Bump the `?v=` on these URLs when replacing them.
- **Cache-busting:** pages load `style.css?v=N` and `lightbox.js?v=N`. GitHub Pages lets browsers cache files for 10 minutes, so whenever either file changes, bump N on every page or visitors get new HTML with old CSS.

## Facts that must stay correct
- Name: Theo Dwyer. Contact email: theo.dwyer@gmail.com (never ehliendesign@gmail.com)
- LinkedIn: https://www.linkedin.com/in/theo-dwyer
- 4 years in Unreal Engine (not 3)
- Solo project is "Tetra (working title)" — never "PCG Playground"
- Picture Perfect: capstone, team of 3 (with Emily Donoghue and Gavyn Martin), UE 5.3
- Bootcamp: Circuit Stream Game Design Bootcamp via UBC Extended Learning, graduated May 2025
- Target roles shown on the site: level designer, technical designer (Theo chose not to list environment tech art)

## Look and feel
- Dark, low-glare theme for comfortable phone reading at night. Soft dark greys, off-white text, one muted green accent (`--accent`). No bright or saturated colours.
- Every page shares the same header nav, footer, and back-to-projects link.

## Review checklist (the reviewer agent checks every item, every round)
1. **Links:** every internal link points to a file that exists; anchors (#projects, #about, #contact) exist; external links use https.
2. **Images:** every `<img>` has meaningful `alt` text; no duplicate image used twice on the same page unless intended.
3. **Facts:** everything in "Facts that must stay correct" above holds on every page.
4. **Consistency:** header, nav labels, footer, and page `<title>` format ("Project | Theo Dwyer") match across pages.
5. **Mobile:** viewport meta present; nothing forces horizontal scroll at 375px wide; tap targets aren't cramped.
6. **HTML validity:** tags properly closed and nested; one `<h1>` per page; headings don't skip levels.
7. **Writing:** no typos, no first-draft placeholder text left visible, tone stays plain and honest (Theo's voice — no hype words like "passionate rockstar").
8. **Accessibility:** text/background contrast meets WCAG AA; links are distinguishable.

## How the agent loop works
- **Builder** makes the requested change or fixes the reviewer's findings.
- **Reviewer** runs the checklist above on the changed files and reports findings as `MAJOR` (wrong facts, broken links/pages, broken layout) or `MINOR` (polish).
- Stop after **3 rounds**, or as soon as a round finds no MAJOR issues — whichever comes first. Leftover MINOR items get listed for Theo, not endlessly polished.
- Nothing is pushed to `main` (the live site) until Theo has seen the summary and said yes.

## Known to-dos
- Images live in `images/<project>/` as WebP (max 1600px wide; `-card` versions at 800px for home page cards). Originals are on Theo's computer in E:\PortfolioTingz, never committed.
- All site images are self-hosted; nothing depends on Squarespace any more.
- Screenshot filenames (ScreenShot000NN) repeat across projects and capture sessions; match images by content, not by name.
- Picture Perfect waterfall video: placeholder comment in `picture-perfect.html` until it's on YouTube.
