import { portfolioCategories } from "@/lib/portfolio-data";
import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { Contact } from "@/components/Contact";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Heart, Award, Star } from "lucide-react";
import Image from "next/image";
import { buildImageUrl } from "@/lib/cloudinary";
import { getCoverImageFromFolder, getImagesFromFolder } from "@/lib/cloudinary-actions";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = portfolioCategories.find((c) => c.slug === params.slug);
  if (!category) return { title: "No encontrado" };
  return {
    title: `${category.title} | Portafolio Creatibros`,
    description: category.description,
  };
}

export function generateStaticParams() {
  return portfolioCategories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function PortfolioCategoryPage({ params }: { params: { slug: string } }) {
  const category = portfolioCategories.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  const isEvento = category.group === "Eventos";
  const cloudinaryImages = await getImagesFromFolder(`portafolio/${category.slug}`);
  const controlledCover = await getCoverImageFromFolder(`portafolio/${category.slug}`);

  const galleryImages =
    cloudinaryImages.length > 0
      ? cloudinaryImages.map((img, index) => ({
          id: index + 1,
          folder: category.slug,
          filename: `${img.publicId.split("/").pop()}.${img.format}`,
          alt: `${category.title} ${index + 1}`,
          url: img.url,
        }))
      : category.images;

  const heroImageUrl =
    controlledCover?.url ??
    cloudinaryImages[0]?.url ??
    buildImageUrl(`portafolio/${category.slug}`, category.coverImage);

  return (
    <main className="bg-cb-white dark:bg-cb-dark pt-24 min-h-screen text-cb-dark dark:text-cb-white transition-colors duration-300">
      
      {/* 1. Navegación Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          href="/portafolio" 
          className="inline-flex items-center gap-2 text-cb-purple hover:text-cb-dark dark:hover:text-cb-lavender-light transition-colors font-medium border border-transparent hover:border-cb-purple px-4 py-2 rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al portafolio
        </Link>
      </div>

      {/* 2. Hero Emocional / Persuasivo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-cb-purple font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-cb-purple"></span>
              {category.group}
            </span>
            <h1 className="font-arsenica text-5xl md:text-7xl font-bold leading-[1.1] mt-2 mb-6">
              {category.title}
            </h1>
            <p className="text-xl md:text-2xl text-cb-dark dark:text-cb-white/80 leading-relaxed mb-8">
              {category.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <a href="#galeria" className="px-8 py-4 bg-cb-navy text-cb-white dark:bg-cb-white dark:text-cb-dark rounded-full font-bold text-center hover:bg-cb-purple dark:hover:bg-cb-purple hover:text-cb-white transition-colors duration-300 shadow-lg">
                Ver galería
               </a>
               <a href="#contacto" className="px-8 py-4 border-2 border-cb-navy dark:border-cb-white rounded-full font-bold text-center hover:bg-cb-navy hover:text-cb-white dark:hover:bg-cb-white dark:hover:text-cb-dark transition-colors duration-300">
                Cotizar ahora
               </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 w-full h-[50vh] lg:h-[70vh] relative rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src={heroImageUrl}
              alt={`${category.title} - Cover`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cb-navy/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* 3. Propuesta de Valor Dinámica (Depende si es Evento o Servicio) */}
      <section className="bg-white/60 dark:bg-white/5 py-20 lg:py-28 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-arsenica text-4xl lg:text-5xl font-bold mb-12">
            {isEvento ? "¿Por qué documentar este momento?" : "¿Por qué invertir en tu imagen?"}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {isEvento ? (
               <>
                <div className="bg-cb-white dark:bg-cb-navy p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow">
                  <Heart className="w-12 h-12 text-cb-purple mb-6 mx-auto" />
                  <h3 className="font-bold text-xl mb-3">Emoción Intacta</h3>
                  <p className="text-cb-dark/90 dark:text-cb-white/70">Los recuerdos se desvanecen, pero una fotografía captura el sentimiento exacto para que lo revivas una y otra vez.</p>
                </div>
                <div className="bg-cb-white dark:bg-cb-navy p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow">
                  <Star className="w-12 h-12 text-cb-purple mb-6 mx-auto" />
                  <h3 className="font-bold text-xl mb-3">Detalles Únicos</h3>
                  <p className="text-cb-dark/90 dark:text-cb-white/70">Todo en lo que has invertido tiempo y amor merece quedar plasmado: las miradas, la decoración y las sonrisas.</p>
                </div>
                <div className="bg-cb-white dark:bg-cb-navy p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow">
                  <Award className="w-12 h-12 text-cb-purple mb-6 mx-auto" />
                  <h3 className="font-bold text-xl mb-3">Legado Familiar</h3>
                  <p className="text-cb-dark/90 dark:text-cb-white/70">Estás creando el archivo visual que tus hijos y nietos verán en el futuro para conectar con su historia.</p>
                </div>
               </>
            ) : (
               <>
                <div className="bg-cb-white dark:bg-cb-navy p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow">
                  <CheckCircle2 className="w-12 h-12 text-cb-purple mb-6 mx-auto" />
                  <h3 className="font-bold text-xl mb-3">Profesionalismo Total</h3>
                  <p className="text-cb-dark/90 dark:text-cb-white/70">Como te ven te perciben. Una imagen de alta calidad eleva el valor percibido de tus productos y servicios instantáneamente.</p>
                </div>
                <div className="bg-cb-white dark:bg-cb-navy p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow">
                  <Star className="w-12 h-12 text-cb-purple mb-6 mx-auto" />
                  <h3 className="font-bold text-xl mb-3">Diferenciación</h3>
                  <p className="text-cb-dark/90 dark:text-cb-white/70">En un mercado saturado, destacar es vital. Te ayudamos a crear un estilo visual que tu competencia no podrá copiar.</p>
                </div>
                <div className="bg-cb-white dark:bg-cb-navy p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow">
                  <Award className="w-12 h-12 text-cb-purple mb-6 mx-auto" />
                  <h3 className="font-bold text-xl mb-3">Confianza Rápida</h3>
                  <p className="text-cb-dark/90 dark:text-cb-white/70">Tus clientes potenciales confiarán en tu marca y tomarán decisiones de compra más rápido al ver fotos que inspiran calidad.</p>
                </div>
               </>
            )}
          </div>
        </div>
      </section>

      {/* 4. Galería - Carrusel */}
      <section id="galeria" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
           <h2 className="font-arsenica text-4xl md:text-5xl font-bold mb-4">Nuestro Trabajo</h2>
           <p className="text-lg text-cb-dark/90 dark:text-cb-white/70 max-w-2xl mx-auto">
             Observa cómo cuidamos la luz, la composición y el instante preciso en cada toma.
           </p>
        </div>
        <PortfolioCarousel 
          title=""
          description={""}
          images={galleryImages} 
        />
      </section>

      {/* 5. Cierre Persuasivo antes del contacto */}
      <section className="bg-cb-purple text-white py-16 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-arsenica text-3xl md:text-5xl font-bold mb-6">
            {isEvento ? "Tu gran día solo pasa una vez." : "Tu marca está lista para el siguiente nivel."}
          </h2>
          <p className="text-lg md:text-xl font-medium mb-8 text-white/90">
            No dejes la parte más importante de tu {isEvento ? "historia" : "negocio"} al azar. Trabajemos juntos.
          </p>
        </div>
      </section>

      {/* 6. Contacto */}
      <div className="bg-cb-white dark:bg-cb-dark" id="contacto">
        <Contact />
      </div>
    </main>
  );
}