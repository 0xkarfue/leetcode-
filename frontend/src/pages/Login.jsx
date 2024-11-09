import React from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Login</h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Login Button */}
        <button className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200">
          Login
        </button>

        {/* Optional: Link for Sign Up */}
        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <NavLink to="/signin" className="text-blue-500 hover:underline">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
