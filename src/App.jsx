import React, { useState } from 'react'
import HeroSection from './assets/Components/HeroSection/HeroSection'
import Services from './assets/Components/Services/Services'
import Portfolio from './assets/Components/Portfolio/Portfolio'
import Testimonials from './assets/Components/Testimonials/Testimonials'
import About from './assets/Components/About/About'
import Footer from './assets/Components/Footer/Footer'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  // This is the "Master Switch" for the form
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      {/* HeroSection contains the actual Form UI */}
      <HeroSection 
        showPopup={showPopup} 
        setShowPopup={setShowPopup} 
      />
      
      {/* Services just flips the switch to true */}
      <Services setIsFormOpen={setShowPopup} />
      
      {/* Portfolio just flips the switch to true */}
      <Portfolio setIsFormOpen={setShowPopup} />

      {/* Testimonials just flips the switch to true */}
      <Testimonials setIsFormOpen={setShowPopup} />
      <About setIsFormOpen={setShowPopup} />
      <Footer setIsFormOpen={setShowPopup} />
    </div>
  )
}

export default App