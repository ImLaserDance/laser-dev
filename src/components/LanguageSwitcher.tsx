"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import { languages, locales, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type LanguageSwitcherProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function LanguageSwitcher({ locale, dictionary }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div
      className="flex rounded-md border border-border bg-surface p-1"
      aria-label={dictionary.language.label}
    >
      {locales.map((targetLocale) => {
        const active = targetLocale === locale;
        const href = switchLocale(pathname, targetLocale);

        return (
          <Link
            key={targetLocale}
            href={href}
            aria-current={active ? "true" : undefined}
            className={`focus-ring rounded px-3 py-1.5 text-sm font-medium transition ${
              active ? "bg-accent text-white" : "text-muted hover:text-foreground"
            }`}
          >
            {languages[targetLocale].shortLabel}
          </Link>
        );
      })}
    </div>
  );
}

function switchLocale(pathname: string, targetLocale: Locale): Route {
  const segments = pathname.split("/");

  if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
    segments[1] = targetLocale;
    return (segments.join("/") || `/${targetLocale}`) as Route;
  }

  return `/${targetLocale}` as Route;
}
