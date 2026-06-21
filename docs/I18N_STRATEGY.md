# Internationalization Strategy

## Supported Locales

- `en`: English, default
- `es`: Spanish

Every public page must be reachable through a locale-prefixed URL. The platform should not expose unprefixed canonical content pages.

## Route Requirements

Examples:

```text
/en/blog/introducing-air
/es/blog/introduciendo-air
```

Routes should support localized slugs. Translated pages must be connected through a durable content ID rather than inferred by matching slugs.

## UI Translations

UI copy lives in `src/messages`.

The translation layer should cover:

- Navigation labels.
- Button labels.
- Form labels and validation messages.
- Common metadata fragments.
- Empty states.
- Newsletter and contact workflow copy.

## Content Translations

MDX content lives under locale-specific directories.

Each localized content file should define:

- `id`: shared identity across translations.
- `locale`: current locale.
- `slug`: locale-specific slug.
- `title`: localized title.
- `description`: localized description.
- `summary`: localized AIR summary.
- `sourceLanguage`: original writing language.
- `translationOf`: optional source content reference.

## Language Switcher

The language switcher should:

- Preserve equivalent content when a translation exists.
- Send users to the localized section index when an equivalent page does not exist.
- Never silently machine-translate content.
- Expose language names in their native language: English and Espanol.

## SEO Requirements

Each localized route must provide:

- Localized title.
- Localized description.
- Canonical URL.
- Alternate language URLs.
- Open Graph locale.
- Sitemap entry.

## Fallback Policy

Fallbacks are acceptable for UI chrome during development, but published content should not pretend a translation exists.

If a content translation is missing, the UI should show a clear unavailable state or route to the locale index.
