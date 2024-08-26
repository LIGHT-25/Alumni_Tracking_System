// src/components/Event.jsx
import React from 'react';

export default function Event() {
  return (
    <div className="p-4 bg-blue-50 text-center">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Event 1</h3>
          <p className="text-gray-700">Details about Event 1</p>
        </li>
        <li className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Event 2</h3>
          <p className="text-gray-700">Details about Event 2</p>
        </li>
        <li className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Event 3</h3>
          <p className="text-gray-700">Details about Event 3</p>
        </li>
      </ul>
    </div>
  );
}