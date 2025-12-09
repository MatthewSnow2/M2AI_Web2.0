import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';

interface FuturisticHeroProps {
  onAuditClick: () => void;
}

// Animated grid lines component
const GridLines: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal lines */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent"
          style={{ top: `${(i + 1) * 5}%` }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.3 }}
          transition={{ delay: i * 0.05, duration: 1.5, ease: 'easeOut' }}
        />
      ))}
      {/* Vertical lines */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-teal/20 to-transparent"
          style={{ left: `${(i + 1) * 5}%` }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.3 }}
          transition={{ delay: i * 0.05, duration: 1.5, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
};

// Floating particle component
const FloatingParticle: React.FC<{ delay: number; x: number; size: number }> = ({ delay, x, size }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-teal/60"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        bottom: '-10%',
      }}
      animate={{
        y: [0, -window.innerHeight * 1.2],
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1, 0.5],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay: delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

// Animated text reveal component
const AnimatedText: React.FC<{ text: string; className?: string; delay?: number }> = ({ text, className, delay = 0 }) => {
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

// Glowing orb component
const GlowingOrb: React.FC<{ className: string; color: string; size: string; delay: number }> = ({
  className,
  color,
  size,
  delay,
}) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

// Scan line effect
const ScanLine: React.FC = () => {
  return (
    <motion.div
      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-50"
      initial={{ top: '0%' }}
      animate={{ top: '100%' }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

export const FuturisticHero: React.FC<FuturisticHeroProps> = ({ onAuditClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const particles = [...Array(30)].map((_, i) => ({
    delay: Math.random() * 5,
    x: Math.random() * 100,
    size: 2 + Math.random() * 4,
  }));

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden">
      {/* Grid overlay */}
      <GridLines />

      {/* Scan line effect */}
      <ScanLine />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <FloatingParticle key={i} {...particle} />
        ))}
      </div>

      {/* Glowing orbs */}
      <GlowingOrb className="top-1/4 left-1/4" color="rgba(20, 184, 166, 0.4)" size="400px" delay={0} />
      <GlowingOrb className="bottom-1/4 right-1/4" color="rgba(230, 81, 0, 0.3)" size="300px" delay={1} />
      <GlowingOrb className="top-1/2 right-1/3" color="rgba(20, 184, 166, 0.2)" size="250px" delay={2} />

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center"
        style={{ y, opacity }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-teal">
            <Sparkles className="w-4 h-4" />
            AI Solutions for Business
          </span>
        </motion.div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          <AnimatedText text="Me, Myself" delay={0.4} />
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal via-teal-light to-orange">
            <AnimatedText text="+ AI" delay={0.8} />
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10"
        >
          Transform your business with intelligent automation, custom AI solutions,
          and voice agents that work 24/7.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            onClick={onAuditClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-orange to-orange-light text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange/30"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Self-Serve AI Audit
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-light to-orange"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-teal/20 hover:border-teal/50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              Contact Us
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                &rarr;
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: '20+', label: 'AI Skills' },
            { value: '3', label: 'Voice Agents' },
            { value: '24/7', label: 'Availability' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
    </div>
  );
};

export default FuturisticHero;
