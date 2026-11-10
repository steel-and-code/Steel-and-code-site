# Steel & Code: static replacement draft

This folder is a separate Astro site. The existing Django application is
untouched. No database, application server, accounts, or visitor uploads are
needed. All public pages are generated at build time.

## Run and build

Node 22 LTS or Node 24 LTS is recommended.

```sh
cd static-site
npm ci
npm run dev
# Production files:
npm run build
```

The finished site is in `dist/`. Serve that directory with any static host.

## Publish a video update

1. On GitHub, open `static-site/src/content/updates/`.
2. Copy `example-release.md` to a descriptive filename, such as
   `quiet-evening.md`. This filename becomes `/updates/quiet-evening/`.
3. Set the title, actual publication date (`YYYY-MM-DD`), and short summary.
4. Add `youtubeId: "abcdefghijk"`, replacing the example with the actual
   11-character ID after `v=` in a YouTube URL (or after `youtu.be/`).
5. Write any additional text below the second `---` line.
6. Set `draft: false`, preview the changes, and save/commit.

Once Git-connected hosting is configured, saving to the production branch
triggers a build and publishes the update. The newest three updates appear
on Home; video updates also appear on Cozy Space Bard. Drafts and future-dated
entries have no public pages. Dates are evaluated in UTC at build time; future
posts need a new build on or after their release date. Use today's date for
immediate publication. No automatic YouTube synchronization is configured.

For first publication, replace the hidden example with a real video entry.
The draft currently links to the channel rather than claiming a latest video.

## Edit other information

- Home and projects: `src/pages/index.astro`
- Channel introduction: `src/pages/cozy-space-bard.astro`
- About: `src/pages/about.astro`
- Tutoring: `src/pages/learn.astro`
- Navigation/footer/metadata: `src/layouts/Base.astro`
- Colors, spacing, responsive layouts: `src/styles/global.css`

## Tutoring inquiries

`/learn/` uses the public email configured in `src/tutoring.ts` and appears
as **Tutoring** in the main navigation. The inquiry button opens an email
draft in the visitor’s email app. The address is also shown so visitors can copy
it into webmail.

To change the destination at build time, set `TUTORING_CONTACT_URL` to a public
HTTPS contact link or a `mailto:` link. Set it to an empty string to close
requests, hide the navigation entry, and ask search engines not to index the
page. Rebuild and check the link before publishing.

## Suggested hosting: Cloudflare Pages

Create a Pages project connected to this GitHub repository. Use:

- Root directory: `static-site`
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 22 or 24 LTS

Review the provider's current pricing and account options before setup.
Validate the temporary Pages URL before connecting either custom hostname.
A separate private design preview was published with Sites:
https://steel-code-design-review.umberhull3.chatgpt.site

No Cloudflare project, GitHub deployment workflow, custom-domain change, or
droplet change has been made. Configure your chosen hosting provider after
merging the branch. This source also works with Netlify or another static host.

## Before replacing the droplet

1. Back up the droplet, SQLite database, uploaded media, service configuration,
   and current source. Keep a record of the old DNS values for rollback.
2. Reconcile production with this repository. The observed live homepage is
   newer/different: it includes Steel OS, Forge, Outpost, and Steelcast; the
   checked-out homepage emphasizes courses. Preserve uncommitted production
   work before making any change. This draft retains links to Steel OS and
   the GitHub organization; the updated draft also restores Forge, Outpost, and Steelcast artwork.
3. Inventory existing URLs, traffic, and published database content. The public
   Field Notes index was empty during inspection; that does not prove the
   database has no drafts or future posts. Export any content worth keeping.
4. Decide what should happen to `/lab/`, `/workbench/`, course pages, computational
   modeling, and `/contact/`. Workbench and Python Lab are intentionally
   removed from the replacement; their original source remains in this repo.
   Decide whether retired URLs should return 404/410 or redirect to relevant
   replacement pages. `/field-notes/` now lists Markdown entries, but existing
   database articles need export and individual URL redirects if any exist.
   Avoid redirecting every missing article to Home.
5. Test Home, About, channel links, real release content, mobile navigation,
   accessibility, 404 behavior, and any approved redirects on a staging URL.
6. Connect both `steelandcode.com` and `www.steelandcode.com`, choose the
   canonical hostname, verify HTTPS and hostname redirects, and preserve email
   DNS records. Changing nameservers requires preserving the full DNS zone.
7. Monitor the new site and verify rollback before stopping the droplet. Check
   for other services on it before cancellation. Do not delete its backups.

## Verification limits

A production build and static output checks can verify generated routes and
publication rules. This environment does not expose the shared browser-control
tool required by its Sites workflow, so visual browser QA is still required.
YouTube returned HTTP 403; no video titles, IDs, thumbnails, or channel artwork
were inferred. The space artwork is an original CSS illustration, not official
channel branding. The attached Cozy Space Bard banner was visible in chat but
not available as a workspace file; it still needs to replace the illustration.
Confirm channel copy and artwork before launch.

Original project images were recovered unchanged from the public production
static assets. Workbench and Python Lab are intentionally omitted from this replacement.
Their Django source remains available in the original application.

The homepage hero restores the original production workshop background,
stacked BUILD / EXPLORE / TEACH heading, cyan accents, and terminal signature.
The cursor blinks after `--teach` and remains static for reduced-motion users.
`/field-notes/` lists the same published Markdown updates as the homepage.

## Handoff

The implementation is on branch `simplify-static-site`, in pull request #1:
https://github.com/steel-and-code/Steel-and-code-site/pull/1

Merge it when ready, then configure the static host using the settings above.
The original Django app stays at the repository root; the replacement is
entirely in `static-site/`. Do not run Django to build the replacement.

Remaining content task: add the original Cozy Space Bard banner to `public/images/`
and replace the CSS illustration on Home and the channel page. The banner's
original image file was not accessible during implementation.

Verification completed: production Astro build, publication checks for public,
draft, and future-dated entries, original logo embedding, restored image paths,
and removal of teaching tools from generated pages. A visual browser review
and final hosting/domain setup remain with the maintainer.
