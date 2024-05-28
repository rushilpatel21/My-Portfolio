import '../styles/certificate.css';

const certificatesData = [
  {
    name: '1x Academic Excellence Certificate (Nirma University)',
    description: 'Awarded for scoring 9.43 SGPA in SEM - III',
  },
  {
    name: '2x Certificate of Scholar (Nirma University)',
    description: 'Awarded for scoring 8.57 and 8.83 SGPA in SEM - I and II respectively',
  }
];

const Certificates = () => {
  return (
    <section className="certificates-section certificates-page" id="certificates">
      <h1>My Certificates</h1>
      <div className="certificates-container">
        {certificatesData.map((certificate, index) => (
          <div key={index} className="certificate-card">
            <h3>{certificate.name}</h3>
            <p><em>{certificate.description}</em></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
