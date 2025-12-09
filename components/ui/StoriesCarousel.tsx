import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, X } from 'lucide-react';

interface ProjectStory {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

interface StoriesCarouselProps {
  stories: ProjectStory[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

export const StoriesCarousel: React.FC<StoriesCarouselProps> = ({
  stories,
  autoplay = true,
  autoplayInterval = 6000,
}) => {
  const [activeStory, setActiveStory] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveStory(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Lock body scroll when story is open
  useEffect(() => {
    if (activeStory !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeStory]);

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
    if (!autoplay || activeStory !== null) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
        }
      }
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, activeStory]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
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

      {/* Stories Container */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {stories.map((story) => (
          <motion.div
            key={story.id}
            layoutId={`story-${story.id}`}
            onClick={() => setActiveStory(story.id)}
            className="flex-shrink-0 w-48 md:w-52 snap-start cursor-pointer"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative h-72 md:h-80 rounded-xl overflow-hidden group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${story.image})`,
                }}
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 bg-teal/80 backdrop-blur-sm text-white text-xs font-semibold rounded-md">
                  {story.category}
                </span>
              </div>

              {/* Title at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">{story.title}</h3>
                <p className="text-white/60 text-xs line-clamp-1">{story.description}</p>
              </div>

              {/* Ring indicator for active state */}
              <div className="absolute inset-0 ring-2 ring-teal/0 group-hover:ring-teal/50 rounded-xl transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Story Modal */}
      <AnimatePresence>
        {activeStory !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setActiveStory(null)}
            />

            {/* Expanded Content */}
            <motion.div
              layoutId={`story-${activeStory}`}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl z-50"
            >
              {(() => {
                const story = stories.find((s) => s.id === activeStory);
                if (!story) return null;
                return (
                  <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
                    {/* Image */}
                    <div className="relative h-64 md:h-80">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${story.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                      {/* Close button */}
                      <button
                        onClick={() => setActiveStory(null)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                      >
                        <X className="w-5 h-5 text-white" />
                      </button>

                      {/* Category */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-teal/80 backdrop-blur-sm text-white text-sm font-semibold rounded-lg">
                          {story.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-white mb-3">{story.title}</h2>
                      <p className="text-gray-300 mb-6">{story.description}</p>

                      {story.link && (
                        <a
                          href={story.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-teal hover:bg-teal-light text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                        >
                          View Project
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })()}
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

export default StoriesCarousel;
