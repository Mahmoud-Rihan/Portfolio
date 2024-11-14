import React from 'react';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
