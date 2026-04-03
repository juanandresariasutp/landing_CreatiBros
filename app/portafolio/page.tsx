import { Contact } from "@/components/Contact";
import Link from "next/link";
import Image from "next/image";
import { portfolioCategories } from "@/lib/portfolio-data";
import { buildImageUrl } from "@/lib/cloudinary";
import { getCoverImageFromFolder } from "@/lib/cloudinary-actions";

export const metadata = {
  title: "Portafolio | Creatibros",
  description: "Explora nuestros trabajos en fotografía de bodas, quince años, retrato, gastronomía y video corporativo.",
};

export default async function PortafolioPage() {
  const portfolioHeroBg = buildImageUrl("", "hero-portafolio2.jpg");
  const safeFallbackCover = portfolioHeroBg;

  const categoriesWithCovers = await Promise.all(
    portfolioCategories.map(async (category) => {
      const controlledCover = await getCoverImageFromFolder(`portafolio/${category.slug}`);

      return {
        ...category,
        dynamicCoverUrl:
          controlledCover?.url ??
          safeFallbackCover,
      };
    })
  );

  const eventos = categoriesWithCovers.filter((c) => c.group === "Eventos");
  const servicios = categoriesWithCovers.filter((c) => c.group === "Servicios Profesionales");

  return (
    <main className="bg-cb-white dark:bg-cb-dark min-h-screen text-cb-dark dark:text-cb-white pt-24 font-sans selection:bg-cb-purple selection:text-white transition-colors duration-300">
      {/* Hero Section Persuasivo */}
      <section className="relative overflow-hidden border-b border-cb-white/10 min-h-[70vh] lg:min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={portfolioHeroBg}
            alt="Portafolio Creatibros"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-cb-dark/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full text-cb-white">
          <div className="max-w-4xl">
            <p className="text-cb-lavender-light font-semibold tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-cb-lavender-light"></span>
              Nuestro Trabajo
            </p>
            <h1 className="font-arsenica text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8">
              Instantes fugaces, <br />
              <span className="text-cb-lavender-light italic">legados eternos.</span>
            </h1>
            <p className="text-xl md:text-2xl text-cb-white/90 max-w-2xl leading-relaxed">
              No tomamos fotografías; capturamos la esencia de tu historia. Ya sea el día más importante de tu vida o la identidad visual de tu marca, creamos imágenes que trascienden.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Eventos - Layout Asimétrico con Sticky Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-cb-dark/10 dark:border-cb-white/10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-1/3 flex flex-col justify-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-arsenica text-4xl lg:text-5xl font-bold mb-6 leading-tight">Celebraciones <br className="hidden lg:block"/> Inolvidables</h2>
              <p className="text-lg text-cb-dark/90 dark:text-cb-white/70 mb-8 leading-relaxed">
                Revive la emoción de tu gran día. Cuidamos cada detalle arquitectónico de tus recuerdos para que tu inversión hoy, sea el tesoro invaluable de mañana.
              </p>
              <div className="hidden lg:block w-16 h-1 bg-cb-purple rounded-full"></div>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {eventos.map((categoria, index) => (
              <Link 
                key={categoria.id} 
                href={`/portafolio/${categoria.slug}`}
                className={`group relative aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 block w-full bg-cb-navy ${index % 2 !== 0 ? 'sm:mt-16' : ''}`}
              >
                {/* Imagen de fondo */}
                <Image 
                  src={categoria.dynamicCoverUrl}
                  alt={`Galería de ${categoria.title}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                
                {/* Gradiente Protector */}
                <div className="absolute inset-0 bg-gradient-to-t from-cb-navy/95 via-cb-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Contenido inferior */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 flex flex-col justify-end transform transition-transform duration-500">
                  <h3 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-3 text-cb-white drop-shadow-md">
                    {categoria.title}
                  </h3>
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span className="text-cb-lavender-light font-medium transform translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      Explorar historia
                    </span>
                    <span className="text-cb-purple transform -translate-x-8 opacity-0 transition-all duration-500 delay-100 group-hover:translate-x-0 group-hover:opacity-100">
                      &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Servicios - Diseño Alternado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-cb-dark/10 dark:border-cb-white/10">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20">
          <div className="lg:w-1/3 flex flex-col justify-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-arsenica text-4xl lg:text-5xl font-bold mb-6 leading-tight">Marcas con <br className="hidden lg:block"/> Propósito</h2>
              <p className="text-lg text-cb-dark/90 dark:text-cb-white/70 mb-8 leading-relaxed">
                Eleva la percepción de tu negocio. Una dirección de arte impecable y fotografías de alta gama son la clave para atraer a tu cliente ideal y destacar en tu industria.
              </p>
              <div className="hidden lg:block w-16 h-1 bg-cb-purple rounded-full"></div>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {servicios.map((categoria, index) => (
              <Link 
                key={categoria.id} 
                href={`/portafolio/${categoria.slug}`}
                className={`group relative aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 block w-full bg-cb-navy ${index % 2 !== 0 ? 'sm:-mt-16' : ''}`}
                style={{ marginTop: index % 2 !== 0 ? 'auto' : '' }}
              >
                {/* Imagen de fondo */}
                <Image 
                  src={categoria.dynamicCoverUrl}
                  alt={`Galería de ${categoria.title}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                
                {/* Gradiente Protector */}
                <div className="absolute inset-0 bg-gradient-to-t from-cb-navy/95 via-cb-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Contenido inferior */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 flex flex-col justify-end transform transition-transform duration-500">
                  <h3 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-3 text-cb-white drop-shadow-md">
                    {categoria.title}
                  </h3>
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span className="text-cb-lavender-light font-medium transform translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      Ver impacto visual
                    </span>
                    <span className="text-cb-purple transform -translate-x-8 opacity-0 transition-all duration-500 delay-100 group-hover:translate-x-0 group-hover:opacity-100">
                      &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
