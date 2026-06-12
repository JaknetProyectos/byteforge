"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

import { useCart } from "@/context/CartContext";

import { Plan } from "@/types/plan";
import { PlanModal } from "./PlanModal";
import { formatPrice } from "@/lib/price";

export function ProductCard({ product }: { product: Plan }) {
  const t = useTranslations("productCard");

  const { addItem } = useCart();

  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      slug: product.name,
      name: product.name,
      price: product.price,
      icon: product.icon,
    });

    setAdded(true);

    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <PlanModal
        plan={product}
        open={open}
        onClose={() => setOpen(false)}
        onAddToCart={handleAdd}
      />

      <div
        className="
          group overflow-hidden rounded-[2rem]
          border border-slate-200 bg-white
          shadow-sm transition-all duration-300
          hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl
        "
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-slate-100" />

          {/* Grid */}
          <div
            className="
              absolute inset-0 opacity-[0.04]
              [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
              [background-size:40px_40px]
            "
          />

          <img
            src={product.icon}
            alt={product.name}
            width={500}
            height={320}
            className="
              relative h-56 w-full object-cover
              transition-transform duration-500
              group-hover:scale-[1.03]
            "
          />

          {/* Badge */}
          <div className="absolute left-5 top-5">
            <div className="rounded-full border border-blue-200 bg-white/90 px-3 py-1 text-xs font-semibold text-blue-700 backdrop-blur-sm">
              {t("badge")}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-7">
          {/* Title */}
          <h3 className="text-2xl font-black tracking-tight text-slate-900">
            {product.name}
          </h3>

          {/* Price */}
          <div className="mt-4 flex items-end gap-2">
            <p className="text-3xl font-black tracking-tight text-slate-900">
              MXN$ {formatPrice(product.price)}
            </p>

            <span className="pb-1 text-sm font-medium text-slate-500">
              {t("vat")}
            </span>
          </div>

          {/* Divider */}
          <div className="mt-6 h-px w-full bg-slate-100" />

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3">
            <button
              onClick={() => setOpen(true)}
              className="
                flex items-center justify-center
                rounded-2xl border border-slate-200
                bg-slate-100 px-5 py-3.5
                text-sm font-semibold text-slate-700
                transition-all duration-300
                hover:cursor-pointer
                hover:border-slate-300 hover:bg-slate-200
              "
            >
              {t("buttons.characteristics")}
            </button>

            <button
              type="button"
              onClick={handleAdd}
              className="
                flex items-center justify-center gap-2
                rounded-2xl bg-blue-600
                px-5 py-3.5 text-sm font-semibold text-white
                transition-all duration-300
                hover:bg-blue-700 hover:shadow-lg
              "
            >
              {added ? (
                <>
                  <Check className="h-4 w-4" />
                  {t("buttons.added")}
                </>
              ) : (
                t("buttons.addToCart")
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}