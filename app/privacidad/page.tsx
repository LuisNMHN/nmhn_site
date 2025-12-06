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
                  Última actualización: 28/11/2025
                </p>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 sm:space-y-8">
                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">1. Introducción</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    En NMHN respetamos la privacidad de nuestros usuarios y trabajamos para asegurar un manejo responsable, transparente y seguro de la información personal.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Esta política explica cómo recopilamos, utilizamos, almacenamos y protegemos los datos relacionados con su uso de la plataforma, así como los derechos que usted tiene sobre dicha información.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    NMHN es una plataforma digital en desarrollo orientada a fortalecer el mercado digital en Honduras mediante la creación de herramientas tecnológicas.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    No somos una entidad financiera y la información recopilada se utiliza únicamente con fines operativos, administrativos y de mejora del servicio.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">2. Información que recopilamos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Podemos recopilar diferentes tipos de información dependiendo de cómo interactúe con la plataforma.
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">a) Datos de identificación</h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>nombre completo</li>
                        <li>correo electrónico</li>
                        <li>número telefónico (opcional)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">b) Información de cuenta</h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>configuraciones de usuario</li>
                        <li>preferencias de uso</li>
                        <li>información del perfil (cuando corresponda)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">c) Actividad dentro de la plataforma</h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>registros de uso</li>
                        <li>historial de navegación interna</li>
                        <li>datos asociados a herramientas o funciones utilizadas</li>
                      </ul>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">
                        (sin incluir información financiera, ya que NMHN no procesa pagos)
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">d) Información técnica</h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>dirección IP</li>
                        <li>tipo y versión del navegador</li>
                        <li>sistema operativo</li>
                        <li>identificadores únicos del dispositivo</li>
                        <li>datos relacionados con rendimiento, tiempos de carga y uso general</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">e) Información asociada a funcionalidades futuras</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Cualquier información adicional será solicitada únicamente cuando sea necesaria y siempre con su consentimiento previo.
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
                    <li>operar y mejorar la plataforma,</li>
                    <li>personalizar la experiencia del usuario,</li>
                    <li>administrar cuentas y configuraciones,</li>
                    <li>garantizar la seguridad del sistema,</li>
                    <li>analizar métricas de rendimiento,</li>
                    <li>atender solicitudes de soporte,</li>
                    <li>cumplir con obligaciones legales,</li>
                    <li>enviar comunicaciones relevantes (solo con consentimiento previo para fines no esenciales).</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    En ningún caso utilizamos la información para evaluar solvencia financiera, realizar análisis crediticios o brindar servicios financieros.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">4. Cómo compartimos su información</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Su información no se vende, alquila ni comercializa.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Podemos compartirla únicamente bajo las siguientes circunstancias:
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">a) Proveedores de servicios</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-2">
                        Para operar la plataforma utilizamos empresas especializadas en:
                      </p>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>infraestructura en la nube,</li>
                        <li>servicios de seguridad informática,</li>
                        <li>análisis de uso,</li>
                        <li>servicios de correo y soporte técnico.</li>
                      </ul>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">
                        Estos proveedores procesan datos siguiendo instrucciones estrictas de NMHN.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">b) Integraciones externas futuras</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Si una funcionalidad futura requiere interacción con servicios externos, se informará previamente al usuario.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">c) Cumplimiento legal</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Podemos divulgar información cuando sea requerido por:
                      </p>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                        <li>órdenes judiciales,</li>
                        <li>solicitudes de autoridades competentes,</li>
                        <li>obligaciones legales aplicables.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">d) Socios autorizados (con consentimiento)</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Cualquier intercambio con terceros con fines distintos al funcionamiento de la plataforma requerirá consentimiento explícito.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">5. Seguridad de los datos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Protegemos la información mediante medidas técnicas y organizativas que incluyen:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>cifrado de datos en tránsito,</li>
                    <li>control de acceso basado en roles,</li>
                    <li>monitoreo de actividad inusual,</li>
                    <li>copias de seguridad internas,</li>
                    <li>auditorías periódicas,</li>
                    <li>protocolos de detección y prevención de fraude digital.</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Aunque implementamos medidas sólidas, ninguna plataforma puede garantizar seguridad absoluta.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">6. Retención de datos</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Conservamos la información únicamente durante el tiempo necesario para:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>operar la plataforma,</li>
                    <li>cumplir obligaciones contractuales o legales,</li>
                    <li>atender requerimientos de soporte,</li>
                    <li>llevar registros operativos razonables.</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Una vez cumplidas estas finalidades, los datos pueden ser eliminados o anonimizados de forma segura.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">7. Derechos del usuario</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Dependiendo de la normativa aplicable, usted puede ejercer los siguientes derechos:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>acceder a sus datos,</li>
                    <li>solicitar correcciones,</li>
                    <li>solicitar eliminación cuando proceda,</li>
                    <li>limitar ciertos usos,</li>
                    <li>oponerse al tratamiento cuando sea apropiado,</li>
                    <li>retirar consentimiento para comunicaciones no esenciales,</li>
                    <li>solicitar portabilidad de datos en casos específicos.</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Las solicitudes pueden realizarse mediante los medios descritos en la sección 12.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">8. Cookies y tecnologías similares</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Usamos cookies para:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>mejorar la funcionalidad del sitio,</li>
                    <li>recordar preferencias,</li>
                    <li>analizar rendimiento,</li>
                    <li>mantener sesiones activas.</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    El usuario puede controlar el uso de cookies desde su navegador o dispositivo.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">9. Privacidad de menores</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    La plataforma no está dirigida a personas menores de 18 años.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Si identificamos el registro de un menor, eliminaremos la información de forma inmediata.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">10. Cambios a esta política</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Podemos actualizar esta política de privacidad en cualquier momento.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Cualquier cambio será publicado en esta página y tendrá efecto desde su publicación.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Recomendamos revisar este documento periódicamente.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">11. Transferencias internacionales</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Parte del procesamiento puede realizarse fuera de Honduras, en países con infraestructura tecnológica avanzada.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    En todos los casos, implementamos medidas adecuadas para garantizar un nivel de protección equivalente al requerido por las normativas de privacidad aplicables.
                  </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">12. Contacto</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Para consultas o solicitudes relacionadas con privacidad, puede contactarnos a:
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
