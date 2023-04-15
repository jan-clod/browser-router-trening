import React from 'react';
import './App.css';
import { Glavnaya } from './components/Glavnaya';
import { Project } from './components/Project';
import { Footer } from './components/Footer';
import style from './App.module.css'

function App() {
  return (
    <div className={style.App}>
      <div className={style.container}>
          <div className={style.header}>
              Header
          </div>
        <div className={style.res}>
          <div className={style.navbar}>
            <Glavnaya/>
            <Project/>
            <Footer/>
          </div>
          <div className={style.main}>
           main
          </div>
        </div>
   
        </div>

      
      
      
     
    
    </div>
  );
}

export default App;
