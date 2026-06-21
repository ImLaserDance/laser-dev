import { notFound } from "next/navigation";
import { getDictionary, type PageKey } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

export async function getPageDictionary(params: Promise<{ locale: string }>, page: PageKey) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return getDictionary(locale).pages[page];
}
