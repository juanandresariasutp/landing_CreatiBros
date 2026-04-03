"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollAnimator } from "./ScrollAnimator";

const faqs = [
  {
    question: "¿Con cuánto tiempo de anticipación debo agendar la fecha para mi evento?",
    answer: "Recomendamos separar tu fecha con al menos 2 a 3 meses de anticipación, especialmente para bodas, 15 años o eventos grandes. Sin embargo, no dudes en contactarnos para verificar disponibilidad en el calendario, a veces contamos con fechas libres a corto plazo."
  },
  {
    question: "¿En cuánto tiempo entregan el material final?",
    answer: "Nuestro tiempo de entrega promedio es de 2 a 4 semanas para fotografías de eventos completos. Para proyectos corporativos y videos cortos de redes sociales, podemos acordar entregas más rápidas (1 a 2 semanas) según las necesidades de tu estrategia de marketing."
  },
  {
    question: "¿Realizan coberturas u trabajos fuera del Eje Cafetero?",
    answer: "¡Por supuesto! Aunque nuestra base de operaciones está en el Eje Cafetero, nos encanta viajar y acompañarte en otras ciudades e incluso países. Los viáticos de transporte y hospedaje se cotizan y acuerdan de manera transparente por separado."
  },
  {
    question: "¿Entregan todas las fotografías crudas sin editar (formato RAW)?",
    answer: "Por respeto a nuestro estilo artístico y al estándar de calidad que prometemos, no entregamos material sin editar. Gran parte de la magia y profesionalismo de Creatibros sucede en la curaduría y la postproducción (colorización y retoque) de cada toma."
  },
  {
    question: "¿Cómo funciona el proceso y método de pago?",
    answer: "Para asegurar la fecha en nuestra agenda o dar inicio a un proyecto corporativo, solicitamos un anticipo del 50%. El 50% final se cancela al momento de la entrega definitiva de todo tu material terminado."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white/60 dark:bg-cb-dark/50 border-t border-cb-lavender-light/20 dark:border-cb-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera FAQ */}
        <ScrollAnimator animation="fadeInUp" delay={40}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-cb-purple/10 rounded-full mb-6 text-cb-purple">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h2 className="font-arsenica text-4xl md:text-5xl font-bold mb-6 text-cb-dark dark:text-cb-white">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-cb-dark/70 dark:text-cb-white/70 max-w-2xl mx-auto">
              Resolvemos las inquietudes más comunes que tienen las personas antes de trabajar con nosotros.
            </p>
          </div>
        </ScrollAnimator>

        {/* Acordeón de Preguntas */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <ScrollAnimator
                key={index}
                animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                delay={index * 120 + 60}
              >
                <div 
                  className={cn(
                    "border rounded-2xl transition-colors duration-300 overflow-hidden",
                    isOpen 
                      ? "bg-cb-white dark:bg-[#16161f] border-cb-purple shadow-lg" 
                      : "bg-cb-white/50 dark:bg-cb-dark/30 border-cb-lavender-light/30 dark:border-white/10 hover:border-cb-purple/50 dark:hover:border-cb-purple/50"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className={cn(
                      "font-bold text-lg transition-colors",
                      isOpen ? "text-cb-purple" : "text-cb-dark dark:text-cb-white"
                    )}>
                      {faq.question}
                    </span>
                    <div className={cn(
                      "ml-4 flex-shrink-0 p-2 rounded-full transition-colors",
                      isOpen ? "bg-cb-purple text-white" : "bg-cb-lavender-light/20 text-cb-dark dark:text-cb-white/50 dark:bg-white/5"
                    )}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  
                  {/* Contenido Desplegable (Animación fluida usando CSS Grid) */}
                  <div 
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden px-6">
                      <p className="text-cb-dark/80 dark:text-cb-white/70 leading-relaxed border-t border-cb-lavender-light/20 dark:border-white/10 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimator>
            );
          })}
        </div>

      </div>
    </section>
  );
}