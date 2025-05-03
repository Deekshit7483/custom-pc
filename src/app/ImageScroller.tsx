'use client';

import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ImageScroller({ images }: { images: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const imageWidth = container.clientWidth;
      container.scrollBy({
        left: direction === 'left' ? -imageWidth : imageWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 p-2 rounded-full text-white hover:bg-black"
      >
        <ArrowLeft />
      </button>

      {/* Scrollable Image Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full snap-center"
            style={{ flexBasis: '100%' }}
          >
 <Image
  src={img}
  alt={`Image ${idx + 1}`}
  width={800}
  height={100}
  className="w-full h-85 object-cover rounded"
/>

          </div>
        ))}
      </div>

      {/* Hide scrollbar in WebKit */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 p-2 rounded-full text-white hover:bg-black"
      >
        <ArrowRight />
      </button>
    </div>
  );
}