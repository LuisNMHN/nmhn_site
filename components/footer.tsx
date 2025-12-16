import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-teal/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 sm:space-y-4">
            <Image
              src="/NMHN.png"
              alt="NMHN"
              width={80}
              height={26}
              className="h-5 sm:h-6 w-auto object-contain mb-2 grayscale"
            />
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Empresa tecnológica orientada a impulsar el mercado digital en Honduras.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Navegación</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#inicio" className="text-muted-foreground transition-colors hover:text-foreground">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="text-muted-foreground transition-colors hover:text-foreground">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#como-trabajamos" className="text-muted-foreground transition-colors hover:text-foreground">
                  Cómo trabajamos
                </Link>
              </li>
              <li>
                <Link href="/#cotizacion" className="text-muted-foreground transition-colors hover:text-foreground">
                  Cotización
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground transition-colors hover:text-foreground">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/terminos" className="text-muted-foreground transition-colors hover:text-foreground">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-muted-foreground transition-colors hover:text-foreground">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/devolucion" className="text-muted-foreground transition-colors hover:text-foreground">
                  Política de devolución
                </Link>
              </li>
              <li>
                <Link href="/medios-pago" className="text-muted-foreground transition-colors hover:text-foreground">
                  Medios de pago
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contacto" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contáctanos
                </Link>
              </li>
              <li>
                <p className="text-muted-foreground">+504 9279-0292</p>
              </li>
              <li>
                <p className="text-muted-foreground">info@netmarkethn.com</p>
              </li>
            </ul>
          </div>
        </div>

                <div className="mt-8 sm:mt-12 border-t border-border pt-6 sm:pt-8 space-y-2 text-center text-xs sm:text-sm text-muted-foreground">
                  <p>&copy; 2025 NETMARKETHN LLC. Todos los derechos reservados.</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground/70 max-w-4xl mx-auto leading-relaxed">
                    NMHN es una empresa tecnológica especializada en desarrollo de software, servicios web y soluciones digitales. Todos los servicios ofrecidos están orientados a facilitar la transformación digital de empresas y profesionales en Honduras.
                  </p>
                </div>
      </div>
    </footer>
  )
}
