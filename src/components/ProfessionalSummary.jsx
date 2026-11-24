import React from 'react';

export default function ProfessionalSummary({ summary }) {
  return (
    <section className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl shadow-xl p-8 text-white animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-600">
      <h2 className="text-2xl font-bold mb-4">{summary.title}</h2>
      <p className="text-slate-200 leading-relaxed text-lg mb-4 typewriter-text animate-on-scroll opacity-0">
        {summary.content}
      </p>
    </section>
  );
}
