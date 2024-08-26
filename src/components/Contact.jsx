// src/components/Contact.jsx
import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [image, setImage] = useState('');

  useEffect(() => {
    fetch('https://picsum.photos/800/600')
      .then((response) => setImage(response.url));
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch md:space-x-4 space-y-4 md:space-y-0 p-4 bg-blue-50">
      <div className="flex-1 p-4 bg-white rounded shadow flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4 flex-grow">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 p-2 border border-gray-300 rounded w-full" />
          </div>
          <div className="flex-grow">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea className="mt-1 p-2 border border-gray-300 rounded w-full h-full" rows="4"></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send</button>
        </form>
      </div>
      <div className="flex-1 p-4 bg-white rounded shadow">
        {image && <img src={image} alt="Random from Unsplash" className="rounded w-full h-full object-cover" />}
      </div>
    </div>
  );
}
