import React from 'react';
import './ResumePage.css';

const ResumePage = () => {
  return (
    <div className="resume-page">
      <section className="resume-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1>Resume</h1>
              <p>
                Download the latest 2026 resume or preview the web version.
              </p>
              <div className="resume-actions">
                <a
                  href="/files/Sebastian_Mojica_Resume_2026.pdf"
                  download
                  className="btn btn-primary btn-lg"
                >
                  <i className="icon-file-download"></i> Download PDF
                </a>
                <a
                  href="/Resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-lg"
                >
                  View Web Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
