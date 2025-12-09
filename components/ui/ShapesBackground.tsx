import React from 'react';
import { ElegantShape } from './ElegantShape';

export const ShapesBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dark base gradient */}
      <div className="absolute inset-0 bg-navy" />

      {/* Radial gradient overlays for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(230, 81, 0, 0.08) 0%, transparent 40%)',
        }}
      />

      {/* Floating shapes - glowing on dark background */}
      <ElegantShape
        className="top-[-5%] left-[10%]"
        width={500}
        height={120}
        rotate={-15}
        gradient="from-teal/25 via-teal-light/15 to-transparent"
        delay={0}
      />

      <ElegantShape
        className="top-[15%] right-[-5%]"
        width={450}
        height={100}
        rotate={20}
        gradient="from-orange/20 via-orange-light/12 to-transparent"
        delay={0.2}
      />

      <ElegantShape
        className="top-[40%] left-[-10%]"
        width={400}
        height={90}
        rotate={-8}
        gradient="from-teal-dark/15 via-teal/10 to-transparent"
        delay={0.4}
      />

      <ElegantShape
        className="bottom-[20%] right-[5%]"
        width={480}
        height={110}
        rotate={15}
        gradient="from-teal/18 via-orange/10 to-transparent"
        delay={0.6}
      />

      <ElegantShape
        className="bottom-[-5%] left-[20%]"
        width={520}
        height={130}
        rotate={-20}
        gradient="from-orange/15 via-teal/8 to-transparent"
        delay={0.8}
      />

      {/* Subtle grid pattern - lighter for dark mode */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default ShapesBackground;
