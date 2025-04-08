// src/components/Footer.jsx
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-700 text-gray-300 text-center p-4 mt-8">
      <div className="container mx-auto">
        &copy; {currentYear} HACA & Austin Pathways. All rights reserved.
        {/* Add accessibility statement or other links if needed */}
      </div>
    </footer>
  );
}

export default Footer;