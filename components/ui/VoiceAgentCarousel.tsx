import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Phone, Mic } from 'lucide-react';
import { VoiceAgent } from '../../types';

interface VoiceAgentCarouselProps {
  agents: VoiceAgent[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

export const VoiceAgentCarousel: React.FC<VoiceAgentCarouselProps> = ({
  agents,
  autoplay = true,
  autoplayInterval = 6000,
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
    if (containerWidth < 640) return 80;
    if (containerWidth < 1024) return 120;
    return 180;
  }, [containerWidth]);

  // Navigation functions
  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + agents.length) % agents.length);
  }, [agents.length]);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % agents.length);
  }, [agents.length]);

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
    const prev = (currentIndex - 1 + agents.length) % agents.length;
    const next = (currentIndex + 1) % agents.length;
    return { prev, current: currentIndex, next };
  };

  const { prev, current, next } = getVisibleIndices();

  return (
    <div ref={containerRef} className="relative w-full py-8">
      {/* Carousel Container */}
      <div className="relative h-96 flex items-center justify-center perspective-1000">
        <AnimatePresence mode="popLayout" initial={false}>
          {/* Previous Item */}
          <motion.div
            key={`prev-${prev}`}
            initial={{ x: direction > 0 ? -gap * 2 : 0, rotateY: -45, opacity: 0, scale: 0.7 }}
            animate={{ x: -gap, rotateY: -25, opacity: 0.4, scale: 0.8 }}
            exit={{ x: direction > 0 ? gap : -gap * 2, rotateY: -45, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute cursor-pointer"
            onClick={goToPrevious}
          >
            <VoiceAgentCard agent={agents[prev]} isActive={false} />
          </motion.div>

          {/* Current Item */}
          <motion.div
            key={`current-${current}`}
            initial={{ x: direction * gap, rotateY: direction * 25, opacity: 0.4, scale: 0.8 }}
            animate={{ x: 0, rotateY: 0, opacity: 1, scale: 1, zIndex: 10 }}
            exit={{ x: direction * -gap, rotateY: direction * -25, opacity: 0.4, scale: 0.8 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute z-10"
          >
            <VoiceAgentCard agent={agents[current]} isActive={true} />
          </motion.div>

          {/* Next Item */}
          <motion.div
            key={`next-${next}`}
            initial={{ x: direction > 0 ? 0 : gap * 2, rotateY: 45, opacity: 0, scale: 0.7 }}
            animate={{ x: gap, rotateY: 25, opacity: 0.4, scale: 0.8 }}
            exit={{ x: direction > 0 ? gap * 2 : -gap, rotateY: 45, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute cursor-pointer"
            onClick={goToNext}
          >
            <VoiceAgentCard agent={agents[next]} isActive={false} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-6 mt-6">
        <button
          onClick={goToPrevious}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-teal/30 transition-all duration-300 text-white group"
          aria-label="Previous agent"
        >
          <FaArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
        </button>
        <button
          onClick={goToNext}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-teal/30 transition-all duration-300 text-white group"
          aria-label="Next agent"
        >
          <FaArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {agents.map((_, index) => (
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
            aria-label={`Go to agent ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Individual Voice Agent Card Component
interface VoiceAgentCardProps {
  agent: VoiceAgent;
  isActive: boolean;
}

const VoiceAgentCard: React.FC<VoiceAgentCardProps> = ({ agent, isActive }) => {
  return (
    <div
      className={`w-72 h-80 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-6 flex flex-col items-center text-center transition-all duration-300 ${
        isActive ? 'ring-2 ring-teal/50 shadow-2xl shadow-teal/20' : ''
      }`}
    >
      {/* Agent Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-2 ring-teal/30">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Agent Name */}
      <h3 className="text-xl font-bold text-white mb-1">{agent.name}</h3>

      {/* Specialty Badge */}
      <span className="px-3 py-1 bg-teal/20 text-teal-light text-xs font-semibold rounded-full mb-3">
        {agent.specialty}
      </span>

      {/* Description */}
      {isActive ? (
        <AnimatedDescription text={agent.description} />
      ) : (
        <p className="text-sm text-gray-400 line-clamp-2">{agent.description}</p>
      )}

      {/* Demo Button - only show on active card */}
      {isActive && (
        <motion.a
          href={agent.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-auto flex items-center gap-2 px-4 py-2 bg-teal hover:bg-teal-light text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5"
        >
          <Phone className="w-4 h-4" />
          Try Demo
        </motion.a>
      )}
    </div>
  );
};

// Animated description with word-by-word reveal
const AnimatedDescription: React.FC<{ text: string }> = ({ text }) => {
  const words = text.split(' ').slice(0, 15); // Limit words for space

  return (
    <p className="text-sm text-gray-300 flex-1">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{
            duration: 0.3,
            delay: index * 0.04,
            ease: 'easeOut',
          }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
      {text.split(' ').length > 15 && '...'}
    </p>
  );
};

export default VoiceAgentCarousel;
