"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import { SectionBadge } from "./section-badge";

export function GlobalTrust() {
  const t = useTranslations("globalTrust");

  return (
    <section className="border-b border-slate-200 bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 px-8 py-14 text-center shadow-sm sm:px-12 sm:py-16">
          {/* Badge */}
          <SectionBadge>{t("badge")}</SectionBadge>

          {/* Title */}
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {t("title")}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {t("description")}
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/store"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}