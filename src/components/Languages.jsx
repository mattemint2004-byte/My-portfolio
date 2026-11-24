import React from 'react';
import { Languages as LanguagesIcon } from 'lucide-react';

export default function Languages({ languages }) {
  return (
    <section className="bg-white rounded-xl shadow-md p-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500">
      <div className="flex items-center mb-6">
        <LanguagesIcon className="w-6 h-6 mr-3 text-cyan-600" />
        <h2 className="text-2xl font-bold text-slate-800">Languages</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {languages.map((lang, idx) => (
          <div
            key={idx}
            className={`group language-card animate-on-scroll opacity-0 scale-95 transition-all duration-700 ${lang.delay}`}
          >
            <div
              className={`bg-gradient-to-br ${lang.gradient} p-4 rounded-lg text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
            >
              <h3 className="font-bold text-lg mb-2">{lang.name}</h3>
              <p className={lang.textColor}>{lang.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
