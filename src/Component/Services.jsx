import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    gsap.from(".service-card", {
      opacity: 10,
      y: 50,
      duration: 1,
      stagger: 1, 
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#services",
        start: "top center", 
        toggleActions: "play none none none", 
      }
    });
  }, []);

  return (
    <section id="services" className="flex flex-col items-center py-20 px-10 bg-yellow-100 text-center">
      <div className="mb-10">
        <h2 className="text-[50px] font-bold mb-6"> A Matter of Taste</h2>
        <p className="text-[20px]">
          There's a reason our regulars have been coming back for more. Word of mouth has been our only advertisement - but happy mouths are the best ambassadors!
        </p>
      </div>

      <div className="flex flex-col items-center gap-8 w-full">
        <div className="service-card bg-yellow-200 p-6 rounded-lg hover:scale-105 hover:shadow-xl w-3/4 lg:w-2/3 transition-transform">
          <h3 className="text-xl font-semibold mb-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full p-2 text-black bg-yellow-500">1</span>
            Fresh, Seasonal Ingredients
          </h3>
          <p>Our menu follows the seasons, featuring the best local produce available.</p>
        </div>
        <div className="service-card bg-yellow-200 p-6 rounded-lg hover:scale-105 hover:shadow-xl w-3/4 lg:w-2/3 transition-transform">
          <h3 className="text-xl font-semibold mb-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full p-2 text-black bg-yellow-500">2</span>
            Comfort Food, Elevated
          </h3>
          <p>We have simple crowd-favorites on the menu - but we do them well. Our flavors stand out, guaranteed.</p>
        </div>
        <div className="service-card bg-yellow-200 p-6 rounded-lg hover:scale-105 hover:shadow-xl w-3/4 lg:w-2/3 transition-transform">
          <h3 className="text-xl font-semibold mb-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full p-2 text-black bg-yellow-500">3</span>
            Better Beverages
          </h3>
          <p>We're your cafe and barista in one, serving your favorite cuppa by sun-up, and your cocktail-of-choice by sundown.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
