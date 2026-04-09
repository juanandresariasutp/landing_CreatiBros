import Image from "next/image";
import { Contact } from "@/components/Contact";
import { Values } from "@/components/Values";
import { Camera, Mountain } from "lucide-react";
import { buildImageUrl } from "@/lib/cloudinary";
import { ScrollAnimator } from "@/components/ScrollAnimator";

export const metadata = {
  title: "Quiénes Somos | Creatibros",
  description: "Conoce a nuestro equipo: Juan Andrés Arias y Andrés Camilo Trochez. Apasionados por la fotografía, el video y el crecimiento de marcas en el Eje Cafetero.",
};

export default function NosotrosPage() {
  const nosotrosHeroBg = buildImageUrl("", "hero-nosotros.jpg");

  return (
    <main className="min-h-screen pt-24 pb-0 bg-cb-white dark:bg-cb-dark text-cb-dark dark:text-cb-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-cb-white/10 min-h-[65vh] lg:min-h-[72vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={nosotrosHeroBg}
            alt="Equipo Creatibros"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-cb-dark/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center text-cb-white">
          <ScrollAnimator animation="fadeInUp" className="max-w-4xl mx-auto">
          <p className="text-cb-lavender-light font-semibold tracking-[0.2em] uppercase text-sm mb-6 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-cb-lavender-light"></span>
            Nuestra Historia
            <span className="w-12 h-px bg-cb-lavender-light"></span>
          </p>
          <h1 className="font-arsenica text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Más que capturar imágenes, <br className="hidden md:block" />
            <span className="text-cb-lavender-light italic">construimos legados.</span>
          </h1>
          <p className="text-xl md:text-2xl text-cb-white/90 leading-relaxed max-w-2xl mx-auto">
            Fundamos Creatibros con la visión de fusionar el arte audiovisual con el mundo digital y los grandes momentos.
          </p>
          </ScrollAnimator>
        </div>
      </section>

      {/* Propósito */}
      <section className="bg-cb-navy text-cb-white dark:bg-[#0c1220] py-20 lg:py-24 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollAnimator animation="fadeInLeft">
            <div>
              <h2 className="font-arsenica text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-md">
                Nuestro <span className="text-cb-purple italic">Propósito</span>
              </h2>
              <p className="text-lg text-cb-lavender-light mb-6 leading-relaxed">
                Nos enfocamos no solo en documentar de forma espectacular tus eventos más preciados, 
                sino en ser aliados estratégicos para las marcas del <strong>Eje Cafetero</strong>.
              </p>
              <p className="text-lg text-cb-lavender-light mb-8 leading-relaxed">
                A través del uso creativo del marketing digital, la fotografía de alto nivel y la producción de video, ayudamos a los emprendedores y empresas a destacar, conectar con su audiencia y crecer en un mercado cada vez más competitivo.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cb-purple/20 rounded-xl text-cb-purple">
                    <Camera className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Eventos</h4>
                    <p className="text-sm text-cb-lavender-light mt-1">Memorias imborrables</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cb-purple/20 rounded-xl text-cb-purple">
                    <Mountain className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Eje Cafetero</h4>
                    <p className="text-sm text-cb-lavender-light mt-1">Impulso local</p>
                  </div>
                </div>
              </div>
            </div>
            </ScrollAnimator>
            
            <ScrollAnimator animation="fadeInRight" delay={120} className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
               {/* Imagen representativa del eje cafetero o trabajando. Reemplazar cuando se tenga fotos reales. */}
               <Image 
                src={buildImageUrl("", "proposito1.png")}
                alt="Creatibros trabajando en el Eje Cafetero"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cb-navy/90 via-cb-navy/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-2xl font-arsenica font-bold text-white mb-2">Creatividad y Estrategia</p>
                <p className="text-cb-lavender-light font-medium">De la visión a la realidad.</p>
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* Los Fundadores */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollAnimator animation="fadeInUp" className="text-center mb-12 lg:mb-16">
          <h2 className="font-arsenica text-4xl lg:text-5xl font-bold mb-4">Conoce al Equipo</h2>
          <div className="w-24 h-1 bg-cb-purple mx-auto rounded-full"></div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {/* Juan Andrés Arias */}
          <ScrollAnimator animation="fadeInLeft" delay={80}><div className="group flex flex-col items-center text-center">
            <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mb-6 rounded-full overflow-hidden shadow-xl border-4 border-cb-white dark:border-cb-dark transition-transform duration-500 group-hover:scale-105">
              <Image 
                src={buildImageUrl("", "juan.jpg")}
                alt="Juan Andrés Arias"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-arsenica text-2xl md:text-3xl font-bold mb-2">Juan Andrés Arias</h3>
            <p className="text-cb-purple font-medium mb-4 uppercase tracking-wider text-sm">
              Fotógrafo / Ingeniero de Sistemas
            </p>
            <p className="text-cb-dark/80 dark:text-cb-white/80 leading-relaxed max-w-sm text-sm md:text-[15px]">
              Con más de <strong>6 años de experiencia</strong> en el cubrimiento de eventos y 2 años como realizador audiovisual. Su perfil técnico como <strong>Ingeniero de Sistemas y Computación</strong> le permite integrar tecnología y eficiencia en estrategias de marketing digital de alto impacto.
            </p>
          </div></ScrollAnimator>

          {/* Andrés Camilo Trochez */}
          <ScrollAnimator animation="fadeInRight" delay={150}><div className="group flex flex-col items-center text-center">
            <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mb-6 rounded-full overflow-hidden shadow-xl border-4 border-cb-white dark:border-cb-dark transition-transform duration-500 group-hover:scale-105">
              <Image 
                src={buildImageUrl("", "camilo1.jpg")}
                alt="Andrés Camilo Trochez"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-arsenica text-2xl md:text-3xl font-bold mb-2">Andrés Camilo Trochez</h3>
            <p className="text-cb-purple font-medium mb-4 uppercase tracking-wider text-sm">
              Fotógrafo / Realizador Audiovisual
            </p>
            <p className="text-cb-dark/80 dark:text-cb-white/80 leading-relaxed max-w-sm text-sm md:text-[15px]">
              Con <strong>más de 5 años de experiencia</strong> en el sector de la recreación, aporta un enfoque creativo y dinámico para dar solución a necesidades logísticas, desarrollando propuestas innovadoras que conectan de manera efectiva con cada proyecto y su público.
            </p>
          </div></ScrollAnimator>

          {/* Tania Camila Arango */}
          <ScrollAnimator animation="fadeInUp" delay={220}><div className="group flex flex-col items-center text-center">
            <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mb-6 rounded-full overflow-hidden shadow-xl border-4 border-cb-white dark:border-cb-dark transition-transform duration-500 group-hover:scale-105">
              <Image 
                src={buildImageUrl("", "tania.jpg")}
                alt="Tania Camila Arango"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-arsenica text-2xl md:text-3xl font-bold mb-2">Tania Camila Arango</h3>
            <p className="text-cb-purple font-medium mb-4 uppercase tracking-wider text-sm">
              Fotógrafa / Dirección Creativa
            </p>
            <p className="text-cb-dark/80 dark:text-cb-white/80 leading-relaxed max-w-sm text-sm md:text-[15px]">
              Su mirada estética y sensibilidad visual aportan una dirección creativa sólida en cada proyecto, cuidando que cada imagen transmita identidad, emoción y conexión real con la audiencia.
            </p>
          </div></ScrollAnimator>
        </div>
      </section>

      {/* Valores */}
      <Values showButtons={false} />

      {/* CTA final */}
      <Contact />
    </main>
  );
}