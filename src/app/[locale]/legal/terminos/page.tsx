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

            <section id="terms-and-conditions">
                <h1>Términos y Condiciones</h1>

                <p>
                    Los presentes Términos y Condiciones (en adelante, los “Términos”) regulan el acceso,
                    navegación, contratación y uso que cualquier persona física o moral (el “Usuario”)
                    haga del sitio web disponible en la dirección:
                    <a href="https://byteforge.com.mx" target="_blank" rel="noopener noreferrer">
                        byteforge.com.mx
                    </a>
                    (el “Sitio Web”), así como de todos los productos, servicios, contenidos y funcionalidades
                    ofrecidas a través del mismo (en conjunto, los “Servicios”).
                </p>

                <p>
                    Al acceder, navegar o utilizar el Sitio Web y/o al contratar alguno de los Servicios,
                    el Usuario declara haber leído, comprendido y aceptado expresamente estos Términos.
                    Si el Usuario no acepta estos Términos, deberá abstenerse de utilizar el Sitio Web
                    o contratar los Servicios.
                </p>

                <h2>1. Sobre Byte Forge y su Sitio Web</h2>

                <p>
                    <strong>AGENCIA UYEN CERO PUNTO CERO S.A. DE C.V.</strong>,
                    en lo sucesivo “Byte Forge”, es una sociedad mercantil legalmente constituida conforme
                    a las leyes mexicanas, con domicilio en la Ciudad de México.
                </p>

                <p>
                    Su objeto social principal es el uso, aprovechamiento y explotación de bandas de frecuencia
                    del espectro radioeléctrico para la prestación de servicios de radiodifusión,
                    telefonía e internet, previa obtención de la concesión correspondiente por parte
                    del Instituto Federal de Telecomunicaciones (IFT) o cualquier autoridad competente.
                </p>

                <p>
                    Byte Forge es titular y responsable de la operación del Sitio Web y de la oferta
                    de los Servicios disponibles en él, los cuales se encuentran sujetos
                    a los presentes Términos.
                </p>

                <h2>2. Pedidos, Precios y Pagos</h2>

                <p>
                    Los Servicios disponibles en el Sitio Web podrán ser contratados seleccionando
                    el paquete deseado en la sección de “Planes y precios”.
                    Para contratar cualquiera de los Servicios, el Usuario deberá ser mayor de 18 años,
                    tener capacidad legal para obligarse y contar con una tarjeta de crédito o débito válida.
                </p>

                <p>
                    Al realizar un pedido, el Usuario garantiza que:
                </p>

                <ul>
                    <li>Toda la información proporcionada es veraz, exacta, actual y completa;</li>
                    <li>Es el titular o cuenta con autorización para utilizar la tarjeta bancaria con la que realiza el pago;</li>
                    <li>Dispone de fondos suficientes para cubrir el costo total del pedido, incluyendo, en su caso, impuestos, gastos de envío y servicios complementarios.</li>
                </ul>

                <p>
                    El Sitio Web permite al Usuario revisar su pedido antes de confirmarlo.
                    Es responsabilidad exclusiva del Usuario verificar cuidadosamente la información proporcionada
                    y corregir cualquier error antes de enviar el pedido.
                </p>

                <h3>Procesamiento de pagos</h3>

                <p>
                    Byte Forge no es el encargado del procesamiento directo de los pagos,
                    sino que utiliza un Proveedor Autorizado de Procesamiento de Pagos
                    (el “Procesador Autorizado”), quien actúa bajo los estándares de seguridad
                    y cumplimiento requeridos por el Payment Card Industry Data Security Standard (PCI DSS).
                </p>

                <p>
                    Por motivos de seguridad y transparencia:
                </p>

                <p>
                    Byte Forge no almacena, procesa ni transmite datos financieros del Usuario.
                </p>

                <p>
                    Byte Forge no realiza cargos automáticos, preautorizados ni recurrentes.
                    El Usuario deberá efectuar el pago correspondiente de forma manual en cada periodo
                    en que desee continuar utilizando los Servicios contratados.
                </p>

                <p>
                    Todos los precios están expresados en Pesos Mexicanos (MXN), moneda nacional.
                    Byte Forge implementa medidas de seguridad razonables para proteger la información
                    de pago del Usuario durante la operación.
                </p>

                <p>
                    Una vez realizado el pago y verificada la transacción,
                    el Usuario recibirá un correo electrónico de confirmación
                    con los detalles del servicio contratado y el procedimiento de activación.
                </p>

                <h2>3. Uso del Sitio Web</h2>

                <h3>a) Acceso y navegación</h3>

                <p>
                    El Sitio Web se encuentra disponible sin costo para su acceso.
                    No obstante, Byte Forge se reserva el derecho de modificar,
                    limitar o suspender el acceso al mismo, parcial o totalmente, sin previo aviso.
                </p>

                <p>
                    El Usuario será responsable de:
                </p>

                <ul>
                    <li>Realizar las configuraciones técnicas necesarias para acceder al Sitio Web;</li>
                    <li>Asegurar que todas las personas que accedan al Sitio Web desde su conexión conozcan y acepten estos Términos;</li>
                    <li>Abstenerse de utilizar el Sitio Web con fines comerciales sin autorización previa y por escrito de Byte Forge.</li>
                </ul>

                <p>
                    El acceso al Sitio Web no incluye el derecho a reproducción, copia, distribución,
                    venta, reventa o uso comercial de sus contenidos,
                    sin el consentimiento expreso de Byte Forge.
                </p>

                <h3>b) Conducta del Usuario</h3>

                <p>
                    El Usuario se obliga a utilizar el Sitio Web de forma lícita,
                    respetuosa y conforme a la normativa aplicable.
                    Está estrictamente prohibido:
                </p>

                <ul>
                    <li>Utilizar el Sitio Web de manera que cause daño, interrupción o deterioro del mismo;</li>
                    <li>Interferir con la seguridad, integridad o funcionalidad del Sitio Web;</li>
                    <li>Realizar actividades que infrinjan leyes locales, nacionales o internacionales vigentes.</li>
                </ul>

                <p>
                    El Usuario será el único responsable de todas las acciones que realice
                    desde su cuenta, dispositivo o conexión,
                    incluyendo el contenido que comparta o envíe a través del Sitio Web.
                </p>

                <h2>4. Política de Privacidad</h2>

                <p>
                    El uso del Sitio Web y la contratación de los Servicios implican
                    el tratamiento de datos personales del Usuario.
                    Dicho tratamiento se realiza conforme a lo dispuesto en el Aviso de Privacidad
                    de Byte Forge, el cual forma parte integral de estos Términos.
                </p>

                <p>
                    Le recomendamos leer el Aviso de Privacidad detenidamente,
                    ya que en él se detalla cómo se recopilan, utilizan, almacenan,
                    protegen y transfieren sus datos personales.
                </p>

                <p>
                    Al utilizar el Sitio Web, el Usuario consiente expresamente
                    el tratamiento de sus datos conforme al Aviso de Privacidad
                    y garantiza que toda la información proporcionada es exacta y verídica.
                </p>

                <h2>5. Propiedad Intelectual y Contenidos</h2>

                <p>
                    Todos los derechos de propiedad intelectual relacionados con el Sitio Web y sus contenidos
                    —incluyendo, pero no limitándose a, textos, imágenes, gráficos, logotipos, íconos,
                    archivos de audio, videos, descargas digitales, compilaciones de datos y software—
                    (el “Contenido”) son propiedad exclusiva de Byte Forge o de sus licenciantes.
                </p>

                <p>
                    El Sitio Web y su Contenido están protegidos por la legislación nacional e internacional
                    sobre derechos de autor, propiedad industrial y bases de datos.
                    Queda estrictamente prohibido:
                </p>

                <ul>
                    <li>Extraer, reutilizar o compilar partes sustanciales del Sitio Web o del Contenido;</li>
                    <li>Utilizar herramientas de extracción automatizada como data mining, bots, crawlers o técnicas similares;</li>
                    <li>Crear y/o publicar bases de datos con partes sustanciales del Sitio Web sin autorización expresa.</li>
                </ul>

                <p>
                    Las marcas comerciales, nombres comerciales, logotipos o imágenes de terceros
                    que aparezcan en el Sitio Web son propiedad de sus respectivos titulares
                    y su aparición no implica asociación, vínculo o respaldo alguno con Byte Forge,
                    salvo que se indique expresamente lo contrario.
                </p>

                <h2>6. Legislación Aplicable y Jurisdicción</h2>

                <p>
                    Los presentes Términos y Condiciones, así como cualquier relación contractual
                    entre el Usuario y Byte Forge derivada del uso del Sitio Web
                    o la contratación de los Servicios,
                    se regirán e interpretarán de conformidad con las leyes de los Estados Unidos Mexicanos.
                </p>

                <p>
                    Para la interpretación, cumplimiento y ejecución de los presentes Términos,
                    las partes se someten a la jurisdicción exclusiva de los tribunales competentes
                    en la Ciudad de México, renunciando expresamente a cualquier otro fuero
                    que pudiera corresponderles por razón de su domicilio presente o futuro.
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

            <section id="terms-and-conditions">
                <h1>Terms and Conditions</h1>

                <p>
                    These Terms and Conditions (hereinafter, the “Terms”) govern the access,
                    navigation, contracting, and use by any individual or legal entity
                    (the “User”) of the website available at:
                    <a href="https://byteforge.com.mx" target="_blank" rel="noopener noreferrer">
                        byteforge.com.mx
                    </a>
                    (the “Website”), as well as all products, services, content, and functionalities
                    offered through it (collectively, the “Services”).
                </p>

                <p>
                    By accessing, browsing, or using the Website and/or contracting any of the Services,
                    the User declares that they have read, understood, and expressly accepted these Terms.
                    If the User does not accept these Terms, they must refrain from using the Website
                    or contracting the Services.
                </p>

                <h2>1. About Byte Forge and its Website</h2>

                <p>
                    <strong>AGENCIA UYEN CERO PUNTO CERO S.A. DE C.V.</strong>,
                    hereinafter “Byte Forge”, is a commercial company legally incorporated
                    in accordance with Mexican laws, with registered address in Mexico City.
                </p>

                <p>
                    Its main corporate purpose is the use, exploitation, and operation
                    of radio frequency spectrum bands for the provision of broadcasting,
                    telephone, and internet services, subject to obtaining the corresponding concession
                    from the Federal Telecommunications Institute (IFT)
                    or any competent authority.
                </p>

                <p>
                    Byte Forge is the owner and responsible party for the operation of the Website
                    and the offering of the Services available therein,
                    which are subject to these Terms.
                </p>

                <h2>2. Orders, Prices, and Payments</h2>

                <p>
                    The Services available on the Website may be contracted
                    by selecting the desired package in the “Plans and Pricing” section.
                    To contract any of the Services, the User must be at least 18 years old,
                    have legal capacity to enter into obligations,
                    and possess a valid credit or debit card.
                </p>

                <p>
                    By placing an order, the User guarantees that:
                </p>

                <ul>
                    <li>All information provided is true, accurate, current, and complete;</li>
                    <li>They are the cardholder or have authorization to use the bank card used for payment;</li>
                    <li>They have sufficient funds to cover the total cost of the order, including, where applicable, taxes, shipping costs, and complementary services.</li>
                </ul>

                <p>
                    The Website allows the User to review their order before confirming it.
                    It is the sole responsibility of the User to carefully verify the information provided
                    and correct any errors before submitting the order.
                </p>

                <h3>Payment Processing</h3>

                <p>
                    Byte Forge is not responsible for directly processing payments,
                    but instead uses an Authorized Payment Processing Provider
                    (the “Authorized Processor”),
                    which operates under the security and compliance standards
                    required by the Payment Card Industry Data Security Standard (PCI DSS).
                </p>

                <p>
                    For security and transparency reasons:
                </p>

                <p>
                    Byte Forge does not store, process, or transmit the User’s financial data.
                </p>

                <p>
                    Byte Forge does not perform automatic, pre-authorized, or recurring charges.
                    The User must manually make the corresponding payment in each period
                    in which they wish to continue using the contracted Services.
                </p>

                <p>
                    All prices are expressed in Mexican Pesos (MXN), the national currency.
                    Byte Forge implements reasonable security measures to protect
                    the User’s payment information during the transaction.
                </p>

                <p>
                    Once payment has been made and the transaction verified,
                    the User will receive a confirmation email
                    containing the details of the contracted service
                    and the activation procedure.
                </p>

                <h2>3. Use of the Website</h2>

                <h3>a) Access and Navigation</h3>

                <p>
                    The Website is available free of charge for access.
                    However, Byte Forge reserves the right to modify,
                    limit, or suspend access to it, partially or entirely,
                    without prior notice.
                </p>

                <p>
                    The User shall be responsible for:
                </p>

                <ul>
                    <li>Carrying out the necessary technical configurations to access the Website;</li>
                    <li>Ensuring that all persons accessing the Website through their connection know and accept these Terms;</li>
                    <li>Refraining from using the Website for commercial purposes without prior written authorization from Byte Forge.</li>
                </ul>

                <p>
                    Access to the Website does not include the right to reproduce, copy,
                    distribute, sell, resell, or commercially use its contents
                    without the express consent of Byte Forge.
                </p>

                <h3>b) User Conduct</h3>

                <p>
                    The User agrees to use the Website lawfully,
                    respectfully, and in accordance with applicable regulations.
                    The following actions are strictly prohibited:
                </p>

                <ul>
                    <li>Using the Website in a way that causes damage, interruption, or deterioration thereof;</li>
                    <li>Interfering with the security, integrity, or functionality of the Website;</li>
                    <li>Engaging in activities that violate applicable local, national, or international laws.</li>
                </ul>

                <p>
                    The User shall be solely responsible for all actions carried out
                    from their account, device, or connection,
                    including any content shared or sent through the Website.
                </p>

                <h2>4. Privacy Policy</h2>

                <p>
                    The use of the Website and the contracting of the Services
                    involve the processing of the User’s personal data.
                    Such processing is carried out in accordance with the Byte Forge Privacy Notice,
                    which forms an integral part of these Terms.
                </p>

                <p>
                    We recommend carefully reading the Privacy Notice,
                    as it details how your personal data is collected, used,
                    stored, protected, and transferred.
                </p>

                <p>
                    By using the Website, the User expressly consents
                    to the processing of their data in accordance with the Privacy Notice
                    and guarantees that all information provided is accurate and truthful.
                </p>

                <h2>5. Intellectual Property and Content</h2>

                <p>
                    All intellectual property rights related to the Website and its contents
                    —including, but not limited to, texts, images, graphics, logos, icons,
                    audio files, videos, digital downloads, data compilations, and software—
                    (the “Content”) are the exclusive property of Byte Forge
                    or its licensors.
                </p>

                <p>
                    The Website and its Content are protected by national and international legislation
                    regarding copyright, industrial property, and databases.
                    The following actions are strictly prohibited:
                </p>

                <ul>
                    <li>Extracting, reusing, or compiling substantial parts of the Website or the Content;</li>
                    <li>Using automated extraction tools such as data mining, bots, crawlers, or similar techniques;</li>
                    <li>Creating and/or publishing databases containing substantial parts of the Website without express authorization.</li>
                </ul>

                <p>
                    Trademarks, trade names, logos, or third-party images
                    appearing on the Website are the property of their respective owners,
                    and their appearance does not imply any association,
                    relationship, or endorsement with Byte Forge,
                    unless expressly stated otherwise.
                </p>

                <h2>6. Applicable Law and Jurisdiction</h2>

                <p>
                    These Terms and Conditions, as well as any contractual relationship
                    between the User and Byte Forge arising from the use of the Website
                    or the contracting of the Services,
                    shall be governed by and interpreted in accordance
                    with the laws of the United Mexican States.
                </p>

                <p>
                    For the interpretation, compliance, and enforcement of these Terms,
                    the parties submit to the exclusive jurisdiction
                    of the competent courts in Mexico City,
                    expressly waiving any other jurisdiction
                    that may correspond to them by reason of their present or future domicile.
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