import { Zap, Award, Target, Camera, Sparkles, Heart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScrollAnimator } from "./ScrollAnimator";

const values = [
  {
    icon: <Award className="w-5 h-5 text-cb-dark" />,
    title: "Más Alta Calidad",
    color: "bg-cb-lavender-light",
    position: "hidden xl:flex xl:top-[12%] xl:left-[50%] xl:-translate-x-1/2",
    animation: "animate-float"
  },
  {
    icon: <Zap className="w-5 h-5 text-white" />,
    title: "Entregas Inmediatas",
    color: "bg-cb-purple",
    position: "hidden xl:flex xl:top-[25%] xl:left-[15%]",
    animation: "animate-float-delayed"
  },
  {
    icon: <Heart className="w-5 h-5 text-cb-dark" />,
    title: "Atención Personalizada",
    color: "bg-cb-lavender-light",
    position: "hidden xl:flex xl:bottom-[35%] xl:left-[10%]",
    animation: "animate-float-fast"
  },
  {
    icon: <Camera className="w-5 h-5 text-cb-dark" />,
    title: "Tecnología Avanzada",
    color: "bg-cb-lavender-light",
    position: "hidden xl:flex xl:top-[30%] xl:right-[15%]",
    animation: "animate-float"
  },
  {
    icon: <Target className="w-5 h-5 text-white" />,
    title: "Enfoque Estratégico",
    color: "bg-cb-purple",
    position: "hidden xl:flex xl:bottom-[30%] xl:right-[10%]",
    animation: "animate-float-delayed"
  },
  {
    icon: <Sparkles className="w-5 h-5 text-cb-dark" />,
    title: "Ideas Ilimitadas",
    color: "bg-cb-lavender-light",
    position: "hidden xl:flex xl:bottom-[10%] xl:left-[40%]",
    animation: "animate-float-fast"
  },
];

export function Values({ showButtons = true }: { showButtons?: boolean }) {
  return (
    <section className="relative w-full py-20 lg:py-40 bg-cb-white text-cb-dark dark:bg-[#06060c] dark:text-white overflow-hidden flex flex-col xl:flex-row items-center justify-center min-h-[700px] xl:min-h-[800px] border-t border-cb-lavender-light/30 dark:border-white/5">
      
      {/* Radial Gradient Glow in the background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-cb-lavender-med/20 dark:bg-cb-purple/10 blur-[150px] rounded-full"></div>
      </div>

      {/* Floating Badges (Desktop XL) */}
      {values.map((v, i) => (
        <ScrollAnimator
          key={i}
          animation="scaleIn"
          delay={120 + i * 70}
          className={cn(
            "absolute items-center gap-4 bg-cb-white/80 dark:bg-[#16161f] border border-cb-lavender-light/40 dark:border-white/10 pr-6 p-2 rounded-full shadow-xl dark:shadow-2xl backdrop-blur-sm z-20 hover:scale-105 hover:border-cb-purple/50 transition-all duration-300",
            v.position,
            v.animation
          )}
        >
          <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shadow-inner", v.color)}>
            {v.icon}
          </div>
          <span className="font-medium text-sm lg:text-base text-cb-dark/85 dark:text-white/90">{v.title}</span>
        </ScrollAnimator>
      ))}

      {/* Center Content */}
      <ScrollAnimator animation="fadeInUp" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="w-5 h-5 text-cb-lavender-med" />
          <span className="text-cb-lavender-med font-bold tracking-widest uppercase text-sm">
            Nuestros Valores
          </span>
        </div>
        
        <h2 className="font-arsenica text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8 text-cb-dark dark:text-white drop-shadow-md">
          Más que una <br className="hidden md:block"/>
          Agencia Creativa
        </h2>
        
        <p className="text-lg md:text-xl text-cb-dark/70 dark:text-white/70 mb-12 max-w-2xl leading-relaxed mx-auto font-medium">
          Nuestra agencia te ofrece un conjunto de soluciones visuales diseñadas 
          para organizar tus ideas, potenciar enormemente la presencia de tu marca y alcanzar 
          tus objetivos comerciales.
        </p>

        {showButtons && (
          <div className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto">
            <Link
              href="/nosotros"
              className="px-8 py-4 bg-cb-lavender-light text-cb-dark rounded-full font-bold hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(217,217,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-center text-lg"
            >
              Saber Más
            </Link>
            <Link
              href="/#contacto"
              className="px-8 py-4 bg-transparent border-2 border-cb-dark/20 dark:border-white/20 text-cb-dark dark:text-white rounded-full font-bold hover:border-cb-dark dark:hover:border-white hover:bg-cb-dark/5 dark:hover:bg-white/5 transition-colors duration-300 text-center text-lg"
            >
              Contáctanos
            </Link>
          </div>
        )}
      </ScrollAnimator>

      {/* Mobile Badges Grid (visible only on smaller screens < xl) */}
      <ScrollAnimator animation="fadeInUp" delay={180} className="xl:hidden relative z-10 w-full px-4 mt-20 flex flex-wrap justify-center gap-4 max-w-3xl">
        {values.map((v, i) => (
          <div 
            key={i} 
            className="flex items-center gap-3 bg-cb-white/80 dark:bg-[#16161f] border border-cb-lavender-light/40 dark:border-white/10 pr-5 p-1.5 rounded-full shadow-lg"
          >
            <div className={cn("w-9 h-9 rounded-full flex items-center justify-center", v.color)}>
              {v.icon}
            </div>
            <span className="font-medium text-xs sm:text-sm text-cb-dark/85 dark:text-white/90">{v.title}</span>
          </div>
        ))}
      </ScrollAnimator>
    </section>
  );
}