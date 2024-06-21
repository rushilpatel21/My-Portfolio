import '../styles/home.css';
import rushilResume from '../assets/Rushil\'s Resume.pdf';
import Download from '../assets/download.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import discord from '../assets/discord.svg';

const Home = () => {

    const downloadResume = () => {
        fetch(rushilResume).then((response) => {
            response.blob().then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = 'Rushil\'s Resume';
                alink.click();
            });
        });
    }

    return (
        <>
            <div className='home-page' id='home'>
                <div className='Home-Name'>Rushil Patel</div>
                <div className='home-social-media'>
                    <a href="https://github.com/rushilpatel21" target="_blank" rel="noopener noreferrer" className='home-social-icon'>
                        <img src={github} alt="Github Icon" style={{ width: 40, height: "auto" }}/>
                    </a>
                    <a href="https://www.linkedin.com/in/rushilpatel21/" target="_blank" rel="noopener noreferrer" className='home-social-icon'>
                        <img src={linkedin} alt="LinkedIn Icon" style={{ width: 40, height: "auto" }}/>
                    </a>
                    <a href="https://discordapp.com/users/617247545923469313" target="_blank" rel="noopener noreferrer" className='home-social-icon'>
                        <img src={discord} alt="Discord Icon" style={{ width: 40, height: "auto" }}/>
                    </a>
                    <a className="home-social-icon">
                        <button onClick={downloadResume}>
                        <img src={Download} alt="Discord Icon" style={{ width: 40, height: "auto" }}/>
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Home;
