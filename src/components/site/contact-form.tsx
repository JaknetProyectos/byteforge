"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

import { useContact } from "@/hooks/useContact";

export function ContactForm() {
  const t = useTranslations("contactForm");

  const { isLoading, sendContactForm } = useContact();

  const [sent, setSent] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSent(false);

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    const response = await sendContactForm(formData);

    if (response.success) {
      setSent(true);

      setSuccessMessage(t("messages.success"));

      setFormData({
        nombre: "",
        email: "",
        mensaje: "",
      });

      return;
    }

    setSent(false);

    setErrorMessage(
      response.error || t("messages.error")
    );
  };

  const field =
    "w-full rounded-xl border border-white/30 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/60 outline-none transition-colors focus:border-white/70";

  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#2f4ff0] via-[#4545ef] to-[#3d4dc4] px-6 py-14 sm:px-14 sm:py-16">
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <div className="text-center">
            <span className="inline-flex rounded-md bg-white/15 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white">
              {t("badge")}
            </span>

            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t("title")}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <input
              type="text"
              name="nombre"
              required
              placeholder={t("form.namePlaceholder")}
              value={formData.nombre}
              onChange={handleChange}
              className={field}
            />

            <input
              type="email"
              name="email"
              required
              placeholder={t("form.emailPlaceholder")}
              value={formData.email}
              onChange={handleChange}
              className={field}
            />

            <textarea
              name="mensaje"
              required
              placeholder={t("form.messagePlaceholder")}
              rows={5}
              value={formData.mensaje}
              onChange={handleChange}
              className={`${field} resize-none`}
            />

            {successMessage && (
              <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-4 text-sm font-semibold text-white ring-1 ring-white/10 transition-all hover:bg-zinc-900 hover:ring-white/25 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? (
                t("buttons.sending")
              ) : sent ? (
                <>
                  <Check className="h-4 w-4 text-[#2bf3a0]" />
                  {t("buttons.sent")}
                </>
              ) : (
                t("buttons.send")
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}