"use client";

import { useTranslations } from "next-intl";
import { SectionBadge } from "./section-badge";

export function About() {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="border-b border-slate-200 bg-white px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Illustration */}
        <div className="relative">
          {/* Background card */}
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-slate-100" />

          <div className="rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={t("imageAlt")}
              width={627}
              height={627}
              className="mx-auto w-full rounded-xl"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-xl">
          <SectionBadge>{t("badge")}</SectionBadge>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {t("title")}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}