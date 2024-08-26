
// src/components/Developer.jsx
import React from 'react';
import rkImage from '../assets/Rk.jpeg';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Developer() {
  return (
    <div id="developer" className="p-8 bg-gray-100 flex flex-col items-center">
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <img
          src={rkImage} // Use the imported image here
          alt="Developer"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">Rupak Chatterjee</h2>
        <p className="text-gray-700 mb-4">
          I am a software developer with a passion for building web applications. I enjoy learning new technologies and contributing to open-source projects.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/LIGHT-25" // Replace with real GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/no_longer_absurd05?igsh=OGt6eG1sMGl4a3M0" // Replace with real Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <FaInstagram className='w-50' />
          </a>
        </div>
      </div>
    </div>
  );
}
