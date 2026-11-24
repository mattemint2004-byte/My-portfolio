import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const themeStyles = {
  emerald: {
    hoverBorder: 'hover:border-emerald-400',
    dot: 'bg-emerald-500',
    gradient: 'from-emerald-50 to-transparent',
    companyText: 'text-emerald-600',
  },
  blue: {
    hoverBorder: 'hover:border-blue-400',
    dot: 'bg-blue-500',
    gradient: 'from-blue-50 to-transparent',
    companyText: 'text-blue-600',
  },
  purple: {
    hoverBorder: 'hover:border-purple-400',
    dot: 'bg-purple-500',
    gradient: 'from-purple-50 to-transparent',
    companyText: 'text-purple-600',
  },
};

export default function WorkExperience({ experiences }) {
  return (
    <section className="bg-white rounded-xl shadow-md p-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
      <div className="flex items-center mb-6">
        <Briefcase className="w-6 h-6 mr-3 text-purple-600" />
        <h2 className="text-2xl font-bold text-slate-800">Work Experience</h2>
      </div>
      <div className="space-y-8">
        {experiences.map((item) => {
          const theme = themeStyles[item.colorTheme] || themeStyles.blue;
          return (
            <div
              key={item.id}
              className={`relative pl-8 border-l-2 border-slate-200 ${theme.hoverBorder} transition-all duration-500 group animate-on-scroll opacity-0 translate-x-8 experience-item`}
            >
              <div
                className={`absolute -left-2 top-0 w-4 h-4 ${theme.dot} rounded-full shadow-md group-hover:scale-110 transition-transform`}
              />
              <div
                className={`bg-gradient-to-r ${theme.gradient} p-6 rounded-lg group-hover:shadow-md transition-shadow`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{item.role}</h3>
                    <p className={`text-lg ${theme.companyText} font-medium`}>{item.company}</p>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">{item.duration}</span>
                  </div>
                </div>
                <div className="text-slate-700 leading-relaxed space-y-2 typewriter-details animate-on-scroll opacity-0">
                  {item.bullets.map((bullet, idx) => (
                    <p key={idx}>• {bullet}</p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
