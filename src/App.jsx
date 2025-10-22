import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';

function App() {
  useEffect(() => {
    // Load CSS files dynamically
    const loadCSS = () => {
      const cssFiles = [
        'css/bootstrap.min.css',
        'css/jquery-ui.css',
        'css/owl.carousel.min.css',
        'css/owl.theme.default.min.css',
        'css/jquery.fancybox.min.css',
        'css/bootstrap-datepicker.css',
        'fonts/flaticon/font/flaticon.css',
        'css/aos.css',
        'fonts/icomoon/style.css'
      ];

      cssFiles.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      });
    };

    loadCSS();

    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'slide',
        once: false
      });
    }

    // Initialize jQuery-based functionality
    const initializeJQuery = () => {
      if (window.$) {
        // Loader fade out
        window.$(".loader").delay(1000).fadeOut("slow");
        window.$("#overlayer").delay(1000).fadeOut("slow");

        // Mobile menu functionality
        const siteMenuClone = () => {
          window.$('.js-clone-nav').each(function() {
            const $this = window.$(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
          });

          setTimeout(() => {
            let counter = 0;
            window.$('.site-mobile-menu .has-children').each(function(){
              const $this = window.$(this);
              $this.prepend('<span class="arrow-collapse collapsed">');
              $this.find('.arrow-collapse').attr({
                'data-toggle': 'collapse',
                'data-target': '#collapseItem' + counter,
              });
              $this.find('> ul').attr({
                'class': 'collapse',
                'id': 'collapseItem' + counter,
              });
              counter++;
            });
          }, 1000);

          window.$('body').on('click', '.arrow-collapse', function(e) {
            const $this = window.$(this);
            if ($this.closest('li').find('.collapse').hasClass('show')) {
              $this.removeClass('active');
            } else {
              $this.addClass('active');
            }
            e.preventDefault();
          });

          window.$('body').on('click', '.js-menu-toggle', function(e) {
            const $this = window.$(this);
            e.preventDefault();
            if (window.$('body').hasClass('offcanvas-menu')) {
              window.$('body').removeClass('offcanvas-menu');
              $this.removeClass('active');
            } else {
              window.$('body').addClass('offcanvas-menu');
              $this.addClass('active');
            }
          });

          // Click outside offcanvas
          window.$(document).mouseup(function(e) {
            const container = window.$(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
              if (window.$('body').hasClass('offcanvas-menu')) {
                window.$('body').removeClass('offcanvas-menu');
              }
            }
          });
        };
        siteMenuClone();

        // Sticky header functionality
        const siteSticky = () => {
          window.$(".js-sticky-header").sticky({topSpacing:0});
        };
        siteSticky();

        // One page navigation
        const OnePageNavigation = () => {
          window.$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
            e.preventDefault();
            const hash = this.hash;
            window.$('html, body').animate({
              'scrollTop': window.$(hash).offset().top
            }, 600, 'easeInOutExpo', function(){
              window.location.hash = hash;
            });
          });
        };
        OnePageNavigation();

        // Scroll functionality
        const siteScroll = () => {
          window.$(window).scroll(function() {
            const st = window.$(this).scrollTop();
            if (st > 100) {
              window.$('.js-sticky-header').addClass('shrink');
            } else {
              window.$('.js-sticky-header').removeClass('shrink');
            }
          });
        };
        siteScroll();

        // Carousel functionality
        const siteCarousel = () => {
          if (window.$('.slide-one-item').length > 0) {
            window.$('.slide-one-item').owlCarousel({
              center: false,
              items: 1,
              loop: true,
              stagePadding: 0,
              margin: 0,
              autoplay: true,
              pauseOnHover: false,
              nav: false,
              navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
            });
          }
        };
        siteCarousel();

        // Fancybox functionality
        window.$('.fancybox').on('click', function() {
          const visibleLinks = window.$('.fancybox');
          window.$.fancybox.open(visibleLinks, {}, visibleLinks.index(this));
          return false;
        });
      }
    };

    // Load jQuery and initialize when ready
    const loadScripts = () => {
      const scripts = [
        'js/jquery-3.3.1.min.js',
        'js/jquery-ui.js',
        'js/popper.min.js',
        'js/bootstrap.min.js',
        'js/owl.carousel.min.js',
        'js/jquery.countdown.min.js',
        'js/jquery.easing.1.3.js',
        'js/aos.js',
        'js/jquery.fancybox.min.js',
        'js/jquery.sticky.js',
        'js/isotope.pkgd.min.js',
        'js/main.js'
      ];

      let loadedCount = 0;
      scripts.forEach((src, index) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
          loadedCount++;
          if (loadedCount === scripts.length) {
            initializeJQuery();
          }
        };
        script.onerror = () => {
          console.warn(`Failed to load script: ${src}`);
          loadedCount++;
          if (loadedCount === scripts.length) {
            initializeJQuery();
          }
        };
        document.head.appendChild(script);
      });
    };

    loadScripts();
  }, []);

  return (
    <div className="App">
      <div id="overlayer"></div>
      <Loader />
      
      <div className="site-wrap">
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
