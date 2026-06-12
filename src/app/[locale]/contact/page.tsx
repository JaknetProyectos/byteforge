import { Mail, MessageSquare, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { ContactForm } from "@/components/site/contact-form";

export async function generateMetadata() {
  const t = await getTranslations("contactPage.metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

function InfoCard({
  icon: Icon,
  title,
  value,
  href,
  className,
}: {
  icon: typeof Mail;
  title: string;
  value: string;
  href?: string;
  className?: string;
}) {
  const inner = (
    <div
      className={`
        group rounded-[1.75rem] border border-slate-200 bg-white
        p-5 shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl
        ${className ?? ""}
      `}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700">
          <Icon className="h-5 w-5" strokeWidth={1.9} />
        </div>

        {/* Content */}
        <div className="min-w-0">
          <p className="text-base font-bold tracking-tight text-slate-900">
            {title}
          </p>

          <p className="mt-1 break-words text-sm leading-6 text-slate-600">
            {value}
          </p>
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

export default async function ContactPage() {
  const t = await getTranslations("contactPage");

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50">
      <Header />

      <main>
        <PageHero
          title={t("hero.title")}
          subtitle={t("hero.subtitle")}
        />

        {/* Contact section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_420px] lg:items-center">
            {/* Left side */}
            <div>
              {/* Badge */}
              <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                {t("badge")}
              </div>

              {/* Heading */}
              <h2 className="mt-7 max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
                {t("heading")}
              </h2>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                {t("description")}
              </p>

              {/* Contact cards */}
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <InfoCard
                  icon={MessageSquare}
                  title={t("cards.liveSupport.title")}
                  value={t("cards.liveSupport.value")}
                />

                <InfoCard
                  icon={Mail}
                  title={t("cards.email.title")}
                  value="tuvoz@vesperhost.com"
                  href="mailto:tuvoz@vesperhost.com"
                />

                <InfoCard
                  icon={Phone}
                  title={t("cards.phone.title")}
                  value="+52 1 55 5244 5783"
                  href="tel:+5215552445783"
                  className="sm:col-span-2"
                />
              </div>
            </div>

            {/* Right side illustration */}
            <div className="relative">
              {/* Background */}
              <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-blue-100/50 blur-3xl" />

              {/* Card */}
              <div
                className="
                  relative overflow-hidden rounded-[2.5rem]
                  border border-slate-200 bg-white p-6 shadow-xl
                "
              >
                {/* Grid */}
                <div
                  className="
                    absolute inset-0 opacity-[0.04]
                    [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
                    [background-size:48px_48px]
                  "
                />

                {/* Top decoration */}
                <div className="relative flex items-center gap-2 border-b border-slate-100 pb-4">
                  <div className="h-3 w-3 rounded-full bg-blue-600" />
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                </div>

                {/* Image */}
                <div className="relative pt-6">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661301053519-880c720aadcd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={t("imageAlt")}
                    width={627}
                    height={627}
                    className="mx-auto w-full max-w-md object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}