import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Education */}
          <div className="career-info-box education-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Application (MCA)</h4>
                <h5>Dayananda Sagar College of Engineering</h5>
              </div>
              <h3>Dec 2024 - Present</h3>
            </div>
            <p>
              Currently pursuing MCA (CGPA: 8.37/10.0).
            </p>
          </div>

          {/* Education */}
          <div className="career-info-box education-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <h5>Dr. MPS Group of Institutions College of Business Studies</h5>
              </div>
              <h3>June 2019 - June 2022</h3>
            </div>
            <p>
              Completed BCA (Percentage: 66.28). Built strong fundamentals in Software Engineering, OOP, DSA, and DBMS.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
