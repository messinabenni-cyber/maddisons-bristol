# Maddisons Vehicle Body Repair — Vercel build

Mobile-first React + Vite + TypeScript + Tailwind rebuild of the Maddisons
Manus deployment, structured for Vercel hosting.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Project structure

```
src/
├── App.tsx                   # Wouter routes
├── main.tsx                  # Entry
├── styles.css                # Tailwind + custom layer
├── data/                     # Typed content
│   ├── businessInfo.ts       # NAP, hours, schema constants
│   ├── services.ts           # 11 service pages
│   ├── areas.ts              # 14 priority + 8 secondary
│   ├── caseStudies.ts        # 3 before/after journeys
│   ├── testimonials.ts       # 3 workshop-held testimonials
│   └── faqs.ts               # 4 shared FAQs
├── components/
│   ├── SiteShell.tsx         # Trust ribbon + header + footer
│   ├── QuoteForm.tsx         # 3-step quote enquiry
│   └── SharedSections.tsx    # Premium / workshop / FAQ / final-CTA blocks
├── pages/                    # All routes
└── lib/seo.tsx               # usePageMeta + JSON-LD helpers
public/
├── sitemap.xml               # 39 URLs (regenerate if you change paths)
├── robots.txt
└── images/                   # Drop the 4 hero images here
```

## Routes (39)

- `/` — homepage
- `/services/` + 11 children
- `/areas/` + 14 children
- `/about/`, `/contact/`, `/before-after/`, `/faq/`, `/blog/`
- 6 legal pages + 3 alias redirects
