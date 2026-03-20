"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { buildImageUrl } from "@/lib/cloudinary";

const clientLogos = [
  { id: 1, name: "Empresa 1", filename: "logo1.png" },
  { id: 2, name: "Empresa 2", filename: "logo2.png" },
  { id: 3, name: "Empresa 3", filename: "logo3.png" },
  { id: 4, name: "Empresa 4", filename: "logo4.png" },
  { id: 5, name: "Empresa 5", filename: "logo5.png" },
  { id: 6, name: "Empresa 6", filename: "logo6.png" },
  { id: 7, name: "Empresa 7", filename: "logo7.png" },
];

export function Clients() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "center" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section id="clientes" className="py-20 bg-cb-lavender-light/20 dark:bg-cb-dark/30 border-y border-cb-lavender-light/30 dark:border-cb-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center font-arsenica text-2xl md:text-3xl font-bold text-cb-navy dark:text-cb-white mb-12">
          Marcas que confían en nuestro foco
        </h3>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            {clientLogos.map((logo) => (
              <div
                key={logo.id}
                className="flex-[0_0_50%] sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_16.66%] min-w-0 px-4"
              >
                <div className="relative h-20 grayscale opacity-60 dark:invert dark:opacity-50 hover:grayscale-0 dark:hover:invert-0 hover:opacity-100 dark:hover:opacity-100 transition-all duration-300">
                  <Image
                    src={buildImageUrl("clientes", logo.filename)}
                    alt={`Logo ${logo.name}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
