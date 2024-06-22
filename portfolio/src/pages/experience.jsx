import '../styles/experience.css';
import technoteryLogo from '../assets/technotery.png';
import linkIcon from '../assets/link.png';

const experienceData = [
  {
    name: 'Technotery',
    position: 'Assistant Software Engineer - Trainee',
    description: [
        'Developed a voice-command-based web application for finance management, similar to Splitwise, enhancing user interaction through speech recognition.',
        'Utilized ReactJS with react-speech-recognition for speech-to-text functionality on the frontend and implemented backend services using NodeJS with Express.',
        'Leveraged Amazon Bedrock (AWS) for extracting relevant information from user commands, employed Amazon DynamoDB for data storage and management and utilized AWS Lambda for deploying serverless functions.'
      ],
    image: technoteryLogo,
    startDate: '3rd June 2024',
    endDate: '5th July 2024',
    tags: ['AWS Bedrock', 'AWS DynamoDB', 'AWS Lambda', 'ExpressJS', 'NodeJS', 'ReactJS'],
    link: 'https://www.technotery.com',
  }
];

const Experience = () => {
  return (
    <section className="experience-section experience-page" id="experience">
      <h1>Professional Experience</h1>
      <p>My little journey into the real world!!!</p>
      <div className="experience-container">
        {experienceData.map((experience, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-title">
                <h3>{experience.name}</h3>
                <a href={experience.link} target="_blank" rel="noopener noreferrer">
                  <img src={linkIcon} alt="Link" className="link-icon" />
                </a>
              </div>
              <p><em>{experience.startDate} - {experience.endDate}</em></p>
            </div>
            <h4>{experience.position}</h4>
            <div className="experience-details">
              <div className="experience-info">
                <ul>
                  {experience.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <div className="experience-tags">
                  {experience.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="experience-logo">
                <img src={experience.image} alt={experience.name} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
