import '../styles/projects.css';
import githubIcon from '../assets/github.png';
import linkIcon from '../assets/link.png';

const projects = [
  {
    title: 'CivicPulse',
    description: '(WIP) Currently working on it :) .',
    tags: ['ExpressJS', 'ReactJS', 'NodeJS' ,'Firebase Database', 'Google Cloud Services', 'Firebase Auth','Gemini', 'MUI', 'Multer' ],
    github: 'https://github.com/rushilpatel21/CivicPulse',
    link: '#',
  },
  {
    title: 'FitFreak',
    description: 'Elevate your fitness game with FitFreak: Your all-in-one workout companion.',
    tags: ['ExpressJS', 'ReactJS', 'NodeJS' ,'MongoDB', 'Cookies' ],
    github: 'https://github.com/rushilpatel21/FitFreak',
    link: 'https://fitfreak.vercel.app/',
  },
  {
    title: 'My Portfolio',
    description: 'My personal website, built with ReactJS.',
    tags: ['ReactJS'],
    github: 'https://github.com/rushilpatel21/My-Portfolio',
    link: 'https://rushil21.vercel.app/',
  },
  {
    title: 'Cricket Player Statistics Management System',
    description: 'A program that offers a set of functionalities to handle cricket match information, providing a comprehensive toolkit for data analysis and management.',
    tags: ['C++', 'Data Structures', 'Linked List', 'STL'],
    github: 'https://github.com/rushilpatel21/Cricket-Player-Statistics-Management-System',
    link: '#',
  },
  {
    title: 'Learning Management System',
    description: 'Designed and implemented a Learning Management System (LMS) which follows Object Oriented Principles.',
    tags: ['Java', 'Object-Oriented-Programming', 'LMS'],
    github: 'https://github.com/rushilpatel21/Learning-Management-System',
    link: '#',
  },
  {
    title: 'Client Connect',
    description: 'A Hackathon Project that aims to bridge the gap between consumers and retailers.',
    tags: ['Flutter', 'SQLite'],
    github: '#',
    link: 'https://devfolio.co/projects/clientconnect-6497',
  },
  {
    title: 'Community Service Website',
    description: 'A Webpage created as a part of Community Service in SEM-II.',
    tags: ['HTML', 'CSS'],
    github: 'https://github.com/rushilpatel21/Community-Service-1',
    link: 'https://rushilpatel21.github.io/Community-Service-1/',
  }
];

const Projects = () => {
  return (
    <section className="projects-section project-page" id='projects'>
      <h1>Relevant Projects</h1>
      <p>Check out some cool stuff I&apos;ve made!!!</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-icons">
              {project.github !== '#' && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              )}
              {project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={linkIcon} alt="Link" />
                </a>
              )}
            </div>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
