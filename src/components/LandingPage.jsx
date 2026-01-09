import React from 'react';
import { Link } from 'react-router-dom';
import AsciiText from './AsciiText.jsx';
import DecryptedText from './DecryptedText.jsx';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-fluid">
          <div className="row align-items-center min-vh-100">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <div className="hero-content">
                <div className="hero-title-container">
                  <h1 className="hero-title">
                    Hi, I'm <span className="highlight">Sebastian Mojica</span>
                  </h1>
                </div>
                <p className="hero-subtitle">
                  <DecryptedText 
                    text="Cybersecurity Specialist & Penetration Tester"
                    speed={75}
                    animateOn="view"
                    delay={1000}
                  />
                </p>
                <p className="hero-description">
                  I specialize in identifying vulnerabilities, securing networks, and protecting 
                  systems through hands-on penetration testing and security analysis. Currently 
                  building expertise in network security, threat detection, and security architecture.
                </p>
                <div className="hero-buttons">
                  <Link to="/about" className="btn btn-primary btn-lg">
                    Learn More About Me
                  </Link>
                  <Link to="/projects" className="btn btn-outline-primary btn-lg">
                    View My Projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-2" data-aos="fade-up" data-aos-delay="100">
              <div className="hero-image">
                <AsciiText 
                      text="WOW"
                      enableWaves={true}
                      asciiFontSize={6}
                    />
                <img 
                  src="images/sebas-taking-a-pic.webp" 
                  alt="Sebastian Mojica" 
                  className="img-fluid rounded"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="100">
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Security Tools</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="300">
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Homelab Active</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="skills-preview-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center" data-aos="fade-up">
              <h2 className="section-title">What I Do</h2>
              <p className="section-subtitle">
                I specialize in creating robust, scalable applications using modern technologies
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 col-lg-11 mx-auto">
              <div className="skills-content-box">
                <div className="row">
                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="skill-card">
                      <div className="skill-icon">
                        <i className="icon-shield"></i>
                      </div>
                      <h3>Penetration Testing</h3>
                      <p>
                        Identifying vulnerabilities using Burp Suite, Wireshark, and Kali Linux 
                        to assess security posture and recommend improvements.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="skill-card">
                      <div className="skill-icon">
                        <i className="icon-network"></i>
                      </div>
                      <h3>Network Security</h3>
                      <p>
                        Designing secure networks with VLANs, pfSense firewalls, Suricata IDS/IPS, 
                        and implementing proper subnetting strategies.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="skill-card">
                      <div className="skill-icon">
                        <i className="icon-document"></i>
                      </div>
                      <h3>Security Analysis</h3>
                      <p>
                        Writing comprehensive white papers and technical documentation 
                        to communicate security findings and recommendations to stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Preview */}
      <section className="featured-project-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center" data-aos="fade-up">
              <h2 className="section-title">Featured Project</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="project-image">
                <img 
                  src="images/birthdayParadoxGraph.png" 
                  alt="Birthday Paradox Project" 
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="project-content">
                <h3>Birthday Paradox Simulator</h3>
                <p>
                  An interactive mathematical simulation that explores the probability 
                  of shared birthdays in groups of people. Built with JavaScript and HTML5 Canvas, 
                  this project demonstrates complex probability theory in an engaging, 
                  visual format.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">HTML5 Canvas</span>
                  <span className="tech-tag">Mathematics</span>
                </div>
                <Link to="/projects" className="btn btn-primary">
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center" data-aos="fade-up">
              <h2>Ready to Work Together?</h2>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
