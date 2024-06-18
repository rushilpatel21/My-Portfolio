import '../styles/home.css';
import githubIcon from '../assets/github.png'; 
import linkedInIcon from '../assets/linkedin.png';
import discordIcon from '../assets/discord.png';
import downloadIcon from '../assets/resume.png';
import rushilResume from '../assets/Rushil\'s Resume.pdf';

const Home = () => {

    const downloadResume = () => {
        // fetch(rushilResume).then((response) => {
        //     response.blob().then((blob) => {
             
        //         const fileURL = window.URL.createObjectURL(blob);
        //         let alink = document.createElement("a");
        //         alink.href = fileURL;
        //         alink.download = 'Rushil\'s Resume';
        //         alink.click();
        //     });
        // });
    }

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
                <a className="home-social-icon">
                    <button onClick={downloadResume}>
                        <img src={downloadIcon} alt="Icon" />
                    </button>
                </a>
                
            </div> 
        </div>
        
    </>
  );
};

export default Home;