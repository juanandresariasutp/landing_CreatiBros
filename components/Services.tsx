import { Camera, Video, Building, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const services = [
  {
    id: "fotografia-social",
    title: "Fotografía de Eventos",
    description: "Bodas, quince años, cumpleaños y celebraciones. Inmortalizamos los momentos más memorables de tu vida con un enfoque documental y artístico.",
    icon: Camera,
    color: "bg-cb-lavender-light/50",
    iconColor: "text-cb-purple",
    href: "/portafolio",
  },
  {
    id: "produccion-video",
    title: "Producción Audiovisual",
    description: "Videos corporativos, reels para redes sociales y cobertura de eventos en formato cine. Llevamos tus ideas a la pantalla con calidad profesional.",
    icon: Video,
    color: "bg-cb-lavender-light/30",
    iconColor: "text-cb-dark",
    href: "/audiovisual",
  },
  {
    id: "clientes-comerciales",
    title: "Servicios para Empresas",
    description: "Imágenes de alto impacto, gastronomía, producto, arquitectura y contenido mensual optimizado para destacar tu marca y vender más.",
    icon: Building,
    color: "bg-cb-white",
    iconColor: "text-cb-purple",
    href: "/clientes",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-cb-white dark:bg-cb-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cb-purple font-semibold tracking-wider uppercase text-sm">
            Lo que hacemos
          </span>
          <h2 className="font-arsenica text-4xl md:text-5xl font-bold text-cb-dark dark:text-cb-white mt-4 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-cb-dark dark:text-cb-white/80">
            Ofrecemos soluciones visuales integrales para documentar tus momentos más importantes o potenciar la imagen de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                "p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 border border-cb-lavender-light/30 dark:border-cb-white/10 dark:bg-cb-dark",
                service.color.replace('bg-cb-white', '').replace('bg-cb-lavender-light/', 'dark:bg-cb-lavender-light/10 bg-cb-lavender-light/')
              )}
            >
              <div className="w-14 h-14 bg-cb-white dark:bg-cb-white/5 rounded-xl flex items-center justify-center shadow-sm mb-6">
                <service.icon className={cn("w-7 h-7", service.iconColor === "text-cb-dark" ? "text-cb-dark dark:text-cb-white" : service.iconColor)} />
              </div>
              <h3 className="font-arsenica text-2xl font-bold text-cb-dark dark:text-cb-white mb-4">
                {service.title}
              </h3>
              <p className="text-cb-dark/90 dark:text-cb-white/70 leading-relaxed mb-6">
                {service.description}
              </p>
              {service.href ? (
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-semibold text-cb-purple hover:text-cb-dark dark:hover:text-cb-white transition-colors"
                >
                  Saber más <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              ) : (
                <a
                  href="#portafolio"
                  className="inline-flex items-center text-sm font-semibold text-cb-purple hover:text-cb-dark dark:hover:text-cb-white transition-colors"
                >
                  Ver ejemplos &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
