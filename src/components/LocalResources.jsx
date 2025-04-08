// // src/components/LocalResources.jsx
// import React from 'react';

// function LocalResources() {
//   // In a real app, this data might come from a JSON file or API
//   const resources = [
//     { name: "Local Food Bank", contact: "555-FOOD-PANTRY", website: "http://localfoodbank.org", category: "Food Assistance" },
//     { name: "Community Health Clinic", contact: "555-HEALTH-CARE", website: "http://communityclinic.org", category: "Healthcare" },
//     { name: "City Job Center", contact: "555-WORK-NOW", website: "http://cityjobcenter.gov", category: "Employment" },
//     { name: "Public Transport Info", contact: "555-BUS-INFO", website: "http://citytransit.org", category: "Transportation" },
//     // Add more resources
//   ];

//   return (
//     <div className="space-y-4">
//       {resources.map((res, index) => (
//         <div key={index} className="border-b pb-2 last:border-b-0">
//           <p><strong>{res.name}</strong> ({res.category})</p>
//           <p className="text-sm">
//             Contact: <a href={`tel:${res.contact.replace(/-/g, '')}`} className="text-blue-600 hover:underline">{res.contact}</a>
//             {res.website && (
//                <a href={res.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">[Website]</a>
//             )}
//           </p>
//         </div>
//       ))}
//        <p className="mt-3 text-sm">This list is for informational purposes. Please verify details directly with the organizations.</p>
//     </div>
//   );
// }

// export default LocalResources;

// src/components/LocalResources.jsx
import React from 'react';

function LocalResources() {
  const resources = [
    { name: "Quark's Bar, Grill, Gaming House and Holosuite Arcade", category: "Dining & Entertainment", contact: "Ask Quark (Latinum required for reservations)" },
    { name: "Infirmary - Dr. Julian Bashir", category: "Healthcare", contact: "Com Channel Beta-2 or visit Level 8" },
    { name: "Garak's Clothiers", category: "Shopping & 'Information'", contact: "Promenade - Just a simple tailor..." },
    { name: "Bajoran Temple", category: "Spiritual Guidance", contact: "Level 6 - Seek the Prophets (or Vedek Bareil's schedule)" },
    { name: "Klingon Restaurant", category: "Dining (Adventurous)", contact: "Promenade - Bloodwine served daily. Earplugs recommended." },
    { name: "Replimat", category: "Basic Sustenance", contact: "Various locations - For when Quark's prices are too high." },
    { name: "Runabout & Wormhole Access", category: "Transportation", contact: "Ops - File flight plan. Beware of Jem'Hadar." },
  ];

  return (
    <div className="space-y-4">
      {resources.map((res, index) => (
        <div key={index} className="border-b border-gray-600 pb-3 last:border-b-0">
          <p><strong>{res.name}</strong> <span className="text-xs text-cyan-500">({res.category})</span></p>
          <p className="text-sm text-gray-500">
            Contact/Location: {res.contact}
          </p>
        </div>
      ))}
       <p className="mt-4 text-sm text-gray-500 italic">Use resources at your own risk. Management is not responsible for accidental trips to the Mirror Universe.</p>
    </div>
  );
}

export default LocalResources;