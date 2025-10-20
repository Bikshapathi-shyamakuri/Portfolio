import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      type: 'degree',
      title: 'Bachelor of Computer Science',
      institution: 'Jawaharlal University',
      location: 'Hyderabad, India',
      period: '2021 - 2025',
      description: 'Specialized in Computer Science',
      grade: 'Magna Cum Laude - GPA: 7.5/10',
      icon: GraduationCap,
      color: 'from-blue-400 to-purple-600'
    },
   
    {
      id: 2,
      type: 'bootcamp',
      title: 'Full Stack Web Development',
      institution: 'Jspiders',
      location: 'Hyderabad, India',
      period: '2025',
      description: 'Intensive 24-week program covering modern web development technologies',
      grade: 'Certificate of Completion',
      icon: GraduationCap,
      color: 'from-green-400 to-blue-500'
    },
    {
      id: 3,
      type: 'certification',
      title: 'Google UX Design Professional Certificate',
      institution: 'Google Career Certificates',
      location: 'Online',
      period: '2021',
      description: 'Comprehensive program covering user experience design principles',
      grade: 'Professional Certificate',
      icon: Award,
      color: 'from-purple-400 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-5xl font-bold text-white mb-6">
          My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Education</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Academic background and professional certifications
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        {/* <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 opacity-30" /> */}

        <div className="space-y-8">
          {educationData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`relative flex gap-8 group slide-in-left`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg hover-scale scale-in`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Glow Effect */}
                  {/* <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-lg`} /> */}
                </div>

                {/* Content Card */}
                <div className="flex-1 glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover-tilt">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 hover-slide-right">
                        {item.title}
                      </h3>
                      <p className="text-lg text-purple-300 font-semibold mb-2">
                        {item.institution}
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-cyan-400 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.color} bg-opacity-20 text-white font-medium border border-white/20 hover-scale`}>
                    {item.grade}
                  </div>

                  {/* Hover Glow Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Achievement Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { label: 'Years of Education', value: '4+', icon: '🎓' },
            { label: 'Certifications', value: '8+', icon: '🏆' },
            { label: 'Courses Completed', value: '50+', icon: '📚' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center glass-card rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover-scale scale-in`}
              style={{ animationDelay: `${1.7 + index * 0.1}s` }}
            >
              <div className="text-4xl mb-3 hover-rotate">{stat.icon}</div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Education;
