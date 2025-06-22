import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import PropertyHero from '../components/PropertyHero/PropertyHero'
import PropertyInfo from '../components/PropertyInfo/PropertyInfo'
import { getPropertyBySlug } from '../data/properties'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'

function PropertyTemplate() {
  // Get property slug from URL parameters
  const { slug } = useParams()
  
  // Scroll to top when property slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])
  
  // Find the property data using the slug
  const property = getPropertyBySlug(slug)
  
  // If property not found, show error message
  if (!property) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Property Not Found</h1>
            <p className="text-lg text-gray-600">The property "{slug}" could not be found.</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Component - Sticky at top */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      
      {/* Property Hero Section */}
      <PropertyHero property={property} />
      
      {/* Property Information Section */}
      <PropertyInfo property={property} />
      
      <Projects 
        currentProperty={property}
        showOnlyCategory={property.category}
        sectionTitle={`Other ${property.category === 'commercial' ? 'Commercial' : 'Residential'} Projects`}
      />

      <Contact />
      
      {/* Main Property Content Area - To be filled later */}
      <main className="flex-grow">
        {/* Additional property content sections will go here */}
      </main>
      
      {/* Footer Component - Same as Home Page */}
      <Footer />
    </div>
  )
}

export default PropertyTemplate 