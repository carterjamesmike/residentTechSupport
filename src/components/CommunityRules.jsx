// // src/components/CommunityRules.jsx
// import React from 'react';

// function CommunityRules() {
//   return (
//     <div>
//       <p>Please help keep our community safe and pleasant for everyone:</p>
//       <ul className="list-disc list-inside ml-4 space-y-1">
//         <li>Observe quiet hours (e.g., 10:00 PM - 8:00 AM).</li>
//         <li>Properly dispose of trash and recycling in designated areas.</li>
//         <li>Follow parking regulations. Visitor parking is marked.</li>
//         <li>Pets must be leashed outside and waste must be picked up immediately (refer to Pet Policy).</li>
//         <li>Keep common areas clean and free of personal items.</li>
//       </ul>
//       <p className="mt-3">
//         For the full list of rules and regulations, please refer to your lease agreement or contact the Management Office.
//         {/* Optional: Link to a PDF of the rules */}
//         {/* <a href="/path/to/community-rules.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">[Download Full Rules PDF]</a> */}
//       </p>
//     </div>
//   );
// }

// export default CommunityRules;

// src/components/CommunityRules.jsx
import React from 'react';

function CommunityRules() {
  return (
    <div>
      <p>To ensure (relative) peace and order on this multi-species crossroads:</p>
      <ul className="list-disc list-inside ml-4 space-y-2 text-gray-500">
        <li>**Quiet Hours:** Observe station quiet hours (2400 - 0600 Terran Standard Time). Exception: Klingon victory celebrations (within reason).</li>
        <li>**Waste Disposal:** Use designated reclamation units. Do NOT flush Tribbles or self-sealing stem bolts down the conduits.</li>
        <li>**Promenade Etiquette:** Keep walkways clear. No unauthorized weapons discharge. Haggling with Ferengi vendors is permitted, but physical threats are frowned upon by Security.</li>
        <li>**Pets/Lifeforms:** Tribbles require containment fields and permits. Consult Odo before acquiring any lifeform not listed in the Federation Standard Bestiary. Cardassian voles are considered pests, not pets.</li>
        <li>**Holosuites:** Respect program boundaries. What happens in the holosuite... usually gets logged by Ops. Clean up after yourself.</li>
      </ul>
      <p className="mt-4 text-sm text-gray-400 italic">
        Failure to comply may result in being reassigned to ore processing duty or having Odo stare at you menacingly. Full station directives available via Ops terminal.
      </p>
    </div>
  );
}

export default CommunityRules;