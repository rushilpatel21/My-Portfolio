import '../styles/skills.css';

const skillsData = {
  Languages: ['C++', 'Java', 'JavaScript', 'Python', 'C'],
  Frameworks: ['ReactJS', 'NodeJS', 'ExpressJS'],
  Databases: ['MongoDB', 'SQL*Plus', 'AWS DynamoDB'],
  "Cloud Services": ['AWS Bedrock', 'AWS Lambda', 'Render', 'Vercel'],
  Tools: ['VS Code', 'Postman','Git','MongoDBCompass','Jupyter Notebook','Google Colab']
};

const Skills = () => {
  return (
    <section className="skills-section skills-page" id='skills'>
      <h1>Technical Skills</h1>
      <p>A showcase of my technical abilities and tools I&apos;ve worked with.</p>
      <div className="skills-container">
        {Object.keys(skillsData).map((category, index) => (
          <div key={index} className="skills-category">
            <h2 className='skills-category'>{category}</h2>
            <div className="skills-list">
              {skillsData[category].map((skill, index) => (
                <span key={index} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
