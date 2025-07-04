import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import { PROJECTS_DATA, FILTER_OPTIONS, getFilteredProjects, getPropertyUrlFromProject } from '../../data/properties'

const Projects = ({ 
  currentProperty = null, // Current property to exclude from results
  showOnlyCategory = null, // 'commercial' or 'residential' - if null, show both
  sectionTitle = "Projects" // Custom section title
}) => {
  const navigate = useNavigate()
  
  // State for filter management - independent for each category
  const [commercialFilter, setCommercialFilter] = useState('All')
  const [residentialFilter, setResidentialFilter] = useState('All')

  // Helper function to exclude current property from projects
  const excludeCurrentProperty = (projects) => {
    if (!currentProperty) return projects
    return projects.filter(project => project.id !== currentProperty.slug)
  }

  // Get filtered projects for each category
  let filteredCommercialProjects = getFilteredProjects('commercial', commercialFilter)
  let filteredResidentialProjects = getFilteredProjects('residential', residentialFilter)
  
  // Exclude current property if provided
  filteredCommercialProjects = excludeCurrentProperty(filteredCommercialProjects)
  filteredResidentialProjects = excludeCurrentProperty(filteredResidentialProjects)
  
  // Limit to 3 projects per category
  filteredCommercialProjects = filteredCommercialProjects.slice(0, 3)
  filteredResidentialProjects = filteredResidentialProjects.slice(0, 3)

  // Handle filter changes
  const handleCommercialFilterChange = (filter) => {
    setCommercialFilter(filter)
  }

  const handleResidentialFilterChange = (filter) => {
    setResidentialFilter(filter)
  }

  // Handle project card click - Navigate to property page
  const handleProjectClick = (project) => {
    const propertyUrl = getPropertyUrlFromProject(project)
    navigate(propertyUrl)
  }



  // Handle "More" click
  const handleMoreClick = (category) => {
    console.log('More clicked for:', category)
    // TODO: Navigate to projects page with category filter
  }

  return (
    <section className="w-full bg-white py-0 md:py-14 px-0 md:px-16">
      {/* Section Header */}
      <div className="flex flex-row items-center gap-1 mb-2 mt-6 md:mb-11">
        <h2 className="text-[#091E42] opacity-50 text-[18px] md:text-[20.35px] font-normal leading-[1.27] tracking-[-0.026em] px-4 md:px-0">
          {sectionTitle}
        </h2>
      </div>

      {/* Projects Container */}
      <div className="flex flex-col justify-center gap-2 md:gap-2 max-w-[1440px] mx-auto">
        {/* Commercial Projects Container - Show if no category filter or if showing commercial */}
        {(!showOnlyCategory || showOnlyCategory === 'commercial') && (
        <div className="bg-[#DFE2E6] rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.1)] px-2 md:px-6 py-6 md:py-11 flex flex-col items-center gap-3.5">
          {/* Commercial Header */}
          <div className="w-full flex items-center justify-between px-1 md:px-2.5">
            <div className="flex items-center gap-6">
              <h3 className="text-[#091E42] text-[18px] md:text-[25.89px] font-normal leading-[1.27] tracking-[-0.027em]">
                Commercial
              </h3>
              {/* Commercial Filter Tabs - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-8">
                {FILTER_OPTIONS.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => handleCommercialFilterChange(filter)}
                    className={`text-[13.44px] font-bold leading-[1.27] tracking-[-0.0045em] transition-opacity duration-200 ${
                      commercialFilter === filter
                        ? 'text-[#091E42] border-b border-[#091E42]'
                        : 'text-[#091E42] opacity-50 hover:opacity-70'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => handleMoreClick('commercial')}
              className="text-[#839AA0] text-[13.44px] font-medium leading-[1.27] tracking-[-0.0045em] hover:text-[#6B7580] transition-colors duration-200"
            >
              More
            </button>
          </div>

          {/* Commercial Projects Grid */}
          <div className="w-full pt-2">
            {/* Mobile: Horizontal Scrolling - Max 3 projects */}
            <div className="md:hidden flex overflow-x-auto gap-4 px-2 pb-2 scrollbar-hide">
              {filteredCommercialProjects.map((project) => (
                <div key={project.id} className="flex-shrink-0">
                  <ProjectCard
                    project={PROJECTS_DATA.commercial.find(p => p.id === project.id)}
                    onCardClick={handleProjectClick}
                  />
                </div>
              ))}
            </div>
            {/* Desktop: Grid Layout - Max 3 projects */}
            <div className="hidden md:flex items-center gap-6">
              {filteredCommercialProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={PROJECTS_DATA.commercial.find(p => p.id === project.id)}
                  onCardClick={handleProjectClick}
                />
              ))}
            </div>
          </div>
        </div>
        )}

        {/* Residential Projects Container - Show if no category filter or if showing residential */}
        {(!showOnlyCategory || showOnlyCategory === 'residential') && (
        <div className="bg-[#DFE2E6] rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.1)] px-2 md:px-6 py-6 md:py-11 flex flex-col items-end gap-3.5">
          {/* Residential Header */}
          <div className="w-full flex items-center justify-between px-1 md:px-2.5">
            <div className="flex items-center gap-6">
              <h3 className="text-[#091E42] text-[18px] md:text-[25.89px] font-normal leading-[1.27] tracking-[-0.027em]">
                Residential
              </h3>
              {/* Residential Filter Tabs - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-8">
                {FILTER_OPTIONS.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => handleResidentialFilterChange(filter)}
                    className={`text-[13.44px] font-bold leading-[1.27] tracking-[-0.0045em] transition-opacity duration-200 ${
                      residentialFilter === filter
                        ? 'text-[#091E42] border-b border-[#091E42]'
                        : 'text-[#091E42] opacity-50 hover:opacity-70'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => handleMoreClick('residential')}
              className="text-[#839AA0] text-[13.44px] font-medium leading-[1.27] tracking-[-0.0045em] hover:text-[#6B7580] transition-colors duration-200"
            >
              More
            </button>
          </div>

          {/* Residential Projects Grid */}
          <div className="w-full pt-2">
            {/* Mobile: Horizontal Scrolling - Max 3 projects */}
            <div className="md:hidden flex overflow-x-auto gap-4 px-2 pb-2 scrollbar-hide">
              {filteredResidentialProjects.map((project) => (
                <div key={project.id} className="flex-shrink-0">
                  <ProjectCard
                    project={PROJECTS_DATA.residential.find(p => p.id === project.id)}
                    onCardClick={handleProjectClick}
                  />
                </div>
              ))}
            </div>
            {/* Desktop: Grid Layout - Max 3 projects */}
            <div className="hidden md:flex items-center gap-6">
              {filteredResidentialProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={PROJECTS_DATA.residential.find(p => p.id === project.id)}
                  onCardClick={handleProjectClick}
                />
              ))}
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  )
}

export default Projects 