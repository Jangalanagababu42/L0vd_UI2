// src/App.js
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NetworksCarousel from "./components/NetworksCarousel";
import Solutions from "./components/Solutions";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />

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
      <Footer />
    </div>
  );
}

export default App;
