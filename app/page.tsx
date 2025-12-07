"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { PlatformAnimation } from "@/components/platform-animation"
import Image from "next/image"
import {
  ArrowRight,
  Construction,
  Target,
  Lightbulb,
  Rocket,
  Users,
  TrendingUp,
  Shield,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HomePage() {
  const [isConstructionModalOpen, setIsConstructionModalOpen] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)

  const cards = [
    {
      icon: Lightbulb,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
      title: "Iniciativa tecnológica",
      description: "Orientada a impulsar el mercado digital en Honduras.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      imageAlt: "Tecnología e innovación",
    },
    {
      icon: Rocket,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/10",
      title: "Soluciones modernas",
      description: "Facilitamos la transición hacia modelos más modernos de comercio y colaboración.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      imageAlt: "Soluciones modernas y digitales",
    },
    {
      icon: Users,
      iconColor: "text-green-500",
      bgColor: "bg-green-500/10",
      title: "Acompañamiento",
      description: "Acompañamos a emprendedores, profesionales y pequeñas empresas.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      imageAlt: "Colaboración y acompañamiento",
    },
  ]

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length)
  }

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length)
  }

  // Auto-rotación del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="w-full py-8 sm:py-12 lg:py-24 xl:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 max-w-7xl mx-auto">
              <div className="flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8 order-1">
                <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl animate-text-reveal animation-delay-200">
                  Impulsando el mercado digital de Honduras
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty animate-text-reveal animation-delay-400">
                  En NETMARKETHN desarrollamos herramientas digitales orientadas a fortalecer la presencia en línea de emprendedores y negocios en Honduras. Creamos soluciones tecnológicas modernas, seguras y adaptadas al entorno digital local.
                </p>
                <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row animate-slide-in-left animation-delay-600 pt-2">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto"
                    onClick={() => {
                      const element = document.getElementById("plataforma-desarrollo")
                      element?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                  >
                    Conocer más
                  </Button>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-teal text-teal-foreground hover:bg-teal/90"
                    onClick={() => {
                      const element = document.getElementById("contacto")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" })
                      } else {
                        window.location.href = "/contacto"
                      }
                    }}
                  >
                    Contactar al equipo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10 order-2 lg:order-2">
                <PlatformAnimation />
              </div>
            </div>
          </div>
        </section>

        {/* Sobre nosotros */}
        <section className="border-y border-border bg-gradient-to-b from-background via-muted/30 to-background py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="mx-auto max-w-4xl space-y-8 sm:space-y-12">
              <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl">Sobre nosotros</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
                  Somos una empresa tecnológica dedicada al diseño y desarrollo de soluciones digitales. Nos enfocamos en crear herramientas simples, modernas y funcionales que respondan a las necesidades del mercado hondureño. Nuestro compromiso es impulsar un ecosistema digital más accesible y eficiente.
                </p>
              </div>
              <div className="relative max-w-2xl mx-auto">
                {/* Carrusel */}
                <div className="overflow-hidden rounded-lg">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentCard * 100}%)` }}
                  >
                    {cards.map((card, index) => {
                      const Icon = card.icon
                      return (
                        <div key={index} className="min-w-full px-4">
                          <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden group">
                            <Image
                              src={card.image}
                              alt={card.imageAlt}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, 800px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                              <div className={`absolute top-4 right-4 inline-flex items-center justify-center w-12 h-12 rounded-full ${card.bgColor} backdrop-blur-sm`}>
                                <Icon className={`w-6 h-6 ${card.iconColor}`} />
                              </div>
                              <h3 className="font-semibold text-base sm:text-lg text-white mb-2">
                                {card.title}
                              </h3>
                              <p className="text-sm sm:text-base text-white leading-relaxed">
                                {card.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Controles de navegación */}
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button
                    onClick={prevCard}
                    className="p-2 rounded-full bg-card border border-border hover:bg-muted transition-colors"
                    aria-label="Tarjeta anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {/* Indicadores */}
                  <div className="flex gap-2">
                    {cards.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentCard(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentCard 
                            ? "w-8 bg-teal" 
                            : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                        aria-label={`Ir a tarjeta ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextCard}
                    className="p-2 rounded-full bg-card border border-border hover:bg-muted transition-colors"
                    aria-label="Tarjeta siguiente"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lo que hacemos */}
        <section id="servicios" className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.05),transparent_50%)]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="mx-auto max-w-4xl space-y-8 sm:space-y-12">
              <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl">
                  Lo que hacemos
                </h2>
              </div>

              <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                <div className="p-6 sm:p-8 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal/10 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <TrendingUp className="w-6 h-6 text-teal" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">Soluciones digitales</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Diseñamos soluciones digitales orientadas a fortalecer la presencia y operación de emprendedores y negocios en el entorno digital moderno.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Shield className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">Herramientas confiables</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Desarrollamos herramientas prácticas y seguras, alineadas con las necesidades del mercado digital hondureño y pensadas para facilitar procesos cotidianos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plataforma en constante desarrollo */}
        <section id="plataforma-desarrollo" className="border-y border-border bg-gradient-to-b from-background via-teal/5 to-background py-12 sm:py-16 md:py-20 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="mx-auto max-w-4xl space-y-8 sm:space-y-12">
              <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl">
                  Plataforma en constante desarrollo
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
                  Nuestros servicios están orientados a generar herramientas digitales para facilitar procesos relacionados con el entorno digital hondureño. Nuestro objetivo es ofrecer soluciones prácticas y confiables que apoyen el trabajo diario de emprendedores y profesionales.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 sm:p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-teal/20 shadow-lg hover:shadow-xl transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal/20 shrink-0 group-hover:scale-110 group-hover:bg-teal/30 transition-all duration-300 animate-number-pulse" style={{ animationDelay: "0.3s", animationDuration: "2s" }}>
                      <span className="text-teal font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">Evolución continua</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Nuestra plataforma evoluciona de forma continua.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-teal/20 shadow-lg hover:shadow-xl transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal/20 shrink-0 group-hover:scale-110 group-hover:bg-teal/30 transition-all duration-300 animate-number-pulse" style={{ animationDelay: "0.8s", animationDuration: "2s" }}>
                      <span className="text-teal font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">Soluciones para el mercado hondureño</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Estamos desarrollando soluciones digitales que respondan a las necesidades reales del mercado hondureño y que aporten valor al crecimiento de emprendedores, profesionales y negocios.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-teal/20 shadow-lg hover:shadow-xl transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal/20 shrink-0 group-hover:scale-110 group-hover:bg-teal/30 transition-all duration-300 animate-number-pulse" style={{ animationDelay: "1.3s", animationDuration: "2s" }}>
                      <span className="text-teal font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">Enfoque responsable</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Cada avance se construye con un enfoque responsable, priorizando estabilidad, calidad y una experiencia confiable para los usuarios.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Preguntas frecuentes */}
        <section id="faq" className="w-full py-12 sm:py-16 md:py-20 lg:py-32 xl:py-36">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl text-center">
                  Preguntas frecuentes
                </h2>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 sm:space-y-8">
                <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                  <AccordionItem value="item-1" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Qué es NMHN?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      NMHN es una iniciativa tecnológica orientada a impulsar el mercado digital en Honduras. Desarrollamos soluciones y herramientas que buscan facilitar la transición hacia modelos más modernos de comercio, colaboración y presencia en línea, siempre con un enfoque responsable y adaptado a la realidad hondureña.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Qué tipo de soluciones desarrollan?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      En NMHN desarrollamos soluciones digitales centradas en fortalecer la actividad económica moderna. Nuestro propósito es ofrecer herramientas confiables, prácticas y alineadas con las dinámicas del mercado digital, contribuyendo al desarrollo tecnológico de Honduras.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿A quién está dirigida la plataforma?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      Nuestro objetivo es acompañar a emprendedores, profesionales y pequeñas empresas en su camino hacia la economía digital. NETMARKETHN trabaja para fortalecer la economía digital hondureña, conectando a emprendedores, negocios y usuarios con soluciones modernas, accesibles y pensadas para el mercado local.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿NMHN es una entidad financiera?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      No. NMHN no es un banco, no ofrece servicios financieros, no realiza transferencias de dinero ni opera como pasarela. Nuestro enfoque está en el desarrollo de tecnología y herramientas digitales para fortalecer el mercado digital hondureño.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Cómo protege NMHN la información de los usuarios?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      Tratamos la seguridad y privacidad con seriedad. La información proporcionada por los usuarios se maneja bajo políticas de privacidad que cumplen buenas prácticas y solo se utiliza con fines operativos y administrativos. Priorizamos estabilidad, calidad y una experiencia confiable.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Cómo puedo contactar al equipo de NMHN?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      Puedes contactarnos a través de{" "}
                      <a href="mailto:info@netmarkethn.com" className="text-teal hover:underline">
                        info@netmarkethn.com
                      </a>
                      {" "}o visitando nuestra sección de contacto. Nuestro equipo estará disponible para atender consultas relacionadas con NMHN o el desarrollo de herramientas.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>


      </main>

      <Footer />

      {/* Modal de construcción */}
      <Dialog open={isConstructionModalOpen} onOpenChange={setIsConstructionModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
              <Construction className="h-8 w-8 text-teal" />
            </div>
            <DialogTitle className="text-center text-xl sm:text-2xl">
              Sección en construcción
            </DialogTitle>
            <DialogDescription className="text-center text-base">
              Estamos trabajando en esta funcionalidad. Pronto estará disponible.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex justify-center">
            <Button 
              onClick={() => setIsConstructionModalOpen(false)}
              className="bg-teal text-teal-foreground hover:bg-teal/90"
            >
              Entendido
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes number-pulse {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-number-pulse {
          animation: number-pulse 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
