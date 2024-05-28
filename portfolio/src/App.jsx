import './App.css'
import Navbar from './components/navbar.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Projects from './pages/project.jsx';
import Skills from './pages/skills.jsx';
import Contact from './pages/contact.jsx';

function App() {

  // TODO : Change some CSS in Project to make it more github like, add a custom cursor (circlish and it should change into the block/button), Contact will have a mail type form, also change the logo of the website

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default App
