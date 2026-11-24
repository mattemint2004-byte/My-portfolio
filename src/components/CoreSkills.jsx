import React from 'react';
import { Star } from 'lucide-react';

export default function CoreSkills({ skills }) {
  return (
    <section className="bg-white rounded-xl shadow-md p-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400">
      <div className="flex items-center mb-6">
        <Star className="w-6 h-6 mr-3 text-emerald-600" />
        <h2 className="text-2xl font-bold text-slate-800">Core Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className={`group skill-card animate-on-scroll opacity-0 scale-95 transition-all duration-700 ${skill.delay}`}
          >
            <div
              className={`bg-gradient-to-br ${skill.gradient} p-4 rounded-lg text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
            >
              <h3 className="font-bold text-lg mb-2">{skill.title}</h3>
              <p className={skill.textColor}>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
