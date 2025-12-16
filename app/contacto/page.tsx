"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Construction } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })
  const [errors, setErrors] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })
  const [touched, setTouched] = useState({
    nombre: false,
    email: false,
    mensaje: false,
  })
  const [isConstructionModalOpen, setIsConstructionModalOpen] = useState(false)

  // Validación de email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Validación de nombre (solo letras, espacios y acentos)
  const validateNombre = (nombre: string) => {
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/
    return nombreRegex.test(nombre) && nombre.trim().length >= 2
  }

  // Validar campo individual
  const validateField = (name: string, value: string) => {
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
      case "mensaje":
        if (!value.trim()) {
          error = "El mensaje es requerido"
        } else if (value.trim().length < 10) {
          error = "El mensaje debe tener al menos 10 caracteres"
        }
        break
    }

    return error
  }

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    // Validar en tiempo real si el campo ya fue tocado
    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, value)
      setErrors({ ...errors, [name]: error })
    }
  }

  // Manejar blur (cuando el usuario sale del campo)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched({ ...touched, [name]: true })
    const error = validateField(name, value)
    setErrors({ ...errors, [name]: error })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Marcar todos los campos como tocados
    const newTouched = {
      nombre: true,
      email: true,
      mensaje: true,
    }
    setTouched(newTouched)

    // Validar todos los campos
    const newErrors = {
      nombre: validateField("nombre", formData.nombre),
      email: validateField("email", formData.email),
      mensaje: validateField("mensaje", formData.mensaje),
    }
    setErrors(newErrors)

    // Verificar si hay errores
    const hasErrors = Object.values(newErrors).some((error) => error !== "")

    if (!hasErrors) {
      setIsConstructionModalOpen(true)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="mx-auto max-w-5xl space-y-8 sm:space-y-12">
            <div className="text-center space-y-3 sm:space-y-4 px-2 sm:px-0">
              <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">Contáctanos</h1>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                ¿Tienes preguntas? Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {/* Formulario de Contacto */}
              <Card className="border-black">
                <CardHeader className="px-4 sm:px-6 pt-6 sm:pt-8">
                  <CardTitle className="text-xl sm:text-2xl">Envíanos un mensaje</CardTitle>
                  <CardDescription className="text-sm">Completa el formulario y nos pondremos en contacto contigo</CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.nombre && touched.nombre ? "border-destructive" : ""}
                        aria-invalid={errors.nombre && touched.nombre ? "true" : "false"}
                        aria-describedby={errors.nombre && touched.nombre ? "nombre-error" : undefined}
                      />
                      {errors.nombre && touched.nombre && (
                        <p id="nombre-error" className="text-sm text-destructive mt-1">
                          {errors.nombre}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email ? "border-destructive" : ""}
                        aria-invalid={errors.email && touched.email ? "true" : "false"}
                        aria-describedby={errors.email && touched.email ? "email-error" : undefined}
                      />
                      {errors.email && touched.email && (
                        <p id="email-error" className="text-sm text-destructive mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Mensaje</Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        rows={6}
                        value={formData.mensaje}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.mensaje && touched.mensaje ? "border-destructive" : ""}
                        aria-invalid={errors.mensaje && touched.mensaje ? "true" : "false"}
                        aria-describedby={errors.mensaje && touched.mensaje ? "mensaje-error" : undefined}
                      />
                      {errors.mensaje && touched.mensaje && (
                        <p id="mensaje-error" className="text-sm text-destructive mt-1">
                          {errors.mensaje}
                        </p>
                      )}
                    </div>

                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Enviar mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Información de Contacto */}
              <div className="space-y-4 sm:space-y-6">
                <Card className="border-black">
                  <CardHeader className="px-4 sm:px-6 pt-6 sm:pt-8">
                    <CardTitle className="text-xl sm:text-2xl">Información de contacto</CardTitle>
                    <CardDescription className="text-sm">Otras formas de ponerte en contacto con nosotros</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6 pb-6 sm:pb-8">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">soporte@netmarkethn.com</p>
                        <p className="text-sm text-muted-foreground">contacto@netmarkethn.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 shrink-0">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Teléfono</p>
                        <p className="text-sm text-muted-foreground">+504 9279-0292</p>
                        <p className="text-sm text-muted-foreground">Lun - Vie: 8:00 AM - 6:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Ubicación</p>
                        <p className="text-sm text-muted-foreground">Tegucigalpa, Honduras</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-black bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold">Horario de atención</h3>
                    <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Lunes - Viernes</span>
                        <span className="font-medium text-foreground">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábado</span>
                        <span className="font-medium text-foreground">9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingo</span>
                        <span className="font-medium text-foreground">Cerrado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
              Estamos trabajando en esta funcionalidad. Pronto estará disponible para que puedas enviarnos tu mensaje.
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
