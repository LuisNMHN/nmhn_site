import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Términos y condiciones - NMHN",
  description: "Términos y condiciones de uso de los servicios de NMHN",
}

export default function TerminosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">Términos y condiciones</h1>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Última actualización: {new Date().toLocaleDateString('es-HN', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 sm:space-y-8">
                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">1. Aceptación de los términos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Al contratar o utilizar los servicios de NMHN ("la Empresa"), usted confirma que ha leído, comprendido y aceptado estos términos y condiciones. Si no está de acuerdo con alguno de los apartados, no debe utilizar nuestros servicios.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">2. Servicios ofrecidos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN es una empresa tecnológica especializada en:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Desarrollo de sitios web modernos y responsivos</li>
                    <li>Desarrollo de software personalizado y aplicaciones</li>
                    <li>Asesorías tecnológicas y consultoría</li>
                    <li>Capacitación especializada en tecnologías modernas</li>
                    <li>Herramientas digitales y software listo para implementar</li>
                    <li>Plantillas avanzadas y personalizables</li>
                    <li>Licencias empresariales de software (próximamente)</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Todos los servicios están orientados a facilitar la transformación digital de empresas y profesionales en Honduras.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">3. Proceso de contratación</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    El proceso de contratación de servicios incluye las siguientes etapas:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li><strong>Diagnóstico:</strong> Analizamos sus necesidades y objetivos</li>
                    <li><strong>Propuesta:</strong> Elaboramos una propuesta detallada con alcance, tiempos y presupuesto</li>
                    <li><strong>Desarrollo:</strong> Implementamos la solución con metodologías ágiles</li>
                    <li><strong>Entrega:</strong> Proyecto completamente funcional y documentado</li>
                    <li><strong>Soporte:</strong> Mantenimiento continuo y asistencia técnica</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    La contratación formal se realiza mediante la aceptación de la propuesta y el pago correspondiente según los términos acordados.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">4. Obligaciones del cliente</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    El cliente se compromete a:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Proporcionar información veraz, completa y actualizada</li>
                    <li>Colaborar activamente durante el proceso de desarrollo</li>
                    <li>Realizar los pagos según los términos acordados</li>
                    <li>Respetar los derechos de propiedad intelectual de NMHN</li>
                    <li>No utilizar los servicios para fines ilegales o no autorizados</li>
                    <li>Mantener la confidencialidad de credenciales y accesos proporcionados</li>
                  </ul>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">5. Obligaciones de NMHN</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN se compromete a:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Desarrollar los servicios según las especificaciones acordadas</li>
                    <li>Entregar proyectos funcionales y documentados</li>
                    <li>Mantener la confidencialidad de la información del cliente</li>
                    <li>Proporcionar soporte técnico según los términos acordados</li>
                    <li>Cumplir con los plazos establecidos en la propuesta</li>
                    <li>Utilizar tecnologías y metodologías de desarrollo modernas y seguras</li>
                  </ul>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">6. Precios y pagos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Los precios de los servicios se establecen en la propuesta comercial y pueden variar según la complejidad y alcance del proyecto.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Los pagos se realizarán según el cronograma establecido en la propuesta, que puede incluir pagos parciales durante el desarrollo del proyecto.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Los precios están expresados en la moneda acordada y no incluyen impuestos, salvo que se indique lo contrario.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">7. Propiedad intelectual</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Todos los elementos desarrollados por NMHN, incluyendo código fuente, diseño, documentación y materiales relacionados, son propiedad de NMHN hasta que se complete el pago total del proyecto.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Una vez completado el pago, los derechos de uso del software desarrollado se transfieren al cliente según los términos específicos acordados en la propuesta.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN se reserva el derecho de utilizar el conocimiento y experiencia adquirida en proyectos futuros, siempre respetando la confidencialidad de la información específica del cliente.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">8. Modificaciones y cambios de alcance</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Cualquier modificación o cambio en el alcance del proyecto original debe ser acordado por ambas partes y puede implicar ajustes en el presupuesto y cronograma.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Los cambios solicitados por el cliente después de la aprobación inicial serán evaluados y cotizados por separado.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">9. Garantías y soporte</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN garantiza que los servicios desarrollados funcionarán según las especificaciones acordadas durante el período de garantía establecido en la propuesta (típicamente 30 a 90 días después de la entrega).
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    El soporte post-entrega incluye corrección de errores y defectos relacionados con el desarrollo, pero no incluye nuevas funcionalidades o modificaciones no contempladas en el alcance original.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">10. Limitación de responsabilidad</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN no será responsable por:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Pérdidas económicas indirectas o consecuenciales</li>
                    <li>Daños resultantes del uso indebido de los servicios desarrollados</li>
                    <li>Problemas derivados de cambios no autorizados realizados por terceros</li>
                    <li>Interrupciones causadas por proveedores de servicios externos (hosting, dominios, etc.)</li>
                    <li>Decisiones comerciales del cliente basadas en los servicios proporcionados</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    La responsabilidad total de NMHN no excederá el monto total pagado por el cliente por el servicio específico.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">11. Confidencialidad</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Ambas partes se comprometen a mantener la confidencialidad de toda la información compartida durante la prestación de servicios.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Esta obligación permanecerá vigente incluso después de la finalización del proyecto.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">12. Cancelación y resolución</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Cualquiera de las partes puede cancelar el proyecto mediante notificación escrita con al menos 15 días de anticipación.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    En caso de cancelación por parte del cliente, se facturará el trabajo realizado hasta la fecha de cancelación según los términos acordados.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN se reserva el derecho de suspender o cancelar servicios en caso de incumplimiento de pago o violación de estos términos.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">13. Actualización de los términos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN puede modificar estos términos en cualquier momento. La versión vigente estará disponible en esta página.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Los cambios no afectarán proyectos ya contratados, salvo acuerdo expreso entre las partes.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">14. Legislación aplicable</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Estos términos se rigen por las leyes de la República de Honduras. Cualquier disputa será resuelta ante los tribunales competentes de Honduras.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">15. Contacto</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Para consultas sobre estos términos, puede contactarnos a:
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
