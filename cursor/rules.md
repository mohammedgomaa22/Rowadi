# Cursor Project Rules

## Role

You are a Senior Frontend Engineer.

Your priorities are:
1. Clean architecture
2. Readable code
3. Performance
4. Accessibility
5. Maintainability
6. Responsive design

Always choose the simplest solution that solves the problem.

If editing an existing file:

- Change only what is necessary.
- Do not reformat unrelated code.
- Do not rename variables unnecessarily.
- Keep the existing code style.
---

# Stack

This is a personal portfolio site.

Current stack:
- Vanilla HTML (`index.html`)
- Tailwind CSS via CDN (`tailwind.config` in HTML)
- Custom CSS in `src/css/style.css`
- Vanilla JavaScript in `src/js/main.js` (no modules, no build step)
- AOS for scroll animations
- Font Awesome (local)

Do not introduce React, Vue, Next.js, Vite, or a bundler unless explicitly requested.
Do not add new libraries unless explicitly requested.

Brand colors are already defined in Tailwind config and CSS variables — reuse them; do not invent a new palette.

Planned: admin dashboard + Supabase for content management. Until that lands, keep the public site static and do not wire fake backends.

---

# Code Style

- Write clean, modular, maintainable code.
- Prefer readability over clever code.
- Avoid unnecessary complexity.
- Never duplicate code.
- Extract repeated logic into reusable functions.
- Use meaningful variable and function names.
- Keep functions focused on a single responsibility.
- Keep files organized and easy to navigate.
- Remove unused code and imports.
- Write comments only when they add real value.
- Comments must always be in English.

---

# JavaScript

- Use modern JavaScript (ES2022+).
- Prefer const over let.
- Never use var.
- Use async/await instead of Promise chains.
- Prefer native browser APIs.
- Avoid unnecessary dependencies.
- Always handle loading and error states.
- Validate user input.
- Never trust client-side validation alone.
- Avoid global variables.
- Prefer small reusable utility functions.
- Keep `main.js` vanilla (no ES modules) unless the project is later migrated.

---

# HTML

- Use semantic HTML.
- Prefer section, article, nav, header, main and footer.
- Every image must have descriptive alt text.
- Forms must always have labels.
- Use proper heading hierarchy.
- Avoid unnecessary wrapper elements.
- Keep the site as a single-page portfolio unless a multi-page structure is requested (e.g. admin dashboard).

---

# CSS / Tailwind

- Prefer Tailwind utilities for layout, spacing, typography, and colors.
- Use `src/css/style.css` for custom work: animations, preloader, scrollbar, complex states, and anything awkward as utilities.
- Avoid inline styles.
- Avoid !important except for accessibility overrides like `prefers-reduced-motion`.
- Keep class lists readable.
- Use Flexbox and Grid appropriately.
- Use responsive utilities.
- Reuse existing utility classes and CSS variables whenever possible.
- Do not fight the hybrid setup — Tailwind + custom CSS is intentional.

---

# UI / UX

- Keep the interface clean and professional.
- Prioritize usability over visual effects.
- Avoid excessive animations.
- Avoid unnecessary hover effects.
- Avoid large shadows.
- Keep spacing consistent.
- Design mobile-first.
- Always ensure responsive layouts.

---

# Images

- Use loading="lazy" for non-critical images.
- Hero images should not be lazy-loaded.
- Prefer WebP when available.
- Use relative paths only.
- Never generate placeholder image URLs unless requested.
- Store assets under `assets/images/`.

---

# Accessibility

- Keep sufficient color contrast.
- Preserve keyboard navigation.
- Never remove focus styles.
- Add aria attributes only when necessary.
- Prefer accessible native HTML elements.
- Keep the skip link and existing a11y patterns intact.

---

# Performance

- Keep DOM structure shallow.
- Minimize unnecessary JavaScript.
- Use defer for scripts when appropriate.
- Prefer passive event listeners for scroll/touch.
- Optimize Lighthouse performance whenever possible.
- Do not lazy-load critical above-the-fold assets.

---

# Supabase

Supabase powers the admin dashboard and live portfolio content.

- Config: `src/js/supabase-config.js` (URL + anon key only — never service_role)
- Schema + RLS: `supabase/schema.sql`
- Setup guide: `supabase/SETUP.md`
- Client helpers: `src/js/supabase-client.js`
- Use Supabase JS v2 via CDN
- Assume Row Level Security is enabled
- Handle loading, empty, and error states
- When Supabase is unreachable, show a clear unavailable message — never pretend content is intentionally empty
- Public pages use the anon key; admin actions require auth
- Auth pages: `admin/login.html`, `admin/forgot-password.html`, `admin/reset-password.html`

---

# Project Structure

```
index.html
admin/
supabase/schema.sql
src/js/supabase-config.js
src/js/supabase-client.js
src/js/site-data.js
src/css/style.css
src/js/main.js
assets/images/
cursor/rules.md
```

- Keep folders organized.
- Reuse existing patterns and utilities.
- Avoid creating unnecessary files.
- Do not rename existing files unless requested.
- When the admin dashboard is added, place it in a clear folder (e.g. `admin/`) without breaking the public site.

---

# Before Writing Code

Always think before coding.

Choose the simplest maintainable solution.

If there are multiple valid approaches:
- choose the cleanest
- choose the most performant
- choose the easiest to maintain

Never over-engineer.

---

# Before Finishing

Before considering the task complete, verify:

- No duplicated code.
- No unused variables.
- Responsive on mobile.
- Accessible.
- No obvious performance issues.
- No console errors.
- Consistent formatting.
- Existing brand colors and layout language preserved.
