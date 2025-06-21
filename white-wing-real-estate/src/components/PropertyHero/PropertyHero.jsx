import { useState } from 'react'

function PropertyHero({ property }) {
  // State to track current center image index
  const [currentImageIndex, setCurrentImageIndex] = useState(
    property?.featuredImageIndex || 0
  )

  if (!property) return null

  // Get current images for display
  const currentImage = property.images[currentImageIndex]
  const nextImageIndex = (currentImageIndex + 1) % property.images.length

  // Handle image rotation - this logic will be used by new cards
  const handleImageRotation = () => {
    setCurrentImageIndex(nextImageIndex)
  }

  return (
    <div className="relative w-full h-[calc(100vh-90px)] overflow-hidden">
      {/* Background Image - Dynamic, matches current image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${currentImage})` }}
      />
      
      {/* Background Blur Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[100px] opacity-30 transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${currentImage})` }}
      />

      {/* White Gradient Fade at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />

      {/* Content Area - Two containers: Left and Right */}
      <div className="relative z-10 h-full flex items-end justify-between px-4 lg:px-10 pb-10">
        
        {/* Left Container - Property Info Card */}
        <div className="flex-shrink-0">
          <div className="bg-gray-200/90 backdrop-blur-sm border border-white/40 rounded-lg p-3 shadow-lg max-w-sm">
            {/* Inner Frame - Title and Description */}
            <div className="bg-gray-100/80 rounded-lg p-2 mb-2 shadow-sm">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-2 leading-tight tracking-tight">
                {property.name}
              </h1>
              <p className="text-sm font-semibold text-slate-800/90 leading-relaxed">
                {property.description}
              </p>
            </div>
            
            {/* Property Details */}
            <div className="space-y-2">
              {/* Status Row */}
              <div className="flex items-center gap-1 py-2">
                <span className="text-sm font-semibold text-slate-700/50">Status:</span>
                <span className="text-sm font-semibold text-slate-700/90">{property.status}</span>
              </div>
              
              {/* Phone Row */}
              <div className="flex items-center gap-1 py-2">
                <span className="text-sm font-semibold text-slate-700/50">Phone No:</span>
                <span className="text-sm font-semibold text-slate-700/90">{property.phone}</span>
              </div>
              
              {/* Location Row */}
              <div className="flex flex-col gap-1 py-2">
                <span className="text-sm font-semibold text-slate-700/50">Location:</span>
                <p className="text-sm font-semibold text-slate-700/90 leading-relaxed">
                  {property.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Container - Two Card System */}
        <div className="flex-shrink-0 max-w-full overflow-hidden">
          <div className="flex items-end gap-4 lg:gap-6">
            
            {/* Center Card - Main Image Display */}
            <div className="relative flex-shrink-0">
              <img
                src={currentImage}
                alt={property.name}
                className="w-64 h-48 lg:w-90 lg:h-70 xl:w-102 xl:h-78 object-cover rounded-lg border-4 lg:border-6 border-black shadow-2xl transition-all duration-700 ease-in-out"
              />
            </div>

            {/* Right Card - Next Image (Clickable) */}
            <div className="relative flex-shrink-0">
              <button
                onClick={handleImageRotation}
                className="relative group overflow-hidden rounded-lg border-2 border-white/30 hover:border-white/60 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <img
                  src={property.images[nextImageIndex]}
                  alt={`${property.name} next view`}
                  className="w-40 h-32 lg:w-54 lg:h-42 xl:w-62 xl:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </button>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default PropertyHero 