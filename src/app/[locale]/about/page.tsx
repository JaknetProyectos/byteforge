import { Box, Globe, Users } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { Cta } from "@/components/site/cta";

export async function generateMetadata() {
  const t = await getTranslations("aboutPage.metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

const iconMap = {
  globe: Globe,
  box: Box,
  users: Users,
};

export default async function AboutPage() {
  const t = await getTranslations("aboutPage");

  const aboutValues = [
    {
      title: t("values.mission.title"),
      desc: t("values.mission.desc"),
      icon: "globe" as const,
    },
    {
      title: t("values.role.title"),
      desc: t("values.role.desc"),
      icon: "box" as const,
    },
    {
      title: t("values.value.title"),
      desc: t("values.value.desc"),
      icon: "users" as const,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50">
      <Header />

      <main>
        <PageHero
          title={t("hero.title")}
          subtitle={t("hero.subtitle")}
        />

        {/* About section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Top intro */}
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              {/* Left */}
              <div>
                <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  {t("badge")}
                </span>

                <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                  {t("sectionTitle")}
                </h2>
              </div>

              {/* Right */}
              <div>
                <p className="text-lg leading-8 text-slate-600">
                  {t("intro.first")}
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {t("intro.second")}
                </p>
              </div>
            </div>

            {/* Cards */}
            <div className="mt-20 grid gap-6 lg:grid-cols-3">
              {aboutValues.map((value, index) => {
                const Icon = iconMap[value.icon];

                return (
                  <div
                    key={value.title}
                    className={`
                      group relative overflow-hidden rounded-[2rem]
                      border border-slate-200 bg-white p-8 shadow-sm
                      transition-all duration-300
                      hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl
                      ${index === 1 ? "lg:-mt-6" : ""}
                    `}
                  >
                    {/* Top accent */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-blue-600" />

                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-5 text-base leading-8 text-slate-600">
                      {value.desc}
                    </p>

                    {/* Bottom decoration */}
                    <div className="mt-8 h-px w-full bg-slate-100" />

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-500">
                        ByteForge
                      </span>

                      <div className="h-2 w-2 rounded-full bg-blue-600" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="pb-16">
          <Cta
            heading={t("cta.heading")}
            buttonLabel={t("cta.button")}
            buttonHref="/contact"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}