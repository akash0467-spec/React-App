import React from 'react';
import About from './Components/About';
import Skills from './Components/Skills';
import SocialLinks from './Components/SocialLinks';
import ContactForm from './Components/ContactForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <p>Web Developer & Designer</p>
      </header>
      
      <main>
        <About />
        <Skills />
        <SocialLinks />
        <ContactForm />
      </main>
      
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;