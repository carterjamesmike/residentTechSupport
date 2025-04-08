// // src/components/Header.jsx
// import React from "react";
// import hacaseal from "../assets/HACA-Seal.svg";

// function Header({ siteTitle }) {
//   return (
//     <header className="bg-blue-600 text-white shadow-md">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center space-x-3">
//           <img src={hacaseal} alt="HACA Seal" className="h-25 w-auto" />
//           <h1 className="text-2xl font-semibold">{siteTitle}</h1>
//         </div>
//         {/* Add navigation links here if needed later */}
//       </div>
//     </header>
//   );
// }

// export default Header;

// src/components/Header.jsx
import React from 'react';
// Assuming HACA-Seal.svg is a generic placeholder now, maybe it's the Bajoran Seal?
import stationLogo from '../assets/HACA-Seal.svg'; // We'll pretend this is the station logo for now

function Header({ siteTitle }) { // siteTitle prop will be passed from App.jsx
  return (
    <header className="bg-gradient-to-r from-indigo-700 via-purple-600 to-blue-700 text-yellow-300 shadow-lg border-b-2 border-yellow-400">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center space-x-4"> {/* Increased spacing a bit */}
          <img
            src={stationLogo}
            alt="Station Seal" // Generic alt text now
            className="h-25 w-auto" // Slightly larger logo, added pulse animation
          />
          <h1 className="text-3xl font-bold tracking-wider font-serif">{siteTitle}</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;