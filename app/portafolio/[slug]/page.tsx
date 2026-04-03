import { portfolioCategories } from "@/lib/portfolio-data";
import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { Contact } from "@/components/Contact";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Heart, Award, Star } from "lucide-react";
import Image from "next/image";
import { buildImageUrl } from "@/lib/cloudinary";
import { getCoverImageFromFolder, getImagesFromFolder } from "@/lib/cloudinary-actions";
import { AgeGate } from "@/components/AgeGate";
import { ScrollAnimator } from "@/components/ScrollAnimator";

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
  const requiresAgeGate = category.slug === "boudoir";
  const cloudinaryImages = await getImagesFromFolder(`portafolio/${category.slug}`);
  const controlledCover = await getCoverImageFromFolder(`portafolio/${category.slug}`);

  const galleryImages =
    cloudinaryImages.length > 0
      ? cloudinaryImages.map((img, index) => ({
          id: index + 1,
          folder: category.slug,
          filename: `${img.publicId.split("/").pop()}.${img.format}`,
          alt: "Fotografia de galeria",
          url: img.url,
        }))
      : [];

  const heroImageUrl =
    controlledCover?.url ??
    cloudinaryImages[0]?.url ??
    buildImageUrl("", "hero-portafolio2.jpg");

  return (
    <AgeGate enabled={requiresAgeGate}>
    <main className="bg-cb-white dark:bg-cb-dark pt-24 min-h-screen text-cb-dark dark:text-cb-white transition-colors duration-300">
      
      {/* 1. Navegación Top */}
      <ScrollAnimator animation="fadeInUp" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <Link 
          href="/portafolio" 
          className="inline-flex items-center gap-2 text-cb-purple hover:text-cb-dark dark:hover:text-cb-lavender-light transition-colors font-medium border border-transparent hover:border-cb-purple px-4 py-2 rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al portafolio
        </Link>
      </ScrollAnimator>

      {/* 2. Hero Emocional / Persuasivo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 lg:pt-6 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimator animation="fadeInLeft" className="order-1">
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

            <div className="lg:hidden w-full h-[36vh] sm:h-[42vh] relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image
                src={heroImageUrl}
                alt={`${category.title} - Cover`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cb-navy/50 to-transparent"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
               <a href="#galeria" className="px-8 py-4 bg-cb-navy text-cb-white dark:bg-cb-white dark:text-cb-dark rounded-full font-bold text-center hover:bg-cb-purple dark:hover:bg-cb-purple hover:text-cb-white transition-colors duration-300 shadow-lg">
                Ver galería
               </a>
               <a href="#contacto" className="px-8 py-4 border-2 border-cb-navy dark:border-cb-white rounded-full font-bold text-center hover:bg-cb-navy hover:text-cb-white dark:hover:bg-cb-white dark:hover:text-cb-dark transition-colors duration-300">
                Cotizar ahora
               </a>
            </div>
          </ScrollAnimator>
          
          <ScrollAnimator animation="fadeInRight" delay={120} className="hidden lg:block order-2 w-full h-[50vh] lg:h-[70vh] relative rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src={heroImageUrl}
              alt={`${category.title} - Cover`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cb-navy/50 to-transparent"></div>
          </ScrollAnimator>
        </div>
      </section>

      {/* 3. Propuesta de Valor Dinámica (Depende si es Evento o Servicio) */}
      <section className="bg-cb-lavender-light/20 dark:bg-white/5 py-20 lg:py-28 mt-12 border-y border-cb-lavender-light/35 dark:border-white/10">
        <ScrollAnimator animation="fadeInUp" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-arsenica text-4xl lg:text-5xl font-bold mb-12">
            {isEvento ? "¿Por qué documentar este momento?" : "¿Por qué invertir en tu imagen?"}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 bg-white/55 dark:bg-white/5 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-[2rem] border border-cb-lavender-light/30 dark:border-white/10 shadow-[0_18px_45px_rgba(15,19,55,0.08)]">
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
        </ScrollAnimator>
      </section>

      {/* 4. Galería - Nuestro Trabajo */}
      <section
        id="galeria"
        className="py-20 lg:py-32 bg-gradient-to-b from-cb-white via-cb-lavender-light/20 to-cb-lavender-light/10 dark:from-cb-dark dark:via-cb-navy/30 dark:to-cb-dark border-b border-cb-lavender-light/35 dark:border-white/10"
      >
        <ScrollAnimator animation="fadeInUp" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-cb-purple/30 bg-cb-purple/10 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-cb-purple mb-6">
            Galeria Destacada
          </span>
          <h2 className="font-arsenica text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-cb-dark dark:text-cb-white">
            Nuestro Trabajo
          </h2>
          <p className="text-lg text-cb-dark/90 dark:text-cb-white/75 max-w-3xl mx-auto leading-relaxed">
            Recorre una seleccion curada de imagenes reales donde cuidamos composicion, luz y narrativa visual para contar cada historia.
          </p>
        </ScrollAnimator>
        {galleryImages.length === 0 && (
          <p className="text-center text-cb-dark/70 dark:text-cb-white/70 mb-8 px-4">
            Aún no hay imágenes disponibles en esta categoría o Cloudinary alcanzó su límite temporal.
          </p>
        )}
        <ScrollAnimator animation="scaleIn" delay={120} className="max-w-[92rem] mx-auto px-3 sm:px-5">
          <div className="rounded-3xl border border-cb-lavender-light/40 dark:border-cb-white/10 bg-white/70 dark:bg-cb-navy/20 backdrop-blur-sm p-4 sm:p-6 lg:p-8 shadow-[0_18px_50px_rgba(10,12,40,0.12)]">
            <PortfolioCarousel title="" description={""} images={galleryImages} />
          </div>
        </ScrollAnimator>
      </section>

      {/* 5. Cierre Persuasivo antes del contacto */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-cb-lavender-light/35 via-white to-cb-white dark:from-cb-navy dark:via-cb-dark dark:to-cb-navy" />
        <div className="absolute inset-0 opacity-60 dark:opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(134,132,255,0.25),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(14,18,45,0.08),transparent_28%)]" />

        <ScrollAnimator animation="fadeInUp" className="relative max-w-5xl mx-auto">
          <div className="rounded-[2rem] border border-white/50 dark:border-white/10 bg-white/75 dark:bg-cb-dark/65 backdrop-blur-xl shadow-[0_24px_70px_rgba(15,19,55,0.14)] px-6 sm:px-10 lg:px-14 py-12 sm:py-14 text-center">
            <h2 className="font-arsenica text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-cb-dark dark:text-cb-white mb-5">
              {isEvento ? "Tu gran día solo pasa una vez." : "Tu marca está lista para el siguiente nivel."}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-cb-dark/80 dark:text-cb-white/75 max-w-3xl mx-auto leading-relaxed">
              {isEvento
                ? "No dejes que estos recuerdos se pierdan con el tiempo. Conservemos cada emoción con una fotografía que puedas revivir siempre."
                : "Haz que tu marca se vea tan profesional como el valor que ofrece, con una identidad visual auténtica y memorable."}
            </p>
          </div>
        </ScrollAnimator>
      </section>

      {/* 6. Contacto */}
      <div className="bg-cb-white dark:bg-cb-dark" id="contacto">
        <Contact />
      </div>
    </main>
    </AgeGate>
  );
}