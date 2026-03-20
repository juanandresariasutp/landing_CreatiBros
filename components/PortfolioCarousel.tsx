"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buildImageUrl } from "@/lib/cloudinary";

export type PortfolioImage = {
  id: string | number;
  folder: string;
  filename: string;
  alt: string;
};

interface Props {
  title: string;
  description?: string;
  images: PortfolioImage[];
}

export function PortfolioCarousel({ title, description, images }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const lightboxSlides = images.map((img) => ({
    src: buildImageUrl(`portafolio/${img.folder}`, img.filename),
    alt: img.alt,
  }));

  if (!images || images.length === 0) return null;

  return (
    <div className="mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h3 className="font-arsenica text-3xl font-bold text-cb-navy">{title}</h3>
            {description && <p className="text-cb-dark/70 mt-2">{description}</p>}
          </div>
          
          <div className="hidden sm:flex gap-3">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-cb-lavender-med flex items-center justify-center text-cb-navy hover:bg-cb-lavender-light transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-cb-lavender-med flex items-center justify-center text-cb-navy hover:bg-cb-lavender-light transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-0">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {images.map((img, index) => (
              <div
                key={img.id}
                className="relative flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_25%] aspect-[4/5] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => {
                  setPhotoIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <Image
                  src={buildImageUrl(`portafolio/${img.folder}`, img.filename)}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 768px) 45vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-cb-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-cb-white font-medium">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={lightboxSlides}
      />
    </div>
  );
}
