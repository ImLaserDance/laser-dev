# SEO and AIR Metadata

## Metadata Principle

SEO metadata and AIR metadata should come from the same content source of truth. This avoids drift between what humans see, what search engines index, and what AI systems read.

## Per-Locale Metadata

Every public route should define localized:

- Title
- Description
- Canonical URL
- Alternate language URLs
- Open Graph title and description
- Open Graph locale
- AIR summary
- Topic tags
- Audience tags

## Canonical URL Rules

- Canonical URLs are absolute.
- Canonical URLs include the locale prefix.
- Canonical URLs are stable after publication.
- Alternate language URLs point to equivalent localized content when available.

## Sitemap Rules

The sitemap should include:

- Static routes by locale.
- Blog posts by locale.
- Projects by locale.
- Newsletter issues by locale.
- Last modified timestamps when known.
- Alternate language references where supported.

## AIR Index

The platform should eventually expose an AIR index that lists public AI-ready resources. The index should be generated from the same validated metadata used by pages.

Potential route:

```text
/air.json
```

The public AIR index should not expose private operational data, drafts, secrets, or unpublished content.
