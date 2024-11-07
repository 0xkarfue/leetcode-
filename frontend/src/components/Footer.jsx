import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 LeetCode. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-3">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white mx-3">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white mx-3">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
