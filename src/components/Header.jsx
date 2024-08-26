/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import Login from './Login';
import Signup from './Signup';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Open and close functions for login and signup modals
  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  const openSignup = () => setIsSignupOpen(true);
  const closeSignup = () => setIsSignupOpen(false);

  // Toggle menu open state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 text-black shadow-lg rounded-md text-lg bg-white z-10 relative">
      <div className="text-xl font-bold">Alumni-Tracking</div>

      <nav className="flex items-center">
        {/* Menu Icon for Mobile View */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-black hover:text-emerald-300 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Menu Links */}
        <ul className="hidden sm:flex space-x-4">
          <li className="block px-4 py-2">
            <Link
              to="body"
              smooth={true}
              duration={500}
              className="hover:text-emerald-300 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="block px-4 py-2">
            <Link
              to="events"
              smooth={true}
              duration={500}
              className="hover:text-emerald-300 cursor-pointer"
            >
              Events
            </Link>
          </li>
          <li className="block px-4 py-2">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-emerald-300 cursor-pointer"
            >
              Contact
            </Link>
          </li>
          <li className="block px-4 py-2">
            <Link
              to="developer"
              smooth={true}
              duration={500}
              className="hover:text-emerald-300 cursor-pointer"
            >
              Developer
            </Link>
          </li>
          <li className="block px-4 py-2">
            <Link
              to="alumni"
              smooth={true}
              duration={500}
              className="hover:text-emerald-300 cursor-pointer"
            >
              Alumni
            </Link>
          </li>
          <li className="block px-4 py-2">
            <Link
              to="alumnilist"
              smooth={true}
              duration={500}
              className="hover:text-emerald-300 cursor-pointer"
            >
              AlumniList
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Links */}
        <ul
          className={`fixed inset-0 bg-white bg-opacity-95 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-6 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out sm:hidden`}
        >
          <li className="block px-4 py-2">
            <Link
              to="body"
              smooth={true}
              duration={500}
              className="hover:text-emerald-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li className="block px-4 py-2">
            <Link
              to="events"
              smooth={true}
              duration={500}
              className="hover:text-emerald-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Events
            </Link>
          </li>
          <li className="block px-4 py-2">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-emerald-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
          <li className="block px-4 py-2">
            <Link
              to="developer"
              smooth={true}
              duration={500}
              className="hover:text-emerald-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Developer
            </Link>
          </li>
          <li className="block px-4 py-2">
            <Link
              to="alumni"
              smooth={true}
              duration={500}
              className="hover:text-emerald-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Alumni
            </Link>
          </li>
          <li className="block px-4 py-2">
            <Link
              to="alumnilist"
              smooth={true}
              duration={500}
              className="hover:text-emerald-300 cursor-pointer"
              onClick={toggleMenu}
            >
              AlumniList
            </Link>
          </li>
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-black hover:text-emerald-300 focus:outline-none"
          >
            Close
          </button>
        </ul>

        {/* Login and Signup Buttons */}
        <div className="hidden sm:flex space-x-4">
          <button
            onClick={openLogin}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Log in
          </button>
          <button
            onClick={openSignup}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Sign up
          </button>
        </div>
      </nav>

      {/* Conditionally Render Modals */}
      {isLoginOpen && <Login closeModal={closeLogin} />}
      {isSignupOpen && <Signup closeModal={closeSignup} />}
    </header>
  );
};

export default Header;
