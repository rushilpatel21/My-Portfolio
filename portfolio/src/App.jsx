import './styles/App.css'
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
import { Analytics } from "@vercel/analytics/react"

// TODO: 
// 2) Add navlink from react-router and change icons.

function App() {

  return (
    <>
      <Analytics/>
      <CustomCursor/>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Education/>
      <Certificates/>
      <Contact/>
    </>
  )
}

export default App
