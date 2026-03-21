import Image from "next/image";
import { Contact } from "@/components/Contact";
import { Camera, Mountain } from "lucide-react";

export const metadata = {
  title: "Quiénes Somos | Creatibros",
  description: "Conoce a nuestro equipo: Juan Andrés Arias y Andrés Camilo Trochez. Apasionados por la fotografía, el video y el crecimiento de marcas en el Eje Cafetero.",
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen pt-24 pb-0 bg-cb-white dark:bg-cb-dark text-cb-navy dark:text-cb-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-cb-purple font-semibold tracking-[0.2em] uppercase text-sm mb-6 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-cb-purple"></span>
            Nuestra Historia
            <span className="w-12 h-px bg-cb-purple"></span>
          </p>
          <h1 className="font-arsenica text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Más que capturar imágenes, <br className="hidden md:block" />
            <span className="text-cb-purple italic">construimos legados.</span>
          </h1>
          <p className="text-xl md:text-2xl text-cb-navy/80 dark:text-cb-white/80 leading-relaxed max-w-2xl mx-auto">
            Fundamos Creatibros con la visión de fusionar el arte audiovisual con el mundo digital y los grandes momentos.
          </p>
        </div>
      </section>

      {/* Propósito */}
      <section className="bg-cb-navy text-cb-white dark:bg-[#0c1220] py-20 lg:py-24 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
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
            
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
               {/* Imagen representativa del eje cafetero o trabajando. Reemplazar cuando se tenga fotos reales. */}
               <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Creatibros trabajando en el Eje Cafetero"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cb-navy/90 via-cb-navy/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-2xl font-arsenica font-bold text-white mb-2">Creatividad y Estrategia</p>
                <p className="text-cb-lavender-light font-medium">De la visión a la realidad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Los Fundadores */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-arsenica text-4xl lg:text-5xl font-bold mb-4">Conoce al Equipo</h2>
          <div className="w-24 h-1 bg-cb-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Juan Andrés Arias */}
          <div className="group flex flex-col items-center text-center">
            <div className="relative w-56 h-56 md:w-64 md:h-64 mb-6 rounded-full overflow-hidden shadow-xl border-4 border-cb-white dark:border-cb-dark transition-transform duration-500 group-hover:scale-105">
              <Image 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop" 
                alt="Juan Andrés Arias"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-arsenica text-2xl md:text-3xl font-bold mb-2">Juan Andrés Arias</h3>
            <p className="text-cb-purple font-medium mb-4 uppercase tracking-wider text-sm">
              Fotógrafo / Cineasta / Ingeniero
            </p>
            <p className="text-cb-navy/80 dark:text-cb-white/80 leading-relaxed max-w-sm text-sm md:text-base">
              Con más de <strong>6 años de experiencia</strong> en el cubrimiento de eventos y 2 años como realizador audiovisual. Su perfil técnico como <strong>Ingeniero de Sistemas y Computación</strong> le permite integrar tecnología y eficiencia en estrategias de marketing digital de alto impacto.
            </p>
          </div>

          {/* Andrés Camilo Trochez */}
          <div className="group flex flex-col items-center text-center">
            <div className="relative w-56 h-56 md:w-64 md:h-64 mb-6 rounded-full overflow-hidden shadow-xl border-4 border-cb-white dark:border-cb-dark transition-transform duration-500 group-hover:scale-105">
              <Image 
                src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=2070&auto=format&fit=crop" 
                alt="Andrés Camilo Trochez"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-arsenica text-2xl md:text-3xl font-bold mb-2">Andrés Camilo Trochez</h3>
            <p className="text-cb-purple font-medium mb-4 uppercase tracking-wider text-sm">
              Fotógrafo / Creador de Contenido
            </p>
            <p className="text-cb-navy/80 dark:text-cb-white/80 leading-relaxed max-w-sm text-sm md:text-base">
              <strong>Profesional en Ciencias del Deporte y la Recreación.</strong> Ha integrado su disciplina con 2 años de experiencia en fotografía y video. Aporta una visión dinámica, creativa y llena de vitalidad para que la identidad de cada marca se conecte genuinamente con su audiencia.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <Contact />
    </main>
  );
}