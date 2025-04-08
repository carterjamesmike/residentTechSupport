// // src/components/ContactInfo.jsx
// import React from 'react';

// function ContactInfo() {
//   return (
//     <div>
//       <p><strong>Roland's Personal Contact Information:</strong></p>
//       <ul className="list-disc list-inside ml-4 space-y-1">
//         <li>Phone: <a href="tel:555-123-4567" className="text-blue-600 hover:underline">555-555-5555</a></li>
//         <li>Email: <a href="mailto:management@example.com" className="text-blue-600 hover:underline">info@xample.com</a></li>
//         <li>Home Address: 123 Roland St. Austin Texas</li>
//       </ul>
//       <p className="mt-3"><strong>After-Hours Emergency Maintenance:</strong></p>
//       <ul className="list-disc list-inside ml-4">
//         <li>Phone: <a href="tel:555-987-6543" className="text-red-600 font-semibold hover:underline">555-987-6543</a></li>
//         <li>(For issues like major leaks, no heat/AC in extreme weather, electrical hazards)</li>
//       </ul>
//     </div>
//   );
// }

// export default ContactInfo;

// src/components/ContactInfo.jsx
import React from 'react';

function ContactInfo() {
  return (
    <div>
      <p><strong>Station Operations (Ops):</strong></p>
      <ul className="list-disc list-inside ml-4 space-y-1 text-gray-500">
        <li>Com Frequency: <span className="text-cyan-400">Channel Alpha-7</span> (Expect delays during Gamma Quadrant explorations or Dominion attacks)</li>
        <li>Location: Central Command Tower (Ask for Sisko, Kira, or Dax. Maybe not Worf if he's grumpy.)</li>
        <li>Hours: 24/7 (Though responses might vary based on current threat level)</li>
      </ul>

      <p className="mt-4"><strong>Security Chief Odo:</strong></p>
      <ul className="list-disc list-inside ml-4 space-y-1 text-gray-500">
        <li>Contact: Just look for a shifting bulkhead or a suspicious beverage container. He's probably watching.</li>
        <li>Formal Complaints: File via PADD at Security Office (Level 5, Sector 3)</li>
        <li>Specialty: Investigations, shape-shifting, general disapproval.</li>
      </ul>

       <p className="mt-4"><strong>Business & Pleasure Inquiries (Quark's Bar):</strong></p>
       <ul className="list-disc list-inside ml-4 space-y-1 text-gray-500">
          <li>Proprietor: Quark (Available when latinum is involved)</li>
          <li>Services: Holosuites, Dabo, questionable advice, watered-down drinks.</li>
          <li>Location: Promenade - You can't miss it (unfortunately).</li>
          <li>Note: All sales final. No refunds, especially on Holosuite malfunctions.</li>
       </ul>
    </div>
  );
}

export default ContactInfo;