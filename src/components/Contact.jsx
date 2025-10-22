import React from 'react';

const Contact = () => {
  return (
    <section className="site-section" id="contact-section" data-aos="fade">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Contact Me</h2>
          </div>
        </div>
        <div className="row mb-5 text-center">
          <div className="col-md-12 text-center">
            <p className="mb-0">
              <span className="icon-mail_outline d-block h4 text-primary"></span>
              <span>sebmojica@gmail.com | smojica@sandiego.edu</span>
            </p>
          </div>

          <div className="col-md-12 text-center">
            <p className="mb-0">
              <span className="icon-graduation-cap d-block h4 text-primary"></span>
              <a href="Resume.html">Resume</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
