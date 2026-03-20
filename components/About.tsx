import Image from "next/image";
import { buildImageUrl } from "@/lib/cloudinary";

export function About() {
  return (
    <section id="quienes-somos" className="py-24 bg-cb-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Imagen de equipo */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Elementos decorativos */}
              <div className="absolute -inset-4 bg-cb-lavender-light/40 rounded-3xl -rotate-6 transform origin-bottom-left transition-transform hover:rotate-0 duration-500"></div>
              <div className="absolute inset-0 overflow-hidden rounded-2xl bg-cb-lavender-light">
                <Image
                  src={buildImageUrl("equipo", "nosotros.jpg")}
                  alt="Equipo de Creatibros"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Badge flotante */}
            <div className="absolute bottom-10 -right-6 lg:-right-10 bg-cb-white p-4 lg:p-6 rounded-xl shadow-xl border border-cb-lavender-light/30">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black text-cb-purple">+2</div>
                <div className="text-sm font-medium text-cb-navy leading-tight">
                  Años de <br/>
                  Experiencia
                </div>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="w-full lg:w-1/2">
            <span className="text-cb-purple font-semibold tracking-wider uppercase text-sm">
              Nuestra Historia
            </span>
            <h2 className="font-arsenica text-4xl md:text-5xl font-bold text-cb-navy mt-4 mb-6">
              Más que una agencia, somos Creatibros
            </h2>
            
            <div className="space-y-6 text-lg text-cb-dark/80">
              <p>
                Nacimos de la pasión compartida por contar historias visuales que emocionen. Somos un equipo de profesionales creativos dedicados a transformar momentos fugaces en recuerdos eternos.
              </p>
              <p>
                Durante más de 2 años, hemos acompañado a parejas, familias, marcas y emprendedores, ofreciendo una mirada fresca y profesional que se adapta a las necesidades únicas de cada proyecto.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              <div className="border-l-2 border-cb-purple pl-4">
                <h4 className="font-arsenica text-xl font-bold text-cb-navy mb-2">Visión Creativa</h4>
                <p className="text-cb-dark/70">
                  Enfocados en el detalle, la luz y las emociones reales por encima de las poses forzadas.
                </p>
              </div>
              <div className="border-l-2 border-cb-lavender-med pl-4">
                <h4 className="font-arsenica text-xl font-bold text-cb-navy mb-2">Nuestro Compromiso</h4>
                <p className="text-cb-dark/70">
                  Calidad excepcional, entrega a tiempo y una experiencia cercana y humana.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
