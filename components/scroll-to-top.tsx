"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar el botón cuando el usuario haya hecho scroll más de 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-4 sm:bottom-8 sm:right-6 lg:right-8 xl:right-12 z-50",
        "h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg",
        "bg-teal text-teal-foreground hover:bg-teal/90",
        "transition-all duration-300 ease-in-out",
        "flex items-center justify-center",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="Volver arriba"
    >
      <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
    </Button>
  )
}

