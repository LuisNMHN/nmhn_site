"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CardPaymentsDemo } from "@/components/card-payments-demo"
import { PaymentLinksDemo } from "@/components/payment-links-demo"
import {
  ArrowRight,
  CreditCard,
  Shield,
  Zap,
  BarChart3,
  Headphones,
  CheckCircle2,
  Coins,
  Link2,
  Users,
  Construction,
} from "lucide-react"

export default function HomePage() {
  const [isConstructionModalOpen, setIsConstructionModalOpen] = useState(false)

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
                  Gestiona tus servicios y solicitudes de cobro desde una plataforma simple y profesional
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty animate-text-reveal animation-delay-400">
                  NMHN Pay ofrece herramientas digitales para que emprendedores, freelancers y consultores hondureños organicen su trabajo, envíen solicitudes de cobro y accedan a funciones premium de manera segura.
                </p>
                <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row animate-slide-in-left animation-delay-600 pt-2">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-teal text-teal-foreground hover:bg-teal/90"
                    onClick={() => setIsConstructionModalOpen(true)}
                  >
                    Comenzar
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto"
                    onClick={() => {
                      const element = document.getElementById("como-funciona")
                      element?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                  >
                    Saber más
                  </Button>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10 order-2 lg:order-2">
                <CardPaymentsDemo />
                <PaymentLinksDemo />
              </div>
            </div>
          </div>
        </section>

        {/* Sobre NMHN Pay */}
        <section className="border-y border-border bg-muted/30 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="mx-auto max-w-3xl text-center space-y-4 sm:space-y-6 lg:space-y-8">
              <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl">Sobre NMHN <span className="text-teal">Pay</span></h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed px-2 sm:px-0">
                NMHN Pay es una plataforma digital creada para apoyar a emprendedores, freelancers y consultores hondureños en la organización de su trabajo y la creación de solicitudes de cobro profesionales. Nuestro enfoque es ofrecer herramientas tecnológicas accesibles que impulsen la actividad comercial sin operar como entidad financiera.
              </p>
            </div>
          </div>
        </section>

        {/* Servicios / Características principales */}
        <section id="servicios" className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="mx-auto max-w-6xl space-y-8 sm:space-y-12">
            <div className="text-center space-y-3 sm:space-y-4 px-2 sm:px-0">
              <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl">
                Todo lo que necesitas para gestionar tus pagos
              </h2>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                Desde enlaces de pago hasta facturas profesionales, tenemos las herramientas perfectas para tu negocio
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-border hover:border-teal/50 transition-colors">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                    <Link2 className="h-6 w-6 text-teal" />
                  </div>
                  <CardTitle>Enlaces de pago</CardTitle>
                  <CardDescription>
                    Crea enlaces únicos para cobrar servicios específicos. Tus clientes pagan en segundos desde
                    cualquier lugar.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border hover:border-teal/50 transition-colors">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <CreditCard className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Cobros digitales simples</CardTitle>
                  <CardDescription>Recibe pagos de manera rápida y segura sin complicaciones técnicas</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border hover:border-teal/50 transition-colors">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Panel profesional</CardTitle>
                  <CardDescription>
                    Gestiona todos tus pagos y transacciones desde un dashboard intuitivo
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border hover:border-teal/50 transition-colors">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Seguridad</CardTitle>
                  <CardDescription>Protección avanzada para todas tus transacciones y datos sensibles</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border hover:border-teal/50 transition-colors">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Gestión de servicios</CardTitle>
                  <CardDescription>
                    Organiza y administra todos tus servicios y productos desde un solo lugar
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border hover:border-teal/50 transition-colors">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Headphones className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Soporte dedicado</CardTitle>
                  <CardDescription>Equipo de soporte disponible para ayudarte en cada paso del camino</CardDescription>
                </CardHeader>
              </Card>
            </div>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section id="como-funciona" className="border-y border-border bg-muted/30 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              <div className="text-center space-y-3 sm:space-y-4 px-2 sm:px-0">
                <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl animate-text-reveal animation-delay-200">
                  Cómo funciona
                </h2>
                <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed animate-text-reveal animation-delay-400">
                  Comienza a cobrar en solo 3 pasos simples
                </p>
              </div>

              <div className="grid gap-8 sm:gap-10 lg:gap-12 md:grid-cols-3">
                <div className="relative animate-slide-in-bottom animation-delay-500">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary text-xl sm:text-2xl font-bold text-primary-foreground animate-scale-in animation-delay-600">
                      1
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">Crea tu perfil</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Organiza tu información profesional y define tus servicios.
                    </p>
                  </div>
                </div>

                <div className="relative animate-slide-in-bottom animation-delay-700">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-accent text-xl sm:text-2xl font-bold text-accent-foreground animate-scale-in animation-delay-800">
                      2
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">Genera solicitudes</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Envía solicitudes claras y profesionales para tus servicios.
                    </p>
                  </div>
                </div>

                <div className="relative animate-slide-in-bottom animation-delay-900">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary text-xl sm:text-2xl font-bold text-primary-foreground animate-scale-in animation-delay-1000">
                      3
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">Activa funciones premium</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Mejora tu experiencia utilizando créditos HNLD para herramientas adicionales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Créditos digitales (HNLD) */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="mx-auto max-w-4xl">
            <Card className="border-border bg-gradient-to-br from-card to-muted/30">
              <CardHeader className="text-center space-y-3 sm:space-y-4 lg:space-y-6 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto inline-flex h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-accent/10">
                  <Coins className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-accent" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl lg:text-4xl">Créditos internos (HNLD)</CardTitle>
                <CardDescription className="text-sm sm:text-base lg:text-lg">
                  Accede a funciones premium dentro de la plataforma
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 lg:space-y-8 px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 lg:pb-10">
                <p className="text-center text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Los HNLD son créditos internos diseñados exclusivamente para activar funciones premium y herramientas adicionales dentro de NMHN Pay. No representan dinero, no pueden canjearse por efectivo, no son divisas ni instrumentos financieros y no tienen valor fuera de la plataforma. Su uso es únicamente funcional dentro de NMHN Pay.
                </p>
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-4">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Funciones premium</p>
                      <p className="text-sm text-muted-foreground">Accede a herramientas avanzadas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-4">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Uso exclusivo</p>
                      <p className="text-sm text-muted-foreground">Solo dentro del ecosistema NMHN Pay</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-4 sm:col-span-2 lg:col-span-1">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Propósito funcional</p>
                      <p className="text-sm text-muted-foreground">Créditos destinados únicamente a habilitar características digitales</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
          </div>
        </section>

        {/* Planes / Precios */}
        <section id="precios" className="border-y border-border bg-muted/30 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              <div className="text-center space-y-3 sm:space-y-4 px-2 sm:px-0">
                <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl">
                  Planes y precios
                </h2>
                <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Elige el plan que mejor se adapte a tus necesidades
                </p>
              </div>

              <div className="grid gap-6 sm:gap-8 lg:gap-10 md:grid-cols-2">
                <Card className="border-border">
                  <CardHeader className="space-y-3 sm:space-y-4 px-4 sm:px-6 pt-6 sm:pt-8">
                    <CardTitle className="text-xl sm:text-2xl">Plan básico</CardTitle>
                    <div className="space-y-2">
                      <div className="text-3xl sm:text-4xl font-bold">L 0</div>
                      <p className="text-xs sm:text-sm text-muted-foreground">/ mes</p>
                    </div>
                    <CardDescription className="text-sm">Perfecto para comenzar</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6 pb-6 sm:pb-8">
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">Solicitudes de cobro simples</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">Gestión de actividades</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">Herramientas esenciales</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">Acceso desde cualquier dispositivo</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">Soporte por correo</span>
                      </li>
                    </ul>
                    <Button 
                      className="w-full bg-transparent text-sm sm:text-base" 
                      variant="outline"
                      onClick={() => setIsConstructionModalOpen(true)}
                    >
                      Comenzar gratis
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary shadow-lg">
                  <CardHeader className="space-y-3 sm:space-y-4 px-4 sm:px-6 pt-6 sm:pt-8">
                    <div className="inline-flex items-center rounded-full border border-teal/20 bg-teal/10 px-2 py-1 sm:px-3 sm:py-1 text-xs font-medium text-black w-fit">
                      Más popular
                    </div>
                    <CardTitle className="text-xl sm:text-2xl">Plan profesional</CardTitle>
                    <div className="space-y-2">
                      <div className="text-3xl sm:text-4xl font-bold">Funciones premium con HNLD</div>
                    </div>
                    <CardDescription className="text-sm">Ideal para freelancers activos</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6 pb-6 sm:pb-8">
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">Solicitudes de cobro personalizadas</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">Reportes y estadísticas (próximamente)</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">Funciones premium activadas con HNLD</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">Mejor organización del perfil</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">Soporte prioritario</span>
                      </li>
                    </ul>
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base"
                      onClick={() => setIsConstructionModalOpen(true)}
                    >
                      Comenzar ahora
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 xl:py-36">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            <div className="text-center space-y-3 sm:space-y-4 px-2 sm:px-0">
              <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl">
                Por qué elegir NMHN <span className="text-teal">Pay</span>
              </h2>
              <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                La solución completa para profesionales hondureños
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Plataforma segura y confiable</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Herramientas modernas</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Sin conocimientos técnicos</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-accent/10">
                  <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Interfaz fácil de usar</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Coins className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Créditos HNLD simples</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-accent/10">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Ideal para freelancers y emprendedores</h3>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes (FAQ) */}
        <section id="faq" className="border-y border-border bg-muted/30 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="mx-auto max-w-3xl space-y-8 sm:space-y-12 lg:space-y-16">
              <div className="text-center space-y-3 sm:space-y-4 px-2 sm:px-0">
                <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl">
                  Preguntas frecuentes
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Encuentra respuestas a las preguntas más comunes
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                <AccordionItem value="item-1" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                  <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">¿NMHN Pay procesa pagos directamente?</AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                    No. Todos los cobros se procesan mediante proveedores externos certificados PCI-DSS.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                  <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                    ¿Qué son los créditos HNLD?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                    Créditos internos, no dinero, y solo para funciones premium.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                  <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                    ¿Necesito cuenta bancaria?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                    No para el uso básico.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                  <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                    ¿Puedo retirar dinero?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                    No. NMHN Pay no maneja fondos.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                  <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                    ¿Qué métodos de pago aceptan?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                    Solo a través de proveedores externos, nunca dentro de NMHN Pay.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="rounded-lg border border-border bg-card px-4 sm:px-6">
                  <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                    ¿Es seguro?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                    Sí, con buenas prácticas web y cifrado en tránsito.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 xl:py-36">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="mx-auto max-w-4xl">
            <Card className="border-border bg-gradient-to-br from-primary/5 via-card to-teal/10">
              <CardContent className="p-6 sm:p-8 md:p-12 lg:p-16 text-center space-y-4 sm:space-y-6 lg:space-y-8">
                <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl">
                  Impulsa tu trabajo con herramientas diseñadas para ti
                </h2>
                <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed px-2 sm:px-0">
                  Organiza tus servicios, envía solicitudes profesionales y activa funciones premium cuando las necesites.
                </p>
                <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center pt-2">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-teal text-teal-foreground hover:bg-teal/90"
                    onClick={() => setIsConstructionModalOpen(true)}
                  >
                    Comienza ahora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
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
              Estamos trabajando en esta funcionalidad. Pronto estará disponible para que puedas comenzar a usar NMHN Pay.
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
    </div>
  )
}
