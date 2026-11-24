import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Header({ personal }) {
  return (
    <header className="bg-white shadow-lg animate-on-scroll opacity-0 translate-y-4 transition-all duration-700">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0 flex items-center space-x-6">
            <div className="relative animate-on-scroll opacity-0 scale-95 transition-all duration-700 delay-100">
              <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 animate-pulse-border photo-glow">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800 mb-2 animate-on-scroll opacity-0 translate-x-4 transition-all duration-700 delay-200">
                {personal.name}
              </h1>
              <p className="text-xl text-slate-600 font-medium animate-on-scroll opacity-0 translate-x-4 transition-all duration-700 delay-300">
                {personal.title}
              </p>
            </div>
          </div>
          <div className="space-y-3 animate-on-scroll opacity-0 translate-x-4 transition-all duration-700 delay-400">
            <div className="flex items-center text-slate-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2">
              <Mail className="w-5 h-5 mr-3 text-blue-500" />
              <a href={`mailto:${personal.email}`} className="hover:underline">
                {personal.email}
              </a>
            </div>
            <div className="flex items-center text-slate-600 hover:text-emerald-600 transition-all duration-300 hover:translate-x-2">
              <Phone className="w-5 h-5 mr-3 text-emerald-500" />
              <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="hover:underline">
                {personal.phone}
              </a>
            </div>
            <div className="flex items-center text-slate-600 hover:text-purple-600 transition-all duration-300 hover:translate-x-2">
              <MapPin className="w-5 h-5 mr-3 text-purple-500" />
              <span>{personal.statusBadge}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
