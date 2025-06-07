import React from 'react';
import VideoBackground from './VideoBackground';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <VideoBackground />
      
      {/* Hero Content Overlay - Phase 2: Glassmorphism Container */}
      <HeroContent />
      
      {/* Tilted Carousel - Placeholder for Phase 3 */}
      <div className="absolute top-4 right-4 z-20 text-white text-sm opacity-75">
        Carousel: Phase 3
      </div>
      
      {/* Statistics Cards - Placeholder for Phase 3 */}
      <div className="absolute bottom-4 left-4 z-20 text-white text-sm opacity-75">
        Statistics: Phase 3
      </div>
    </section>
  );
};

export default Hero; 