import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { buildImageUrl } from "@/lib/cloudinary";

export function Hero() {
  const bgImage = buildImageUrl("hero", "hero-bg.jpg");

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Creatibros Producción Audiovisual"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay para garantizar legibilidad */}
        <div className="absolute inset-0 bg-cb-dark/60 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <span className="inline-block py-1 px-3 rounded-full bg-cb-lavender-light/20 text-cb-lavender-light backdrop-blur-sm text-sm font-medium tracking-wider mb-6">
          AGENCIA CREATIVA
        </span>
        <h1 className="font-arsenica text-5xl md:text-7xl font-bold text-cb-white leading-tight mb-6">
          Capturamos tu esencia, <span className="text-cb-lavender-light">contamos tu historia</span>
        </h1>
        <p className="text-lg md:text-xl text-cb-white/90 mb-10 max-w-2xl mx-auto font-light">
          Especialistas en fotografía y producción de video para eventos, empresas y marcas personales. Inmortalizamos los momentos que de verdad importan.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="group flex items-center gap-2 bg-cb-purple hover:bg-cb-navy text-cb-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Habla con nosotros
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portafolio"
            className="group flex items-center gap-2 bg-cb-white/10 hover:bg-cb-white/20 text-cb-white px-8 py-4 rounded-full text-lg font-medium backdrop-blur-sm border border-cb-white/30 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Ver portafolio
          </a>
        </div>
      </div>
    </section>
  );
}
