// src/App.js
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NetworksCarousel from "./components/NetworksCarousel";
import Solutions from "./components/Solutions";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import solutionsbg from "./assets/vector.png";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      {/* <StatsSection /> */}
      <NetworksCarousel />
      <div
        className="w-full bg-no-repeat "
        style={{
          backgroundImage: `url(${solutionsbg})`,
          backgroundSize: "cover",
        }}
      >
        <Solutions />
        <ContactForm />
      </div>
      <Footer /> {/* Add Footer here */}
    </div>
  );
}

export default App;
