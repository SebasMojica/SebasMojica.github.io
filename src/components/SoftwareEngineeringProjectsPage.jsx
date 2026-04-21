import React from 'react';
import { Link } from 'react-router-dom';
import AsciiText from './AsciiText.jsx';
import DecryptedText from './DecryptedText.jsx';
import './SoftwareEngineeringProjectsPage.css';

const SoftwareEngineeringProjectsPage = () => {
  return (
    <div className="software-engineering-projects-page">
      {/* Header Section */}
      <section className="projects-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="projects-header-content">
                <div className="ascii-projects-title">
                  <AsciiText 
                    text="SOFTWARE ENGINEERING"
                    asciiFontSize={8}
                    textFontSize={100}
                    textColor="#5a8dff"
                    planeBaseHeight={5}
                    enableWaves={true}
                  />
                </div>
                <h1 className="page-title">Software Engineering Projects</h1>
                <p className="page-subtitle">
                  <DecryptedText 
                    text="Object-oriented design, system architecture, and software development"
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

      {/* Birthday Paradox Project */}
      <section className="project-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <div className="project-images">
                <img 
                  src="images/birthdayParadoxGraph.png" 
                  alt="Birthday Paradox Graph" 
                  className="img-fluid mb-3 rounded"
                />
                <img 
                  src="images/BirthdayParadoxOutput.png" 
                  alt="Birthday Paradox Output" 
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-2" data-aos="fade-up" data-aos-delay="100">
              <div className="project-content">
                <h2 className="project-title">
                  <DecryptedText 
                    text="Birthday Paradox Simulator" 
                    animateOn="view" 
                    speed={75}
                  />
                </h2>
                
                <h3>Security Analysis</h3>
                <p>
                  This simulator demonstrates statistical analysis and probability modeling, skills 
                  directly applicable to cybersecurity risk assessment and threat modeling. 
                  Understanding probability distributions is crucial for evaluating security 
                  risks and designing robust defense mechanisms.
                </p>

                <h3>Functionality</h3>
                <p>
                  The program generates lists of random birthdays and runs multiple simulations to check for duplicates.
                  Each batch size increases incrementally from 5 to 100, with 20 experiments per group size. It outputs 
                  the percentage of simulations in which duplicate birthdays were found.
                </p>

                <h3>My Role</h3>
                <p>
                  I was responsible for developing the <strong>Trial</strong>, <strong>Experiment</strong>, and
                  <strong>Simulator</strong> classes. I also wrote unit tests to validate each component and collaborated
                  with a partner who implemented the birthday generator.
                </p>

                <h3>Key Takeaways</h3>
                <ul>
                  <li>Introduced to SOLID principles in object-oriented programming</li>
                  <li>First experience with test-driven development (TDD)</li>
                  <li>Learned collaborative version control with GitHub, including pull requests, branching, and code reviews</li>
                </ul>

                <div className="project-tech">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">Risk Analysis</span>
                  <span className="tech-tag">Statistical Modeling</span>
                  <span className="tech-tag">TDD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elevator Simulator Project */}
      <section className="project-section alt">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <div className="project-content">
                <h2 className="project-title">
                  <DecryptedText 
                    text="Elevator Simulator" 
                    animateOn="view" 
                    speed={75}
                  />
                </h2>
                
                <h3>System Architecture</h3>
                <p>
                  This project showcases system design principles that are fundamental to cybersecurity 
                  infrastructure. The elevator scheduling algorithms demonstrate concepts of resource 
                  management, access control, and system optimization - all critical components in 
                  designing secure, efficient systems.
                </p>

                <h3>Features</h3>
                <ul>
                  <li><strong>Elevator Types:</strong> Standard, Express, Freight, and Penthouse — each with specific constraints and behaviors.</li>
                  <li><strong>Schedulers:</strong> Simple (first available) and Complex (most efficient based on location and availability).</li>
                  <li>Elevators respond to pickup/drop-off calls and execute movement round-by-round until all requests are fulfilled.</li>
                </ul>

                <h3>Design Approach</h3>
                <p>
                  Elevators extend from an abstract base class that defines shared properties and behaviors. Each scheduler
                  implements a shared interface but executes call assignment differently. Calls are encapsulated in their
                  own class, making the logic modular and maintainable.
                </p>

                <h3>My Role</h3>
                <p>
                  I implemented all elevator logic, developed and tested the Complex Scheduler, and led the refactoring
                  effort for the Call class structure. I also helped resolve merge conflicts and conducted code reviews during
                  collaboration.
                </p>

                <h3>Key Takeaways</h3>
                <ul>
                  <li>Applied SOLID principles and abstraction effectively</li>
                  <li>Practiced test-driven development at scale</li>
                  <li>Improved proficiency in Git workflows and team collaboration</li>
                </ul>

                <div className="project-tech">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">System Design</span>
                  <span className="tech-tag">Access Control</span>
                  <span className="tech-tag">TDD</span>
                </div>

                <a 
                  href="https://github.com/usd-comp-305/project-03-taylor-erickson-sebastian-mojica" 
                  target="_blank"
                  className="btn btn-primary"
                  rel="noopener noreferrer"
                >
                  <i className="icon-github"></i> View Project on GitHub
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-2" data-aos="fade-up" data-aos-delay="100">
              <div className="project-images">
                <img 
                  src="images/ElevatorRound01.png" 
                  alt="Elevator Simulation Round 1" 
                  className="img-fluid mb-3 rounded"
                />
                <img 
                  src="images/ElevatorRound05.png" 
                  alt="Elevator Simulation Round 5" 
                  className="img-fluid mb-3 rounded"
                />
                <img 
                  src="images/ElevatorRound10.png" 
                  alt="Elevator Simulation Round 10" 
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Game Simulator Project */}
      <section className="project-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <div className="project-images">
                <img 
                  src="images/GoFish_demo.png" 
                  alt="Go Fish card game Demo" 
                  className="img-fluid mb-3 rounded"
                />
                <img 
                  src="images/Rummy_demo.png" 
                  alt="Rummy card game Demo" 
                  className="img-fluid mb-3 rounded"
                />
                <img 
                  src="images/CardGame_UML.png" 
                  alt="UML overview of Card Game Simulator" 
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-2" data-aos="fade-up" data-aos-delay="100">
              <div className="project-content">
                <h2 className="project-title">
                  <DecryptedText 
                    text="Card Game Simulator" 
                    animateOn="view" 
                    speed={75}
                  />
                </h2>
                
                <h3>Security Design Patterns</h3>
                <p>
                  This project demonstrates modular design principles and behavioral patterns that are 
                  essential in cybersecurity architecture. The separation of concerns between game 
                  behaviors and player behaviors mirrors security frameworks where different security 
                  controls and policies can be independently managed and updated.
                </p>
                <p>
                  We already have two games that one can play, a simple Go-Fish card game, and a Rummy card game. But with
                  this program, any card game can be created using the Object-oriented design philosophy of our project.
                </p>

                <h3>Design Approach</h3>
                <p>
                  We decided on a card game simulator in order to demonstrate the core concepts of Object-Oriented
                  Programming. We developed our code according to Test driven development using Mockito as well as JUnit, 
                  and applied our SOLID principles.
                </p>
                <p>
                  We implemented several design patterns into our program. We used the Factory Pattern to create a deck 
                  of cards and the simulator uses a Strategy Pattern to plug in different game logic. Each game defines 
                  its own `GameBehavior` and `PlayerBehavior` strategies. We use Dependency Injection to apply the logic 
                  into CardGame.
                </p>

                <h3>My Role</h3>
                <p>
                  I was responsible for creating the class stubs and starting the TDD for each part of the project. I mostly
                  focused on implementing the logic for the Deck Of Cards, and the logic behind the participants in the game. 
                  I had to make sure that each participant could reliably take in the behaviors of whatever a developer might 
                  want in it using Dependency Injection. I was also in charge for a lot of the testing and debugging.
                </p>

                <h3>Key Takeaways</h3>
                <ul>
                  <li>Applied SOLID principles and abstraction effectively</li>
                  <li>Practiced test-driven development at scale using Mockito</li>
                  <li>Improved proficiency in Git workflows and team collaboration</li>
                  <li>Applied Design Patterns such as Factory pattern and Strategy Pattern</li>
                  <li>Used Dependency Injection for game and player behaviors</li>
                  <li>Creating and planning out a design using UML and PlantUML</li>
                  <li>Using proper documentation such as a README and Javadocs</li>
                </ul>

                <div className="project-tech">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">Security Patterns</span>
                  <span className="tech-tag">Modular Design</span>
                  <span className="tech-tag">UML</span>
                </div>

                <a 
                  href="https://github.com/usd-comp-305/project-04-taylor-iby-sebastian" 
                  target="_blank"
                  className="btn btn-primary"
                  rel="noopener noreferrer"
                >
                  <i className="icon-github"></i> View Project on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section className="presentation-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center" data-aos="fade-up">
              <h2 className="section-title">Card Game Overview Presentation</h2>
              <div className="presentation-container">
                <iframe
                  src="https://docs.google.com/presentation/d/e/2PACX-1vRFLTP-leg9ET0Izu0b3Jq3sFtKxQehMg9ckumcgtur88i6RcYmN5MfhUmtGYKofQ/pubembed?start=false&loop=true&delayms=5000"
                  frameBorder="0" 
                  width="960" 
                  height="569" 
                  allowFullScreen 
                  className="presentation-iframe"
                  title="Card Game Overview Presentation"
                />
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
                  Back to Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareEngineeringProjectsPage;

