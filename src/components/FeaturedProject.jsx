import React from 'react';
import { FolderOpen } from 'lucide-react';

export default function FeaturedProject({ project }) {
  const { sectionTitle, documentary, preview } = project;

  return (
    <section className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-500 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
      <div className="flex items-center mb-6">
        <FolderOpen className="w-6 h-6 mr-3 text-purple-600" />
        <h2 className="text-2xl font-bold text-slate-800">{sectionTitle}</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Project Details */}
        <div className="project-card animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 delay-200">
          <div className="bg-gradient-to-r from-purple-50 to-transparent p-6 rounded-lg border-l-4 border-purple-500 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-800 mb-4">{documentary.title}</h3>
            <div className="text-slate-700 leading-relaxed space-y-3">
              {documentary.bullets.map((bullet, idx) => (
                <p key={idx}>• {bullet}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Project Preview Card */}
        <div className="project-card animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 delay-300">
          <div className="bg-gradient-to-r from-indigo-50 to-transparent p-6 rounded-lg border-l-4 border-indigo-500 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-800 mb-4">{preview.title}</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 p-8 rounded-lg border-2 border-indigo-200 text-center">
                <div className="mb-4">
                  <FolderOpen className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{preview.cardTitle}</h4>
                  <p className="text-slate-600 text-sm mb-4">{preview.description}</p>
                </div>
              </div>
              <a
                href={preview.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg transform hover:scale-105 font-medium"
              >
                <FolderOpen className="w-4 h-4 mr-2" />
                {preview.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
