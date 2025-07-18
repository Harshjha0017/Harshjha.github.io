import React from 'react';
import { useInView } from '../hooks/useInView';
import { BarChart3, TrendingUp, ExternalLink, Clock } from 'lucide-react';

const Projects = () => {
  const [ref, isInView] = useInView();

  const projects = [
    {
      title: "Sales Dashboard with EDA",
      description: "Comprehensive sales analysis dashboard featuring exploratory data analysis, trend identification, and interactive visualizations. Built with Python and Power BI to provide actionable business insights.",
      technologies: ["Python", "Power BI", "SQL", "Excel"],
      icon: BarChart3,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Blinkit Data Analysis",
      description: "In-depth analysis of Blinkit's operational data focusing on delivery patterns, customer behavior, and business metrics. Identified key optimization opportunities and presented strategic recommendations.",
      technologies: ["Python", "Matplotlib", "Seaborn", "SQL"],
      icon: TrendingUp,
      gradient: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6`}>
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 font-medium transition-colors">
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Coming Soon Card */}
          <div className="max-w-md mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                More Projects Coming Soon
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm currently working on several exciting data analysis projects. 
                Stay tuned for updates on new case studies and analytical insights!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;