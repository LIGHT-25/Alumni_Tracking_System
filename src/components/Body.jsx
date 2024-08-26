/* eslint-disable no-unused-vars */
import React from 'react'
import Typing from 'react-typing-effect';

export default function Body() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/800/600')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-2xl md:text-4xl font-bold">
          <Typing
            text="Death IS The End"
            speed={100}
            eraseDelay={3000}
          />
        </h1>
      </div>
    </div>
  );
}
