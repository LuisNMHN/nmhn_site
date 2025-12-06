"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Menu, X, Construction } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isConstructionModalOpen, setIsConstructionModalOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <nav className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
                <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
                  <Image
                    src="/NMHN.png"
                    alt="NMHN"
                    width={100}
                    height={32}
                    className="h-6 sm:h-7 w-auto object-contain"
                    priority
                  />
                </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 lg:space-x-8 md:flex">
          <Link
            href="/#inicio"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
          >
            Inicio
          </Link>
          <Link
            href="/#servicios"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
          >
            Sobre nosotros
          </Link>
          <Link
            href="/#plataforma-desarrollo"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
          >
            Plataforma tecnológica
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap hidden lg:block"
          >
            Preguntas frecuentes
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <Button 
            size="default" 
            className="bg-teal text-teal-foreground hover:bg-teal/90 whitespace-nowrap"
            onClick={() => {
              const element = document.getElementById("contacto")
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" })
              } else {
                window.location.href = "/contacto"
              }
            }}
          >
            Contactar
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-1.5 -mr-1.5 flex-shrink-0" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border md:hidden animate-slide-in-bottom">
          <div className="container mx-auto space-y-2 sm:space-y-3 px-3 sm:px-4 py-3 sm:py-4">
            <Link
              href="/#inicio"
              className="block py-2 text-sm sm:text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/#servicios"
              className="block py-2 text-sm sm:text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre nosotros
            </Link>
            <Link
              href="/#plataforma-desarrollo"
              className="block py-2 text-sm sm:text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Plataforma tecnológica
            </Link>
            <Link
              href="/faq"
              className="block py-2 text-sm sm:text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Preguntas frecuentes
            </Link>
            <Button 
              size="default" 
              className="w-full mt-3 sm:mt-4 bg-teal text-teal-foreground hover:bg-teal/90 text-sm sm:text-base"
              onClick={() => {
                setMobileMenuOpen(false)
                const element = document.getElementById("contacto")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" })
                } else {
                  window.location.href = "/contacto"
                }
              }}
            >
              Contactar
            </Button>
          </div>
        </div>
      )}

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
    </header>
  )
}
