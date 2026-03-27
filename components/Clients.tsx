"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type CloudinaryImage = {
  publicId: string;
  format: string;
  url: string;
};

const FALLBACK_LOGOS: CloudinaryImage[] = [];

export function Clients() {
  const [logos, setLogos] = useState<CloudinaryImage[]>(FALLBACK_LOGOS);
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "center" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  useEffect(() => {
    let isMounted = true;

    async function loadLogos() {
      try {
        const res = await fetch("/api/cloudinary/images?folder=clientes", {
          cache: "no-store",
        });

        if (!res.ok) {
          return;
        }

        const data = (await res.json()) as { images?: CloudinaryImage[] };
        if (isMounted && data.images && data.images.length > 0) {
          setLogos(data.images);
        }
      } catch (error) {
        console.error("No se pudieron cargar los logos:", error);
      }
    }

    loadLogos();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="clientes" className="py-20 bg-cb-lavender-light/20 dark:bg-cb-dark/30 border-y border-cb-lavender-light/30 dark:border-cb-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center font-arsenica text-2xl md:text-3xl font-bold text-cb-dark dark:text-cb-white mb-12">
          Marcas que confían en nuestro foco
        </h3>

        {logos.length === 0 && (
          <p className="text-center text-cb-dark/70 dark:text-cb-white/70 mb-8">
            Sube tus logos a la carpeta "clientes" en Cloudinary para mostrarlos aquí automáticamente.
          </p>
        )}

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            {logos.map((logo) => (
              <div
                key={logo.publicId}
                className="flex-[0_0_50%] sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_16.66%] min-w-0 px-4"
              >
                <div className="relative h-24 md:h-28 transition-transform duration-300 hover:scale-105">
                  <Image
                    src={logo.url}
                    alt={`Logo ${logo.publicId}`}
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
