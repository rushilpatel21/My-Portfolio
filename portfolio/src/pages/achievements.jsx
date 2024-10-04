import '../styles/achievements.css';

const achievementsData = [
  {
    name: 'Selected for Amazon ML Summer School 2024, ranking in the top 3000 out of approximately 85,000 participants.',
  },
  {
    name: 'Attained Pupil Rank (Peak Rating: 1305) on Codeforces.',
  },
  {
    name: 'Ranked 887 out of 34,718 participants in Codeforces Round 974 (Div. 3) contest.',
  },
  {
    name: 'Core Member of Google Developer Group\'s Cloud/CyberSecurity Team (Nirma University).',
  },
  {
    name: 'Solved 500+ Data Structure problems on coding platforms like LeetCode, Codeforces, and Vjudge.',
  },
  {
    name: 'Achieved 7th position in a coding contest at Nirma University out of 222 participants.',
  },
  {
    name: 'Placed 8th and 16th in two Codeforces contests organized by Code Adda, Nirma University.',
  }
];

const Achievements = () => {
  return (
    <section className="achievements-section achievements-page" id="achievements">
      <h1>Relevant Achievements</h1>
      <div className="achievements-container">
        {achievementsData.map((achievement, index) => (
          <div key={index} className="achievements-card">
            <h3>{index + 1}. {achievement.name}</h3>
            <p><em>{achievement.description}</em></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
