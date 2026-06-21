"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

type NavbarProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function Navbar({ dictionary, locale }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const navItems = dictionary.navigation.items;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/88 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-5 py-3">
        <Link
          className="focus-ring rounded text-lg font-semibold tracking-normal"
          href={`/${locale}`}
        >
          {dictionary.brand.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label={dictionary.navigation.label}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="text-sm font-medium text-muted transition hover:text-foreground"
              href={`/${locale}${item.href}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher dictionary={dictionary} locale={locale} />
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? dictionary.navigation.closeMenu : dictionary.navigation.openMenu}
          className="focus-ring inline-flex size-10 items-center justify-center rounded-md border border-border bg-surface text-foreground md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-border bg-surface md:hidden">
          <Container className="grid gap-3 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="focus-ring rounded-md px-2 py-2 text-base font-medium text-foreground"
                href={`/${locale}${item.href}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <LanguageSwitcher dictionary={dictionary} locale={locale} />
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
