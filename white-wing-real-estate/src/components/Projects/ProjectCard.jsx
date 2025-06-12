import { useState } from 'react'

const ProjectCard = ({ project, onCardClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleCardClick = () => {
    onCardClick(project)
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
        <div className="w-10 h-10 flex items-center justify-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-colors duration-200"
          >
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Navigation Icon */}
        <div className="w-10 h-10 flex items-center justify-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-colors duration-200"
          >
            <path
              d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle
              cx="12"
              cy="10"
              r="3"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard 