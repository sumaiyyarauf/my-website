import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="flex justify-center py-20 bg-yellow-500 text-center">
    <div className='p-4 bg-yellow-200  rounded-[25px]'>
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form action="#" method="post" className="max-w-lg mx-auto space-y-4">
        <input type="text" className="border border-gray-300 p-3 rounded w-full" placeholder="Name" required />
        <input type="email" className="border border-gray-300 p-3 rounded w-full" placeholder="Email" required />
        <textarea className="border border-gray-300 p-3 rounded w-full" rows="4" placeholder="Message" required></textarea>
        <button type="submit" className="bg-yellow-500 hover:bg-gray-700 text-black hover:text-white font-bold py-2 px-4 rounded">Send Message</button>
      </form>
    </div>
    </section>
  );
}

export default Contact;
