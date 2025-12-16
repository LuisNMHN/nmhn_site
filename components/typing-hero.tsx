"use client"

import { useState, useEffect } from "react"

// Variantes tipográficas: informáticas (monoespaciadas / tech) y cursivas, con tamaños más contenidos
const fontStyles = [
  // Sans moderna base
  {
    className: "font-sans",
    style: { fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
  },
  // Serif elegante
  {
    className: "font-serif",
    style: { fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 600 },
  },
  // Monoespaciada clásica (look informático)
  {
    className: "font-mono",
    style: { fontFamily: "'Fira Code', 'Courier New', Courier, monospace", letterSpacing: "0.04em" },
  },
  // Monoespaciada más compacta
  {
    className: "font-mono",
    style: { fontFamily: "'JetBrains Mono', 'SF Mono', Menlo, monospace", letterSpacing: "0.03em" },
  },
  // Cursiva suave
  {
    className: "italic",
    style: { fontFamily: "'Georgia', 'Times New Roman', serif", fontStyle: "italic" },
  },
  // Cursiva tipo script (fallback genérico, sin fuentes externas)
  {
    className: "italic",
    style: { fontFamily: "'Brush Script MT', 'Segoe Script', cursive", fontStyle: "italic" },
  },
]

const text = "Desarrollo web y software a la medida"

export function TypingHero() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentFontIndex, setCurrentFontIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 150 // Velocidad de escritura más lenta, borrado rápido
    const pauseAfterComplete = 22000 // Pausa de ~22 segundos después de escribir completo (para totalizar ~30 segundos)
    const pauseAfterDelete = 1000 // Pausa corta después de borrar antes de cambiar fuente

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else {
          // Texto completo, esperar ~22 segundos antes de borrar
          setTimeout(() => {
            setIsDeleting(true)
          }, pauseAfterComplete)
        }
      } else {
        // Borrando
        if (currentIndex > 0) {
          setDisplayedText(text.slice(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        } else {
          // Texto borrado, cambiar fuente y empezar de nuevo
          setTimeout(() => {
            setIsDeleting(false)
            setCurrentFontIndex((prev) => (prev + 1) % fontStyles.length)
          }, pauseAfterDelete)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentIndex, isDeleting, currentFontIndex])

  const currentFont = fontStyles[currentFontIndex]

  return (
    <h1 
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[2.6rem] font-semibold tracking-tight text-balance ${currentFont.className} transition-all duration-500`}
      style={currentFont.style}
    >
      {displayedText}
      <span 
        className="inline-block w-[2px] h-[0.9em] bg-foreground ml-1 align-middle animate-blink"
        aria-hidden="true"
      />
      <style jsx>{`
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </h1>
  )
}

