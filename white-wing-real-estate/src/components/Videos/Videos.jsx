import { useState } from 'react'
import VideoCard from './VideoCard'
import { getFeaturedVideos } from '../../constants/videos-data'

const Videos = () => {
  const [videos] = useState(getFeaturedVideos())

  // Handle video play - opens external link or shows modal
  const handleVideoPlay = (video) => {
    if (video.isExternal) {
      // Open Instagram/TikTok posts in new tab
      window.open(video.platformUrl, '_blank', 'noopener,noreferrer')
    } else {
      // For YouTube videos, could open modal or direct link
      window.open(video.platformUrl, '_blank', 'noopener,noreferrer')
      // TODO: Implement video modal for embedded playback
    }
  }

  // Handle "Visit->" link click
  const handleVisitClick = () => {
    // Navigate to social media page or videos gallery
    console.log('Navigate to social media profiles')
    // TODO: Implement navigation to social media profiles page
  }

  return (
    <section className="w-full bg-white py-8 md:py-16 px-4 md:px-16">
      {/* Section Container */}
      <div className="max-w-[1440px] mx-auto">
        {/* Section Content */}
        <div className="bg-white rounded-[14px] py-6 md:py-11 px-3 md:px-6 min-h-[400px] md:min-h-[723px] flex flex-col gap-3.5">
          {/* Section Header */}
          <div className="flex flex-col gap-1 px-1 md:px-2.5 mb-6 md:mb-8">
            {/* Tagline */}
            <div className="flex items-center">
              <span className="text-[#091E42] opacity-50 text-[18px] md:text-[20.35px] font-normal leading-[1.27] tracking-[-0.026em]">
                Videos
              </span>
            </div>
            
            {/* Content Row */}
            <div className="flex items-center justify-between w-full gap-4 md:gap-6">
              <h2 className="text-[#091E42] text-[22px] md:text-[25.89px] font-normal leading-[1.27] tracking-[-0.027em] flex-1">
                Social Media
              </h2>
              <button
                onClick={handleVisitClick}
                className="text-[#091E42] text-[12px] md:text-[13.44px] font-medium leading-[1.27] tracking-[-0.0045em] hover:text-[#0a1d4a] transition-colors duration-200"
              >
                Visit→
              </button>
            </div>
          </div>

          {/* Videos Container */}
          <div className="flex-1 w-full overflow-hidden">
            {/* Desktop: Horizontal Scrolling */}
            <div className="hidden md:block w-full h-full">
              <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 h-full">
                {videos.map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    onVideoPlay={handleVideoPlay}
                  />
                ))}
              </div>
            </div>

            {/* Mobile: Smaller Cards with Navigation */}
            <div className="md:hidden w-full h-full">
              <div className="flex overflow-x-auto gap-4 px-2 pb-4 scrollbar-hide">
                {videos.map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    onVideoPlay={handleVideoPlay}
                    size="mobile"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Videos 