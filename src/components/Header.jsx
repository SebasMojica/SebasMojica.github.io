import React from 'react';
import { Link } from 'react-router-dom';
import TextType from './TextType';

const Header = () => {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-xl-2">
              <Link to="/" className="logo-link">
              <TextType 
                  text={["Mojica"]}
                  typingSpeed={75}
                  showCursor={true}
                  cursorCharacter="|"
              />
              </Link>
            </div>

            <div className="col-12 col-md-10 d-none d-xl-block">
              <nav className="site-navigation position-relative text-right" role="navigation">
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li><Link to="/about" className="nav-link">About</Link></li>
                  <li><Link to="/projects" className="nav-link">Projects</Link></li>
                  <li><Link to="/resume" className="nav-link">Resume</Link></li>
                  <li><a href="https://linkedin.com/in/sebastian-mojica-73352a253" target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a></li>
                  <li><a href="https://github.com/SebasMojica" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a></li>
                </ul>
              </nav>
            </div>

            <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={{position: 'relative', top: '3px'}}>
              <a href="#" className="site-menu-toggle js-menu-toggle float-right">
                <span className="icon-menu h3"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
