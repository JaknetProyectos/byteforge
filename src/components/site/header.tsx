"use client";

import { useCart } from "@/context/CartContext";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const t = useTranslations("header");

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const { itemCount } = useCart();

  const navLinks = [
    { label: t("nav.myServer"), href: "/" },
    { label: t("nav.choosePlan"), href: "/store" },
    { label: t("nav.afterCloud"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-slate-200 bg-slate-50/95 backdrop-blur-sm"
          : "border-transparent bg-slate-50"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-2xl px-2 py-1 transition-colors hover:bg-slate-100"
        >
          {/* Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors group-hover:bg-blue-100">
            <Image
              src="/logo.png"
              width={80}
              height={80}
              alt={t("logoAlt")}
            />
          </div>

          {/* Brand */}
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-slate-900">
              ByteForge
            </span>

            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
              {t("brandSubtitle")}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
                isActive(link.href)
                  ? "bg-blue-100 text-blue-700"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <Link
            href="/carrito"
            aria-label={t("cart")}
            className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            <ShoppingCart className="h-5 w-5" />

            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[11px] font-semibold text-white">
                {itemCount}
              </span>
            )}
          </Link>

          {/* Mobile button */}
          <button
            type="button"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition-all hover:bg-slate-100 lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-slate-200 bg-slate-50 transition-all duration-300 lg:hidden",
          open
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "bg-blue-100 text-blue-700"
                  : "text-slate-700 hover:bg-slate-100"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}