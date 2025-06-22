// Import project images for use as video thumbnails
import torranceImg from '../assets/images/properties/torrance/main.png'
import majorisImg from '../assets/images/properties/majoris/main.jpg'
import valentinoImg from '../assets/images/properties/valentino/main.png'
import bellaCasaImg from '../assets/images/properties/bella-casa/main.png'
import flamingoImg from '../assets/images/properties/flamingo/main.png'

// Video thumbnail images - temporarily using project images for demo
// Replace with actual video thumbnails when available
const videoThumbnails = {
  torrance: torranceImg,
  majoris: majorisImg, 
  valentino: valentinoImg,
  bellaCasa: bellaCasaImg,
  flamingo: flamingoImg
}

// Curated social media videos data
export const VIDEOS_DATA = [
  {
    id: 'torrance-drone',
    title: 'Torrance',
    description: 'Drone Video',
    thumbnail: videoThumbnails.torrance,
    platform: 'instagram',
    platformUrl: 'https://www.instagram.com/p/ABC123DEF/',
    embedUrl: null, // Instagram doesn't support direct embed
    duration: '1:23',
    isExternal: true
  },
  {
    id: 'majoris-walkthrough',
    title: 'Majoris',
    description: 'Property Walkthrough',
    thumbnail: videoThumbnails.majoris,
    platform: 'youtube',
    platformUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '2:45',
    isExternal: false // YouTube can be embedded
  },
  {
    id: 'valentino-construction',
    title: 'Valentino',
    description: 'Construction Progress',
    thumbnail: videoThumbnails.valentino,
    platform: 'instagram',
    platformUrl: 'https://www.instagram.com/p/DEF456GHI/',
    embedUrl: null,
    duration: '0:58',
    isExternal: true
  },
  {
    id: 'bella-casa-tour',
    title: 'Bella Casa',
    description: 'Virtual Tour',
    thumbnail: videoThumbnails.bellaCasa,
    platform: 'youtube',
    platformUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '3:12',
    isExternal: false
  },
  {
    id: 'flamingo-aerial',
    title: 'Flamingo',
    description: 'Aerial View',
    thumbnail: videoThumbnails.flamingo,
    platform: 'instagram',
    platformUrl: 'https://www.instagram.com/p/GHI789JKL/',
    embedUrl: null,
    duration: '1:45',
    isExternal: true
  }
]

// Platform configurations
export const PLATFORM_CONFIG = {
  instagram: {
    name: 'Instagram',
    color: '#E4405F',
    icon: 'instagram',
    baseUrl: 'https://www.instagram.com'
  },
  youtube: {
    name: 'YouTube', 
    color: '#FF0000',
    icon: 'youtube',
    baseUrl: 'https://www.youtube.com'
  },
  tiktok: {
    name: 'TikTok',
    color: '#000000',
    icon: 'tiktok',
    baseUrl: 'https://www.tiktok.com'
  }
}

// Helper function to get platform info
export const getPlatformInfo = (platform) => {
  return PLATFORM_CONFIG[platform] || PLATFORM_CONFIG.instagram
}

// Helper function to get featured videos (first 4)
export const getFeaturedVideos = () => {
  return VIDEOS_DATA.slice(0, 4)
}

// Helper function to get all videos
export const getAllVideos = () => {
  return VIDEOS_DATA
} 