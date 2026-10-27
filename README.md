# Rise Personal — V2 (Visual-First Edition)

The visual-first edition of the Rise Personal personal-branding site. Same content as V1, radically more visual: animated signature gradient hero, interactive quiz spotlight, 3-stage method journey with a connecting line, the Lineage of 16 master brands (including four Saudi icons) with real images and count-up impact counters, custom SVG icons, scroll-triggered reveals, and glass navigation — vanilla JS + CSS only, no libraries.

**Live:** https://gomaak.github.io/risepersonal-v2/

V1 (untouched): https://gomaak.github.io/risepersonal-site/

## Brand law

- Rise Purple `#7710D1` · Rise Blue `#0170FD` · Rise Black `#1A1A1A` · Rise Mist `#E6E6E6`
- Signature gradient `#0170FD → #7710D1`, diagonal
- Alumni Sans (display) + Source Sans 3 (body)

## Structure

- `index.html` — visual-first home (hero → quiz spotlight → method → about → lineage with counters → services → pillars → journal → FAQ → contact)
- `quiz.html` — the Snapshot: free 20-question Big Five assessment → 12-archetype engine → 3 Words → Wellness × Brand results
- `lineage.html` + 16 lineage feature pages — master personal brands with sourced impact numbers
- 4 Journal articles
- `sitemap.xml`, `robots.txt`, `llms.txt`, `assets/` (logo, favicon, licensed lineage images)

## Motion

Every animation respects `prefers-reduced-motion`. Performance budget: no JS libraries, no external icons — IntersectionObserver + CSS keyframes only.


## Final revision (Oct 27, 2026)

- `assets/clarity.css`: one shared layer loaded after each page's inline styles. Fixed an invisible hero headline (ink on ink) and invisible text on the four Journal essay heroes, raised small labels to 12-13px, moved blue text to WCAG-safe shades (#0A5BCB on light, #6FB0FF on dark), aligned the Method steps, fixed the About quote card, added visible focus rings and no-JS visibility.
- SEO/GEO: canonical + hreflang + Organization/ProfessionalService/FAQ schema, regional pages (`personal-branding-saudi-arabia.html`, `personal-branding-egypt.html`, `human-powered-marketing.html`), sitemap, robots (AI crawlers allowed), llms.txt, 1200x630 social card. Canonical host is https://www.risepersonal.com/ (takes effect when the domain points at this site).
- Lineage: four Saudi icons added (Mohammed Abdu, Sulaiman Al Rajhi, Saeed Al-Owairan, Rayyanah Barnawi), each with sourced numbers and a licensed image.
- WhatsApp button on every page (+971 50 683 2835; Egypt page uses +20 109 900 0280).
- Known gap: the Snapshot email form has `RP_CONFIG.endpoint = null`, so captured emails are not stored anywhere yet.
