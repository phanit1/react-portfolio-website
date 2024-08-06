import React from 'react';
import NavbarApp from './components/NavbarApp';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Resume from './sections/Resume';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import './App.css';
import Skills from './sections/Skills';

function App () {
  return (
    <>
      <NavbarApp />
      <main>
        <Home />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
