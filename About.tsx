import React from 'react';
import { Code, Brain, Layout, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <p className="text-lg text-gray-600 mb-6">
              With over 8 years of experience in data science, machine learning, and full-stack development,
              I specialize in turning complex data challenges into elegant solutions that drive business growth.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <Brain className="w-8 h-8 text-indigo-600 mb-2" />
                <h3 className="font-semibold mb-1">AI & ML</h3>
                <p className="text-sm text-gray-600">Deep learning, NLP, Computer Vision</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <Code className="w-8 h-8 text-indigo-600 mb-2" />
                <h3 className="font-semibold mb-1">Development</h3>
                <p className="text-sm text-gray-600">Full Stack, Cloud, DevOps</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <Layout className="w-8 h-8 text-indigo-600 mb-2" />
                <h3 className="font-semibold mb-1">UI/UX Design</h3>
                <p className="text-sm text-gray-600">User-Centered Design, Prototyping</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <Terminal className="w-8 h-8 text-indigo-600 mb-2" />
                <h3 className="font-semibold mb-1">Data Engineering</h3>
                <p className="text-sm text-gray-600">ETL, Data Pipelines, Big Data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}