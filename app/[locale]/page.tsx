import { AnimatedCard } from "@/components/AnimatedCard";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const home = dictionary.pages.home;

  return (
    <Container className="py-14 sm:py-20">
      <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            {home.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {home.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{home.description}</p>
        </div>
        <AnimatedCard>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            {home.cardLabel}
          </p>
          <p className="mt-4 text-2xl font-semibold leading-snug">{home.cardTitle}</p>
          <p className="mt-4 leading-7 text-muted">{home.cardText}</p>
        </AnimatedCard>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-3">
        {home.pillars.map((pillar) => (
          <AnimatedCard key={pillar.title}>
            <h2 className="text-xl font-semibold">{pillar.title}</h2>
            <p className="mt-3 leading-7 text-muted">{pillar.description}</p>
          </AnimatedCard>
        ))}
      </section>

      <section className="mt-20">
        <SectionHeader eyebrow={home.foundation.eyebrow} title={home.foundation.title} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {home.foundation.items.map((item) => (
            <div
              key={item}
              className="rounded-md border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
