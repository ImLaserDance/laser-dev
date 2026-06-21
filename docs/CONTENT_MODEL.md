# Content Model

## Content Domains

Laser.dev starts with these content domains:

- Pages
- Blog posts
- Projects
- Newsletter issues
- Profile sections
- AIR reference material

## Shared Content Fields

Every publishable content item should support:

```yaml
id: durable-content-id
locale: en
slug: example-slug
title: Example title
description: Short SEO description
summary: AIR-oriented summary
status: draft
publishedAt: 2026-01-01
updatedAt: 2026-01-01
topics:
  - artificial-intelligence
  - software-architecture
audience:
  - engineering-leaders
sourceLanguage: en
translationOf:
```

## Blog Posts

Blog posts should be long-form MDX documents with localized frontmatter and stable IDs.

Recommended route shape:

```text
/[locale]/blog/[slug]
```

## Projects

Projects should highlight architecture, impact, maturity, stack, repository links, and contribution paths.

Recommended route shape:

```text
/[locale]/projects/[slug]
```

## Newsletter Issues

Newsletter content should be archive-friendly even before email sending is implemented.

Recommended route shape:

```text
/[locale]/newsletter/[slug]
```

## Content Statuses

- `draft`: available locally but not included in public indexes.
- `published`: public and included in metadata surfaces.
- `archived`: public or hidden depending on domain rules, but excluded from active indexes.

## Validation

Content validation should run during build and CI. Invalid metadata should fail the build before deployment.
