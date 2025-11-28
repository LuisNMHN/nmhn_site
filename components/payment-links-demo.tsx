"use client"

import { useEffect, useState } from "react"
import { Link2, Copy, CheckCircle2, Clock, ExternalLink } from "lucide-react"

const paymentLinks = [
  {
    id: 1,
    title: "Consultoría Marketing Digital",
    amount: 5000,
    url: "nmhn.pay/link/mkt-2024",
    status: "active",
    views: 12,
  },
  {
    id: 2,
    title: "Desarrollo Web E-commerce",
    amount: 15000,
    url: "nmhn.pay/link/web-dev-3",
    status: "pending",
    views: 8,
  },
  {
    id: 3,
    title: "Diseño de Logo Premium",
    amount: 3500,
    url: "nmhn.pay/link/logo-design",
    status: "paid",
    views: 24,
  },
]

export function PaymentLinksDemo() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % paymentLinks.length)
        setIsVisible(true)
        setCopied(false)
      }, 300)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  const link = paymentLinks[currentIndex]

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl animate-pulse" />

      <div className="relative rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-8 shadow-2xl">
        <div className="space-y-4 lg:space-y-5">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                <Link2 className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-semibold">Enlaces de Pago</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">Generación instantánea</div>
              </div>
            </div>
            <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary/10 flex items-center justify-center animate-pulse shrink-0">
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            </div>
          </div>

          {/* Payment Link Card */}
          <div
            className={`rounded-lg border border-border bg-gradient-to-br from-background to-muted/50 p-3 sm:p-4 transition-all duration-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            <div className="space-y-2 sm:space-y-3">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="font-medium text-xs sm:text-sm line-clamp-1 flex-1 min-w-0">{link.title}</div>
                  <div
                    className={`inline-flex items-center rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs font-medium shrink-0 ${
                      link.status === "paid"
                        ? "bg-teal/10 text-teal"
                        : link.status === "active"
                          ? "bg-primary/10 text-primary"
                          : "bg-yellow-500/10 text-yellow-600"
                    }`}
                  >
                    {link.status === "paid" ? (
                      <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-0.5 sm:mr-1" />
                    ) : (
                      <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-0.5 sm:mr-1" />
                    )}
                    <span className="hidden sm:inline">{link.status === "paid" ? "Pagado" : link.status === "active" ? "Activo" : "Pendiente"}</span>
                    <span className="sm:hidden">{link.status === "paid" ? "P" : link.status === "active" ? "A" : "P"}</span>
                  </div>
                </div>

                <div className="text-xl sm:text-2xl font-bold text-primary">L {link.amount.toLocaleString("es-HN")}</div>
              </div>

              {/* Link URL */}
              <div
                onClick={handleCopy}
                className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-lg bg-muted hover:bg-muted/70 transition-colors cursor-pointer group"
              >
                <Link2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground group-hover:text-teal transition-colors shrink-0" />
                <div className="flex-1 text-xs sm:text-sm font-mono text-muted-foreground truncate">{link.url}</div>
                {copied ? (
                  <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-teal animate-scale-in shrink-0" />
                ) : (
                  <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                )}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-[10px] sm:text-xs text-muted-foreground pt-2 border-t border-border/50">
                <div className="flex items-center gap-1">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-teal animate-pulse" />
                  <span>{link.views} vistas</span>
                </div>
                <div className="text-[10px] sm:text-xs">Creado hace 2 días</div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            <div className="text-center p-1.5 sm:p-2 rounded-lg bg-muted/50">
              <div className="text-[10px] sm:text-xs text-muted-foreground">Enlaces</div>
              <div className="text-xs sm:text-sm font-bold">{paymentLinks.length}</div>
            </div>
            <div className="text-center p-1.5 sm:p-2 rounded-lg bg-muted/50">
              <div className="text-[10px] sm:text-xs text-muted-foreground">Activos</div>
              <div className="text-xs sm:text-sm font-bold">2</div>
            </div>
            <div className="text-center p-1.5 sm:p-2 rounded-lg bg-muted/50">
              <div className="text-[10px] sm:text-xs text-muted-foreground">Pagados</div>
              <div className="text-xs sm:text-sm font-bold">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
