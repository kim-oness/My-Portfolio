import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-indigo-600">Kimutai Onesmus</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8">
          Data Scientist | Machine Learning Engineer | Full Stack Developer | AI Enthusiast
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Transforming complex data into actionable insights and building intelligent solutions 
          that drive business value.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#contact" className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
            Get in Touch
          </a>
          <a href="#projects" className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors">
            View Projects
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://github.com/kim-oness/kimutai-dev" className="text-gray-600 hover:text-indigo-600 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/kimutai-onesmus-263519214" className="text-gray-600 hover:text-indigo-600 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:kipkoreonesmus951@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}