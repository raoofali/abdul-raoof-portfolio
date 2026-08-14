# Abdul Raoof — Portfolio

Production-ready developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

---

## 1. Installation

```bash
npm install
cp .env.example .env   # then fill in the EmailJS values (see section 5)
npm run dev
```

The site runs at `http://localhost:5173`.

---

## 2. Adding your real content

Everything content-related lives in **one file**: `src/data/profile.ts`.
You should not need to touch any component to update text, links, projects, or skills.

| What | Where |
|---|---|
| Bio, contact info, education | `profile` object |
| Skills by category | `skills` object |
| Projects | `projects` array |
| Work experience | `experience` array |
| Certifications / Awards / Testimonials / Blog posts | bottom of the file (currently empty arrays, ready to fill) |

### Swapping in real assets
1. **Resume** — replace `public/resume-PLACEHOLDER.md` by adding your real file at `public/resume.pdf`. The Resume page and download button already point to `/resume.pdf`.
2. **Profile photo** — add an image at `public/profile-photo.jpg`, then set `hasRealPhoto: true` in `profile.ts` if you wire it into the Hero later.
3. **Project screenshots** — add images under `public/projects/`, then set `hasScreenshots: true` on the relevant project in `profile.ts` and swap the placeholder `<div>` in `src/pages/Projects.tsx` for an `<img>` tag.

---

## 3. Project structure

```
src/
  components/
    layout/     Navbar, Footer, ScrollToTop
    ui/         Button, Badge, Reveal (scroll animation), SectionHeading, EditorWindow (hero signature element)
    sections/   Hero, About, Skills, FeaturedProjects, Experience, ContactCTA
  pages/        Home, Projects, Resume, Blog, Contact, NotFound
  data/         profile.ts — all site content
  lib/          utils.ts
  App.tsx       Routing, lazy-loaded pages, page transitions
  main.tsx      Entry point
```

Routes are **lazy-loaded** (`React.lazy`) so each page ships as its own JS chunk — this is what keeps initial load fast as the site grows.

---

## 4. Design system

- **Theme:** dark-only, defined in `tailwind.config.js` under `colors` (`bg`, `ink`, `accent`, etc.) — change values there to re-theme the whole site.
- **Type:** Space Grotesk (headings) · Inter (body) · JetBrains Mono (code/labels), loaded via Google Fonts in `index.html`.
- **Motion:** Framer Motion, kept deliberately restrained — scroll reveals via the `<Reveal>` component and hover micro-interactions. Respects `prefers-reduced-motion` automatically (see `src/index.css`).

---

## 5. Contact form (EmailJS)

The Contact page sends email without a backend, using [EmailJS](https://www.emailjs.com):

1. Create a free EmailJS account.
2. Create an **Email Service** (e.g. Gmail) → copy the **Service ID**.
3. Create an **Email Template** with variables `from_name`, `from_email`, `message` → copy the **Template ID**.
4. Copy your **Public Key** from Account → API Keys.
5. Put all three into `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```
6. Restart the dev server after editing `.env`.

The form also includes a **honeypot field** (invisible to humans, filled in by bots) for basic spam protection — no extra config needed.

---

## 6. Deployment

### Git setup
```bash
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/raoofali/portfolio.git
git push -u origin main
```
**Branch strategy for future work:** keep `main` always deployable; create a branch per feature (`feature/blog-cms`, `fix/contact-form`), open a PR into `main`, merge once reviewed.

### Deploy on Vercel (recommended)
1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset: **Vite** (auto-detected).
3. Add the three `VITE_EMAILJS_*` environment variables in Project Settings → Environment Variables.
4. Deploy. Every push to `main` auto-deploys.

### Deploy on Netlify
1. [app.netlify.com/start](https://app.netlify.com/start) → import repo.
2. Build command: `npm run build` · Publish directory: `dist`.
3. Add the same environment variables under Site settings → Environment variables.
4. Add a `public/_redirects` file with `/* /index.html 200` so client-side routing works on refresh (React Router needs this since routes like `/projects` aren't real files).

### Deploy on Cloudflare Pages
1. Pages → Create project → connect repo.
2. Build command: `npm run build` · Build output directory: `dist`.
3. Add environment variables under Settings → Environment variables.
4. Cloudflare Pages handles SPA fallback automatically.

### Custom domain + SSL
All three platforms above provision free SSL automatically once you point your domain's DNS (usually a CNAME or A record) at them — follow the "Domains" tab in whichever platform you choose. Update `index.html`'s canonical URL and `public/sitemap.xml` / `public/robots.txt` to your real domain once it's live.

### Post-deploy checklist
- [ ] Verify the live contact form actually delivers an email
- [ ] Submit `sitemap.xml` in [Google Search Console](https://search.google.com/search-console)
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev) / Lighthouse against the live URL
- [ ] Check the site on an actual phone, not just devtools responsive mode

---

## 7. Performance & SEO notes

- Routes are code-split; the largest chunk (`vendor`) is React itself, and Framer Motion is split into its own chunk so pages that don't animate heavily don't pay for it upfront.
- Meta tags, Open Graph, Twitter Card, and JSON-LD (`Person` schema) are set in `index.html` and per-page via `react-helmet-async` — update the per-page `<Helmet>` blocks in each `src/pages/*.tsx` file as content grows.
- `public/sitemap.xml` and `public/robots.txt` are static — update the sitemap whenever you add real routes (e.g. individual blog post pages).

---

## 8. Scaling this later

- **Blog:** currently a shell reading from `blogPosts` in `profile.ts`. For real posts, either (a) add MDX support via `@mdx-js/rollup`, or (b) pull from a headless CMS (Contentful, Sanity) and fetch at build time.
- **Testimonials / Certifications / Awards:** arrays already exist in `profile.ts` — building the UI sections for them is a matter of copying the pattern used in `Skills.tsx` or `Experience.tsx` once you have real data.
- **Analytics:** add Vercel Analytics (`@vercel/analytics`) with a two-line install if deploying on Vercel.
