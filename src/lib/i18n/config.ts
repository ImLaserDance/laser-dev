export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const languages: Record<Locale, { label: string; shortLabel: string }> = {
  en: {
    label: "English",
    shortLabel: "EN",
  },
  es: {
    label: "Espanol",
    shortLabel: "ES",
  },
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
