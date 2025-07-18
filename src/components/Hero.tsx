import React from 'react';
import { ChevronDown, Mail, Phone, Linkedin, Github, BarChart3, TrendingUp, Database, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute top-10 left-10 animate-pulse">
            <BarChart3 className="h-16 w-16 text-blue-500 transform rotate-12" />
          </div>
          <div className="absolute top-32 right-20 animate-pulse delay-300">
            <TrendingUp className="h-12 w-12 text-teal-500 transform -rotate-12" />
          </div>
          <div className="absolute bottom-32 left-20 animate-pulse delay-500">
            <Database className="h-14 w-14 text-blue-400 transform rotate-45" />
          </div>
          <div className="absolute bottom-20 right-32 animate-pulse delay-700">
            <BarChart3 className="h-10 w-10 text-teal-400 transform -rotate-45" />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Harsh <span className="text-blue-500">Jha</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
            Data Analyst & Business Strategist
          </p>
          <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 mb-8 italic">
            "Driven by data, rooted in insight."
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 flex items-center justify-center">
            <span className="mr-2">📍</span>
            Pune, Maharashtra
          </p>
          
          {/* Resume Download Button */}
          <div className="mb-8">
            <a 
              href="/resume.pdf"
              download="Harsh_Jha_Resume.pdf"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="h-5 w-5" />
              <span>📄 Download Resume</span>
            </a>
          </div>
          
          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href="mailto:Harshjha0017@gmail.com"
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Harshjha0017@gmail.com</span>
            </a>
            <a 
              href="tel:+919272092042"
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>+91 9272092042</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/harsh-jha-bb817023a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/Harshjha0017/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-8 w-8 text-gray-600 dark:text-gray-400" />
      </button>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;