import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce platform with React, TypeScript, and Stripe integration',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'web-app',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      github: '#',
      live: '#',
      gradient: 'from-blue-400 to-purple-600'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'web-app',
      technologies: ['Next.js', 'Socket.io', 'MongoDB'],
      github: '#',
      live: '#',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Creative portfolio website with stunning animations',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'ui-design',
      technologies: ['React', 'CSS Animations', 'Tailwind CSS'],
      github: '#',
      live: '#',
      gradient: 'from-purple-400 to-pink-600'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with beautiful UI',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'web-app',
      technologies: ['Vue.js', 'Chart.js', 'Weather API'],
      github: '#',
      live: '#',
      gradient: 'from-cyan-400 to-blue-600'
    },
    {
      id: 5,
      title: 'Component Library',
      description: 'Open source React component library',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'open-source',
      technologies: ['React', 'TypeScript', 'Storybook'],
      github: '#',
      live: '#',
      gradient: 'from-orange-400 to-red-600'
    },
    {
      id: 6,
      title: 'Mobile Banking UI',
      description: 'Modern banking app interface design',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'ui-design',
      technologies: ['Figma', 'React Native', 'Expo'],
      github: '#',
      live: '#',
      gradient: 'from-indigo-400 to-purple-600'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-app', label: 'Web Apps' },
    { id: 'ui-design', label: 'UI Design' },
    { id: 'open-source', label: 'Open Source' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div id="projects"  className="min-h-screen py-20 ">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-5xl font-bold text-white mb-6">
          My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          A showcase of my recent work and creative endeavors
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 hover-scale ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg neon-cyan'
                  : 'glass-card text-gray-300 hover:text-white hover:bg-white/20'
              } scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                {filter.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`group relative glass-card rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 card-3d scale-in`}
            style={{ 
              animationDelay: `${index * 0.1}s`,
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.github}
                  className="p-3 rounded-full glass-card text-white hover:bg-white/30 transition-all duration-300 hover-scale"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={project.live}
                  className="p-3 rounded-full glass-card text-white hover:bg-white/30 transition-all duration-300 hover-scale"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 hover-slide-right">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 scale-in`}
                    style={{ animationDelay: `${techIndex * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Glow Border Effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none blur-sm`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;