import { Contact } from "@/components/Contact";
import { PlayCircle, Video, TrendingUp, MonitorSmartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
  return (
    <main className="bg-cb-white dark:bg-cb-dark min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative w-full bg-cb-navy dark:bg-cb-dark text-cb-white py-24 md:py-32 overflow-hidden border-b border-cb-white/10 text-center">
        {/* Usamos un patron de fondo sutil o div decorativo */}
        <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-cb-lavender-light font-semibold tracking-widest uppercase text-sm mb-4 block">
            Producción Audiovisual
          </span>
          <h1 className="font-arsenica text-5xl md:text-7xl font-bold mb-6">
            Dale movimiento a tu marca
          </h1>
          <p className="text-xl md:text-2xl text-cb-lavender-light/80 font-light leading-relaxed max-w-2xl mx-auto">
            Desde piezas cinematográficas hasta el impacto del formato vertical. Creamos videos que cuentan historias y generan resultados.
          </p>
        </div>
      </section>

      {/* Por qué crear videos */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-arsenica text-4xl md:text-5xl font-bold text-cb-navy dark:text-cb-white mb-6">
              ¿Por qué invertir en video?
            </h2>
            <div className="w-16 h-1 bg-cb-purple mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {reasons.map((item, index) => (
              <div 
                key={index}
                className="bg-cb-lavender-light/10 dark:bg-cb-white/5 p-10 rounded-3xl border border-cb-lavender-light/30 dark:border-cb-white/10 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-cb-purple text-cb-white rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-arsenica text-2xl font-bold text-cb-navy dark:text-cb-white mb-4">
                  {item.title}
                </h3>
                <p className="text-cb-dark/70 dark:text-cb-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* El poder del Reel */}
      <section className="py-24 bg-cb-lavender-light/20 dark:bg-cb-white/5 border-y border-cb-lavender-light/30 dark:border-cb-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="flex items-center gap-2 text-cb-purple font-semibold tracking-wider text-sm mb-4">
              <MonitorSmartphone className="w-5 h-5" />
              EL FORMATO DEL MOMENTO
            </span>
            <h2 className="font-arsenica text-4xl md:text-5xl font-bold text-cb-navy dark:text-cb-white mb-6">
              El impacto visual del contenido corto (Reels / TikToks)
            </h2>
            <div className="space-y-6 text-cb-dark/80 dark:text-cb-white/80 text-lg leading-relaxed">
              <p>
                Hoy en día, la moneda más valiosa es la atención. El formato de video vertical ha transformado la forma en que consumimos información, volviéndose indispensable para cualquier estrategia digital.
              </p>
              <p>
                Diseñamos clips dinámicos, con excelente iluminación, sonido nítido y la narrativa precisa para los primeros 3 segundos. Entendemos el lenguaje de internet para que tu marca se destaque donde la gente pasa su tiempo.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[9/16] w-full max-w-sm mx-auto bg-cb-navy dark:bg-cb-dark rounded-[2.5rem] shadow-2xl overflow-hidden border-[8px] border-cb-white dark:border-cb-white/10 flex items-center justify-center relative">
              {/* Pantalla falsa del celular */}
              <div className="absolute top-0 inset-x-0 h-7 bg-cb-white dark:bg-cb-white/10 rounded-b-3xl w-40 mx-auto"></div>
              
              <div className="w-20 h-20 bg-cb-purple/20 rounded-full flex items-center justify-center animate-pulse">
                <PlayCircle className="w-10 h-10 text-cb-purple ml-1" />
              </div>

              <div className="absolute bottom-6 inset-x-6">
                <div className="w-3/4 h-4 bg-cb-white/20 rounded mb-3"></div>
                <div className="w-1/2 h-3 bg-cb-white/20 rounded"></div>
              </div>
            </div>
            
            {/* Decors */}
            <div className="absolute -z-10 top-1/2 -translate-y-1/2 -right-12 w-64 h-64 bg-cb-purple/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Referencias en Reels */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-arsenica text-4xl md:text-5xl font-bold text-cb-navy dark:text-cb-white mb-6">
            Nuestro trabajo en acción
          </h2>
          <p className="text-lg text-cb-dark/80 dark:text-cb-white/80 mb-16 max-w-2xl mx-auto">
            Próximamente estaremos mostrando nuestras mejores producciones audiovisuales directamente desde Instagram.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Placeholders */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[9/16] bg-cb-lavender-light/30 dark:bg-cb-white/5 rounded-xl border border-cb-lavender-light dark:border-cb-white/10 flex flex-col items-center justify-center text-cb-navy/50 dark:text-cb-white/30 p-6 group cursor-not-allowed">
                <Video className="w-10 h-10 mb-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                <p className="font-medium text-sm text-center">Espacio para Video Reservado</p>
              </div>
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