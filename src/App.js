import React from 'react';
import Header from './components/Header';
import './style/main.scss';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Projects />
      <About />
    </div>
  );
}

export default App;
