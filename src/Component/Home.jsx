import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      ".image-container",
      {
        y: 200,  
        opacity: 0,  
      },
      {
        y: 0, 
        opacity: 1, 
        duration: 3, 
        ease: "power3.out"  
      }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen bg-yellow-500 "
    >
      <div className=" w-full h-full flex flex-col items-center justify-center">
        <div className="relative mt-[6%]  text-black text-center bg-cover bg-center overflow-hidden">
          <h1 className="text-5xl font-bold mb-4">Every Day Bite</h1>
          <p className="text-lg mb-6">Delicious food for every mood</p>
        </div>

        <div
          className="image-container w-[80%] h-[70%]  text-white text-center rounded-t-[20px] flex justify-center pt-5 items-center bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/5951590/pexels-photo-5951590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
          }}
        >
          <a href="#about" className="bg-yellow-500 hover:bg-gray-700 text-black hover:text-white font-bold py-2 px-4 rounded">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
