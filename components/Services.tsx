import { Camera, Video, MonitorPlay, Users, Sparkles, Building } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "fotografia-social",
    title: "Fotografía de Eventos",
    description: "Bodas, quince años, cumpleaños y celebraciones. Inmortalizamos los momentos más memorables de tu vida con un enfoque documental y artístico.",
    icon: Camera,
    color: "bg-cb-lavender-light/50",
    iconColor: "text-cb-purple",
  },
  {
    id: "produccion-video",
    title: "Producción Audiovisual",
    description: "Videos corporativos, reels para redes sociales y cobertura de eventos en formato cine. Llevamos tus ideas a la pantalla con calidad profesional.",
    icon: Video,
    color: "bg-cb-lavender-light/30",
    iconColor: "text-cb-navy",
  },
  {
    id: "fotografia-comercial",
    title: "Fotografía Comercial",
    description: "Gastronomía, producto y arquitectura. Imágenes de alto impacto diseñadas para destacar tu marca y vender más.",
    icon: Building,
    color: "bg-cb-white",
    iconColor: "text-cb-purple",
  },
  {
    id: "retrato-corporativo",
    title: "Retrato y Marca Personal",
    description: "Fotografía de retrato profesional para emprendedores, directivos y artistas que buscan elevar su presencia digital.",
    icon: Users,
    color: "bg-cb-white",
    iconColor: "text-cb-navy",
  },
  {
    id: "creacion-contenido",
    title: "Creación de Contenido",
    description: "Paquetes mensuales de fotografía y video optimizados para Instagram, TikTok y plataformas digitales.",
    icon: MonitorPlay,
    color: "bg-cb-lavender-light/50",
    iconColor: "text-cb-purple",
  },
  {
    id: "edicion-post",
    title: "Edición y Postproducción",
    description: "Servicios de colorización, retoque fotográfico y montaje de video para proyectos independientes.",
    icon: Sparkles,
    color: "bg-cb-lavender-light/30",
    iconColor: "text-cb-navy",
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
          <h2 className="font-arsenica text-4xl md:text-5xl font-bold text-cb-navy dark:text-cb-white mt-4 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-cb-dark/80 dark:text-cb-white/80">
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
                <service.icon className={cn("w-7 h-7", service.iconColor === "text-cb-navy" ? "text-cb-navy dark:text-cb-white" : service.iconColor)} />
              </div>
              <h3 className="font-arsenica text-2xl font-bold text-cb-navy dark:text-cb-white mb-4">
                {service.title}
              </h3>
              <p className="text-cb-dark/70 dark:text-cb-white/70 leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#portafolio"
                className="inline-flex items-center text-sm font-semibold text-cb-purple hover:text-cb-navy dark:hover:text-cb-white transition-colors"
              >
                Ver ejemplos &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
