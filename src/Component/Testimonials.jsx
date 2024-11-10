import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-yellow-100 text-center">
      <h2 className="text-[50px] font-bold mb-6">From Our <span className='text-yellow-400'>Community</span></h2>

      <div className="container mx-auto flex flex-col items-center md:flex-row gap-8">
        
        <div className="bg-yellow-200 p-6 rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl">
          <img className='w-[100px] h-[100px] rounded-full mx-auto mb-4' src="https://images.pexels.com/photos/4173300/pexels-photo-4173300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Mara" />
          <h1 className="text-lg font-semibold">Mara, TSB regular since 2015</h1>
          <p>TSB is a huge part of my life. The staff feels like family, and they know just how I like my coffee - and my gourmet burger fix!</p>
        </div>

        <div className="bg-yellow-200 p-6 rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl">
          <img className='w-[100px] h-[100px] rounded-full mx-auto mb-4' src="https://images.pexels.com/photos/21792201/pexels-photo-21792201/free-photo-of-smiling-woman-eating-piadina-from-a-food-truck.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Brock" />
          <h1 className="text-lg font-semibold">Brock, new in town</h1>
          <p>I stumbled upon TSB when I was exploring my new neighborhood. Everyone was so friendly, and the food was delish! Will be back.</p>
        </div>

        <div className="bg-yellow-200 p-6 rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl">
          <img className='w-[100px] h-[100px] rounded-full mx-auto mb-4' src="https://media.istockphoto.com/id/897283670/photo/child-eating-fruit-at-home.webp?s=1024x1024&w=is&k=20&c=Xy9hMnVWNZOxxSE34cJ8-Y-4HWaF2aeCAVmD3D9tbew=" alt="Steffi" />
          <h1 className="text-lg font-semibold">Steffi, lives around the corner</h1>
          <p>So glad to have a neighborhood cafe, hangout spot, and bar all in one and nearby! Comfort food in a comforting atmosphere - need I say more?!</p>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
