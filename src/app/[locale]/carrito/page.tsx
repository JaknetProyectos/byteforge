"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ChevronLeft,
  CreditCard,
  User,
  MapPin,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

import { processOctanoPayment } from "@/lib/payment";
import { formatPrice } from "@/lib/price";

const VALID_COUPONS = [
  { code: "MED10", discount: 0.1 },
  { code: "CONFIANZA15", discount: 0.15 },
  { code: "PROMO20", discount: 0.2 },
];

type Step = 1 | 2 | 3;

function CardShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
      <Icon className="h-4 w-4 text-blue-600" />
      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
        {title}
      </h3>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
  className = "",
  maxLength,
  mono = false,
  inputClassName = "",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  mono?: boolean;
  inputClassName?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1 block text-[11px] font-bold text-slate-600">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-xs outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100 ${mono ? "font-mono" : ""
          } ${inputClassName}`}
      />
    </div>
  );
}

export default function CarritoCheckoutPage() {
  const t = useTranslations("cartPage");
  const locale = useLocale();

  const { items, total, updateQuantity, removeItem, clearCart } = useCart();

  const [step, setStep] = useState<Step>(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successData, setSuccessData] = useState<any>(null);

  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);
  const [couponError, setCouponError] = useState("");

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    empresa: "",
    direccion: "",
    direccion2: "",
    ciudad: "",
    estado: "",
    cp: "",
    pais: "MX",
    cardNumber: "",
    cardName: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
  });

  const discountAmount = appliedCoupon ? total * appliedCoupon.discount : 0;
  const totalWithDiscount = total - discountAmount;
  const iva = totalWithDiscount * 0.16;
  const grandTotal = totalWithDiscount + iva;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyCoupon = (e: FormEvent) => {
    e.preventDefault();
    setCouponError("");

    const found = VALID_COUPONS.find(
      (c) => c.code === couponInput.trim().toUpperCase()
    );

    if (found) {
      setAppliedCoupon(found);
      setCouponInput("");
      return;
    }

    setCouponError(t("financial.couponInvalid"));
  };

  const handleCheckoutSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorMessage("");

    const uniqueOrderId = `MC-${Date.now()}`;

    const paymentPayload = {
      amount: Number(grandTotal.toFixed(2)),
      orderId: uniqueOrderId,
      cardData: {
        number: formData.cardNumber.replace(/\s/g, ""),
        name: formData.cardName.trim(),
        month: formData.cardMonth.padStart(2, "0"),
        year: formData.cardYear.trim(),
        cvv: formData.cardCvv.trim(),
      },
      customer: {
        nombre: formData.nombre.trim(),
        apellido: formData.apellido.trim(),
        email: formData.email.trim(),
        telefono: formData.telefono.trim(),
        direccion: formData.direccion.trim(),
        direccion2: formData.direccion2.trim() || undefined,
        ciudad: formData.ciudad.trim(),
        estado: formData.estado.trim(),
        pais: formData.pais,
        cp: formData.cp.trim(),
        empresa: formData.empresa.trim() || undefined,
      },
      metadata: {
        notes: appliedCoupon
          ? `${t("metadata.couponApplied")}: ${appliedCoupon.code}`
          : t("metadata.standardSale"),
      },
    };



    try {
      const response = await processOctanoPayment(paymentPayload);

      if (response.success) {
        setSuccessData(response.data);

        console.log({
          orderId: uniqueOrderId,
          amount: paymentPayload.amount,
          customer: paymentPayload.customer,
          items,
          metadata: paymentPayload.metadata,
        })

        try {
          await fetch(`/${locale ?? "es"}/api/checkout`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: uniqueOrderId,
              amount: paymentPayload.amount,
              customer: paymentPayload.customer,
              items,
              metadata: paymentPayload.metadata,
            }),
          });
        } catch (emailError) {
          console.error("⚠️ Falló el despacho de correos informativos:", emailError);
        }

        //clearCart();
        setStep(3);
      } else {
        setErrorMessage(
          response.error || t("errors.declined")
        );
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(t("errors.connection"));
    } finally {
      setIsProcessing(false);
    }
  };

  if (step === 3) {
    return (
      <main className="flex min-h-screen flex-col justify-between bg-slate-50">
        <Header />
        <section className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-4 py-16 text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <h1 className="mb-2 text-3xl font-bold text-slate-900">
            {t("success.title")}
          </h1>
          <p className="mb-6 text-sm text-slate-600">
            {t("success.description")}
          </p>

          <CardShell className="mb-8 w-full space-y-3 p-6 text-left">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-slate-500">{t("success.paidAmount")}</span>
              <span className="font-bold text-blue-700">
                {formatPrice(grandTotal, "MXN", true)}
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="font-medium text-slate-500">{t("success.transactionStatus")}</span>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-bold text-blue-700">
                {t("success.approved")}
              </span>
            </div>
          </CardShell>

          <Link href="/store" className="w-full">
            <Button className="w-full rounded-full bg-blue-600 py-6 text-base font-semibold text-white hover:bg-blue-700">
              {t("success.backToCatalog")}
            </Button>
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <div className="sticky top-0 z-10 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-4 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="transition-colors hover:text-slate-900">
              {t("breadcrumb.home")}
            </Link>
            <span>/</span>
            <span className={step === 1 ? "font-bold text-blue-700" : ""}>
              {t("breadcrumb.summary")}
            </span>
            <span>/</span>
            <span className={step === 2 ? "font-bold text-blue-700" : ""}>
              {t("breadcrumb.shippingPayment")}
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <div className={`h-3 w-3 rounded-full ${step >= 1 ? "bg-blue-600" : "bg-slate-200"}`} />
            <div className={`h-1 w-12 rounded-full ${step >= 2 ? "bg-blue-600" : "bg-slate-200"}`} />
            <div className={`h-3 w-3 rounded-full ${step >= 2 ? "bg-blue-600" : "bg-slate-200"}`} />
          </div>
        </div>
      </div>

      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <CardShell className="mx-auto max-w-lg p-12 text-center">
              <ShoppingBag className="mx-auto mb-4 h-16 w-16 text-slate-300" />
              <h2 className="mb-2 text-xl font-bold text-slate-900">
                {t("empty.title")}
              </h2>
              <p className="mb-6 text-xs text-slate-600">
                {t("empty.description")}
              </p>
              <Link href="/store">
                <Button className="rounded-full bg-blue-600 px-6 text-white hover:bg-blue-700">
                  {t("empty.goToStore")}
                </Button>
              </Link>
            </CardShell>
          ) : (
            <div className="grid items-start gap-8 lg:grid-cols-3">
              <div className="space-y-4 lg:col-span-2">
                {errorMessage && (
                  <div className="flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 p-4 text-xs font-semibold text-red-700">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-4">
                    <CardShell className="flex items-center justify-between p-4">
                      <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                        {t("order.title")}
                      </h2>
                      <button
                        type="button"
                        onClick={clearCart}
                        className="flex items-center gap-1 text-xs font-bold text-red-600 hover:underline"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> {t("order.clear")}
                      </button>
                    </CardShell>

                    {items.map((item) => (
                      <CardShell key={item.product.slug} className="flex gap-4 p-4">
                        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                          <Image
                            src={item.product.icon}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col justify-between">
                          <div className="flex justify-between gap-2">
                            <div>
                              <h3 className="mt-1 line-clamp-1 text-xs font-bold text-slate-800">
                                {item.product.name}
                              </h3>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(item.product.slug)}
                              className="p-1 text-slate-400 transition-colors hover:text-red-600"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>

                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 p-0.5">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.product.slug, item.quantity - 1)
                                }
                                className="rounded-full p-1.5 transition hover:bg-white"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-8 text-center text-xs font-bold text-slate-800">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.product.slug, item.quantity + 1)
                                }
                                className="rounded-full p-1.5 transition hover:bg-white"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <span className="text-sm font-black text-slate-900">
                              {formatPrice(item.product.price * item.quantity, "MXN", true)}
                            </span>
                          </div>
                        </div>
                      </CardShell>
                    ))}
                  </div>
                )}

                {step === 2 && (
                  <form
                    id="octano-payment-form"
                    onSubmit={handleCheckoutSubmit}
                    className="space-y-6"
                  >
                    <CardShell className="space-y-4 p-6">
                      <SectionTitle icon={User} title={t("form.buyerTitle")} />
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <Field
                          label={t("form.firstName")}
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.lastName")}
                          name="apellido"
                          value={formData.apellido}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.email")}
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.phone")}
                          name="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.company")}
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleInputChange}
                          className="sm:col-span-2"
                        />
                      </div>
                    </CardShell>

                    <CardShell className="space-y-4 p-6">
                      <SectionTitle icon={MapPin} title={t("form.addressTitle")} />
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <Field
                          label={t("form.streetAddress")}
                          name="direccion"
                          value={formData.direccion}
                          onChange={handleInputChange}
                          required
                          placeholder={t("form.streetAddressPlaceholder")}
                          className="sm:col-span-2"
                        />
                        <Field
                          label={t("form.neighborhood")}
                          name="direccion2"
                          value={formData.direccion2}
                          onChange={handleInputChange}
                          placeholder={t("form.neighborhoodPlaceholder")}
                          className="sm:col-span-2"
                        />
                        <Field
                          label={t("form.city")}
                          name="ciudad"
                          value={formData.ciudad}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.state")}
                          name="estado"
                          value={formData.estado}
                          onChange={handleInputChange}
                          required
                          placeholder={t("form.statePlaceholder")}
                        />
                        <Field
                          label={t("form.postalCode")}
                          name="cp"
                          value={formData.cp}
                          onChange={handleInputChange}
                          required
                        />
                        <div>
                          <label className="mb-1 block text-[11px] font-bold text-slate-600">
                            {t("form.country")}
                          </label>
                          <select
                            name="pais"
                            value={formData.pais}
                            onChange={handleInputChange}
                            className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-xs outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                          >
                            <option value="MX">{t("form.mexico")}</option>
                          </select>
                        </div>
                      </div>
                    </CardShell>

                    <CardShell className="space-y-4 p-6">
                      <SectionTitle icon={CreditCard} title={t("form.paymentTitle")} />
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <Field
                          label={t("form.cardNumber")}
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          maxLength={19}
                          placeholder={t("form.cardNumberPlaceholder")}
                          className="sm:col-span-3"
                          mono
                          inputClassName="tracking-widest"
                        />
                        <Field
                          label={t("form.cardHolderName")}
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                          placeholder={t("form.cardHolderPlaceholder")}
                          className="sm:col-span-3"
                        />
                        <Field
                          label={t("form.expiryMonth")}
                          name="cardMonth"
                          value={formData.cardMonth}
                          onChange={handleInputChange}
                          required
                          maxLength={2}
                          placeholder={t("form.expiryMonthPlaceholder")}
                          mono
                          inputClassName="text-center"
                        />
                        <Field
                          label={t("form.expiryYear")}
                          name="cardYear"
                          value={formData.cardYear}
                          onChange={handleInputChange}
                          required
                          maxLength={4}
                          placeholder={t("form.expiryYearPlaceholder")}
                          mono
                          inputClassName="text-center"
                        />
                        <Field
                          label={t("form.cvv")}
                          name="cardCvv"
                          type="password"
                          value={formData.cardCvv}
                          onChange={handleInputChange}
                          required
                          maxLength={4}
                          placeholder={t("form.cvvPlaceholder")}
                          mono
                          inputClassName="text-center"
                        />
                      </div>
                    </CardShell>
                  </form>
                )}
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                    {t("financial.title")}
                  </h2>

                  <div className="border-b border-slate-200 pb-4 text-xs font-medium text-slate-600">
                    <div className="flex justify-between">
                      <span>{t("financial.subtotal")}</span>
                      <span className="font-bold text-slate-900">
                        {formatPrice(total, "MXN", true)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-bold text-slate-900">
                      {t("financial.netTotal")}
                    </span>
                    <span className="text-2xl font-black text-slate-900">
                      {formatPrice(grandTotal, "MXN", true)}
                    </span>
                  </div>
                  <p className="-mt-4 text-right text-[10px] text-slate-500">
                    {t("financial.tax", {
                      tax: formatPrice(iva, "MXN", true),
                    })}
                  </p>

                  {step === 1 ? (
                    <Button
                      onClick={() => setStep(2)}
                      className="w-full rounded-full bg-blue-600 py-6 text-sm font-bold tracking-wide text-white hover:bg-blue-700"
                    >
                      {t("actions.proceedToPayment")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <Button
                        type="submit"
                        form="octano-payment-form"
                        disabled={isProcessing}
                        className={`w-full rounded-full py-6 text-sm font-bold tracking-wide text-white transition ${isProcessing
                          ? "cursor-wait bg-slate-400"
                          : "bg-blue-600 hover:bg-blue-700"
                          }`}
                      >
                        {isProcessing
                          ? t("actions.processing")
                          : t("actions.payAmount", {
                            amount: formatPrice(grandTotal, "MXN", true),
                          })}
                      </Button>

                      <button
                        type="button"
                        disabled={isProcessing}
                        onClick={() => setStep(1)}
                        className="flex w-full items-center justify-center gap-1 py-1 text-center text-xs font-bold text-slate-500 transition hover:text-slate-900"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                        {t("actions.backToCart")}
                      </button>
                    </div>
                  )}

                  <div className="border-t border-slate-200 pt-4 text-center space-y-2">
                    <p className="text-[10px] font-medium text-slate-500">
                      {t("security.note")}
                    </p>
                    <div className="flex flex-row justify-between gap-6 p-6">
                      <Image
                        src="/octano.png"
                        alt={t("images.octanoAlt")}
                        width={150}
                        height={30}
                      />
                      <Image
                        src="/secure-payment.png"
                        alt={t("images.securePaymentAlt")}
                        width={150}
                        height={30}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}