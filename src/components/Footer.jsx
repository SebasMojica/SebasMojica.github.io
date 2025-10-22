import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="col-md-12 text-center">
          <p>
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All rights reserved | This website builds on
            a template by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
