import { Contact } from "@/components/Contact";
import Link from "next/link";
import Image from "next/image";
import { portfolioCategories } from "@/lib/portfolio-data";
import { buildImageUrl } from "@/lib/cloudinary";

export const metadata = {
  title: "Portafolio | Creatibros",
  description: "Explora nuestros trabajos en fotografía de bodas, quince años, retrato, gastronomía y video corporativo.",
};

const eventos = portfolioCategories.filter((c) => c.group === "Eventos");
const servicios = portfolioCategories.filter((c) => c.group === "Servicios Profesionales");

export default function PortafolioPage() {
  return (
    <main className="bg-cb-navy dark:bg-cb-dark min-h-screen text-cb-white pt-24 pb-12 font-sans">
      {/* Cabecera */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <h1 className="font-arsenica text-5xl md:text-6xl font-bold mt-4 mb-6">
          Eventos
        </h1>
        <div className="w-16 h-1 bg-cb-purple mx-auto mb-6 rounded-full"></div>
        <p className="text-lg md:text-xl text-cb-lavender-light max-w-2xl mx-auto">
          Capturando momentos inolvidables en tus celebraciones más especiales.
        </p>
      </div>

      {/* Grid de Eventos */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {eventos.map((categoria) => (
            <Link 
              key={categoria.id} 
              href={`/portafolio/${categoria.slug}`}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl block max-w-sm mx-auto w-full"
            >
              {/* Imagen de fondo */}
              <Image 
                src={buildImageUrl(`portafolio/${categoria.slug}`, categoria.coverImage)}
                alt={categoria.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-cb-navy/90 md:from-cb-navy/80 via-cb-navy/20 to-transparent transition-opacity duration-300"></div>
              
              {/* Contenido inferior */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {categoria.title}
                </h3>
                <p className="text-cb-lavender-light font-medium opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Explorar Galería
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cabecera Servicios */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16 border-t border-cb-lavender-light/10">
        <h2 className="font-arsenica text-4xl md:text-5xl font-bold mt-4 mb-6">
          Servicios Profesionales
        </h2>
        <div className="w-16 h-1 bg-cb-purple mx-auto mb-6 rounded-full"></div>
        <p className="text-lg md:text-xl text-cb-lavender-light max-w-2xl mx-auto">
          Imágenes de alto impacto para potenciar la identidad de tu marca o empresa.
        </p>
      </div>

      {/* Grid de Servicios */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {servicios.map((categoria) => (
            <Link 
              key={categoria.id} 
              href={`/portafolio/${categoria.slug}`}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl block max-w-sm mx-auto w-full"
            >
              {/* Imagen de fondo */}
              <Image 
                src={buildImageUrl(`portafolio/${categoria.slug}`, categoria.coverImage)}
                alt={categoria.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-cb-navy/90 md:from-cb-navy/80 via-cb-navy/20 to-transparent transition-opacity duration-300"></div>
              
              {/* Contenido inferior */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {categoria.title}
                </h3>
                <p className="text-cb-lavender-light font-medium opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Explorar Galería
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA final (necesitará un contenedor con fondo blanco si Contact asume eso) */}
      <div className="bg-cb-white dark:bg-cb-dark">
        <Contact />
      </div>
    </main>
  );
}
