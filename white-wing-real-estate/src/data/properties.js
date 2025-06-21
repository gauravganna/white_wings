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