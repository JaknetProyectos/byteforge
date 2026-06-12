"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("footer");

  const legal = [
    { label: t("legal.privacy"), href: "#" },
    { label: t("legal.terms"), href: "#" },
    { label: t("legal.returns"), href: "#" },
  ];

  const navigation = [
    { label: t("navigation.home"), href: "/" },
    { label: t("navigation.plans"), href: "/store" },
    { label: t("navigation.about"), href: "/about" },
    { label: t("navigation.contact"), href: "/contact" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div className="max-w-md">
            {/* Logo */}
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl transition-colors">
                <Image
                  src="/logo.png"
                  alt={t("logoAlt")}
                  width={80}
                  height={100}
                  className="h-8 w-auto opacity-80"
                />
              </div>

              <div>
                <p className="text-xl font-bold tracking-tight text-slate-900">
                  ByteForge
                </p>

                <p className="text-sm text-slate-500">
                  {t("brand")}
                </p>
              </div>
            </Link>

            {/* Description */}
            <p className="mt-6 text-base leading-7 text-slate-600">
              {t("description")}
            </p>

            {/* Contact */}
            <div className="mt-8 space-y-3 text-sm text-slate-600">
              <p>{t("address")}</p>

              <p>
                {t("phone")}
                {" "}
                <a
                  href="tel:+5215552445783"
                  className="font-medium text-slate-900 transition-colors hover:text-blue-700"
                >
                  +52 1 55 5244 5783
                </a>
              </p>

              <p>
                {t("email")}
                {" "}
                <a
                  href="mailto:tuvoz@vesperhost.com"
                  className="font-medium text-slate-900 transition-colors hover:text-blue-700"
                >
                  tuvoz@vesperhost.com
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              {t("navigationTitle")}
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              {t("legalTitle")}
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              {legal.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Payment */}
            <div className="mt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                {t("payments")}
              </p>

              <Image
                src="/cards.png"
                alt={t("paymentsAlt")}
                width={111}
                height={34}
                className="mt-4 h-8 w-auto opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("copyright")}</p>

          <p>{t("bottomText")}</p>
        </div>
      </div>
    </footer>
  );
}