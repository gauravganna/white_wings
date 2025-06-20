import { useState } from 'react'

const VideoTestimonialCard = ({ video }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  // Check if video URL is an embed URL or raw video file
  const isEmbedUrl = (url) => {
    return url.includes('youtube.com/embed') || url.includes('vimeo.com/video') || url.includes('embed')
  }

  // Get video file extension to determine if it's a raw video file
  const getVideoType = (url) => {
    const extension = url.split('.').pop().toLowerCase()
    if (['mp4', 'webm', 'ogg'].includes(extension)) {
      return extension === 'mp4' ? 'video/mp4' : extension === 'webm' ? 'video/webm' : 'video/ogg'
    }
    return null
  }

  return (
    <>
      <div className="relative w-[300px] md:w-[642px] h-[200px] md:h-[440px] rounded-lg overflow-hidden bg-gray-200 cursor-pointer group shadow-[0px_11px_15px_-3px_rgba(63,73,71,0.1),0px_2px_6px_0px_rgba(63,73,71,0.1),0px_0px_1px_0px_rgba(122,117,127,1)]"
        onClick={handlePlayClick}
      >
      {/* Video Content */}
      {isPlaying ? (
        // Video Player (when playing)
        <div className="absolute inset-0">
          {isEmbedUrl(video.videoUrl) ? (
            // Embedded video (YouTube, Vimeo, etc.)
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : getVideoType(video.videoUrl) ? (
            // Raw video file
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              preload="metadata"
            >
              <source src={video.videoUrl} type={getVideoType(video.videoUrl)} />
              Your browser does not support the video tag.
            </video>
          ) : (
            // Fallback for unsupported video types
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">
              <p>Video format not supported</p>
            </div>
          )}
        </div>
      ) : (
        // Thumbnail View (when not playing)
        <>
          <div className="absolute inset-0">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              style={{ 
                opacity: imageLoaded ? 1 : 0,
                backgroundColor: imageLoaded ? 'transparent' : '#f0f0f0'
              }}
              onLoad={() => {
                console.log('Image loaded successfully:', video.thumbnail)
                setImageLoaded(true)
                setImageError(false)
              }}
              onError={(e) => {
                console.error('Image failed to load:', video.thumbnail, e)
                setImageError(true)
                setImageLoaded(false)
              }}
            />
            {!imageLoaded && !imageError && (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <div className="text-gray-500 text-sm">Loading...</div>
              </div>
            )}
            {imageError && (
              <div className="w-full h-full bg-red-200 flex flex-col items-center justify-center p-4">
                <div className="text-red-600 text-sm text-center">
                  <p>Image failed to load:</p>
                  <p className="text-xs mt-1 break-all">{video.thumbnail}</p>
                </div>
              </div>
            )}
          </div>

          {/* Dark Overlay - Temporarily disabled for debugging */}
          {/* {imageLoaded && (
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
          )} */}

          {/* Play Button */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#06173E] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white ml-1"
              >
                <path
                  d="M8 5V19L19 12L8 5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </>
      )}

      {/* Content Overlay - Bottom - Only show when not playing */}
      {!isPlaying && (
        <>
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-lg p-3 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex flex-col gap-2">
              <h3 className="text-black text-[14px] md:text-[16px] font-semibold leading-[1.2] line-clamp-2">
                {video.title}
              </h3>
              <div className="flex items-center justify-between text-[12px] md:text-[14px] text-gray-600">
                <span>{video.clientName}</span>
                <span className="text-[#06173E] font-medium">{video.project}</span>
              </div>
            </div>
          </div>

          {/* Hover Effect - Title Only (Always Visible on Mobile) */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
            <h3 className="text-white text-[14px] font-semibold leading-[1.2] line-clamp-2">
              {video.title}
            </h3>
          </div>
        </>
      )}
      </div>
    </>
  )
}

export default VideoTestimonialCard 