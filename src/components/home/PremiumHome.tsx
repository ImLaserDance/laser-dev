"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Cpu,
  GitBranch,
  Mail,
  Radio,
  Sparkles,
  Workflow,
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/Container";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type PremiumHomeProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function PremiumHome({ dictionary, locale }: PremiumHomeProps) {
  const home = dictionary.pages.home;
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 86]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -58]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.28]);
  const smoothPortraitY = useSpring(portraitY, { stiffness: 70, damping: 22 });
  const smoothCardY = useSpring(cardY, { stiffness: 70, damping: 22 });

  return (
    <div className="overflow-hidden bg-background text-foreground">
      <motion.div
        aria-hidden
        style={{ opacity: gridOpacity }}
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]"
      />

      <section
        ref={heroRef}
        className="relative z-10 min-h-[calc(100vh-4rem)] py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm text-white/70 shadow-2xl shadow-black/30 backdrop-blur">
                <Sparkles aria-hidden size={16} className="text-cyan-300" />
                <span>{home.hero.kicker}</span>
              </div>
              <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                {home.hero.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/64 sm:text-xl">
                {home.hero.description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/${locale}/projects`}
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-black transition hover:bg-cyan-100"
                >
                  {home.hero.primaryCta}
                  <ArrowUpRight aria-hidden size={18} />
                </Link>
                <Link
                  href={`/${locale}/air`}
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/12 bg-white/[0.045] px-5 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
                >
                  {home.hero.secondaryCta}
                </Link>
              </div>
            </motion.div>

            <div className="relative min-h-[620px] lg:min-h-[680px]">
              <motion.div
                style={{ y: smoothPortraitY }}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                className="absolute inset-x-0 top-0 mx-auto max-w-[520px]"
              >
                <div className="relative aspect-[0.82] overflow-hidden rounded-md border border-white/12 bg-white/[0.04] shadow-2xl shadow-black/60">
                  <Image
                    src="/images/profile-pic-2.png"
                    alt={home.hero.portraitAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 42vw, 90vw"
                    className="object-cover object-[55%_36%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                </div>
              </motion.div>

              <motion.div
                style={{ y: smoothCardY }}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.32, ease: "easeOut" }}
                className="absolute bottom-4 right-0 w-[min(92%,360px)] rounded-md border border-white/12 bg-[#08090d]/86 p-5 shadow-2xl shadow-black/60 backdrop-blur-xl sm:bottom-10"
              >
                <p className="text-sm text-cyan-200">{home.identity.label}</p>
                <p className="mt-3 text-2xl font-semibold text-white">{home.identity.name}</p>
                <p className="mt-3 leading-7 text-white/62">{home.identity.description}</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {home.identity.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-md border border-white/10 bg-white/[0.04] p-3"
                    >
                      <p className="text-xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-1 text-xs text-white/52">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      <PremiumSection eyebrow={home.positioning.eyebrow} title={home.positioning.title}>
        <div className="grid gap-4 md:grid-cols-3">
          {home.positioning.cards.map((card, index) => (
            <FloatingCard key={card.title} index={index}>
              <p className="text-sm text-cyan-200">{card.label}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-4 leading-7 text-white/58">{card.description}</p>
            </FloatingCard>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection eyebrow={home.projects.eyebrow} title={home.projects.title}>
        <div className="grid gap-4 lg:grid-cols-3">
          {home.projects.items.map((project, index) => (
            <FloatingCard key={project.title} index={index} className="min-h-[280px]">
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-md border border-white/10 bg-white/[0.05] p-3 text-cyan-200">
                  <GitBranch aria-hidden size={22} />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/52">
                  {project.status}
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-white/58">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-white/58"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FloatingCard>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection eyebrow={home.air.eyebrow} title={home.air.title}>
        <div className="grid items-stretch gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <FloatingCard className="flex min-h-[420px] flex-col justify-between">
            <div>
              <div className="inline-flex rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                <Cpu aria-hidden size={24} />
              </div>
              <p className="mt-8 text-2xl font-semibold leading-snug text-white">
                {home.air.statement}
              </p>
              <p className="mt-5 leading-7 text-white/58">{home.air.description}</p>
            </div>
            <Link
              href={`/${locale}/air`}
              className="focus-ring mt-8 inline-flex w-fit items-center gap-2 rounded-md border border-white/12 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/50"
            >
              {home.air.cta}
              <ArrowUpRight aria-hidden size={17} />
            </Link>
          </FloatingCard>
          <div className="grid gap-4 sm:grid-cols-2">
            {home.air.points.map((point, index) => (
              <FloatingCard key={point.title} index={index}>
                <Workflow aria-hidden size={22} className="text-amber-200" />
                <h3 className="mt-5 text-xl font-semibold text-white">{point.title}</h3>
                <p className="mt-3 leading-7 text-white/58">{point.description}</p>
              </FloatingCard>
            ))}
          </div>
        </div>
      </PremiumSection>

      <PremiumSection eyebrow={home.articles.eyebrow} title={home.articles.title}>
        <div className="grid gap-4 md:grid-cols-3">
          {home.articles.items.map((article, index) => (
            <FloatingCard key={article.title} index={index}>
              <BookOpen aria-hidden size={22} className="text-fuchsia-200" />
              <p className="mt-6 text-sm text-white/45">{article.category}</p>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
                {article.title}
              </h3>
              <p className="mt-4 leading-7 text-white/58">{article.description}</p>
            </FloatingCard>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection eyebrow={home.newsletter.eyebrow} title={home.newsletter.title}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid gap-5 rounded-md border border-white/12 bg-white/[0.045] p-5 shadow-2xl shadow-black/30 backdrop-blur md:grid-cols-[1fr_auto]"
        >
          <div>
            <Radio aria-hidden size={24} className="text-cyan-200" />
            <p className="mt-5 max-w-3xl text-xl leading-8 text-white/72">
              {home.newsletter.description}
            </p>
          </div>
          <form className="flex w-full flex-col gap-3 self-end sm:w-[360px]">
            <input
              type="email"
              placeholder={home.newsletter.placeholder}
              className="min-h-12 rounded-md border border-white/12 bg-black/30 px-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300/70"
            />
            <button
              type="button"
              className="min-h-12 rounded-md bg-white px-5 text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              {home.newsletter.cta}
            </button>
          </form>
        </motion.div>
      </PremiumSection>

      <section className="relative z-10 py-20 sm:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-md border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.11),rgba(255,255,255,0.035))] p-8 shadow-2xl shadow-black/40 sm:p-12"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              {home.contact.eyebrow}
            </p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  {home.contact.title}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/62">
                  {home.contact.description}
                </p>
              </div>
              <Link
                href={`/${locale}/contact`}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-black transition hover:bg-cyan-100"
              >
                <Mail aria-hidden size={18} />
                {home.contact.cta}
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

function PremiumSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative z-10 py-16 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-9 max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </Container>
    </section>
  );
}

function FloatingCard({
  children,
  index = 0,
  className = "",
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      whileHover={{ y: -8, borderColor: "rgba(103, 232, 249, 0.34)" }}
      transition={{ duration: 0.52, delay: index * 0.06, ease: "easeOut" }}
      className={`rounded-md border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/24 backdrop-blur ${className}`}
    >
      {children}
    </motion.article>
  );
}
