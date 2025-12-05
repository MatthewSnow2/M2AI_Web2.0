import React, { useEffect, useRef } from 'react';
import { CarouselImage } from '../types';

interface CarouselProps {
  images: CarouselImage[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const wheelRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const requestRef = useRef<number>(0);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const animate = () => {
      if (wheelRef.current && !isHoveredRef.current) {
        rotationRef.current += 0.1; // 0.1 degrees per frame for slow, continuous rotation
        wheelRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div 
      className="relative h-[1500px] mt-24 w-full overflow-hidden flex justify-center items-center wheel-container"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >
      
      {/* Central Hub */}
      <div className="absolute z-20 text-center flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-20 pointer-events-none">
        <div className="w-24 h-24 rounded-full bg-orange-600 overflow-hidden shadow-2xl mb-4 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-red-500 mix-blend-multiply opacity-90"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-white font-serif-italic text-3xl font-bold opacity-90">M+</span>
             </div>
        </div>
        <h2 className="text-sm font-bold tracking-widest text-gray-800">M+M+AI</h2>
        <p className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">An Audio/Visual Project</p>
      </div>

      {/* Rotating Wheel Container */}
      <div ref={wheelRef} className="absolute inset-0 w-full h-full pointer-events-none will-change-transform">
        {images.map((img) => (
          <div 
            key={img.id}
            className="absolute top-1/2 left-1/2 transition-transform duration-1000 cubic-bezier(0.2, 0.8, 0.2, 1) group pointer-events-auto"
            style={{
              marginLeft: '-80px', // Half of width (160px)
              marginTop: '-550px', // Radius
              transformOrigin: 'center 550px', // The anchor point
              transform: `rotate(${img.rotation}deg)`
            }}
          >
            <a 
              href={`#section-${img.id}`}
              className="block cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(`section-${img.id}`);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-[160px] h-[160px] rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] object-cover transform transition-transform duration-300 ease-out group-hover:scale-110 group-hover:z-10 bg-white"
              />
            </a>
          </div>
        ))}
      </div>

    </div>
  );
};