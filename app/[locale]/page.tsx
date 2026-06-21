import { notFound } from "next/navigation";
import { PremiumHome } from "@/components/home/PremiumHome";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return <PremiumHome dictionary={dictionary} locale={locale} />;
}
