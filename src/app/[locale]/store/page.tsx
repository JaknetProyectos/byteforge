import { useLocale, useTranslations } from "next-intl";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { ProductCard } from "@/components/site/product-card";
import { SectionBadge } from "@/components/site/section-badge";

import { plansEnglish, plansSpanish } from "@/data/plans";
import { Link } from "@/i18n/routing";

export const metadata = {
  title: "Store — ByteForge",
  description:
    "Give your website the excellence it deserves — select hosting that consistently delivers the best!",
};

export default function StorePage() {
  const t = useTranslations("storePage");
  const locale = useLocale()

  const plans = locale == "es" ? plansSpanish : plansEnglish;


  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50">
      <Header />

      <main>
        <PageHero
          title={t("hero.title")}
          subtitle={t("hero.subtitle")}
        />

        {/* Plans section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Heading */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <SectionBadge>
                  {t("plans.badge")}
                </SectionBadge>

                <h2 className="mt-6 max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
                  {t("plans.title")}
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-slate-600">
                {t("plans.description")}
              </p>
            </div>

            {/* Grid */}
            <div className="mt-16 grid gap-6 md:grid-cols-3 xl:grid-cols-4">
              {plans.map((product) => (
                <ProductCard
                  key={product.name}
                  product={product}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Flexibility section */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div
              className="
                relative overflow-hidden rounded-[2.5rem]
                border border-slate-200 bg-white
                px-8 py-14 shadow-sm
                sm:px-12 sm:py-16
                lg:px-16
              "
            >
              {/* Background decoration */}
              <div className="pointer-events-none absolute inset-0">
                {/* Soft blue glow */}
                <div className="absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-blue-100 blur-3xl opacity-70" />

                {/* Grid */}
                <div
                  className="
                    absolute inset-0 opacity-[0.035]
                    [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
                    [background-size:56px_56px]
                  "
                />
              </div>

              <div className="relative grid gap-14 lg:grid-cols-[1fr_auto] lg:items-center">
                {/* Left */}
                <div>
                  <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                    {t("flexibility.badge")}
                  </div>

                  <h2 className="mt-7 max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
                    {t("flexibility.title")}
                  </h2>

                  <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                    {t("flexibility.description")}
                  </p>
                </div>

                {/* Right */}
                <div className="flex flex-col items-start gap-5">
                  <Link
                    href="/cotizar"
                    className="
                      inline-flex items-center justify-center
                      rounded-2xl bg-blue-600 px-8 py-4
                      text-sm font-semibold text-white
                      transition-all duration-300
                      hover:bg-blue-700 hover:shadow-lg
                    "
                  >
                    {t("flexibility.button")}
                  </Link>

                  <p className="max-w-xs text-sm leading-7 text-slate-500">
                    {t("flexibility.note")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}