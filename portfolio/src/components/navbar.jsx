// src/components/Navbar.jsx

// import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className='navbar-options' href="#home">Home</a>
      <a className='navbar-options' href="#about">About</a>
      <a className='navbar-options' href="#projects">Projects</a>
      <a className='navbar-options' href="#education">Education</a>
      <a className='navbar-options' href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
