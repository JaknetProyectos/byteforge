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

            <section id="returns-cancellations-refunds-policy">
                <h1>Política de Devoluciones, Cancelaciones y Reembolsos – ACLINICO, S.A. DE C.V.</h1>

                <h2>1. Alcance de esta política</h2>

                <p>
                    1.1. Esta Política de Devoluciones, Cancelaciones y Reembolsos
                    (la “Política”) regula cómo se atienden cambios, devoluciones de productos,
                    cancelaciones de pedidos y solicitudes de reembolso realizadas a través del
                    Sitio de la empresa distribuidora de productos médicos y clínicos
                    (la “Comercializadora”).
                </p>

                <p>
                    1.2. La Política aplica a todas las compras realizadas a través de los
                    canales de venta de la Comercializadora que hagan referencia a este
                    documento, sin perjuicio de los derechos que correspondan al Cliente
                    conforme a la legislación mexicana en materia de protección al consumidor.
                </p>

                <h2>2. Naturaleza de los productos</h2>

                <p>
                    2.1. La Comercializadora distribuye productos médicos y clínicos que pueden
                    tener condiciones específicas de higiene, seguridad, almacenamiento,
                    trazabilidad y caducidad.
                </p>

                <p>
                    2.2. Por esa naturaleza, no todos los productos son elegibles para
                    devolución una vez que han sido entregados, abiertos, utilizados o retirados
                    de su empaque original, salvo que presenten defectos de fabricación, daños
                    en tránsito o errores en el surtido atribuibles a la Comercializadora.
                </p>

                <h2>3. Cancelación de pedidos antes del envío</h2>

                <p>
                    3.1. El Cliente podrá solicitar la cancelación total o parcial de un pedido
                    siempre que los productos aún no se hayan enviado ni se encuentren en
                    proceso irreversible de preparación.
                </p>

                <p>
                    3.2. La solicitud deberá realizarse lo antes posible, preferentemente dentro
                    de las primeras 24 horas posteriores a la confirmación del pedido,
                    contactando a la Comercializadora al correo
                    hello@centromedicoavanza.com o al teléfono +52 1 55 2583 6217,
                    indicando el número de pedido y los productos a cancelar.
                </p>

                <p>
                    3.3. Si el pedido no ha sido enviado ni preparado para su despacho, la
                    Comercializadora podrá aceptar la cancelación y, en su caso, gestionar el
                    reembolso correspondiente del monto pagado por los productos cancelados.
                </p>

                <p>
                    3.4. El reembolso se tramitará conforme al apartado 9 de esta Política.
                </p>

                <h2>4. Pedidos ya enviados o entregados</h2>

                <p>
                    4.1. Cuando el pedido ya se encuentre en tránsito o haya sido entregado en
                    el domicilio del Cliente, la cancelación se considerará fuera de tiempo y
                    aplicarán las reglas de devolución descritas en las secciones siguientes.
                </p>

                <p>
                    4.2. En estos casos, no se aceptarán cancelaciones automáticas;
                    únicamente se revisarán solicitudes de devolución si el producto cumple
                    con las condiciones elegibles para ello.
                </p>

                <h2>5. Productos elegibles para devolución</h2>

                <p>
                    5.1. Podrán ser candidatos a devolución aquellos productos que presenten
                    defectos de fabricación claramente identificables al momento de la
                    recepción.
                </p>

                <p>
                    5.2. También podrán ser elegibles los productos que hayan llegado dañados
                    durante el transporte, siempre que el daño se haga constar en el momento de
                    la entrega o dentro del plazo indicado en esta Política.
                </p>

                <p>
                    5.3. Serán elegibles los productos que no correspondan a lo solicitado,
                    ya sea por error de surtido o por diferencias relevantes en modelo,
                    presentación o especificación, respecto de lo confirmado por la
                    Comercializadora.
                </p>

                <p>
                    5.4. En todos los casos, el producto deberá encontrarse, en la medida de lo
                    posible, en condiciones similares a las de entrega, sin uso y, cuando la
                    naturaleza del insumo lo requiera, en su empaque original cerrado.
                </p>

                <h2>6. Productos no elegibles para devolución</h2>

                <p>
                    6.1. No se aceptarán devoluciones de productos que hayan sido abiertos,
                    utilizados, manipulados de forma que comprometa su integridad, higiene o
                    trazabilidad, salvo que se trate de un defecto de fabricación evidente.
                </p>

                <p>
                    6.2. No serán elegibles productos que, por su naturaleza, requieran
                    condiciones específicas de almacenamiento y que hayan sido expuestos a
                    condiciones inadecuadas después de la entrega.
                </p>

                <p>
                    6.3. No procederá la devolución de productos con caducidad próxima o vencida
                    cuando el motivo no sea imputable a la Comercializadora y hayan sido
                    entregados conforme a las fechas previamente acordadas.
                </p>

                <p>
                    6.4. Tampoco se aceptarán devoluciones de productos adquiridos bajo
                    condiciones especiales, liquidaciones o ventas finales cuando se haya
                    indicado expresamente que no admiten devolución.
                </p>

                <h2>7. Plazos para solicitar devoluciones o reclamaciones</h2>

                <p>
                    7.1. El Cliente deberá revisar los productos al momento de la entrega o
                    dentro de un plazo máximo de 3 días hábiles a partir de la fecha de
                    recepción.
                </p>

                <p>
                    7.2. Dentro de ese plazo, el Cliente deberá notificar por escrito cualquier
                    daño, defecto, error de surtido o discrepancia relevante, enviando un
                    correo a hello@centromedicoavanza.com con el número de pedido,
                    descripción del problema y, de ser posible, evidencia fotográfica.
                </p>

                <p>
                    7.3. Transcurrido el plazo de 3 días hábiles sin que se haya presentado
                    reclamación, se entenderá que los productos fueron recibidos a conformidad,
                    salvo que exista una disposición legal que establezca lo contrario.
                </p>

                <h2>8. Procedimiento para devoluciones</h2>

                <p>
                    8.1. Una vez recibida la solicitud de devolución o reclamación dentro del
                    plazo, la Comercializadora evaluará el caso y podrá solicitar información
                    adicional para analizarlo.
                </p>

                <p>
                    8.2. La Comercializadora comunicará al Cliente, en un plazo máximo de
                    7 días hábiles a partir de la recepción de la información completa,
                    si la devolución procede o no, y bajo qué condiciones.
                </p>

                <p>
                    8.3. En caso de autorizar la devolución, se indicarán al Cliente las
                    instrucciones específicas para el retorno del producto, incluyendo,
                    en su caso, la guía de envío o el punto de entrega correspondiente.
                </p>

                <p>
                    8.4. El producto deberá enviarse o entregarse conforme a las indicaciones
                    dadas, respetando las condiciones de empaque y manipulación necesarias para
                    preservar su integridad durante el traslado.
                </p>

                <h2>9. Costos de devolución y reembolsos</h2>

                <p>
                    9.1. Cuando la devolución se origine por un error atribuible a la
                    Comercializadora (defecto de fabricación, daño en tránsito, error de
                    surtido), los costos razonables de envío de regreso serán absorbidos por la
                    Comercializadora.
                </p>

                <p>
                    9.2. Cuando la devolución se deba a causas no imputables a la
                    Comercializadora y sea aceptada de manera excepcional, los costos de envío
                    o traslado correrán por cuenta del Cliente.
                </p>

                <p>
                    9.3. En caso de proceder un reembolso, éste se realizará, de preferencia,
                    a través del mismo medio de pago utilizado por el Cliente, una vez que la
                    Comercializadora haya recibido y verificado el producto devuelto.
                </p>

                <p>
                    9.4. El procesamiento del reembolso se gestionará dentro de un plazo máximo
                    de 10 días hábiles a partir de la confirmación de procedencia y recepción
                    correcta del producto, sin perjuicio de los plazos adicionales que dependan
                    de bancos o procesadores de pago.
                </p>

                <h2>10. Cancelaciones por causas imputables a la Comercializadora</h2>

                <p>
                    10.1. En caso de que, por razones logísticas, de inventario o fuerza mayor,
                    la Comercializadora no pueda surtir total o parcialmente un pedido ya
                    pagado, se le informará al Cliente tan pronto como sea posible.
                </p>

                <p>
                    10.2. El Cliente podrá optar por aceptar productos alternativos de
                    características equivalentes, mantener el pedido parcial o solicitar el
                    reembolso del monto pagado por la parte no surtida.
                </p>

                <p>
                    10.3. El reembolso correspondiente se tramitará conforme a los plazos y
                    medios señalados en la sección 9 de esta Política.
                </p>

                <h2>11. Reembolsos parciales y ajustes</h2>

                <p>
                    11.1. Cuando una devolución proceda únicamente respecto de parte de los
                    productos de un pedido, el reembolso se limitará al monto pagado por los
                    productos devueltos y aceptados.
                </p>

                <p>
                    11.2. Los gastos de envío originales solo podrán reembolsarse cuando la
                    causa de la devolución sea plenamente imputable a la Comercializadora,
                    y siempre que así se determine en la resolución del caso concreto.
                </p>

                <h2>12. Inconformidades y atención de quejas</h2>

                <p>
                    12.1. Si el Cliente no está de acuerdo con la resolución emitida por la
                    Comercializadora respecto de una devolución, cancelación o reembolso,
                    podrá presentar una inconformidad adicional por escrito al correo
                    hello@centromedicoavanza.com.
                </p>

                <p>
                    12.2. La Comercializadora revisará nuevamente el caso y emitirá una
                    respuesta final en un plazo máximo de 10 días hábiles a partir de la
                    recepción de la inconformidad.
                </p>

                <p>
                    12.3. Lo anterior se entiende sin perjuicio del derecho del Cliente de
                    acudir ante la Procuraduría Federal del Consumidor (PROFECO) u otras
                    autoridades competentes, conforme a la normatividad vigente.
                </p>

                <h2>13. Casos especiales</h2>

                <p>
                    13.1. Para contratos de suministro recurrente, convenios marco o acuerdos
                    específicos con instituciones del sector salud, podrán pactarse condiciones
                    particulares de devoluciones y cancelaciones que complementen esta Política;
                    en caso de discrepancia, prevalecerán las condiciones que se hayan convenido
                    por escrito.
                </p>

                <p>
                    13.2. No procederán devoluciones ni reembolsos cuando se acredite mal uso
                    doloso de los productos, manipulación contraria a las instrucciones del
                    fabricante o incumplimiento grave de las condiciones de almacenamiento por
                    parte del Cliente.
                </p>

                <h2>14. Actualización de la Política</h2>

                <p>
                    14.1. La Comercializadora podrá modificar o actualizar esta Política de
                    Devoluciones, Cancelaciones y Reembolsos para adaptarla a cambios
                    normativos, operativos o a la naturaleza de los productos distribuidos.
                </p>

                <p>
                    14.2. La versión vigente estará disponible en el Sitio, indicando la fecha
                    de su última actualización.
                </p>

                <p>
                    14.3. La realización de nuevas compras después de la publicación de cambios
                    implicará la aceptación de la versión actualizada de esta Política.
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

            <section id="returns-cancellations-refunds-policy">
                <h1>Returns, Cancellations and Refunds Policy – ACLINICO, S.A. DE C.V.</h1>

                <h2>1. Scope of this Policy</h2>

                <p>
                    1.1. This Returns, Cancellations and Refunds Policy (the “Policy”) governs
                    how product exchanges, returns, order cancellations, and refund requests
                    made through the Site of the medical and clinical products distribution
                    company (the “Distributor”) are handled.
                </p>

                <p>
                    1.2. This Policy applies to all purchases made through the Distributor’s
                    sales channels that reference this document, without prejudice to the
                    rights granted to the Customer under Mexican consumer protection laws.
                </p>

                <h2>2. Nature of the Products</h2>

                <p>
                    2.1. The Distributor distributes medical and clinical products that may
                    have specific conditions related to hygiene, safety, storage,
                    traceability, and expiration dates.
                </p>

                <p>
                    2.2. Due to their nature, not all products are eligible for return once
                    they have been delivered, opened, used, or removed from their original
                    packaging, except in cases of manufacturing defects, damage during
                    transportation, or fulfillment errors attributable to the Distributor.
                </p>

                <h2>3. Order Cancellation Before Shipment</h2>

                <p>
                    3.1. The Customer may request the total or partial cancellation of an order
                    provided that the products have not yet been shipped or entered into an
                    irreversible preparation process.
                </p>

                <p>
                    3.2. The request must be made as soon as possible, preferably within the
                    first 24 hours after order confirmation, by contacting the Distributor at
                    hello@centromedicoavanza.com or by phone at +52 1 55 2583 6217,
                    indicating the order number and the products to be canceled.
                </p>

                <p>
                    3.3. If the order has not been shipped or prepared for dispatch, the
                    Distributor may accept the cancellation and, where applicable, process the
                    corresponding refund for the amount paid for the canceled products.
                </p>

                <p>
                    3.4. Refunds shall be processed in accordance with Section 9 of this
                    Policy.
                </p>

                <h2>4. Orders Already Shipped or Delivered</h2>

                <p>
                    4.1. When the order is already in transit or has been delivered to the
                    Customer’s address, the cancellation shall be considered untimely, and the
                    return rules described in the following sections shall apply.
                </p>

                <p>
                    4.2. In these cases, automatic cancellations will not be accepted; only
                    return requests for products that meet the eligible conditions will be
                    reviewed.
                </p>

                <h2>5. Products Eligible for Return</h2>

                <p>
                    5.1. Products with clearly identifiable manufacturing defects at the time
                    of receipt may qualify for return.
                </p>

                <p>
                    5.2. Products damaged during transportation may also be eligible, provided
                    that the damage is reported at the time of delivery or within the period
                    established in this Policy.
                </p>

                <p>
                    5.3. Products that do not correspond to what was ordered, whether due to
                    fulfillment errors or significant differences in model, presentation, or
                    specifications compared to what was confirmed by the Distributor, shall
                    also be eligible.
                </p>

                <p>
                    5.4. In all cases, the product must, as far as possible, remain in
                    conditions similar to those at delivery, unused and, where the nature of
                    the product requires, in its original sealed packaging.
                </p>

                <h2>6. Products Not Eligible for Return</h2>

                <p>
                    6.1. Returns will not be accepted for products that have been opened,
                    used, or manipulated in a way that compromises their integrity, hygiene,
                    or traceability, unless there is an evident manufacturing defect.
                </p>

                <p>
                    6.2. Products requiring specific storage conditions that were exposed to
                    inappropriate conditions after delivery shall not be eligible.
                </p>

                <p>
                    6.3. Returns will not be accepted for products close to expiration or
                    expired when the reason is not attributable to the Distributor and the
                    products were delivered according to previously agreed dates.
                </p>

                <p>
                    6.4. Returns will also not be accepted for products purchased under
                    special conditions, clearance sales, or final sales when expressly
                    indicated as non-returnable.
                </p>

                <h2>7. Deadlines for Return Requests or Claims</h2>

                <p>
                    7.1. The Customer must inspect the products at the time of delivery or
                    within a maximum period of 3 business days from the date of receipt.
                </p>

                <p>
                    7.2. Within this period, the Customer must notify in writing any damage,
                    defect, fulfillment error, or significant discrepancy by sending an email
                    to hello@centromedicoavanza.com including the order number, a
                    description of the issue, and, if possible, photographic evidence.
                </p>

                <p>
                    7.3. Once the 3-business-day period has elapsed without a claim being
                    filed, the products shall be deemed received in conformity, unless
                    otherwise established by applicable law.
                </p>

                <h2>8. Return Procedure</h2>

                <p>
                    8.1. Once the return or claim request is received within the established
                    period, the Distributor will evaluate the case and may request additional
                    information for analysis.
                </p>

                <p>
                    8.2. The Distributor shall inform the Customer, within a maximum period of
                    7 business days from receipt of the complete information, whether the
                    return is approved and under what conditions.
                </p>

                <p>
                    8.3. If the return is authorized, the Customer will receive specific
                    instructions for returning the product, including, where applicable, the
                    shipping label or designated delivery point.
                </p>

                <p>
                    8.4. The product must be shipped or delivered according to the provided
                    instructions, respecting the packaging and handling conditions necessary
                    to preserve its integrity during transportation.
                </p>

                <h2>9. Return Costs and Refunds</h2>

                <p>
                    9.1. When the return is due to an error attributable to the Distributor
                    (manufacturing defect, transportation damage, fulfillment error),
                    reasonable return shipping costs shall be covered by the Distributor.
                </p>

                <p>
                    9.2. When the return is due to causes not attributable to the Distributor
                    and is exceptionally accepted, shipping or transportation costs shall be
                    borne by the Customer.
                </p>

                <p>
                    9.3. If a refund applies, it shall preferably be made through the same
                    payment method used by the Customer once the Distributor has received and
                    verified the returned product.
                </p>

                <p>
                    9.4. Refund processing shall be completed within a maximum period of
                    10 business days from confirmation of approval and proper receipt of the
                    product, without prejudice to additional processing times required by
                    banks or payment processors.
                </p>

                <h2>10. Cancellations Due to Causes Attributable to the Distributor</h2>

                <p>
                    10.1. If, due to logistical, inventory, or force majeure reasons, the
                    Distributor cannot fully or partially fulfill an already paid order, the
                    Customer shall be informed as soon as possible.
                </p>

                <p>
                    10.2. The Customer may choose to accept alternative products with
                    equivalent characteristics, maintain the partial order, or request a
                    refund for the amount paid for the unfulfilled portion.
                </p>

                <p>
                    10.3. The corresponding refund shall be processed in accordance with the
                    deadlines and methods set forth in Section 9 of this Policy.
                </p>

                <h2>11. Partial Refunds and Adjustments</h2>

                <p>
                    11.1. When a return only applies to part of the products included in an
                    order, the refund shall be limited to the amount paid for the returned and
                    accepted products.
                </p>

                <p>
                    11.2. Original shipping costs may only be refunded when the cause of the
                    return is fully attributable to the Distributor and provided that such is
                    determined in the resolution of the specific case.
                </p>

                <h2>12. Complaints and Dispute Resolution</h2>

                <p>
                    12.1. If the Customer disagrees with the Distributor’s resolution
                    regarding a return, cancellation, or refund, they may submit an additional
                    written complaint to hello@centromedicoavanza.com.
                </p>

                <p>
                    12.2. The Distributor shall review the case again and issue a final
                    response within a maximum period of 10 business days from receipt of the
                    complaint.
                </p>

                <p>
                    12.3. The foregoing is without prejudice to the Customer’s right to file a
                    complaint before the Federal Consumer Protection Agency (PROFECO) or other
                    competent authorities in accordance with applicable regulations.
                </p>

                <h2>13. Special Cases</h2>

                <p>
                    13.1. For recurring supply contracts, framework agreements, or specific
                    agreements with healthcare institutions, particular return and cancellation
                    conditions may be established to complement this Policy; in case of
                    discrepancy, the conditions agreed upon in writing shall prevail.
                </p>

                <p>
                    13.2. Returns or refunds shall not apply when intentional misuse of the
                    products, handling contrary to the manufacturer’s instructions, or serious
                    non-compliance with storage conditions by the Customer is demonstrated.
                </p>

                <h2>14. Policy Updates</h2>

                <p>
                    14.1. The Distributor may modify or update this Returns, Cancellations and
                    Refunds Policy to adapt it to regulatory, operational changes or to the
                    nature of the distributed products.
                </p>

                <p>
                    14.2. The current version shall be available on the Site, indicating the
                    date of its latest update.
                </p>

                <p>
                    14.3. Making new purchases after the publication of changes shall imply
                    acceptance of the updated version of this Policy.
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