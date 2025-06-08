import { BRAND_COLORS } from './constants/site-data'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Clients from './components/Clients/Clients'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Component */}
      <Header />
      
      {/* Hero Section - Phase 1: Video Background */}
      <Hero />
      
      {/* Clients Section - Phase 2: Horizontal Moving Carousel */}
      <Clients />
      
      {/* Temporary content for testing - Will be replaced with other sections */}
      <main className="flex-1 p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Website Progress Status 🚀</h2>
            <p className="text-gray-700 mb-4">
              <strong>✅ Hero Section - COMPLETE!</strong><br/>
              ✅ Video background with mobile fallback<br/>
              ✅ Glassmorphism hero container (full height mobile)<br/>
              ✅ Hero content with exact Figma typography<br/>
              ✅ Dual CTA buttons with hover effects<br/>
              ✅ Statistics cards (Commercial, Residential, Land Development)<br/>
              ✅ Happy Families card with arrow design<br/>
              ✅ Responsive carousel: tilted (desktop) + blurred background (mobile)<br/>
              ✅ Perfect mobile experience with background carousel<br/>
              ✅ Fully responsive and performant<br/><br/>
              
              <strong>✅ Clients Section - COMPLETE!</strong><br/>
              ✅ Horizontal moving carousel with smooth animation<br/>
              ✅ Desktop: Title "Clients" with carousel below<br/>
              ✅ Mobile: Carousel only (no title)<br/>
              ✅ Pause animation on hover<br/>
              ✅ Seamless infinite scroll<br/>
              ✅ Responsive image sizing (176×138px desktop, 75×59px mobile)<br/>
              ✅ Exact Figma colors and spacing
            </p>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Brand Colors Test:</h3>
              <div className="flex gap-4 flex-wrap">
                {Object.entries(BRAND_COLORS).map(([name, color]) => (
                  <div key={name} className="text-center">
                    <div 
                      className="w-16 h-16 rounded border border-gray-200 mb-2"
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="text-xs font-medium">{name}</div>
                    <div className="text-xs text-gray-500">{color}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default App
