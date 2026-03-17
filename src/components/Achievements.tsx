import "./styles/Career.css";

const Achievements = () => {
  return (
    <div className="career-section section-container" id="achievements">
      <div className="career-container">
        <h2>
          My <span>Achievements &</span>
          <br /> Hackathons
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Finalist - FedEx SMART Hackathon</h4>
                <h5>IIT Madras</h5>
              </div>
              <h3>Jan 2025</h3>
            </div>
            <p>
              Selected as a finalist for developing a Green Routing solution to reduce logistics carbon footprint.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Claude Solve-A-Thon (Tantra Fiesta'25)</h4>
                <h5>IIIT Nagpur</h5>
              </div>
              <h3>Oct 2025</h3>
            </div>
            <p>
              Participated in a national-level AI hackathon as part of Team 404 Squad.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Brain Waves Hackathon</h4>
                <h5>MCA Department DSCE</h5>
              </div>
              <h3>Nov 2025</h3>
            </div>
            <p>
              Organized and coordinated Brain Waves Hackathon 2025, managing planning, student participation, and event execution.
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Achievements;
