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
                    text="AI & Cybersecurity Engineer"
                    speed={75}
                    animateOn="view"
                    delay={1000}
                  />
                </p>
                <p className="hero-description">
                  I build secure, intelligent systems that combine penetration testing, attack-path
                  analysis, and LLM-assisted triage workflows. At the University of San Diego, I focus
                  on practical cybersecurity engineering through hands-on lab and production-oriented work.
                </p>
                <div className="hero-badges">
                  <span className="hero-badge">B.A. Computer Science - May 2026</span>
                  <span className="hero-badge">M.S. Cyber Security (Planned)</span>
                  <span className="hero-badge">CompTIA Security+ In Progress</span>
                </div>
                <div className="hero-buttons">
                  <Link to="/resume" className="btn btn-primary btn-lg">
                    View Resume
                  </Link>
                  <Link to="/about" className="btn btn-primary btn-lg">
                    Learn More About Me
                  </Link>
                  <Link to="/projects" className="btn btn-outline-primary btn-lg">
                    View My Projects
                  </Link>
                  <a
                    href="https://linkedin.com/in/sebastian-mojica-73352a253"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-lg"
                  >
                    LinkedIn
                  </a>
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
                <div className="stat-number">10+</div>
                <div className="stat-label">Security / AI Tools</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Core Security Projects</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="300">
              <div className="stat-item">
                <div className="stat-number">2023+</div>
                <div className="stat-label">Home Lab Uptime</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-item">
                <div className="stat-number">2025</div>
                <div className="stat-label">Capstone Start</div>
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
                Security engineering, AI-assisted analysis, and resilient system design
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
                        Execute web and network security assessments using Burp Suite, Nmap,
                        Kali Linux, and Wireshark to uncover exploitable weaknesses.
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
                        Design segmented environments with VLANs, pfSense firewall policy,
                        IDS/IPS deployment, and practical access control hardening.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="skill-card">
                      <div className="skill-icon">
                        <i className="icon-document"></i>
                      </div>
                      <h3>AI Security Workflows</h3>
                      <p>
                        Build MITRE ATT&CK and OWASP tagging pipelines with graph and vector
                        storage for rapid LLM/RAG-assisted triage and reporting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-snapshot-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center" data-aos="fade-up">
              <h2 className="section-title">Experience Snapshot</h2>
              <p className="section-subtitle">Recent resume-backed engineering work</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="experience-card">
                <h3>Adversys Security Dashboard</h3>
                <p>FastAPI + Neo4j + ChromaDB + Next.js</p>
                <span>2025 - Present</span>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="experience-card">
                <h3>Cybersecurity Home Lab</h3>
                <p>Kali, DVWA, OWASP BWA, pfSense, Snort, Suricata</p>
                <span>2023 - Present</span>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="experience-card">
                <h3>Applied Cryptography & PKI</h3>
                <p>OpenSSL, X.509, RSA, SSH auth, Hashcat, steghide</p>
                <span>2025</span>
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
                <img src="images/adversys-logo.png" alt="Adversys security dashboard logo" className="img-fluid rounded" />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="project-content">
                <h3>Adversys Security Dashboard</h3>
                <p>
                  A capstone platform that ingests pentest findings, enriches them with MITRE ATT&CK
                  and OWASP context, maps attack relationships in Neo4j, and powers LLM/RAG triage
                  with ChromaDB-backed retrieval.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">FastAPI</span>
                  <span className="tech-tag">Neo4j</span>
                  <span className="tech-tag">ChromaDB</span>
                  <span className="tech-tag">Next.js</span>
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
                Open to cybersecurity engineering, security analyst, and AI security opportunities.
                Let's build secure systems that scale.
              </p>
              <Link to="/about" className="btn btn-primary btn-lg">
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
