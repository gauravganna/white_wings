import React from 'react';
import carouselImage from '../../assets/images/rectangular-carousel.png';

const TiltedCarousel = () => {
  return (
    <div className="absolute inset-0 w-full z-5 pointer-events-none overflow-hidden">
      
      {/* Mobile: Full Background Blurred Carousel */}
      <div className="lg:hidden absolute inset-0 w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          {/* Mobile Carousel - No Tilt, Full Background */}
          <div className="absolute inset-0 blur-sm opacity-20 scale-100">
            {/* Carousel Track - Multiple copies for seamless loop */}
            <div className="carousel-track flex h-full items-center min-h-screen">
              {/* First carousel image */}
              <img 
                src={carouselImage} 
                alt="Properties Carousel"
                className="carousel-item flex-shrink-0 w-screen h-screen object-cover"
              />
              {/* Second carousel image for seamless loop */}
              <img 
                src={carouselImage} 
                alt="Properties Carousel"
                className="carousel-item flex-shrink-0 w-screen h-screen object-cover"
              />
              {/* Third carousel image for seamless loop */}
              <img 
                src={carouselImage} 
                alt="Properties Carousel"
                className="carousel-item flex-shrink-0 w-screen h-screen object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Right Half Tilted Carousel */}
      <div className="absolute top-0 right-0 left-100 w-full h-full flex items-center justify-center">
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
    </div>
  );
};

export default TiltedCarousel; 