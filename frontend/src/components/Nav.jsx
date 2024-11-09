import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="flex justify-between items-center px-6 py-4">
      <div className="flex items-center">
        <img
          src="https://assets.leetcode.com/static_assets/public/images/LeetCode_logo_rvs.png"
          alt="LeetCode Logo"
          className="w-20"
        />
        <h1 className="ml-3 text-lg font-semibold">Leetcode</h1>
      </div>

      <div className="space-x-4">
        <NavLink to="/login" className="text-red-50 hover:text-blue-900">Login</NavLink>
        <NavLink to="/signin" className="text-red-50 hover:text-blue-900">Signin</NavLink>
      </div>
    </div>
  );
}

export default Nav;
