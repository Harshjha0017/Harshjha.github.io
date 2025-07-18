import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { Code, Database, BarChart3, FileSpreadsheet, TrendingUp, PieChart } from 'lucide-react';

const Skills = () => {
  const [ref, isInView] = useInView();
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});

  const skills = [
    { name: 'Python', level: 85, icon: Code, category: 'Programming' },
    { name: 'SQL', level: 90, icon: Database, category: 'Programming' },
    { name: 'C', level: 75, icon: Code, category: 'Programming' },
    { name: 'Excel', level: 95, icon: FileSpreadsheet, category: 'Tools' },
    { name: 'Power BI', level: 88, icon: BarChart3, category: 'Tools' },
    { name: 'Google Sheets', level: 92, icon: FileSpreadsheet, category: 'Tools' },
    { name: 'Matplotlib', level: 80, icon: PieChart, category: 'Tools' },
    { name: 'Seaborn', level: 78, icon: TrendingUp, category: 'Tools' },
  ];

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const newAnimatedSkills: { [key: string]: number } = {};
        skills.forEach((skill) => {
          newAnimatedSkills[skill.name] = skill.level;
        });
        setAnimatedSkills(newAnimatedSkills);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const programmingSkills = skills.filter(skill => skill.category === 'Programming');
  const toolSkills = skills.filter(skill => skill.category === 'Tools');

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Programming Skills */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Code className="h-8 w-8 text-blue-500 mr-3" />
                Programming
              </h3>
              
              <div className="space-y-6">
                {programmingSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="h-5 w-5 text-blue-500" />
                        <span className="text-lg font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${animatedSkills[skill.name] || 0}%`,
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools Skills */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <BarChart3 className="h-8 w-8 text-teal-500 mr-3" />
                Tools
              </h3>
              
              <div className="space-y-6">
                {toolSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="h-5 w-5 text-teal-500" />
                        <span className="text-lg font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-teal-500 to-teal-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${animatedSkills[skill.name] || 0}%`,
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;