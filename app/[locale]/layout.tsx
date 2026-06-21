import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Layout } from "@/components/Layout";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return {
    title: dictionary.metadata.home.title,
    description: dictionary.metadata.home.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        es: "/es",
      },
    },
    openGraph: {
      title: dictionary.metadata.home.title,
      description: dictionary.metadata.home.description,
      locale: locale === "en" ? "en_US" : "es_ES",
      siteName: "Laser.dev",
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <html lang={locale}>
      <body>
        <Layout dictionary={dictionary} locale={locale as Locale}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
