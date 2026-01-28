"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronRight, ChevronLeft, Divide } from "lucide-react";

export default function Carousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev: number) => (prev == 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev: number) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Image */}
      <div className="relative h-64 overflow-hidden rounded-xl">
        <Image
          src={images[current]}
          alt="carousel image"
          fill
          className="object-cover transition-all duration-500"
        />
      </div>

      {/* Left Arrow */}
      {images.length > 1 && (
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          <ChevronLeft></ChevronLeft>
        </button>
      )}

      {/* Right Arrow */}
      {images.length > 1 && (
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          <ChevronRight></ChevronRight>
        </button>
      )}
    </div>
  );
}
