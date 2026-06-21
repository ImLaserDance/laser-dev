import { SkeletonPage } from "@/components/SkeletonPage";
import { getPageDictionary } from "@/lib/i18n/page";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function BlogPage({ params }: PageProps) {
  const page = await getPageDictionary(params, "blog");

  return <SkeletonPage page={page} />;
}
