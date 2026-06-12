"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Minus,
  Plus,
  ShieldCheck,
} from "lucide-react";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

import { useCart } from "@/context/CartContext";

import { Plan } from "@/types/plan";
import { formatPrice } from "@/lib/price";

type Props = {
  plan: Plan;
  open: boolean;
  onClose: () => void;
  onAddToCart?: () => void;
};

export function PlanModal({
  plan,
  open,
  onClose,
}: Props) {
  const t = useTranslations("planModal");

  const { addItem } = useCart();

  const [mounted, setMounted] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (!mounted || !open) return null;

  const handleAdd = () => {
    addItem(
      {
        slug: plan.slug,
        name: plan.name,
        price: plan.price,
        icon: plan.icon,
      },
      quantity
    );

    onClose();
  };

  const total = Number(plan.price) * quantity;

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-slate-50">
      <div className="h-screen overflow-y-auto">
        <div className="min-h-screen">
          <Header />

          <main>
            {/* HERO */}
            <section className="border-b border-slate-200 bg-white pt-28">
              <div className="mx-auto grid max-w-7xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
                {/* IMAGE */}
                <div>
                  <button
                    onClick={onClose}
                    className="
                      mb-6 inline-flex items-center gap-2
                      rounded-2xl border border-slate-200
                      bg-white px-4 py-3
                      text-sm font-semibold text-slate-700
                      transition-colors hover:bg-slate-100
                    "
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {t("back")}
                  </button>

                  <div
                    className="
                      overflow-hidden rounded-[2rem]
                      border border-slate-200
                      bg-slate-100
                    "
                  >
                    <img
                      src={plan.icon}
                      alt={plan.name}
                      className="
                        h-[320px] w-full object-cover
                        sm:h-[520px]
                      "
                    />
                  </div>
                </div>

                {/* INFO */}
                <div className="flex flex-col justify-center">
                  <div
                    className="
                      inline-flex w-fit items-center gap-2
                      rounded-full border border-blue-200
                      bg-blue-50 px-4 py-2
                      text-sm font-semibold text-blue-700
                    "
                  >
                    <ShieldCheck className="h-4 w-4" />
                    {t("badge")}
                  </div>

                  <h1
                    className="
                      mt-6 text-4xl font-black
                      tracking-tight text-slate-900
                      sm:text-6xl
                    "
                  >
                    {plan.name}
                  </h1>

                  <p
                    className="
                      mt-6 text-lg leading-8
                      text-slate-600
                    "
                  >
                    {plan.description}
                  </p>

                  {/* PRICE CARD */}
                  <div
                    className="
                      mt-8 rounded-[2rem]
                      border border-slate-200
                      bg-slate-50 p-6
                    "
                  >
                    <p className="text-sm font-medium text-slate-500">
                      {t("startingAt")}
                    </p>

                    <div className="mt-3 flex items-end gap-3">
                      <h2
                        className="
                          text-5xl font-black
                          tracking-tight text-slate-900
                        "
                      >
                        $ {formatPrice(plan.price)}
                      </h2>

                      <span className="pb-1 text-sm text-slate-500">
                        {plan.currency}
                      </span>
                    </div>

                    {/* QUANTITY */}
                    <div className="mt-8">
                      <p className="mb-3 text-sm font-semibold text-slate-700">
                        {t("quantity")}
                      </p>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            setQuantity((q) => Math.max(1, q - 1))
                          }
                          className="
                            flex h-12 w-12 items-center
                            justify-center rounded-2xl
                            border border-slate-200
                            bg-white transition-colors
                            hover:bg-slate-100
                          "
                        >
                          <Minus className="h-4 w-4" />
                        </button>

                        <div
                          className="
                            flex h-12 min-w-[80px]
                            items-center justify-center
                            rounded-2xl border border-slate-200
                            bg-white px-6 text-lg
                            font-bold text-slate-900
                          "
                        >
                          {quantity}
                        </div>

                        <button
                          onClick={() =>
                            setQuantity((q) => q + 1)
                          }
                          className="
                            flex h-12 w-12 items-center
                            justify-center rounded-2xl
                            border border-slate-200
                            bg-white transition-colors
                            hover:bg-slate-100
                          "
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* TOTAL */}
                    <div className="mt-8 rounded-2xl bg-white p-5">
                      <p className="text-sm text-slate-500">
                        {t("total")}
                      </p>

                      <h3
                        className="
                          mt-1 text-3xl font-black
                          tracking-tight text-slate-900
                        "
                      >
                        $ {formatPrice(total)} MXN
                      </h3>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={handleAdd}
                      className="
                        mt-8 flex h-14 w-full
                        items-center justify-center gap-2
                        rounded-2xl bg-blue-600
                        text-sm font-semibold text-white
                        transition-colors hover:bg-blue-700
                      "
                    >
                      {t("addToCart")}

                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* FEATURES */}
            <section className="px-4 py-14 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                  <p
                    className="
                      text-sm font-bold uppercase
                      tracking-[0.18em] text-blue-700
                    "
                  >
                    {t("features.badge")}
                  </p>

                  <h2
                    className="
                      mt-4 text-4xl font-black
                      tracking-tight text-slate-900
                    "
                  >
                    {t("features.title")}
                  </h2>
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-2">
                  {plan.includes.map((item) => (
                    <div
                      key={item}
                      className="
                        flex gap-4 rounded-[2rem]
                        border border-slate-200
                        bg-white p-6
                      "
                    >
                      <div
                        className="
                          flex h-12 w-12 shrink-0
                          items-center justify-center
                          rounded-2xl bg-blue-100
                        "
                      >
                        <Check className="h-5 w-5 text-blue-700" />
                      </div>

                      <p
                        className="
                          text-base leading-7
                          text-slate-700
                        "
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </div>,
    document.body
  );
}