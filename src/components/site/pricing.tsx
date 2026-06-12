"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import {
  Check,
  Cloud,
  HardDrive,
  Server,
  Share2,
} from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";

import { SectionBadge } from "./section-badge";
import { PlanModal } from "./PlanModal";

import { type Plan } from "@/types/plan";
import { cn } from "@/lib/utils";
import { plansEnglish, plansSpanish, planTabs, PlanCategory } from "@/data/plans";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/price";

const iconMap = {
  server: Server,
  cloud: Cloud,
  rack: HardDrive,
  share: Share2,
} as const;

function PlanCard({
  plan,
  featured = false,
}: {
  plan: Plan;
  featured?: boolean;
}) {
  const t = useTranslations("pricing");

  const Icon =
    iconMap[
    planTabs.find((t) => t.id === plan.category)!.icon
    ];

  const [open, setOpen] = useState(false);

  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({
      slug: plan.name,
      name: plan.name,
      price: plan.price,
      icon: plan.icon,
    });
  };

  return (
    <>
      <PlanModal
        plan={plan}
        open={open}
        onClose={() => setOpen(false)}
        onAddToCart={handleAdd}
      />

      <div
        className={cn(
          "relative flex h-full flex-col rounded-[2rem] border p-8 transition-all duration-300",
          featured
            ? "border-blue-600 bg-blue-600 text-white shadow-xl shadow-blue-600/10"
            : "border-slate-200 bg-white text-slate-900 shadow-sm hover:-translate-y-1 hover:shadow-md"
        )}
      >
        {/* Recommended badge */}
        {featured && (
          <div className="absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white">
            {t("recommended")}
          </div>
        )}

        {/* Icon */}
        <div
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-2xl",
            featured
              ? "bg-white/10"
              : "border border-blue-100 bg-blue-50 text-blue-700"
          )}
        >
          <Icon className="h-6 w-6" strokeWidth={1.8} />
        </div>

        {/* Plan */}
        <h3 className="mt-6 text-2xl font-bold">
          {plan.name}
        </h3>

        <div className="mt-4 flex items-end gap-2">
          <span className="text-5xl font-bold tracking-tight">
            ${formatPrice(plan.price)}
          </span>

          <span
            className={cn(
              "pb-1 text-sm font-medium",
              featured ? "text-blue-100" : "text-slate-500"
            )}
          >
            {plan.currency}
          </span>
        </div>

        {/* Description */}
        <p
          className={cn(
            "mt-5 text-sm leading-7",
            featured ? "text-blue-50" : "text-slate-600"
          )}
        >
          {plan.description}
        </p>

        {/* Includes */}
        <div className="mt-8">
          {plan.includes.length > 0 && <p
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.16em]",
              featured ? "text-blue-100" : "text-slate-500"
            )}
          >
            {t("includes")}
          </p>}

          <ul className="mt-5 space-y-4">
            {plan.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3"
              >
                <div
                  className={cn(
                    "mt-0.5 flex h-5 w-5 items-center justify-center rounded-full",
                    featured
                      ? "bg-white/15"
                      : "bg-blue-50"
                  )}
                >
                  <Check
                    className={cn(
                      "h-3.5 w-3.5",
                      featured
                        ? "text-white"
                        : "text-blue-700"
                    )}
                    strokeWidth={3}
                  />
                </div>

                <span
                  className={cn(
                    "text-sm leading-relaxed",
                    featured
                      ? "text-white"
                      : "text-slate-700"
                  )}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1" />

        {/* CTA */}
        <Button
          onClick={() => {
            setOpen(true);
          }}
          asChild
          size="lg"
          className={cn(
            "mt-10 rounded-2xl",
            featured
              ? "bg-white text-blue-700 hover:bg-slate-100"
              : "bg-blue-600 text-white hover:bg-blue-700"
          )}
        >
          <p>{t("viewPlan")}</p>
        </Button>
      </div>
    </>
  );
}

export function Pricing() {
  const t = useTranslations("pricing");
  const locale = useLocale()

  const plans = locale == "es" ? plansSpanish : plansEnglish;


  return (
    <section
      id="plans"
      className="border-b border-slate-200 bg-slate-100 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <SectionBadge>{t("badge")}</SectionBadge>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="enterprise" className="mt-14">
          <TabsList className="flex h-auto w-full flex-wrap gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            {planTabs.map((tab) => {
              const TabIcon = iconMap[tab.icon];

              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-slate-600 transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <TabIcon className="h-4 w-4" strokeWidth={1.8} />
                  {tab.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Plans */}
          {planTabs.map((tab) => {
            const filteredPlans = plans.filter(
              (p) => p.category === (tab.id as PlanCategory)
            );

            return (
              <TabsContent
                key={tab.id}
                value={tab.id}
                className="mt-10"
              >
                <div className="grid gap-6 lg:grid-cols-3">
                  {filteredPlans.map((plan, index) => (
                    <PlanCard
                      key={plan.name}
                      plan={plan}
                      featured={index === 1}
                    />
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}