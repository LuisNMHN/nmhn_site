import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Preguntas frecuentes - NMHN",
  description: "Preguntas frecuentes sobre NMHN y la plataforma",
}

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section id="faq" className="w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">Preguntas frecuentes</h1>
              </div>

              <div className="max-w-none space-y-6 sm:space-y-8">
                <Card className="border-black">
                  <CardContent className="px-4 sm:px-6 py-6 sm:py-8">
                    <Accordion
                      type="single"
                      collapsible
                      className="space-y-0"
                    >
                      <AccordionItem value="item-1" className="border-b border-zinc-200 dark:border-zinc-800 px-0 first:pt-0">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Qué es NMHN?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      NMHN es una empresa hondureña de tecnología que impulsa el desarrollo del mercado digital mediante herramientas diseñadas para emprendedores, profesionales y negocios locales.
                    </AccordionContent>
                  </AccordionItem>

                      <AccordionItem value="item-2" className="border-b border-zinc-200 dark:border-zinc-800 px-0 py-3 sm:py-4">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿En qué etapa se encuentra la plataforma?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      La plataforma está en constante desarrollo. Nuestro equipo trabaja en la creación de herramientas para fortalecer la presencia en línea y facilitar procesos del ecosistema digital hondureño.
                    </AccordionContent>
                  </AccordionItem>

                      <AccordionItem value="item-3" className="border-b border-zinc-200 dark:border-zinc-800 px-0 py-3 sm:py-4">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿La plataforma ya está disponible para el público?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      Actualmente estamos en una fase beta y algunas funciones se encuentran en construcción. A medida que avanzamos, iremos habilitando nuevas herramientas y comunicándolas oportunamente.
                    </AccordionContent>
                  </AccordionItem>

                      <AccordionItem value="item-4" className="border-b border-zinc-200 dark:border-zinc-800 px-0 py-3 sm:py-4">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Qué tipo de herramientas ofrecerá NMHN?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      NMHN desarrollará herramientas para apoyar la actividad económica moderna. Esto incluye opciones que faciliten la visibilidad, la organización y el acceso a oportunidades dentro del mercado digital.
                    </AccordionContent>
                  </AccordionItem>

                      <AccordionItem value="item-5" className="border-b border-zinc-200 dark:border-zinc-800 px-0 py-3 sm:py-4">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿NMHN es una entidad financiera?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      No. NMHN no es un banco, no ofrece servicios financieros, no realiza transferencias de dinero, no gestiona pagos ni opera como pasarela. Nuestro enfoque está en el desarrollo de tecnología.
                    </AccordionContent>
                  </AccordionItem>

                      <AccordionItem value="item-6" className="border-b border-zinc-200 dark:border-zinc-800 px-0 py-3 sm:py-4">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Habrá costos o suscripciones para utilizar NMHN?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      En el futuro podría haber funciones o herramientas premium. Si esto sucede, los detalles se comunicarán de forma clara antes de que el usuario decida utilizarlas. Por ahora, el proyecto se encuentra en desarrollo.
                    </AccordionContent>
                  </AccordionItem>

                      <AccordionItem value="item-7" className="border-b border-zinc-200 dark:border-zinc-800 px-0 py-3 sm:py-4">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Necesito crear una cuenta para usar NMHN?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      Algunas funcionalidades podrían requerir una cuenta para ofrecer una experiencia personalizada. Sin embargo, cualquier opción de registro será opcional y dependerá de la herramienta utilizada.
                    </AccordionContent>
                  </AccordionItem>

                      <AccordionItem value="item-8" className="border-b-0 px-0 py-3 sm:py-4">
                        <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                          ¿Cómo protege NMHN mis datos?
                        </AccordionTrigger>
                        <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                          Tratamos la seguridad y privacidad con seriedad. La información proporcionada por los usuarios se maneja bajo políticas de privacidad que cumplen buenas prácticas y solo se utiliza con fines operativos y administrativos.
                        </AccordionContent>
                      </AccordionItem>

                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

