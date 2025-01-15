import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Built an interactive dashboard using React and Python for real-time data analysis with ML predictions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'React', 'TensorFlow', 'AWS'],
    links: {
      demo: 'https://www.linkedin.com/in/kimutai-onesmus-263519214',
      github: 'https://www.linkedin.com/in/kimutai-onesmus-263519214'
    }
  },
  {
    title: 'Computer Vision System',
    description: 'Developed a real-time object detection system using YOLOv5 and OpenCV for industrial applications.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'PyTorch', 'OpenCV', 'Docker'],
    links: {
      demo: 'https://www.linkedin.com/in/kimutai-onesmus-263519214',
      github: 'https://www.linkedin.com/in/kimutai-onesmus-263519214'
    }
  },
  {
    title: 'NLP Chatbot Platform',
    description: 'Created a scalable chatbot platform using transformer models and FastAPI backend.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'FastAPI', 'Transformers', 'MongoDB'],
    links: {
      demo: 'https://www.linkedin.com/in/kimutai-onesmus-263519214',
      github: 'https://www.linkedin.com/in/kimutai-onesmus-263519214'
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    <ExternalLink size={16} className="mr-1" /> Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
