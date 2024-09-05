// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import NetworksCarousel from './components/NetworksCarousel';
import Solutions from './components/Solutions';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      {/* <StatsSection /> */}
      <NetworksCarousel />
      <Solutions />
      <ContactForm />
      <Footer /> {/* Add Footer here */}
    </div>
  );
}

export default App;
