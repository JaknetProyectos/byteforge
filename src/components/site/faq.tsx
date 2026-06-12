"use client";

import { useTranslations } from "next-intl";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SectionBadge } from "./section-badge";
import { faqs } from "@/data/faqs";

function FaqColumn({
  items,
  prefix,
}: {
  items: { q: string; a: string }[];
  prefix: string;
}) {
  return (
    <Accordion type="multiple" className="space-y-4">
      {items.map((item, i) => (
        <AccordionItem
          key={item.q}
          value={`${prefix}-${i}`}
          className="rounded-2xl border border-slate-200 bg-blue-300 px-6 transition-all hover:border-slate-300"
        >
          <AccordionTrigger className="py-5 text-left text-base font-semibold text-white hover:no-underline">
            {item.q}
          </AccordionTrigger>

          <AccordionContent className="pb-5 pr-8 text-sm leading-7 text-white">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function Faq() {
  const t = useTranslations("faq");

  const localizedFaqs = faqs;

  const left = localizedFaqs.filter((_, i) => i % 2 === 0);
  const right = localizedFaqs.filter((_, i) => i % 2 === 1);

  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[340px_1fr] lg:gap-20">
        {/* Left side */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <SectionBadge>
            {t("badge")}
          </SectionBadge>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white-900 sm:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 text-lg leading-8 text-white-600">
            {t("description")}
          </p>
        </div>

        {/* Right side */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <FaqColumn items={left} prefix="l" />
          <FaqColumn items={right} prefix="r" />
        </div>
      </div>
    </section>
  );
}