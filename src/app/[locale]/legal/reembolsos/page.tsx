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

            <section id="refund-policy">
                <h1>Política de devoluciones y reembolsos</h1>

                <p>
                    <strong>AGENCIA UYEN CERO PUNTO CERO S.A. DE C.V.</strong>, en lo sucesivo “Byte Forge”,
                    está comprometida con brindar servicios de alta calidad a todos nuestros clientes.
                    No obstante, comprendemos que pueden presentarse circunstancias en las cuales sea necesario
                    gestionar una solicitud de reembolso.
                </p>

                <p>
                    La presente Política de Devoluciones y Reembolso describe de forma detallada las condiciones,
                    requisitos y procedimientos aplicables para solicitar y procesar un reembolso por parte del Cliente.
                </p>

                <h2>1. Condiciones para la Aplicación de Reembolsos</h2>

                <p>
                    Byte Forge informa expresamente al Cliente que únicamente procederán los reembolsos en los casos
                    que cumplan con las siguientes condiciones. En caso de no cumplir con lo estipulado en esta sección,
                    no será posible gestionar ni autorizar ningún reembolso.
                </p>

                <p>
                    <strong>Satisfacción del Cliente:</strong>
                    Si el Cliente ha recibido los servicios contratados de conformidad con lo establecido en su Pedido
                    y manifiesta conformidad con ellos, no procederá reembolso alguno.
                    Byte Forge habrá cumplido con su obligación contractual al haber prestado el servicio en los términos pactados.
                </p>

                <p>
                    <strong>Cambio de Opinión:</strong>
                    En caso de que el Cliente cambie de opinión después de haber recibido el servicio,
                    no será posible procesar ningún reembolso, ya que Byte Forge habrá cumplido satisfactoriamente
                    con la prestación del servicio de acuerdo con lo convenido al momento de la contratación.
                </p>

                <h2>2. Procedimiento para Solicitar un Reembolso</h2>

                <p>
                    Para que Byte Forge pueda analizar y, en su caso, proceder con un reembolso,
                    el Cliente deberá seguir el procedimiento detallado a continuación:
                </p>

                <p>
                    <strong>Solicitud Formal de Reembolso:</strong>
                    El Cliente deberá enviar un correo electrónico a la dirección
                    <a href="mailto:tuvoz@byteforge.com">tuvoz@byteforge.com</a>,
                    especificando claramente el motivo de la solicitud de reembolso.
                    La petición deberá ser precisa, objetiva y contener toda la información relevante
                    que respalde su solicitud.
                </p>

                <p>
                    <strong>Envío del Formulario de Reembolso:</strong>
                    Una vez recibida la solicitud inicial, el equipo de soporte de Byte Forge enviará al Cliente
                    un Formulario de Reembolso, el cual deberá ser llenado de forma completa y veraz,
                    y enviado nuevamente al correo electrónico indicado.
                </p>

                <p>
                    <strong>Evaluación del Caso:</strong>
                    Una vez recibido el Formulario, el equipo de Byte Forge procederá a evaluar el caso
                    de forma diligente dentro de un plazo razonable.
                    Los tiempos de respuesta podrán variar dependiendo de la complejidad de la solicitud
                    y la carga operativa del equipo.
                </p>

                <p>
                    En cualquier caso, Byte Forge se compromete a notificar al Cliente respecto al resultado
                    de su solicitud de reembolso, ya sea su aprobación o su negativa debidamente justificada.
                </p>

                <h2>3. Métodos y Condiciones de Reembolso</h2>

                <p>
                    Dependiendo del método de pago original utilizado por el Cliente en la transacción,
                    Byte Forge efectuará el reembolso correspondiente conforme a las siguientes condiciones:
                </p>

                <p>
                    <strong>Pagos con Tarjeta de Crédito:</strong>
                    Para pagos realizados con tarjeta de crédito dentro de un período de 15 a 30 días anteriores
                    a la solicitud, el reembolso se efectuará a la misma tarjeta utilizada en la transacción original.
                </p>

                <p>
                    <strong>Pagos con Tarjeta de Débito:</strong>
                    Para pagos realizados con tarjeta de débito dentro de un período de 10 a 15 días,
                    el reembolso será realizado igualmente a la misma tarjeta de débito utilizada
                    en la transacción inicial.
                </p>

                <h2>4. Reembolsos para Transacciones con Antigüedad Mayor a 180 Días</h2>

                <p>
                    En caso de que el pago haya sido efectuado hace más de 180 días, y el procesador de pagos utilizado
                    ya no permita realizar reembolsos (este límite puede variar entre 180 y 365 días,
                    dependiendo del proveedor de procesamiento), Byte Forge procederá de la siguiente manera:
                </p>

                <p>
                    El Cliente deberá proporcionar información bancaria alternativa para procesar el reembolso,
                    asegurando que los datos correspondan al mismo titular que realizó la compra original.
                    Esta verificación es obligatoria para prevenir fraudes y garantizar la trazabilidad del reembolso.
                </p>

                <h2>5. Consideraciones y Observaciones Adicionales</h2>

                <p>
                    <strong>Métodos de Pago Cancelados o Reemplazados:</strong>
                    En caso de que el método de pago original haya sido cancelado, cerrado o reemplazado,
                    el Cliente deberá comunicarse con su banco o proveedor de servicios financieros
                    para consultar la forma en que el reembolso será gestionado.
                </p>

                <p>
                    Byte Forge enviará la información del reembolso al operador de la tarjeta
                    como parte del procedimiento estándar, pero no se hace responsable de los tiempos
                    ni políticas internas de los emisores de tarjetas.
                </p>

                <p>
                    <strong>Cargos por Procesamiento:</strong>
                    Cualquier cargo por procesamiento relacionado con la gestión del reembolso
                    será cubierto por el Cliente.
                    Dichos cargos serán descontados del monto total del reembolso aprobado.
                    El Cliente reconoce y acepta esta condición al enviar la solicitud.
                </p>

                <h2>6. Casos en los que un Reembolso No es Procedente</h2>

                <p>
                    Existen situaciones en las cuales no será posible procesar un reembolso,
                    tales como cuando el pago tiene más de 180 días de antigüedad y el procesador de pagos
                    no permite reembolsos directos, y/o cuando el método de pago utilizado no admite reembolsos,
                    ya sea por políticas de la entidad emisora o restricciones técnicas.
                </p>

                <p>
                    En estos casos, Byte Forge ofrecerá al Cliente opciones alternativas y asistencia personalizada
                    para facilitar la devolución de fondos, siempre y cuando sea factible y conforme
                    a las normativas vigentes.
                </p>

                <h2>7. Atención al Cliente y Seguimiento</h2>

                <p>
                    Para cualquier consulta adicional, aclaración o para dar seguimiento al estado de una solicitud
                    de reembolso, el Cliente podrá ponerse en contacto con el Departamento de Soporte de Byte Forge,
                    enviando un correo electrónico a:
                    <a href="mailto:tuvoz@byteforge.com">tuvoz@byteforge.com</a>
                </p>

                <p>
                    Nuestro equipo está disponible para brindar atención profesional y oportuna,
                    conforme a los principios de ética, transparencia y atención al cliente.
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

            <section id="refund-policy">
                <h1>Returns and Refund Policy</h1>

                <p>
                    <strong>AGENCIA UYEN CERO PUNTO CERO S.A. DE C.V.</strong>, hereinafter referred to as “Byte Forge”,
                    is committed to providing high-quality services to all our clients.
                    However, we understand that circumstances may arise in which it becomes necessary
                    to process a refund request.
                </p>

                <p>
                    This Returns and Refund Policy describes in detail the conditions,
                    requirements, and procedures applicable for requesting and processing
                    a refund on behalf of the Client.
                </p>

                <h2>1. Conditions for Refund Eligibility</h2>

                <p>
                    Byte Forge expressly informs the Client that refunds will only proceed in cases
                    that comply with the following conditions. If the provisions established in this section
                    are not met, it will not be possible to process or authorize any refund.
                </p>

                <p>
                    <strong>Customer Satisfaction:</strong>
                    If the Client has received the contracted services in accordance with what was established
                    in their Order and expresses satisfaction with them, no refund shall apply.
                    Byte Forge will have fulfilled its contractual obligation by having provided the service
                    under the agreed terms.
                </p>

                <p>
                    <strong>Change of Mind:</strong>
                    If the Client changes their mind after having received the service,
                    it will not be possible to process any refund, since Byte Forge will have satisfactorily fulfilled
                    the provision of the service in accordance with what was agreed upon at the time of contracting.
                </p>

                <h2>2. Procedure for Requesting a Refund</h2>

                <p>
                    In order for Byte Forge to analyze and, where applicable, proceed with a refund,
                    the Client must follow the procedure detailed below:
                </p>

                <p>
                    <strong>Formal Refund Request:</strong>
                    The Client must send an email to
                    <a href="mailto:tuvoz@byteforge.com">tuvoz@byteforge.com</a>,
                    clearly specifying the reason for the refund request.
                    The request must be precise, objective, and contain all relevant information
                    supporting the request.
                </p>

                <p>
                    <strong>Submission of the Refund Form:</strong>
                    Once the initial request has been received, the Byte Forge support team will send
                    the Client a Refund Form, which must be completed fully and truthfully
                    and sent back to the indicated email address.
                </p>

                <p>
                    <strong>Case Evaluation:</strong>
                    Once the Form has been received, the Byte Forge team will diligently evaluate the case
                    within a reasonable period of time.
                    Response times may vary depending on the complexity of the request
                    and the operational workload of the team.
                </p>

                <p>
                    In all cases, Byte Forge commits to notifying the Client regarding the outcome
                    of their refund request, whether approved or denied with proper justification.
                </p>

                <h2>3. Refund Methods and Conditions</h2>

                <p>
                    Depending on the original payment method used by the Client in the transaction,
                    Byte Forge will issue the corresponding refund according to the following conditions:
                </p>

                <p>
                    <strong>Credit Card Payments:</strong>
                    For payments made with a credit card within a period of 15 to 30 days prior
                    to the request, the refund will be issued to the same card used
                    in the original transaction.
                </p>

                <p>
                    <strong>Debit Card Payments:</strong>
                    For payments made with a debit card within a period of 10 to 15 days,
                    the refund will likewise be issued to the same debit card used
                    in the original transaction.
                </p>

                <h2>4. Refunds for Transactions Older Than 180 Days</h2>

                <p>
                    If the payment was made more than 180 days ago, and the payment processor used
                    no longer allows refunds (this limit may vary between 180 and 365 days,
                    depending on the processing provider), Byte Forge will proceed as follows:
                </p>

                <p>
                    The Client must provide alternative banking information to process the refund,
                    ensuring that the details correspond to the same account holder who made
                    the original purchase.
                    This verification is mandatory to prevent fraud and ensure refund traceability.
                </p>

                <h2>5. Additional Considerations and Observations</h2>

                <p>
                    <strong>Cancelled or Replaced Payment Methods:</strong>
                    If the original payment method has been cancelled, closed, or replaced,
                    the Client must contact their bank or financial service provider
                    to determine how the refund will be managed.
                </p>

                <p>
                    Byte Forge will send the refund information to the card operator
                    as part of the standard procedure, but is not responsible for the timing
                    or internal policies of card issuers.
                </p>

                <p>
                    <strong>Processing Fees:</strong>
                    Any processing fees related to managing the refund
                    will be covered by the Client.
                    Such fees will be deducted from the total approved refund amount.
                    The Client acknowledges and accepts this condition upon submitting the request.
                </p>

                <h2>6. Cases in Which a Refund Is Not Applicable</h2>

                <p>
                    There are situations in which it will not be possible to process a refund,
                    such as when the payment is more than 180 days old and the payment processor
                    does not allow direct refunds, and/or when the payment method used
                    does not support refunds, whether due to issuer policies or technical restrictions.
                </p>

                <p>
                    In these cases, Byte Forge will offer the Client alternative options
                    and personalized assistance to facilitate the return of funds,
                    whenever feasible and in accordance with applicable regulations.
                </p>

                <h2>7. Customer Support and Follow-Up</h2>

                <p>
                    For any additional inquiries, clarifications, or to follow up
                    on the status of a refund request, the Client may contact
                    the Byte Forge Support Department by sending an email to:
                    <a href="mailto:tuvoz@byteforge.com">tuvoz@byteforge.com</a>
                </p>

                <p>
                    Our team is available to provide professional and timely assistance,
                    in accordance with the principles of ethics, transparency, and customer service.
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