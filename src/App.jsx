// // src/App.jsx
// import React from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import SupportSection from './components/SupportSection';
// import ContactInfo from './components/ContactInfo';
// import MaintenanceInfo from './components/MaintenanceInfo';
// import CommunityRules from './components/CommunityRules';
// import LocalResources from './components/LocalResources';

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       <Header siteTitle="Resident Support Portal" />

//       <main className="flex-grow container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
//           Proof of Concept
//         </h1>

//         {/* --- Support Sections --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           <SupportSection title="Contact Information">
//             <ContactInfo />
//           </SupportSection>

//           <SupportSection title="Maintenance Requests">
//             <MaintenanceInfo />
//           </SupportSection>

//           <SupportSection title="Community Rules & Guidelines">
//             <CommunityRules />
//           </SupportSection>

//           <SupportSection title="Local Resources">
//             <LocalResources />
//           </SupportSection>

//            {/* Add more SupportSection components as needed */}

//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;

// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SupportSection from './components/SupportSection';
import ContactInfo from './components/ContactInfo';
import MaintenanceInfo from './components/MaintenanceInfo';
import CommunityRules from './components/CommunityRules';
import LocalResources from './components/LocalResources';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-gray-200"> {/* Darker theme */}
      {/* Changed site title passed to Header */}
      <Header siteTitle="Terok Nor Resident Services Portal" />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-cyan-400 animate-bounce">
           Your Guide to Life on the Promenade!
        </h1>
        <p className="text-center text-lg text-gray-400 mb-10 italic">
          "Don't ask questions you don't want answers to... especially if Quark is involved."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Increased gap */}

          <SupportSection title="Key Contacts & Personnel">
            <ContactInfo />
          </SupportSection>

          <SupportSection title="Station Maintenance & Repairs">
            <MaintenanceInfo />
          </SupportSection>

          <SupportSection title="Station Directives & Etiquette">
            <CommunityRules />
          </SupportSection>

          <SupportSection title="Local Amenities & Diversions">
            <LocalResources />
          </SupportSection>

           {/* Add more SupportSection components if desired */}

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;