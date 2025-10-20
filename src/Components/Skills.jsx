import React, { useEffect, useState } from 'react';
import { Code, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'TypeScript', level: 90, color: 'from-blue-500 to-indigo-600' },
        { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-orange-500' },
        { name: 'HTML/CSS', level: 98, color: 'from-orange-400 to-red-500' },
      ]
    },
    {
      title: 'Styling & Design',
      icon: Palette,
      skills: [
        { name: 'Tailwind CSS', level: 92, color: 'from-cyan-400 to-blue-500' },
        { name: 'SASS/SCSS', level: 88, color: 'from-pink-400 to-purple-500' },
        { name: 'Figma', level: 85, color: 'from-purple-400 to-pink-500' },
        { name: 'CSS Animations', level: 90, color: 'from-green-400 to-blue-500' },
      ]
    },
    {
      title: 'Tools & Frameworks',
      icon: Zap,
      skills: [
        { name: 'Next.js', level: 87, color: 'from-gray-600 to-gray-800' },
        { name: 'Vite', level: 92, color: 'from-purple-500 to-indigo-600' },
        { name: 'Git/GitHub', level: 93, color: 'from-gray-700 to-black' },
        { name: 'Node.js', level: 89, color: 'from-green-500 to-green-700' },
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-5xl font-bold text-white mb-6">
          My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.title}
              className={`glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 card-3d slide-in-up`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover-rotate">
                  <IconComponent className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`group fade-in`}
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="relative h-3 bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full shadow-lg transition-all duration-1000 ease-out ${
                          isVisible ? 'progress-bar' : 'w-0'
                        }`}
                        style={{ 
                          '--progress-width': `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`
                        }}
                      />
                      
                      {/* Glow effect */}
                      <div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Additional Skills Icons */}
      <div className="mt-16 text-center fade-in" style={{ animationDelay: '1s' }}>
        <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: 'React', icon: '⚛️' },
            { name: 'TypeScript', icon: '📘' },
            { name: 'Next.js', icon: '▲' },
            { name: 'Tailwind', icon: '🎨' },
            { name: 'Node.js', icon: '🟢' },
            { name: 'Git', icon: '📝' },
            { name: 'Figma', icon: '🎯' },
            { name: 'VS Code', icon: '💻' },
          ].map((tech, index) => (
            <div
              key={tech.name}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl glass-card hover:bg-white/10 transition-all duration-300 cursor-pointer hover-scale scale-in`}
              style={{ animationDelay: `${1.2 + index * 0.1}s` }}
            >
              <span className="text-3xl hover-rotate">{tech.icon}</span>
              <span className="text-sm text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;