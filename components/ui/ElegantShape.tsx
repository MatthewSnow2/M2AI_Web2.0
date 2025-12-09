import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ElegantShapeProps {
  className?: string;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  delay?: number;
}

export const ElegantShape: React.FC<ElegantShapeProps> = ({
  className,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-teal/20 via-orange/10 to-transparent',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay: 0.5 + delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn('absolute', className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r',
            gradient,
            'blur-[60px] opacity-50'
          )}
        />
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r',
            gradient,
            'opacity-30'
          )}
          style={{
            clipPath:
              'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%, 50% 50%, 50% 0%)',
          }}
        />
        {/* Inner glow */}
        <div
          className={cn(
            'absolute inset-4 rounded-full',
            'bg-gradient-to-br from-white/5 to-transparent',
            'border border-white/10'
          )}
        />
      </motion.div>
    </motion.div>
  );
};

export default ElegantShape;
