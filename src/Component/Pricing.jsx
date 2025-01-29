import React, { useState } from 'react';

const Pricing = ({ addToCart }) => {
  const pricingItems = [
    {
      id: 1,
      name: "Roasted Chicken and Salads",
      price: 299,
      imageUrl: "https://images.pexels.com/photos/16474895/pexels-photo-16474895/free-photo-of-roasted-chicken-and-salads-on-the-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "Ready-to-Eat Meat and Lettuce",
      price: 199,
      imageUrl: "https://images.pexels.com/photos/16845335/pexels-photo-16845335/free-photo-of-ready-to-eat-meat-and-lettuce-on-a-black-tray.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name: "BBQ Chicken Dish",
      price: 199,
      imageUrl: "https://images.pexels.com/photos/12365244/pexels-photo-12365244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <section id="pricing" className="py-20 text-center bg-yellow-100">
      <h2 className="text-[50px] font-bold mb-6">Delicious <span className='text-yellow-500'>Choices</span> You’ll Love</h2>

      <div className="container mx-auto flex flex-col sm:flex-row gap-8 justify-center">
        {pricingItems.map((item) => (
          <div key={item.id} className="bg-yellow-200 p-6 rounded-lg w-full sm:w-1/3 transition-transform transform hover:scale-105 hover:shadow-lg">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-lg">${item.price}</p>
            <button 
              onClick={() => handleAddToCart(item)}
              className="mt-4 bg-yellow-500 text-black hover:text-white p-2 rounded hover:bg-gray-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
