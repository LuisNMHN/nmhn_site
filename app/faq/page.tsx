import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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
        <section id="faq" className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">Preguntas frecuentes</h1>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 sm:space-y-8">
                <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                  <AccordionItem value="item-1" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Qué es NMHN?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      NMHN es una empresa tecnológica hondureña que impulsa el desarrollo del mercado digital mediante herramientas y soluciones diseñadas para emprendedores, profesionales y negocios locales.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿En qué etapa se encuentra la plataforma?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      La plataforma está en constante desarrollo. Nuestro equipo trabaja de forma progresiva en la creación de herramientas digitales orientadas a fortalecer la presencia en línea y facilitar procesos relacionados con el ecosistema digital hondureño.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿La plataforma ya está disponible para el público?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      Actualmente estamos en una fase beta y algunas funciones se encuentran en construcción. A medida que avanzamos, iremos habilitando nuevas herramientas y comunicándolas oportunamente.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Qué tipo de herramientas ofrecerá NMHN?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      NMHN desarrollará herramientas digitales orientadas a apoyar la actividad económica moderna. Esto incluye soluciones que faciliten la visibilidad, la organización y el acceso a oportunidades dentro del mercado digital.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿NMHN es una entidad financiera?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      No. NMHN no es un banco, no ofrece servicios financieros, no realiza transferencias de dinero, no gestiona pagos ni opera como pasarela. Nuestro enfoque está en el desarrollo de tecnología y herramientas digitales.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Habrá costos o suscripciones para utilizar NMHN?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      En el futuro podría haber funciones o herramientas premium. Si esto sucede, los detalles se comunicarán de forma clara antes de que el usuario decida utilizarlas. Por ahora, el proyecto se encuentra en desarrollo.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Necesito crear una cuenta para usar NMHN?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      Algunas funcionalidades podrían requerir una cuenta para ofrecer una experiencia personalizada. Sin embargo, cualquier opción de registro será opcional y dependerá de la herramienta utilizada.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Cómo protege NMHN mis datos?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      Tratamos la seguridad y privacidad con seriedad. La información proporcionada por los usuarios se maneja bajo políticas de privacidad que cumplen buenas prácticas y solo se utiliza con fines operativos y administrativos.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Con quién puedo comunicarme si tengo dudas?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      Puedes contactarnos a través de{" "}
                      <a href="mailto:info@netmarkethn.com" className="text-teal hover:underline">
                        info@netmarkethn.com
                      </a>
                      . Nuestro equipo estará disponible para atender consultas relacionadas con NMHN o el desarrollo de la plataforma.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

