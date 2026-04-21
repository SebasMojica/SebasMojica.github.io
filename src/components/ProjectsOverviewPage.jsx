import React from 'react';
import { Link } from 'react-router-dom';
import AsciiText from './AsciiText.jsx';
import DecryptedText from './DecryptedText.jsx';
import './ProjectsOverviewPage.css';

const ProjectsOverviewPage = () => {
  return (
    <div className="projects-overview-page">
      {/* Header Section */}
      <section className="projects-overview-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="projects-overview-header-content">
                <div className="ascii-projects-title">
                  <AsciiText 
                    text="PROJECTS"
                    asciiFontSize={8}
                    textFontSize={100}
                    textColor="#5a8dff"
                    planeBaseHeight={5}
                    enableWaves={true}
                  />
                </div>
                <h1 className="page-title">My Projects</h1>
                <p className="page-subtitle">
                  <DecryptedText 
                    text="Security, software, and AI projects with real implementation depth"
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

      {/* Category Cards Section */}
      <section className="category-cards-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10 col-lg-11 mx-auto">
              <div className="category-cards-container">
                <div className="row">
                  {/* Cybersecurity Projects Card */}
                  <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                    <Link to="/projects/cybersecurity" className="category-card">
                      <div className="category-card-content">
                        <div className="category-icon">
                          <i className="icon-shield"></i>
                        </div>
                        <h3 className="category-title">Cybersecurity</h3>
                        <p className="category-description">
                          Penetration testing, home-lab infrastructure, network defense,
                          and cryptography / PKI implementation projects.
                        </p>
                        <div className="category-link">
                          View Projects <i className="icon-arrow-right"></i>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Software Engineering Projects Card */}
                  <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                    <Link to="/projects/software-engineering" className="category-card">
                      <div className="category-card-content">
                        <div className="category-icon">
                          <i className="icon-code"></i>
                        </div>
                        <h3 className="category-title">Software Engineering</h3>
                        <p className="category-description">
                          Object-oriented architecture, testing strategy, modular design,
                          and collaborative engineering workflows.
                        </p>
                        <div className="category-link">
                          View Projects <i className="icon-arrow-right"></i>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* AI Projects Card */}
                  <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                    <Link to="/projects/ai" className="category-card">
                      <div className="category-card-content">
                        <div className="category-icon">
                          <i className="icon-cog"></i>
                        </div>
                        <h3 className="category-title">AI Projects</h3>
                        <p className="category-description">
                          Computer vision model training, YOLO fine-tuning, and AI-enabled
                          security analysis workflows.
                        </p>
                        <div className="category-link">
                          View Projects <i className="icon-arrow-right"></i>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="projects-overview-cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center" data-aos="fade-up">
              <h2>Interested in Working Together?</h2>
              <p>
                If you're hiring for security engineering, SOC-adjacent analyst, or AI security work,
                I'd love to connect.
              </p>
              <div className="cta-buttons">
                <Link to="/about" className="btn btn-primary btn-lg">
                  Learn More About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsOverviewPage;

