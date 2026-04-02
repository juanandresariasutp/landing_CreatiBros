"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { buildVideoUrl } from "@/lib/cloudinary";

type ReelsGridProps = {
  reelIds: string[];
};

export function ReelsGrid({ reelIds }: ReelsGridProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const reels = useMemo(
    () =>
      reelIds.map((id) => ({
        id,
        sources: [
          buildVideoUrl("audiovisual", `${id}.mp4`),
          buildVideoUrl("audiovisual", `${id}.mov`),
          buildVideoUrl("", `${id}.mp4`),
          buildVideoUrl("", `${id}.mov`),
        ].filter(Boolean),
      })),
    [reelIds]
  );

  const selectedSources =
    reels.find((reel) => reel.id === selectedVideo)?.sources ?? [];

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        {reels.map((reel) => (
          <button
            key={reel.id}
            type="button"
            onClick={() => setSelectedVideo(reel.id)}
            className="group relative aspect-[9/16] rounded-xl border border-cb-lavender-light dark:border-cb-white/10 overflow-hidden bg-cb-navy dark:bg-cb-white/5 text-left"
            aria-label={`Abrir ${reel.id} en pantalla completa`}
          >
            {reel.sources.length > 0 ? (
              <video
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                muted
                playsInline
                autoPlay
                loop
                preload="metadata"
              >
                {reel.sources.map((src) => (
                  <source key={src} src={src} />
                ))}
              </video>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-cb-white/50 text-sm px-3 text-center">
                Video no disponible
              </div>
            )}
          </button>
        ))}
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 z-[120] bg-black/95 p-4 sm:p-6 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Reel en pantalla completa"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Cerrar video"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="w-full h-full max-w-5xl max-h-[95vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedSources.length > 0 ? (
              <video
                className="w-full h-full object-contain rounded-lg"
                controls
                autoPlay
                playsInline
                preload="auto"
              >
                {selectedSources.map((src) => (
                  <source key={src} src={src} />
                ))}
              </video>
            ) : (
              <div className="text-white/70 text-center">No se pudo cargar el video.</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
