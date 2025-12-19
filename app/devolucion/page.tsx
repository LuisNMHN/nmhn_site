import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Política de devolución - NMHN",
  description: "Política de devolución y reembolsos de NMHN",
}

export default function DevolucionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">Política de devolución</h1>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Última actualización: {new Date().toLocaleDateString('es-HN', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 sm:space-y-8">
                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">1. Introducción</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Esta política establece los términos y condiciones para devoluciones y reembolsos de los servicios proporcionados por NMHN. Dado que nuestros servicios son principalmente de desarrollo de software y servicios digitales personalizados, esta política refleja la naturaleza única de estos servicios.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">2. Naturaleza de nuestros servicios</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN ofrece servicios de desarrollo personalizado, incluyendo:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Desarrollo de software y aplicaciones a la medida</li>
                    <li>Desarrollo de sitios web personalizados</li>
                    <li>Asesorías tecnológicas</li>
                    <li>Capacitación</li>
                    <li>Herramientas digitales y plantillas</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Estos servicios son desarrollados específicamente para cada cliente según sus requerimientos únicos.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">3. Política de devolución para servicios de desarrollo</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Debido a la naturaleza personalizada de nuestros servicios de desarrollo, las siguientes condiciones aplican:
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">a) Cancelación antes del inicio del desarrollo</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Si el cliente cancela el proyecto antes de que NMHN inicie el trabajo de desarrollo, se reembolsará el 100% del pago inicial, menos cualquier costo administrativo o de recursos ya invertidos (máximo 10% del monto total).
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">b) Cancelación durante el desarrollo</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Si el cliente cancela el proyecto después de iniciado el desarrollo:
                      </p>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>Se facturará el trabajo realizado hasta la fecha de cancelación según los hitos completados</li>
                        <li>Se reembolsará únicamente la porción del pago correspondiente a trabajo no iniciado</li>
                        <li>El cliente recibirá todo el código y documentación del trabajo completado hasta ese momento</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">c) Proyectos completados</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Una vez que el proyecto ha sido completado y entregado según las especificaciones acordadas, no se aceptan devoluciones, salvo en casos de incumplimiento grave por parte de NMHN.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">4. Política de devolución para productos digitales</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Para productos digitales como plantillas, herramientas pre-desarrolladas o licencias de software:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li><strong>Plantillas y herramientas:</strong> No se aceptan devoluciones una vez descargado el producto, salvo que el producto no funcione según lo descrito</li>
                    <li><strong>Licencias de software:</strong> Las devoluciones se evaluarán caso por caso dentro de los primeros 7 días después de la compra, siempre que la licencia no haya sido activada</li>
                    <li><strong>Productos defectuosos:</strong> Si el producto tiene defectos técnicos que impiden su uso, se reemplazará o reembolsará según corresponda</li>
                  </ul>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">5. Política de devolución para servicios de asesoría y capacitación</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Para servicios de asesoría tecnológica y capacitación:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li><strong>Cancelación con más de 48 horas de anticipación:</strong> Reembolso completo</li>
                    <li><strong>Cancelación con menos de 48 horas:</strong> Reembolso del 50% del costo</li>
                    <li><strong>Cancelación el mismo día:</strong> No se acepta reembolso, pero se puede reprogramar la sesión</li>
                    <li><strong>Servicios ya prestados:</strong> No se aceptan devoluciones por servicios de asesoría o capacitación ya completados</li>
                  </ul>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">6. Incumplimiento por parte de NMHN</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Si NMHN no cumple con las especificaciones acordadas o no entrega el proyecto según lo establecido en el contrato:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>El cliente tiene derecho a solicitar correcciones sin costo adicional</li>
                    <li>Si después de las correcciones el proyecto aún no cumple con lo acordado, se evaluará un reembolso parcial o total según corresponda</li>
                    <li>El reembolso se calculará considerando el trabajo válido realizado hasta ese momento</li>
                  </ul>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">7. Proceso de solicitud de devolución</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Para solicitar una devolución o reembolso:
                  </p>
                  <ol className="list-decimal pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Contacte a nuestro equipo a través de <a href="mailto:info@netmarkethn.com" className="text-teal hover:underline">info@netmarkethn.com</a> o +504 9279-0292</li>
                    <li>Proporcione el número de proyecto o factura</li>
                    <li>Explique el motivo de la solicitud de devolución</li>
                    <li>Nuestro equipo evaluará la solicitud dentro de 5 a 10 días hábiles</li>
                    <li>Se le notificará la decisión y, si es aprobada, el método y plazo del reembolso</li>
                  </ol>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">8. Métodos de reembolso</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Los reembolsos se procesarán utilizando el mismo método de pago utilizado originalmente:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li><strong>Transferencia bancaria:</strong> 5 a 10 días hábiles</li>
                    <li><strong>Tarjeta de crédito/débito:</strong> 7 a 14 días hábiles (según el procesador de pagos)</li>
                    <li><strong>Cheque:</strong> 10 a 15 días hábiles</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Los tiempos pueden variar según el método de pago y el procesador utilizado.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">9. Excepciones</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    No se aceptan devoluciones en los siguientes casos:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Cambio de opinión después de la entrega del proyecto</li>
                    <li>Cambios en los requisitos del cliente que no fueron comunicados oportunamente</li>
                    <li>Productos o servicios personalizados que ya han sido utilizados o implementados</li>
                    <li>Servicios de mantenimiento o soporte ya prestados</li>
                    <li>Capacitación o asesoría ya completada</li>
                  </ul>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">10. Modificaciones a esta política</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN se reserva el derecho de modificar esta política de devolución en cualquier momento. Los cambios no afectarán proyectos ya contratados, salvo acuerdo expreso entre las partes.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">11. Contacto</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Para consultas sobre devoluciones o reembolsos, puede contactarnos a:
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    📧 <a href="mailto:info@netmarkethn.com" className="text-teal hover:underline">info@netmarkethn.com</a>
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    📞 +504 9279-0292
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


