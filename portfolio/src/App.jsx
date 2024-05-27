import './App.css'
// import React from 'react';
// import { Route, Routes, Link } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
    </>
  )
}

export default App
