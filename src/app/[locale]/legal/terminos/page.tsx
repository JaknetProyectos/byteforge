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

            <section id="condiciones-uso-compra">
                <h1>Condiciones de Uso y Compra de Productos Médicos – ACLINICO, S.A. DE C.V.</h1>

                <h2>I. Quién administra este sitio</h2>

                <p>
                    1.1. Este sitio web de venta y distribución de productos médicos y clínicos
                    (el “Sitio”) es operado por Med confianza en lo sucesivo la Comercializadora,
                    con denominación social ACLINICO, S.A. DE C.V. y RFC ACL210407975, con
                    domicilio en Avenida Jaime Balmes 11, Interior 15a Torre A Piso 1,
                    Colonia Polanco I Sección, Alcaldía Miguel Hidalgo, C.P. 11510,
                    Ciudad De México.
                </p>

                <p>
                    1.2. Para consultas, aclaraciones o soporte relacionado con el Sitio o con
                    las compras realizadas, la Comercializadora pone a disposición el correo
                    electrónico hello@centromedicoavanza.com y el teléfono
                    +52 1 55 2583 6217.
                </p>

                <p>
                    1.3. El simple uso del Sitio, así como la realización de pedidos o
                    solicitudes de cotización, implica que la persona usuaria (el “Cliente”)
                    ha leído y acepta estas Condiciones.
                </p>

                <h2>II. Qué hacemos y a quién atendemos</h2>

                <p>
                    2.1. La Comercializadora se dedica a la distribución de productos médicos y
                    clínicos destinados a hospitales, clínicas, consultorios, centros
                    especializados y demás organizaciones del sector salud, así como a
                    profesionales que actúan en dicho entorno.
                </p>

                <p>
                    2.2. La información publicada en el Sitio tiene la finalidad de describir,
                    de manera general, las características, usos y aplicaciones de los
                    productos, sin sustituir la capacitación, criterio clínico o regulaciones
                    aplicables en cada institución.
                </p>

                <p>
                    2.3. El Cliente es responsable de verificar que los productos adquiridos
                    sean aptos para el uso específico que pretende darles y que cumplen con los
                    requisitos internos, normativos o institucionales que le resulten
                    aplicables.
                </p>

                <h2>III. Registro, datos y comunicación con el Cliente</h2>

                <p>
                    3.1. Para solicitar información, cotizaciones o realizar pedidos, el
                    Cliente podrá registrarse en el Sitio o proporcionar sus datos mediante los
                    formularios habilitados.
                </p>

                <p>
                    3.2. El Cliente garantiza que los datos de contacto, envío y facturación
                    que proporcione son verdaderos, completos y actualizados, y se compromete a
                    mantenerlos al día.
                </p>

                <p>
                    3.3. La Comercializadora podrá comunicarse con el Cliente por correo
                    electrónico, teléfono u otros medios electrónicos para dar seguimiento a
                    pedidos, enviar confirmaciones, resolver dudas o proporcionar información
                    relevante sobre su compra.
                </p>

                <p>
                    3.4. El uso de los datos personales del Cliente se rige por el Aviso de
                    Privacidad publicado en el Sitio.
                </p>

                <h2>IV. Catálogo, información y disponibilidad</h2>

                <p>
                    4.1. El catálogo de productos médicos y clínicos mostrado en el Sitio es
                    orientativo y puede actualizarse en cualquier momento. La publicación de un
                    producto no garantiza su disponibilidad inmediata.
                </p>

                <p>
                    4.2. Las descripciones, fichas técnicas, imágenes de referencia y cualquier
                    información asociada a los productos se proporcionan con el objetivo de
                    facilitar la decisión de compra, pero pueden existir variaciones menores en
                    presentación, lote o fabricante, manteniendo siempre parámetros de calidad
                    equivalentes.
                </p>

                <p>
                    4.3. En caso de falta de disponibilidad de un producto solicitado, la
                    Comercializadora podrá ofrecer alternativas de características equivalentes
                    o, en su caso, informar al Cliente para que decida si continúa con el
                    pedido parcial o solicita la cancelación de la partida correspondiente.
                </p>

                <h2>V. Precios, impuestos y condiciones comerciales</h2>

                <p>
                    5.1. Los precios de los productos se expresan en moneda nacional
                    (pesos mexicanos, MXN) y están sujetos al Impuesto al Valor Agregado (IVA)
                    a la tasa vigente, salvo que se indique expresamente que incluyen dicho
                    impuesto.
                </p>

                <p>
                    5.2. Los precios publicados en el Sitio pueden modificarse en cualquier
                    momento por la Comercializadora; los cambios no afectarán pedidos ya
                    confirmados y aceptados, siempre que el Cliente haya recibido la
                    confirmación de condiciones.
                </p>

                <p>
                    5.3. En caso de cotizaciones personalizadas, las condiciones de precio,
                    volumen, vigencia y forma de pago se especificarán en el documento o
                    comunicación correspondiente, y prevalecerán sobre lo publicado en el Sitio
                    para ese caso concreto.
                </p>

                <h2>VI. Pedidos, aceptación y medios de pago</h2>

                <p>
                    6.1. El envío de una solicitud de pedido o de cotización por parte del
                    Cliente no implica, por sí mismo, la aceptación automática por parte de la
                    Comercializadora.
                </p>

                <p>
                    6.2. La compra se considerará confirmada una vez que:
                    (i) el Cliente reciba una confirmación expresa de disponibilidad y
                    condiciones, y
                    (ii) se acredite el pago mediante los medios de pago autorizados.
                </p>

                <p>
                    6.3. Los medios de pago disponibles (por ejemplo, tarjetas bancarias,
                    transferencias u otros) se indicarán al momento de gestionar el pedido o
                    cotización, y podrán estar sujetos a validaciones por parte de procesadores
                    de pago o instituciones financieras.
                </p>

                <p>
                    6.4. La Comercializadora se reserva el derecho de rechazar pedidos cuando
                    detecte inconsistencias en la información, riesgo de fraude,
                    incumplimientos previos o cualquier circunstancia que pueda afectar la
                    operación o la seguridad de las transacciones.
                </p>

                <h2>VII. Entregas, logística y riesgos</h2>

                <p>
                    7.1. Las condiciones de entrega (tiempos estimados, costos, modalidades de
                    envío) se informarán al Cliente en el flujo de compra o en la cotización
                    respectiva, considerando el destino, tipo de productos y cantidad
                    solicitada.
                </p>

                <p>
                    7.2. Los plazos de entrega son estimados y pueden variar por causas ajenas
                    a la Comercializadora, como incidencias de paquetería, condiciones
                    logísticas, situaciones de fuerza mayor o disposiciones de las autoridades.
                </p>

                <p>
                    7.3. El riesgo sobre los productos (pérdida, daño o deterioro) se transmite
                    al Cliente al momento de la entrega en el domicilio o punto de entrega
                    acordado.
                </p>

                <p>
                    7.4. El Cliente deberá revisar los productos al recibirlos y, en caso de
                    daño visible, faltantes o errores en la entrega, deberá notificarlo a la
                    Comercializadora dentro del plazo que se establezca en la política de
                    devoluciones y reclamaciones.
                </p>

                <h2>VIII. Uso adecuado y responsabilidad del Cliente</h2>

                <p>
                    8.1. Los productos distribuidos a través del Sitio están destinados a uso
                    médico o clínico, por lo que deben manejarse por personal capacitado y
                    conforme a las instrucciones del fabricante y a las políticas internas de
                    cada institución.
                </p>

                <p>
                    8.2. La Comercializadora no se hace responsable por daños derivados de:
                    uso inadecuado o distinto al recomendado, instalación incorrecta, omisión
                    de instrucciones, falta de capacitación del personal o cualquier
                    manipulación ajena a sus procesos de distribución.
                </p>

                <p>
                    8.3. Es responsabilidad del Cliente verificar, antes de su uso, que el
                    producto recibido corresponde a lo solicitado, que se encuentra en
                    condiciones adecuadas y que no ha excedido su fecha de caducidad, cuando
                    aplique.
                </p>

                <h2>IX. Propiedad intelectual y contenido del Sitio</h2>

                <p>
                    9.1. Los textos, logotipos, diseños, material gráfico, fichas técnicas,
                    estructura y organización del Sitio son propiedad de la Comercializadora o
                    se utilizan bajo licencia, y están protegidos por la legislación de
                    propiedad intelectual.
                </p>

                <p>
                    9.2. Está prohibido reproducir, distribuir, modificar o explotar
                    comercialmente el contenido del Sitio, salvo autorización previa y por
                    escrito de la Comercializadora.
                </p>

                <p>
                    9.3. El uso del Sitio por el Cliente no le otorga licencia o derecho alguno
                    sobre marcas registradas, nombres comerciales o cualquier otro elemento de
                    propiedad intelectual.
                </p>

                <h2>X. Uso permitido del Sitio</h2>

                <p>
                    10.1. El Cliente se compromete a utilizar el Sitio exclusivamente para
                    fines lícitos y relacionados con la consulta, solicitud de información y
                    adquisición de productos médicos y clínicos.
                </p>

                <p>
                    10.2. Queda prohibido utilizar el Sitio para: intentar vulnerar la
                    seguridad de sistemas, enviar información falsa, realizar actividades de
                    fraude, introducir malware o cualquier código malicioso o infringir
                    derechos de terceros.
                </p>

                <p>
                    10.3. La Comercializadora podrá suspender o limitar el acceso al Sitio o a
                    determinadas funciones en caso de detectar un uso indebido o sospecha de
                    actividades contrarias a estos Términos o a la ley.
                </p>

                <h2>XI. Limitación de responsabilidad</h2>

                <p>
                    11.1. En la medida permitida por la ley mexicana, la responsabilidad total
                    de la Comercializadora frente al Cliente por cualquier reclamación
                    relacionada con productos adquiridos a través del Sitio se limitará, como
                    máximo, al monto efectivamente pagado por el producto que haya originado la
                    reclamación.
                </p>

                <p>
                    11.2. La Comercializadora no será responsable por pérdidas indirectas,
                    lucro cesante, interrupciones en la operación del Cliente o daños derivados
                    de decisiones clínicas u operativas que corresponden al criterio
                    profesional del Cliente o de su equipo.
                </p>

                <p>
                    11.3. La Comercializadora tampoco será responsable por fallas en servicios
                    de terceros (transportistas, pasarelas de pago, proveedores de internet) ni
                    por hechos de fuerza mayor o caso fortuito que escapen a su control
                    razonable.
                </p>

                <h2>XII. Devoluciones, cancelaciones y reclamaciones</h2>

                <p>
                    12.1. Las reglas específicas sobre devoluciones, cambios de productos,
                    cancelaciones de pedidos, plazos y condiciones de reembolso se encuentran
                    detalladas en la Política de Devoluciones, Cancelaciones y Reembolsos
                    publicada en el Sitio, la cual forma parte de estas Condiciones.
                </p>

                <p>
                    12.2. El Cliente deberá revisar dicha Política antes de concluir su compra
                    y aceptar que cualquier solicitud en esa materia se gestionará conforme a
                    lo ahí establecido.
                </p>

                <h2>XIII. Datos personales y privacidad</h2>

                <p>
                    13.1. El tratamiento de datos personales recabados a través del Sitio se
                    rige por el Aviso de Privacidad correspondiente, disponible en el mismo
                    Sitio, donde se describen las finalidades, mecanismos de protección y
                    procedimientos para ejercer derechos ARCO.
                </p>

                <p>
                    13.2. Al utilizar el Sitio y proporcionar sus datos, el Cliente reconoce
                    que ha leído el Aviso de Privacidad y consiente el tratamiento de su
                    información conforme a lo ahí indicado.
                </p>

                <h2>XIV. Ley aplicable y solución de controversias</h2>

                <p>
                    14.1. Estas Condiciones se rigen por las leyes de los Estados Unidos
                    Mexicanos.
                </p>

                <p>
                    14.2. Cualquier controversia derivada de la interpretación o cumplimiento
                    de estas Condiciones se someterá a los tribunales competentes de la Ciudad
                    de México, renunciando las partes a cualquier otro fuero que pudiera
                    corresponderles.
                </p>

                <h2>XV. Actualizaciones de las Condiciones</h2>

                <p>
                    15.1. La Comercializadora podrá modificar estas Condiciones en cualquier
                    momento. La versión vigente estará disponible en el Sitio, indicando la
                    fecha de su última actualización.
                </p>

                <p>
                    15.2. El uso continuado del Sitio o la realización de nuevas compras
                    después de la publicación de cambios implicará la aceptación de la versión
                    modificada por parte del Cliente.
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

            <section id="terms-of-use-and-purchase">
                <h1>Terms of Use and Purchase of Medical Products – ACLINICO, S.A. DE C.V.</h1>

                <h2>I. Who operates this website</h2>

                <p>
                    1.1. This website for the sale and distribution of medical and clinical
                    products (the “Site”) is operated by Med confianza, hereinafter referred to
                    as the Distributor, with the corporate name ACLINICO, S.A. DE C.V. and Tax
                    ID (RFC) ACL210407975, with address at Avenida Jaime Balmes 11, Interior
                    15a Torre A Piso 1, Colonia Polanco I Sección, Miguel Hidalgo Borough,
                    ZIP Code 11510, Mexico City.
                </p>

                <p>
                    1.2. For inquiries, clarifications, or support related to the Site or
                    purchases made, the Distributor provides the email address
                    hello@centromedicoavanza.com and the telephone number
                    +52 1 55 2583 6217.
                </p>

                <p>
                    1.3. The mere use of the Site, as well as placing orders or requesting
                    quotations, implies that the user (the “Customer”) has read and accepts
                    these Terms.
                </p>

                <h2>II. What we do and whom we serve</h2>

                <p>
                    2.1. The Distributor is engaged in the distribution of medical and clinical
                    products intended for hospitals, clinics, medical offices, specialized
                    centers, and other organizations in the healthcare sector, as well as
                    professionals operating within such environments.
                </p>

                <p>
                    2.2. The information published on the Site is intended to generally describe
                    the characteristics, uses, and applications of the products without
                    replacing training, clinical judgment, or regulations applicable within
                    each institution.
                </p>

                <p>
                    2.3. The Customer is responsible for verifying that the purchased products
                    are suitable for their intended specific use and comply with the applicable
                    internal, regulatory, or institutional requirements.
                </p>

                <h2>III. Registration, data, and communication with the Customer</h2>

                <p>
                    3.1. To request information, quotations, or place orders, the Customer may
                    register on the Site or provide their information through the available
                    forms.
                </p>

                <p>
                    3.2. The Customer guarantees that the contact, shipping, and billing
                    information provided is true, complete, and up to date, and agrees to keep
                    it current.
                </p>

                <p>
                    3.3. The Distributor may contact the Customer by email, telephone, or other
                    electronic means to follow up on orders, send confirmations, resolve
                    questions, or provide relevant information regarding their purchase.
                </p>

                <p>
                    3.4. The use of the Customer’s personal data is governed by the Privacy
                    Notice published on the Site.
                </p>

                <h2>IV. Catalog, information, and availability</h2>

                <p>
                    4.1. The catalog of medical and clinical products displayed on the Site is
                    for informational purposes and may be updated at any time. The publication
                    of a product does not guarantee its immediate availability.
                </p>

                <p>
                    4.2. Descriptions, technical specifications, reference images, and any
                    information associated with the products are provided to facilitate purchase
                    decisions; however, there may be minor variations in presentation, batch,
                    or manufacturer while maintaining equivalent quality standards.
                </p>

                <p>
                    4.3. In the event of unavailability of a requested product, the Distributor
                    may offer alternatives with equivalent characteristics or inform the
                    Customer so they may decide whether to proceed with a partial order or
                    request cancellation of the corresponding item.
                </p>

                <h2>V. Prices, taxes, and commercial conditions</h2>

                <p>
                    5.1. Product prices are expressed in national currency (Mexican pesos, MXN)
                    and are subject to Value Added Tax (VAT) at the applicable rate unless
                    expressly indicated that such tax is included.
                </p>

                <p>
                    5.2. Prices published on the Site may be modified at any time by the
                    Distributor; changes shall not affect already confirmed and accepted orders,
                    provided that the Customer has received confirmation of the conditions.
                </p>

                <p>
                    5.3. In the case of personalized quotations, the conditions regarding
                    pricing, volume, validity, and payment method shall be specified in the
                    corresponding document or communication and shall prevail over what is
                    published on the Site for that specific case.
                </p>

                <h2>VI. Orders, acceptance, and payment methods</h2>

                <p>
                    6.1. Sending an order request or quotation request by the Customer does not,
                    by itself, imply automatic acceptance by the Distributor.
                </p>

                <p>
                    6.2. The purchase shall be considered confirmed once:
                    (i) the Customer receives express confirmation of availability and
                    conditions; and
                    (ii) payment is verified through authorized payment methods.
                </p>

                <p>
                    6.3. Available payment methods (for example, bank cards, transfers, or
                    others) shall be indicated at the time of processing the order or quotation
                    and may be subject to validation by payment processors or financial
                    institutions.
                </p>

                <p>
                    6.4. The Distributor reserves the right to reject orders when inconsistencies
                    in the information, fraud risks, previous breaches, or any circumstance that
                    may affect operations or transaction security are detected.
                </p>

                <h2>VII. Deliveries, logistics, and risks</h2>

                <p>
                    7.1. Delivery conditions (estimated times, costs, shipping methods) shall
                    be communicated to the Customer during the purchase process or in the
                    corresponding quotation, considering destination, product type, and quantity
                    requested.
                </p>

                <p>
                    7.2. Delivery times are estimates and may vary due to causes beyond the
                    Distributor’s control, such as courier incidents, logistical conditions,
                    force majeure events, or government regulations.
                </p>

                <p>
                    7.3. Risk related to the products (loss, damage, or deterioration) is
                    transferred to the Customer at the time of delivery at the agreed address
                    or delivery point.
                </p>

                <p>
                    7.4. The Customer must inspect the products upon receipt and, in the event
                    of visible damage, missing items, or delivery errors, must notify the
                    Distributor within the timeframe established in the returns and claims
                    policy.
                </p>

                <h2>VIII. Proper use and Customer responsibility</h2>

                <p>
                    8.1. The products distributed through the Site are intended for medical or
                    clinical use and therefore must be handled by trained personnel and in
                    accordance with the manufacturer’s instructions and the internal policies
                    of each institution.
                </p>

                <p>
                    8.2. The Distributor shall not be responsible for damages arising from:
                    improper or non-recommended use, incorrect installation, omission of
                    instructions, lack of staff training, or any handling unrelated to its
                    distribution processes.
                </p>

                <p>
                    8.3. It is the Customer’s responsibility to verify before use that the
                    product received corresponds to what was requested, is in suitable
                    condition, and has not exceeded its expiration date, where applicable.
                </p>

                <h2>IX. Intellectual property and Site content</h2>

                <p>
                    9.1. The texts, logos, designs, graphic materials, technical sheets,
                    structure, and organization of the Site are the property of the Distributor
                    or are used under license and are protected by intellectual property laws.
                </p>

                <p>
                    9.2. Reproduction, distribution, modification, or commercial exploitation
                    of the Site’s content is prohibited without prior written authorization
                    from the Distributor.
                </p>

                <p>
                    9.3. The Customer’s use of the Site does not grant any license or right
                    over trademarks, trade names, or any other intellectual property element.
                </p>

                <h2>X. Permitted use of the Site</h2>

                <p>
                    10.1. The Customer agrees to use the Site exclusively for lawful purposes
                    related to consulting, requesting information, and acquiring medical and
                    clinical products.
                </p>

                <p>
                    10.2. It is prohibited to use the Site to: attempt to breach system
                    security, submit false information, engage in fraudulent activities,
                    introduce malware or any malicious code, or infringe the rights of third
                    parties.
                </p>

                <p>
                    10.3. The Distributor may suspend or limit access to the Site or certain
                    functionalities if improper use or suspected activities contrary to these
                    Terms or the law are detected.
                </p>

                <h2>XI. Limitation of liability</h2>

                <p>
                    11.1. To the extent permitted by Mexican law, the Distributor’s total
                    liability to the Customer for any claim related to products purchased
                    through the Site shall be limited, at most, to the amount actually paid for
                    the product giving rise to the claim.
                </p>

                <p>
                    11.2. The Distributor shall not be liable for indirect losses, loss of
                    profits, interruptions in the Customer’s operations, or damages arising
                    from clinical or operational decisions corresponding to the professional
                    judgment of the Customer or its team.
                </p>

                <p>
                    11.3. The Distributor shall also not be liable for failures in third-party
                    services (carriers, payment gateways, internet providers) or for force
                    majeure events or unforeseen circumstances beyond its reasonable control.
                </p>

                <h2>XII. Returns, cancellations, and claims</h2>

                <p>
                    12.1. The specific rules regarding returns, product exchanges, order
                    cancellations, deadlines, and refund conditions are detailed in the
                    Returns, Cancellations, and Refund Policy published on the Site, which
                    forms part of these Terms.
                </p>

                <p>
                    12.2. The Customer must review said Policy before completing their purchase
                    and accept that any request in this regard shall be managed according to
                    its provisions.
                </p>

                <h2>XIII. Personal data and privacy</h2>

                <p>
                    13.1. The processing of personal data collected through the Site is governed
                    by the corresponding Privacy Notice available on the Site, where the
                    purposes, protection mechanisms, and procedures for exercising ARCO rights
                    are described.
                </p>

                <p>
                    13.2. By using the Site and providing their data, the Customer acknowledges
                    that they have read the Privacy Notice and consent to the processing of
                    their information as indicated therein.
                </p>

                <h2>XIV. Applicable law and dispute resolution</h2>

                <p>
                    14.1. These Terms are governed by the laws of the United Mexican States.
                </p>

                <p>
                    14.2. Any dispute arising from the interpretation or enforcement of these
                    Terms shall be submitted to the competent courts of Mexico City, with the
                    parties waiving any other jurisdiction that may correspond to them.
                </p>

                <h2>XV. Updates to the Terms</h2>

                <p>
                    15.1. The Distributor may modify these Terms at any time. The current
                    version shall be available on the Site, indicating the date of its latest
                    update.
                </p>

                <p>
                    15.2. Continued use of the Site or the placement of new purchases after the
                    publication of changes shall imply acceptance of the modified version by
                    the Customer.
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