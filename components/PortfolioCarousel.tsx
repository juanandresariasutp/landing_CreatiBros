"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
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
  const IMAGES_PER_PAGE = 15;
  const DEFAULT_IMAGE_RATIO = 1.25;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [columnCount, setColumnCount] = useState(4);
  const [imageRatios, setImageRatios] = useState<Record<number, number>>({});
  const galleryTopRef = useRef<HTMLDivElement | null>(null);

  const lightboxSlides = images.map((img) => ({
    src: img.url ?? buildImageUrl(`portafolio/${img.folder}`, img.filename),
    alt: img.alt,
  }));

  const totalPages = Math.max(1, Math.ceil(images.length / IMAGES_PER_PAGE));

  const pagedImages = useMemo(() => {
    const start = (currentPage - 1) * IMAGES_PER_PAGE;
    const end = start + IMAGES_PER_PAGE;
    return images.slice(start, end);
  }, [currentPage, images]);

  const distributedColumns = useMemo(() => {
    const baseIndex = (currentPage - 1) * IMAGES_PER_PAGE;
    const columns = Array.from({ length: columnCount }, () => [] as Array<{ image: PortfolioImage; globalIndex: number }>);
    const estimatedHeights = Array.from({ length: columnCount }, () => 0);

    pagedImages.forEach((image, index) => {
      const globalIndex = baseIndex + index;
      const estimatedRatio = imageRatios[globalIndex] ?? DEFAULT_IMAGE_RATIO;
      const targetColumn = estimatedHeights.indexOf(Math.min(...estimatedHeights));

      estimatedHeights[targetColumn] += estimatedRatio;
      columns[targetColumn].push({ image, globalIndex: baseIndex + index });
    });

    return columns;
  }, [DEFAULT_IMAGE_RATIO, columnCount, currentPage, imageRatios, pagedImages]);

  useEffect(() => {
    const updateColumnCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setColumnCount(4);
      } else if (width >= 768) {
        setColumnCount(3);
      } else {
        setColumnCount(2);
      }
    };

    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [images]);

  useEffect(() => {
    setImageRatios({});
  }, [images]);

  const scrollToGalleryTop = () => {
    if (!galleryTopRef.current) return;

    const navbarOffset = 110;
    const top = galleryTopRef.current.getBoundingClientRect().top + window.scrollY - navbarOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  const handlePageChange = (nextPage: number) => {
    if (nextPage === currentPage) return;
    scrollToGalleryTop();
    setCurrentPage(nextPage);
  };

  if (!images || images.length === 0) return null;

  return (
    <div ref={galleryTopRef} className="mb-8">
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

      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {distributedColumns.map((column, columnIndex) => (
            <div key={`column-${columnIndex}`} className="flex flex-col gap-3 sm:gap-4">
              {column.map(({ image, globalIndex }) => (
                <button
                  key={`${image.id}-${globalIndex}`}
                  type="button"
                  className="group relative block w-full overflow-hidden rounded-2xl border border-cb-lavender-light/30 dark:border-cb-white/15 bg-gradient-to-br from-white/75 to-cb-lavender-light/20 dark:from-cb-white/10 dark:to-cb-navy/20 shadow-[0_10px_28px_rgba(15,19,55,0.12)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_18px_42px_rgba(15,19,55,0.22)]"
                  onClick={() => {
                    setPhotoIndex(globalIndex);
                    setLightboxOpen(true);
                  }}
                >
                  <div className="relative w-full">
                    <Image
                      src={image.url ?? buildImageUrl(`portafolio/${image.folder}`, image.filename)}
                      alt={image.alt}
                      width={1400}
                      height={1800}
                      onLoadingComplete={(img) => {
                        const ratio = img.naturalHeight / img.naturalWidth;
                        if (!ratio || Number.isNaN(ratio)) return;

                        setImageRatios((prev) => {
                          if (prev[globalIndex] === ratio) return prev;
                          return { ...prev, [globalIndex]: ratio };
                        });
                      }}
                      sizes="(max-width: 640px) 48vw, (max-width: 768px) 48vw, (max-width: 1024px) 31vw, 23vw"
                      className="h-auto w-full origin-center transform-gpu transition-transform duration-700 ease-out group-hover:scale-[1.12]"
                    />
                    <div className="absolute inset-0 bg-cb-navy/0 group-hover:bg-cb-navy/14 transition-colors duration-500" />
                  </div>
                </button>
              ))}
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <button
              type="button"
              onClick={(event) => {
                event.currentTarget.blur();
                handlePageChange(Math.max(1, currentPage - 1));
              }}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-xl border border-cb-lavender-light/40 dark:border-cb-white/20 text-sm font-medium text-cb-dark dark:text-cb-white transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cb-lavender-light/30 dark:hover:bg-cb-white/10"
            >
              Anterior
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => handlePageChange(page)}
                className={`min-w-10 h-10 px-3 rounded-xl border text-sm font-semibold transition ${
                  currentPage === page
                    ? "border-cb-pink bg-cb-pink text-white"
                    : "border-cb-lavender-light/40 dark:border-cb-white/20 text-cb-dark dark:text-cb-white hover:bg-cb-lavender-light/30 dark:hover:bg-cb-white/10"
                }`}
                aria-label={`Ir a la página ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={(event) => {
                event.currentTarget.blur();
                handlePageChange(Math.min(totalPages, currentPage + 1));
              }}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-xl border border-cb-lavender-light/40 dark:border-cb-white/20 text-sm font-medium text-cb-dark dark:text-cb-white transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cb-lavender-light/30 dark:hover:bg-cb-white/10"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={lightboxSlides}
        plugins={[Zoom, Counter]}
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
