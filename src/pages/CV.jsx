export default function CV() {
  return (
    <section id="cv" className="page-section">
      <div className="page-inner">
        <div className="section-header">
          <h2 className="section-title">CV</h2>
          <p className="section-sub">Background & experience</p>
        </div>

        {/* Centered download button with extra gap */}
        <div className="cv-button-wrapper">
          <a href="/CV.pdf" download className="btn-primary">
            <span>Download Full CV</span>
            <span className="cv-download-arrow">↓</span>
          </a>
        </div>

        <div className="cv-grid">
          <div className="cv-block">
            <h3 className="cv-block-title">Education</h3>
            <div className="cv-item">
              <div className="cv-item-year">2023 – 2027</div>
              <div className="cv-item-title">BSc Computer Science</div>
              <div className="cv-item-sub">Dublin City University</div>
              <div className="cv-item-detail">Grade: 2.1</div>
            </div>
            <div className="cv-item">
              <div className="cv-item-year">2017 – 2023</div>
              <div className="cv-item-title">Leaving Certificate</div>
              <div className="cv-item-sub">St. Benildus College · 445 CAO Points</div>
            </div>
          </div>

          <div className="cv-block">
            <h3 className="cv-block-title">Experience</h3>
            <div className="cv-item">
              <div className="cv-item-year">Nov 2024 – May 2025</div>
              <div className="cv-item-title">Cinema Operative</div>
              <div className="cv-item-sub">Movies@Dundrum</div>
              <ul className="cv-bullets">
                <li>Managed ticket sales, handled hot foods, resolved customer queries, and maintained screening rooms</li>
                <li>Assisted customers to their allocated seats and supported VIP screenings</li>
                <li>Developed teamwork and time-management skills in a fast-paced environment</li>
              </ul>
            </div>
            <div className="cv-item">
              <div className="cv-item-year">Jan 2024 – Aug 2024</div>
              <div className="cv-item-title">Sales Assistant</div>
              <div className="cv-item-sub">Costcutters, Windy Arbour</div>
              <ul className="cv-bullets">
                <li>Processed till transactions, handled stock replenishment, and trained new staff</li>
                <li>Responsible for cleaning, maintaining the store, and other miscellaneous tasks</li>
                <li>Promoted to leadership within 2 months, managing opening and closing procedures</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}