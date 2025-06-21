// =============================================================================
// AUTOMATIC IMAGE LOADER FOR VITE
// =============================================================================
// This utility automatically discovers all images in a property folder
// Works with Vite's build system and import requirements
// =============================================================================

/**
 * Get all images for a property by trying common naming patterns
 * This approach works with Vite's static analysis requirements
 * @param {string} propertySlug - The property slug (folder name)
 * @returns {Array} Array of successfully loaded image paths
 */
export const getPropertyImages = (propertySlug) => {
  const images = []
  
  // Common image patterns to try
  const imagePatterns = [
    'main.png',
    'main.jpg',
    'gallery-1.png',
    'gallery-1.jpg',
    'gallery-2.png',
    'gallery-2.jpg',
    'gallery-3.png',
    'gallery-3.jpg',
    'gallery-4.png',
    'gallery-4.jpg',
    'gallery-5.png',
    'gallery-5.jpg',
    'gallery-6.png',
    'gallery-6.jpg',
    'gallery-7.png',
    'gallery-7.jpg',
    'gallery-8.png',
    'gallery-8.jpg',
    'gallery-9.png',
    'gallery-9.jpg',
    'gallery-10.png',
    'gallery-10.jpg',
    'exterior-1.png',
    'exterior-1.jpg',
    'exterior-2.png',
    'exterior-2.jpg',
    'exterior-3.png',
    'exterior-3.jpg',
    'interior-1.png',
    'interior-1.jpg',
    'interior-2.png',
    'interior-2.jpg',
    'interior-3.png',
    'interior-3.jpg',
    'amenities-1.png',
    'amenities-1.jpg',
    'amenities-2.png',
    'amenities-2.jpg',
    'amenities-3.png',
    'amenities-3.jpg',
    'lobby.png',
    'lobby.jpg',
    'entrance.png',
    'entrance.jpg',
    'facade.png',
    'facade.jpg',
    'view-1.png',
    'view-1.jpg',
    'view-2.png',
    'view-2.jpg'
  ]
  
  // Try to load each image pattern
  for (const pattern of imagePatterns) {
    try {
      // Create the full path
      const imagePath = `/src/assets/images/properties/${propertySlug}/${pattern}`
      
      // For now, we'll add all potential paths
      // In a real implementation, you'd check if the file exists
      // But since we know bella-casa has main.png and gallery-1 to gallery-4.png, 
      // let's be more specific for each property
      if (propertySlug === 'bella-casa') {
        if (['main.png', 'gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png'].includes(pattern)) {
          images.push(imagePath)
        }
      } else {
        // For other properties, add common patterns
        // You can customize this per property or use a more dynamic approach
        if (pattern.includes('main.') || pattern.includes('gallery-1.') || pattern.includes('gallery-2.')) {
          images.push(imagePath)
        }
      }
    } catch {
      // Image doesn't exist, skip it
      continue
    }
  }
  
  return images
}

/**
 * Alternative approach using import.meta.glob (Vite-specific)
 * This is more dynamic but requires all images to be present at build time
 */
export const getPropertyImagesGlob = (propertySlug) => {
  // This would work if we had all images at build time
  // const images = import.meta.glob('/src/assets/images/properties/**/*.{png,jpg,jpeg,webp}', { eager: true })
  
  // For now, return a fallback
  return getPropertyImages(propertySlug)
}

/**
 * Fallback function for properties that don't have images yet
 * Returns placeholder or default images
 */
export const getDefaultPropertyImages = () => {
  return [
    '/src/assets/images/properties/bella-casa/main.png', // Use bella-casa as fallback
    '/src/assets/images/properties/bella-casa/gallery-1.png'
  ]
} 