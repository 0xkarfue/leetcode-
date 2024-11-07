import React from 'react';

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
        <a href="#" className="text-red-50 hover:text-blue-900">Login</a>
        <a href="#" className="text-red-50 hover:text-blue-900">Signin</a>
      </div>
    </div>
  );
}

export default Nav;
