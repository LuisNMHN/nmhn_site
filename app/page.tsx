"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PlatformAnimation } from "@/components/platform-animation"
import { TypingHero } from "@/components/typing-hero"
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
  FileText,
  Globe,
  Code,
  BookOpen,
  GraduationCap,
  Wrench,
  Layout,
  Package,
  Key,
  Sparkles,
  Search,
  ClipboardList,
  Settings,
  CheckCircle,
  Headphones,
  ArrowRightCircle,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HomePage() {
  const [isConstructionModalOpen, setIsConstructionModalOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)
  const [currentServiceCard, setCurrentServiceCard] = useState(0)
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number | null>(null)
  const [quoteFormData, setQuoteFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoProyecto: "",
    descripcion: "",
  })
  const [quoteErrors, setQuoteErrors] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoProyecto: "",
    descripcion: "",
  })
  const [quoteTouched, setQuoteTouched] = useState({
    nombre: false,
    email: false,
    telefono: false,
    tipoProyecto: false,
    descripcion: false,
  })

  const serviceCards = [
    {
      icon: Globe,
      iconColor: "text-white",
      bgColor: "bg-blue-500/10",
      title: "Desarrollo web",
      description: "Sitios web modernos, responsivos y optimizados para tu negocio",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      imageAlt: "Desarrollo web",
    },
    {
      icon: Code,
      iconColor: "text-white",
      bgColor: "bg-purple-500/10",
      title: "Desarrollo de software",
      description: "Aplicaciones y sistemas personalizados para automatizar procesos",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      imageAlt: "Desarrollo de software",
    },
    {
      icon: BookOpen,
      iconColor: "text-white",
      bgColor: "bg-green-500/10",
      title: "Asesorías tecnológicas",
      description: "Consultoría para mejorar tu estrategia digital",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
      imageAlt: "Asesorías tecnológicas",
    },
    {
      icon: GraduationCap,
      iconColor: "text-white",
      bgColor: "bg-orange-500/10",
      title: "Capacitación",
      description: "Programas de formación para tu equipo en tecnologías modernas",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      imageAlt: "Capacitación",
    },
    {
      icon: Wrench,
      iconColor: "text-white",
      bgColor: "bg-cyan-500/10",
      title: "Herramientas digitales",
      description: "Software y aplicaciones listas para implementar en tu negocio",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      imageAlt: "Herramientas digitales",
    },
    {
      icon: Layout,
      iconColor: "text-white",
      bgColor: "bg-indigo-500/10",
      title: "Plantillas avanzadas",
      description: "Diseños profesionales y personalizables para acelerar tu proyecto",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop",
      imageAlt: "Plantillas avanzadas",
    },
    {
      icon: Key,
      iconColor: "text-white",
      bgColor: "bg-amber-500/10",
      title: "Licencias",
      description: "Acceso a software y servicios premium con licencias empresariales",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      imageAlt: "Licencias",
      comingSoon: true,
    },
  ]

  const nextServiceCard = () => {
    setCurrentServiceCard((prev) => (prev + 1) % serviceCards.length)
  }

  const prevServiceCard = () => {
    setCurrentServiceCard((prev) => (prev - 1 + serviceCards.length) % serviceCards.length)
  }

  // Auto-rotación del carrusel de servicios
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceCard((prev) => (prev + 1) % serviceCards.length)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(interval)
  }, [])


  // Colores de los pasos
  const workflowColors = [
    "rgb(20 184 166)",   // teal - Diagnóstico
    "rgb(153 27 27)",     // red-dark - Propuesta
    "rgb(55 65 81)",      // gray-dark - Desarrollo
    "rgb(34 197 94)",     // green - Entrega
    "rgb(147 51 234)",    // purple - Soporte
  ]

  // Obtener color actual del paso activo
  const getCurrentColor = () => {
    if (activeWorkflowStep === null) return workflowColors[0]
    return workflowColors[activeWorkflowStep]
  }

  // Obtener posición horizontal del círculo
  const getCirclePosition = () => {
    if (activeWorkflowStep === null) return 10
    return activeWorkflowStep * 20 + 10
  }

  // Obtener posición vertical del círculo
  const getCircleVerticalPosition = () => {
    return -50 // Posición fija sobre las cards
  }

  // Validación de email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Validación de nombre
  const validateNombre = (nombre: string) => {
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/
    return nombreRegex.test(nombre) && nombre.trim().length >= 2
  }

  // Validación de teléfono (solo Honduras, formato 0000-0000)
  const validateTelefono = (telefono: string) => {
    const telefonoRegex = /^\d{4}-\d{4}$/
    return telefonoRegex.test(telefono)
  }

  // Validar campo individual del formulario de cotización
  const validateQuoteField = (name: string, value: string) => {
    let error = ""

    switch (name) {
      case "nombre":
        if (!value.trim()) {
          error = "El nombre es requerido"
        } else if (!validateNombre(value)) {
          error = "El nombre solo debe contener letras y espacios (mínimo 2 caracteres)"
        }
        break
      case "email":
        if (!value.trim()) {
          error = "El correo electrónico es requerido"
        } else if (!validateEmail(value)) {
          error = "Por favor ingresa un correo electrónico válido"
        }
        break
      case "telefono":
        if (!value.trim()) {
          error = "El teléfono es requerido"
        } else if (!validateTelefono(value)) {
          error = "Por favor ingresa un teléfono válido"
        }
        break
      case "tipoProyecto":
        if (!value.trim()) {
          error = "El tipo de proyecto es requerido"
        }
        break
      case "descripcion":
        if (!value.trim()) {
          error = "La descripción es requerida"
        } else if (value.trim().length < 20) {
          error = "La descripción debe tener al menos 20 caracteres"
        }
        break
    }

    return error
  }

  // Manejar cambios en el formulario de cotización
  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    let newValue = value

    // Normalizar y restringir el teléfono a formato de Honduras: 0000-0000
    if (name === "telefono") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 8) // solo números, máximo 8 dígitos
      if (digitsOnly.length <= 4) {
        newValue = digitsOnly
      } else {
        newValue = `${digitsOnly.slice(0, 4)}-${digitsOnly.slice(4)}`
      }
    }

    setQuoteFormData({ ...quoteFormData, [name]: newValue })

    if (quoteTouched[name as keyof typeof quoteTouched]) {
      const error = validateQuoteField(name, newValue)
      setQuoteErrors({ ...quoteErrors, [name]: error })
    }
  }

  // Manejar blur en el formulario de cotización
  const handleQuoteBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setQuoteTouched({ ...quoteTouched, [name]: true })
    const error = validateQuoteField(name, value)
    setQuoteErrors({ ...quoteErrors, [name]: error })
  }

  // Manejar envío del formulario de cotización
  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newTouched = {
      nombre: true,
      email: true,
      telefono: true,
      tipoProyecto: true,
      descripcion: true,
    }
    setQuoteTouched(newTouched)

    const newErrors = {
      nombre: validateQuoteField("nombre", quoteFormData.nombre),
      email: validateQuoteField("email", quoteFormData.email),
      telefono: validateQuoteField("telefono", quoteFormData.telefono),
      tipoProyecto: validateQuoteField("tipoProyecto", quoteFormData.tipoProyecto),
      descripcion: validateQuoteField("descripcion", quoteFormData.descripcion),
    }
    setQuoteErrors(newErrors)

    const hasErrors = Object.values(newErrors).some((error) => error !== "")

    if (hasErrors) {
      return
    }

    try {
      // Enviar cotización a través de la API
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quoteFormData),
      })

      const result = await response.json()

      if (!response.ok || !result.ok) {
        // Por ahora mostrar modal de "en construcción" en lugar de error
        console.warn("Servicio de correo no disponible, mostrando modal de construcción")
        setIsConstructionModalOpen(true)
        return
      }

      setIsQuoteModalOpen(true)
      // Resetear formulario
      setQuoteFormData({
        nombre: "",
        email: "",
        telefono: "",
        tipoProyecto: "",
        descripcion: "",
      })
      setQuoteTouched({
        nombre: false,
        email: false,
        telefono: false,
        tipoProyecto: false,
        descripcion: false,
      })
    } catch (error) {
      console.error("Error al enviar la cotización:", error)
      // Mostrar modal de construcción en caso de error
      setIsConstructionModalOpen(true)
    }
  }

  const isQuoteFormValid =
    validateQuoteField("nombre", quoteFormData.nombre) === "" &&
    validateQuoteField("email", quoteFormData.email) === "" &&
    validateQuoteField("telefono", quoteFormData.telefono) === "" &&
    validateQuoteField("tipoProyecto", quoteFormData.tipoProyecto) === "" &&
    validateQuoteField("descripcion", quoteFormData.descripcion) === ""

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="w-full bg-background py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 max-w-7xl mx-auto">
              <div className="flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8 order-1">
                <TypingHero />
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty animate-text-reveal animation-delay-400">
                  En NETMARKETHN desarrollamos herramientas digitales para fortalecer la presencia en línea de emprendedores y negocios en Honduras. Creamos tecnología moderna, segura y adaptada al contexto local.
                </p>
                <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row animate-slide-in-left animation-delay-600 pt-2">
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

        {/* Servicios */}
        <section id="servicios" className="border-y border-zinc-300 bg-muted/20 py-8 sm:py-10 md:py-12 lg:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="mx-auto max-w-4xl space-y-8 sm:space-y-12">
              <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl">Servicios</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
                  Ofrecemos servicios y productos digitales diseñados para impulsar tu presencia en línea y mejorar tus procesos de negocio.
                </p>
              </div>
              <div className="relative max-w-2xl mx-auto">
                {/* Carrusel */}
                <div className="overflow-hidden rounded-lg">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentServiceCard * 100}%)` }}
                  >
                    {serviceCards.map((card, index) => {
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
                              {card.comingSoon && (
                                <div className="absolute top-4 left-4">
                                  <span className="px-3 py-1 text-xs font-medium bg-teal/90 text-white rounded-full backdrop-blur-sm">
                                    Próximamente
                                  </span>
                                </div>
                              )}
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
                    onClick={prevServiceCard}
                    className="p-2 rounded-full bg-card border border-border hover:bg-muted transition-colors"
                    aria-label="Tarjeta anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {/* Indicadores */}
                  <div className="flex gap-2">
                    {serviceCards.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentServiceCard(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentServiceCard 
                            ? "w-8 bg-teal" 
                            : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                        aria-label={`Ir a tarjeta ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextServiceCard}
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

        {/* Cómo trabajamos */}
        <section id="como-trabajamos" className="w-full bg-background py-8 sm:py-10 md:py-12 lg:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.05),transparent_50%)]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="mx-auto max-w-6xl space-y-12 sm:space-y-16">
              <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl">
                  Cómo trabajamos
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Un proceso estructurado y transparente que garantiza resultados de calidad en cada etapa de tu proyecto
                </p>
              </div>

              <div className="relative">
                {/* Línea conectora horizontal */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2 z-0">
                  {/* Línea base con gradiente sutil */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-gray-300/20 via-gray-300/30 to-gray-300/20"
                  />
                </div>

                <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-5 relative z-10">
                  {[
                    {
                      icon: Search,
                      title: "Diagnóstico",
                      description: "Conocemos tus necesidades y objetivos para entender tu proyecto",
                      color: "teal",
                      rgbColor: "rgb(20 184 166)",
                      delay: "0.1s",
                      number: "01",
                    },
                    {
                      icon: ClipboardList,
                      title: "Propuesta",
                      description: "Creamos una propuesta con alcance, tiempos y presupuesto",
                      color: "red-dark",
                      rgbColor: "rgb(153 27 27)",
                      delay: "0.2s",
                      number: "02",
                    },
                    {
                      icon: Code,
                      title: "Desarrollo",
                      description: "Desarrollamos tu proyecto de forma flexible y organizada",
                      color: "gray-dark",
                      rgbColor: "rgb(55 65 81)",
                      delay: "0.3s",
                      number: "03",
                    },
                    {
                      icon: Package,
                      title: "Entrega",
                      description: "Entregamos tu proyecto funcional y documentado",
                      color: "green",
                      rgbColor: "rgb(34 197 94)",
                      delay: "0.4s",
                      number: "04",
                    },
                    {
                      icon: Headphones,
                      title: "Soporte",
                      description: "Ofrecemos soporte y mantenimiento para garantizar el éxito",
                      color: "purple",
                      rgbColor: "rgb(147 51 234)",
                      delay: "0.5s",
                      number: "05",
                    },
                  ].map((step, index) => {
                    const Icon = step.icon
                    const isActive = activeWorkflowStep === index
                    return (
                      <div
                        key={index}
                        className="group relative"
                      >
                        {/* Flecha conectora animada en móvil/tablet */}
                        {index < 4 && (
                          <div 
                            className="lg:hidden absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b to-transparent transition-colors duration-300"
                            style={{ 
                              background: `linear-gradient(to bottom, ${step.rgbColor.replace('rgb(', '').replace(')', '')} / 0.3), transparent)`
                            }}
                          />
                        )}
                        
                        <div
                          className={`relative p-6 rounded-lg bg-card border border-black shadow-sm hover:shadow-lg transition-all duration-500 animate-fade-in-up h-full overflow-hidden ${
                            isActive 
                              ? 'workflow-active z-20 shadow-2xl border-2' 
                              : ''
                          }`}
                          style={{ 
                            animationDelay: step.delay,
                            borderColor: isActive ? step.rgbColor : undefined,
                            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          }}
                          data-hover-color={step.color}
                          data-step-index={index}
                          onMouseEnter={() => setActiveWorkflowStep(index)}
                          onMouseLeave={() => setActiveWorkflowStep(null)}
                        >
                          {/* Número de paso en esquina superior derecha */}
                          <div 
                            className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-500 z-10 ${
                              isActive ? 'bg-white/30' : 'bg-muted/50 group-hover:bg-white/20'
                            }`}
                            data-color={step.color}
                            style={{
                              color: step.rgbColor
                            }}
                          >
                            {step.number}
                          </div>

                          {/* Icono con animación y hover dinámico */}
                          <div 
                            className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-4 transition-all duration-500 relative overflow-hidden ${
                              isActive 
                                ? 'bg-white/30' 
                                : 'bg-muted/50 group-hover:bg-white/20'
                            }`}
                          >
                            <Icon 
                              className="w-7 h-7 relative z-10 transition-all duration-500"
                              data-color={step.color}
                              style={{
                                color: step.rgbColor
                              }}
                            />
                          </div>

                          <h3 
                            className={`font-semibold text-base mb-2 transition-all duration-500 ${
                              isActive ? 'text-lg' : ''
                            }`}
                            data-color={step.color}
                            style={{
                              color: step.rgbColor
                            }}
                          >
                            {step.title}
                          </h3>
                          <p className={`text-sm text-muted-foreground leading-relaxed transition-all duration-500 ${
                            isActive ? 'text-base' : ''
                          }`}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section
          id="faq"
          className="w-full border-y border-zinc-300 bg-muted/20 pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-6 sm:pb-8 md:pb-10 lg:pb-12"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl text-center">
                  Preguntas frecuentes
                </h2>
              </div>

              <div className="max-w-none space-y-6 sm:space-y-8">
                <Card className="border-black">
                  <CardContent className="px-4 sm:px-6 py-6 sm:py-8">
                    <Accordion
                      type="single"
                      collapsible
                      className="space-y-0"
                    >
                      <AccordionItem value="item-1" className="border-b border-zinc-200 dark:border-zinc-800 px-0 first:pt-0 last:border-b-0">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Qué es NMHN?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      NMHN es una empresa de tecnología enfocada en desarrollo de software, servicios web y soluciones digitales. Ofrecemos desarrollo web, software personalizado, asesorías, capacitación, herramientas digitales y plantillas para empresas y profesionales en Honduras.
                    </AccordionContent>
                  </AccordionItem>

                      <AccordionItem value="item-2" className="border-b border-zinc-200 dark:border-zinc-800 px-0 py-3 sm:py-4">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Qué servicios ofrecen?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      Ofrecemos desarrollo de sitios web modernos y adaptables, software personalizado para automatizar tareas, asesorías para mejorar tu estrategia digital, programas de capacitación, herramientas listas para usar, plantillas personalizables y próximamente licencias empresariales.
                    </AccordionContent>
                  </AccordionItem>

                      <AccordionItem value="item-3" className="border-b border-zinc-200 dark:border-zinc-800 px-0 py-3 sm:py-4">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Cómo funciona el proceso de trabajo?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      Nuestro proceso tiene 5 etapas: Diagnóstico (conocemos tus necesidades), Propuesta (creamos un plan con alcance, tiempos y presupuesto), Desarrollo (construimos tu proyecto de forma organizada), Entrega (proyecto funcional y documentado) y Soporte (mantenimiento continuo para garantizar el éxito).
                    </AccordionContent>
                  </AccordionItem>

                      <AccordionItem value="item-4" className="border-b border-zinc-200 dark:border-zinc-800 px-0 py-3 sm:py-4">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿A quién está dirigido sus servicios?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      Trabajamos con emprendedores, profesionales, pequeñas y medianas empresas, organizaciones y cualquier persona o negocio que busque fortalecer su presencia digital, automatizar tareas o adoptar tecnología moderna en Honduras.
                    </AccordionContent>
                  </AccordionItem>

                      <AccordionItem value="item-5" className="border-b border-zinc-200 dark:border-zinc-800 px-0 py-3 sm:py-4">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Cuánto tiempo toma desarrollar un proyecto?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      El tiempo de desarrollo varía según la complejidad y alcance del proyecto. Sitios web básicos pueden completarse en 2-4 semanas, mientras que aplicaciones personalizadas pueden tomar de 1 a 6 meses. Durante la etapa de Propuesta te proporcionaremos un cronograma detallado específico para tu proyecto.
                    </AccordionContent>
                  </AccordionItem>

                      <AccordionItem value="item-6" className="border-b border-zinc-200 dark:border-zinc-800 px-0 py-3 sm:py-4">
                    <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                      ¿Ofrecen soporte después de la entrega?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      Sí, ofrecemos soporte continuo y mantenimiento para asegurar el éxito de tu proyecto. Esto incluye actualizaciones, corrección de errores, mejoras y asistencia técnica. Puedes contactarnos para conocer nuestros planes de soporte disponibles.
                    </AccordionContent>
                  </AccordionItem>

                      <AccordionItem value="item-7" className="border-b-0 px-0 py-3 sm:py-4">
                        <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                          ¿Cómo puedo solicitar una cotización?
                        </AccordionTrigger>
                        <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                          Puedes solicitar una cotización completando el formulario en la sección "Cotización" de nuestra página web. Solo necesitas proporcionar información básica sobre tu proyecto y nos pondremos en contacto contigo para elaborar una propuesta detallada adaptada a tus necesidades.
                        </AccordionContent>
                      </AccordionItem>

                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Solicitar Cotización */}
        <section id="cotizacion" className="w-full bg-background py-8 sm:py-10 md:py-12 lg:py-16 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="mx-auto max-w-4xl space-y-8 sm:space-y-12">
              <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl">
                  Solicita tu cotización
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Completa el formulario con los detalles de tu proyecto y te enviaremos una cotización personalizada.
                </p>
              </div>

              <Card className="border-black shadow-lg">
                <CardHeader className="px-4 sm:px-6 pt-6 sm:pt-8">
                  <CardTitle className="text-xl sm:text-2xl">Información del proyecto</CardTitle>
                  <CardDescription className="text-sm">
                    Proporciónanos los detalles necesarios para preparar tu cotización
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8">
                  <form onSubmit={handleQuoteSubmit} className="space-y-4 sm:space-y-6" noValidate>
                    <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="quote-nombre">Nombre completo *</Label>
                        <Input
                          id="quote-nombre"
                          name="nombre"
                          placeholder="Tu nombre"
                          value={quoteFormData.nombre}
                          onChange={handleQuoteChange}
                          onBlur={handleQuoteBlur}
                          className={`placeholder:text-muted-foreground/50 ${quoteErrors.nombre && quoteTouched.nombre ? "border-destructive" : ""}`}
                          aria-invalid={quoteErrors.nombre && quoteTouched.nombre ? "true" : "false"}
                        />
                        {quoteErrors.nombre && quoteTouched.nombre && (
                          <p className="text-sm text-destructive mt-1">{quoteErrors.nombre}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="quote-email">Correo electrónico *</Label>
                        <Input
                          id="quote-email"
                          name="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={quoteFormData.email}
                          onChange={handleQuoteChange}
                          onBlur={handleQuoteBlur}
                          className={`placeholder:text-muted-foreground/50 ${quoteErrors.email && quoteTouched.email ? "border-destructive" : ""}`}
                          aria-invalid={quoteErrors.email && quoteTouched.email ? "true" : "false"}
                        />
                        {quoteErrors.email && quoteTouched.email && (
                          <p className="text-sm text-destructive mt-1">{quoteErrors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quote-telefono">Teléfono (solo Honduras) *</Label>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground select-none">
                          +504
                        </div>
                        <Input
                          id="quote-telefono"
                          name="telefono"
                          type="tel"
                          placeholder="0000-0000"
                          value={quoteFormData.telefono}
                          onChange={handleQuoteChange}
                          onBlur={handleQuoteBlur}
                          className={`placeholder:text-muted-foreground/50 flex-1 ${quoteErrors.telefono && quoteTouched.telefono ? "border-destructive" : ""}`}
                          aria-invalid={quoteErrors.telefono && quoteTouched.telefono ? "true" : "false"}
                        />
                      </div>
                      {quoteErrors.telefono && quoteTouched.telefono && (
                        <p className="text-sm text-destructive mt-1">{quoteErrors.telefono}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quote-tipoProyecto">Tipo de proyecto *</Label>
                      <select
                        id="quote-tipoProyecto"
                        name="tipoProyecto"
                        value={quoteFormData.tipoProyecto}
                        onChange={handleQuoteChange}
                        onBlur={handleQuoteBlur}
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                          quoteErrors.tipoProyecto && quoteTouched.tipoProyecto ? "border-destructive" : ""
                        }`}
                        aria-invalid={quoteErrors.tipoProyecto && quoteTouched.tipoProyecto ? "true" : "false"}
                      >
                        <option value="">Selecciona un tipo de proyecto</option>
                        <option value="web">Sitio web corporativo</option>
                        <option value="landing-page">Landing page / Página de campaña</option>
                        <option value="ecommerce">E-commerce / Tienda en línea</option>
                        <option value="portal-contenidos">Portal de contenidos / Blog</option>
                        <option value="aplicacion-web">Aplicación web</option>
                        <option value="aplicacion-movil">Aplicación móvil</option>
                        <option value="software-personalizado">Software a la medida</option>
                        <option value="sistema-gestion">Sistema de gestión interna</option>
                        <option value="automatizacion-procesos">Automatización de procesos</option>
                        <option value="panel-administrativo">Panel administrativo / Dashboard</option>
                        <option value="plataforma-educativa">Plataforma educativa / LMS</option>
                        <option value="integraciones">Integraciones entre sistemas</option>
                        <option value="mvp-prototipo">MVP / Prototipo funcional</option>
                        <option value="otro">Otro</option>
                      </select>
                      {quoteErrors.tipoProyecto && quoteTouched.tipoProyecto && (
                        <p className="text-sm text-destructive mt-1">{quoteErrors.tipoProyecto}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quote-descripcion">Descripción del proyecto *</Label>
                      <Textarea
                        id="quote-descripcion"
                        name="descripcion"
                        placeholder="Describe tu proyecto, objetivos, funcionalidades requeridas, plazo estimado, etc."
                        rows={6}
                        value={quoteFormData.descripcion}
                        onChange={handleQuoteChange}
                        onBlur={handleQuoteBlur}
                        className={`placeholder:text-muted-foreground/50 ${quoteErrors.descripcion && quoteTouched.descripcion ? "border-destructive" : ""}`}
                        aria-invalid={quoteErrors.descripcion && quoteTouched.descripcion ? "true" : "false"}
                      />
                      {quoteErrors.descripcion && quoteTouched.descripcion && (
                        <p className="text-sm text-destructive mt-1">{quoteErrors.descripcion}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={!isQuoteFormValid}
                      className={`w-full text-teal-foreground transition-colors ${
                        isQuoteFormValid
                          ? "bg-teal hover:bg-teal/90"
                          : "bg-muted text-muted-foreground cursor-not-allowed hover:bg-muted"
                      }`}
                      size="lg"
                    >
                      Solicitar cotización
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
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

      {/* Modal de confirmación de cotización */}
      <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
              <FileText className="h-8 w-8 text-teal" />
            </div>
            <DialogTitle className="text-center text-xl sm:text-2xl">
              Solicitud recibida
            </DialogTitle>
            <DialogDescription className="text-center text-base">
              Hemos recibido tu solicitud de cotización. Nuestro equipo la revisará y te contactará en breve con una propuesta personalizada.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex justify-center">
            <Button 
              onClick={() => setIsQuoteModalOpen(false)}
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

        /* Efecto automático activo - fondo sólido y texto blanco */
        .workflow-active[data-hover-color="teal"] {
          background-color: rgb(20 184 166) !important;
          border-color: rgb(20 184 166) !important;
          box-shadow: 0 10px 25px rgba(20, 184, 166, 0.3) !important;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        .workflow-active[data-hover-color="red-dark"] {
          background-color: rgb(153 27 27) !important;
          border-color: rgb(153 27 27) !important;
          box-shadow: 0 10px 25px rgba(153, 27, 27, 0.3) !important;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        .workflow-active[data-hover-color="gray-dark"] {
          background-color: rgb(55 65 81) !important;
          border-color: rgb(55 65 81) !important;
          box-shadow: 0 10px 25px rgba(55, 65, 81, 0.3) !important;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        .workflow-active[data-hover-color="green"] {
          background-color: rgb(34 197 94) !important;
          border-color: rgb(34 197 94) !important;
          box-shadow: 0 10px 25px rgba(34, 197, 94, 0.3) !important;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        .workflow-active[data-hover-color="purple"] {
          background-color: rgb(147 51 234) !important;
          border-color: rgb(147 51 234) !important;
          box-shadow: 0 10px 25px rgba(147, 51, 234, 0.3) !important;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        
        /* Texto cambia a blanco cuando está activo */
        .workflow-active[data-hover-color="teal"] h3,
        .workflow-active[data-hover-color="red-dark"] h3,
        .workflow-active[data-hover-color="gray-dark"] h3,
        .workflow-active[data-hover-color="green"] h3,
        .workflow-active[data-hover-color="purple"] h3 {
          color: white !important;
          transition: color 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        
        .workflow-active[data-hover-color="teal"] p,
        .workflow-active[data-hover-color="red-dark"] p,
        .workflow-active[data-hover-color="gray-dark"] p,
        .workflow-active[data-hover-color="green"] p,
        .workflow-active[data-hover-color="purple"] p {
          color: rgba(255, 255, 255, 0.9) !important;
          transition: color 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        
        /* Iconos cambian a blanco cuando está activo */
        .workflow-active [data-color] {
          color: white !important;
          transition: color 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        
        /* Números cambian a blanco cuando está activo */
        .workflow-active [data-color] {
          color: white !important;
          transition: color 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        
        /* Hover dinámico - fondo sólido y texto blanco/gris (mantiene funcionalidad manual) */
        .group:hover [data-hover-color="teal"]:not(.workflow-active) {
          background-color: rgb(20 184 166) !important;
          border-color: rgb(20 184 166) !important;
          transition: background-color 0.15s ease, border-color 0.15s ease !important;
        }
        .group:hover [data-hover-color="red-dark"]:not(.workflow-active) {
          background-color: rgb(153 27 27) !important;
          border-color: rgb(153 27 27) !important;
          transition: background-color 0.15s ease, border-color 0.15s ease !important;
        }
        .group:hover [data-hover-color="gray-dark"]:not(.workflow-active) {
          background-color: rgb(55 65 81) !important;
          border-color: rgb(55 65 81) !important;
          transition: background-color 0.15s ease, border-color 0.15s ease !important;
        }
        .group:hover [data-hover-color="green"]:not(.workflow-active) {
          background-color: rgb(34 197 94) !important;
          border-color: rgb(34 197 94) !important;
          transition: background-color 0.15s ease, border-color 0.15s ease !important;
        }
        .group:hover [data-hover-color="purple"]:not(.workflow-active) {
          background-color: rgb(147 51 234) !important;
          border-color: rgb(147 51 234) !important;
          transition: background-color 0.15s ease, border-color 0.15s ease !important;
        }
        
        /* Texto cambia a blanco en hover (solo si no está activo automáticamente) */
        .group:hover [data-hover-color="teal"]:not(.workflow-active) h3,
        .group:hover [data-hover-color="red-dark"]:not(.workflow-active) h3,
        .group:hover [data-hover-color="gray-dark"]:not(.workflow-active) h3,
        .group:hover [data-hover-color="green"]:not(.workflow-active) h3,
        .group:hover [data-hover-color="purple"]:not(.workflow-active) h3 {
          color: white !important;
          transition: color 0.15s ease !important;
        }
        
        .group:hover [data-hover-color="teal"]:not(.workflow-active) p,
        .group:hover [data-hover-color="red-dark"]:not(.workflow-active) p,
        .group:hover [data-hover-color="gray-dark"]:not(.workflow-active) p,
        .group:hover [data-hover-color="green"]:not(.workflow-active) p,
        .group:hover [data-hover-color="purple"]:not(.workflow-active) p {
          color: rgba(255, 255, 255, 0.9) !important;
          transition: color 0.15s ease !important;
        }
        
        /* Iconos cambian a blanco en hover */
        .group:hover [data-hover-color]:not(.workflow-active) [data-color] {
          color: white !important;
          transition: color 0.15s ease !important;
        }
        
        /* Números cambian a blanco en hover (misma lógica que el texto) */
        .group:hover [data-hover-color="teal"]:not(.workflow-active) [data-color="teal"],
        .group:hover [data-hover-color="red-dark"]:not(.workflow-active) [data-color="red-dark"],
        .group:hover [data-hover-color="gray-dark"]:not(.workflow-active) [data-color="gray-dark"],
        .group:hover [data-hover-color="green"]:not(.workflow-active) [data-color="green"],
        .group:hover [data-hover-color="purple"]:not(.workflow-active) [data-color="purple"] {
          color: white !important;
          transition: color 0.15s ease !important;
        }
      `}</style>
    </div>
  )
}
