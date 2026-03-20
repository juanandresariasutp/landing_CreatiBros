"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { buildImageUrl } from "@/lib/cloudinary";
import { cn } from "@/lib/utils";

type Category = "Todos" | "Eventos" | "Retratos" | "Gastronomía" | "Deportes" | "Video";

const categories: Category[] = ["Todos", "Eventos", "Retratos", "Gastronomía", "Deportes", "Video"];

// Mocks de portafolio
const portfolioItems = [
  { id: 1, category: "Eventos", folder: "bodas", filename: "boda-1.jpg", alt: "Boda en exteriores" },
  { id: 2, category: "Eventos", folder: "15-anos", filename: "quince-1.jpg", alt: "Fiesta de 15 años" },
  { id: 3, category: "Retratos", folder: "retratos", filename: "retrato-1.jpg", alt: "Retrato corporativo" },
  { id: 4, category: "Gastronomía", folder: "gastronomia", filename: "gastro-1.jpg", alt: "Fotografía de platillo gourmet" },
  { id: 5, category: "Deportes", folder: "deportes", filename: "deporte-1.jpg", alt: "Evento deportivo" },
  { id: 6, category: "Video", folder: "video", filename: "video-thumb-1.jpg", alt: "Miniatura de video corporativo" },
  { id: 7, category: "Eventos", folder: "bodas", filename: "boda-2.jpg", alt: "Novios en el atardecer" },
  { id: 8, category: "Retratos", folder: "retratos", filename: "retrato-2.jpg", alt: "Retrato en estudio" },
  { id: 9, category: "Gastronomía", folder: "gastronomia", filename: "gastro-2.jpg", alt: "Fotografía de postre" },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === "Todos" || item.category === activeCategory
  );

  const lightboxSlides = filteredItems.map((item) => ({
    src: buildImageUrl(`portafolio/${item.folder}`, item.filename),
    alt: item.alt,
  }));

  return (
    <section id="portafolio" className="py-24 bg-cb-lavender-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-cb-purple font-semibold tracking-wider uppercase text-sm">
            Nuestro trabajo
          </span>
          <h2 className="font-arsenica text-4xl md:text-5xl font-bold text-cb-navy mt-4 mb-6">
            Portafolio
          </h2>
          <p className="text-lg text-cb-dark/80">
            Explora una selección de nuestros mejores proyectos fotográficos y audiovisuales.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === category
                  ? "bg-cb-purple text-cb-white shadow-md cursor-default"
                  : "bg-cb-white text-cb-dark hover:bg-cb-lavender-light hover:text-cb-navy border border-cb-lavender-light/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Galería Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-xl bg-cb-white shadow-sm cursor-pointer"
              onClick={() => {
                setPhotoIndex(index);
                setLightboxOpen(true);
              }}
            >
              <Image
                src={buildImageUrl(`portafolio/${item.folder}`, item.filename)}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-cb-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-cb-white font-medium mb-1">{item.alt}</span>
                <span className="text-cb-lavender-light text-sm">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={photoIndex}
          slides={lightboxSlides}
        />
      </div>
    </section>
  );
}
