import React from 'react';
import { Mail } from 'lucide-react';

const titleColors = {
  emerald: 'text-emerald-400',
  blue: 'text-blue-400',
  purple: 'text-purple-400',
};

export default function Footer({ personal, experiences }) {
  return (
    <footer className="bg-slate-800 text-slate-300 py-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-700">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-lg mb-6">{personal.footerBio}</p>
          <div className="flex justify-center mb-8">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              {personal.ctaText || 'Get In Touch'}
            </a>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Experience Summary</h3>
          <div className={`grid grid-cols-1 ${experiences.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-6 text-center`}>
            {experiences.map((item) => {
              const colorClass = titleColors[item.colorTheme] || 'text-blue-400';
              return (
                <div
                  key={item.id}
                  className="bg-slate-700 rounded-lg p-4 hover:bg-slate-600 transition-colors transform hover:scale-105"
                >
                  <h4 className={`font-bold ${colorClass} mb-2`}>{item.role}</h4>
                  <p className="text-sm text-slate-300 mb-1">{item.subtitle || item.company}</p>
                  <p className="text-xs text-slate-400">{item.summaryExperience}</p>
                  <p className="text-xs text-slate-400 mt-2">{item.summaryNote}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
