import React, { useState } from 'react';
import image from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 z-40 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center px-6">
        
        <a href="#" className="flex items-center">
          <img src={image} alt="Company Logo" className="h-10 w-auto rounded-full" />
        </a>
        
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl lg:hidden">
          ☰
        </button>

        <ul className={`lg:flex space-x-6 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#services" className="hover:text-gray-400">Services</a></li>
          <li><a href="#portfolio" className="hover:text-gray-400">Menu</a></li>
          <li><a href="#testimonials" className="hover:text-gray-400">Feedback</a></li>
          <li><a href="#pricing" className="hover:text-gray-400">Signature Dishes</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
