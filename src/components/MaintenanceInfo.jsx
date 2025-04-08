// // src/components/MaintenanceInfo.jsx
// import React from 'react';

// function MaintenanceInfo() {
//   return (
//     <div>
//       <p><strong>Submitting a Non-Emergency Request:</strong></p>
//       <ul className="list-disc list-inside ml-4 space-y-1">
//         <li>Call the Management Office during business hours: <a href="tel:555-123-4567" className="text-blue-600 hover:underline">555-123-4567</a>.</li>
//         <li>Visit the Management Office in person.</li>
//         <li>Use the Online Resident Portal (if available): <a href="#" className="text-blue-600 hover:underline">[Link to Portal]</a></li>
//       </ul>
//       <p className="mt-3"><strong>What is an Emergency?</strong></p>
//       <ul className="list-disc list-inside ml-4 text-sm">
//          <li>No heat in freezing temperatures</li>
//          <li>No air conditioning in extreme heat</li>
//          <li>Major water leaks or flooding</li>
//          <li>Electrical sparks, hazards, or total power loss</li>
//          <li>Security issues (broken locks on main doors)</li>
//          <li>Gas leaks (leave immediately and call 911, then maintenance)</li>
//       </ul>
//        <p className="mt-3 text-sm">Please provide your name, unit number, and a clear description of the issue.</p>
//     </div>
//   );
// }

// export default MaintenanceInfo;

// src/components/MaintenanceInfo.jsx
import React from 'react';

function MaintenanceInfo() {
  return (
    <div>
      <p><strong>Reporting Issues (Non-Critical):</strong></p>
      <ul className="list-disc list-inside ml-4 space-y-1 text-gray-500">
        <li>Hail Chief O'Brien on Com <span className="text-cyan-400">Channel Delta-9</span>. Bring coffee (Raktajino preferred).</li>
        <li>Submit work order PADD at Engineering (Level 12). Expect a backlog.</li>
        <li>Typical issues: Leaky plasma conduits, flickering light panels, replicator only makes lukewarm prune juice, Cardassian vole infestations.</li>
      </ul>

      <p className="mt-4"><strong>What Constitutes an EMERGENCY?</strong></p>
      <ul className="list-disc list-inside ml-4 text-sm text-yellow-500 space-y-1">
         <li>Wormhole instability (Alert Ops immediately!)</li>
         <li>Unscheduled Dominion visits</li>
         <li>Hull breaches (minor ones can wait until after O'Brien's darts game)</li>
         <li>Complete life support failure (partial failures are considered 'character building')</li>
         <li>Transporter malfunction resulting in horrifying composite beings</li>
         <li>Anything involving Cardassian engineering unexpectedly *working*. That's suspicious.</li>
      </ul>
       <p className="mt-3 text-sm text-gray-400 italic">"Please state the nature of the engineering emergency." Be specific, O'Brien's busy.</p>
    </div>
  );
}

export default MaintenanceInfo;