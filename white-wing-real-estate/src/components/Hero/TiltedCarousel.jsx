import React from 'react';
import carouselImage from '../../assets/images/rectangular-carousel.png';

const TiltedCarousel = () => {
  return (
    <div className="absolute inset-0 w-full z-5 pointer-events-none overflow-hidden">
      {/* Carousel Container - Right Half */}
      <div className="absolute top-0 right-0 left-100 w-full h-full flex items-center justify-center">
        
        {/* Infinite Moving Carousel with 315° Tilt */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Tilted Container - 315 degrees rotation */}
          <div className="absolute inset-0 rotate-[315deg] scale-300 origin-center">
            {/* Carousel Track - Multiple copies for seamless loop */}
            <div className="carousel-track flex h-full items-center">
              {/* First carousel image */}
              <img 
                src={carouselImage} 
                alt="Properties Carousel"
                className="carousel-item flex-shrink-0 h-auto w-auto max-h-full object-contain"
              />
              {/* Second carousel image for seamless loop */}
              <img 
                src={carouselImage} 
                alt="Properties Carousel"
                className="carousel-item flex-shrink-0 h-auto w-auto max-h-full object-contain"
              />
              {/* Third carousel image for seamless loop */}
              <img 
                src={carouselImage} 
                alt="Properties Carousel"
                className="carousel-item flex-shrink-0 h-auto w-auto max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Development indicator */}
      <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 text-xs rounded z-30">
        Phase 4: Step 2 - Tilted Carousel (315°)
      </div>
    </div>
  );
};

export default TiltedCarousel; 