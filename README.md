# NMHN Pay

![NMHN Pay](https://img.shields.io/badge/NMHN-Pay-teal?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## 📋 Descripción

**NMHN Pay** es una plataforma digital que ofrece herramientas para apoyar a emprendedores, freelancers y consultores hondureños en la gestión de sus servicios profesionales. La plataforma facilita la creación de solicitudes de cobro digitales, la administración de actividades y el acceso a funciones diseñadas para impulsar su crecimiento.

### ⚠️ Importante

**NMHN Pay no es una entidad financiera ni ofrece servicios bancarios.** No opera como billetera electrónica, no realiza cambio de divisas y no presta servicios de envío de dinero. Nuestro enfoque es brindar herramientas tecnológicas y funcionalidades digitales que complementan la actividad comercial de nuestros usuarios.

## 🎯 Objetivo

El objetivo de NMHN Pay es proporcionar una solución tecnológica accesible para que emprendedores, freelancers y consultores hondureños puedan:

- **Gestionar cobros digitales** de manera sencilla y profesional
- **Crear solicitudes de cobro** personalizadas para sus servicios
- **Administrar sus actividades** comerciales desde un panel centralizado
- **Acceder a funciones premium** mediante el sistema de créditos HNLD
- **Impulsar su crecimiento** con herramientas diseñadas específicamente para el mercado hondureño

## 🚀 Características Principales

- ✅ **Solicitudes de cobro digitales**: Crea y gestiona solicitudes de pago de forma sencilla
- ✅ **Panel de administración**: Gestiona tus servicios profesionales desde un solo lugar
- ✅ **Sistema de créditos HNLD**: Accede a funciones premium mediante créditos internos
- ✅ **Diseño responsive**: Optimizado para cualquier dispositivo
- ✅ **Interfaz moderna**: UI/UX diseñada con las mejores prácticas
- ✅ **Seguridad**: Implementación de estándares de seguridad PCI-DSS para procesamiento de pagos

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes UI**: shadcn/ui
- **Iconos**: Lucide React
- **Animaciones**: CSS personalizado

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** 18.0 o superior
- **npm** o **yarn** o **pnpm** como gestor de paquetes
- **Git** para clonar el repositorio

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

### 3. Configurar variables de entorno (si es necesario)

Crea un archivo `.env.local` en la raíz del proyecto si necesitas configurar variables de entorno:

```env
# Ejemplo de variables de entorno (ajustar según necesidades)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Ejecutar el servidor de desarrollo

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

### 5. Abrir en el navegador

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 📁 Estructura del Proyecto

```
nmhn_pay/
├── app/                    # Páginas y rutas de Next.js
│   ├── contacto/          # Página de contacto
│   ├── terminos/          # Términos y condiciones
│   ├── privacidad/        # Política de privacidad
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/             # Componentes React
│   ├── ui/                # Componentes UI (shadcn/ui)
│   ├── header.tsx         # Header/Navegación
│   ├── footer.tsx         # Footer
│   └── ...                # Otros componentes
├── lib/                   # Utilidades y helpers
├── public/                # Archivos estáticos
├── styles/                # Estilos adicionales
└── package.json           # Dependencias del proyecto
```

## 🎨 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run start        # Inicia el servidor de producción

# Utilidades
npm run lint         # Ejecuta el linter
```

## 📄 Páginas Incluidas

- **Página Principal** (`/`): Landing page con todas las secciones
  - Hero section
  - Sobre NMHN Pay
  - Servicios
  - Cómo funciona
  - Créditos internos (HNLD)
  - Planes y precios
  - Por qué elegirnos
  - Preguntas frecuentes (FAQ)
  - Call to action

- **Contacto** (`/contacto`): Formulario de contacto con validaciones

- **Términos y Condiciones** (`/terminos`): Términos de uso de la plataforma

- **Política de Privacidad** (`/privacidad`): Política de privacidad y protección de datos

## 🔒 Seguridad y Privacidad

NMHN Pay está comprometido con la seguridad y privacidad de los usuarios:

- **Procesamiento de pagos**: Utilizamos proveedores externos certificados (PCI-DSS)
- **No almacenamos datos sensibles**: No guardamos información completa de tarjetas de pago
- **Cifrado de datos**: Implementamos cifrado de datos en tránsito
- **Acceso restringido**: Control de acceso basado en roles
- **Monitoreo continuo**: Auditorías regulares y detección de fraude

Para más información, consulta nuestra [Política de Privacidad](/privacidad) y [Términos y Condiciones](/terminos).

## 📞 Contacto

Para consultas, soporte o más información:

- **Email**: soporte@netmarkethn.com
- **Teléfono**: +504 9279-0292
- **Horario**: Lunes - Viernes: 8:00 AM - 6:00 PM

## 📝 Licencia

Este proyecto es propiedad de **NETMARKETHN LLC**. Todos los derechos reservados.

© 2025 NETMARKETHN LLC. Todos los derechos reservados.

## 🤝 Contribuciones

Actualmente, este es un proyecto privado. Para consultas sobre contribuciones o colaboraciones, por favor contacta a través de los canales oficiales mencionados arriba.

## 📚 Documentación Adicional

- [Términos y Condiciones](/terminos)
- [Política de Privacidad](/privacidad)
- [Preguntas Frecuentes](/#faq)

## 🚧 Estado del Proyecto

Este proyecto se encuentra en desarrollo activo. Algunas funcionalidades pueden estar en construcción y estarán disponibles próximamente.

## ⚡ Próximas Funcionalidades

- [ ] Sistema de autenticación de usuarios
- [ ] Panel de administración completo
- [ ] Integración con pasarelas de pago
- [ ] Sistema de créditos HNLD funcional
- [ ] API para integraciones externas

## 📊 Versión

**Versión actual**: 1.0.0

---

**Desarrollado con ❤️ para emprendedores hondureños**

Para más información, visita nuestro sitio web o contáctanos a través de los canales oficiales.

