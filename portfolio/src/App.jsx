import './styles/App.css';
import Navbar from './components/navbar.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Experience from './pages/experience.jsx';
import Projects from './pages/project.jsx';
import Skills from './pages/skills.jsx';
import Education from './pages/education.jsx';
import Certificates from './pages/certificate.jsx';
import Contact from './pages/contact.jsx';
import CustomCursor from './components/customCursor.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <> 
      <SpeedInsights/>
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
          <Certificates />
          <Contact />
        </main>
      </Router>
    </>
  );
}

export default App;
