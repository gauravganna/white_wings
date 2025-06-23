import { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import AboutUsHero from '../components/AboutUsHero/AboutUsHero'

function AboutUs() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Component - Sticky at top */}
      <Header />
      
      {/* About Us Hero Section */}
      <AboutUsHero />
      
      {/* Main About Us Content Area */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-lg text-gray-600 mb-4">
            Welcome to White Wing Real Estate - your trusted partner in finding the perfect property.
          </p>
          <p className="text-gray-600">
            More content will be added here as we develop the About Us page further.
          </p>
        </div>
      </main>
      
      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default AboutUs 