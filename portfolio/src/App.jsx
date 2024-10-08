import './styles/App.css';
import Navbar from './components/navbar.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Experience from './pages/experience.jsx';
import Projects from './pages/project.jsx';
import Skills from './pages/skills.jsx';
import Education from './pages/education.jsx';
import Certificates from './pages/certificate.jsx';
import Achievements from './pages/achievements.jsx';
import Contact from './pages/contact.jsx';
import CustomCursor from './components/customCursor.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <> 
      <Analytics/>
      <CustomCursor/>
      <Router>
        <Navbar/>
        <main>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Achievements />
          <Certificates />
          <Contact />
        </main>
      </Router>
    </>
  );
}

export default App;
