import React from 'react';
import { Link } from 'react-router-dom';
import AsciiText from './AsciiText.jsx';
import DecryptedText from './DecryptedText.jsx';
import './AIProjectsPage.css';

const AIProjectsPage = () => {
  return (
    <div className="ai-projects-page">
      {/* Header Section */}
      <section className="projects-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="projects-header-content">
                <div className="ascii-projects-title">
                  <AsciiText 
                    text="AI PROJECTS"
                    asciiFontSize={8}
                    textFontSize={100}
                    textColor="#5a8dff"
                    planeBaseHeight={5}
                    enableWaves={true}
                  />
                </div>
                <h1 className="page-title">AI Projects</h1>
                <p className="page-subtitle">
                  <DecryptedText 
                    text="Machine learning, artificial intelligence, and data science"
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

      {/* CNN drug classification project */}
      <section className="project-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="project-images">
                <img 
                  src="/images/cnn_images/cnn_computer_vision_layers.png" 
                  alt="CNN Computer Vision Layers" 
                  className="img-fluid mb-3 rounded"
                />
                <img 
                  src="/images/cnn_images/cnn_data_split_info.png" 
                  alt="CNN Data Split Info" 
                  className="img-fluid mb-3 rounded"
                />
                <img 
                  src="/images/cnn_images/CNN_model_comparison.png" 
                  alt="CNN Model Comparison" 
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-1" data-aos="fade-up" data-aos-delay="100">
              <div className="project-content">
                <div className="project-title-wrapper">
                  <h2 className="project-title">
                    <DecryptedText 
                      text="CNN drug classification" 
                      animateOn="view" 
                      speed={75}
                    />
                  </h2>
                  <a 
                    href="https://github.com/SebasMojica/Comp351ComputerVisionFinal.git" 
                    target="_blank"
                    className="project-github-link"
                    rel="noopener noreferrer"
                    aria-label="View project on GitHub"
                  >
                    <i className="icon-github"></i>
                  </a>
                </div>
                
                <h3>Overview</h3>
                <p>
                  This project uses a Convolutional Neural Network (CNN) to classify drugs based on the label of the drug.
                  This project was a group project with 3 other students for our final project in our COMP 351 intro to AI course at the Univeristy of San Diego.
                  This project focuses on developing a computer vision model capable of detecting and identifying drug names from images of pharmaceutical packaging. By automating the process of locating and reading drug names, this system could support applications such as:
                </p>
                <ul>
                  <li>Pharmacy inventory management</li>
                  <li>Counterfeit drug detection</li>
                  <li>Automated label verification for hospitals and supply chains</li>
                </ul>
                <p>
                  The core motivation for this project was to apply the Artificial Intelligence (AI) and Deep Learning techniques studied in class to a practical, real-world application within healthcare and pharmacy.
                  The specific objectives of this project were:
                </p>
                <ul>
                  <li>To implement and train a deep learning model, specifically a Convolutional Neural Network (CNN), for the task of Drug Name Recognition</li>
                  <li>To demonstrate proficiency with industry-standard deep learning frameworks, including TensorFlow (the computational engine) and Keras (the high-level API).</li>
                  <li>To systematically evaluate how architectural changes and regularization techniques, such as Dropout, impact model performance.</li>
                </ul>

                <h3>Data Set</h3>
                <p>
                  The data set we used was  <a href="https://www.kaggle.com/datasets/pkdarabi/the-drug-name-detection-dataset" target="_blank" rel="noopener noreferrer">Drug Name Detection Dataset</a> created by <i>Pk Darabi</i> on Kaggle.

                  The data set contained Approximately 1,823 annotated images of pharmaceutical packaging,  which were composed of images of medicine boxes, bottles, and blister packs.
                  
                  The data set was split into:
                </p>
                <ul>
                  <li>a training set, which contained 1276 images and labels</li>
                  <li>a validation set, which contained 365 images and labels</li>
                  <li>a testing set, which contained 182 images and labels</li>
                </ul>

                <h3>Model Architecture</h3>
                <p>
                  Our final model architecture was a Convolutional Neural Network (CNN) with the following layers:
                </p>
                <ul>
                  <li>a convolutional layer with 32 filters, a kernel size of 3x3, and a stride of 1</li>
                  <li>a max pooling layer with a pool size of 2x2</li>
                  <li>a dropout layer with a dropout rate of 0.3</li>
                  <li>a convolutional layer with 32 filters, a kernel size of 3x3, and a stride of 1</li>
                  <li>a max pooling layer with a pool size of 2x2</li>
                  <li>a dropout layer with a dropout rate of 0.3</li>
                  <li>a convolutional layer with 128 filters, a kernel size of 3x3, and a stride of 1</li>
                  <li>a max pooling layer with a pool size of 2x2</li>
                  <li>a dropout layer with a dropout rate of 0.25</li>
                </ul>
                <p>
                  The model was trained for 10 epochs with a batch size of 46.
                  The model was evaluated on the testing set and the results were as follows:
                </p>
                <ul>
                  <li>Validation Accuracy: 0.7005</li>
                  <li>Validation Loss: 0.8374</li>
                </ul>

                <h3>My Role</h3>
                <p>
                  I was responsible for implementing the model architecture and training the model, as well as evaluating the model and writing the report.
                  I was also responsible for uploading, and maintaining the code on GitHub.
                </p>

                <h3>Key Takeaways</h3>
                <ul>
                  <li>Computer Vision and Deep Learning</li>
                  <li>TensorFlow and Keras</li>
                  <li>Convolutional Neural Networks</li>
                </ul>

                <div className="project-tech">
                  <span className="tech-tag">TensorFlow</span>
                  <span className="tech-tag">Keras</span>
                  <span className="tech-tag">Computer Vision</span>
                  <span className="tech-tag">Deep Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empty State / Placeholder Section */}
      <section className="project-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="empty-state-content">
                <div className="empty-state-icon">
                  <i className="icon-cog"></i>
                </div>
                <h2 className="empty-state-title">Projects Coming Soon</h2>
                <p className="empty-state-description">
                  I'm currently working on several AI and machine learning projects. Check back soon 
                  to see my latest work in artificial intelligence, neural networks, and data science!
                </p>
                <p className="empty-state-note">
                  Projects will be added here as they are completed. Each project will include detailed 
                  descriptions, methodologies, models used, and key insights.
                </p>
                <div className="empty-state-actions">
                  <Link to="/projects" className="btn btn-primary btn-lg">
                    Back to Projects
                  </Link>
                  <Link to="/about" className="btn btn-outline-primary btn-lg">
                    Learn More About Me
                  </Link>
                </div>
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
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get In Touch
                </Link>
                <Link to="/projects" className="btn btn-outline-primary btn-lg">
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIProjectsPage;

