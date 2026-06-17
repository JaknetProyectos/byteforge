"use client";

import { useLocale } from "next-intl";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

function LegalEs() {
    return (
        <div className="legal-container">
            <style dangerouslySetInnerHTML={{
                __html: `
        .legal-container {
          color: #1a1a1a;
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
        .legal-container section { margin-bottom: 3rem; }
      `}} />

            <section id="politica-privacidad">
                <h1>Política de privacidad</h1>

                <p>
                    En cumplimiento con lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares
                    (en adelante, la “Ley”), su Reglamento y demás normativas aplicables,
                    <strong>AGENCIA UYEN CERO PUNTO CERO S.A. DE C.V.</strong>, en lo sucesivo denominado como
                    “Byte Forge” o “Nosotros”, pone a disposición de los usuarios el presente Aviso de Privacidad
                    (el “Aviso”), el cual describe de forma clara, precisa y transparente cómo recopilamos, usamos,
                    almacenamos, compartimos y protegemos sus datos personales.
                </p>

                <h2>1. Responsable del Tratamiento de Datos Personales</h2>

                <p>
                    Byte Forge, con domicilio en Ciudad de México, es la entidad responsable del tratamiento y
                    resguardo de los Datos Personales que sean recabados directamente a través del sitio web:
                    <a href="https://ByteForge.com/" target="_blank" rel="noopener noreferrer">
                        https://ByteForge.com/
                    </a>
                    (en adelante, la “Plataforma”).
                </p>

                <p>
                    Para cualquier asunto relacionado con sus datos personales o el presente Aviso, usted podrá
                    ponerse en contacto con nuestro equipo de protección de datos a través del siguiente correo electrónico:
                    <a href="mailto:tuvoz@byteforge.com.mx">tuvoz@byteforge.com.mx</a>
                </p>

                <h2>2. Datos Personales que Recabamos</h2>

                <p>
                    Con el fin de permitir su acceso y navegación en la Plataforma, proporcionarle información sobre
                    nuestros servicios, atender sus consultas, y gestionar correctamente su relación con Byte Forge,
                    se podrán recabar los siguientes Datos Personales, de manera enunciativa más no limitativa:
                </p>

                <ul>
                    <li>Nombre completo</li>
                    <li>Dirección de correo electrónico</li>
                    <li>Número telefónico particular o móvil</li>
                </ul>

                <p>
                    Adicionalmente, al interactuar con la Plataforma, se puede recopilar otra información de carácter
                    técnico o de navegación, según se detalla más adelante en la sección de cookies y tecnologías de rastreo.
                </p>

                <h2>3. Finalidades del Tratamiento de sus Datos Personales</h2>

                <p>
                    Los datos personales recabados serán utilizados para las siguientes finalidades:
                </p>

                <h3>a) Finalidades Primarias (necesarias para la prestación de los servicios)</h3>

                <ul>
                    <li>Establecer y mantener comunicación directa con usted;</li>
                    <li>Gestionar su registro en la Plataforma y permitir el acceso a nuestros servicios;</li>
                    <li>Emitir comprobantes fiscales digitales, facturas y otros documentos derivados de la relación comercial;</li>
                    <li>Procesar y validar pagos realizados a través de la Plataforma;</li>
                    <li>Cumplir con obligaciones legales y contractuales derivadas del uso de nuestros servicios.</li>
                </ul>

                <h3>b) Finalidades Secundarias (opcionalmente consentidas por usted)</h3>

                <ul>
                    <li>Ofrecer publicidad relacionada con nuestros servicios mientras navega en la Plataforma o accede a nuestros contenidos;</li>
                    <li>Informar sobre nuevos servicios, actualizaciones, eventos, promociones, cursos y presentaciones;</li>
                    <li>Evaluar la calidad del servicio y medir el nivel de satisfacción del cliente;</li>
                    <li>Realizar análisis estadísticos, estudios de mercado y generar reportes internos de uso.</li>
                </ul>

                <p>
                    En caso de que no desee que sus datos sean tratados para fines secundarios, usted puede manifestarlo
                    al enviar una solicitud al correo
                    <a href="mailto:tuvoz@byteforge.com.mx">tuvoz@byteforge.com.mx</a>.
                    Esto no afectará su acceso a los servicios principales de la Plataforma.
                </p>

                <h2>4. Derechos ARCO y Procedimiento para Ejercerlos</h2>

                <p>
                    De conformidad con la Ley, usted tiene derecho a ejercer en cualquier momento los llamados derechos ARCO:
                </p>

                <ul>
                    <li><strong>Acceso:</strong> conocer qué datos personales tenemos de usted y cómo los usamos.</li>
                    <li><strong>Rectificación:</strong> solicitar la corrección de sus datos si son incorrectos o están desactualizados.</li>
                    <li><strong>Cancelación:</strong> solicitar la eliminación de sus datos cuando considere que no se requieren para los fines indicados.</li>
                    <li><strong>Oposición:</strong> negarse al uso de sus datos personales para fines específicos.</li>
                </ul>

                <p>
                    También puede revocar su consentimiento previamente otorgado o limitar el uso o divulgación de sus datos personales.
                </p>

                <p>
                    Para ejercer sus derechos, debe llevar a cabo lo siguiente:
                </p>

                <p>
                    Deberá enviar una solicitud al correo electrónico:
                    <a href="mailto:tuvoz@byteforge.com.mx">tuvoz@byteforge.com.mx</a>
                </p>

                <p>
                    La solicitud debe contener, de forma clara y detallada, lo siguiente:
                </p>

                <ul>
                    <li>Nombre completo del titular y dirección de correo electrónico para comunicar la respuesta;</li>
                    <li>Copia de una identificación oficial vigente o documento que acredite su identidad;</li>
                    <li>Descripción clara del derecho que desea ejercer (acceso, rectificación, cancelación u oposición) o si desea revocar el consentimiento;</li>
                    <li>En su caso, documentación que sustente su petición (por ejemplo, si desea corregir un dato, proporcionar el dato correcto).</li>
                    <li>Fecha de solicitud y firma autógrafa o electrónica.</li>
                </ul>

                <p>
                    Byte Forge dará respuesta en un plazo no mayor a 20 días hábiles contados a partir de la recepción
                    completa de su solicitud. Si la solicitud resulta procedente, se hará efectiva dentro de los 15 días
                    hábiles siguientes a la fecha en que se comunique la respuesta.
                </p>

                <h2>5. Cambios al Aviso de Privacidad</h2>

                <p>
                    Byte Forge podrá actualizar o modificar el presente Aviso de Privacidad en cualquier momento para
                    adaptarlo a cambios legislativos, jurisprudenciales o por necesidades internas derivadas de nuevos
                    servicios o tecnologías.
                </p>

                <p>
                    Cualquier modificación será publicada de forma visible en el sitio web oficial:
                    <a href="https://ByteForge.com/" target="_blank" rel="noopener noreferrer">
                        https://ByteForge.com/
                    </a>.
                </p>

                <p>
                    Le recomendamos revisar periódicamente este Aviso para mantenerse informado sobre su contenido y
                    cualquier posible modificación. La fecha de la última actualización se indicará al inicio del documento.
                </p>

                <h2>6. Transferencia de Datos Personales</h2>

                <p>
                    Byte Forge no transferirá sus Datos Personales a terceros sin su consentimiento expreso, excepto en
                    los siguientes casos permitidos por la Ley:
                </p>

                <ul>
                    <li>Cuando sea requerido por autoridades competentes en el ejercicio de sus funciones y bajo el marco legal aplicable;</li>
                    <li>Para el cumplimiento de obligaciones contractuales y legales relacionadas con los servicios prestados;</li>
                    <li>Para el procesamiento de pagos por servicios contratados a través de la Plataforma;</li>
                    <li>En cualquier otro caso en que la transferencia sea necesaria para cumplir con las finalidades establecidas en este Aviso y que no requiere consentimiento del titular según la Ley.</li>
                </ul>

                <p>
                    En los casos en los que se requiera consentimiento, se le solicitará previamente y de forma expresa.
                </p>

                <h2>7. Uso de Cookies, Web Beacons y Tecnologías Similares</h2>

                <p>
                    Al hacer uso de nuestros servicios y navegar en nuestra Plataforma, usted acepta que Byte Forge podrá,
                    directamente o a través de terceros autorizados, recopilar datos sobre su equipo, navegador, actividad
                    y comportamiento mediante el uso de cookies, web beacons y otras tecnologías de rastreo.
                </p>

                <p>Información que se puede recopilar:</p>

                <ul>
                    <li>Dirección IP</li>
                    <li>Tipo y versión del navegador</li>
                    <li>Sistema operativo y tipo de dispositivo</li>
                    <li>Fecha y hora de acceso</li>
                    <li>Páginas visitadas dentro de la Plataforma</li>
                    <li>Tiempo de permanencia en el sitio</li>
                </ul>

                <p>Finalidad:</p>

                <ul>
                    <li>Mejorar la experiencia del usuario;</li>
                    <li>Personalizar el contenido mostrado;</li>
                    <li>Analizar estadísticas de uso;</li>
                    <li>Detectar posibles errores o vulnerabilidades en la navegación.</li>
                </ul>

                <p>
                    Usted puede configurar su navegador para aceptar o rechazar las cookies, o bien para que le notifique
                    antes de almacenarlas. Si decide deshabilitar las cookies, es posible que algunas funcionalidades de
                    la Plataforma no se encuentren disponibles.
                </p>

                <h2>8. Contacto y Atención al Usuario</h2>

                <p>
                    Para cualquier duda, comentario o inquietud relacionada con este Aviso de Privacidad o con el
                    tratamiento de sus datos personales, puede contactarnos a través del siguiente medio:
                </p>

                <p>
                    Correo electrónico:
                    <a href="mailto:tuvoz@byteforge.com.mx">tuvoz@byteforge.com.mx</a>
                </p>

                <p>
                    Nuestro equipo está disponible para atender sus solicitudes de forma oportuna, ética y profesional,
                    garantizando en todo momento la protección de sus derechos como titular de datos personales.
                </p>

                <p><strong>Última actualización: Junio 2026</strong></p>
            </section>
        </div>
    );
}

function LegalEn() {
    return (
        <div className="legal-container">
            <style dangerouslySetInnerHTML={{
                __html: `
        .legal-container {
          color: #1a1a1a;
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
      `}} />

            <section id="privacy-policy">
                <h1>Privacy Policy</h1>

                <p>
                    In compliance with the provisions of the Federal Law on the Protection of Personal Data Held by Private Parties
                    (hereinafter, the “Law”), its Regulations, and other applicable regulations,
                    <strong>AGENCIA UYEN CERO PUNTO CERO S.A. DE C.V.</strong>, hereinafter referred to as
                    “Byte Forge” or “We”, makes this Privacy Notice (the “Notice”) available to users.
                    This Notice clearly, accurately, and transparently describes how we collect, use, store,
                    share, and protect your personal data.
                </p>

                <h2>1. Personal Data Controller</h2>

                <p>
                    Byte Forge, with registered address in Mexico City, is the entity responsible for the processing
                    and safeguarding of the Personal Data collected directly through the website:
                    <a href="https://ByteForge.com/" target="_blank" rel="noopener noreferrer">
                        https://ByteForge.com/
                    </a>
                    (hereinafter, the “Platform”).
                </p>

                <p>
                    For any matter related to your personal data or this Notice, you may contact our data protection team
                    through the following email address:
                    <a href="mailto:tuvoz@byteforge.com.mx">tuvoz@byteforge.com.mx</a>
                </p>

                <h2>2. Personal Data We Collect</h2>

                <p>
                    In order to allow your access and navigation through the Platform, provide information about our services,
                    respond to your inquiries, and properly manage your relationship with Byte Forge,
                    the following Personal Data may be collected, including but not limited to:
                </p>

                <ul>
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Landline or mobile phone number</li>
                </ul>

                <p>
                    Additionally, when interacting with the Platform, other technical or browsing-related information
                    may be collected, as detailed later in the cookies and tracking technologies section.
                </p>

                <h2>3. Purposes for Processing Your Personal Data</h2>

                <p>
                    The personal data collected will be used for the following purposes:
                </p>

                <h3>a) Primary Purposes (necessary for the provision of services)</h3>

                <ul>
                    <li>Establish and maintain direct communication with you;</li>
                    <li>Manage your registration on the Platform and allow access to our services;</li>
                    <li>Issue digital tax receipts, invoices, and other documents derived from the business relationship;</li>
                    <li>Process and validate payments made through the Platform;</li>
                    <li>Comply with legal and contractual obligations arising from the use of our services.</li>
                </ul>

                <h3>b) Secondary Purposes (optionally consented to by you)</h3>

                <ul>
                    <li>Offer advertising related to our services while you browse the Platform or access our content;</li>
                    <li>Inform you about new services, updates, events, promotions, courses, and presentations;</li>
                    <li>Evaluate service quality and measure customer satisfaction levels;</li>
                    <li>Conduct statistical analysis, market studies, and generate internal usage reports.</li>
                </ul>

                <p>
                    If you do not wish your data to be processed for secondary purposes, you may express this by sending
                    a request to the email address
                    <a href="mailto:tuvoz@byteforge.com.mx">tuvoz@byteforge.com.mx</a>.
                    This will not affect your access to the main services of the Platform.
                </p>

                <h2>4. ARCO Rights and Procedure to Exercise Them</h2>

                <p>
                    In accordance with the Law, you have the right to exercise the so-called ARCO rights at any time:
                </p>

                <ul>
                    <li><strong>Access:</strong> to know what personal data we hold about you and how we use it.</li>
                    <li><strong>Rectification:</strong> to request correction of your data if it is incorrect or outdated.</li>
                    <li><strong>Cancellation:</strong> to request deletion of your data when you believe it is no longer necessary for the stated purposes.</li>
                    <li><strong>Opposition:</strong> to object to the use of your personal data for specific purposes.</li>
                </ul>

                <p>
                    You may also revoke your previously granted consent or limit the use or disclosure of your personal data.
                </p>

                <p>
                    To exercise your rights, you must complete the following:
                </p>

                <p>
                    You must send a request to the following email address:
                    <a href="mailto:tuvoz@byteforge.com.mx">tuvoz@byteforge.com.mx</a>
                </p>

                <p>
                    The request must clearly and thoroughly include the following:
                </p>

                <ul>
                    <li>The full name of the data subject and email address to communicate the response;</li>
                    <li>A copy of a valid official identification document or other document proving your identity;</li>
                    <li>A clear description of the right you wish to exercise (access, rectification, cancellation, or opposition), or if you wish to revoke consent;</li>
                    <li>Where applicable, documentation supporting your request (for example, if you wish to correct information, provide the correct data).</li>
                    <li>Date of the request and handwritten or electronic signature.</li>
                </ul>

                <p>
                    Byte Forge will respond within a period not exceeding 20 business days from the complete receipt
                    of your request. If the request is deemed appropriate, it will be implemented within the following
                    15 business days from the date on which the response is communicated.
                </p>

                <h2>5. Changes to the Privacy Notice</h2>

                <p>
                    Byte Forge may update or modify this Privacy Notice at any time in order to adapt it to legislative,
                    jurisprudential, or internal changes arising from new services or technologies.
                </p>

                <p>
                    Any modification will be visibly published on the official website:
                    <a href="https://ByteForge.com/" target="_blank" rel="noopener noreferrer">
                        https://ByteForge.com/
                    </a>.
                </p>

                <p>
                    We recommend periodically reviewing this Notice to stay informed about its content and any possible modifications.
                    The date of the latest update will be indicated at the beginning of the document.
                </p>

                <h2>6. Transfer of Personal Data</h2>

                <p>
                    Byte Forge will not transfer your Personal Data to third parties without your express consent,
                    except in the following cases permitted by Law:
                </p>

                <ul>
                    <li>When required by competent authorities in the exercise of their functions and under the applicable legal framework;</li>
                    <li>For compliance with contractual and legal obligations related to the services provided;</li>
                    <li>For processing payments for services contracted through the Platform;</li>
                    <li>In any other case where the transfer is necessary to fulfill the purposes established in this Notice and does not require the data subject’s consent under the Law.</li>
                </ul>

                <p>
                    In cases where consent is required, it will be requested beforehand and explicitly.
                </p>

                <h2>7. Use of Cookies, Web Beacons, and Similar Technologies</h2>

                <p>
                    By using our services and browsing our Platform, you accept that Byte Forge may, directly or through
                    authorized third parties, collect data about your equipment, browser, activity, and behavior through
                    the use of cookies, web beacons, and other tracking technologies.
                </p>

                <p>Information that may be collected:</p>

                <ul>
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system and device type</li>
                    <li>Date and time of access</li>
                    <li>Pages visited within the Platform</li>
                    <li>Time spent on the site</li>
                </ul>

                <p>Purpose:</p>

                <ul>
                    <li>Improve user experience;</li>
                    <li>Customize displayed content;</li>
                    <li>Analyze usage statistics;</li>
                    <li>Detect possible browsing errors or vulnerabilities.</li>
                </ul>

                <p>
                    You may configure your browser to accept or reject cookies, or to notify you before storing them.
                    If you choose to disable cookies, some functionalities of the Platform may not be available.
                </p>

                <h2>8. Contact and User Support</h2>

                <p>
                    For any questions, comments, or concerns related to this Privacy Notice or the processing of your personal data,
                    you may contact us through the following means:
                </p>

                <p>
                    Email:
                    <a href="mailto:tuvoz@byteforge.com.mx">tuvoz@byteforge.com.mx</a>
                </p>

                <p>
                    Our team is available to address your requests promptly, ethically, and professionally,
                    guaranteeing at all times the protection of your rights as a personal data holder.
                </p>

                <p><strong>Last updated: June 2026</strong></p>
            </section>
        </div>
    );
}

export default function LegalPage() {
    const locale = useLocale();

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow container mx-auto px-6 py-20 max-w-4xl">
                {locale === "es" ? <LegalEs /> : <LegalEn />}
            </main>
            <Footer />
        </div>
    );
}