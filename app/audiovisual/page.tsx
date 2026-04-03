import { Contact } from "@/components/Contact";
import { ReelsGrid } from "@/components/ReelsGrid";
import Image from "next/image";
import { PlayCircle, Video, TrendingUp, MonitorSmartphone } from "lucide-react";
import { buildImageUrl, buildVideoUrl } from "@/lib/cloudinary";
import { ScrollAnimator } from "@/components/ScrollAnimator";

export const metadata = {
  title: "Producción Audiovisual | Creatibros",
  description: "Da vida a tus ideas con nuestra producción de video profesional. Especialistas en videos corporativos, formato corto y comerciales.",
};

const reasons = [
  {
    title: "Conexión Emocional",
    description: "El video es la herramienta más poderosa para transmitir la personalidad de tu marca y conectar profundamente con tu audiencia.",
    icon: Video,
  },
  {
    title: "Mayor Alcance",
    description: "Los algoritmos priorizan el formato de video, aumentando exponencialmente la visibilidad de tu negocio frente a nuevos clientes.",
    icon: TrendingUp,
  },
  {
    title: "Retención de Atención",
    description: "Retén a los usuarios por más tiempo. Una narración visual dinámica logra explicar productos complejos de forma sencilla y atractiva.",
    icon: PlayCircle,
  }
];

export default function AudiovisualPage() {
  const audiovisualHeroBg = buildImageUrl("", "hero-audiovisual.jpg");
  const reelVideos = ["reel-1", "reel-2", "reel-3", "reel-4"];
  const featuredVideoSources = [
    buildVideoUrl("audiovisual", "reel-muestra.mp4"),
    buildVideoUrl("audiovisual", "reel-muestra.mov"),
    buildVideoUrl("", "reel-muestra.mp4"),
    buildVideoUrl("", "reel-muestra.mov"),
  ].filter(Boolean);

  return (
    <main className="bg-cb-white dark:bg-cb-dark min-h-screen pt-24 pb-12 text-cb-dark dark:text-cb-white selection:bg-cb-purple selection:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-cb-white/10 min-h-[70vh] lg:min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={audiovisualHeroBg}
            alt="Producción audiovisual Creatibros"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-cb-dark/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full text-cb-white text-center">
          <ScrollAnimator animation="fadeInUp" className="max-w-4xl mx-auto">
            <p className="text-cb-lavender-light font-semibold tracking-[0.2em] uppercase text-sm mb-6 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-cb-lavender-light"></span>
              Producción Audiovisual
              <span className="w-12 h-px bg-cb-lavender-light"></span>
            </p>
            <h1 className="font-arsenica text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8">
              Dale movimiento <br />
              <span className="text-cb-lavender-light italic">a tu marca.</span>
            </h1>
            <p className="text-xl md:text-2xl text-cb-white/90 max-w-2xl mx-auto leading-relaxed">
              Desde piezas cinematográficas hasta el impacto del formato vertical. Creamos videos que cuentan historias y generan resultados.
            </p>
          </ScrollAnimator>
        </div>
      </section>

      {/* El poder del Reel */}
      <section className="py-24 bg-cb-lavender-light/20 dark:bg-cb-white/5 border-y border-cb-lavender-light/30 dark:border-cb-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
          <ScrollAnimator animation="fadeInLeft" className="max-w-xl">
            <span className="flex items-center gap-2 text-cb-purple font-semibold tracking-wider text-sm mb-4">
              <MonitorSmartphone className="w-5 h-5" />
              EL FORMATO DEL MOMENTO
            </span>
            <h2 className="font-arsenica text-4xl md:text-5xl font-bold text-cb-dark dark:text-cb-white mb-6">
              El impacto visual del contenido corto (Reels / TikToks)
            </h2>
            <div className="space-y-6 text-cb-dark dark:text-cb-white/80 text-lg leading-relaxed">
              <p>
                Hoy en día, la moneda más valiosa es la atención. El formato de video vertical ha transformado la forma en que consumimos información, volviéndose indispensable para cualquier estrategia digital.
              </p>
              <p>
                Diseñamos clips dinámicos, con excelente iluminación, sonido nítido y la narrativa precisa para los primeros 3 segundos. Entendemos el lenguaje de internet para que tu marca se destaque donde la gente pasa su tiempo.
              </p>
            </div>
          </ScrollAnimator>

          <ScrollAnimator animation="fadeInRight" delay={120} className="relative flex justify-center lg:justify-self-end w-full">
            <div className="aspect-[9/16] w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[300px] bg-cb-navy dark:bg-cb-dark rounded-[2rem] shadow-2xl overflow-hidden border-[6px] border-cb-white dark:border-cb-white/10 flex items-center justify-center relative mx-auto lg:mx-0">
              {/* Pantalla falsa del celular */}
              <div className="absolute top-0 inset-x-0 h-6 bg-cb-white dark:bg-cb-white/10 rounded-b-3xl w-32 mx-auto"></div>

              {featuredVideoSources.length > 0 ? (
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  muted
                >
                  {featuredVideoSources.map((src) => (
                    <source key={src} src={src} />
                  ))}
                  Tu navegador no soporta reproducción de video.
                </video>
              ) : (
                <>
                  <div className="w-20 h-20 bg-cb-purple/20 rounded-full flex items-center justify-center animate-pulse">
                    <PlayCircle className="w-10 h-10 text-cb-purple ml-1" />
                  </div>

                  <div className="absolute bottom-6 inset-x-6">
                    <div className="w-3/4 h-4 bg-cb-white/20 rounded mb-3"></div>
                    <div className="w-1/2 h-3 bg-cb-white/20 rounded"></div>
                  </div>
                </>
              )}
            </div>

            {/* Decors */}
            <div className="absolute -z-10 top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 w-64 h-64 bg-cb-purple/30 rounded-full blur-3xl"></div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Referencias en Reels */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimator animation="fadeInUp">
            <h2 className="font-arsenica text-4xl md:text-5xl font-bold text-cb-dark dark:text-cb-white mb-6">
            Nuestro trabajo en acción
            </h2>
          </ScrollAnimator>
          <ScrollAnimator animation="fadeInUp" delay={120}>
            <p className="text-lg text-cb-dark dark:text-cb-white/80 mb-16 max-w-2xl mx-auto">
            Historias que capturan miradas en segundos: descubre una selección de reels diseñados para emocionar, conectar y convertir tu contenido en resultados reales.
            </p>
          </ScrollAnimator>

          <ScrollAnimator animation="scaleIn" delay={180}>
            <ReelsGrid reelIds={reelVideos} />
          </ScrollAnimator>
        </div>
      </section>

      {/* Por qué crear videos */}
      <section className="py-20 md:py-28 bg-cb-lavender-light/15 dark:bg-cb-white/5 border-y border-cb-lavender-light/30 dark:border-cb-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimator animation="fadeInUp" className="text-center mb-16">
            <h2 className="font-arsenica text-4xl md:text-5xl font-bold text-cb-dark dark:text-cb-white mb-6">
              ¿Por qué invertir en video?
            </h2>
            <div className="w-16 h-1 bg-cb-purple mx-auto rounded-full"></div>
          </ScrollAnimator>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {reasons.map((item, index) => (
              <ScrollAnimator
                key={index}
                animation={index === 0 ? "fadeInLeft" : index === 2 ? "fadeInRight" : "fadeInUp"}
                delay={index * 120 + 80}
              >
                <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-cb-lavender-light/30 dark:border-cb-white/10 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 bg-cb-purple text-cb-white rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-arsenica text-2xl font-bold text-cb-dark dark:text-cb-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-cb-dark/90 dark:text-cb-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <div className="bg-cb-white dark:bg-cb-dark">
        <Contact />
      </div>
    </main>
  );
}
