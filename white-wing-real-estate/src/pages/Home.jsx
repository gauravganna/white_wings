import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Clients from '../components/Clients/Clients'
import Projects from '../components/Projects/Projects'
import Videos from '../components/Videos/Videos'
import Testimonials from '../components/Testimonials/Testimonials'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Component */}
      <Header />
      
      {/* Hero Section - Phase 1: Video Background */}
      <Hero />
      
      {/* Clients Section - Phase 2: Horizontal Moving Carousel */}
      <Clients />
      
      {/* Projects Section - Phase 3: Real Estate Projects Showcase */}
      <Projects />
      
      {/* Videos Section - Phase 4: Social Media Videos */}
      <Videos />
      
      {/* Testimonials Section - Phase 6: Client Testimonials */}
      <Testimonials />
      
      {/* Contact Section - Phase 5: Contact Form with Video Background */}
      <Contact />
      
      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default Home 