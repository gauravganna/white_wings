// Import project images for use as video thumbnails
import socialMediaImg1 from '../assets/images/social-media/social-media-1.png'
import socialMediaImg2 from '../assets/images/social-media/social-media-2.jpg'
import socialMediaImg3 from '../assets/images/social-media/social-media-3.png'
import socialMediaImg4 from '../assets/images/social-media/social-media-4.png'
import socialMediaImg5 from '../assets/images/social-media/social-media-5.png'

// Video thumbnail images - temporarily using project images for demo
// Replace with actual video thumbnails when available
const videoThumbnails = {
  socialMediaImg1: socialMediaImg1,
  socialMediaImg2: socialMediaImg2,
  socialMediaImg3: socialMediaImg3,
  socialMediaImg4: socialMediaImg4,
  socialMediaImg5: socialMediaImg5
}

// Curated social media videos data
export const SOCIAL_MEDIA_VIDEOS_DATA = [
  {
    id: 'socialMediaImg1',
    title: 'Social Media Video 1',
    description: 'Social Media Video 1',
    thumbnail: videoThumbnails.socialMediaImg1,
    platform: 'instagram',
    platformUrl: 'https://www.instagram.com/p/ABC123DEF/',
    embedUrl: null, // Instagram doesn't support direct embed
    duration: '1:23',
    isExternal: true
  },
  {
    id: 'socialMediaImg2',
    title: 'Social Media Video 2',
    description: 'Social Media Video 2',
    thumbnail: videoThumbnails.socialMediaImg2,
    platform: 'youtube',
    platformUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '2:45',
    isExternal: false // YouTube can be embedded
  },
  {
    id: 'socialMediaImg3',
    title: 'Social Media Video 3',
    description: 'Social Media Video 3',
    thumbnail: videoThumbnails.socialMediaImg3,
    platform: 'instagram',
    platformUrl: 'https://www.instagram.com/p/DEF456GHI/',
    embedUrl: null,
    duration: '0:58',
    isExternal: true
  },
  {
    id: 'socialMediaImg4',
    title: 'Social Media Video 4',
    description: 'Social Media Video 4',
    thumbnail: videoThumbnails.socialMediaImg4,
    platform: 'youtube',
    platformUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '3:12',
    isExternal: false
  },
  {
    id: 'socialMediaImg5',
    title: 'Social Media Video 5',
    description: 'Social Media Video 5',
    thumbnail: videoThumbnails.socialMediaImg5,
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
  return SOCIAL_MEDIA_VIDEOS_DATA.slice(0, 4)
}

// Helper function to get all videos
export const getAllVideos = () => {
  return SOCIAL_MEDIA_VIDEOS_DATA
} 