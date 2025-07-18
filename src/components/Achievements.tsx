import React from 'react';
import { useInView } from '../hooks/useInView';
import { Trophy, Star, Target, Users } from 'lucide-react';

const Achievements = () => {
  const [ref, isInView] = useInView();

  const achievements = [
    {
      title: "Data Science Competition Winner",
      subtitle: "Inter-College Champion",
      year: "2024",
      description: "Won first place in inter-college data science competition, demonstrating excellence in analytical thinking and problem-solving.",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Academic Excellence Award",
      subtitle: "Top 5% in Data Science",
      year: "2023–24",
      description: "Recognized for outstanding academic performance, ranking in the top 5% of Data Science students.",
      icon: Star,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Project Impact Recognition",
      subtitle: "20% Churn Reduction",
      year: "2024",
      description: "Delivered a data analysis project that resulted in 20% churn reduction for a local startup, showcasing real-world impact.",
      icon: Target,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Peer Mentorship Excellence",
      subtitle: "Guided 15+ Juniors",
      year: "2023–24",
      description: "Successfully mentored over 15 junior students in analytics, helping them develop practical skills and career guidance.",
      icon: Users,
      gradient: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Achievements & Recognition
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center flex-shrink-0`}>
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {achievement.year}
                        </span>
                      </div>
                      
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                        {achievement.subtitle}
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;