import { useState, useEffect } from 'react'

const TextTestimonialCard = ({ testimonial }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Render star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
          fill={index < rating ? "#000000" : "#E5E5E5"}
        />
      </svg>
    ))
  }

  return (
    <div className="w-[300px] md:w-[636px] h-[280px] md:h-[320px] flex flex-col justify-between">
      {/* Top Section: Stars + Quote */}
      <div className="flex flex-col gap-4 md:gap-6 flex-1">
        {/* Stars */}
        <div className="flex items-center gap-1">
          {renderStars(testimonial.rating)}
        </div>

        {/* Quote */}
        <div className="flex-1 overflow-hidden">
          <p 
            className="text-black text-[14px] md:text-[18.06px] font-semibold leading-[1.27] tracking-[-0.014em]"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: isMobile ? '10' : '6',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            "{testimonial.quote}"
          </p>
        </div>
      </div>

      {/* Bottom Section: Avatar - Always at bottom */}
      <div className="flex items-center gap-4 md:gap-5 mt-4 md:mt-6">
        {/* Avatar Image */}
        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              // Fallback to initials if image fails to load
              setImageLoaded(false)
            }}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-600 text-sm font-semibold">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
        </div>

        {/* Avatar Content */}
        <div className="flex flex-col">
          <span className="text-black text-[14px] md:text-[16px] font-semibold">
            {testimonial.name}
          </span>
          <span className="text-gray-600 text-[12px] md:text-[14px] font-normal">
            {testimonial.title}
          </span>
        </div>

        {/* Divider Line */}
        <div className="w-px h-12 md:h-[61px] bg-black ml-2"></div>
      </div>
    </div>
  )
}

export default TextTestimonialCard 