import '../styles/about.css';
import profileImage from '../assets/rushil.jpg';

const About = () => {
  return (
    <>
        <div className='about-page' id='about'>
            <div className='about-text'>
                <h2>About</h2>
                <p className='about-intro-para'>I am a passionate and dedicated Software Engineer with a strong background in developing robust and scalable web applications. With a solid foundation in computer science principles and a keen eye for detail, I thrive on turning complex problems into elegant solutions. My expertise spans across multiple programming languages and frameworks, allowing me to adapt quickly to new technologies and environments. Whether working independently or as part of a collaborative team, I am committed to continuous learning and innovation, always striving to deliver high-quality code and exceptional user experiences. In my career, I have successfully contributed to numerous projects, driving efficiency and performance improvements while maintaining a focus on usability and maintainability.</p>
            </div>
            <div className='about-image'>
                <img src={profileImage} alt="Profile" />
            </div>
        </div>
        
    </>
  );
};

export default About;