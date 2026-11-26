
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

import "./styles/global.css";
import "./styles/animations.css";
import "./styles/responsive.css";

function App() {
  useEffect(() => {
    document.title =
      "TEDDY EVENTS | Creating Moments, Crafting Memories";

    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
}

export default App;
