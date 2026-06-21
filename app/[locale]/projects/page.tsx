import { SkeletonPage } from "@/components/SkeletonPage";
import { getPageDictionary } from "@/lib/i18n/page";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ProjectsPage({ params }: PageProps) {
  const page = await getPageDictionary(params, "projects");

  return <SkeletonPage page={page} />;
}
