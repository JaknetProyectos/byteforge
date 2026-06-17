import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getTranslations } from "next-intl/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const LOGO_URL = "https://byteforge.com.mx/logo.png";

function formatCurrency(value: number, locale: string) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "MXN",
  }).format(value);
}

function escapeHtml(value: string) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      orderId,
      amount,
      customer,
      items,
      metadata,
      locale = "es",
    } = body;

    const t = await getTranslations({
      locale,
      namespace: "purchaseEmail",
    });

    if (!orderId || !amount || !customer || !items || !items.length) {
      return NextResponse.json(
        { error: t("errors.incompleteOrder") },
        { status: 400 }
      );
    }

    const currencyLocale = locale === "en" ? "en-US" : "es-MX";

    const customerName = escapeHtml(customer.nombre || "");
    const customerLastName = escapeHtml(customer.apellido || "");
    const customerEmail = escapeHtml(customer.email || "");
    const customerPhone = escapeHtml(customer.telefono || "");
    const customerAddress = escapeHtml(customer.direccion || "");
    const customerAddress2 = customer.direccion2
      ? `, ${escapeHtml(customer.direccion2)}`
      : "";
    const customerCity = escapeHtml(customer.ciudad || "");
    const customerState = escapeHtml(customer.estado || "");
    const customerZip = escapeHtml(customer.cp || "");

    let productsHTML = "";

    items.forEach((item: any) => {
      const product = item.product || {};
      const qty = Number(item.quantity || 1);
      const unitPrice = Number(product.price || 0);
      const total = unitPrice * qty;

      const productName = escapeHtml(
        product.name || t("fallbacks.product")
      );

      const productDescription = escapeHtml(
        product.description || t("fallbacks.productDescription")
      );

      const productIcon = String(product.icon || "");

      productsHTML += `
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="
            margin-bottom:20px;
            border:1px solid #dbeafe;
            border-radius:24px;
            overflow:hidden;
            background:#ffffff;
          "
        >
          <tr>
            <td>
              <img
                src="${productIcon}"
                alt="${productName}"
                width="100%"
                height="220"
                style="
                  width:100%;
                  height:220px;
                  object-fit:cover;
                  display:block;
                "
              />
            </td>
          </tr>

          <tr>
            <td style="padding:24px">
              <h3
                style="
                  margin:0 0 10px 0;
                  font-size:22px;
                  line-height:1.1;
                  color:#0f172a;
                  font-weight:800;
                  letter-spacing:-0.03em;
                "
              >
                ${productName}
              </h3>

              <p
                style="
                  margin:0 0 18px 0;
                  font-size:14px;
                  line-height:1.7;
                  color:#475569;
                "
              >
                ${productDescription}
              </p>

              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <p
                      style="
                        margin:0 0 4px 0;
                        font-size:11px;
                        color:#64748b;
                        text-transform:uppercase;
                        letter-spacing:0.08em;
                        font-weight:700;
                      "
                    >
                      ${t("product.quantity")}
                    </p>

                    <p
                      style="
                        margin:0;
                        font-size:18px;
                        color:#0f172a;
                        font-weight:700;
                      "
                    >
                      ${qty}
                    </p>
                  </td>

                  <td align="right">
                    <p
                      style="
                        margin:0 0 4px 0;
                        font-size:11px;
                        color:#64748b;
                        text-transform:uppercase;
                        letter-spacing:0.08em;
                        font-weight:700;
                      "
                    >
                      ${t("product.total")}
                    </p>

                    <p
                      style="
                        margin:0;
                        font-size:22px;
                        color:#2563eb;
                        font-weight:900;
                      "
                    >
                      ${formatCurrency(total, currencyLocale)}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `;
    });

    const wrapperStart = `
      <!DOCTYPE html>
      <html>
        <body
          style="
            margin:0;
            padding:0;
            background:#eef4ff;
            font-family:Arial,sans-serif;
          "
        >
          <table
            width="100%"
            border="0"
            cellspacing="0"
            cellpadding="0"
            style="
              padding:40px 16px;
              background:#eef4ff;
            "
          >
            <tr>
              <td align="center">
                <table
                  width="100%"
                  max-width="640"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  style="
                    background:#ffffff;
                    border-radius:32px;
                    overflow:hidden;
                    border:1px solid #dbeafe;
                    box-shadow:
                      0 30px 80px rgba(37,99,235,0.08),
                      0 10px 30px rgba(15,23,42,0.06);
                  "
                >
                  <tr>
                    <td
                      style="
                        background:
                          linear-gradient(
                            135deg,
                            #0f172a 0%,
                            #172554 45%,
                            #2563eb 100%
                          );
                        padding:48px 40px;
                        text-align:center;
                      "
                    >
                      <div
                        style="
                          display:inline-flex;
                          align-items:center;
                          gap:14px;
                          margin-bottom:24px;
                        "
                      >
                        <div
                          style="
                            width:56px;
                            height:56px;
                            border-radius:18px;
                            overflow:hidden;
                          "
                        >
                          <img
                            src="${LOGO_URL}"
                            width="56"
                            height="56"
                            alt="ByteForge"
                            style="
                              width:56px;
                              height:56px;
                              object-fit:cover;
                              display:block;
                            "
                          />
                        </div>

                        <div
                          style="
                            color:white;
                            font-size:30px;
                            font-weight:800;
                            letter-spacing:-0.04em;
                          "
                        >
                          ByteForge
                        </div>
                      </div>

                      <h1
                        style="
                          margin:0 0 14px 0;
                          font-size:40px;
                          line-height:1;
                          color:white;
                          letter-spacing:-0.05em;
                        "
                      >
                        ${t("header.title")}
                      </h1>

                      <p
                        style="
                          margin:0 auto;
                          max-width:500px;
                          font-size:15px;
                          line-height:1.8;
                          color:rgba(255,255,255,0.78);
                        "
                      >
                        ${t("header.description")}
                      </p>
                    </td>
                  </tr>
    `;

    const wrapperEnd = `
                  <tr>
                    <td
                      style="
                        padding:30px 40px;
                        background:#f8fbff;
                        border-top:1px solid #e2e8f0;
                        text-align:center;
                      "
                    >
                      <p
                        style="
                          margin:0 0 10px 0;
                          font-size:12px;
                          color:#64748b;
                        "
                      >
                        ByteForge © 2026
                      </p>

                      <p
                        style="
                          margin:0;
                          font-size:11px;
                          color:#94a3b8;
                        "
                      >
                        tuvoz@byteforge.com.mx
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const htmlCliente = `
      ${wrapperStart}

      <tr>
        <td style="padding:40px">
          <div
            style="
              display:inline-block;
              padding:8px 14px;
              border-radius:999px;
              background:#dbeafe;
              color:#2563eb;
              font-size:11px;
              font-weight:700;
              text-transform:uppercase;
              letter-spacing:0.08em;
              margin-bottom:20px;
            "
          >
            ${t("customer.order")} #${escapeHtml(orderId)}
          </div>

          <h2
            style="
              margin:0 0 12px 0;
              font-size:32px;
              line-height:1.1;
              color:#0f172a;
              letter-spacing:-0.04em;
            "
          >
            ${t("customer.thanks")} ${customerName}
          </h2>

          <p
            style="
              margin:0 0 34px 0;
              font-size:15px;
              line-height:1.8;
              color:#475569;
            "
          >
            ${t("customer.processing")}
          </p>

          ${productsHTML}

          <table
            width="100%"
            border="0"
            cellspacing="0"
            cellpadding="0"
            style="
              margin-top:28px;
              background:
                linear-gradient(
                  135deg,
                  #eff6ff 0%,
                  #ffffff 100%
                );
              border:1px solid #dbeafe;
              border-radius:24px;
              padding:24px;
            "
          >
            <tr>
              <td>
                <p
                  style="
                    margin:0 0 6px 0;
                    font-size:11px;
                    color:#2563eb;
                    font-weight:700;
                    letter-spacing:0.08em;
                    text-transform:uppercase;
                  "
                >
                  ${t("customer.totalPaid")}
                </p>

                <p
                  style="
                    margin:0;
                    font-size:38px;
                    line-height:1;
                    color:#0f172a;
                    font-weight:900;
                    letter-spacing:-0.05em;
                  "
                >
                  ${formatCurrency(amount, currencyLocale)}
                </p>
              </td>
            </tr>
          </table>

          <div
            style="
              margin-top:24px;
              padding:24px;
              border-radius:24px;
              background:#f8fbff;
              border:1px solid #dbeafe;
            "
          >
            <p
              style="
                margin:0 0 10px 0;
                font-size:11px;
                font-weight:700;
                color:#2563eb;
                text-transform:uppercase;
                letter-spacing:0.08em;
              "
            >
              ${t("customer.address")}
            </p>

            <p
              style="
                margin:0;
                font-size:14px;
                line-height:1.8;
                color:#334155;
              "
            >
              ${customerAddress}${customerAddress2}<br>
              ${customerCity}, ${customerState}, ${t("customer.zip")} ${customerZip}
            </p>
          </div>
        </td>
      </tr>

      ${wrapperEnd}
    `;

    const htmlNegocio = `
      ${wrapperStart}

      <tr>
        <td style="padding:40px">
          <div
            style="
              display:inline-block;
              padding:8px 14px;
              border-radius:999px;
              background:#dbeafe;
              color:#2563eb;
              font-size:11px;
              font-weight:700;
              text-transform:uppercase;
              letter-spacing:0.08em;
              margin-bottom:20px;
            "
          >
            ${t("business.newOrder")}
          </div>

          <h2
            style="
              margin:0 0 20px 0;
              font-size:34px;
              line-height:1.05;
              color:#0f172a;
              letter-spacing:-0.04em;
            "
          >
            ${formatCurrency(amount, currencyLocale)} ${t("business.processed")}
          </h2>

          <div
            style="
              padding:24px;
              border-radius:24px;
              border:1px solid #dbeafe;
              background:#f8fbff;
              margin-bottom:30px;
            "
          >
            <p
              style="
                margin:0 0 10px 0;
                font-size:11px;
                color:#2563eb;
                font-weight:700;
                text-transform:uppercase;
                letter-spacing:0.08em;
              "
            >
              ${t("business.customerInfo")}
            </p>

            <p
              style="
                margin:0;
                font-size:14px;
                line-height:1.9;
                color:#334155;
              "
            >
              <strong>${t("business.name")}</strong> ${customerName} ${customerLastName}<br>
              <strong>${t("business.email")}</strong> ${customerEmail}<br>
              <strong>${t("business.phone")}</strong> ${customerPhone}<br>
              <strong>${t("business.notes")}</strong> ${escapeHtml(
                metadata?.notes || t("business.none")
              )}
            </p>
          </div>

          ${productsHTML}
        </td>
      </tr>

      ${wrapperEnd}
    `;

    await Promise.all([
      resend.emails.send({
        from: "ByteForge <tuvoz@byteforge.com.mx>",
        to: [customer.email],
        subject: `${t("subjects.customer")} #${orderId} - ByteForge`,
        html: htmlCliente,
      }),

      resend.emails.send({
        from: "ByteForge <tuvoz@byteforge.com.mx>",
        to: ["tuvoz@byteforge.com.mx"],
        replyTo: customer.email,
        subject: `${t("subjects.business")} #${orderId}`,
        html: htmlNegocio,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ Error enviando correos:", error);

    return NextResponse.json(
      {
        error:
          error?.message || "Error al procesar la solicitud",
      },
      { status: 500 }
    );
  }
}