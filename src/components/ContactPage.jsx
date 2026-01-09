import React from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="page-title">Get In Touch</h1>
              <p className="page-subtitle">Let's start a conversation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="contact-card">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="contact-info">
                      <h2>Let's Connect</h2>
                      <p>
                        I'm always interested in hearing about new opportunities, 
                        exciting projects, or just having a conversation about technology 
                        and software development.
                      </p>
                      
                      <div className="contact-methods">
                        <div className="contact-method">
                          <div className="method-icon">
                            <i className="icon-envelope"></i>
                          </div>
                          <div className="method-content">
                            <h3>Email</h3>
                            <p>sebastian.mojica@example.com</p>
                          </div>
                        </div>
                        
                        <div className="contact-method">
                          <div className="method-icon">
                            <i className="icon-github"></i>
                          </div>
                          <div className="method-content">
                            <h3>GitHub</h3>
                            <p>github.com/sebastianmojica</p>
                          </div>
                        </div>
                        
                        <div className="contact-method">
                          <div className="method-icon">
                            <i className="icon-linkedin"></i>
                          </div>
                          <div className="method-content">
                            <h3>LinkedIn</h3>
                            <p>linkedin.com/in/sebastianmojica</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-6">
                    <div className="contact-form">
                      <h2>Send a Message</h2>
                      <form>
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            className="form-control"
                            required 
                          />
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="form-control"
                            required 
                          />
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="subject">Subject</label>
                          <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            className="form-control"
                            required 
                          />
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="message">Message</label>
                          <textarea 
                            id="message" 
                            name="message" 
                            rows="5" 
                            className="form-control"
                            required
                          ></textarea>
                        </div>
                        
                        <button type="submit" className="btn btn-primary btn-block">
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="contact-cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Ready to Work Together?</h2>
              <p>
                I'm always excited to take on new challenges and collaborate on interesting projects. 
                Whether you have a specific project in mind or just want to chat about technology, 
                I'd love to hear from you!
              </p>
              <div className="cta-buttons">
                <Link to="/projects" className="btn btn-primary btn-lg">
                  View My Projects
                </Link>
                <Link to="/about" className="btn btn-outline-primary btn-lg">
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

export default ContactPage;
