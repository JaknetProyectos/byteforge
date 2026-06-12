"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");

  const features = [
    t("features.uptime"),
    t("features.deployment"),
    t("features.ddos"),
  ];

  const stats = [
    {
      label: t("stats.cpuUsage"),
      value: "32%",
    },
    {
      label: t("stats.bandwidth"),
      value: "1.2TB",
    },
    {
      label: t("stats.latency"),
      value: "12ms",
    },
    {
      label: t("stats.security"),
      value: t("stats.protected"),
    },
  ];

  return (
    <section className="border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8 lg:pb-28 lg:pt-40">
        {/* Content */}
        <div className="max-w-2xl">
          {/* Title */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            {t("description")}
          </p>

          {/* Features */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="relative">
          {/* Main card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            {/* Top */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {t("server.label")}
                </p>

                <h3 className="mt-1 text-xl font-semibold text-slate-900">
                  BF-Cloud-X1
                </h3>
              </div>

              <div className="rounded-xl bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
                {t("server.status")}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm text-slate-500">{stat.label}</p>

                  <h4 className="mt-2 text-2xl font-bold text-slate-900">
                    {stat.value}
                  </h4>
                </div>
              ))}
            </div>

            {/* Bottom */}
            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-sm font-medium text-blue-800">
                {t("infrastructure")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}