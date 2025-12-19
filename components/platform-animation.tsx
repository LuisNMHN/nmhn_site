"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { 
  Zap, 
  Users, 
  BarChart3, 
  Shield, 
  Globe,
  ShoppingCart,
  Smartphone,
  Cloud,
  Database,
  Network,
  Store,
  TrendingUp,
  Server,
  ShoppingBag,
  Globe2,
  Package,
  Box
} from "lucide-react"

export function PlatformAnimation() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; duration: string }>>([])

  const techIcons = [
    { icon: Smartphone, label: "Móvil", color: "text-blue-500", delay: "0s", speed: "8s" },
    { icon: Cloud, label: "Nube", color: "text-cyan-500", delay: "0.5s", speed: "10s" },
    { icon: Database, label: "Datos", color: "text-indigo-500", delay: "1s", speed: "12s" },
    { icon: Network, label: "Red", color: "text-purple-500", delay: "1.5s", speed: "9s" },
    { icon: Server, label: "Servidor", color: "text-violet-500", delay: "2s", speed: "11s" },
  ]

  const commerceIcons = [
    { icon: ShoppingCart, label: "Comercio en línea", color: "text-green-500", delay: "0.3s", speed: "9s" },
    { icon: Globe2, label: "Páginas web", color: "text-emerald-500", delay: "0.8s", speed: "11s" },
    { icon: Box, label: "Mercado electrónico", color: "text-teal-500", delay: "1.3s", speed: "10s" },
    { icon: ShoppingBag, label: "E-commerce", color: "text-lime-500", delay: "1.8s", speed: "8s" },
    { icon: Package, label: "Ventas digitales", color: "text-green-600", delay: "2.3s", speed: "12s" },
  ]

  // Generar partículas solo en el cliente para evitar problemas de hidratación
  useEffect(() => {
    const generatedParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 2}s`,
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <div className="relative w-full max-w-md mx-auto h-[350px] sm:h-[400px] lg:h-[450px] rounded-xl border border-black bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Fondo animado con partículas */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal/20 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>


      {/* Elementos flotantes interactivos */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          {/* Círculo central animado */}
          <div className="absolute inset-0 rounded-full border-2 border-teal/30 animate-spin-slow">
            <div className="absolute inset-2 rounded-full border border-teal/20 animate-spin-slow-reverse" />
          </div>

          {/* Logo NMHN central */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/android-chrome-512x512.png"
                alt="NMHN Logo"
                width={80}
                height={80}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Iconos de tecnología - movimiento circular con fade */}
      {techIcons.map((item, index) => {
        const Icon = item.icon
        return (
          <div
            key={`tech-${index}`}
            className="absolute group cursor-pointer"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              animation: `orbit-tech-${index} ${item.speed} linear infinite, fade-tech-${index} ${item.speed} ease-in-out infinite`,
              animationDelay: item.delay,
            }}
            onMouseEnter={() => setHovered(`tech-${index}`)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`relative transition-all duration-300 ${
                hovered === `tech-${index}` ? "scale-125" : "scale-100"
              }`}
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center shadow-lg transition-all duration-300 ${
                  hovered === `tech-${index}` ? "border-teal shadow-teal/20" : ""
                }`}
              >
                <Icon
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                    hovered === `tech-${index}` ? item.color : "text-muted-foreground"
                  }`}
                />
              </div>
              {hovered === `tech-${index}` && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10">
                  <span className="text-xs font-medium text-foreground bg-background/90 backdrop-blur-sm px-2 py-1 rounded border border-border">
                    {item.label}
                  </span>
                </div>
              )}
            </div>
          </div>
        )
      })}

      {/* Iconos de comercio - movimiento elíptico con fade */}
      {commerceIcons.map((item, index) => {
        const Icon = item.icon
        return (
          <div
            key={`commerce-${index}`}
            className="absolute group cursor-pointer"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              animation: `orbit-commerce-${index} ${item.speed} linear infinite, fade-commerce-${index} ${item.speed} ease-in-out infinite`,
              animationDelay: item.delay,
            }}
            onMouseEnter={() => setHovered(`commerce-${index}`)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`relative transition-all duration-300 ${
                hovered === `commerce-${index}` ? "scale-125" : "scale-100"
              }`}
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center shadow-lg transition-all duration-300 ${
                  hovered === `commerce-${index}` ? "border-teal shadow-teal/20" : ""
                }`}
              >
                <Icon
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                    hovered === `commerce-${index}` ? item.color : "text-muted-foreground"
                  }`}
                />
              </div>
              {hovered === `commerce-${index}` && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10">
                  <span className="text-xs font-medium text-foreground bg-background/90 backdrop-blur-sm px-2 py-1 rounded border border-border">
                    {item.label}
                  </span>
                </div>
              )}
            </div>
          </div>
        )
      })}

      {/* Texto descriptivo */}
      <div className="absolute bottom-4 left-0 right-0 text-center px-4">
        <p className="text-xs sm:text-sm text-muted-foreground font-medium">
          Soluciones tecnológicas a la medida
        </p>
      </div>

      <style jsx>{`
        @keyframes orbit-tech-0 {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(100px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }
        @keyframes orbit-tech-1 {
          0% {
            transform: translate(-50%, -50%) rotate(72deg) translateX(100px) rotate(-72deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(432deg) translateX(100px) rotate(-432deg);
          }
        }
        @keyframes orbit-tech-2 {
          0% {
            transform: translate(-50%, -50%) rotate(144deg) translateX(100px) rotate(-144deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(504deg) translateX(100px) rotate(-504deg);
          }
        }
        @keyframes orbit-tech-3 {
          0% {
            transform: translate(-50%, -50%) rotate(216deg) translateX(100px) rotate(-216deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(576deg) translateX(100px) rotate(-576deg);
          }
        }
        @keyframes orbit-tech-4 {
          0% {
            transform: translate(-50%, -50%) rotate(288deg) translateX(100px) rotate(-288deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(648deg) translateX(100px) rotate(-648deg);
          }
        }

        @keyframes orbit-commerce-0 {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(130px) translateY(0px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(130px) translateY(0px) rotate(-360deg);
          }
        }
        @keyframes orbit-commerce-1 {
          0% {
            transform: translate(-50%, -50%) rotate(72deg) translateX(130px) translateY(20px) rotate(-72deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(432deg) translateX(130px) translateY(20px) rotate(-432deg);
          }
        }
        @keyframes orbit-commerce-2 {
          0% {
            transform: translate(-50%, -50%) rotate(144deg) translateX(130px) translateY(-20px) rotate(-144deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(504deg) translateX(130px) translateY(-20px) rotate(-504deg);
          }
        }
        @keyframes orbit-commerce-3 {
          0% {
            transform: translate(-50%, -50%) rotate(216deg) translateX(130px) translateY(10px) rotate(-216deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(576deg) translateX(130px) translateY(10px) rotate(-576deg);
          }
        }
        @keyframes orbit-commerce-4 {
          0% {
            transform: translate(-50%, -50%) rotate(288deg) translateX(130px) translateY(-10px) rotate(-288deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(648deg) translateX(130px) translateY(-10px) rotate(-648deg);
          }
        }

        @keyframes fade-tech-0 {
          0%, 20% { opacity: 0; }
          25%, 75% { opacity: 1; }
          80%, 100% { opacity: 0; }
        }
        @keyframes fade-tech-1 {
          0%, 20% { opacity: 0; }
          25%, 75% { opacity: 1; }
          80%, 100% { opacity: 0; }
        }
        @keyframes fade-tech-2 {
          0%, 20% { opacity: 0; }
          25%, 75% { opacity: 1; }
          80%, 100% { opacity: 0; }
        }
        @keyframes fade-tech-3 {
          0%, 20% { opacity: 0; }
          25%, 75% { opacity: 1; }
          80%, 100% { opacity: 0; }
        }
        @keyframes fade-tech-4 {
          0%, 20% { opacity: 0; }
          25%, 75% { opacity: 1; }
          80%, 100% { opacity: 0; }
        }

        @keyframes fade-commerce-0 {
          0%, 15% { opacity: 0; }
          20%, 70% { opacity: 1; }
          75%, 100% { opacity: 0; }
        }
        @keyframes fade-commerce-1 {
          0%, 15% { opacity: 0; }
          20%, 70% { opacity: 1; }
          75%, 100% { opacity: 0; }
        }
        @keyframes fade-commerce-2 {
          0%, 15% { opacity: 0; }
          20%, 70% { opacity: 1; }
          75%, 100% { opacity: 0; }
        }
        @keyframes fade-commerce-3 {
          0%, 15% { opacity: 0; }
          20%, 70% { opacity: 1; }
          75%, 100% { opacity: 0; }
        }
        @keyframes fade-commerce-4 {
          0%, 15% { opacity: 0; }
          20%, 70% { opacity: 1; }
          75%, 100% { opacity: 0; }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
      `}</style>
    </div>
  )
}

