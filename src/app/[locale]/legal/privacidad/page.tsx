"use client";

import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

            <section id="aviso-privacidad-datos-personales">
                <h1>Aviso de Privacidad de Datos Personales – ACLINICO, S.A. DE C.V.</h1>

                <h2>1. Quién cuida tu información</h2>

                <p>
                    1.1. La empresa que opera este Sitio de distribución de productos médicos y
                    clínicos (en adelante, la Comercializadora) es responsable del uso y
                    protección de los datos personales que recaba a través de sus canales
                    digitales y de contacto.
                </p>

                <p>
                    1.2. ACLINICO, S.A. DE C.V. con RFC ACL210407975 y domicilio de atención
                    ubicado en Avenida Jaime Balmes 11, Interior 15a Torre A Piso 1, Colonia
                    Polanco I Sección, Alcaldía Miguel Hidalgo, C.P. 11510, Ciudad de México.
                </p>

                <p>
                    1.3. Para cualquier duda o solicitud relacionada con tus datos personales,
                    puedes escribir al correo hello@centromedicoavanza.com y consultar la
                    información disponible en el Sitio centromedicoavanza.com
                </p>

                <h2>2. Qué datos personales podemos solicitar</h2>

                <p>
                    2.1. Dependiendo de la interacción que tengas con la Comercializadora
                    (consulta, cotización, compra, facturación), se pueden recabar datos de
                    identificación como nombre y apellidos.
                </p>

                <p>
                    2.2. También se pueden recabar datos de contacto como correo electrónico y
                    número telefónico.
                </p>

                <p>
                    2.3. Cuando aplica el envío de productos, se podrán solicitar datos de
                    entrega como domicilio o referencias para envío.
                </p>

                <p>
                    2.4. Para efectos de facturación, podremos solicitar denominación o razón
                    social, RFC, domicilio fiscal y otros datos necesarios para la emisión de
                    comprobantes fiscales.
                </p>

                <p>
                    2.5. Podremos obtener datos sobre tu relación comercial, como tipo de
                    organización (hospital, clínica, consultorio, proveedor), área de contacto
                    y productos de interés.
                </p>

                <p>
                    2.6. Asimismo, se pueden recabar datos de uso del Sitio, como páginas
                    visitadas, fecha y hora de acceso, tiempo de permanencia y referencias de
                    origen, obtenidos mediante cookies y herramientas de analítica.
                </p>

                <p>
                    2.7. La Comercializadora no busca recabar datos personales sensibles de
                    manera directa; si por alguna razón decides proporcionarlos, se entenderá
                    que lo haces de forma voluntaria y podrán aplicarse reglas adicionales de
                    protección.
                </p>

                <h2>3. Para qué usamos tu información</h2>

                <p>
                    3.1. Tus datos personales se utilizan para atender solicitudes de
                    información, cotizaciones y contacto relacionadas con el portafolio de
                    productos médicos y clínicos.
                </p>

                <p>
                    3.2. Se usan para gestionar pedidos, confirmar disponibilidad, coordinar
                    entregas y dar seguimiento a tus compras.
                </p>

                <p>
                    3.3. Se emplean para emitir comprobantes fiscales cuando así lo solicites.
                </p>

                <p>
                    3.4. También se utilizan para mantener comunicación contigo en relación con
                    aclaraciones, dudas técnicas o administrativas sobre tus adquisiciones.
                </p>

                <p>
                    3.5. De manera adicional, y solo en caso de que tú lo permitas, podremos
                    utilizar tus datos para enviarte información sobre nuevos productos,
                    actualizaciones de catálogo o mejoras en nuestros servicios.
                </p>

                <p>
                    3.6. Asimismo, podremos compartir contenido informativo vinculado al sector
                    salud, logística de insumos y buenas prácticas operativas.
                </p>

                <p>
                    3.7. Tus datos también pueden utilizarse para realizar encuestas de
                    satisfacción y análisis internos que nos permitan mejorar procesos y
                    atención.
                </p>

                <p>
                    3.8. Si no deseas recibir comunicaciones de carácter comercial o
                    informativo, puedes solicitarlo en cualquier momento conforme a la sección
                    6 de este Aviso.
                </p>

                <h2>4. Fundamento del tratamiento y consentimiento</h2>

                <p>
                    4.1. El tratamiento de tus datos personales se realiza con base en la
                    legislación mexicana en materia de protección de datos personales en
                    posesión de particulares.
                </p>

                <p>
                    4.2. Cuando proporcionas tus datos a través del Sitio, correo, teléfono o
                    cualquier formulario de contacto, se entiende que consientes su tratamiento
                    para las finalidades necesarias de atención, cotización, compra y
                    facturación.
                </p>

                <p>
                    4.3. Para finalidades adicionales, como mercadotecnia o envíos
                    informativos, podrás aceptar o rechazar de forma expresa, o solicitar
                    posteriormente que dejemos de usar tus datos para esos fines.
                </p>

                <h2>5. Con quién podemos compartir tus datos</h2>

                <p>
                    5.1. Para poder cumplir con las finalidades descritas, la Comercializadora
                    puede apoyarse en terceros que actúan como proveedores de servicios y que,
                    por tanto, pueden tener acceso a ciertos datos personales.
                </p>

                <p>
                    5.2. Entre dichos terceros pueden encontrarse empresas de mensajería y
                    logística para la entrega de productos.
                </p>

                <p>
                    5.3. También pueden incluirse proveedores de plataformas tecnológicas,
                    hosting y herramientas de analítica.
                </p>

                <p>
                    5.4. Podrán participar proveedores de servicios de pago o instituciones
                    financieras que procesan las transacciones.
                </p>

                <p>
                    5.5. En algunos casos será necesario compartir datos con asesores legales,
                    contables o fiscales para cumplir obligaciones legales.
                </p>

                <p>
                    5.6. Estos terceros solo utilizarán la información siguiendo instrucciones
                    de la Comercializadora y no podrán emplearla para fines distintos a los aquí
                    señalados.
                </p>

                <p>
                    5.7. La Comercializadora no vende ni renta bases de datos personales.
                </p>

                <h2>6. Tus derechos ARCO y cómo ejercerlos</h2>

                <p>
                    6.1. Como titular de los datos personales, tienes derecho a acceder a tus
                    datos, solicitar su rectificación, pedir su cancelación o manifestar tu
                    oposición al tratamiento de los mismos, derechos conocidos como ARCO.
                </p>

                <p>
                    6.2. Para ejercer cualquiera de estos derechos, o para limitar el uso de tus
                    datos, puedes enviar un correo a hello@centromedicoavanza.com indicando tu
                    nombre completo, un medio de contacto y el derecho que deseas ejercer,
                    explicando de forma clara tu solicitud.
                </p>

                <p>
                    6.3. Deberás adjuntar copia de un documento que acredite tu identidad o, en
                    su caso, la representación legal correspondiente.
                </p>

                <p>
                    6.4. La Comercializadora responderá en los plazos establecidos por la
                    legislación aplicable, indicándote si tu solicitud resulta procedente y, en
                    su caso, los pasos para hacerla efectiva.
                </p>

                <p>
                    6.5. Para dejar de recibir correos informativos o comerciales, también
                    puedes utilizar los mecanismos de baja incluidos en los propios mensajes o
                    enviar un correo con el asunto “Cancelar suscripción”.
                </p>

                <h2>7. Cookies y tecnologías similares</h2>

                <p>
                    7.1. El Sitio puede utilizar cookies y tecnologías similares para mejorar tu
                    experiencia de navegación, recopilar estadísticas y entender cómo se usa el
                    contenido.
                </p>

                <p>
                    7.2. Estas tecnologías pueden almacenar información básica como el tipo de
                    dispositivo que utilizas, el navegador, las secciones que visitas y el
                    tiempo que permaneces en el Sitio.
                </p>

                <p>
                    7.3. Puedes ajustar la configuración de tu navegador para bloquear o
                    eliminar cookies; en ese caso, algunas funciones del Sitio podrían no
                    ejecutarse de forma óptima.
                </p>

                <h2>8. Cómo protegemos tu información</h2>

                <p>
                    8.1. La Comercializadora implementa medidas de seguridad administrativas,
                    técnicas y físicas para proteger los datos personales contra pérdida, uso
                    indebido, acceso no autorizado, alteración o destrucción.
                </p>

                <p>
                    8.2. Aunque se trabaja para mantener un nivel adecuado de seguridad, ningún
                    sistema es completamente inmune; la Comercializadora revisa y mejora de
                    forma continua sus medidas de protección.
                </p>

                <h2>9. Tiempo de conservación de los datos</h2>

                <p>
                    9.1. Los datos personales se conservarán durante el tiempo que sea necesario
                    para cumplir con las finalidades descritas en este Aviso y para atender
                    posibles obligaciones legales, fiscales o contractuales.
                </p>

                <p>
                    9.2. Una vez que deje de ser necesario conservar tu información, se
                    procederá a su supresión o anonimización, conforme a las políticas internas
                    de la Comercializadora y a la normatividad aplicable.
                </p>

                <h2>10. Cambios a este Aviso de Privacidad</h2>

                <p>
                    10.1. La Comercializadora podrá actualizar este Aviso de Privacidad para
                    reflejar cambios normativos, mejoras internas o ajustes en los servicios
                    ofrecidos.
                </p>

                <p>
                    10.2. Cualquier modificación relevante se publicará en el Sitio
                    centromedicoavanza.com indicando la fecha de la última actualización.
                </p>

                <h2>11. Aceptación del Aviso</h2>

                <p>
                    11.1. Al navegar en el Sitio, enviar datos mediante formularios, solicitar
                    información, cotizar o realizar compras, confirmas que conoces y aceptas el
                    contenido de este Aviso de Privacidad.
                </p>

                <p>
                    11.2. Si en algún momento no estás de acuerdo con la forma en que tratamos
                    tus datos, puedes ejercer tus derechos ARCO o contactar a la Comercializadora
                    para revisar tu caso en particular.
                </p>

                <p>
                    <strong>Última actualización:</strong> Junio 2026.
                </p>
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

            <section id="personal-data-privacy-notice">
                <h1>Personal Data Privacy Notice – ACLINICO, S.A. DE C.V.</h1>

                <h2>1. Who takes care of your information</h2>

                <p>
                    1.1. The company operating this medical and clinical products distribution
                    Site (hereinafter, the Distributor) is responsible for the use and
                    protection of the personal data collected through its digital and contact
                    channels.
                </p>

                <p>
                    1.2. ACLINICO, S.A. DE C.V., with Tax ID (RFC) ACL210407975 and service
                    address located at Avenida Jaime Balmes 11, Interior 15a Torre A Piso 1,
                    Colonia Polanco I Sección, Miguel Hidalgo Borough, ZIP Code 11510,
                    Mexico City.
                </p>

                <p>
                    1.3. For any questions or requests related to your personal data, you may
                    contact us via email at hello@centromedicoavanza.com and consult the
                    information available on the Site centromedicoavanza.com
                </p>

                <h2>2. What personal data we may request</h2>

                <p>
                    2.1. Depending on the interaction you have with the Distributor
                    (consultation, quotation, purchase, invoicing), identification data such as
                    first and last name may be collected.
                </p>

                <p>
                    2.2. Contact information such as email address and phone number may also be
                    collected.
                </p>

                <p>
                    2.3. When product shipment applies, delivery information such as address or
                    shipping references may be requested.
                </p>

                <p>
                    2.4. For invoicing purposes, we may request company name or legal business
                    name, Tax ID (RFC), tax address, and other data necessary for issuing tax
                    receipts.
                </p>

                <p>
                    2.5. We may obtain information regarding your business relationship, such
                    as type of organization (hospital, clinic, office, supplier), contact area,
                    and products of interest.
                </p>

                <p>
                    2.6. Likewise, usage data from the Site may be collected, such as visited
                    pages, access date and time, time spent on the Site, and source references,
                    obtained through cookies and analytics tools.
                </p>

                <p>
                    2.7. The Distributor does not seek to directly collect sensitive personal
                    data; however, if for any reason you decide to provide such information, it
                    will be understood that you do so voluntarily, and additional protection
                    rules may apply.
                </p>

                <h2>3. How we use your information</h2>

                <p>
                    3.1. Your personal data is used to respond to information requests,
                    quotations, and contact related to the portfolio of medical and clinical
                    products.
                </p>

                <p>
                    3.2. It is used to manage orders, confirm availability, coordinate
                    deliveries, and follow up on your purchases.
                </p>

                <p>
                    3.3. It is used to issue tax receipts when requested by you.
                </p>

                <p>
                    3.4. It is also used to maintain communication with you regarding
                    clarifications, technical questions, or administrative matters related to
                    your purchases.
                </p>

                <p>
                    3.5. Additionally, and only if you allow it, we may use your data to send
                    you information about new products, catalog updates, or improvements to our
                    services.
                </p>

                <p>
                    3.6. Likewise, we may share informative content related to the healthcare
                    sector, supply logistics, and operational best practices.
                </p>

                <p>
                    3.7. Your data may also be used to conduct satisfaction surveys and
                    internal analyses that help us improve processes and customer service.
                </p>

                <p>
                    3.8. If you do not wish to receive commercial or informational
                    communications, you may request this at any time in accordance with Section
                    6 of this Notice.
                </p>

                <h2>4. Legal basis for processing and consent</h2>

                <p>
                    4.1. The processing of your personal data is carried out based on Mexican
                    legislation regarding the protection of personal data held by private
                    parties.
                </p>

                <p>
                    4.2. When you provide your data through the Site, email, phone, or any
                    contact form, it is understood that you consent to its processing for the
                    necessary purposes of assistance, quotations, purchases, and invoicing.
                </p>

                <p>
                    4.3. For additional purposes, such as marketing or informational
                    communications, you may expressly accept or reject such use, or later
                    request that we stop using your data for those purposes.
                </p>

                <h2>5. With whom we may share your data</h2>

                <p>
                    5.1. In order to fulfill the purposes described, the Distributor may rely
                    on third parties acting as service providers who may therefore have access
                    to certain personal data.
                </p>

                <p>
                    5.2. Such third parties may include courier and logistics companies for the
                    delivery of products.
                </p>

                <p>
                    5.3. They may also include technology platform providers, hosting services,
                    and analytics tools.
                </p>

                <p>
                    5.4. Payment service providers or financial institutions that process
                    transactions may also participate.
                </p>

                <p>
                    5.5. In some cases, it may be necessary to share data with legal,
                    accounting, or tax advisors in order to comply with legal obligations.
                </p>

                <p>
                    5.6. These third parties will only use the information following the
                    Distributor’s instructions and may not use it for purposes other than those
                    indicated herein.
                </p>

                <p>
                    5.7. The Distributor does not sell or rent personal databases.
                </p>

                <h2>6. Your ARCO rights and how to exercise them</h2>

                <p>
                    6.1. As the owner of personal data, you have the right to access your data,
                    request its rectification, request its cancellation, or object to its
                    processing, rights known as ARCO rights.
                </p>

                <p>
                    6.2. To exercise any of these rights, or to limit the use of your data, you
                    may send an email to hello@centromedicoavanza.com indicating your full
                    name, a contact method, and the right you wish to exercise, clearly
                    explaining your request.
                </p>

                <p>
                    6.3. You must attach a copy of a document proving your identity or, where
                    applicable, the corresponding legal representation.
                </p>

                <p>
                    6.4. The Distributor will respond within the timeframes established by
                    applicable legislation, informing you whether your request is admissible
                    and, if applicable, the steps to make it effective.
                </p>

                <p>
                    6.5. To stop receiving informational or commercial emails, you may also use
                    the unsubscribe mechanisms included in the messages themselves or send an
                    email with the subject line “Unsubscribe”.
                </p>

                <h2>7. Cookies and similar technologies</h2>

                <p>
                    7.1. The Site may use cookies and similar technologies to improve your
                    browsing experience, collect statistics, and understand how content is
                    used.
                </p>

                <p>
                    7.2. These technologies may store basic information such as the type of
                    device you use, browser type, sections visited, and time spent on the Site.
                </p>

                <p>
                    7.3. You may adjust your browser settings to block or delete cookies; in
                    such case, some Site functions may not operate optimally.
                </p>

                <h2>8. How we protect your information</h2>

                <p>
                    8.1. The Distributor implements administrative, technical, and physical
                    security measures to protect personal data against loss, misuse,
                    unauthorized access, alteration, or destruction.
                </p>

                <p>
                    8.2. Although efforts are made to maintain an adequate level of security,
                    no system is completely immune; the Distributor continuously reviews and
                    improves its protection measures.
                </p>

                <h2>9. Data retention period</h2>

                <p>
                    9.1. Personal data will be retained for as long as necessary to fulfill the
                    purposes described in this Notice and to comply with possible legal, tax,
                    or contractual obligations.
                </p>

                <p>
                    9.2. Once your information no longer needs to be retained, it will be
                    deleted or anonymized in accordance with the Distributor’s internal
                    policies and applicable regulations.
                </p>

                <h2>10. Changes to this Privacy Notice</h2>

                <p>
                    10.1. The Distributor may update this Privacy Notice to reflect regulatory
                    changes, internal improvements, or adjustments to the services offered.
                </p>

                <p>
                    10.2. Any relevant modification will be published on the Site
                    centromedicoavanza.com indicating the date of the latest update.
                </p>

                <h2>11. Acceptance of the Notice</h2>

                <p>
                    11.1. By browsing the Site, submitting data through forms, requesting
                    information, obtaining quotations, or making purchases, you confirm that
                    you know and accept the contents of this Privacy Notice.
                </p>

                <p>
                    11.2. If at any time you do not agree with the way we process your data,
                    you may exercise your ARCO rights or contact the Distributor to review your
                    particular case.
                </p>

                <p>
                    <strong>Last updated:</strong> June 2026.
                </p>
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