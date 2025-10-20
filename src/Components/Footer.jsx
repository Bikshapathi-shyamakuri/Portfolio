import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 glass-card">
      {/* Animated Glow Line */}
      <div className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 w-full glow-effect" />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <div className="mb-8 fade-in">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
             Bikshapathi
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Frontend Developer passionate about creating beautiful, functional, and user-centered digital experiences.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-400 mb-6 fade-in stagger-1">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-400 fill-current pulse-glow" />
            <span>and</span>
            <Code className="w-5 h-5 text-cyan-400 rotating-border" />
            <span>in india</span>
          </div>

          <div className="border-t border-white/10 pt-8 fade-in stagger-2">
            <p className="text-gray-500 text-sm">
              © 2025 Bikshapathi. All rights reserved. | 
              <span className="text-cyan-400"> Designed & Developed with Modern Web Technologies</span>
            </p>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40 floating-particle"
                style={{
                  left: `${20 + i * 30}%`,
                  bottom: '20px',
                  animationDelay: `${i}s`,
                  animationDuration: `${3 + i}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;