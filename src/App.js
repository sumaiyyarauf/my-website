// src/App.js
import React from 'react';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Portfolio from './Component/Portfolio';
import Testimonials from './Component/Testimonials';
import Pricing from './Component/Pricing';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="bg-gray-100 font-sans text-gray-900">
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
