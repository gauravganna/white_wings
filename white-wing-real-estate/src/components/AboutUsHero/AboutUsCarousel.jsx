import { motion } from 'framer-motion' // eslint-disable-line
import { useState, useEffect } from 'react'

const AboutUsCarousel = ({ startAnimation }) => {
  const [animationStage, setAnimationStage] = useState('waiting') // 'waiting', 'slideIn', 'alignLeft', 'infiniteScroll'

  // Dynamically import all images from the about-us folder
  const imageModules = import.meta.glob('../../assets/images/about-us/*.{png,jpg,jpeg,webp}', { eager: true })
  
  // Extract image URLs from the modules
  const images = Object.values(imageModules).map(module => module.default)

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...images, ...images]

  useEffect(() => {
    if (startAnimation) {
      // Start the carousel animation sequence
      setAnimationStage('slideIn')
      
      // After slide in completes, move to align left
      setTimeout(() => {
        setAnimationStage('alignLeft')
        
        // After align left completes, start infinite scroll
        setTimeout(() => {
          setAnimationStage('infiniteScroll')
        }, 800) // Align left duration
      }, 1000) // Slide in duration
    }
  }, [startAnimation])

  // Animation variants for different stages
  const carouselVariants = {
    waiting: {
      x: '-100%',
      opacity: 0
    },
    slideIn: {
      x: '0%',
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    alignLeft: {
      x: '-20%', // Move left so first image touches left corner
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    infiniteScroll: {
      x: ['-20%', '-70%'], // Continuous left movement
      opacity: 1,
      transition: {
        x: {
          duration: 15, // Slow-medium speed
          repeat: Infinity,
          ease: 'linear'
        }
      }
    }
  }

  return (
    <div className="absolute bottom-0 left-0 w-full h-[40vh] overflow-hidden z-30">
      <motion.div
        variants={carouselVariants}
        initial="waiting"
        animate={animationStage}
        className="flex h-full"
        style={{ width: '200%' }} // Double width for infinite scroll
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-full px-4" // Add horizontal spacing between containers
            style={{ width: '10%' }} // Each image takes 10% of carousel width
          >
            <div className="w-full h-full rounded-2xl overflow-hidden"> {/* Rounded container */}
              <img
                src={image}
                alt={`Carousel image ${(index % images.length) + 1}`}
                className="w-full h-full object-cover"
                style={{ 
                  minWidth: '100%', 
                  minHeight: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AboutUsCarousel 