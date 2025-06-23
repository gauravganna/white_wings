import { motion } from 'framer-motion' // eslint-disable-line
import { useState, useEffect, useRef } from 'react'
import heroVideo from '../../assets/videos/about-us/video.mp4'
import AboutUsCarousel from './AboutUsCarousel'

const AboutUsHero = () => {
  const [animationStarted, setAnimationStarted] = useState(false)
  const [carouselStarted, setCarouselStarted] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setAnimationStarted(true)
      
      // Start carousel immediately after WHITE animation completes (2 seconds)
      setTimeout(() => {
        setCarouselStarted(true)
      }, 2000) // WHITE animation duration
    }, 500) // Small delay for smooth start

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error)
      })
    }
  }, [])

  // Animation variants for the video (full screen → narrow "I")
  const videoVariants = {
    initial: {
      width: "100%",
      height: "100%",
      borderRadius: 0,
      x: 0, // Start at center
      transformOrigin: "center center" // Ensure scaling happens from center
    },
    animate: {
      width: "8.33vw", // Width of letter "I" (120px/1440px = 8.33% of viewport width)
      height: "35vh", // Height of letter "I" (relative to viewport height)
      borderRadius: "0.56vw", // Responsive border radius (8px/1440px)
      x: "5vw", // Shift 5% to the right (5% of viewport width)
      transformOrigin: "center center", // Keep center as transform origin
      transition: {
        duration: 2,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing for smooth feel
      }
    }
  }

  // Animation variants for "WH" text (slide in from left)
  const leftTextVariants = {
    initial: {
      x: "-55.56vw", // Responsive initial position (-800px/1440px ≈ -55.56vw)
      opacity: 0
    },
    animate: {
      x: 0, // Final position relative to its container
      opacity: 1,
      transition: {
        duration: 2,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0 // Start simultaneously with video
      }
    }
  }

  // Animation variants for "TE" text (slide in from right)
  const rightTextVariants = {
    initial: {
      x: "55.56vw", // Responsive initial position (800px/1440px ≈ 55.56vw)
      opacity: 0
    },
    animate: {
      x: 0, // Final position relative to its container
      opacity: 1,
      transition: {
        duration: 2,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0 // Start simultaneously with video
      }
    }
  }

  // Handle manual video play if autoplay fails
  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Manual video play failed:', error)
      })
    }
  }

  return (
    <section className="relative w-full h-[calc(100vh-90px)] bg-white overflow-hidden">
      {/* Video Element - Transforms from full screen to "I" */}
      <motion.div
        variants={videoVariants}
        initial="initial"
        animate={animationStarted ? "animate" : "initial"}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ borderRadius: 'inherit' }}
          onError={(e) => console.error('Video error:', e)}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
          onClick={handleVideoClick}
        >
          <source src={heroVideo} type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Left Text - "WH" */}
      <motion.div
        variants={leftTextVariants}
        initial="initial"
        animate={animationStarted ? "animate" : "initial"}
        className="absolute top-1/2 -translate-y-1/2 z-20"
        style={{ 
          right: "calc(45% + 4.17vw + 1.39vw)" // Position WH symmetrically from right: 45% (55% - 10%) + video half width (4.17vw) + gap (1.39vw)
        }}
      >
        <h1 
          className="font-extrabold text-black select-none leading-[0.217] tracking-[-0.38%]"
          style={{ 
            fontSize: 'clamp(15vw, 25vw, 25vw)', // Responsive font size with limits to prevent overflow
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800
          }}
        >
          WH
        </h1>
      </motion.div>

      {/* Right Text - "TE" */}
      <motion.div
        variants={rightTextVariants}
        initial="initial"
        animate={animationStarted ? "animate" : "initial"}
        className="absolute top-1/2 -translate-y-1/2 z-20"
        style={{ left: "calc(55% + 4.17vw + 1.39vw)" }} // Position TE: 55% (shifted 5% right) + video half width (4.17vw) + gap (1.39vw)
      >
        <h1 
          className="font-extrabold text-black select-none leading-[0.217] tracking-[-0.38%]"
          style={{ 
            fontSize: 'clamp(15vw, 25vw, 25vw)', // Responsive font size with limits to prevent overflow
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800
          }}
        >
          TE
        </h1>
      </motion.div>

      {/* Carousel - appears after WHITE animation */}
      <AboutUsCarousel startAnimation={carouselStarted} />

    </section>
  )
}

export default AboutUsHero 