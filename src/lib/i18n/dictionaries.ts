import en from "@/messages/en.json";
import es from "@/messages/es.json";
import type { Locale } from "@/lib/i18n/config";

const dictionaries = {
  en,
  es,
} as const;

export type Dictionary = (typeof dictionaries)["en"];
export type PageSkeleton = Dictionary["pages"]["about"];
export type PageKey = Exclude<keyof Dictionary["pages"], "home">;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
