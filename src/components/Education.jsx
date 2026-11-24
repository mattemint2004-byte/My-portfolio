import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education({ education }) {
  return (
    <section className="bg-white rounded-xl shadow-md p-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
      <div className="flex items-center mb-6">
        <GraduationCap className="w-6 h-6 mr-3 text-indigo-600" />
        <h2 className="text-2xl font-bold text-slate-800">Education</h2>
      </div>
      <div className="space-y-6">
        {education.map((item, idx) => (
          <div
            key={idx}
            className={`relative pl-8 border-l-2 border-slate-200 hover:border-indigo-400 transition-colors group animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 ${
              idx === 0 ? 'delay-400' : 'delay-500'
            }`}
          >
            <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full shadow-md group-hover:scale-110 transition-transform" />
            <div className="bg-gradient-to-r from-indigo-50 to-transparent p-6 rounded-lg group-hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{item.degree}</h3>
                  <p className="text-lg text-indigo-600 font-medium">{item.institution}</p>
                  {item.affiliation && (
                    <p className="text-sm text-slate-600">{item.affiliation}</p>
                  )}
                </div>
                <div className="flex items-center text-slate-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-medium">{item.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
