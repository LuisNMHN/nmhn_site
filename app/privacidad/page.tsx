import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Política de privacidad - NMHN",
  description: "Política de privacidad y protección de datos de NMHN",
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
                  Última actualización: {new Date().toLocaleDateString('es-HN', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 sm:space-y-8">
                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">1. Introducción</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    En NMHN respetamos la privacidad de nuestros clientes y usuarios. Esta política explica cómo recopilamos, utilizamos, almacenamos y protegemos la información personal relacionada con nuestros servicios de desarrollo de software, servicios web y soluciones digitales.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN es una empresa tecnológica especializada en desarrollo de software y servicios digitales. Toda la información recopilada se utiliza únicamente con fines operativos, administrativos y de mejora de nuestros servicios.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">2. Información que recopilamos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Recopilamos información necesaria para proporcionar nuestros servicios y mejorar la experiencia del cliente:
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">a) Información de contacto y comercial</h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>Nombre completo o razón social</li>
                        <li>Correo electrónico</li>
                        <li>Número telefónico</li>
                        <li>Dirección física (cuando sea necesario para facturación)</li>
                        <li>Información fiscal (para facturación)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">b) Información del proyecto</h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>Requisitos y especificaciones del proyecto</li>
                        <li>Documentación y materiales proporcionados por el cliente</li>
                        <li>Comunicaciones y correspondencia relacionada con el proyecto</li>
                        <li>Historial de cambios y modificaciones solicitadas</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">c) Información técnica</h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>Dirección IP</li>
                        <li>Tipo y versión del navegador</li>
                        <li>Sistema operativo</li>
                        <li>Registros de acceso a sistemas desarrollados</li>
                        <li>Datos de rendimiento y uso de aplicaciones desarrolladas</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">d) Información de pago</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Para procesar pagos, podemos recopilar información de facturación. Los datos de tarjetas de crédito son procesados por proveedores de pago seguros y no se almacenan en nuestros servidores.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">3. Cómo utilizamos su información</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Utilizamos la información recopilada para:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Proporcionar y mejorar nuestros servicios de desarrollo</li>
                    <li>Comunicarnos con clientes sobre proyectos y servicios</li>
                    <li>Procesar pagos y gestionar facturación</li>
                    <li>Proporcionar soporte técnico y mantenimiento</li>
                    <li>Cumplir con obligaciones legales y contractuales</li>
                    <li>Analizar y mejorar nuestros procesos de desarrollo</li>
                    <li>Enviar comunicaciones relevantes sobre servicios (solo con consentimiento para marketing)</li>
                  </ul>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">4. Cómo compartimos su información</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Su información no se vende, alquila ni comercializa. Podemos compartirla únicamente bajo las siguientes circunstancias:
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">a) Proveedores de servicios</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-2">
                        Utilizamos empresas especializadas en:
                      </p>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>Infraestructura en la nube y hosting</li>
                        <li>Servicios de seguridad informática</li>
                        <li>Procesamiento de pagos</li>
                        <li>Servicios de correo y comunicación</li>
                        <li>Herramientas de desarrollo y gestión de proyectos</li>
                      </ul>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">
                        Estos proveedores procesan datos siguiendo instrucciones estrictas de NMHN y están obligados a mantener la confidencialidad.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">b) Cumplimiento legal</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Podemos divulgar información cuando sea requerido por órdenes judiciales, solicitudes de autoridades competentes u obligaciones legales aplicables.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">c) Con su consentimiento</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Cualquier intercambio con terceros con fines distintos al funcionamiento de nuestros servicios requerirá su consentimiento explícito.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">5. Seguridad de los datos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Implementamos medidas técnicas y organizativas para proteger la información:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Cifrado de datos en tránsito y en reposo</li>
                    <li>Control de acceso basado en roles y permisos</li>
                    <li>Monitoreo continuo de actividad inusual</li>
                    <li>Copias de seguridad regulares</li>
                    <li>Auditorías periódicas de seguridad</li>
                    <li>Protocolos de detección y prevención de amenazas</li>
                    <li>Capacitación del personal en seguridad de datos</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Aunque implementamos medidas sólidas, ninguna empresa puede garantizar seguridad absoluta. Le recomendamos mantener sus credenciales seguras y notificarnos inmediatamente cualquier actividad sospechosa.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">6. Retención de datos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Conservamos la información durante el tiempo necesario para:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Proporcionar y mantener nuestros servicios</li>
                    <li>Cumplir obligaciones contractuales y legales</li>
                    <li>Atender solicitudes de soporte técnico</li>
                    <li>Mantener registros contables y fiscales (según requerimientos legales)</li>
                    <li>Resolver disputas y hacer cumplir acuerdos</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Una vez cumplidas estas finalidades, los datos pueden ser eliminados o anonimizados de forma segura, excepto cuando la ley requiera su conservación.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">7. Derechos del usuario</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Usted tiene derecho a:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li><strong>Acceso:</strong> Solicitar una copia de sus datos personales</li>
                    <li><strong>Rectificación:</strong> Solicitar corrección de datos inexactos o incompletos</li>
                    <li><strong>Eliminación:</strong> Solicitar eliminación cuando los datos ya no sean necesarios</li>
                    <li><strong>Limitación:</strong> Solicitar restricción del procesamiento en ciertos casos</li>
                    <li><strong>Portabilidad:</strong> Solicitar transferencia de sus datos a otro proveedor</li>
                    <li><strong>Oposición:</strong> Oponerse al procesamiento para fines de marketing directo</li>
                    <li><strong>Retirar consentimiento:</strong> Retirar el consentimiento cuando el procesamiento se base en él</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Para ejercer estos derechos, puede contactarnos mediante los medios indicados en la sección 12.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">8. Cookies y tecnologías similares</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Utilizamos cookies y tecnologías similares para:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Mejorar la funcionalidad de nuestro sitio web</li>
                    <li>Recordar preferencias del usuario</li>
                    <li>Analizar el rendimiento y uso del sitio</li>
                    <li>Mantener sesiones activas</li>
                    <li>Proporcionar funcionalidades personalizadas</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Puede controlar el uso de cookies desde la configuración de su navegador. Tenga en cuenta que deshabilitar cookies puede afectar la funcionalidad del sitio.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">9. Privacidad de menores</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Nuestros servicios están dirigidos a empresas y profesionales. No recopilamos intencionalmente información de menores de 18 años.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Si identificamos que se ha proporcionado información de un menor, eliminaremos dicha información de forma inmediata.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">10. Transferencias internacionales</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Parte del procesamiento de datos puede realizarse fuera de Honduras, en países con infraestructura tecnológica avanzada.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    En todos los casos, implementamos medidas adecuadas para garantizar un nivel de protección equivalente al requerido por las normativas de privacidad aplicables.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">11. Cambios a esta política</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Podemos actualizar esta política de privacidad en cualquier momento para reflejar cambios en nuestras prácticas o por razones legales, operativas o regulatorias.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Cualquier cambio será publicado en esta página con la fecha de última actualización. Le recomendamos revisar esta política periódicamente.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Si los cambios son significativos, le notificaremos por correo electrónico o mediante un aviso prominente en nuestro sitio web.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">12. Contacto</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Para consultas, solicitudes o ejercer sus derechos relacionados con la privacidad, puede contactarnos a:
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    📧 <a href="mailto:info@netmarkethn.com" className="text-teal hover:underline">info@netmarkethn.com</a>
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    📞 +504 9279-0292
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Responderemos a su solicitud en un plazo máximo de 30 días hábiles.
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
