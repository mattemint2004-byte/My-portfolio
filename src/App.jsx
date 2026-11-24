import React, { useEffect, useRef } from 'react';
import { portfolioData } from './data/portfolioData';
import Header from './components/Header';
import CareerObjective from './components/CareerObjective';
import FeaturedProject from './components/FeaturedProject';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import CoreSkills from './components/CoreSkills';
import Languages from './components/Languages';
import ProfessionalSummary from './components/ProfessionalSummary';
import Footer from './components/Footer';

export default function App() {
  const observerRef = useRef(null);

  useEffect(() => {
    // Typewriter effect function
    const startTypewriter = (el) => {
      if (el.dataset.typewritten === 'true') return;
      el.dataset.typewritten = 'true';

      const fullText = el.textContent || '';
      el.textContent = '';
      el.style.opacity = '1';

      let i = 0;
      const timer = setInterval(() => {
        if (i < fullText.length) {
          el.textContent += fullText.charAt(i);
          i++;
        } else {
          clearInterval(timer);
        }
      }, 30);
    };

    // Counter animation function
    const startCounter = (el) => {
      if (el.dataset.counted === 'true') return;
      el.dataset.counted = 'true';

      const target = parseInt(el.getAttribute('data-target') || '0', 10);
      let current = 0;
      const step = target / 50;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target.toString();
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current).toString();
        }
      }, 40);
    };

    // IntersectionObserver for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');

            if (entry.target.classList.contains('typewriter-text')) {
              startTypewriter(entry.target);
            }
            if (entry.target.classList.contains('counter')) {
              startCounter(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header personal={portfolioData.personal} />

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        <CareerObjective objective={portfolioData.careerObjective} />
        <FeaturedProject project={portfolioData.featuredProject} />
        <WorkExperience experiences={portfolioData.experiences} />
        <Education education={portfolioData.education} />
        <CoreSkills skills={portfolioData.skills} />
        <Languages languages={portfolioData.languages} />
        <ProfessionalSummary summary={portfolioData.professionalSummary} />
      </main>

      <Footer
        personal={portfolioData.personal}
        experiences={portfolioData.experiences}
      />
    </div>
  );
}
