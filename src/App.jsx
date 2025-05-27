import { useState, useEffect } from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import Certificate from './components/Certificates/Certificate';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Project />
      <Certificate />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
