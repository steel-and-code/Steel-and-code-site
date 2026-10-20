# Steel & Code 2.0 — Approved Visual Direction

**Approved:** October 20, 2026  
**Theme:** Hybrid modern engineering / subtle retro-futuristic science fiction  
**Primary identity:** **BUILD. EXPLORE. TEACH.**  
**Status:** Design reference approved; implementation not yet begun.

## Reference mockup

The Chief Architect approved a 1536×1024 cinematic homepage composition generated in the design conversation on October 20, 2026. **The PNG is not yet in this repository.** Obtain `a_wide_cinematic_high_detail_website_homepage.png` from that conversation and add it under `docs/design/steel-and-code-2-homepage-concept.png` in the implementation branch. Never replace the actual brand logo with the mockup's illustrative logo. The image is a visual direction, **not** production-ready HTML or a literal specification.

## Art direction

An inviting independent engineering workshop: dark steel, restrained cyan edge lighting, warm amber work lights, terminal-inspired typography and sci-fi undertones. Credible modern UI first; retro atmosphere second. Preserve whitespace, contrast, accessibility, responsive design, and fast loading.

- Background: `#10171E`
- Surface: `#202C36`
- Cyan accent: `#66D9E8`
- Amber accent: `#E5A65A`
- Primary text: `#F2F5F7`

## Composition

1. Existing Steel & Code brand in the header, with Projects, Workbench, Field Notes, About, Community.
2. Hero: **BUILD. EXPLORE. TEACH.** and “We build useful technology, explore ambitious ideas, and teach what we learn.” Feature a cinematic workshop visual, but make all text/buttons accessible **HTML**, not text embedded in the image.
3. Three prominent paths: BUILD (Steel OS / Forge / Outpost), EXPLORE (STEELCAST / experiments), TEACH (Workbench / Python / computational modeling).
4. Steel OS featured banner linking to https://steel-os.org/; use actual product screenshots once available.
5. Project cards with truthful states: public preview, in development, experimental as applicable; verify current statuses before launch.
6. The Workshop / Field Notes, powered by existing Django FieldNote content, never invented article dates or titles.
7. Footer with verified official links only. Discord URL should be added only when the actual invite is supplied.

## Implementation safeguards

- Preserve the existing Django project and **actual Steel & Code logo**.
- Preserve functional routes: `/lab/`, `/workbench/`, `/workbench/board/`, `/courses/`, `/field-notes/`, and existing educational pages.
- Scope new CSS to homepage components; do not regress Lab, Workbench, or lessons.
- Avoid a frontend rewrite, unnecessary libraries, or image-baked copy.
- Use semantic HTML and keyboard-visible focus states; accommodate mobile.
- Resize/optimize assets and use responsible image loading.
- No push, merge, or production deployment of implementation without Chief Architect review.

## Hermes assignment

Implement the approved direction on `feature/steel-and-code-2-homepage`. Inspect existing templates and tests. Preserve current routes. Run Django checks and tests and both JavaScript suites. Report changed files, results, and screenshots if locally available; commit work locally for review. Mockup imagery is inspirational, not evidence of features or published field notes.
