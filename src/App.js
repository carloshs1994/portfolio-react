import React from 'react';
import Header from './components/Header';
import './style/main.scss';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
