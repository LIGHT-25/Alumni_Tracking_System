// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

const Alumni = () => {
  const [alumniList, setAlumniList] = useState([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [yearOfPassing, setYearOfPassing] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [error, setError] = useState('');

  const verifyAlumni = async () => {
    try {
      const response = await axios.post('http://localhost:5173/api/verify', {
        name,
        yearOfPassing,
        idNumber,
      });
      if (response.data.verified) {
        setStatus(response.data.alumni.status);
        setError('');
        return true;
      } else {
        setError('Verification failed. Please check your details.');
        return false;
      }
    } catch (error) {
      setError('Server error. Please try again later.');
      return false;
    }
  };

  const addAlumni = async () => {
    if (!/^\d{4}$/.test(yearOfPassing)) {
      setError('Year of passing must be a 4-digit number');
      return;
    }
    if (!/^\d{6}$/.test(idNumber)) {
      setError('ID number must be a 6-digit number');
      return;
    }

    const verified = await verifyAlumni();
    if (verified) {
      setAlumniList([...alumniList, { name, status, yearOfPassing, idNumber }]);
      setName('');
      setStatus('');
      setYearOfPassing('');
      setIdNumber('');
      setError('');
    }
  };

  return (
    <div id="alumni" className="p-8 bg-gray-100 flex flex-col items-center">
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-md w-full mb-8">
        <h2 className="text-2xl font-bold mb-4">Add New Alumni</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          readOnly
        />
        <input
          type="text"
          placeholder="Year of Passing (e.g., 2020)"
          value={yearOfPassing}
          onChange={(e) => setYearOfPassing(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          placeholder="ID Number (6 digits)"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button
          onClick={addAlumni}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
        >
          Add Alumni
        </button>
      </div>
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Alumni List</h2>
        <ul className="list-disc pl-5">
          {alumniList.map((alumni, index) => (
            <li key={index} className="mb-2">
              <span className="font-bold">{alumni.name}</span>: {alumni.status} (Year: {alumni.yearOfPassing})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Alumni;
