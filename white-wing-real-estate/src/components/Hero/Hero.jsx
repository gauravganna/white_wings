import React from 'react';
import VideoBackground from './VideoBackground';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <section className="relative md:min-h-screen h-full overflow-hidden">
      {/* Video Background */}
      <VideoBackground />
      
      {/* Hero Content Overlay - Phase 2: Glassmorphism Container */}
      <HeroContent />
      
    </section>
  );
};

export default Hero; 