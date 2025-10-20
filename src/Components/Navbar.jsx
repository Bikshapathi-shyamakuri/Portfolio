import React from 'react';

const Navbar = ({ sections, activeSection, setActiveSection }) => {
  return (
    <nav className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="glass-card rounded-2xl p-4 border border-white/20">
        <div className="flex flex-col space-y-2">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden hover-scale ${
                activeSection === section.id
                  ? 'text-white shadow-lg bg-gradient-to-r from-cyan-500 to-purple-500'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="relative z-10">{section.label}</span>
              {activeSection === section.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;