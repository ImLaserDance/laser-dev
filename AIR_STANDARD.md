# AIR Standard

AIR means Artificial Intelligence Ready.

For Laser.dev, AIR is both a platform requirement and a public reference implementation for making personal and technical sites easier for AI systems to understand, cite, summarize, and navigate.

## Objectives

- Make every public page understandable to humans, search engines, and AI assistants.
- Provide stable language-aware metadata for pages, posts, projects, and newsletter issues.
- Preserve authorship, canonical URLs, update timestamps, and semantic relationships.
- Expose concise machine-readable summaries without replacing the human experience.
- Treat AI-readiness as an architecture concern, not a marketing feature.

## Language Requirements

AIR metadata must be available per supported locale.

Supported locales:

- `en`: English, default
- `es`: Spanish

Each localized page should define:

- Locale
- Canonical URL
- Alternate language URLs
- Title
- Description
- Summary
- Topic tags
- Audience
- Author
- Published and updated timestamps where relevant
- Content type
- Related entities or resources

## AIR Metadata Shape

The exact implementation can evolve, but every content item should be able to provide this conceptual contract:

```ts
type AirMetadata = {
  locale: "en" | "es";
  canonicalUrl: string;
  alternateUrls: Record<"en" | "es", string>;
  title: string;
  description: string;
  summary: string;
  contentType: "page" | "post" | "project" | "newsletter" | "profile";
  topics: string[];
  audience: string[];
  author: {
    name: "Miguel Da Silva";
    brand: "LaserDance";
  };
  publishedAt?: string;
  updatedAt?: string;
  sourceLanguage?: "en" | "es";
  translationOf?: string;
  related?: Array<{
    label: string;
    url: string;
    relationship: string;
  }>;
};
```

## Page-Level AIR Expectations

- Use canonical and alternate language links.
- Keep titles and descriptions localized.
- Include Open Graph and structured metadata per language.
- Expose consistent content type and topic tags.
- Keep slugs stable once published.
- Avoid orphaned translations: if a language variant is missing, the UI must communicate that clearly.

## Blog AIR Expectations

Blog posts must support language variants through shared content identity and locale-specific slugs.

Example:

```text
/en/blog/introducing-air
/es/blog/introduciendo-air
```

Both variants should share a durable content ID while preserving localized titles, descriptions, summaries, body content, and SEO metadata.

## Reference Implementation Goals

Laser.dev should eventually publish:

- A visible explanation of AIR.
- A machine-readable AIR index.
- Per-page metadata that can be inspected and validated.
- Documentation showing how the project implements AIR with Next.js App Router, MDX, and Supabase.

## Validation Checklist

- Every public route is locale-prefixed.
- Every localized route has localized metadata.
- Every content item has an AIR metadata object.
- Every translated content pair has alternate links.
- Every canonical URL is stable and absolute.
- Every generated sitemap includes locale-specific routes.
- Every RSS or feed output is language-aware.
