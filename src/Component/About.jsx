import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    
    gsap.fromTo(
      ".aboutimg",
      {
        x: -200,  
        opacity: 0,  
      },
      {
        x: 0, 
        opacity: 1, 
        duration: 3, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".aboutimg",  
          start: "top 80%",    
          toggleActions: "play none none none" 
        }
      }
    );

    gsap.fromTo(
      ".aboutus",
      {
        y: 100,  
        opacity: 0,  
      },
      {
        y: 0, 
        opacity: 1, 
        duration: 2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".aboutus",  
          start: "top 80%",    
          toggleActions: "play none none none" 
        }
      }
    );
  }, []);

  return (
    <section id="about" className="flex flex-col md:flex-row justify-center items-center py-20 text-center bg-yellow-100 z-20">
      <div className='flex justify-center items-center'>
        <img className='aboutimg w-[60%] h-[60%] rounded-[25px]' src="https://images.pexels.com/photos/8286487/pexels-photo-8286487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div className='aboutus mt-8 md:mt-0 md:ml-8'>
         <h2 className="text-[50px] font-bold mb-4">About Us</h2>
         <p className="max-w-lg mx-auto text-[20px]">We have been serving irresistible comfort food since 2012. Our mission is to keep you smiling with every bite. Treat yourself to a feel-good meal today!</p>
      </div>
    </section>
  );
};

export default About;
