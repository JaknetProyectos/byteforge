"use client";

import { Languages } from "lucide-react";
import { useLocaleContext } from "@/context/LangContext";

export default function LangSwitcher() {
  const { locale, switchLanguage, isPending } = useLocaleContext();

  const nextLang = locale === "es" ? "en" : "es";

  return (
    <button
      type="button"
      onClick={() => switchLanguage(nextLang)}
      disabled={isPending}
      aria-label="Cambiar idioma"
      className="
        fixed bottom-6 right-6 z-50
        group overflow-hidden

        flex items-center gap-3

        rounded-2xl
        border border-blue-100

        bg-white/85
        backdrop-blur-xl

        px-4 py-3

        shadow-[0_8px_30px_rgba(59,130,246,0.12)]

        transition-all duration-300 ease-out

        hover:-translate-y-1
        hover:scale-[1.02]
        hover:border-blue-300
        hover:shadow-[0_12px_40px_rgba(59,130,246,0.18)]

        active:scale-[0.98]

        disabled:opacity-60
        disabled:cursor-not-allowed
      "
    >
      {/* Glow background */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-blue-500/0
          via-sky-400/5
          to-cyan-400/10
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          flex h-10 w-10 items-center justify-center

          rounded-xl

          bg-gradient-to-br
          from-blue-500
          to-sky-400

          shadow-md
          shadow-blue-500/20

          transition-transform duration-300
          group-hover:rotate-6
        "
      >
        <Languages className="h-5 w-5 text-white" />
      </div>

      {/* Text */}
      <div className="relative flex flex-col items-start leading-none">

        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-semibold text-slate-800">
            {locale === "es" ? "Español" : "English"}
          </span>

          <div
            className="
              rounded-full
              bg-blue-100
              px-2 py-0.5
              text-[10px]
              font-bold
              text-blue-700
            "
          >
            {locale.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Animated status dot */}
      <div className="relative flex items-center justify-center">
        <div
          className={`
            h-2.5 w-2.5 rounded-full
            transition-all duration-300
            ${
              isPending
                ? "bg-amber-400 animate-pulse"
                : "bg-emerald-400"
            }
          `}
        />

        {!isPending && (
          <div className="absolute h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping opacity-30" />
        )}
      </div>
    </button>
  );
}