"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function Carousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* MAIN IMAGE STAGE */}
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gray-50 border border-gray-100">
        <Image
          src={images[current]}
          alt={`Product image ${current + 1}`}
          fill
          priority
          className="object-cover transition-all duration-500 ease-in-out"
          // sizes="(max-width: 768px) 100vw, 600px"
        />

        {/* Floating Controls (Only if multiple images) */}
        {images.length > 1 && (
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
            <button
              onClick={prev}
              className="group pointer-events-auto p-3 rounded-full bg-white/80 backdrop-blur-md text-gray-800 shadow-sm border border-gray-200 hover:bg-white transition-all active:scale-90"
              aria-label="Previous image"
            >
              <ChevronLeft
                size={20}
                className="group-hover:-translate-x-0.5 transition-transform cursor-pointer"
              />
            </button>
            <button
              onClick={next}
              className="group pointer-events-auto p-3 rounded-full bg-white/80 backdrop-blur-md text-gray-800 shadow-sm border border-gray-200 hover:bg-white transition-all active:scale-90 cursor-pointer"
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
          <div className="absolute bottom-4 right-4 bg-black/10 backdrop-blur-lg px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
            {current + 1} / {images.length}
          </div>
        )}
      </div>

      {/* THUMBNAIL STRIP */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`relative shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                current === index
                  ? "border-[#08228d] ring-2 ring-[#08228d]/10"
                  : "border-transparent opacity-60 hover:opacity-100"
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
