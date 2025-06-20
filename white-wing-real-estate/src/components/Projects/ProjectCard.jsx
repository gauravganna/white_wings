import { useState } from 'react'

const ProjectCard = ({ project, onCardClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleCardClick = () => {
    onCardClick(project)
  }

  return (
    <div 
      className="relative w-[300px] md:w-[398px] h-[250px] md:h-[397px] cursor-pointer overflow-hidden group rounded-lg"
      onClick={handleCardClick}
    >
      {/* Project Image Container */}
      <div className="relative w-full h-full md:h-[322px] overflow-hidden">
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

      {/* Mobile: Project Name Overlay */}
      <div className="md:hidden absolute bottom-[30px] left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-white  rounded flex items-center justify-center px-2">
          <span className="text-black text-[16px] font-normal leading-[1.27] tracking-[-0.026em] text-center">
            {project.name}
          </span>
        </div>
      </div>

      {/* Desktop: Project Name Container */}
      <div className="hidden md:flex absolute bottom-0 left-0 right-0 h-[75px] bg-[#DFE2E6] items-center justify-center px-2.5 py-2.5">
        <span className="text-black text-[20.35px] font-bold leading-[1.27] tracking-[-0.026em] text-center">
          {project.name}
        </span>
      </div>
    </div>
  )
}

export default ProjectCard 