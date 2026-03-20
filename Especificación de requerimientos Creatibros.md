

| CREATIBROS Agencia Creativa · Fotografía & Video Especificación de Requerimientos de Software Versión 1.1  ·  Marzo 2025 |
| :---: |

| Proyecto | Sitio Web Creatibros |
| :---- | :---- |

| Versión | 1.1 |
| :---- | :---- |

| Estado | Borrador – en revisión |
| :---- | :---- |

| Stack tecnológico | Next.js · Vercel (gratis) · Cloudinary (gratis) |
| :---- | :---- |

| Repositorio | GitHub (deploy automático vía Vercel) |
| :---- | :---- |

| Backend / BD | Sin backend en v1. Supabase reservado para v2 (panel admin) |
| :---- | :---- |

| Dominio inicial | creatibros.vercel.app (subdominio gratuito de Vercel) |
| :---- | :---- |

| 1\.  Introducción |
| :---- |

## **1.1 Propósito**

Este documento define los requerimientos funcionales y no funcionales para el desarrollo del sitio web de Creatibros, agencia creativa especializada en fotografía y producción audiovisual. El sitio cumple tres objetivos principales:

* Portafolio profesional visible online

* Canal de captación de clientes

* Medio de posicionamiento digital

## **1.2 Alcance**

El sistema es una aplicación web moderna y responsive (Next.js), desplegada gratuitamente en Vercel mediante integración con GitHub. No requiere servidor propio ni pago de dominio para la versión inicial.

| 2\.  Stack Tecnológico y Despliegue |
| :---- |

## **2.1 Stack seleccionado (costo $0)**

| *Todo el stack de la versión 1 es gratuito. No se requiere tarjeta de crédito para Vercel ni Cloudinary en los límites de uso de una agencia pequeña.* |
| :---- |

| Capa | Tecnología | Notas |
| :---- | :---- | :---- |
| **Frontend** | Next.js 14 (App Router) | React \+ SSG/SSR, SEO nativo |
| **Estilos** | Tailwind CSS | Rápido y compatible con diseño custom |
| **Imágenes** | Cloudinary (plan Free) | 25 GB gratis · optimizacion automatica |
| **Deploy / Hosting** | Vercel Hobby (gratuito) | 100 GB banda / mes. Deploy auto desde GitHub |
| **Repo / CI** | GitHub | Cada push a main \= deploy automatico |
| **Backend / BD (v2)** | Supabase (plan Free) | Reservado para v2: panel admin / CMS |
| **Dominio (v1)** | creatibros.vercel.app | Gratis. Dominio propio \~$12/ano en el futuro |

## **2.2 Flujo de deploy**

* Crear repositorio en GitHub

* Conectar repo a Vercel (vercel.com \> New Project \> Import Git)

* Vercel detecta Next.js automaticamente y configura el build

* Cada push a la rama main dispara un nuevo deploy en segundos

* Variables de entorno (ej: numero WhatsApp) se guardan en Vercel Dashboard

| *No necesitas servidor propio, ni VPS, ni cPanel. Vercel gestiona todo el hosting de manera gratuita dentro de sus limites de uso.* |
| :---- |

| 3\.  Descripción General del Negocio |
| :---- |

## **3.1 Servicios de Creatibros**

* Fotografia profesional (eventos, retrato, gastronomia, deportes)

* Cobertura de eventos (bodas, 15 anos, cumpleanos, comuniones, bautizos)

* Produccion de video (corporativo, promocional, cobertura audiovisual)

* Mejora de contenido visual para empresas y emprendedores

## **3.2 Publico objetivo**

* Personas que buscan cobertura para eventos sociales

* Empresas que necesitan contenido audiovisual profesional

* Emprendedores que quieren mejorar su presencia visual

| 4\.  Requerimientos Funcionales |
| :---- |

| *La tabla siguiente lista todos los requerimientos con ID unico, descripcion, prioridad (Alta / Media / Baja) y observaciones tecnicas relevantes para agentes de IA o desarrolladores.* |
| :---- |

| ID | Requerimiento | Prioridad | Notas tecnicas |
| ----- | :---- | ----- | :---- |
| **PAGINA DE INICIO (HOME)** |  |  |  |
| **RF-01** | Hero section con imagen/video de fondo de alto impacto visual | **Alta** | *next/image con priority=true* |
| **RF-02** | Boton CTA principal que lleve al formulario de contacto | **Alta** | *Scroll suave a \#contacto* |
| **RF-03** | Resumen de servicios con iconos y enlace a seccion Servicios | **Alta** |  |
| **RF-04** | Preview del portafolio (grilla de 6-9 imagenes destacadas) | **Alta** | *Cloudinary URLs* |
| **RF-05** | Navegacion fija (sticky) visible en todas las secciones | **Alta** | *Mobile: menu hamburguesa* |
| **SECCION SERVICIOS** |  |  |  |
| **RF-06** | Mostrar servicios agrupados: Fotografia (bodas, 15 anos, cumpleanos, retratos, gastronomia, deportes) | **Alta** | *Cards con imagen representativa* |
| **RF-07** | Mostrar servicios de Video (corporativo, promocional, eventos) | **Alta** | *Cards con imagen o thumbnail* |
| **RF-08** | Cada servicio con: descripcion, imagen y enlace opcional a galeria | **Media** |  |
| **SECCION PORTAFOLIO** |  |  |  |
| **RF-09** | Filtros por categoria: Eventos, Retratos, Gastronomia, Deportes, Video | **Alta** | *useState en React* |
| **RF-10** | Galeria tipo grid / masonry responsive | **Alta** | *CSS Grid o libreria Masonry* |
| **RF-11** | Lightbox al hacer clic en imagen (ampliacion con flechas prev/next) | **Alta** | *Libreria: yet-another-react-lightbox (gratis)* |
| **RF-12** | Lazy loading de imagenes en galeria | **Alta** | *next/image loading='lazy'* |
| **RF-13** | Subcategorias dentro de Eventos (bodas, 15 anos, etc.) | **Media** | *Tabs o filtros secundarios* |
| **SECCION QUIENES SOMOS** |  |  |  |
| **RF-14** | Historia de la agencia y experiencia (+2 anos en el mercado) | **Alta** |  |
| **RF-15** | Valores de marca y enfoque creativo | **Alta** |  |
| **RF-16** | Fotos del equipo (opcional) | **Baja** | *Cloudinary* |
| **RF-17** | Frase representativa de la marca | **Media** |  |
| **SECCION CLIENTES / EMPRESAS** |  |  |  |
| **RF-18** | Carrusel o grilla de logos de empresas con las que han trabajado | **Media** | *Libreria Embla Carousel (gratis)* |
| **RF-19** | Testimonios de clientes (opcional) | **Baja** | *Datos estaticos en v1* |
| **SECCION CONTACTO** |  |  |  |
| **RF-20** | Formulario con campos: Nombre, Telefono, Email (opcional), Tipo de servicio, Mensaje | **Alta** |  |
| **RF-21** | Al enviar: generar mensaje prellenado y abrir WhatsApp | **Alta** | *wa.me/{numero}?text=...* |
| **RF-22** | Validacion de campos obligatorios antes de enviar | **Alta** | *HTML5 \+ JS validation* |
| **RF-23** | Mostrar numero de WhatsApp y redes sociales en footer | **Media** |  |

## **4.1 Detalle: Integracion WhatsApp**

Al hacer clic en Enviar el formulario construye la URL con el mensaje prellenado usando el siguiente formato:

https://wa.me/NUMERO?text=Hola%2C+soy+\[Nombre\].+Servicio%3A+\[Servicio\].+Mensaje%3A+\[Mensaje\].+Tel%3A+\[Tel\]

El numero de WhatsApp se almacena como variable de entorno en Vercel (NEXT\_PUBLIC\_WA\_NUMBER) para no exponerlo directamente en el codigo fuente.

| 5\.  Requerimientos No Funcionales |
| :---- |

## **5.1 Responsividad**

* Breakpoints: movil (\< 640px), tablet (640-1024px), desktop (\> 1024px)

* Tailwind CSS gestiona los breakpoints de manera nativa

* El menu en movil se convierte en hamburguesa

## **5.2 Rendimiento**

* Imagenes servidas desde Cloudinary con transformaciones automaticas (WebP, resize)

* next/image para lazy loading y optimizacion automatica

* Objetivo: puntuacion Lighthouse Performance \> 85

## **5.3 SEO**

* Metadata por pagina/seccion usando Next.js Metadata API

* Open Graph para compartir en redes sociales

* Sitemap.xml generado automaticamente

## **5.4 Accesibilidad**

* Contraste de colores WCAG AA (paleta corporativa ya cumple con fondos claros)

* Alt text en todas las imagenes del portafolio

* Navegacion por teclado funcional

| 6\.  Requerimientos de Diseño (UI/UX) |
| :---- |

## **6.1 Paleta de colores corporativa**

| Color | HEX | Uso sugerido |
| :---- | :---- | :---- |
| **Blanco** | \#FFFFFF | Fondo principal, texto sobre fondos oscuros |
| **Lavanda claro** | \#D9D9FF | Fondos de secciones alternas, highlight boxes |
| **Lavanda medio** | \#B0AEFF | Bordes, separadores, iconos secundarios |
| **Morado principal** | \#8684FF | CTAs, botones, acentos principales |
| **Azul oscuro** | \#454496 | Titulos, headers de seccion, footer |
| **Gris oscuro** | \#343341 | Texto de cuerpo, parrafos |
| **Negro** | \#000000 | Texto de alto contraste cuando sea necesario |

## **6.2 Tipografia**

* Titulos y headings: Arsenica (cargar desde Google Fonts o archivo local)

* Cuerpo de texto y parrafos: Neue Montreal (self-hosted o variable alternativa: DM Sans)

| *Si Neue Montreal no esta disponible gratuitamente, usar DM Sans como alternativa open source con estilo similar. Arsenica esta disponible en Google Fonts.* |
| :---- |

## **6.3 Estilo visual**

* Minimalista y elegante, enfocado en el contenido fotografico

* Imagenes grandes, espacio en blanco generoso

* Transiciones suaves en hover y scroll

* No usar sombras pesadas ni bordes gruesos

| 7\.  Estructura del Sitio |
| :---- |

La aplicacion es de una sola pagina (SPA-style) con anclas de navegacion. La estructura de archivos en Next.js es:

| Ruta / Archivo | Descripcion |
| :---- | :---- |
| app/page.tsx | Pagina principal (home con todas las secciones) |
| app/portafolio/\[categoria\]/page.tsx | Pagina de galeria por categoria (opcional split) |
| components/Hero.tsx | Hero section con CTA |
| components/Servicios.tsx | Seccion de servicios |
| components/Portafolio.tsx | Galeria con filtros y lightbox |
| components/QuienesSomos.tsx | Historia y valores |
| components/Clientes.tsx | Logos y testimonios |
| components/Contacto.tsx | Formulario WhatsApp |
| components/Navbar.tsx | Navegacion sticky responsive |
| lib/cloudinary.ts | Helper para URLs de Cloudinary |
| .env.local | NEXT\_PUBLIC\_WA\_NUMBER, CLOUDINARY\_URL |

| 8\.  Criterios de Aceptación |
| :---- |

El sistema se considera completo (v1) cuando cumpla TODOS los siguientes criterios:

* Todas las secciones estan implementadas y navegables

* El formulario genera y abre WhatsApp con el mensaje correcto

* Las galerias tienen filtros funcionales y lightbox

* El sitio es completamente responsive en movil, tablet y desktop

* El diseno respeta la identidad visual (colores, tipografia, estilo)

* Las imagenes cargan desde Cloudinary con lazy loading

* El deploy en Vercel es exitoso y el sitio es accesible en la URL publica

* Lighthouse Performance \> 85, SEO \> 90

| 9\.  Futuras Mejoras (v2+) |
| :---- |

| Mejora | Tecnologia sugerida |
| :---- | :---- |
| Panel administrador (CMS) para subir fotos sin codigo | Supabase \+ Next.js Admin Route |
| Blog de contenido fotografico | Supabase o MDX |
| Testimonios dinamicos | Supabase tabla reviews |
| Reserva de citas online | Cal.com (plan free) o Calendly |
| Integracion con Instagram feed | Instagram Basic Display API |
| Dominio propio (creatibros.com) | Namecheap (\~$12/ano) \+ Vercel custom domain |
| Formulario con backend (guardar leads) | Supabase \+ Vercel Edge Functions |

