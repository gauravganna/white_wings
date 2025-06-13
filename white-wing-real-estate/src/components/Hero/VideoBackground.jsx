import React, { useRef, useEffect, useState } from 'react';
import videoSrc from '../../assets/videos/video.mp4';

const VideoBackground = () => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isSmallScreen = window.innerWidth <= 768;
      return isMobileDevice || isSmallScreen;
    };

    setIsMobile(checkMobile());

    // Listen for resize events
    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || isMobile) return; // Skip video setup on mobile

    const handleLoadedData = () => {
      setIsLoaded(true);
      // Ensure video plays for better UX
      video.play().catch((error) => {
        console.warn('Video autoplay failed:', error);
        setHasError(true);
      });
    };

    const handleError = () => {
      setHasError(true);
      console.warn('Video failed to load');
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [isMobile]);

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Mobile Background - High-quality gradient with real estate theme */}
      {isMobile ? (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          {/* Mobile pattern overlay for visual interest */}
          <div className="absolute inset-0 opacity-10" 
               style={{
                 backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0), 
                                   radial-gradient(circle at 75px 75px, white 2px, transparent 0)`,
                 backgroundSize: '100px 100px'
               }} 
          />
        </div>
      ) : (
        <>
          {/* Desktop Video Element */}
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Fallback Background Image (when video fails on desktop) */}
          {hasError && (
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
          )}

          {/* Loading State for Desktop */}
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center">
              <div className="text-white text-lg">Loading...</div>
            </div>
          )}
        </>
      )}

      {/* Overlay Gradient for Content Readability (Both Mobile & Desktop) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30" />
      
      {/* Additional overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
    </div>
  );
};

export default VideoBackground; 