"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { buildImageUrl } from "@/lib/cloudinary";

export type PortfolioImage = {
  id: string | number;
  folder: string;
  filename: string;
  alt: string;
  url?: string;
};

interface Props {
  title: string;
  description?: string;
  images: PortfolioImage[];
}

export function PortfolioCarousel({ title, description, images }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const lightboxSlides = images.map((img) => ({
    src: img.url ?? buildImageUrl(`portafolio/${img.folder}`, img.filename),
    alt: img.alt,
  }));

  const rows = useMemo(() => {
    const chunkSize = 10;
    const chunkedRows: Array<Array<{ image: PortfolioImage; index: number }>> = [];

    for (let index = 0; index < images.length; index += chunkSize) {
      chunkedRows.push(
        images.slice(index, index + chunkSize).map((image, offset) => ({
          image,
          index: index + offset,
        }))
      );
    }

    return chunkedRows;
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="mb-8">
      {(title || description) && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div>
              {title && <h3 className="font-arsenica text-3xl font-bold text-cb-dark dark:text-cb-white">{title}</h3>}
              {description && <p className="text-cb-dark/90 dark:text-cb-white/70 mt-2">{description}</p>}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-1 sm:px-2">
        <div className="space-y-4 sm:space-y-5">
          {rows.map((row, rowIndex) => {
            return (
              <div
                key={`row-${rowIndex}`}
                className="overflow-hidden rounded-2xl"
              >
                <div
                  className={`marquee-track ${rowIndex % 2 === 1 ? "marquee-right" : "marquee-left"}`}
                  style={{ animationDuration: `${Math.max(36, row.length * 12)}s` }}
                >
                  {Array.from({ length: 2 }).map((_, duplicateIndex) => (
                    <div key={`${rowIndex}-copy-${duplicateIndex}`} className="flex gap-4 w-max py-1 pr-4">
                      {row.map(({ image, index }, itemIndex) => (
                        <button
                          key={`${rowIndex}-${duplicateIndex}-${itemIndex}-${image.id}`}
                          type="button"
                          className="group relative flex-shrink-0 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[170px] sm:h-[190px] md:h-[220px] rounded-2xl overflow-hidden border border-cb-lavender-light/30 dark:border-cb-white/15 bg-gradient-to-br from-white/75 to-cb-lavender-light/20 dark:from-cb-white/10 dark:to-cb-navy/20 shadow-[0_10px_28px_rgba(15,19,55,0.12)]"
                          onClick={() => {
                            setPhotoIndex(index);
                            setLightboxOpen(true);
                          }}
                        >
                          <Image
                            src={image.url ?? buildImageUrl(`portafolio/${image.folder}`, image.filename)}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 300px, 340px"
                            className="object-contain p-1.5 sm:p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-cb-navy/0 group-hover:bg-cb-navy/20 transition-colors duration-300" />
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
        }

        .marquee-left {
          animation-name: scroll-left;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .marquee-right {
          animation-name: scroll-right;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={lightboxSlides}
        plugins={[Zoom]}
        controller={{ closeOnBackdropClick: true }}
        zoom={{
          maxZoomPixelRatio: 4,
          zoomInMultiplier: 2,
          doubleTapDelay: 250,
          doubleClickDelay: 250,
          wheelZoomDistanceFactor: 120,
          pinchZoomDistanceFactor: 120,
          scrollToZoom: true,
        }}
      />
    </div>
  );
}
