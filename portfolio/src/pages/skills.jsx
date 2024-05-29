import '../styles/skills.css';

const skillsData = {
  Languages: ['C++', 'Java', 'JavaScript', 'Python'],
  Frameworks: ['React', 'Node.js', 'Express'],
  Databases: ['MongoDB', 'SQL*Plus'],
  Tools: ['VS Code', 'Postman','Git','MongoDBCompass','Jupyter Notebook','IntelliJ Idea','Matlab','Google Colab']
};

const Skills = () => {
  return (
    <section className="skills-section skills-page" id='skills'>
      <h1>My Skills</h1>
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
