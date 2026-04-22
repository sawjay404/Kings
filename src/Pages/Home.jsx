import React from 'react';
import HeroSection from '../Components/HeroSection/HeroSection'; // New Component
import About from '../Components/About/About';
import SupportUs from '../Components/Supportus/Supportus';
import Classes from '../Components/Classes/Classes';

const Home = ({ openForm }) => {
  return (
    <main className="bg-white font-sans selection:bg-[#0b2b26] selection:text-white">
      {/* High-End Hero with the "Box Break" Kid Image */}
      <HeroSection setIsFormOpen={openForm} />

      {/* NEW: Announcements Section 
          Placed right after Hero to catch attention for upcoming events/camps
      */}
      
      <SupportUs />
      <Classes />

    </main>
  );
};

export default Home;