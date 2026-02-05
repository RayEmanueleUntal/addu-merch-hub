"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function Carousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* MAIN IMAGE STAGE */}
      <div className="relative aspect-[4/5] md:aspect-square w-full overflow-hidden rounded-[2rem] bg-gray-50 border border-gray-100 shadow-inner">
        <Image
          src={images[current]}
          alt={`Product image ${current + 1}`}
          fill
          priority
          className="object-cover transition-all duration-700 ease-in-out"
        />

        {/* Floating Controls (Only if multiple images) */}
        {images.length > 1 && (
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
            <button
              onClick={prev}
              className="group pointer-events-auto p-2.5 md:p-3 rounded-full bg-white/90 backdrop-blur-md text-gray-800 shadow-xl border border-gray-100 hover:bg-white transition-all active:scale-90"
              aria-label="Previous image"
            >
              <ChevronLeft
                size={20}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
            </button>
            <button
              onClick={next}
              className="group pointer-events-auto p-2.5 md:p-3 rounded-full bg-white/90 backdrop-blur-md text-gray-800 shadow-xl border border-gray-100 hover:bg-white transition-all active:scale-90"
              aria-label="Next image"
            >
              <ChevronRight
                size={20}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>
        )}

        {/* Simple Page Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-xl px-4 py-1.5 rounded-full text-[9px] font-black text-white uppercase tracking-[0.2em] border border-white/10">
            {current + 1} / {images.length}
          </div>
        )}
      </div>

      {/* THUMBNAIL STRIP */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto py-2 no-scrollbar px-1">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`relative shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                current === index
                  ? "border-[#08228d] ring-4 ring-[#08228d]/10"
                  : "border-transparent opacity-40 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
