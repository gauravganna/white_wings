import { useState } from 'react'

const ProjectCard = ({ project, onCardClick, onFavoriteToggle }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleCardClick = () => {
    onCardClick(project)
  }

  const handleFavoriteClick = (e) => {
    e.stopPropagation()
    onFavoriteToggle(project.id)
  }

  const handleLocationClick = (e) => {
    e.stopPropagation()
    // Handle location/navigation click
    console.log('Navigate to project details:', project.id)
  }

  return (
    <div 
      className="relative w-[376px] h-[397px] cursor-pointer overflow-hidden group"
      onClick={handleCardClick}
    >
      {/* Project Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out group-hover:scale-110 ${
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
        />
        {!imageLoaded && (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-gray-500">Loading...</div>
          </div>
        )}
      </div>

      {/* Project Name Overlay */}
      <div className="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-white group-hover:bg-transparent px-2.5 py-2.5 rounded flex items-center justify-center min-w-[100px] transition-colors duration-500 ease-out">
          <span className="text-black group-hover:text-white text-[20.35px] font-extrabold leading-[1.27] tracking-[-0.026em] text-center transition-colors duration-500 ease-out">
            {project.name}
          </span>
        </div>
      </div>

      {/* Action Icons */}
      <div className="absolute bottom-[15px] left-[30.5px] right-[30.5px] flex items-center justify-between z-10">
        {/* Heart Icon */}
        <button
          onClick={handleFavoriteClick}
          className="w-8 h-8 flex items-center justify-center group/heart bg-black/20 rounded-full backdrop-blur-sm hover:bg-black/30 transition-all duration-200"
        >
          <svg
            width="24"
            height="22"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-colors duration-200"
          >
            <path
              d="M18.7371 2.26249C18.3447 1.86142 17.8785 1.54375 17.3659 1.33013C16.8534 1.11651 16.3039 1.01135 15.7496 1.01135C15.1952 1.01135 14.6458 1.11651 14.1332 1.33013C13.6206 1.54375 13.1544 1.86142 12.762 2.26249L11.9996 3.04374L11.2371 2.26249C10.4436 1.44374 9.36215 1.01178 8.24959 1.01178C7.13703 1.01178 6.05553 1.44374 5.26209 2.26249C4.46865 3.08124 4.04834 4.19499 4.04834 5.34374C4.04834 6.49249 4.46865 7.60624 5.26209 8.42499L5.99959 9.18749L11.9996 15.3437L18.0371 9.18749L18.7371 8.42499C19.1259 8.02124 19.4345 7.54374 19.6434 7.01874C19.8522 6.49374 19.9559 5.93124 19.9559 5.36249C19.9559 4.79374 19.8522 4.23124 19.6434 3.70624C19.4345 3.18124 19.1259 2.70374 18.7371 2.26249Z"
              stroke="#FFFFFF"
              strokeWidth="3"
              fill={project.isFavorite ? "#FFFFFF" : "none"}
            />
          </svg>
        </button>

        {/* Navigation Icon */}
        <button
          onClick={handleLocationClick}
          className="w-8 h-8 flex items-center justify-center group/nav bg-black/20 rounded-full backdrop-blur-sm hover:bg-black/30 transition-all duration-200"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-colors duration-200"
          >
            <path
              d="M16.5833 8.10416C16.5833 13.4583 9.5 17.8333 9.5 17.8333C9.5 17.8333 2.41667 13.4583 2.41667 8.10416C2.41667 6.23053 3.16101 4.43374 4.48915 3.1056C5.81729 1.77746 7.61408 1.03333 9.48771 1.03333C11.3613 1.03333 13.1581 1.77746 14.4863 3.1056C15.8144 4.43374 16.5587 6.23053 16.5587 8.10416H16.5833Z"
              stroke="#FFFFFF"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M9.5 10.2917C10.7047 10.2917 11.6875 9.30888 11.6875 8.10417C11.6875 6.89946 10.7047 5.91667 9.5 5.91667C8.29529 5.91667 7.3125 6.89946 7.3125 8.10417C7.3125 9.30888 8.29529 10.2917 9.5 10.2917Z"
              stroke="#FFFFFF"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ProjectCard 