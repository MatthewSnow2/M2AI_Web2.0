import React, { useEffect, useRef, useState } from 'react';
import { CarouselImage } from '../types';

interface CarouselProps {
  images: CarouselImage[];
  onAuditClick: () => void;
}

export const Carousel: React.FC<CarouselProps> = ({ images, onAuditClick }) => {
  const wheelRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const requestRef = useRef<number>(0);
  const isHoveredRef = useRef(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  useEffect(() => {
    const animate = () => {
      if (wheelRef.current && !isHoveredRef.current) {
        rotationRef.current += 0.1;
        wheelRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div
      className="relative h-[1200px] md:h-[1500px] w-full overflow-hidden flex justify-center items-center"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >

      {/* Central Hub */}
      <div className="absolute z-20 text-center flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-16">
        <h2 className="text-sm font-bold tracking-widest text-gray-800">ME, MYSELF + AI</h2>
        <p className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">AI Solutions for Business</p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 mt-6 pointer-events-auto">
          <button
            onClick={onAuditClick}
            className="px-6 py-3 bg-orange hover:bg-orange-light text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-sm"
          >
            Self-Serve AI Audit
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-teal hover:bg-teal-light text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-sm"
          >
            Contact Us
          </button>
        </div>

        {/* Hover tooltip */}
        {hoveredImage && (
          <div className="mt-4 px-4 py-2 bg-navy/90 text-white text-sm rounded-lg shadow-lg animate-fade-in-up pointer-events-none">
            {hoveredImage}
          </div>
        )}
      </div>

      {/* Rotating Wheel Container */}
      <div ref={wheelRef} className="absolute inset-0 w-full h-full pointer-events-none will-change-transform">
        {images.map((img) => (
          <div
            key={img.id}
            className="absolute top-1/2 left-1/2 transition-transform duration-1000 group pointer-events-auto"
            style={{
              marginLeft: '-70px',
              marginTop: '-450px',
              transformOrigin: 'center 450px',
              transform: `rotate(${img.rotation}deg)`
            }}
          >
            <a
              href={`#${img.sectionId}`}
              className="block cursor-pointer relative"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(img.sectionId);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              onMouseEnter={() => setHoveredImage(img.alt)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-[24px] md:rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] object-cover transform transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-[0_25px_50px_rgba(20,184,166,0.3)] bg-white"
              />
            </a>
          </div>
        ))}
      </div>

    </div>
  );
};