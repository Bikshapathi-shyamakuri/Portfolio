import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyeBArwjvVNjshMzruB96GGb5ATT_LfpGDdqXcCQcpBVO6o9GQms4OxihVQSGFmLVoKeA/exechttps://script.google.com/macros/s/AKfycbyeBArwjvVNjshMzruB96GGb5ATT_LfpGDdqXcCQcpBVO6o9GQms4OxihVQSGFmLVoKeA/exec", // your actual script URL
      {
        method: "POST",
        mode: "no-cors", // IMPORTANT for Google Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    // no-cors hides response, so just assume success
    alert("Message submitted successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error("Error submitting:", error);
    alert("Failed to send message.");
  }

  setIsSubmitting(false);
};


  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'shyamakuribikshapathi@gmail.com',
      link: 'mailto:alex@example.com',
      gradient: 'from-blue-400 to-purple-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8096393883',
      link: 'tel:+15551234567',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Hyderabad, India',
      link: '#',
      gradient: 'from-purple-400 to-pink-600'
    }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', link: '#', color: 'hover:text-gray-400' },
    { icon: Linkedin, name: 'LinkedIn', link: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, name: 'Twitter', link: '#', color: 'hover:text-cyan-400' },
    { icon: Instagram, name: 'Instagram', link: '#', color: 'hover:text-pink-400' }
  ];

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated Background Waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/30 to-transparent rounded-full blur-3xl wave-animation" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-transparent rounded-full blur-3xl wave-animation" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-gradient-to-r from-blue-400/25 to-transparent rounded-full blur-3xl wave-animation" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className="text-center mb-16 relative z-10 fade-in">
        <h2 className="text-5xl font-bold text-white mb-6">
          Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Let's work together to bring your ideas to life
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 relative z-10">
        {/* Contact Form */}
        <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 slide-in-left">
          <h3 className="text-3xl font-bold text-white mb-8">Send Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover-glow"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover-glow"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>

            <div className="relative group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                required
                className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover-glow"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={6}
                required
                className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none hover-glow"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 hover-scale neon-cyan"
            >
              <div className="flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full rotating-border" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </div>
            </button>
          </form>
        </div>

        {/* Contact Info & Social */}
        <div className="space-y-8 slide-in-right">
          {/* Contact Information */}
          <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-8">Contact Info</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.link}
                    className={`flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group hover-slide-right fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} shadow-lg hover-scale`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.title}</p>
                      <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-8">Follow Me</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    className={`flex items-center gap-3 p-4 rounded-xl glass-card hover:bg-white/10 text-gray-300 ${social.color} transition-all duration-300 hover-scale scale-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent className="w-6 h-6" />
                    <span className="font-medium">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;