import '../styles/home.css';
import githubIcon from '../assets/github.png'; 
import linkedInIcon from '../assets/linkedin.png';
import discordIcon from '../assets/discord.png';
import instagramIcon from '../assets/instagram.png';

const Home = () => {
  return (
    <>
        <div className='home-page' id='home'>
            <div className='Home-Name'>Rushil Patel</div>
            <div className='home-social-media'>
                <a href="https://github.com/rushilpatel21" target="_blank" rel="noopener noreferrer" className='home-social-icon'>
                    <img src={githubIcon} alt="Icon" style={{ width: 52, height: "auto" }}/>
                </a>
                <a href="https://www.linkedin.com/in/rushilpatel21/" target="_blank" rel="noopener noreferrer" className='home-social-icon'>
                    <img src={linkedInIcon} alt="Icon" style={{ width: 52, height: "auto" }}/>
                </a>
                <a href="https://discordapp.com/users/617247545923469313" target="_blank" rel="noopener noreferrer" className='home-social-icon'>
                    <img src={discordIcon} alt="Icon" style={{ width: 52, height: "auto" }}/>
                </a>
                <a href="https://www.instagram.com/rushil21_/" target="_blank" rel="noopener noreferrer" className='home-social-icon'>
                    <img src={instagramIcon} alt="Icon" style={{ width: 52, height: "auto" }}/>
                </a>
                
            </div> 
        </div>
        
    </>
  );
};

export default Home;