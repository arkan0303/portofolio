import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
