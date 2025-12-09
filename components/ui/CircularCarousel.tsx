import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import * as LucideIcons from 'lucide-react';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface CircularCarouselProps {
  items: CarouselItem[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

export const CircularCarousel: React.FC<CircularCarouselProps> = ({
  items,
  autoplay = true,
  autoplayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Update container width on resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Calculate responsive gap
  const gap = useMemo(() => {
    if (containerWidth < 640) return 60;
    if (containerWidth < 1024) return 100;
    return 150;
  }, [containerWidth]);

  // Navigation functions
  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(goToNext, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Get visible items (current, previous, next)
  const getVisibleIndices = () => {
    const prev = (currentIndex - 1 + items.length) % items.length;
    const next = (currentIndex + 1) % items.length;
    return { prev, current: currentIndex, next };
  };

  const { prev, current, next } = getVisibleIndices();

  // Get icon component from lucide-react
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[iconName];
    if (IconComponent) {
      return <IconComponent size={32} className="text-teal" />;
    }
    return <LucideIcons.Circle size={32} className="text-teal" />;
  };

  return (
    <div ref={containerRef} className="relative w-full py-12">
      {/* Carousel Container */}
      <div className="relative h-80 flex items-center justify-center perspective-1000">
        <AnimatePresence mode="popLayout" initial={false}>
          {/* Previous Item */}
          <motion.div
            key={`prev-${prev}`}
            initial={{ x: direction > 0 ? -gap * 2 : 0, rotateY: -45, opacity: 0, scale: 0.7 }}
            animate={{ x: -gap, rotateY: -25, opacity: 0.5, scale: 0.8 }}
            exit={{ x: direction > 0 ? gap : -gap * 2, rotateY: -45, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute cursor-pointer"
            onClick={goToPrevious}
          >
            <CarouselCard item={items[prev]} getIcon={getIcon} isActive={false} />
          </motion.div>

          {/* Current Item */}
          <motion.div
            key={`current-${current}`}
            initial={{ x: direction * gap, rotateY: direction * 25, opacity: 0.5, scale: 0.8 }}
            animate={{ x: 0, rotateY: 0, opacity: 1, scale: 1, zIndex: 10 }}
            exit={{ x: direction * -gap, rotateY: direction * -25, opacity: 0.5, scale: 0.8 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute z-10"
          >
            <CarouselCard item={items[current]} getIcon={getIcon} isActive={true} />
          </motion.div>

          {/* Next Item */}
          <motion.div
            key={`next-${next}`}
            initial={{ x: direction > 0 ? 0 : gap * 2, rotateY: 45, opacity: 0, scale: 0.7 }}
            animate={{ x: gap, rotateY: 25, opacity: 0.5, scale: 0.8 }}
            exit={{ x: direction > 0 ? gap * 2 : -gap, rotateY: 45, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute cursor-pointer"
            onClick={goToNext}
          >
            <CarouselCard item={items[next]} getIcon={getIcon} isActive={false} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={goToPrevious}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-teal/30 transition-all duration-300 text-white group"
          aria-label="Previous skill"
        >
          <FaArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
        </button>
        <button
          onClick={goToNext}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-teal/30 transition-all duration-300 text-white group"
          aria-label="Next skill"
        >
          <FaArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-teal w-6'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to skill ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Individual Card Component
interface CarouselCardProps {
  item: CarouselItem;
  getIcon: (iconName: string) => React.ReactNode;
  isActive: boolean;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ item, getIcon, isActive }) => {
  return (
    <div
      className={`w-64 h-72 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 ${
        isActive ? 'ring-2 ring-teal/50 shadow-2xl shadow-teal/20' : ''
      }`}
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mb-4">
        {getIcon(item.icon)}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>

      {/* Description with word-by-word animation for active card */}
      {isActive ? (
        <AnimatedDescription text={item.description} />
      ) : (
        <p className="text-sm text-gray-400 line-clamp-3">{item.description}</p>
      )}
    </div>
  );
};

// Animated description with word-by-word reveal
const AnimatedDescription: React.FC<{ text: string }> = ({ text }) => {
  const words = text.split(' ');

  return (
    <p className="text-sm text-gray-300">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{
            duration: 0.3,
            delay: index * 0.05,
            ease: 'easeOut',
          }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

export default CircularCarousel;
