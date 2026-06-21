# Laser.dev

Laser.dev is the production-grade personal technology platform for Miguel Da Silva, also known as LaserDance.

It combines a technical portfolio, professional profile, open source showcase, technical blog, newsletter, content hub, and AIR (Artificial Intelligence Ready) reference implementation.

## Positioning

- Artificial Intelligence
- Backend Engineering
- Software Architecture
- Delivery Leadership
- Fintech
- Open Source

## Core Principles

- Multilingual from day one: English is the default language and Spanish is a first-class locale.
- Content as product: blog posts, projects, newsletters, and AIR metadata are structured assets, not incidental pages.
- AI-ready by design: public pages expose clear metadata, stable canonical URLs, and machine-readable context.
- Production-grade delivery: the platform targets Vercel, typed boundaries, CI-friendly checks, and explicit operational ownership.

## Target Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase
- MDX
- Resend-ready email architecture
- Vercel deployment

## Planned Routing

```text
/en
/es
/en/blog/introducing-air
/es/blog/introduciendo-air
/en/projects
/es/projects
/en/newsletter
/es/newsletter
```

## Repository Map

```text
app/
  [locale]/
content/
  blog/
    en/
    es/
  projects/
    en/
    es/
  newsletter/
    en/
    es/
docs/
src/
  components/
  lib/
    air/
    i18n/
    mdx/
    resend/
    seo/
    supabase/
  messages/
```

## Documentation

- [PROJECT_VISION.md](PROJECT_VISION.md)
- [AIR_STANDARD.md](AIR_STANDARD.md)
- [IMPLEMENTATION_ROADMAP.md](IMPLEMENTATION_ROADMAP.md)
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- [docs/I18N_STRATEGY.md](docs/I18N_STRATEGY.md)
- [docs/CONTENT_MODEL.md](docs/CONTENT_MODEL.md)
- [docs/SEO_AND_AIR_METADATA.md](docs/SEO_AND_AIR_METADATA.md)

## Status

Foundation documentation and project structure are being established before application code is introduced.
