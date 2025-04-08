// src/components/SupportSection.jsx
import React from 'react';

function SupportSection({ title, children }) {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-blue-700">{title}</h2>
      <div className="space-y-3 text-gray-700">
        {children}
      </div>
    </section>
  );
}

export default SupportSection;