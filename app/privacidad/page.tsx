import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Política de privacidad - NMHN Pay",
  description: "Política de privacidad y protección de datos de NMHN Pay",
}

export default function PrivacidadPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">Política de privacidad</h1>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Última actualización:{" "}
                  {new Date().toLocaleDateString("es-HN", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 sm:space-y-8">
                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">1. Introducción</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    En NMHN Pay valoramos su privacidad y estamos comprometidos con proteger sus datos personales.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y compartimos su información cuando utiliza nuestra plataforma, así como los derechos que usted tiene sobre sus datos.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN Pay es una plataforma digital de servicios electrónicos de pago y herramientas profesionales, no una entidad financiera, y su información es tratada exclusivamente con fines operativos y administrativos.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">2. Información que recopilamos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Podemos recopilar las siguientes categorías de información:
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">a) Información de identificación personal</h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>Nombre completo</li>
                        <li>Correo electrónico</li>
                        <li>Número de teléfono (opcional)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">b) Información de cuenta</h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>Perfil profesional</li>
                        <li>Preferencias de uso</li>
                        <li>Configuración de usuario</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">c) Información relacionada con actividades dentro de la plataforma</h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>Enlaces de pago creados</li>
                        <li>Historial de uso de herramientas</li>
                        <li>Registros operativos internos</li>
                      </ul>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">
                        Ninguna de esta información representa datos financieros sensibles.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">d) Información técnica</h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>Dirección IP</li>
                        <li>Tipo de navegador</li>
                        <li>Sistema operativo</li>
                        <li>Identificadores únicos del dispositivo</li>
                        <li>Datos de navegación y uso</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">e) Información de pagos</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        En caso de procesar cobros a través de proveedores externos, estos pueden recopilar información necesaria para completar la transacción. NMHN Pay no almacena información completa de tarjetas de pago, y depende de procesadores certificados PCI-DSS para dichas operaciones.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">3. Cómo utilizamos su información</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Utilizamos su información personal únicamente para:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Proveer y mejorar los servicios digitales de NMHN Pay</li>
                    <li>Gestionar su cuenta y configuración de usuario</li>
                    <li>Operar herramientas de cobro y funciones electrónicas asociadas</li>
                    <li>Prevenir fraude y mantener la seguridad de la plataforma</li>
                    <li>Cumplir requisitos legales y regulatorios mínimos</li>
                    <li>Gestionar asistencia técnica y soporte</li>
                    <li>Enviar notificaciones relevantes (con su consentimiento previo para marketing)</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    La información no se utiliza para evaluar solvencia financiera ni para actividades bancarias.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">4. Compartir su información</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    No vendemos ni comercializamos su información personal.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Podemos compartirla únicamente con:
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">a) Proveedores de servicios</h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>Infraestructura tecnológica</li>
                        <li>Servicios de alojamiento en la nube</li>
                        <li>Proveedores de análisis y seguridad</li>
                        <li>Herramientas de correo y soporte técnico</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">b) Procesadores de pago externos</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Cuando usted realiza una transacción, los datos necesarios son procesados por un proveedor certificado (p. ej., pasarelas de pago). Ellos pueden manejar parte de la información siguiendo sus propias políticas de privacidad.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">c) Autoridades legales</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Cuando sea necesario para cumplir con obligaciones legales o responder a solicitudes válidas.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">d) Socios comerciales (solo con su consentimiento explícito)</h3>
                    </div>
                  </div>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">5. Seguridad de los datos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Implementamos controles técnicos y organizativos diseñados para proteger su información:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Cifrado de datos en tránsito</li>
                    <li>Acceso restringido basado en roles</li>
                    <li>Monitoreo de actividad inusual</li>
                    <li>Auditorías regulares</li>
                    <li>Medidas de prevención y detección de fraude</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Sin embargo, ninguna plataforma digital puede garantizar seguridad absoluta.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">6. Retención de datos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Conservamos su información únicamente el tiempo necesario para:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>prestar nuestros servicios,</li>
                    <li>cumplir obligaciones contractuales,</li>
                    <li>atender requerimientos legales o regulatorios,</li>
                    <li>mantener registros operativos razonables.</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Una vez que los datos ya no sean necesarios, serán eliminados de forma segura o anonimizados.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">7. Sus derechos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Dependiendo de la legislación aplicable, usted puede ejercer los siguientes derechos:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Acceder a su información personal</li>
                    <li>Corregir o actualizar datos inexactos</li>
                    <li>Solicitar la eliminación de su información</li>
                    <li>Oponerse a ciertos usos</li>
                    <li>Solicitar la portabilidad de datos</li>
                    <li>Retirar su consentimiento para comunicaciones opcionales</li>
                    <li>Limitar ciertos tipos de tratamiento</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Para ejercer estos derechos, puede contactarnos a través del correo indicado en la sección 12.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">8. Cookies y tecnologías similares</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Usamos cookies y tecnologías similares para:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>mejorar la experiencia del usuario,</li>
                    <li>analizar el rendimiento de la plataforma,</li>
                    <li>personalizar funcionalidades,</li>
                    <li>mantener sesiones activas.</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Puede ajustar la configuración de cookies desde su navegador o dispositivo.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">9. Privacidad de menores</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN Pay no está dirigida a menores de 18 años.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    No recopilamos intencionalmente información de menores.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Si descubrimos un registro de un menor, procederemos a eliminar la información inmediatamente.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">10. Cambios a esta política</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Podemos modificar esta Política de Privacidad en cualquier momento.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Las actualizaciones se publicarán en esta página y entrarán en vigencia desde su publicación.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Recomendamos revisar periódicamente esta política.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">11. Transferencias internacionales</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Parte de la información que recopilamos puede almacenarse o procesarse en servidores ubicados fuera de Honduras.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    En tales casos, garantizamos que existan medidas adecuadas de protección conforme a estándares internacionales de seguridad y privacidad.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">12. Contacto</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Para solicitar información adicional o ejercer sus derechos de privacidad, puede comunicarse con nosotros a:
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
