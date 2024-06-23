import '../styles/certificate.css';

const certificatesData = [
  {
    name: '1x Academic Excellence Certificate (Nirma University)',
    description: 'Awarded for scoring 9.43 SGPA in SEM - III',
  },
  {
    name: '3x Certificate of Scholar (Nirma University)',
    description: 'Awarded for scoring 8.57, 8.83 and 8.67 SGPA in SEM - I, II and III respectively',
  }
];

const Certificates = () => {
  return (
    <section className="certificates-section certificates-page" id="certificates">
      <h1>Relevant Certificates</h1>
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
