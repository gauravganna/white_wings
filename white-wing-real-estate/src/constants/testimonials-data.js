// Import images for testimonials
import valentinoImg from '../assets/images/projects/valentino.png'
import torranceImg from '../assets/images/projects/torrance.png'
import majorisImg from '../assets/images/projects/majoris.jpg'
import bellaCasaImg from '../assets/images/projects/bella-casa.png'


// Simply modify the text content, names, or add new testimonials below

export const TEXT_TESTIMONIALS = [
  {
    id: 1,
    rating: 4,
    quote: "Very Happy to be a reputed customer of Torrance project of White Wings group, we are having many properties located at different parts of the country but Torrance really gives the pleasure because of the quality of the work done and the support of the team is superb. Easy process and immediate solutions of any queries we had during the plan. Anybody looking for any kind of property either it's residential or commercial can definitely look out for any of the White Wings Projects.",
    name: "Rajesh Patel",
    title: "Property Investor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    id: 2,
    rating: 5,
    quote: "White Wings Group - Torrance Project is the 1st ever building in Surat to get Pre-Certified Platinum Certificate from Indian Green Building Council, Confederation of Indian Industry under IGBC Green Home Rating System. White Wings Group - Torrance Project is the 1st ever building in Surat to get Pre-Certified Platinum Certificate from Indian Green Building Council, Confederation of Indian Industry under IGBC Green Home Rating System",
    name: "Priya Sharma",
    title: "Homeowner",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b2bb?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    id: 3,
    rating: 5,
    quote: "Exceptional service and quality construction. The team at White Wings Group delivered exactly what they promised. Our commercial space exceeded all expectations and the after-sales support has been outstanding.",
    name: "Amit Kumar",
    title: "Business Owner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    id: 4,
    rating: 5,
    quote: "Professional approach and timely delivery. White Wings Group has set a new standard in real estate development. Highly recommend for anyone looking for premium properties in Surat.",
    name: "Neha Desai",
    title: "Real Estate Consultant",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format"
  }
]

export const VIDEO_TESTIMONIALS = [
  {
    id: 1,
    title: "Client Success Story - Torrance Project",
    thumbnail: torranceImg,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    clientName: "Mr. & Mrs. Patel",
    project: "Torrance Residential"
  },
  {
    id: 2,
    title: "Commercial Space Review - Majoris",
    thumbnail: valentinoImg,
    videoUrl: "./src/assets/videos/testimonials/video.mp4",
    clientName: "Sharma Enterprises",
    project: "Majoris Commercial"
  },
  {
    id: 3,
    title: "Happy Family at Bella Casa",
    thumbnail: bellaCasaImg,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    clientName: "Kumar Family",
    project: "Bella Casa"
  },
  {
    id: 4,
    title: "Investment Success Story",
    thumbnail: majorisImg,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    clientName: "Desai Group",
    project: "Multiple Projects"
  }
]

// Easy customization options
export const TESTIMONIALS_CONFIG = {
  sectionTitle: "Testimonials",
  showRatings: true,
  autoScroll: false,
  scrollSpeed: 3000, // milliseconds
  maxTextLength: 500 // characters
} 