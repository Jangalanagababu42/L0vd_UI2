// src/App.js

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NetworksCarousel from "./components/NetworksCarousel";
import Solutions from "./components/Solutions";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
// import solutionsbg from "./assets/solutions-bg.svg";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <HeroSection />
        {/* <StatsSection /> */}
        <NetworksCarousel />
        <div
          className="w-full bg-no-repeat "
          style={{
            backgroundImage: "url(Vector.png)",
            backgroundSize: "cover",
          }}
        >
          <Solutions />
          <ContactForm />
        </div>
        <Footer /> {/* Add Footer here */}
      </Router>
    </div>
  );
}

export default App;
