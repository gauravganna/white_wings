// Project images imports
import valentinoImg from '../assets/images/projects/valentino.png'
import majorisImg from '../assets/images/projects/majoris.jpg'
import massimoImg from '../assets/images/projects/massimo.png'
import bellaCasaImg from '../assets/images/projects/bella-casa.png'
import flamingoImg from '../assets/images/projects/flamingo.png'
import torranceImg from '../assets/images/projects/torrance.png'

// Filter options
export const FILTER_OPTIONS = ['All', 'New', 'Exclusive', 'Upcoming']

// Projects data
export const PROJECTS_DATA = {
  commercial: [
    {
      id: 'valentino',
      name: 'Valentino',
      image: valentinoImg,
      category: 'commercial',
      status: ['All', 'New'],
      isFavorite: false,
      location: 'Downtown Business District'
    },
    {
      id: 'majoris',
      name: 'Majoris',
      image: majorisImg,
      category: 'commercial',
      status: ['All', 'Exclusive'],
      isFavorite: false,
      location: 'Commercial Hub'
    },
    {
      id: 'massimo',
      name: 'Massimo',
      image: massimoImg,
      category: 'commercial',
      status: ['All', 'Upcoming'],
      isFavorite: false,
      location: 'Business Park'
    }
  ],
  residential: [
    {
      id: 'bella-casa',
      name: 'Bella casa',
      image: bellaCasaImg,
      category: 'residential',
      status: ['All', 'New'],
      isFavorite: false,
      location: 'Luxury Residences'
    },
    {
      id: 'flamingo',
      name: 'Flamingo',
      image: flamingoImg,
      category: 'residential',
      status: ['All', 'Exclusive'],
      isFavorite: false,
      location: 'Waterfront Living'
    },
    {
      id: 'torrance',
      name: 'Torrance',
      image: torranceImg,
      category: 'residential',
      status: ['All', 'Upcoming'],
      isFavorite: false,
      location: 'Premium Apartments'
    }
  ]
}

// Helper function to get filtered projects
export const getFilteredProjects = (category, filter) => {
  const projects = PROJECTS_DATA[category] || []
  if (filter === 'All') {
    return projects
  }
  return projects.filter(project => project.status.includes(filter))
} 