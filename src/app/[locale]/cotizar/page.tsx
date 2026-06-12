"use client";

import React, { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import {
  ArrowRight,
  BadgeInfo,
  CheckCircle2,
  FileText,
} from "lucide-react";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

import { useCart } from "@/context/CartContext";

export default function CustomProductPage() {
  const t = useTranslations("customPlan");

  const router = useRouter();

  const { addItem } = useCart();

  const [quoteNumber, setQuoteNumber] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const [totalPrice, setTotalPrice] = useState<number | "">("");

  const [isAdding, setIsAdding] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    const finalPrice = Number(totalPrice) || 0;

    if (!quoteNumber.trim()) {
      setError(t("errors.quoteRequired"));
      return;
    }

    if (finalPrice <= 0) {
      setError(t("errors.invalidAmount"));
      return;
    }

    setIsAdding(true);

    const folioUpper = quoteNumber.trim().toUpperCase();

    addItem(
      {
        icon: "/logo.png",
        name: t("product.fullName", {
          quote: folioUpper,
          name,
          lastname,
          email,
        }),
        price: finalPrice,
        slug: `custom-quote-${quoteNumber.trim().toLowerCase()}`,
      },
      1
    );

    setTimeout(() => {
      setIsAdding(false);

      router.push("/carrito");
    }, 1000);
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50">
        {/* HERO */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 pb-14 pt-36 sm:px-6 lg:px-8 lg:pb-20">
            <div className="max-w-3xl">
              <div
                className="
                  inline-flex items-center gap-2 rounded-full
                  border border-blue-200 bg-blue-50
                  px-4 py-2
                "
              >
                <BadgeInfo className="h-4 w-4 text-blue-700" />

                <span
                  className="
                    text-[11px] font-bold uppercase
                    tracking-[0.18em] text-blue-700
                  "
                >
                  {t("hero.badge")}
                </span>
              </div>

              <h1
                className="
                  mt-7 text-4xl font-black tracking-tight
                  text-slate-900 sm:text-5xl lg:text-6xl
                "
              >
                {t("hero.title")}
              </h1>

              <p
                className="
                  mt-6 max-w-2xl text-base leading-8
                  text-slate-600 sm:text-lg
                "
              >
                {t("hero.description")}
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div
            className="
              mx-auto grid max-w-7xl overflow-hidden
              rounded-[2.5rem] border border-slate-200
              bg-white shadow-sm
              lg:grid-cols-[420px_1fr]
            "
          >
            {/* LEFT SIDE */}
            <div
              className="
                relative overflow-hidden
                border-b border-slate-200
                bg-white
                lg:border-b-0 lg:border-r
              "
            >
              <div className="relative flex h-full flex-col">
                {/* image */}
                <div className="flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logo.png"
                    width={300}
                    height={300}
                    alt={t("imageAlt")}
                    className="p-8"
                  />
                </div>

                {/* content */}
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div>
                    <div
                      className="
                        inline-flex items-center gap-2 rounded-full
                        border border-slate-200 bg-white
                        px-4 py-2
                      "
                    >
                      <FileText className="h-4 w-4 text-blue-600" />

                      <span className="text-xs font-semibold text-slate-700">
                        {t("authorized.badge")}
                      </span>
                    </div>

                    <h2
                      className="
                        mt-6 text-3xl font-black tracking-tight
                        text-slate-900
                      "
                    >
                      {t("authorized.title")}
                    </h2>

                    <p
                      className="
                        mt-5 text-sm leading-7
                        text-slate-600
                      "
                    >
                      {t("authorized.description")}
                    </p>
                  </div>

                  {/* summary card */}
                  <div
                    className="
                      mt-10 rounded-3xl border border-blue-100
                      bg-blue-50 p-5
                    "
                  >
                    <div className="flex gap-3">
                      <div
                        className="
                          flex h-10 w-10 shrink-0 items-center justify-center
                          rounded-2xl bg-blue-100
                        "
                      >
                        <CheckCircle2 className="h-5 w-5 text-blue-700" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {t("summary.title")}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {t("summary.description")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="p-6 sm:p-10 lg:p-14">
              <div className="max-w-2xl">
                <div>
                  <p
                    className="
                      text-sm font-bold uppercase
                      tracking-[0.18em] text-blue-700
                    "
                  >
                    {t("form.badge")}
                  </p>

                  <h2
                    className="
                      mt-4 text-3xl font-black tracking-tight
                      text-slate-900
                    "
                  >
                    {t("form.title")}
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                  {/* ERROR */}
                  {error && (
                    <div
                      className="
                        rounded-3xl border border-red-200
                        bg-red-50 p-5
                      "
                    >
                      <p className="text-sm font-semibold text-red-700">
                        {error}
                      </p>
                    </div>
                  )}

                  {/* NAME */}
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-3">
                      <label
                        htmlFor="name"
                        className="
                          text-xs font-bold uppercase
                          tracking-[0.18em] text-slate-500
                        "
                      >
                        {t("form.nameLabel")}
                      </label>

                      <input
                        id="name"
                        type="text"
                        required
                        placeholder={t("form.namePlaceholder")}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="
                          h-14 w-full rounded-2xl
                          border border-slate-200
                          bg-white px-5 text-sm
                          font-medium text-slate-900
                          outline-none transition-all
                          placeholder:text-slate-400
                          focus:border-blue-300
                          focus:ring-4 focus:ring-blue-100
                        "
                      />
                    </div>

                    <div className="space-y-3">
                      <label
                        htmlFor="lastname"
                        className="
                          text-xs font-bold uppercase
                          tracking-[0.18em] text-slate-500
                        "
                      >
                        {t("form.lastnameLabel")}
                      </label>

                      <input
                        id="lastname"
                        type="text"
                        required
                        placeholder={t("form.lastnamePlaceholder")}
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        className="
                          h-14 w-full rounded-2xl
                          border border-slate-200
                          bg-white px-5 text-sm
                          font-medium text-slate-900
                          outline-none transition-all
                          placeholder:text-slate-400
                          focus:border-blue-300
                          focus:ring-4 focus:ring-blue-100
                        "
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="space-y-3">
                    <label
                      htmlFor="email"
                      className="
                        text-xs font-bold uppercase
                        tracking-[0.18em] text-slate-500
                      "
                    >
                      {t("form.emailLabel")}
                    </label>

                    <input
                      id="email"
                      type="email"
                      required
                      placeholder={t("form.emailPlaceholder")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="
                        h-14 w-full rounded-2xl
                        border border-slate-200
                        bg-white px-5 text-sm
                        font-medium text-slate-900
                        outline-none transition-all
                        placeholder:text-slate-400
                        focus:border-blue-300
                        focus:ring-4 focus:ring-blue-100
                      "
                    />
                  </div>

                  {/* QUOTE */}
                  <div className="space-y-3">
                    <label
                      htmlFor="quoteNumber"
                      className="
                        text-xs font-bold uppercase
                        tracking-[0.18em] text-slate-500
                      "
                    >
                      {t("form.quoteLabel")}
                    </label>

                    <input
                      id="quoteNumber"
                      type="text"
                      required
                      placeholder={t("form.quotePlaceholder")}
                      value={quoteNumber}
                      onChange={(e) => setQuoteNumber(e.target.value)}
                      className="
                        h-14 w-full rounded-2xl
                        border border-slate-200
                        bg-white px-5 text-sm
                        font-mono uppercase tracking-wider
                        text-slate-900 outline-none transition-all
                        placeholder:text-slate-400
                        focus:border-blue-300
                        focus:ring-4 focus:ring-blue-100
                      "
                    />
                  </div>

                  {/* AMOUNT */}
                  <div className="space-y-3">
                    <label
                      htmlFor="totalPrice"
                      className="
                        text-xs font-bold uppercase
                        tracking-[0.18em] text-slate-500
                      "
                    >
                      {t("form.amountLabel")}
                    </label>

                    <div className="relative">
                      <div
                        className="
                          pointer-events-none absolute inset-y-0 left-0
                          flex items-center pl-5
                        "
                      >
                        <span className="text-sm font-bold text-blue-700">
                          $
                        </span>
                      </div>

                      <input
                        id="totalPrice"
                        type="number"
                        required
                        step="0.01"
                        min="0.01"
                        placeholder={t("form.amountPlaceholder")}
                        value={totalPrice}
                        onChange={(e) =>
                          setTotalPrice(
                            e.target.value !== ""
                              ? Number(e.target.value)
                              : ""
                          )
                        }
                        className="
                          h-14 w-full rounded-2xl
                          border border-slate-200
                          bg-white pl-9 pr-16 text-sm
                          font-semibold text-slate-900
                          outline-none transition-all
                          placeholder:text-slate-400
                          focus:border-blue-300
                          focus:ring-4 focus:ring-blue-100
                        "
                      />

                      <div
                        className="
                          pointer-events-none absolute inset-y-0 right-0
                          flex items-center pr-5
                        "
                      >
                        <span className="text-xs font-bold text-slate-500">
                          MXN
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* INFO */}
                  <div
                    className="
                      rounded-3xl border border-slate-200
                      bg-slate-50 p-5
                    "
                  >
                    <div className="flex gap-3">
                      <div
                        className="
                          flex h-10 w-10 shrink-0 items-center justify-center
                          rounded-2xl bg-blue-100
                        "
                      >
                        <CheckCircle2 className="h-5 w-5 text-blue-700" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {t("product.name", {
                            quote:
                              quoteNumber.trim().toUpperCase() || "...",
                          })}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {t("infoText.before")}
                          <strong className="text-slate-900">
                            {" "}
                            #{quoteNumber.trim().toUpperCase() || "..."}
                          </strong>
                          {t("infoText.after")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={isAdding}
                    className={`
                      flex h-14 w-full items-center justify-center gap-2
                      rounded-2xl text-sm font-semibold
                      transition-all duration-300
                      ${
                        isAdding
                          ? "bg-blue-100 text-blue-700"
                          : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"
                      }
                    `}
                  >
                    {isAdding ? (
                      t("buttons.adding")
                    ) : (
                      <>
                        {t("buttons.addToCart")}
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}