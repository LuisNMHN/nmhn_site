# NMHN

![NMHN](https://img.shields.io/badge/NMHN-Tecnología-teal?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## 📋 Descripción

**NMHN** es una empresa tecnológica orientada a impulsar el mercado digital en Honduras. Desarrollamos soluciones y herramientas que buscan facilitar la transición hacia modelos más modernos de comercio, colaboración y presencia en línea, siempre con un enfoque responsable y adaptado a la realidad hondureña.

Nuestro objetivo es acompañar a emprendedores, profesionales y pequeñas empresas en su camino hacia la economía digital.

### ⚠️ Importante

**NMHN no es una entidad financiera ni ofrece servicios bancarios.**  
No opera como billetera electrónica, no realiza cambio de divisas, no gestiona pagos ni opera como pasarela.  
Nuestro enfoque está en el desarrollo de tecnología y herramientas digitales para fortalecer el mercado digital hondureño.

## 🎯 Objetivo

El objetivo de NMHN es proporcionar soluciones tecnológicas que:

- Fortalezcan la presencia en línea de emprendedores y negocios
- Faciliten la conexión entre oferta y demanda en el entorno digital
- Creen espacios y herramientas para aprovechar mejor las oportunidades del mercado moderno
- Contribuyan al desarrollo tecnológico de Honduras

## 🚀 Características Principales

- ✅ **Plataforma tecnológica multiservicios** en constante desarrollo
- ✅ **Diseño moderno y responsive**: Adaptado a cualquier dispositivo
- ✅ **Animaciones interactivas**: Experiencia visual atractiva
- ✅ **Carrusel dinámico**: Presentación visual de servicios
- ✅ **Interfaz profesional**: Diseño limpio y moderno
- ✅ **Navegación intuitiva**: Fácil acceso a todas las secciones

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes UI**: shadcn/ui
- **Iconos**: Lucide React
- **Animaciones**: CSS personalizadas y React hooks

## 📦 Requisitos Previos

Asegúrate de tener instalado:

- **Node.js** 18+
- **npm**, **yarn** o **pnpm**
- **Git**

## 🔧 Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/LuisNMHN/nmhn_pay.git
cd nmhn_pay
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
```

### 3. Variables de entorno (si se requieren)

Crea un archivo `.env.local` si es necesario:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Ejecutar en desarrollo

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

### 5. Abrir en el navegador

```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
nmhn_pay/
├── app/                    # Rutas y páginas
│   ├── contacto/          # Página de contacto
│   ├── terminos/          # Términos y condiciones
│   ├── privacidad/        # Política de privacidad
│   ├── faq/               # Preguntas frecuentes
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/
│   ├── ui/                # Componentes shadcn/ui
│   ├── header.tsx         # Componente header
│   ├── footer.tsx         # Componente footer
│   ├── platform-animation.tsx  # Animación de plataforma
│   └── scroll-to-top.tsx  # Botón scroll to top
├── lib/
├── public/
│   └── NMHN.png           # Logo de NMHN
├── styles/
└── package.json
```

## 🎨 Scripts Disponibles

```bash
npm run dev       # Desarrollo (puerto 3000)
npm run build     # Construir para producción
npm run start     # Ejecutar en producción
npm run lint      # Ejecutar linter
```

## 📄 Páginas Incluidas

### `/` → Página principal
- **Hero**: Presentación principal con animación interactiva
- **Sobre nosotros**: Información sobre NMHN
- **Lo que hacemos**: Carrusel con soluciones digitales
- **Plataforma en constante desarrollo**: Estado y evolución
- **Preguntas frecuentes**: FAQ interactivo

### `/contacto` → Formulario de contacto
- Formulario con validaciones
- Información de contacto
- Horarios de atención

### `/terminos` → Términos y Condiciones
- Términos de uso completos
- Última actualización: 28 de noviembre de 2025

### `/privacidad` → Política de Privacidad
- Política de protección de datos
- Última actualización: 28/11/2025

### `/faq` → Preguntas Frecuentes
- Preguntas y respuestas sobre NMHN
- Diseño en acordeón

## 🎨 Características de Diseño

- **Responsive**: Diseño adaptativo para móvil, tablet y desktop
- **Animaciones**: Efectos visuales dinámicos y atractivos
- **Carrusel automático**: Rotación automática cada 5 segundos
- **Tema claro/oscuro**: Soporte para modo oscuro
- **Navegación suave**: Scroll suave entre secciones
- **Botón scroll to top**: Aparece al hacer scroll

## 🔒 Seguridad y Privacidad

NMHN está comprometido con la protección de los datos del usuario:

- Cifrado de datos en tránsito
- Control de acceso basado en roles
- Monitoreo de actividad inusual
- Auditorías periódicas
- Protocolos de detección y prevención de fraude digital

Para más información, consulta:
- [Política de Privacidad](/privacidad)
- [Términos y Condiciones](/terminos)

## 📞 Contacto

- **Email**: info@netmarkethn.com
- **Soporte**: soporte@netmarkethn.com
- **Teléfono**: +504 9279-0292
- **Horario**: Lunes a Viernes, de 8:00 AM a 6:00 PM

## 📝 Licencia

Este proyecto es propiedad de **NETMARKETHN LLC**.  
© 2025 Todos los derechos reservados.

## 🤝 Contribuciones

Este proyecto es privado.  
Para consultas sobre colaboraciones, comuníquese mediante los canales oficiales.

## 🚧 Estado del Proyecto

NMHN se encuentra en una fase de desarrollo y validación.  
La plataforma evoluciona de forma continua, desarrollando soluciones digitales que respondan a las necesidades reales del mercado hondureño.

## ⚡ Próximas Funcionalidades

- Herramientas digitales para emprendedores
- Soluciones para fortalecer la presencia en línea
- Funcionalidades premium (cuando estén disponibles)
- Integraciones con servicios externos
- Nuevas herramientas tecnológicas

## 📊 Versión

Versión actual: 1.0.0

---

**NMHN** - Empresa tecnológica orientada a impulsar el mercado digital en Honduras.
