import React, { useState } from 'react';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Portfolio from './Component/Portfolio'; // Import Portfolio
import Testimonials from './Component/Testimonials';
import Pricing from './Component/Pricing';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Restaurants from './Component/Restaurants';
import Cart from './Component/Cart';
// import Checkout from './Component/Checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Function to add item to the cart
  const addToCart = (item) => {
    setCartItems((prevCart) => [...prevCart, item]);
  };

  // Function to remove item from the cart
  const removeFromCart = (index) => {
    setCartItems((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-100 font-sans text-gray-900">
      <Header cartItems={cartItems} setIsCartOpen={setIsCartOpen} />
      
      <main>
        <Home />
        <Pricing addToCart={addToCart} /> {/* Passing addToCart here */}
        <Portfolio addToCart={addToCart} /> {/* Passing addToCart here */}
        <Restaurants addToCart={addToCart} />
        {isCartOpen && <Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
