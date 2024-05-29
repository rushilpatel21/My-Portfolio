import '../styles/about.css';
import profileImage from '../assets/rushil.jpg';

const About = () => {
  return (
    <>
        <div className='about-page' id='about'>
            <div className='about-text'>
                <h2>About</h2>
                <p className='about-intro-para'>
                I&apos;m Rushil Patel, a second-year Computer Science and Engineering student at Nirma University. Driven by a lifelong passion for technology, I&apos;ve honed my skills in programming languages like C++, Java, JavaScript and Python and I&apos;ve undertaken diverse projects, like Full Stack Web Development (MERN). With a competitive edge in platforms like CodeForces and LeetCode, and active involvement in technical communities like the Computer Society of India (CSI), Google Developer Student Club (GDSC), I&apos;m committed to pushing boundaries and shaping the future of technology through innovation and collaboration.                </p>
            </div>
            <div className='about-image'>
                <img src={profileImage} alt="Profile" />
            </div>
        </div>
        
    </>
  );
};

export default About;