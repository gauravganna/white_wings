import React from 'react';
import TiltedCarousel from './TiltedCarousel';
import StatisticsCards from './StatisticsCards';
import HappyFamiliesCard from './HappyFamiliesCard';

const HeroContent = () => {
  return (
    <div className="absolute inset-0 z-10 flex items-start justify-start">
      {/* Hero Container with Glassmorphism */}
      <div className="
        h-full
        w-full 
        lg:h-auto
        mt-0 mx-0
        lg:mt-15 lg:mx-[60px]
        backdrop-blur-[7.8px] 
        bg-white/60 
        border border-white/10 
        rounded-none
        lg:rounded-lg 
        shadow-[0px_32px_64px_-12px_rgba(0,0,0,0.14)]
        p-6
        lg:p-12
      ">
        {/* Hero Content - Phase 5 */}
        <div className="flex flex-col justify-center h-full lg:h-auto lg:max-w-[50%]">
          {/* Statistics Cards - Phase 5 (Desktop Only) */}
          <StatisticsCards />
          
          {/* Hero Title */}
          <h1 className="
            text-3xl lg:text-[42px] 
            font-normal 
            leading-[1.27] 
            tracking-[-0.028em] 
            text-[#091E42] 
            mb-4 lg:mb-6
          ">
            Simplify Your Home Search
          </h1>
          
          {/* Hero Description */}
          <p className="
            text-lg lg:text-[20px] 
            font-normal 
            leading-[1.27] 
            tracking-[-0.026em] 
            text-[#091E42] 
            opacity-60 
            mb-6 lg:mb-8
          ">
            We filter out low-rated properties, ensuring only safe, top-reviewed homes — making your home search smarter and stress-free.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4">
            {/* Primary CTA Button */}
            <button className="
              px-4 py-2 lg:px-6 lg:py-3
              bg-transparent 
              border border-white 
              text-[#091E42] 
              font-normal 
              text-sm lg:text-base
              rounded 
              hover:bg-white/20 
              transition-colors 
              duration-200
              whitespace-nowrap
            ">
              Schedule a consultant
            </button>
            
            {/* Secondary CTA Button */}
            <button className="
              px-4 py-2 lg:px-6 lg:py-3
              bg-[#06173E] 
              border border-[#F6F8F8]/50 
              text-white 
              font-normal 
              text-sm lg:text-base
              rounded 
              hover:bg-[#06173E]/90 
              transition-colors 
              duration-200
              whitespace-nowrap
            ">
              Sign in
            </button>
          </div>
          
          {/* Happy Families Card - Phase 5 (Desktop Only) */}
          <HappyFamiliesCard />
        </div>
        <TiltedCarousel />
      </div>
    </div>
  );
};

export default HeroContent; 