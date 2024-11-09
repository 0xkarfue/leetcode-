import React from 'react';
import { NavLink } from 'react-router-dom';
// import Problems from '../pages/Problems';

function Main() {
  return (
    <div className="flex flex-col items-center text-center py-16 px-4 md:px-8 m-36">
      <h1 className="text-4xl font-bold mb-4 text-red-100">A New Way of Learning</h1>
      <p className="text-lg text-red-50 mb-6 max-w-xl">
        LeetCode is the best platform to help you enhance your skills, expand your knowledge, and prepare for technical interviews.
      </p>


      <NavLink to='/problems'>

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
        Problems
      </button>

      </NavLink>

    </div>
  );
}

export default Main;
