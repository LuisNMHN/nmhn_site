import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Términos y condiciones - NMHN Pay",
  description: "Términos y condiciones de uso de la plataforma NMHN Pay",
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
                  Última actualización:{" "}
                  {new Date().toLocaleDateString("es-HN", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 sm:space-y-8">
                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">1. Aceptación de los términos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Al acceder y utilizar NMHN Pay ("la Plataforma"), usted acepta estos Términos y Condiciones. Si no está de acuerdo con ellos, debe abstenerse de utilizar nuestros servicios.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">2. Descripción del servicio</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN Pay es una plataforma digital que proporciona herramientas para apoyar a emprendedores, freelancers y consultores hondureños en la gestión de cobros electrónicos, creación de enlaces de pago y administración digital de sus servicios profesionales.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN Pay no es una entidad financiera, no ofrece servicios bancarios, no opera como billetera electrónica, no realiza cambio de divisas ni presta servicios de envío de dinero.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    La plataforma ofrece funciones digitales y herramientas tecnológicas que complementan la actividad comercial de sus usuarios.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">3. Registro y cuenta de usuario</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Para acceder a determinadas funciones, usted debe crear una cuenta proporcionando información veraz, actual y completa.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Usted es responsable de preservar la confidencialidad de su cuenta y de cualquier actividad que se realice desde ella.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Nos reservamos el derecho de rechazar o suspender cuentas que presenten información falsa, actividad irregular o uso indebido de la plataforma.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">4. Uso aceptable</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    El usuario se compromete a utilizar NMHN Pay de forma legal y conforme a estos Términos.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Está estrictamente prohibido:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>utilizar la plataforma para actividades fraudulentas o engañosas,</li>
                    <li>solicitar pagos por servicios ilegales,</li>
                    <li>vulnerar derechos de propiedad intelectual de terceros,</li>
                    <li>interferir con el funcionamiento técnico de la plataforma.</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN Pay podrá suspender temporal o permanentemente cuentas involucradas en actividades sospechosas o no autorizadas.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">5. Créditos digitales HNLD</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Los HNLD son créditos digitales internos, exclusivos para activar funciones premium, herramientas adicionales y servicios digitales dentro del ecosistema NMHN Pay.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Los créditos:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>no representan dinero,</li>
                    <li>no son divisas ni instrumentos financieros,</li>
                    <li>no tienen valor fuera de la plataforma,</li>
                    <li>no son reembolsables,</li>
                    <li>no pueden canjearse por dinero ni transferirse hacia terceros sistemas o plataformas.</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    El usuario entiende que los créditos tienen únicamente un propósito funcional dentro de NMHN Pay.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">6. Pagos y comisiones</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    La plataforma podrá aplicar tarifas por el uso de determinadas funciones o por el procesamiento de cobros electrónicos mediante servicios externos de pagos.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Las comisiones aplicables se mostrarán claramente antes de completar una acción.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN Pay se reserva el derecho de actualizar tarifas previo aviso.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Cuando procesamos cobros a través de proveedores externos (por ejemplo, pasarelas de pago), usted acepta cumplir también los términos del proveedor correspondiente.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">7. Propiedad intelectual</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Toda la información, diseño, interfaz, software, logotipos, marcas y contenido disponible en NMHN Pay son propiedad exclusiva de la empresa o de sus licenciantes y están protegidos por leyes de propiedad intelectual.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Queda prohibida la copia, distribución o modificación no autorizada.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">8. Limitación de responsabilidad</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN Pay se ofrece "tal cual", sin garantías expresas o implícitas.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    No garantizamos ausencia de errores, disponibilidad continua ni resultados específicos derivados del uso de la plataforma.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN Pay no será responsable por:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>pérdidas económicas,</li>
                    <li>daños indirectos,</li>
                    <li>fallos tecnológicos,</li>
                    <li>interrupciones de terceros proveedores de pago,</li>
                    <li>uso indebido por parte de los usuarios.</li>
                  </ul>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">9. Modificaciones de los términos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Podemos modificar estos Términos en cualquier momento.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    La versión actualizada siempre estará disponible en la plataforma.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    El uso continuo de NMHN Pay después de una modificación implica la aceptación de los nuevos términos.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">10. Suspensión o terminación</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Podemos suspender o finalizar el acceso de un usuario si detectamos:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>violaciones a los Términos,</li>
                    <li>actividades sospechosas,</li>
                    <li>comportamiento fraudulento,</li>
                    <li>uso indebido de la plataforma.</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    La suspensión puede ser temporal o permanente, según la gravedad.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">11. Ley aplicable</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Estos Términos se regirán por las leyes de la República de Honduras.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Cualquier conflicto será resuelto en los tribunales hondureños competentes.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">12. Contacto</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Para consultas relacionadas con estos Términos y Condiciones, puede escribirnos a:
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    📧 <a href="mailto:info@netmarkethn.com" className="text-teal hover:underline">info@netmarkethn.com</a>
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
