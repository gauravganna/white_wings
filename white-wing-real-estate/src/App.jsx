import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PropertyTemplate from './pages/PropertyTemplate'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* Dynamic property routes - handles /property/bella-casa, /property/valentino, etc. */}
        <Route path="/property/:slug" element={<PropertyTemplate />} />
      </Routes>
    </Router>
  )
}

export default App
