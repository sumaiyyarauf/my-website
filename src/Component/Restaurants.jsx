import { useEffect, useState } from "react";

const Restaurants = ({ addToCart }) => {
  const [menu, setMenu] = useState([
    { id: 1, name: "Burger", price: 5, image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, name: "Pizza", price: 8, image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "Pasta", price: 7, image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
  ]);

  return (
    <div className="container bg-yellow-500 mx-auto my-12 rounded-lg p-6">
      <h1 className="text-3xl text-center font-bold mb-4">Trending Deals</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {menu.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg shadow bg-white">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
            <p className="text-gray-600">${item.price}</p>
            <button 
              onClick={() => addToCart(item)} 
              className="mt-2 bg-yellow-300 hover:bg-gray-600 text-black hover:text-white font-semibold p-2 rounded w-full transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
