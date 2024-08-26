/* eslint-disable no-unused-vars */
import React from 'React';
import PropTypes from 'prop-types';

const Login = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-full h-full max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-end p-4">
          <button
            onClick={closeModal}
            className="text-black hover:text-red-500"
          >
            &times; {/* Close button */}
          </button>
        </div>
        <div className="px-8 py-6">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Login;
