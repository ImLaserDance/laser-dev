import { AnimatedCard } from "@/components/AnimatedCard";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import type { PageSkeleton } from "@/lib/i18n/dictionaries";

type SkeletonPageProps = {
  page: PageSkeleton;
};

export function SkeletonPage({ page }: SkeletonPageProps) {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeader eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {page.cards.map((card) => (
          <AnimatedCard key={card.title}>
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="mt-3 leading-7 text-muted">{card.description}</p>
          </AnimatedCard>
        ))}
      </div>
    </Container>
  );
}
