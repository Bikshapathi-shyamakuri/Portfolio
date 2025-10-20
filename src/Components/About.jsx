import React, { useState, useEffect } from 'react';
import { Download, MapPin, Calendar } from 'lucide-react';
import Pic from "/src/assets/PicForPort.jpg"; 
const About = () => {
  
  const [typedText, setTypedText] = useState('');
  const fullText = 'Frontend Developer';
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 slide-in-left">
          <div className="space-y-4">
            <p className="text-lg text-cyan-400 font-medium fade-in stagger-1">
              Hello, I'm
            </p>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight slide-in-up stagger-2">
              Bikshapathi <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Shyamakuri</span>
            </h1>
            
            <div className="text-3xl md:text-4xl text-gray-300 font-light">
              <span className="typing-animation inline-block">{typedText}</span>
            </div>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl fade-in stagger-3">
            I craft beautiful, responsive, and performant web applications using modern technologies. 
            Passionate about creating exceptional user experiences that blend creativity with functionality.
          </p>

          <div className="flex flex-wrap gap-6 text-gray-400 fade-in stagger-4">
            <div className="flex items-center gap-2 hover-slide-right">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-2 hover-slide-right">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span>Available for work</span>
            </div>
          </div>

          <div className="flex gap-4 fade-in stagger-5">
            <a
  href="/Bunny Resume.pdf"
  download="Bunny_Resume.pdf"
  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale hover-glow"
>
  <div className="flex items-center gap-2">
    <Download className="w-5 h-5" />
    Download CV
  </div>
</a>
            
            
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center slide-in-right">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-xl opacity-75 rotating-border" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 rotating-border-reverse" />
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 glass-card">
              <img
                src={Pic}
                alt="Profile"
                className="w-full h-full object-cover hover-scale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;