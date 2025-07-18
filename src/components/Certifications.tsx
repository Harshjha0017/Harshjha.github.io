import React from 'react';
import { useInView } from '../hooks/useInView';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const [ref, isInView] = useInView();

  const certifications = [
    {
      title: "Business Analysis",
      provider: "Microsoft / LinkedIn",
      description: "Comprehensive certification covering business analysis methodologies, requirements gathering, and strategic analysis techniques.",
      icon: Award,
      gradient: "from-blue-500 to-blue-600",
      verified: true
    },
    {
      title: "Marketing Research Fundamentals",
      provider: "VMEdu",
      credentialId: "604249",
      description: "Advanced certification in marketing research principles, data collection methods, and consumer behavior analysis.",
      icon: Award,
      gradient: "from-teal-500 to-teal-600",
      verified: true
    },
    {
      title: "Google Developer Expert (GDE)",
      provider: "Google Developer Student Clubs",
      description: "Recognition for expertise in Google technologies and active contribution to the developer community.",
      icon: Award,
      gradient: "from-green-500 to-green-600",
      verified: true
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Certifications
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center mb-6`}>
                    <cert.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    {cert.verified && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                  
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {cert.provider}
                  </p>
                  
                  {cert.credentialId && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <strong>Credential ID:</strong> {cert.credentialId}
                    </p>
                  )}
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <button className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 font-medium transition-colors">
                    <span>View Certificate</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;