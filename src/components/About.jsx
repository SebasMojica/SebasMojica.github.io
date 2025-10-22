import React from 'react';
import AsciiText from './AsciiText.jsx';

const About = () => {
  return (
    <div className="site-section cta-big-image border-bottom" id="about-section">
      <div className="container" style={{paddingTop: '30px'}}>
        <div className="row">
          <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
            <img src="images/sebas-taking-a-pic.webp" alt="Image of you of something fun" className="img-fluid" />
          </div>
          <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-4">
              <AsciiText text="WOW!" className="mb-3 text-uppercase" />
              <h2 className="sr-only">Who Is Sebastian Mojica?</h2>
              <p>
                I'm a first-generation college student and the proud son of two immigrant parents. As the eldest of four
                siblings, I've grown into leadership roles both at home and in my academic life.
              </p>

              <h2>Professional Background</h2>
              <p>
                I'm currently pursuing a degree in Computer Science with a strong interest in cybersecurity and
                networking. I'm driven by curiosity and motivated by hands-on learning, problem-solving, and collaboration.
              </p>

              <h2>Hobbies & Personal Motto</h2>
              <p>
                My motto? "If it's not a little dangerous, it's probably not that fun." I enjoy physically and mentally
                challenging activities like wrestling, boxing, rock climbing, hiking, and night walks that push me outside my
                comfort zone.
              </p>

              <p>
                I believe growth happens when you're uncomfortable — so I'm always seeking new challenges that test my
                limits and expand my perspective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
