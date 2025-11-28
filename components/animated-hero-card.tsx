"use client"

import { useEffect, useState } from "react"
import { CreditCard, CheckCircle2, DollarSign, TrendingUp } from "lucide-react"

export function AnimatedHeroCard() {
  const [mounted, setMounted] = useState(false)
  const [amount, setAmount] = useState(0)
  const [transactions, setTransactions] = useState(0)

  useEffect(() => {
    setMounted(true)

    // Animate amount
    const amountInterval = setInterval(() => {
      setAmount((prev) => {
        if (prev >= 12500) {
          clearInterval(amountInterval)
          return 12500
        }
        return prev + 250
      })
    }, 30)

    // Animate transactions
    const transactionInterval = setInterval(() => {
      setTransactions((prev) => {
        if (prev >= 48) {
          clearInterval(transactionInterval)
          return 48
        }
        return prev + 1
      })
    }, 50)

    return () => {
      clearInterval(amountInterval)
      clearInterval(transactionInterval)
    }
  }, [])

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl animate-pulse" />

      <div className="relative rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl animate-fade-in">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between animate-slide-in-left">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-scale-in shrink-0">
              <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">NMHN Pay</div>
          </div>

          {/* Amount Display */}
          <div className="space-y-1 sm:space-y-2 animate-slide-in-left animation-delay-200">
            <div className="text-xs sm:text-sm text-muted-foreground">Total recaudado</div>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight">
              L {mounted ? amount.toLocaleString("es-HN") : "0"}.00
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="rounded-lg border border-border bg-background p-3 sm:p-4 animate-slide-in-bottom animation-delay-400">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent shrink-0" />
                <div className="text-[10px] sm:text-xs text-muted-foreground">Transacciones</div>
              </div>
              <div className="text-lg sm:text-xl font-bold">{mounted ? transactions : "0"}</div>
            </div>

            <div className="rounded-lg border border-border bg-background p-3 sm:p-4 animate-slide-in-bottom animation-delay-500">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent shrink-0" />
                <div className="text-[10px] sm:text-xs text-muted-foreground">Exitosas</div>
              </div>
              <div className="text-lg sm:text-xl font-bold">100%</div>
            </div>
          </div>

          {/* Payment Link Card */}
          <div className="rounded-lg border border-border bg-gradient-to-br from-background to-muted/50 p-4 animate-slide-in-right animation-delay-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-primary animate-bounce-subtle" />
                <div className="text-sm font-medium">Enlace de pago activo</div>
              </div>
              <CheckCircle2 className="h-5 w-5 text-accent animate-scale-in animation-delay-700" />
            </div>
          </div>

          {/* Progress bars */}
          <div className="space-y-3">
            <div className="space-y-2 animate-slide-in-left animation-delay-800">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Configuración</span>
                <span>100%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-accent animate-fill-bar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
