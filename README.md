# Rise Personal — V2 (Visual-First Edition)

The visual-first edition of the Rise Personal personal-branding site. Same content as V1, radically more visual: animated signature gradient hero, interactive quiz spotlight, 3-stage method journey with a connecting line, the Lineage of 12 master brands with real images and count-up impact counters, custom SVG icons, scroll-triggered reveals, and glass navigation — vanilla JS + CSS only, no libraries.

**Live:** https://gomaak.github.io/risepersonal-v2/

V1 (untouched): https://gomaak.github.io/risepersonal-site/

## Brand law

- Rise Purple `#7710D1` · Rise Blue `#0170FD` · Rise Black `#1A1A1A` · Rise Mist `#E6E6E6`
- Signature gradient `#0170FD → #7710D1`, diagonal
- Alumni Sans (display) + Source Sans 3 (body)

## Structure

- `index.html` — visual-first home (hero → quiz spotlight → method → about → lineage with counters → services → pillars → journal → FAQ → contact)
- `quiz.html` — the Snapshot: free 20-question Big Five assessment → 12-archetype engine → 3 Words → Wellness × Brand results
- `lineage.html` + 12 lineage feature pages — master personal brands with sourced impact numbers
- 4 Journal articles
- `sitemap.xml`, `robots.txt`, `llms.txt`, `assets/` (logo, favicon, licensed lineage images)

## Motion

Every animation respects `prefers-reduced-motion`. Performance budget: no JS libraries, no external icons — IntersectionObserver + CSS keyframes only.
