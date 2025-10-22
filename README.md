# E-Commerce Application

Una aplicación moderna de E-Commerce desarrollada con las siguientes tecnologías:

- **TypeScript** - Para un desarrollo type-safe y mejor mantenibilidad
- **React** - Framework de UI moderno y reactivo
- **Tailwind CSS** - Estilos utilitarios para un diseño responsive
- **Next.js** - Framework de React con renderizado del lado del servidor

## ✨ Características

- 🏠 **Página de inicio** con productos destacados y categorías
- 🛍️ **Catálogo de productos** con filtrado y búsqueda
- 🔍 **Búsqueda en tiempo real** de productos
- 📂 **Filtrado por categoría** (Electronics, Clothing, Books, Home & Garden)
- 🔄 **Ordenamiento** por nombre y precio
- 📱 **Diseño responsive** que se adapta a móviles, tablets y desktop
- 🎨 **UI moderna** con Tailwind CSS
- 📄 **Páginas de detalle** de producto individuales
- 🛒 **Carrito de compras** (funcionalidad básica)
- 🧭 **Navegación intuitiva** con header y footer

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start

# Ejecutar linter
npm run lint
```

## 📁 Estructura del Proyecto

```
E-Commerce/
├── app/                    # Páginas de Next.js (App Router)
│   ├── page.tsx           # Página de inicio
│   ├── layout.tsx         # Layout principal
│   ├── products/          # Páginas de productos
│   │   ├── page.tsx       # Lista de productos
│   │   └── [id]/          # Detalle de producto
│   └── cart/              # Carrito de compras
├── components/            # Componentes React reutilizables
│   ├── Header.tsx        # Navegación principal
│   ├── Footer.tsx        # Pie de página
│   └── ProductCard.tsx   # Tarjeta de producto
├── data/                  # Datos de la aplicación
│   └── products.ts       # Catálogo de productos
├── lib/                   # Utilidades y tipos
│   └── types.ts          # Definiciones de TypeScript
└── public/               # Archivos estáticos
```

## 🛠️ Tecnologías Utilizadas

### Core
- **Next.js 16.0.0** - Framework React con App Router
- **React 19.2.0** - Librería de UI
- **TypeScript 5** - Tipado estático

### Estilos
- **Tailwind CSS 4** - Framework CSS utilitario
- **PostCSS** - Procesador de CSS

### Desarrollo
- **ESLint** - Linting de código
- **eslint-config-next** - Configuración de ESLint para Next.js

## 📝 Características de Desarrollo

### TypeScript
Toda la aplicación está escrita en TypeScript con tipos estrictos para:
- Productos (`Product`)
- Items del carrito (`CartItem`)
- Categorías (`Category`)

### Componentes
- **Header**: Navegación responsive con menú móvil
- **Footer**: Enlaces útiles y información de la empresa
- **ProductCard**: Tarjeta de producto con imagen, precio y stock

### Páginas
- **Home** (`/`): Página principal con productos destacados
- **Products** (`/products`): Catálogo completo con filtros
- **Product Detail** (`/products/[id]`): Detalles del producto
- **Cart** (`/cart`): Carrito de compras

## 🎨 Diseño

La aplicación utiliza un esquema de colores moderno:
- Azul primario (`#2563EB`) para acciones principales
- Grises para texto y backgrounds
- Verde para indicadores de stock
- Diseño responsive con breakpoints de Tailwind

## 📱 Responsive Design

La aplicación está optimizada para:
- **Móvil**: Grid de 1 columna
- **Tablet**: Grid de 2 columnas
- **Desktop**: Grid de 3-4 columnas

## 🚀 Deployment

La aplicación puede ser desplegada en:
- [Vercel](https://vercel.com) (recomendado)
- [Netlify](https://netlify.com)
- Cualquier plataforma que soporte Next.js

```bash
npm run build
npm start
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso en portfolio.

---

Desarrollado con ❤️ usando Next.js, TypeScript, React y Tailwind CSS
