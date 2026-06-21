# Architecture

## System Overview

Laser.dev is a multilingual content and identity platform built with Next.js App Router. The architecture separates public experience, localized content, metadata generation, integrations, and publishing operations.

## Primary Responsibilities

- Render the public site for English and Spanish audiences.
- Load and validate MDX content.
- Generate localized SEO and AIR metadata.
- Showcase projects and open source work.
- Support blog and newsletter publishing.
- Provide clean boundaries for Supabase and Resend.
- Deploy predictably to Vercel.

## High-Level Modules

```text
app/[locale]        Locale-prefixed routes and layouts
content/            Versioned MDX content by domain and language
src/components/     Reusable UI components
src/messages/       UI translation dictionaries
src/lib/i18n/       Locale routing, dictionaries, and language switching
src/lib/mdx/        MDX loading, parsing, and validation
src/lib/seo/        Metadata helpers, sitemap, canonical URLs
src/lib/air/        AIR metadata contracts and validation
src/lib/supabase/   Supabase server and client boundaries
src/lib/resend/     Email provider abstraction and Resend adapter
docs/               Architecture and operating documentation
```

## Request Flow

1. A request enters a locale-prefixed route such as `/en/blog/introducing-air`.
2. Middleware or route helpers validate the locale.
3. Route loaders resolve content by locale and slug.
4. Metadata helpers generate SEO, Open Graph, alternate language, and AIR metadata.
5. Server components render the page using shared UI components and localized messages.
6. Optional server actions communicate with Supabase or email providers through explicit integration boundaries.

## Internationalization

All public routes must be prefixed with a supported locale:

- `/en`
- `/es`

English is the default language. Spanish is a first-class language, not a fallback-only translation.

The architecture should support:

- UI translation dictionaries.
- Localized MDX content.
- Localized slugs.
- Localized SEO metadata.
- Localized AIR metadata.
- Language switcher with route mapping.
- Canonical and alternate language links.

## Content Architecture

Content is organized by domain and locale:

```text
content/blog/en
content/blog/es
content/projects/en
content/projects/es
content/newsletter/en
content/newsletter/es
```

Each content item should include a durable content ID so translated variants can be connected even when slugs differ.

## Data Architecture

The first implementation should keep public content in the repository as MDX. Supabase should own dynamic and operational data such as:

- Newsletter subscribers.
- Contact submissions.
- Optional profile or project metrics.
- Optional content feedback signals.

This keeps editorial content reviewable in Git while leaving runtime state in a managed database.

## Email Architecture

The project should be Resend-ready without hard-coding Resend into product logic.

Email responsibilities should pass through an internal provider interface so the platform can support:

- Subscription confirmation.
- Contact notifications.
- Future newsletter sends.
- Local development stubs.

## Metadata Architecture

Metadata is generated from a shared page/content contract. SEO and AIR metadata should be sibling outputs from the same source of truth.

Metadata surfaces include:

- Next.js route metadata.
- Canonical URLs.
- Alternate language URLs.
- Open Graph metadata.
- Sitemap entries.
- AIR metadata.
- Feed metadata.

## Deployment Architecture

Vercel is the target deployment platform.

The deployment model should include:

- Preview deployments for pull requests.
- Production deployment from the default branch.
- Environment variables for Supabase and Resend.
- Build-time validation for content and metadata.
- Runtime checks for server-only secrets.

## Quality Gates

The platform should eventually enforce:

- Type checking.
- Linting.
- Formatting.
- Content schema validation.
- Metadata validation.
- Route generation tests.
- Language switcher tests.
- Basic accessibility checks.
