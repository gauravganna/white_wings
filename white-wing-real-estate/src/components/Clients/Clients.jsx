import { useEffect, useRef } from 'react';

const Clients = () => {
  const desktopCarouselRef = useRef(null);
  const mobileCarouselRef = useRef(null);

  // Client images data - using the actual image file names from the assets folder
  const clientImages = [
    {
      id: 1,
      src: '/src/assets/images/clients/047238b258c21b91b388ecafe9604264de2d9e1b.png',
      alt: 'Brooklyn Client',
      name: 'brooklyn'
    },
    {
      id: 2,
      src: '/src/assets/images/clients/d15a450963fe01cdc00e325d45d2f06249334f02.png',
      alt: 'Oval Client',
      name: 'oval'
    },
    {
      id: 3,
      src: '/src/assets/images/clients/e9002a2222d982c71e08e6f16faa58ca974a7b7e.png',
      alt: 'Massi Client',
      name: 'massi'
    },
    {
      id: 4,
      src: '/src/assets/images/clients/363ea049a411b4e19fd8dd90a9fa55764479f92c.png',
      alt: 'Valentino Client',
      name: 'valentino'
    },
    {
      id: 5,
      src: '/src/assets/images/clients/0b2049ec626ce9d19dc64554e7d677567791fbb7.png',
      alt: 'Orleans Client',
      name: 'orleans'
    },
    {
      id: 6,
      src: '/src/assets/images/clients/7444e56d7723a2152ffeefc5068e0a69a757de98.png',
      alt: 'Client 6',
      name: 'client6'
    },
    {
      id: 7,
      src: '/src/assets/images/clients/97c51f5b9bf4e496de1b0ea9d4c3db03526b27be.png',
      alt: 'Client 7',
      name: 'client7'
    },
    {
      id: 8,
      src: '/src/assets/images/clients/d9fe98febc2b4fa87b6370d4b4bc911e6810291c.png',
      alt: 'FLM Client',
      name: 'flm'
    },
    {
      id: 9,
      src: '/src/assets/images/clients/cbbad9fdaaed84c9b68e411b4e374e3001bc4f97.png',
      alt: 'Zen Client',
      name: 'zen'
    }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedImages = [...clientImages, ...clientImages];

  useEffect(() => {
    const setupCarousel = (carouselRef) => {
      const carousel = carouselRef.current;
      if (!carousel) return null;

      let animationId;
      let scrollPosition = 0;
      const scrollSpeed = 0.5; // Adjust speed as needed

      const animate = () => {
        scrollPosition += scrollSpeed;
        
        // Reset position when we've scrolled through one complete set
        if (scrollPosition >= carousel.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        carousel.scrollLeft = scrollPosition;
        animationId = requestAnimationFrame(animate);
      };

      animationId = requestAnimationFrame(animate);

      // Pause animation on hover
      const handleMouseEnter = () => {
        cancelAnimationFrame(animationId);
      };

      const handleMouseLeave = () => {
        animationId = requestAnimationFrame(animate);
      };

      carousel.addEventListener('mouseenter', handleMouseEnter);
      carousel.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        cancelAnimationFrame(animationId);
        carousel.removeEventListener('mouseenter', handleMouseEnter);
        carousel.removeEventListener('mouseleave', handleMouseLeave);
      };
    };

    // Setup both carousels
    const desktopCleanup = setupCarousel(desktopCarouselRef);
    const mobileCleanup = setupCarousel(mobileCarouselRef);

    return () => {
      if (desktopCleanup) desktopCleanup();
      if (mobileCleanup) mobileCleanup();
    };
  }, []);

  return (
    <section className="bg-[#393C66] w-full">
      {/* Desktop: Show title and carousel in same section */}
      <div className="hidden md:block py-[45px] px-16">
        {/* Title with underline */}
        <div className="flex justify-center pb-[45px]">
          <div className="border-b border-white pb-[18px] px-6">
            <h2 className="text-white font-inter text-[41.89px] leading-[1.27] tracking-[-2.84%] font-normal">
              Clients
            </h2>
          </div>
        </div>

        {/* Carousel Container with light background and margins */}
        <div className="bg-[#F8F3E6] py-6 px-6 mx-auto" style={{ width: '1310px', maxWidth: '100%' }}>
          <div 
            ref={desktopCarouselRef}
            className="flex gap-16 overflow-hidden justify-center"
            style={{ 
              scrollBehavior: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {duplicatedImages.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="w-[176px] h-[138px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Only carousel */}
      <div className="md:hidden bg-[#F8F3E6] py-[13px] px-[6px]">
        <div 
          ref={mobileCarouselRef}
          className="flex gap-16 overflow-hidden"
          style={{ 
            scrollBehavior: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {duplicatedImages.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0"
            >
              <img
                src={client.src}
                alt={client.alt}
                className="w-[75px] h-[59px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients; 