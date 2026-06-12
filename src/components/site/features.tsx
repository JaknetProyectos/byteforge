"use client";

import { useTranslations } from "next-intl";
import {
  DatabaseBackup,
  Infinity as InfinityIcon,
  KeyRound,
  Lock,
  Maximize2,
  Zap,
} from "lucide-react";

import { SectionBadge } from "./section-badge";

export function Features() {
  const t = useTranslations("features");

  const features = [
    {
      icon: Zap,
      title: t("items.uptime.title"),
      desc: t("items.uptime.desc"),
    },
    {
      icon: Lock,
      title: t("items.security.title"),
      desc: t("items.security.desc"),
    },
    {
      icon: Maximize2,
      title: t("items.scalability.title"),
      desc: t("items.scalability.desc"),
    },
    {
      icon: DatabaseBackup,
      title: t("items.backups.title"),
      desc: t("items.backups.desc"),
    },
    {
      icon: InfinityIcon,
      title: t("items.bandwidth.title"),
      desc: t("items.bandwidth.desc"),
    },
    {
      icon: KeyRound,
      title: t("items.ssl.title"),
      desc: t("items.ssl.desc"),
    },
  ];

  return (
    <section
      id="features"
      className="border-b border-slate-200 bg-slate-50 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <SectionBadge>{t("badge")}</SectionBadge>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            {t("title")}
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-100">
                <feature.icon className="h-6 w-6" strokeWidth={1.8} />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}