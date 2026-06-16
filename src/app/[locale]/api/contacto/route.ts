import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const LOGO_URL =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { nombre, email, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        {
          error:
            "Faltan campos requeridos (nombre, email, mensaje)",
        },
        { status: 400 }
      );
    }

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
                  max-width="620"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  style="
                    background:#ffffff;
                    border-radius:28px;
                    overflow:hidden;
                    border:1px solid #dbe7ff;
                    box-shadow:
                      0 25px 60px rgba(37,99,235,0.08),
                      0 10px 30px rgba(15,23,42,0.06);
                  "
                >

                  <!-- TOP BAR -->
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
                        padding:40px 40px 34px 40px;
                        text-align:center;
                      "
                    >

                      <div
                        style="
                          display:inline-flex;
                          align-items:center;
                          gap:14px;
                          margin-bottom:20px;
                        "
                      >
                        <div
                          style="
                            width:54px;
                            height:54px;
                            border-radius:18px;
                            overflow:hidden;
                            border:1px solid rgba(255,255,255,0.15);
                          "
                        >
                          <img
                            src="${LOGO_URL}"
                            alt="ByteForge"
                            width="54"
                            height="54"
                            style="
                              width:54px;
                              height:54px;
                              object-fit:cover;
                              display:block;
                            "
                          />
                        </div>

                        <div
                          style="
                            color:white;
                            font-size:28px;
                            font-weight:800;
                            letter-spacing:-0.03em;
                          "
                        >
                          ByteForge
                        </div>
                      </div>

                      <p
                        style="
                          margin:0;
                          font-size:14px;
                          line-height:1.7;
                          color:rgba(255,255,255,0.75);
                          max-width:460px;
                          margin-inline:auto;
                        "
                      >
                        High-performance infrastructure,
                        scalable cloud systems, and
                        enterprise-grade digital solutions.
                      </p>

                    </td>
                  </tr>
    `;

    const wrapperEnd = `
                  <!-- FOOTER -->
                  <tr>
                    <td
                      style="
                        padding:28px 40px;
                        background:#f8fbff;
                        border-top:1px solid #e5eefc;
                        text-align:center;
                      "
                    >

                      <p
                        style="
                          margin:0 0 10px 0;
                          font-size:12px;
                          color:#64748b;
                          line-height:1.7;
                        "
                      >
                        ByteForge © 2026 — Infrastructure for modern businesses.
                      </p>

                      <p
                        style="
                          margin:0;
                          font-size:11px;
                          color:#94a3b8;
                        "
                      >
                        Contact:
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

    // EMAIL INTERNO
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
              color:#1d4ed8;
              font-size:11px;
              font-weight:700;
              letter-spacing:0.08em;
              text-transform:uppercase;
              margin-bottom:22px;
            "
          >
            NEW CONTACT REQUEST
          </div>

          <h2
            style="
              margin:0 0 28px 0;
              font-size:30px;
              line-height:1.1;
              color:#0f172a;
              letter-spacing:-0.04em;
            "
          >
            New website inquiry received
          </h2>

          <table
            width="100%"
            border="0"
            cellspacing="0"
            cellpadding="0"
            style="
              border:1px solid #e2e8f0;
              border-radius:20px;
              overflow:hidden;
              margin-bottom:28px;
            "
          >

            <tr>
              <td
                style="
                  padding:18px 22px;
                  background:#f8fbff;
                  border-bottom:1px solid #e2e8f0;
                "
              >

                <p
                  style="
                    margin:0 0 6px 0;
                    font-size:11px;
                    font-weight:700;
                    color:#64748b;
                    text-transform:uppercase;
                    letter-spacing:0.08em;
                  "
                >
                  Client Name
                </p>

                <p
                  style="
                    margin:0;
                    font-size:16px;
                    font-weight:700;
                    color:#0f172a;
                  "
                >
                  ${nombre}
                </p>

              </td>
            </tr>

            <tr>
              <td
                style="
                  padding:18px 22px;
                "
              >

                <p
                  style="
                    margin:0 0 6px 0;
                    font-size:11px;
                    font-weight:700;
                    color:#64748b;
                    text-transform:uppercase;
                    letter-spacing:0.08em;
                  "
                >
                  Email Address
                </p>

                <a
                  href="mailto:${email}"
                  style="
                    font-size:15px;
                    color:#2563eb;
                    text-decoration:none;
                    font-weight:600;
                  "
                >
                  ${email}
                </a>

              </td>
            </tr>

          </table>

          <div
            style="
              background:
                linear-gradient(
                  135deg,
                  #eff6ff 0%,
                  #ffffff 100%
                );
              border:1px solid #dbeafe;
              border-radius:24px;
              padding:26px;
            "
          >

            <p
              style="
                margin:0 0 12px 0;
                font-size:11px;
                color:#1d4ed8;
                font-weight:700;
                letter-spacing:0.08em;
                text-transform:uppercase;
              "
            >
              Message Content
            </p>

            <p
              style="
                margin:0;
                font-size:15px;
                line-height:1.8;
                color:#334155;
                white-space:pre-wrap;
              "
            >
              ${mensaje}
            </p>

          </div>

        </td>
      </tr>

      ${wrapperEnd}
    `;

    // EMAIL USUARIO
    const htmlUsuario = `
      ${wrapperStart}

      <tr>
        <td
          style="
            padding:46px 40px;
            text-align:center;
          "
        >

          <div
            style="
              width:82px;
              height:82px;
              border-radius:26px;
              background:
                linear-gradient(
                  135deg,
                  #2563eb 0%,
                  #1d4ed8 100%
                );
              margin:0 auto 28px auto;
              display:flex;
              align-items:center;
              justify-content:center;
              font-size:34px;
            "
          >
            ⚡
          </div>

          <h2
            style="
              margin:0 0 14px 0;
              font-size:34px;
              color:#0f172a;
              line-height:1.05;
              letter-spacing:-0.04em;
            "
          >
            Hello, ${nombre}
          </h2>

          <p
            style="
              margin:0 auto 32px auto;
              max-width:500px;
              font-size:15px;
              line-height:1.8;
              color:#475569;
            "
          >
            Your message has been successfully received.
            Our ByteForge team is already reviewing
            your request and we’ll get back to you
            as soon as possible.
          </p>

          <div
            style="
              text-align:left;
              border:1px solid #dbeafe;
              background:#f8fbff;
              border-radius:24px;
              padding:24px;
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
              Your Message
            </p>

            <p
              style="
                margin:0;
                font-size:14px;
                line-height:1.8;
                color:#334155;
                font-style:italic;
              "
            >
              "${mensaje}"
            </p>

          </div>

          <div style="margin-top:34px">

            <a
              href="https://byteforge.dev"
              style="
                display:inline-block;
                padding:14px 24px;
                border-radius:16px;
                background:
                  linear-gradient(
                    135deg,
                    #2563eb 0%,
                    #1d4ed8 100%
                  );
                color:#ffffff;
                font-size:14px;
                font-weight:700;
                text-decoration:none;
              "
            >
              Visit ByteForge
            </a>

          </div>

        </td>
      </tr>

      ${wrapperEnd}
    `;

    await Promise.all([
      resend.emails.send({
        from:
          "ByteForge <tuvoz@byteforge.com.mx>",
        to: [
          "tuvoz@byteforge.com.mx",
        ],
        replyTo: email,
        subject: `New Website Message: ${nombre}`,
        html: htmlNegocio,
      }),

      resend.emails.send({
        from:
          "ByteForge <tuvoz@byteforge.com.mx>",
        to: [email],
        subject:
          "We received your message - ByteForge",
        html: htmlUsuario,
      }),
    ]);

    return NextResponse.json({
      success: true,
    });

  } catch (error: any) {
    console.error(
      "❌ Error enviando correos:",
      error
    );

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Error al procesar la solicitud",
      },
      { status: 500 }
    );
  }
}