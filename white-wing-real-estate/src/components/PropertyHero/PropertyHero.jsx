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
    <div className="relative w-full min-h-[calc(100vh-90px)] h-auto mt-6 md:mt-0 md:h-[calc(100vh-90px)] md:overflow-hidden">
      {/* Desktop/Tablet Background - Blur Effect */}
      <div className="hidden md:block">
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
      </div>

      {/* Mobile Background - White/Light Background */}
      <div className="block md:hidden">
        <div className="absolute inset-0 bg-white" />
      </div>

      {/* Content Area - Responsive Layout */}
      <div className="relative z-10 min-h-full h-auto md:h-full flex flex-col md:flex-row items-end justify-between px-4 lg:px-10 pb-10">
        
        {/* Mobile Layout - Stacked */}
        <div className="block md:hidden w-full space-y-6">
          {/* Main Image Display */}
          <div className="mb-6">
            <div className="relative">
              <img
                src={currentImage}
                alt={property.name}
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-all duration-700 ease-in-out"
              />
              {/* Image Carousel Dots Overlay */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white shadow-lg' 
                        : 'bg-gray-400/60 hover:bg-gray-300/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal Scrollable Image Gallery */}
          <div className="mb-6">
            <div className="flex gap-2 px-4 overflow-x-auto scrollbar-hide">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 relative overflow-hidden rounded-lg border-2 transition-all duration-300 shadow-lg ${
                    index === currentImageIndex
                      ? 'border-black shadow-xl scale-105'
                      : 'border-black/30 shadow-md hover:border-black/60 hover:shadow-lg'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${property.name} view ${index + 1}`}
                    className="w-20 h-16 sm:w-24 sm:h-18 object-cover transition-transform duration-300"
                  />
                  {/* Active indicator overlay */}
                  {index === currentImageIndex && (
                    <div className="absolute inset-0 bg-blue-500/20 border-2 border-blue-500 rounded-lg"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Info Card - Exact Figma Design */}
          <div className="mb-6 px-0">
            <div className="bg-white rounded-lg p-1 flex flex-col gap-1">
              {/* Status Badge Row */}
              <div className="bg-blue-50 rounded-2xl flex items-center gap-1.5 w-fit pr-2">
                <div className="bg-blue-700 text-white text-xs font-medium px-4 py-1.5 rounded-xl">
                  Status
                </div>
                <span className="text-blue-600 text-xs font-medium">
                  {property.status}
                </span>
              </div>

              {/* Main Info Frame */}
              <div className=" rounded-lg py-2.5 pl-0 pr-6 shadow-sm">
                <h1 className="text-[22px] font-normal text-slate-900 mb-0 leading-tight font-roboto">
                  {property.name}
                </h1>
                <p className="text-xs font-normal text-slate-900/90 leading-relaxed tracking-wider font-roboto">
                  {property.description}
                </p>
              </div>

              {/* Phone Row */}
              <div className="flex flex-col justify-center gap-1 py-2">
                <span className="text-xs font-normal text-blue-600/50 tracking-wider font-roboto">Phone No:</span>
                <span className="text-xs font-normal text-slate-800/90 tracking-wider font-roboto">{property.phone}</span>
              </div>

              {/* Location Row */}
              <div className="flex flex-col gap-1 py-2 w-full">
                <span className="text-xs font-normal text-blue-600/50 tracking-wider font-roboto">Location:</span>
                <p className="text-xs font-normal text-slate-800/90 leading-relaxed tracking-wider font-roboto w-full">
                  {property.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Layout - Side by Side */}
        <div className="hidden md:flex items-end justify-between w-full">
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
    </div>
  )
}

export default PropertyHero 