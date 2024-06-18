import '../styles/education.css';
import nirmaLogo from '../assets/nirma.png';

const educationData = [
  {
    university: 'Institute of Technology, Nirma University',
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    year: '2022-2026',
    coursework: ['Introduction to AI & ML', 'Data Structures & Algorithm', 'Object Oriented Programming', 'Database Management System', 'Operating System', 'Computer Architecture', 'Data Communication', 'Mathematics', 'Statistics'],
    logo: nirmaLogo,
    gpa: '8.95',
  }
];

const Education = () => {
  return (
    <section className="education-section education-page" id="education">
      <h1>My Education</h1>
      <div className="education-container">
        {educationData.map((education, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <div>
                <h3>{education.university}</h3>
                <p><em>{education.degree} <br></br> {education.year} </em></p>
              </div>
              <p>GPA: {education.gpa}</p>
            </div>
            <div className="education-details">
              <div className="education-info">
                <h4>Related Coursework</h4>
                <ul>
                  {education.coursework.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
              <div className="education-logo">
                <img src={education.logo} alt={education.university} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
