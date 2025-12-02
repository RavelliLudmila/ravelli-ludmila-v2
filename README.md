# Portfolio Personal - Ludmila Ravelli v2

Portfolio profesional de **Ludmila Ravelli**, desarrolladora frontend especializada en la creación de interfaces claras, estéticas y centradas en la experiencia del usuario.

## 🎯 Descripción del Proyecto

Este portfolio es una aplicación web moderna que presenta mi trayectoria profesional, habilidades técnicas y proyectos destacados. El sitio está diseñado con un enfoque en la narrativa visual, interacciones fluidas y una arquitectura de código limpia y mantenible.

### Características principales:

-   **Hero Section interactiva** con efectos de texto animado y seguimiento del cursor
-   **Sistema de navegación smooth** con scroll por secciones (desktop) y navegación tradicional (mobile)
-   **Tema claro/oscuro** con transiciones suaves y persistencia de preferencias
-   **Secciones organizadas**: About, Experience, Skills, Projects y Contact
-   **Timeline de experiencia** con modales informativos
-   **Carousel de proyectos** con navegación por teclado y arrastre
-   **Animaciones con Framer Motion** para una experiencia fluida y profesional
-   **Sistema de notificaciones** para feedback de formulario de contacto
-   **Diseño responsive** optimizado para todos los dispositivos
-   **Efecto de cursor glow** en desktop para mayor interactividad

## 🛠️ Tecnologías Utilizadas

### Core

-   **Next.js 16.0** - Framework React con App Router
-   **React 19.2** - Biblioteca de interfaz de usuario
-   **TypeScript 5** - Tipado estático para mayor robustez

### Estilos y UI

-   **Tailwind CSS 3.4** - Framework de utilidades CSS
-   **Framer Motion 12** - Biblioteca de animaciones
-   **Radix UI** - Componentes accesibles sin estilos
-   **shadcn/ui** - Componentes reutilizables (Button, Card, Carousel, Input)
-   **Lucide React** - Iconos SVG modernos

### Herramientas

-   **class-variance-authority** - Gestión de variantes de componentes
-   **clsx / tailwind-merge** - Utilidades para clases CSS
-   **Embla Carousel** - Motor de carousel fluido y accesible
-   **ESLint 9** - Linting de código

## 📂 Estructura del Proyecto

```
src/
├── app/                      # App Router de Next.js
│   ├── globals.css          # Estilos globales y variables CSS
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página principal (home)
│   └── not-found.tsx        # Página 404
│
├── components/              # Componentes React
│   ├── HeroSection.tsx      # Sección hero con animaciones
│   ├── AboutSection.tsx     # Información personal
│   ├── ExperienceSection.tsx # Timeline de experiencia
│   ├── SkillsSection.tsx    # Habilidades técnicas
│   ├── ProjectsSection.tsx  # Showcase de proyectos
│   ├── ContactSection.tsx   # Formulario de contacto
│   ├── NavBar.tsx           # Navegación desktop
│   ├── MobileNavBar.tsx     # Navegación mobile
│   ├── CursorGlow.tsx       # Efecto de cursor personalizado
│   ├── ThemeToggle.tsx      # Selector de tema
│   ├── theme-provider.tsx   # Proveedor de contexto de tema
│   ├── SectionWheelNavigator.tsx # Navegación por scroll
│   │
│   ├── experience/          # Componentes de experiencia
│   │   ├── ExperienceCard.tsx
│   │   ├── ExperienceModal.tsx
│   │   ├── ExperienceTimeline.tsx
│   │   └── ExperienceTimelineMd.tsx
│   │
│   ├── projects/            # Componentes de proyectos
│   │   ├── ProjectsCarousel.tsx
│   │   └── ProjectsSlides.tsx
│   │
│   ├── contact/             # Componentes de contacto
│   │   └── Notification.tsx
│   │
│   └── ui/                  # Componentes UI base (shadcn)
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       └── input.tsx
│
├── context/                 # Contextos de React
│   └── ContactContext.tsx   # Estado global de contacto
│
├── helpers/                 # Funciones auxiliares
│   └── skills.helpers.ts    # Helpers para skills
│
└── lib/                     # Utilidades
    └── utils.ts             # Funciones de utilidad
```

## 🚀 Instalación y Uso

### Prerrequisitos

-   Node.js 20 o superior
-   npm, yarn, pnpm o bun

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/RavelliLudmila/ravelli-ludmila-v2.git

# Navegar al directorio
cd ravelli-ludmila-v2

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### Producción

```bash
# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start
```

### Linting

```bash
# Ejecutar ESLint
npm run lint
```

## 🎨 Personalización

### Tema y Colores

Los colores y variables de tema se definen en `src/app/globals.css`. El sistema soporta temas claro y oscuro con variables CSS personalizables:

```css
--primary, --secondary, --accent, --background, --foreground, etc.
```

### Componentes

Todos los componentes son modulares y reutilizables. Los componentes UI base en `src/components/ui/` siguen el patrón de shadcn/ui y pueden personalizarse fácilmente.

## 📱 Características Responsive

-   **Desktop**: Navegación por scroll con wheel, efectos de cursor, animaciones complejas
-   **Tablet/Mobile**: Navegación tradicional, scroll nativo, interfaz táctil optimizada
-   **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

## 🌐 Deploy

El proyecto está optimizado para deployment en [Vercel](https://vercel.com/), aunque puede desplegarse en cualquier plataforma que soporte Next.js.

```bash
# Deploy automático conectando tu repositorio a Vercel
# O usar Vercel CLI
vercel
```

## 📄 Licencia

Este proyecto es de código privado. © 2025 Ludmila Ravelli

## 📧 Contacto

**Ludmila Ravelli**  
Frontend Developer | UX/UI  
lud.ravelli@gmail.com  
[LinkedIn](https://linkedin.com/in/ravelliludmila)  
[GitHub](https://github.com/RavelliLudmila)  
[CV](https://drive.google.com/file/d/1eE1eBSVf2tWnTStqK_yMarq4FaYS_6YM/view?usp=sharing)  
Santa Fe Capital, Argentina

---

_Versión 2.0.0 - Diciembre 2025_
