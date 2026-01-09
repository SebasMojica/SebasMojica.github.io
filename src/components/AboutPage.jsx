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
                <h1 className="page-title">  observe         </h1>
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
                    I'm a first-generation college student and the proud son of two immigrant parents. 
                    As the eldest of four siblings, I've grown into leadership roles both at home and 
                    in my academic life.
                  </p>

                  <h3>Cybersecurity Focus</h3>
                  <p>
                    I'm currently pursuing a degree in Computer Science with a specialized focus on 
                    cybersecurity and network security. My hands-on experience includes penetration testing 
                    with Burp Suite and Wireshark, setting up secure homelab environments with pfSense 
                    firewalls and Suricata IDS/IPS, and writing technical white papers on security 
                    recommendations for medium-sized businesses.
                  </p>

                  <h3>Hobbies & Personal Motto</h3>
                  <p>
                    My motto? "If it's not a little dangerous, it's probably not that fun." I enjoy 
                    physically and mentally challenging activities like wrestling, boxing, rock climbing, 
                    hiking, and night walks that push me outside my comfort zone.
                  </p>

                  <p>
                    I believe growth happens when you're uncomfortable — so I'm always seeking new 
                    challenges that test my limits and expand my perspective.
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
                        <span className="skill-tag">Homelab</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="skill-category">
                      <h3>Programming & Analysis</h3>
                      <div className="skill-tags">
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">Linux</span>
                        <span className="skill-tag">Technical Writing</span>
                        <span className="skill-tag">Git</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center" data-aos="fade-up">
              <h2 className="section-title">My Values</h2>
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
                      <h3>Continuous Learning</h3>
                      <p>
                        I'm always eager to learn new technologies and improve my skills. 
                        Technology evolves rapidly, and I make it a priority to stay current.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="value-card">
                      <div className="value-icon">
                        <i className="icon-users"></i>
                      </div>
                      <h3>Collaboration</h3>
                      <p>
                        I believe the best solutions come from working together. I enjoy 
                        collaborating with others and learning from different perspectives.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="value-card">
                      <div className="value-icon">
                        <i className="icon-target"></i>
                      </div>
                      <h3>Problem Solving</h3>
                      <p>
                        I love tackling complex problems and finding creative solutions. 
                        Every challenge is an opportunity to grow and improve.
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
                I'm always interested in meeting new people and discussing exciting projects. 
                Let's start a conversation!
              </p>
              <div className="cta-buttons">
                <Link to="/projects" className="btn btn-primary btn-lg">
                  View My Projects
                </Link>
                <Link to="/contact" className="btn btn-outline-primary btn-lg">
                  Get In Touch
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
