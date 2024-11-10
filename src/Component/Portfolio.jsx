import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-yellow-500 text-center">
      <div className="mb-10">
        <h2 className="text-[50px] font-bold mb-6">On The Menu </h2>
        <button className="bg-yellow-200 hover:bg-gray-700 text-black hover:text-white font-bold py-2 px-4 rounded">
          View full menu
        </button>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center gap-6 px-4">
        {[ 
          {
            title: "Gourmet Burgers",
            description: "Packed with flavor and cooked to perfection.",
            img: "https://images.pexels.com/photos/15141034/pexels-photo-15141034/free-photo-of-triple-beef-burger-on-wooden-board.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            title: "Chicken Wings",
            description: "Paired with dipping sauces that are too good to pass up.",
            img: "https://images.pexels.com/photos/10361458/pexels-photo-10361458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            title: "Thirst Quenchers",
            description: "Choose from classic blends and unique concoctions.",
            img: "https://images.pexels.com/photos/15529506/pexels-photo-15529506/free-photo-of-cold-juicy-refreshments.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
        ].map((item, index) => (
          <div key={index} className="bg-yellow-200 rounded-[20px] flex flex-col items-center justify-center p-4 w-full md:w-[45%] lg:w-[30%] transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="w-full h-40 overflow-hidden rounded-t-[20px]">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p className="text-center mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
