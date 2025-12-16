import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black text-white">
      {/* Bloque superior: gris oscuro con links y logo en blanco */}
      <div className="bg-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3 sm:space-y-4">
              <Image
                src="/NMHN.png"
                alt="NMHN"
                width={80}
                height={26}
                className="h-5 sm:h-6 w-auto object-contain mb-2 brightness-0 invert"
              />
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Empresa tecnológica orientada a impulsar el mercado digital en Honduras.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white">Navegación</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/#inicio" className="text-zinc-300 transition-colors hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/#servicios" className="text-zinc-300 transition-colors hover:text-white">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/#como-trabajamos" className="text-zinc-300 transition-colors hover:text-white">
                    Cómo trabajamos
                  </Link>
                </li>
                <li>
                  <Link href="/#cotizacion" className="text-zinc-300 transition-colors hover:text-white">
                    Cotización
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-zinc-300 transition-colors hover:text-white">
                    Preguntas frecuentes
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/terminos" className="text-zinc-300 transition-colors hover:text-white">
                    Términos y condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="text-zinc-300 transition-colors hover:text-white">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/devolucion" className="text-zinc-300 transition-colors hover:text-white">
                    Política de devolución
                  </Link>
                </li>
                <li>
                  <Link href="/medios-pago" className="text-zinc-300 transition-colors hover:text-white">
                    Medios de pago
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white">Contacto</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <p className="text-zinc-300">+504 9279-0292</p>
                </li>
                <li>
                  <p className="text-zinc-300">info@netmarkethn.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bloque inferior: gris oscuro */}
      <div className="border-t border-zinc-800 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 space-y-2 text-center text-xs sm:text-sm">
          <p className="text-zinc-400">&copy; 2025 NETMARKETHN LLC. Todos los derechos reservados.</p>
          <p className="text-[10px] sm:text-xs text-zinc-500 max-w-4xl mx-auto leading-relaxed">
            NMHN es una empresa tecnológica especializada en desarrollo de software, servicios web y soluciones digitales.
            Todos los servicios ofrecidos están orientados a facilitar la transformación digital de empresas y profesionales en Honduras.
          </p>
        </div>
      </div>
    </footer>
  )
}
