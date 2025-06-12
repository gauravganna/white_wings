import { useState } from 'react'
import { getPlatformInfo } from '../../constants/videos-data'

const VideoCard = ({ video, onVideoPlay, size = 'desktop' }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const platformInfo = getPlatformInfo(video.platform)

  const handleVideoPlay = () => {
    onVideoPlay(video)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(true)
  }

  // Responsive sizing
  const cardClasses = size === 'mobile' 
    ? "relative w-[350px] h-[240px] flex-shrink-0 rounded-lg overflow-hidden group cursor-pointer"
    : "relative w-[642px] h-[440px] flex-shrink-0 rounded-lg overflow-hidden group cursor-pointer"
  
  // Responsive typography
  const titleClasses = size === 'mobile'
    ? "text-[#091E42] text-[20px] font-medium leading-[1.2] tracking-[-0.02em] mb-1"
    : "text-[#091E42] text-[28px] font-medium leading-[1.2] tracking-[-0.02em] mb-1"
  
  const descriptionClasses = size === 'mobile'
    ? "text-[#091E42] text-[12px] font-normal leading-[1.3] tracking-[-0.005em] opacity-80"
    : "text-[#091E42] text-[14px] font-normal leading-[1.3] tracking-[-0.005em] opacity-80"
  
  const playButtonSize = size === 'mobile' ? "w-[45px] h-[45px]" : "w-[60px] h-[60px]"

  return (
    <div className={cardClasses}>
      {/* Video Thumbnail Background */}
      <div className="absolute inset-0">
        {!imageError ? (
          <img
            src={video.thumbnail}
            alt={`${video.title} - ${video.description}`}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: 'auto',
              height: 'auto',
              minWidth: '100%',
              minHeight: '100%',
              maxWidth: 'none',
              maxHeight: 'none'
            }}
            onLoad={() => setImageLoaded(true)}
            onError={handleImageError}
          />
        ) : (
          // Fallback gradient background if image fails to load
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
            <div className="text-gray-600 text-center">
              <div className="text-4xl mb-2">🎥</div>
              <div className="text-sm">Video Thumbnail</div>
            </div>
          </div>
        )}
        
        {!imageLoaded && !imageError && (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-gray-500">Loading...</div>
          </div>
        )}
      </div>

      {/* Play Button - Centered */}
      <button
        onClick={handleVideoPlay}
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${playButtonSize} bg-[#06173E] rounded-full flex items-center justify-center hover:bg-[#0a1d4a] transition-colors duration-200 shadow-lg group-hover:scale-110 z-30`}
        aria-label={`Play ${video.title} video`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white ml-1"
        >
          <path
            d="M8 5.14v13.72c0 .77.86 1.28 1.54.91l11.12-6.86c.61-.38.61-1.28 0-1.66L9.54 4.23C8.86 3.86 8 4.37 8 5.14z"
            fill="currentColor"
          />
        </svg>
      </button>

      {/* Platform Badge */}
      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 z-20">
        <div 
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: platformInfo.color }}
        ></div>
        <span className="text-white text-xs font-medium">
          {platformInfo.name}
        </span>
        {video.duration && (
          <span className="text-white text-xs opacity-80">
            {video.duration}
          </span>
        )}
      </div>

      {/* Overlay Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        {/* Title Container */}
        <div className="bg-white rounded-lg p-6 mb-3 shadow-lg">
          <div className="flex flex-col">
            <h3 className={titleClasses}>
              {video.title}
            </h3>
            <p className={descriptionClasses}>
              {video.description}
            </p>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
    </div>
  )
}

export default VideoCard 