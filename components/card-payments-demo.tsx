"use client"

import { useEffect, useState } from "react"
import { CreditCard, CheckCircle2, ArrowUpRight } from "lucide-react"

const transactions = [
  { id: 1, customer: "María González", amount: 2500, service: "Consultoría Web", status: "completed" },
  { id: 2, customer: "Carlos Martínez", amount: 1800, service: "Diseño Gráfico", status: "completed" },
  { id: 3, customer: "Ana Rodríguez", amount: 3200, service: "Desarrollo App", status: "processing" },
]

export function CardPaymentsDemo() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % transactions.length)
        setIsVisible(true)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const transaction = transactions[currentIndex]

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-primary/20 blur-3xl animate-pulse" />

      <div className="relative rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-8 shadow-2xl">
        <div className="space-y-4 lg:space-y-5">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-gradient-to-br from-teal to-teal/70 flex items-center justify-center shrink-0">
                <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-semibold">Cobros con Tarjeta</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">Procesamiento seguro</div>
              </div>
            </div>
            <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-teal/10 flex items-center justify-center animate-pulse shrink-0">
              <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 text-teal" />
            </div>
          </div>

          {/* Transaction Card */}
          <div
            className={`rounded-lg border border-border bg-gradient-to-br from-background to-muted/50 p-3 sm:p-4 transition-all duration-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="font-medium text-xs sm:text-sm truncate">{transaction.customer}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground truncate">{transaction.service}</div>
                </div>
                {transaction.status === "completed" ? (
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-teal animate-scale-in shrink-0" />
                ) : (
                  <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full border-2 border-teal border-t-transparent animate-spin shrink-0" />
                )}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border/50">
                <div className="text-[10px] sm:text-xs text-muted-foreground">Monto</div>
                <div className="text-base sm:text-lg font-bold text-teal">L {transaction.amount.toLocaleString("es-HN")}</div>
              </div>
            </div>
          </div>

          {/* Card Info */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="flex-1 h-1 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-gradient-to-r from-teal to-primary animate-fill-bar" />
            </div>
            <span>Visa •••• 4242</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-2">
            <div className="text-center p-1.5 sm:p-2 rounded-lg bg-muted/50">
              <div className="text-[10px] sm:text-xs text-muted-foreground">Hoy</div>
              <div className="text-xs sm:text-sm font-bold">{currentIndex + 1}</div>
            </div>
            <div className="text-center p-1.5 sm:p-2 rounded-lg bg-muted/50">
              <div className="text-[10px] sm:text-xs text-muted-foreground">Total</div>
              <div className="text-xs sm:text-sm font-bold">{transactions.length}</div>
            </div>
            <div className="text-center p-1.5 sm:p-2 rounded-lg bg-muted/50">
              <div className="text-[10px] sm:text-xs text-muted-foreground">Tasa</div>
              <div className="text-xs sm:text-sm font-bold">100%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
