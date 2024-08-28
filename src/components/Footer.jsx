import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © 2024 Your Company. All rights reserved.
        </p>
        <p className="text-sm">
          <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a> | 
          <a href="#" className="text-blue-400 hover:underline ml-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
