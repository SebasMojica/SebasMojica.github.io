import React from 'react';
import { Link } from 'react-router-dom';
import AsciiText from './AsciiText.jsx';
import DecryptedText from './DecryptedText.jsx';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-header">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-12 text-center">
                <AsciiText 
                    text="ABOUT"
                    asciiFontSize={8}
                    textFontSize={100}
                    textColor="#5a8dff"
                    planeBaseHeight={15}
                    enableWaves={true}
                  />
              <div className="about-header-content">
                <h1 className="page-title">About Sebastian</h1>
                <p className="page-subtitle">
                  <DecryptedText 
                    text="Get to know the person behind the code"
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
      

      {/* Main About Content */}
      <section className="about-content">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <div className="about-image">
                <img 
                  src="images/sebas-taking-a-pic.webp" 
                  alt="Sebastian Mojica" 
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-2" data-aos="fade-up" data-aos-delay="100">
              <div className="about-text-box">
                <div className="about-text">
                  <h2>Who Is Sebastian Mojica?</h2>
                  <p>
                    I'm a Computer Science student at the University of San Diego, focused on building
                    secure systems and practical AI workflows for cybersecurity applications.
                  </p>

                  <h3>Education Path</h3>
                  <p>
                    B.A. in Computer Science expected in May 2026, followed by a planned M.S. in
                    Cyber Security expected in Fall 2026. I pair theory with implementation by
                    building production-style systems and validating them in my home lab.
                  </p>

                  <h3>Cybersecurity Focus</h3>
                  <p>
                    My work centers on penetration testing methodology, network segmentation,
                    IDS/IPS deployment, and AI-supported threat analysis. I regularly use tools such
                    as Kali Linux, Burp Suite, Wireshark, Nmap/Zenmap, Hashcat, Snort, and Suricata.
                  </p>

                  <h3>Engineering Interests</h3>
                  <p>
                    I enjoy designing systems that are both defensible and observable: API validation,
                    attack-chain graphing, and retrieval pipelines for faster triage and reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center" data-aos="fade-up">
              <h2 className="section-title">Technical Skills</h2>
              <p className="section-subtitle">
                Technologies and tools I work with
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 col-lg-11 mx-auto">
              <div className="skills-content-box">
                <div className="row">
                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="skill-category">
                      <h3>Security Tools</h3>
                      <div className="skill-tags">
                        <span className="skill-tag">Burp Suite</span>
                        <span className="skill-tag">Wireshark</span>
                        <span className="skill-tag">Kali Linux</span>
                        <span className="skill-tag">Suricata</span>
                        <span className="skill-tag">pfSense</span>
                        <span className="skill-tag">Nmap/Zenmap</span>
                        <span className="skill-tag">Hashcat</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="skill-category">
                      <h3>Network Security</h3>
                      <div className="skill-tags">
                        <span className="skill-tag">VLANs</span>
                        <span className="skill-tag">Subnetting</span>
                        <span className="skill-tag">Firewalls</span>
                        <span className="skill-tag">IDS/IPS</span>
                        <span className="skill-tag">VPN</span>
                        <span className="skill-tag">Active Directory</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="skill-category">
                      <h3>AI, Dev & Data</h3>
                      <div className="skill-tags">
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">FastAPI</span>
                        <span className="skill-tag">Neo4j</span>
                        <span className="skill-tag">ChromaDB</span>
                        <span className="skill-tag">Next.js</span>
                        <span className="skill-tag">Git/GitHub</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center" data-aos="fade-up">
              <h2 className="section-title">Certifications & Frameworks</h2>
              <p className="section-subtitle">In progress and actively applied in projects</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 col-lg-11 mx-auto">
              <div className="resume-content-box">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="resume-info">
                      <h3>Current Certification Track</h3>
                      <p className="resume-subtitle">CompTIA Security+ | CompTIA AI Security+ | CEH</p>
                      <p className="resume-description">
                        I am actively preparing for industry certifications while applying core frameworks
                        like MITRE ATT&CK and OWASP Top 10 in real project pipelines and lab assessments.
                      </p>
                      <div className="resume-features">
                        <div className="feature-item"><i className="icon-check"></i><span>MITRE ATT&CK mapping workflows</span></div>
                        <div className="feature-item"><i className="icon-check"></i><span>OWASP-driven web app testing</span></div>
                        <div className="feature-item"><i className="icon-check"></i><span>Pen testing methodology and reporting</span></div>
                        <div className="feature-item"><i className="icon-check"></i><span>Cryptography and PKI implementation labs</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 text-center">
                    <div className="resume-download">
                      <div className="resume-icon"><i className="icon-shield"></i></div>
                      <p className="resume-note">Contact me for the latest one-page resume and full project brief.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center" data-aos="fade-up">
              <h2 className="section-title">How I Work</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 col-lg-11 mx-auto">
              <div className="values-content-box">
                <div className="row">
                  <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="value-card">
                      <div className="value-icon">
                        <i className="icon-lightbulb"></i>
                      </div>
                      <h3>Research to Implementation</h3>
                      <p>
                        I turn classroom and research concepts into deployable tools, then refine
                        based on measured outcomes from tests and lab scenarios.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="value-card">
                      <div className="value-icon">
                        <i className="icon-users"></i>
                      </div>
                      <h3>Security by Design</h3>
                      <p>
                        I focus on preventive controls first: strong validation, segmented networks,
                        least privilege, and clear reporting for faster remediation.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="value-card">
                      <div className="value-icon">
                        <i className="icon-target"></i>
                      </div>
                      <h3>Continuous Improvement</h3>
                      <p>
                        I treat every project as a learning loop: build, test, break, improve,
                        and document so teams can move faster with confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center" data-aos="fade-up">
              <h2>Ready to Connect?</h2>
              <p>
                Open to internships, capstone collaborations, and early-career security engineering roles.
              </p>
              <div className="cta-buttons">
                <Link to="/projects" className="btn btn-primary btn-lg">
                  View My Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
