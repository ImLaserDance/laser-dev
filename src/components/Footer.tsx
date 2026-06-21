import Link from "next/link";
import { Container } from "@/components/Container";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

type FooterProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function Footer({ dictionary, locale }: FooterProps) {
  return (
    <footer className="border-t border-border bg-surface/70">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">{dictionary.brand.name}</p>
          <p className="mt-1 text-sm text-muted">{dictionary.footer.tagline}</p>
        </div>
        <nav aria-label={dictionary.footer.navLabel} className="flex flex-wrap gap-4 text-sm">
          {dictionary.navigation.items.map((item) => (
            <Link
              key={item.href}
              className="text-muted transition hover:text-foreground"
              href={`/${locale}${item.href}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
