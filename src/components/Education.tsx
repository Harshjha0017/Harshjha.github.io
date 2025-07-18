import React from 'react';
import { useInView } from '../hooks/useInView';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Education
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Bachelor of Technology (B.Tech)
                    </h3>
                    <p className="text-blue-100 text-lg">
                      Information Technology & Data Science (ITDS)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <BookOpen className="h-6 w-6 text-blue-500" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Duration
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          2022 – 2026
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Award className="h-6 w-6 text-teal-500" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Current CGPA
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          7.9 / 10.0
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                      Key Focus Areas
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">Data Science & Analytics</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">Information Technology</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">Business Intelligence</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">Statistical Analysis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;