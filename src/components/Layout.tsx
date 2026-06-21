import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

type LayoutProps = {
  children: React.ReactNode;
  dictionary: Dictionary;
  locale: Locale;
};

export function Layout({ children, dictionary, locale }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar dictionary={dictionary} locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer dictionary={dictionary} locale={locale} />
    </div>
  );
}
