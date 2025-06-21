import { useState, useEffect } from 'react'

function PropertyInfo({ property }) {
  const [activeTab, setActiveTab] = useState('Property')
  const [pdfExists, setPdfExists] = useState(false)
  const [pdfLoading, setPdfLoading] = useState(true)
  const [pdfError, setPdfError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Check if PDF exists
  useEffect(() => {
    if (!property?.propertyInfo?.brochure?.url) {
      setPdfExists(false)
      setPdfLoading(false)
      return
    }

    const checkPdfExists = async () => {
      try {
        setPdfLoading(true)
        const response = await fetch(property.propertyInfo.brochure.url, { method: 'HEAD' })
        setPdfExists(response.ok)
      } catch {
        console.log('PDF not found:', property.propertyInfo.brochure.url)
        setPdfExists(false)
      } finally {
        setPdfLoading(false)
      }
    }
    
    checkPdfExists()
  }, [property?.propertyInfo?.brochure?.url])

  // Reset active tab if brochure becomes unavailable
  useEffect(() => {
    if (activeTab === 'Brochure' && !pdfExists && !pdfLoading) {
      setActiveTab('Property')
    }
  }, [pdfExists, pdfLoading, activeTab])

  if (!property || !property.propertyInfo) return null

  const { facilities, video, plans, brochure } = property.propertyInfo
  
  // Only show tabs for available content
  const availableTabs = ['Property', 'Video', 'Plans']
  if (pdfExists) {
    availableTabs.push('Brochure')
  }

  return (
    <div className="w-full bg-white py-2 px-2 md:px-16 md:py-20">
      <div className="w-full mx-auto">
        
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-20 justify-center items-start max-w-none mx-auto">
          
          {/* Left Container - Tabs and Content */}
          <div className="bg-gray-300 rounded-lg p-0 flex-none w-[538px] h-[342px] relative">
            
            {/* Tab Menu */}
            <div className="flex justify-between border-b border-gray-500 absolute top-8 left-6 right-6 pb-0">
              {availableTabs.slice(0, 3).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-4 text-base font-normal border-b-3 transition-colors ${
                    activeTab === tab
                      ? 'text-gray-700 border-gray-600'
                      : 'text-blue-400 border-transparent hover:text-gray-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Property Content */}
            {activeTab === 'Property' && (
              <div className="absolute top-[122px] left-6 space-y-4">
                <h3 className="text-lg font-semibold text-slate-800 tracking-tight">
                  Property Insight
                </h3>
                <div className="space-y-2 opacity-70">
                  {facilities.map((facility, index) => (
                    <p 
                      key={index}
                      className={`text-lg font-semibold text-slate-800 tracking-tight ${
                        facility === 'Garden and open spaces' ? 'text-center' : ''
                      }`}
                    >
                      {facility}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Video Content */}
            {activeTab === 'Video' && (
              <div className="absolute top-[80px] left-6 right-6 bottom-6">
                <video
                  src={video.url}
                  controls
                  className="w-full h-full object-cover rounded-lg"
                  poster={property.images[0]}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {/* Plans Content */}
            {activeTab === 'Plans' && (
              <div className="absolute top-[122px] left-6 space-y-4">
                <h3 className="text-lg font-semibold text-slate-800 tracking-tight">
                  Floor Plans
                </h3>
                <div className="space-y-2 opacity-70">
                  {plans.map((plan, index) => (
                    <p 
                      key={index}
                      className="text-lg font-semibold text-slate-800 tracking-tight"
                    >
                      {plan}
                    </p>
                  ))}
                </div>
              </div>
            )}


          </div>

          {/* Right Container - Brochure */}
          {pdfExists && (
            <div className="flex-none w-[547px] h-[342px] relative border-2 border-black rounded-lg overflow-hidden">
              {!pdfError ? (
                <iframe
                  src={`${brochure.url}#toolbar=0&navpanes=0&scrollbar=0&page=1&zoom=fit`}
                  className="w-full h-full border-0"
                  title="Property Brochure Preview"
                  onError={() => setPdfError(true)}
                  onLoad={() => setPdfError(false)}
                  style={{ pointerEvents: 'none' }}
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">PDF Preview not available</p>
                    <a
                      href={brochure.url}
                      download
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              )}
              <div className="absolute bottom-5 left-5 right-5">
                <a
                  href={brochure.url}
                  download
                  className="block bg-black/80 border border-gray-400 rounded-lg px-5 py-2.5 backdrop-blur-sm hover:bg-black/90 transition-colors"
                >
                  <h2 className="text-white text-3xl font-normal text-center tracking-tight font-inter">
                    Download Brochure
                  </h2>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="bg-white rounded border-4 border-transparent h-[292px] relative">
            
            {/* Mobile Tab Menu */}
            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm absolute top-5 left-1/2 transform -translate-x-1/2 flex">
              {availableTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-4 text-sm font-normal rounded-2xl transition-all ${
                    activeTab === tab
                      ? 'bg-gray-300 text-slate-800 border border-white'
                      : 'text-blue-400 hover:text-gray-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Mobile Property Content */}
            {activeTab === 'Property' && (
              <div className="absolute top-[100px] left-6 space-y-2">
                <h3 className="text-base font-normal text-slate-800 tracking-wide font-roboto">
                  Property Insight
                </h3>
                <div className="space-y-1 opacity-70">
                  {facilities.map((facility, index) => (
                    <p 
                      key={index}
                      className={`text-base font-normal text-slate-800 tracking-wide font-roboto ${
                        facility === 'Garden and open spaces' ? 'text-center' : ''
                      }`}
                    >
                      {facility}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile Video Content */}
            {activeTab === 'Video' && (
              <div className="absolute top-[80px] left-2 right-2 bottom-6">
                <video
                  src={video.url}
                  controls
                  className="w-full h-full object-cover rounded-lg"
                  poster={property.images[0]}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {/* Mobile Plans Content */}
            {activeTab === 'Plans' && (
              <div className="absolute top-[100px] left-6 space-y-2">
                <h3 className="text-base font-normal text-slate-800 tracking-wide font-roboto">
                  Floor Plans
                </h3>
                <div className="space-y-1 opacity-70">
                  {plans.map((plan, index) => (
                    <p 
                      key={index}
                      className="text-base font-normal text-slate-800 tracking-wide font-roboto"
                    >
                      {plan}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile Brochure Content */}
            {activeTab === 'Brochure' && pdfExists && (
              <div className="absolute top-[80px] left-2 right-2 bottom-6">
                <div className="w-full h-full relative rounded-lg overflow-hidden">
                  {isMobile ? (
                    // Mobile: Show PDF icon and info instead of iframe
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
                      <div className="text-center">                        
                        {/* PDF Info */}
                        <h3 className="text-lg font-semibold text-slate-800 mb-2 font-roboto">
                          Property Brochure
                        </h3>
                        <p className="text-sm text-slate-600 mb-4 font-roboto">
                          Download the complete brochure with detailed information, floor plans, and pricing.
                        </p>
                        
                        {/* Download Button */}
                        <a
                          href={brochure.url}
                          download
                          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                          </svg>
                          Download PDF
                        </a>
                      </div>
                    </div>
                  ) : (
                    // Desktop: Show iframe preview
                    !pdfError ? (
                      <iframe
                        src={`${brochure.url}#toolbar=0&navpanes=0&scrollbar=0&page=1&zoom=fit`}
                        className="w-full h-full border-0"
                        title="Property Brochure Preview"
                        onError={() => setPdfError(true)}
                        onLoad={() => setPdfError(false)}
                        style={{ pointerEvents: 'none' }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-gray-600 mb-4 text-sm">PDF Preview not available</p>
                          <a
                            href={brochure.url}
                            download
                            className="inline-block bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                          >
                            Download PDF
                          </a>
                        </div>
                      </div>
                    )
                  )}
                  
                  {/* Download overlay for desktop */}
                  {!isMobile && (
                    <div className="absolute bottom-2 left-2 right-2">
                      <a
                        href={brochure.url}
                        download
                        className="block bg-black/80 border border-gray-400 rounded-lg px-3 py-2 backdrop-blur-sm hover:bg-black/90 transition-colors"
                      >
                        <p className="text-white text-sm font-normal text-center tracking-wide font-roboto">
                          Download Brochure
                        </p>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}


          </div>
        </div>

      </div>
    </div>
  )
}

export default PropertyInfo 