"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Cta({
  heading,
  buttonLabel,
  buttonHref = "/store",
}: {
  heading?: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  const t = useTranslations("cta");

  return (
    <section
      id="contact"
      className="bg-slate-100 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-blue-600">
          <div className="grid items-center gap-12 px-8 py-12 sm:px-12 sm:py-16 lg:grid-cols-2 lg:px-16">
            {/* Left */}
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50">
                {t("badge")}
              </div>

              {/* Title */}
              <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {heading ?? t("heading")}
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-lg text-lg leading-8 text-blue-100">
                {t("description")}
              </p>

              {/* CTA */}
              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="h-14 rounded-2xl bg-white px-8 text-base font-semibold text-blue-700 hover:bg-slate-100"
                >
                  <Link
                    href={buttonHref}
                    className="inline-flex items-center gap-2"
                  >
                    {buttonLabel ?? t("buttonLabel")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              {/* Background blocks */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-3xl border border-white/10 bg-white/5" />
                <div className="absolute bottom-10 left-10 h-24 w-24 rounded-2xl border border-white/10 bg-white/5" />
              </div>

              {/* Mock panel */}
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                <div className="rounded-2xl bg-slate-900 p-6 shadow-2xl">
                  {/* Top */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <p className="text-sm text-slate-400">
                        {t("panel.infrastructureStatus")}
                      </p>

                      <h3 className="mt-1 text-xl font-semibold text-white">
                        ByteForge Cloud
                      </h3>
                    </div>

                    <div className="rounded-full bg-green-500/15 px-3 py-1 text-sm font-semibold text-green-400">
                      {t("panel.operational")}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-slate-800 p-4">
                      <p className="text-sm text-slate-400">
                        {t("panel.stats.uptime")}
                      </p>

                      <h4 className="mt-2 text-2xl font-bold text-white">
                        99.9%
                      </h4>
                    </div>

                    <div className="rounded-xl bg-slate-800 p-4">
                      <p className="text-sm text-slate-400">
                        {t("panel.stats.response")}
                      </p>

                      <h4 className="mt-2 text-2xl font-bold text-white">
                        12ms
                      </h4>
                    </div>

                    <div className="rounded-xl bg-slate-800 p-4">
                      <p className="text-sm text-slate-400">
                        {t("panel.stats.deployments")}
                      </p>

                      <h4 className="mt-2 text-2xl font-bold text-white">
                        {t("panel.stats.fast")}
                      </h4>
                    </div>

                    <div className="rounded-xl bg-slate-800 p-4">
                      <p className="text-sm text-slate-400">
                        {t("panel.stats.security")}
                      </p>

                      <h4 className="mt-2 text-2xl font-bold text-white">
                        {t("panel.stats.active")}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right */}
          </div>
        </div>
      </div>
    </section>
  );
}