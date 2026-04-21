import React from 'react';
import { Link } from 'react-router-dom';
import AsciiText from './AsciiText.jsx';
import DecryptedText from './DecryptedText.jsx';
import './CybersecurityProjectsPage.css';

const CybersecurityProjectsPage = () => {
  return (
    <div className="cybersecurity-projects-page">
      {/* Header Section */}
      <section className="projects-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="projects-header-content">
                <div className="ascii-projects-title">
                  <AsciiText 
                    text="CYBERSECURITY"
                    asciiFontSize={8}
                    textFontSize={100}
                    textColor="#5a8dff"
                    planeBaseHeight={5}
                    enableWaves={true}
                  />
                </div>
                <h1 className="page-title">Cybersecurity Projects</h1>
                <p className="page-subtitle">
                  <DecryptedText 
                    text="Penetration testing, network security, and vulnerability assessment"
                    speed={60}
                    animateOn="view"
                    delay={500}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empty State / Placeholder Section */}
      <section className="project-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="empty-state-content">
                <div className="empty-state-icon">
                  <i className="icon-shield"></i>
                </div>
                <h2 className="empty-state-title">Projects Coming Soon</h2>
                <p className="empty-state-description">
                  I'm currently working on several cybersecurity projects including penetration testing 
                  assessments, network security configurations, and vulnerability analysis. Check back soon 
                  to see my latest work!
                </p>
                <p className="empty-state-note">
                  Projects will be added here as they are completed. Each project will include detailed 
                  descriptions, methodologies, tools used, and key findings.
                </p>
                <div className="empty-state-actions">
                  <Link to="/projects" className="btn btn-primary btn-lg">
                    Back to Projects
                  </Link>
                  <Link to="/about" className="btn btn-outline-primary btn-lg">
                    Learn More About Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="projects-cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center" data-aos="fade-up">
              <h2>Interested in Working Together?</h2>
              <p>
                I'm always excited to take on new challenges and collaborate on interesting projects. 
                Let's discuss how we can work together!
              </p>
              <div className="cta-buttons">
                <Link to="/projects" className="btn btn-primary btn-lg">
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityProjectsPage;

