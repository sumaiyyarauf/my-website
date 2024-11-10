import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 text-center bg-yellow-100">
      <h2 className="text-[50px] font-bold mb-6">Delicious <span className='text-yellow-500'>Choices</span> You’ll Love</h2>

      <div className="container mx-auto flex flex-col sm:flex-row gap-8 justify-center">
        <div className="bg-yellow-200 p-6 rounded-lg w-full sm:w-1/3 transition-transform transform hover:scale-105 hover:shadow-lg">
          <img
            src="https://images.pexels.com/photos/16474895/pexels-photo-16474895/free-photo-of-roasted-chicken-and-salads-on-the-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Roasted Chicken and Salads"
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold">Roasted Chicken and Salads</h3>
          <p className="text-lg">$299</p>
        </div>

        <div className="bg-yellow-200 p-6 rounded-lg w-full sm:w-1/3 transition-transform transform hover:scale-105 hover:shadow-lg">
          <img
            src="https://images.pexels.com/photos/16845335/pexels-photo-16845335/free-photo-of-ready-to-eat-meat-and-lettuce-on-a-black-tray.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Ready-to-Eat Meat and Lettuce"
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold">Ready-to-Eat Meat and Lettuce</h3>
          <p className="text-lg">$199</p>
        </div>

        <div className="bg-yellow-200 p-6 rounded-lg w-full sm:w-1/3 transition-transform transform hover:scale-105 hover:shadow-lg">
          <img
            src="https://images.pexels.com/photos/12365244/pexels-photo-12365244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="BBQ Chicken Dish"
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold">BBQ Chicken Dish</h3>
          <p className="text-lg">$199</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
