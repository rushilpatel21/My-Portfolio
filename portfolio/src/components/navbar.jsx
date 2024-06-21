import { HashLink as Link } from 'react-router-hash-link';
import useScrollSpy from '../hooks/useScrollSpy'; // Adjust the path as necessary
import '../styles/navbar.css';

const Navbar = () => {
  const sectionIds = [
    'home',
    'about',
    'experience',
    'projects',
    'skills',
    'education',
    'certificates',
    'contact'
  ];
  const activeSection = useScrollSpy(sectionIds, 100); // Adjust offset as needed

  return (
    <nav className="navbar">
      <Link className={`navbar-options ${activeSection === 'home' ? 'active' : ''}`} smooth to="#home">Home</Link>
      <Link className={`navbar-options ${activeSection === 'about' ? 'active' : ''}`} smooth to="#about">About</Link>
      <Link className={`navbar-options ${activeSection === 'experience' ? 'active' : ''}`} smooth to="#experience">Experience</Link>
      <Link className={`navbar-options ${activeSection === 'projects' ? 'active' : ''}`} smooth to="#projects">Projects</Link>
      <Link className={`navbar-options ${activeSection === 'skills' ? 'active' : ''}`} smooth to="#skills">Skills</Link>
      <Link className={`navbar-options ${activeSection === 'education' ? 'active' : ''}`} smooth to="#education">Education</Link>
      <Link className={`navbar-options ${activeSection === 'certificates' ? 'active' : ''}`} smooth to="#certificates">Certificates</Link>
      <Link className={`navbar-options ${activeSection === 'contact' ? 'active' : ''}`} smooth to="#contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
