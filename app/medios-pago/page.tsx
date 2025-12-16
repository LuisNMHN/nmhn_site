import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Medios de pago - NMHN",
  description: "Política de medios de pago y métodos de facturación de NMHN",
}

export default function MediosPagoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">Medios de pago</h1>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Última actualización: {new Date().toLocaleDateString('es-HN', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 sm:space-y-8">
                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">1. Introducción</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Esta política describe los métodos de pago aceptados por NMHN para nuestros servicios de desarrollo de software, servicios web y soluciones digitales. Nos esforzamos por ofrecer opciones de pago convenientes y seguras para nuestros clientes.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">2. Métodos de pago aceptados</h2>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">a) Transferencia bancaria</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-2">
                        Aceptamos transferencias bancarias directas. Los detalles bancarios se proporcionarán en la factura o propuesta comercial.
                      </p>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>Transferencias nacionales (Honduras)</li>
                        <li>Transferencias internacionales (cuando sea aplicable)</li>
                        <li>El procesamiento puede tomar de 1 a 3 días hábiles</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">b) Tarjetas de crédito y débito</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-2">
                        Aceptamos pagos con tarjeta de crédito y débito a través de procesadores de pago seguros:
                      </p>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>Visa</li>
                        <li>Mastercard</li>
                        <li>American Express (cuando esté disponible)</li>
                        <li>Tarjetas de débito con procesamiento de crédito</li>
                      </ul>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">
                        Los pagos con tarjeta se procesan de forma segura y encriptada. No almacenamos información completa de tarjetas en nuestros servidores.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">c) Cheques</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Aceptamos cheques a nombre de NETMARKETHN LLC. Los cheques deben ser emitidos desde cuentas bancarias válidas y pueden requerir tiempo adicional para su procesamiento y verificación.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">d) Pagos en línea</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-2">
                        Para mayor comodidad, ofrecemos opciones de pago en línea a través de:
                      </p>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>Pasarelas de pago seguras integradas en nuestro sitio web</li>
                        <li>Enlaces de pago enviados por correo electrónico</li>
                        <li>Plataformas de pago de terceros confiables</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">e) Pagos en efectivo</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Los pagos en efectivo pueden ser aceptados en casos especiales y solo en nuestras oficinas o mediante acuerdos específicos. Se emitirá recibo por todos los pagos en efectivo.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">3. Estructura de pagos para proyectos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Para proyectos de desarrollo, los pagos generalmente se estructuran de la siguiente manera:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li><strong>Pago inicial (30-50%):</strong> Al aceptar la propuesta y antes de iniciar el desarrollo</li>
                    <li><strong>Pagos parciales (30-40%):</strong> Según hitos o fases completadas del proyecto</li>
                    <li><strong>Pago final (20-30%):</strong> Al completar y entregar el proyecto según las especificaciones</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    La estructura específica de pagos se detallará en cada propuesta comercial y puede variar según el tamaño y complejidad del proyecto.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">4. Facturación</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Todas las transacciones se documentan mediante facturas oficiales que incluyen:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Información completa de NMHN (NETMARKETHN LLC)</li>
                    <li>Datos del cliente</li>
                    <li>Descripción detallada de los servicios</li>
                    <li>Monto total y desglose de impuestos (cuando aplique)</li>
                    <li>Número de factura único</li>
                    <li>Fecha de emisión y fecha de vencimiento</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Las facturas se envían por correo electrónico y también están disponibles en nuestro sistema de gestión.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">5. Seguridad de los pagos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Implementamos medidas de seguridad para proteger la información de pago:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Cifrado SSL/TLS para todas las transacciones en línea</li>
                    <li>Cumplimiento con estándares PCI DSS para procesamiento de tarjetas</li>
                    <li>No almacenamos información completa de tarjetas de crédito</li>
                    <li>Utilizamos procesadores de pago certificados y confiables</li>
                    <li>Monitoreo continuo de transacciones para detectar actividad fraudulenta</li>
                  </ul>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">6. Plazos de pago</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Los plazos de pago se establecen en cada propuesta comercial y pueden variar según el tipo de servicio:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li><strong>Proyectos de desarrollo:</strong> Según los hitos acordados en la propuesta</li>
                    <li><strong>Servicios recurrentes:</strong> Mensual, trimestral o anual según el acuerdo</li>
                    <li><strong>Productos digitales:</strong> Pago inmediato al momento de la compra</li>
                    <li><strong>Asesorías y capacitación:</strong> Antes de la prestación del servicio o según acuerdo específico</li>
                  </ul>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">7. Pagos atrasados</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    En caso de pagos atrasados:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Se enviará un recordatorio de pago después de la fecha de vencimiento</li>
                    <li>Pueden aplicarse intereses por mora según los términos acordados</li>
                    <li>NMHN se reserva el derecho de suspender servicios hasta que se regularice el pago</li>
                    <li>Para proyectos en curso, el trabajo puede pausarse hasta recibir el pago correspondiente</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Si tiene dificultades para realizar un pago, le recomendamos contactarnos para establecer un plan de pago alternativo.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">8. Reembolsos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Los reembolsos se procesan según nuestra Política de Devolución. Los reembolsos se realizarán utilizando el mismo método de pago utilizado originalmente, cuando sea posible.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Para más información sobre reembolsos, consulte nuestra <a href="/devolucion" className="text-teal hover:underline">Política de Devolución</a>.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">9. Moneda</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Los precios pueden estar expresados en:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Lempiras hondureñas (HNL) para clientes nacionales</li>
                    <li>Dólares estadounidenses (USD) para clientes internacionales o según acuerdo</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    La moneda de facturación se especificará claramente en cada propuesta comercial.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">10. Impuestos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Todos los precios están sujetos a impuestos aplicables según la legislación hondureña. Los impuestos se incluirán claramente en las facturas y propuestas comerciales.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Para clientes internacionales, pueden aplicarse regulaciones fiscales específicas según su jurisdicción.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">11. Cambios en métodos de pago</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN se reserva el derecho de agregar, modificar o eliminar métodos de pago en cualquier momento. Los clientes serán notificados de cambios significativos con anticipación razonable.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">12. Contacto</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Para consultas sobre métodos de pago, facturación o para solicitar información bancaria, puede contactarnos a:
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    📧 <a href="mailto:info@netmarkethn.com" className="text-teal hover:underline">info@netmarkethn.com</a>
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    📞 +504 9279-0292
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Nuestro equipo de facturación está disponible para asistirle con cualquier consulta relacionada con pagos.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

