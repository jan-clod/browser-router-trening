import React from 'react';
import './App.css';
import { Glavnaya } from './components/Glavnaya';
import { Project } from './components/Project';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
     <p>Hellow yo yo yo </p>
     <Glavnaya/>
     <Project/>
     <Footer/>
    </div>
  );
}

export default App;
