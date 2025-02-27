import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation bar */}
      <Navbar />
      <main>
        {/* Hero section */}
        <Hero />
        {/* About section */}
        <About />
        {/* Projects section */}
        <Projects />
        {/* Contact section */}
        <Contact />
        
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
