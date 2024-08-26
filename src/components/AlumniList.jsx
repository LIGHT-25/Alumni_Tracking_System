/* eslint-disable no-unused-vars */
// src/AlumniList.js

import React, { useEffect, useState } from 'react';

const AlumniList = () => {
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/alumni')
      .then(response => response.json())
      .then(data => {
        setAlumni(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching alumni data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {alumni.map(alumnus => (
        <div
          className="bg-white rounded-lg shadow-md p-6 w-80 text-center"
          key={alumnus._id}
        >
          <h2 className="text-xl font-bold mb-2">{alumnus.name}</h2>
          <p className="text-gray-600">Status: {alumnus.status}</p>
          <p className="text-gray-600">Year of Passing: {alumnus.yearOfPassing}</p>
          <p className="text-gray-600">ID Number: {alumnus.idNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default AlumniList;
