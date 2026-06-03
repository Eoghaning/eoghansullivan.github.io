import "./CV.css";

export default function CV() {
  return (
    <section id="cv" className="page-section fade-slide-in">
      <div className="page-inner">
        <div className="section-header cv-header">
          <h1>CV</h1>
        </div>

        <div className="download-heading">
          <span className="download-heading-text">View/Download CV</span>
        </div>

        <div className="cv-button-wrapper">
          <a href="/EoghanSullivan_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span>Open in Browser ↗</span>
          </a>
          <a href="/EoghanSullivan_CV.pdf" download className="btn-primary">
            <span>Download CV PDF ↓</span>
          </a>
        </div>

        <div className="cv-block">
          <h3 className="cv-block-title">Education & Experience</h3>
          <div className="cv-item cv-edu-row">
            <div className="cv-edu-text">
              <div className="cv-item-year">September 2023 – May/June 2027 (expected)</div>
              <div className="cv-item-title">BSc Computer Science</div>
              <div className="cv-item-sub">Dublin City University (DCU)</div>
              <ul className="cv-bullets">
                <li><strong style={{ fontSize: "16px" }}>3rd Year Average:</strong> 2:1 (Second Class Honours, Upper Division)</li>
              </ul>
            </div>
            <img src="/I1.png" alt="DCU" className="cv-edu-img" />
          </div>
          <div className="cv-divider">________________________________________________________________________</div>
          <div className="cv-item cv-exp-row">
            <div className="cv-exp-header">
              <div className="cv-item-year">May 2026 – Nov 2026 (expected)</div>
              <div className="cv-item-title">Mobile Network Testing Intern</div>
              <div className="cv-item-sub">1GLOBAL</div>
            </div>
            <img src="/1G22.jpg" alt="1GLOBAL" className="cv-exp-img" />
            <ul className="cv-bullets">
              <li>Ran extensive tests on SIMs & eSIMs – calls, SMS, data, call forwarding, tethering, Wi-Fi speed, voicemail, barring, roaming, etc.</li>
              <li>Used Postman API for REST requests to create accounts, provision eSIMs, and debug provisioning issues.</li>
              <li>Filed detailed bug reports and tracked defects in Jira; analysed OCS CDR logs to verify call/SMS/data records.</li>
              <li>Handled number porting across countries – initiated ports, ran live test calls, and confirmed completion.</li>
            </ul>
            <div className="cv-tags">
              {["JavaScript", "Postman API", "Windows", "Mac", "Jira", "Debugging", "Testing", "Problem Solving", "Agile", "Teamwork", "Communication", "Technical Documentation", "Adaptability", "Critical Thinking"].map(tag => (
                <span key={tag} className="cv-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}