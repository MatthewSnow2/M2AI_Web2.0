import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote, X } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface WorkflowItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  details?: string;
}

interface RetroCarouselProps {
  items: WorkflowItem[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

// Hook for detecting clicks outside an element
const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, callback]);
};

export const RetroCarousel: React.FC<RetroCarouselProps> = ({
  items,
  autoplay = true,
  autoplayInterval = 5000,
}) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const expandedRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Close expanded card on outside click
  useClickOutside(expandedRef, () => setExpandedId(null));

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpandedId(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Lock body scroll when expanded
  useEffect(() => {
    if (expandedId !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedId]);

  // Check scroll state
  const checkScrollState = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkScrollState();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollState);
      return () => scrollElement.removeEventListener('scroll', checkScrollState);
    }
  }, [checkScrollState]);

  // Autoplay scroll
  useEffect(() => {
    if (!autoplay || expandedId !== null) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, expandedId]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Get icon component from lucide-react
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[iconName];
    if (IconComponent) {
      return <IconComponent size={28} className="text-teal" />;
    }
    return <LucideIcons.Circle size={28} className="text-teal" />;
  };

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 ${
            canScrollLeft
              ? 'hover:bg-teal/30 text-white'
              : 'opacity-30 cursor-not-allowed text-gray-500'
          }`}
          aria-label="Scroll left"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 ${
            canScrollRight
              ? 'hover:bg-teal/30 text-white'
              : 'opacity-30 cursor-not-allowed text-gray-500'
          }`}
          aria-label="Scroll right"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`}
            onClick={() => setExpandedId(item.id)}
            className="flex-shrink-0 w-72 snap-start cursor-pointer"
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-64 bg-gradient-to-br from-amber-900/30 via-stone-800/40 to-stone-900/50 backdrop-blur-md rounded-2xl border border-amber-500/20 p-6 flex flex-col relative overflow-hidden group">
              {/* Retro grain overlay */}
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]" />

              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-500/30 transform rotate-180" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-teal/20 flex items-center justify-center mb-4 border border-teal/30">
                {getIcon(item.icon)}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-amber-100 mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-sm text-stone-300 line-clamp-3 flex-1">{item.description}</p>

              {/* Click to expand hint */}
              <div className="mt-auto pt-4 text-xs text-amber-500/60 group-hover:text-amber-400 transition-colors">
                Click to learn more →
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Card Overlay */}
      <AnimatePresence>
        {expandedId !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setExpandedId(null)}
            />

            {/* Expanded Card */}
            <motion.div
              ref={expandedRef}
              layoutId={`card-${expandedId}`}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg z-50"
            >
              <div className="bg-gradient-to-br from-amber-900/60 via-stone-800/70 to-stone-900/80 backdrop-blur-xl rounded-2xl border border-amber-500/30 p-8 relative overflow-hidden">
                {/* Retro grain overlay */}
                <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]" />

                {/* Close button */}
                <button
                  onClick={() => setExpandedId(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5 text-amber-100" />
                </button>

                {/* Content */}
                {(() => {
                  const item = items.find((i) => i.id === expandedId);
                  if (!item) return null;
                  return (
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl bg-teal/20 flex items-center justify-center mb-6 border border-teal/30">
                        {getIcon(item.icon)}
                      </div>
                      <h3 className="text-2xl font-bold text-amber-100 mb-4">{item.title}</h3>
                      <p className="text-stone-300 mb-4">{item.description}</p>
                      {item.details && (
                        <p className="text-stone-400 text-sm">{item.details}</p>
                      )}
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Custom scrollbar hide style */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default RetroCarousel;
