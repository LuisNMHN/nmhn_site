import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 sm:space-y-4">
            <span className="text-base sm:text-lg font-bold">
              NMHN <span className="text-teal">Pay</span>
            </span>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Servicios electrónicos de pago para emprendedores, freelancers y consultores hondureños.
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
                <Link href="/#precios" className="text-muted-foreground transition-colors hover:text-foreground">
                  Precios
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
                <p className="text-muted-foreground">soporte@netmarkethn.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 border-t border-border pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; 2025 NETMARKETHN LLC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
