import React from 'react';
import './App.css';
import { Glavnaya } from './components/Glavnaya';
import { Project } from './components/Project';
import { Footer } from './components/Footer';
import style from './App.module.css'
import { Routes, Route, NavLink } from 'react-router-dom';


function App() {
  return (
    <div className={style.App}>
      <div className={style.container}>
        <div className={style.header}>
          Header
        </div>
        <div className={style.res}>
          <div className={style.navbar}>
            <NavLink to={'/'} > Home </NavLink>
            <NavLink to={'/Project'} > Project </NavLink>
            <NavLink to={'/Footer'} > Footer </NavLink>
          </div>
          <div className={style.main}>
            <Routes>
              <Route path={'/'} element={<Glavnaya/>}/>
              <Route path={'/Project'} element={<Project/>}/>
              <Route path={'/Footer'} element={<Footer/>}/>
            </Routes>
          </div>
        </div>

      </div>






    </div>
  );
}

export default App;
