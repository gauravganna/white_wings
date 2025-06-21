import { getPropertyImages } from '../utils/imageLoader'

// =============================================================================
// PROPERTIES DATABASE
// =============================================================================
// Instructions for Non-Technical Users:
// 1. To add a new property: Copy an existing property object and modify the details
// 2. To edit a property: Find the property by name and update the fields
// 3. Each property has its own folder under /src/assets/images/properties/
// 4. Image naming convention: main.jpg, gallery-1.jpg, gallery-2.jpg, etc.
// 5. Images are automatically loaded from the property folder - no need to list them!
// 6. The 'slug' is used in the URL (e.g., /property/bella-casa)
// 7. Keep 'featuredImageIndex' as 0 unless you want a different main image
// 8. PropertyInfo content:
//    - facilities: List of property features (4 items recommended)
//    - video: Single video object with title and url to video file
//    - plans: List of floor plan types (3 items recommended)
//    - brochure: Single brochure object with title and url to PDF file
// =============================================================================

export const PROPERTIES = [
  {
    // Basic Property Information
    id: 1,
    name: 'BELLACASSA',
    slug: 'bella-casa', // Used in URL: /property/bella-casa
    description: `Welcome to Bella Casaa Towers
A comfortable and peaceful place to call home.`,
    
    // Property Details
    status: 'Completed',
    phone: '91 98240-99444',
    location: 'Bellacassa, Althan Bhimrad Bhimrad, Bhimrad-Althan Rd, Bharthana, Surat, Gujarat 395017',
    
    // Property Information Content
    propertyInfo: {
      facilities: [
        'Perfect for Families',
        'Gym Facilities',
        'Garden and open spaces',
        '3-4 Bedrooms'
      ],
      video: {
        title: 'Property Virtual Tour',
        url: '/src/assets/videos/bella-casa-tour.mp4' // Path to video file
      },
      plans: [
        '2 BHK Layout',
        '3 BHK Layout', 
        '4 BHK Penthouse'
      ],
      brochure: {
        title: 'Download Property Brochure',
        url: '/src/assets/brochures/bella-casa-brochure.pdf' // Path to PDF file
      }
    },
    
    // Images are automatically loaded from folder
    get images() {
      return getPropertyImages(this.slug)
    },
    featuredImageIndex: 0 // Which image to show first (0 = main.jpg)
  },

  {
    // Basic Property Information
    id: 2,
    name: 'VALENTINO',
    slug: 'valentino', // Used in URL: /property/valentino
    description: `Experience luxury living at Valentino
Where elegance meets comfort in every detail.`,
    
    // Property Details
    status: 'Under Construction',
    phone: '91 98240-99444',
    location: 'Valentino Heights, Ring Road, Surat, Gujarat 395002',
    
    // Property Information Content
    propertyInfo: {
      facilities: [
        'Luxury Living Spaces',
        'Swimming Pool & Spa',
        'Premium Clubhouse',
        '2-3 Bedrooms'
      ],
      video: {
        title: 'Valentino Project Walkthrough',
        url: '/src/assets/videos/valentino-walkthrough.mp4' // Path to video file
      },
      plans: [
        '2 BHK Premium',
        '3 BHK Deluxe',
        'Penthouse Collection'
      ],
      brochure: {
        title: 'Download Valentino Brochure',
        url: '/src/assets/brochures/valentino-brochure.pdf' // Path to PDF file
      }
    },
    
    // Images are automatically loaded from folder
    get images() {
      return getPropertyImages(this.slug)
    },
    featuredImageIndex: 0 // Which image to show first (0 = main.jpg)
  },

  {
    // Basic Property Information
    id: 3,
    name: 'MAJORIS',
    slug: 'majoris', // Used in URL: /property/majoris
    description: `Discover Majoris - Premium residential spaces
Designed for modern families seeking quality living.`,
    
    // Property Details
    status: 'Completed',
    phone: '91 98240-99444',
    location: 'Majoris Complex, Vesu, Surat, Gujarat 395007',
    
    // Property Information Content
    propertyInfo: {
      facilities: [
        'Family-Friendly Design',
        'Children Play Area',
        'Landscaped Gardens',
        '3-4 Bedrooms'
      ],
      video: {
        title: 'Majoris Property Tour',
        url: '/src/assets/videos/majoris-property-tour.mp4' // Path to video file
      },
      plans: [
        '3 BHK Family',
        '4 BHK Spacious',
        'Duplex Options'
      ],
      brochure: {
        title: 'Download Majoris Brochure',
        url: '/src/assets/brochures/majoris-brochure.pdf' // Path to PDF file
      }
    },
    
    // Images are automatically loaded from folder
    get images() {
      return getPropertyImages(this.slug)
    },
    featuredImageIndex: 0 // Which image to show first (0 = main.jpg)
  },

  {
    // Basic Property Information
    id: 4,
    name: 'MASSIMO',
    slug: 'massimo', // Used in URL: /property/massimo
    description: `Massimo Residences - Where luxury meets lifestyle
Premium apartments with world-class amenities.`,
    
    // Property Details
    status: 'Pre-Launch',
    phone: '91 98240-99444',
    location: 'Massimo Towers, Althan, Surat, Gujarat 395017',
    
    // Property Information Content
    propertyInfo: {
      facilities: [
        'World-Class Amenities',
        'Rooftop Infinity Pool',
        'Private Elevators',
        '3-5 Bedrooms'
      ],
      video: {
        title: 'Massimo Luxury Showcase',
        url: '/src/assets/videos/massimo-luxury-showcase.mp4' // Path to video file
      },
      plans: [
        '3 BHK Premium',
        '4 BHK Luxury',
        '5 BHK Penthouse'
      ],
      brochure: {
        title: 'Download Massimo Brochure',
        url: '/src/assets/brochures/massimo-brochure.pdf' // Path to PDF file
      }
    },
    
    // Images are automatically loaded from folder
    get images() {
      return getPropertyImages(this.slug)
    },
    featuredImageIndex: 0 // Which image to show first (0 = main.jpg)
  },

  {
    // Basic Property Information
    id: 5,
    name: 'TORRANCE',
    slug: 'torrance', // Used in URL: /property/torrance
    description: `Torrance Heights - Elevated living experience
Modern architecture with premium finishes.`,
    
    // Property Details
    status: 'Completed',
    phone: '91 98240-99444',
    location: 'Torrance Heights, Piplod, Surat, Gujarat 395007',
    
    // Property Information Content
    propertyInfo: {
      facilities: [
        'Modern Architecture',
        'Premium Finishes',
        'Elevated Views',
        '2-4 Bedrooms'
      ],
      video: {
        title: 'Torrance Architectural Tour',
        url: '/src/assets/videos/torrance-architectural-tour.mp4' // Path to video file
      },
      plans: [
        '2 BHK Modern',
        '3 BHK Premium',
        '4 BHK Penthouse'
      ],
      brochure: {
        title: 'Download Torrance Brochure',
        url: '/src/assets/brochures/torrance-brochure.pdf' // Path to PDF file
      }
    },
    
    // Images are automatically loaded from folder
    get images() {
      return getPropertyImages(this.slug)
    },
    featuredImageIndex: 0 // Which image to show first (0 = main.jpg)
  }
]

// =============================================================================
// HELPER FUNCTIONS (Don't modify these unless you're technical)
// =============================================================================

// Find property by slug (used in URLs)
export const getPropertyBySlug = (slug) => {
  return PROPERTIES.find(property => property.slug === slug)
}

// Get all property slugs (used for routing)
export const getAllPropertySlugs = () => {
  return PROPERTIES.map(property => property.slug)
}

// Get property by ID
export const getPropertyById = (id) => {
  return PROPERTIES.find(property => property.id === id)
} 