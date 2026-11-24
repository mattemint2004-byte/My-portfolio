import React from 'react';
import { Target } from 'lucide-react';

export default function CareerObjective({ objective }) {
  return (
    <section className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-500 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
      <div className="flex items-center mb-4">
        <Target className="w-6 h-6 mr-3 text-blue-500" />
        <h2 className="text-2xl font-bold text-slate-800">{objective.title}</h2>
      </div>
      <p className="text-slate-700 leading-relaxed text-lg typewriter-text animate-on-scroll opacity-0">
        {objective.statement}
      </p>
    </section>
  );
}
