import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
// import Navbar from './Components/Navbar';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const sections = [
    { id: 'about', label: 'About', component: About },
    { id: 'skills', label: 'Skills', component: Skills },
    { id: 'projects', label: 'Projects', component: Projects },
    { id: 'education', label: 'Education', component: Education },
    { id: 'contact', label: 'Contact', component: Contact },
  ];

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || About;

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                isDark ? 'bg-cyan-400/20' : 'bg-purple-400/20'
              } floating-particle`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header with Dark Mode Toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 dark:bg-black/10 border-b border-white/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover-scale">
           { "<Bunny/>"}
          </h1>

          <div className="flex items-center space-x-4">
           {/* Desktop Navigation */}
<nav className="hidden md:flex space-x-6 ml-8">
  {sections.map(section => (
    <button
      key={section.id}
      onClick={() => setActiveSection(section.id)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
        activeSection === section.id
          ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400'
          : 'text-gray-300 hover:text-white hover:bg-white/10'
      }`}
    >
      {section.label}
    </button>
  ))}
</nav>


            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
        
      </header>

      {/* Mobile Menu */}
      <div className={`fixed top-16 left-0 right-0 z-40 md:hidden backdrop-blur-md bg-black/20 border-b border-white/20 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <nav className="flex flex-col space-y-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`p-3 rounded-lg text-left transition-all duration-300 hover-slide-right ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        {/* <Navbar 
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        /> */}
      </div>

      {/* Main Content */}
      <main className="pt-20 pb-10">
        <div className={`container mx-auto px-6 fade-in ${activeSection}`}>
          <ActiveComponent />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;