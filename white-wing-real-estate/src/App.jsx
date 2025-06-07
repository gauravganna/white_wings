import { BRAND_COLORS } from './constants/site-data'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Component */}
      <Header />
      
      {/* Temporary content to show the header in context */}
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            White Wing Group - Real Estate Website
          </h1>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Header Component Status</h2>
            <p className="text-gray-700 mb-4">
              ✅ Navigation bar implemented with responsive design<br/>
              ✅ Desktop horizontal navigation with active states<br/>
              ✅ Mobile hamburger menu with slide-out panel<br/>
              ✅ User icon and brand colors from Figma<br/>
              ✅ Properties and Media have dropdown icons<br/>
              ✅ Matches Figma design specifications
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
