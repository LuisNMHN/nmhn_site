import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Términos y condiciones - NMHN",
  description: "Términos y condiciones de uso de la plataforma NMHN",
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
                  Última actualización: 28 de noviembre de 2025
                </p>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 sm:space-y-8">
                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">1. Aceptación de los términos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Al acceder o utilizar NMHN ("la plataforma"), usted confirma que ha leído, comprendido y aceptado estos términos y condiciones. Si no está de acuerdo con alguno de los apartados, no debe utilizar la plataforma.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">2. Naturaleza y propósito de la plataforma</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN es una plataforma digital en constante desarrollo cuyo propósito es contribuir al fortalecimiento del mercado digital en Honduras mediante la creación de herramientas tecnológicas dirigidas a emprendedores, profesionales y negocios.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    La plataforma se limita a funciones digitales y tecnológicas. NMHN no es una entidad financiera y no realiza actividades reguladas como:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>administración de fondos,</li>
                    <li>servicios bancarios,</li>
                    <li>transferencias de dinero,</li>
                    <li>procesamiento de pagos,</li>
                    <li>operación como pasarela de pago,</li>
                    <li>oferta de productos financieros.</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Cualquier funcionalidad futura estará orientada exclusivamente al desarrollo tecnológico.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">3. Cuentas de usuario</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Algunas funciones pueden requerir un registro. El usuario deberá proporcionar información exacta, completa y actualizada.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    El usuario es responsable de:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>la confidencialidad de sus credenciales,</li>
                    <li>el uso realizado desde su cuenta,</li>
                    <li>notificar accesos no autorizados.</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN puede suspender o restringir cuentas que presenten información falsa, uso indebido o actividad sospechosa.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">4. Uso permitido de la plataforma</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    El usuario se compromete a utilizar NMHN de forma responsable y conforme a la ley.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    No está permitido:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>realizar actividades ilícitas, fraudulentas o engañosas,</li>
                    <li>publicar contenido ofensivo, ilegal o no autorizado,</li>
                    <li>infringir derechos de propiedad intelectual,</li>
                    <li>manipular o interferir con el funcionamiento técnico de la plataforma,</li>
                    <li>intentar acceder a funciones restringidas sin autorización.</li>
                  </ul>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">5. Evolución y alcance de la plataforma</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN se encuentra en desarrollo continuo. Por ello, la plataforma podrá:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>modificar o mejorar funcionalidades,</li>
                    <li>introducir nuevas herramientas,</li>
                    <li>retirar características temporal o permanentemente,</li>
                    <li>mantener funciones en fase beta o acceso limitado,</li>
                    <li>actualizar estructura, contenido o diseño sin previo aviso.</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Toda descripción pública tiene carácter informativo y no garantiza disponibilidad permanente.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">6. Servicios internos y condiciones adicionales</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Algunas funciones avanzadas o internas —accesibles únicamente a usuarios registrados— pueden estar sujetas a términos específicos adicionales.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Si existiera discrepancia entre los términos generales y los términos específicos de una funcionalidad, prevalecerán los términos adicionales.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">7. Funcionalidades premium y costos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    En caso de incorporar funciones o herramientas premium, NMHN informará claramente los costos antes de su utilización.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN podrá actualizar precios, requisitos o condiciones de uso cuando sea necesario.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Si se utilizan proveedores externos, el usuario deberá aceptar sus respectivos términos.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">8. Contenido generado por el usuario</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    El usuario es el único responsable del contenido que publique o comparta dentro de la plataforma.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN podrá restringir, moderar o eliminar contenido que:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>viole estos términos,</li>
                    <li>sea inapropiado, ofensivo o ilegal,</li>
                    <li>afecte la seguridad o integridad de la plataforma.</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    El usuario declara poseer los derechos necesarios sobre el contenido que publica.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">9. Propiedad intelectual</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Todos los elementos de NMHN, incluyendo software, diseño, logotipos, textos y materiales visuales, son propiedad de la empresa o sus licenciantes.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Queda prohibido reproducir, distribuir, modificar o utilizar estos elementos sin autorización previa.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">10. Limitación de responsabilidad</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    La plataforma se ofrece "tal cual", sin garantías expresas o implícitas.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN no será responsable por:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>pérdidas económicas,</li>
                    <li>daños indirectos o consecuenciales,</li>
                    <li>fallos técnicos de terceros,</li>
                    <li>decisiones comerciales o personales del usuario,</li>
                    <li>accesos no autorizados,</li>
                    <li>uso indebido de la plataforma.</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    El usuario utiliza NMHN bajo su propio criterio y responsabilidad.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">11. Actualización de los términos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN puede modificar estos términos en cualquier momento. La versión vigente estará disponible en la plataforma.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    El uso continuado implica aceptación de las modificaciones.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">12. Suspensión o cancelación de acceso</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN podrá suspender temporal o permanentemente el acceso de un usuario si detecta:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>incumplimiento de estos términos,</li>
                    <li>comportamiento inapropiado,</li>
                    <li>actividad fraudulenta o sospechosa,</li>
                    <li>violación de derechos de terceros.</li>
                  </ul>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">13. Legislación aplicable</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Estos términos se rigen por las leyes de la República de Honduras. Cualquier disputa será resuelta ante los tribunales competentes.
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
