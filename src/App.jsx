/* eslint-disable no-unused-vars */
import React, { useState } from 'React';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Event from './components/Event';
import Developer from './components/Developer';
import Alumni from './components/Alumni';
import AlumniList from './components/AlumniList';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  const openSignupModal = () => setShowSignupModal(true);
  const closeSignupModal = () => setShowSignupModal(false);

  return (
    <>
      <Header showLogin={openLoginModal} showSignup={openSignupModal} />
      <div className="flex flex-col justify-between bg-blue-100 min-h-screen px-2 py-1 gap-2">
        <div id="body">
          <Body />
        </div>
        <div id="events">
          <Event />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="alumni">
          <Alumni />
        </div>
        <div id="alumnilist">
          <AlumniList />
        </div>
        <div id="developer">
          <Developer />
        </div>
        <Footer />
      </div>

      {/* Login Modal */}
      {showLoginModal && <Login closeModal={closeLoginModal} />}

      {/* Signup Modal */}
      {showSignupModal && <Signup closeModal={closeSignupModal} />}
    </>
  );
}

export default App;
