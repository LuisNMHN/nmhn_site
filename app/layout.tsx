import type React from "react"
import type { Metadata } from "next"
// <CHANGE> Changed font to Inter for a more fintech/professional look
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

// <CHANGE> Updated font to Inter
const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata for NMHN
export const metadata: Metadata = {
  title: "NMHN - Impulsando el mercado digital de Honduras",
  description:
    "Empresa tecnológica orientada a impulsar el mercado digital en Honduras, conectando a emprendedores, negocios y usuarios con soluciones modernas y accesibles.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png?v=2",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.ico?v=2",
      },
    ],
    shortcut: "/favicon-32x32.png?v=2",
    apple: "/favicon-32x32.png?v=2",
  },
}

// Viewport configuration for responsive design
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="shortcut icon" href="/favicon-32x32.png?v=2" />
        <link rel="apple-touch-icon" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
