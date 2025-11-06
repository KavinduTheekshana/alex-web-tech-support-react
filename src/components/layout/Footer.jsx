import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Initialize scroll-up button with SVG path animation
    const scrollPath = document.querySelector('.scroll-up path');
    const scrollUp = document.querySelector('.scroll-up');

    if (scrollPath && scrollUp) {
      // Get the path length and set up the stroke-dasharray
      const pathLength = scrollPath.getTotalLength();

      scrollPath.style.transition = scrollPath.style.WebkitTransition = 'none';
      scrollPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
      scrollPath.style.strokeDashoffset = pathLength;
      scrollPath.getBoundingClientRect();
      scrollPath.style.transition = scrollPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

      // Update scroll progress
      const updateScroll = () => {
        const scroll = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = pathLength - (scroll * pathLength) / height;
        scrollPath.style.strokeDashoffset = progress;

        // Show/hide button based on scroll position
        if (scroll > 50) {
          scrollUp.classList.add('active-scroll');
        } else {
          scrollUp.classList.remove('active-scroll');
        }
      };

      // Initial update
      updateScroll();

      // Add scroll listener
      window.addEventListener('scroll', updateScroll);

      // Click handler to scroll to top
      const handleClick = (event) => {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

      scrollUp.addEventListener('click', handleClick);

      // Cleanup
      return () => {
        window.removeEventListener('scroll', updateScroll);
        scrollUp.removeEventListener('click', handleClick);
      };
    }
  }, []);

  return (
    <>
      <style>{`
        .partner-badge {
          display: inline-block;
          padding: 8px 15px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 5px;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .partner-badge:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }
        .footer-contact a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-contact a:hover {
          color: var(--primary-color);
        }
        .footer__item.item-sm ul li a {
          white-space: nowrap;
          display: inline-block;
        }
        .footer-contact li {
          margin-bottom: 15px !important;
        }
        .footer-contact .info h5 {
          margin-bottom: 2px !important;
          font-size: 14px;
          font-weight: 600;
        }
        .footer-contact .info p {
          margin-bottom: 0 !important;
          font-size: 14px;
        }
        .partner-logos {
          margin-top: 20px !important;
        }
        .partner-logos h5 {
          font-size: 14px;
          margin-bottom: 10px !important;
        }
        .partner-logos .d-flex {
          flex-wrap: nowrap !important;
        }
      `}</style>

      {/* Footer area start here */}
      <footer className="footer-area secondary-bg">
        <div className="footer__shape-regular-left wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
          <img src="/assets/images/shape/footer-regular-left.png" alt="shape" />
        </div>
        <div className="footer__shape-solid-left wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
          <img className="sway_Y__animation" src="/assets/images/shape/footer-solid-left.png" alt="shape" />
        </div>
        <div className="footer__shape-solid-right wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms">
          <img className="sway_Y__animation" src="/assets/images/shape/footer-regular-right.png" alt="shape" />
        </div>
        <div className="footer__shape-regular-right wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
          <img src="/assets/images/shape/footer-solid-right.png" alt="shape" />
        </div>
        <div className="footer__shadow-shape">
          <img src="/assets/images/shape/footer-shadow-shape.png" alt="shadow" />
        </div>
        <div className="container">
          <div className="footer__wrp pt-100 pb-100">
            <div className="footer__item item-big wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <Link to="/" className="logo mb-30">
                <img src="/assets/images/logo/logo-horizontal.svg" alt="image" />
              </Link>
              <p>Empowering businesses with innovative IT solutions.</p>
              <div className="social-icon">
                <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#0"><i className="fa-brands fa-twitter"></i></a>
                <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#0"><i className="fa-brands fa-youtube"></i></a>
              </div>

              {/* Partner Logos */}
              <div className="partner-logos mt-30">
                <h5 className="mb-10">Our Partners</h5>
                <div className="d-flex gap-3 align-items-center">
                  <span className="partner-badge">Microsoft</span>
                  <span className="partner-badge">Veeam</span>
                  <span className="partner-badge">Sophos</span>
                </div>
              </div>
            </div>
            <div className="footer__item item-sm wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <h3 className="footer-title">Our Services</h3>
              <ul>
                <li><Link to="/outsourced-it-support"><i className="fa-regular fa-angles-right me-1"></i> Outsourced IT Support</Link></li>
                <li><Link to="/microsoft-365"><i className="fa-regular fa-angles-right me-1"></i> Microsoft 365 & Copilot</Link></li>
                <li><Link to="/pricing"><i className="fa-regular fa-angles-right me-1"></i> Pricing</Link></li>
                <li><Link to="/cost-calculator"><i className="fa-regular fa-angles-right me-1"></i> Cost Calculator</Link></li>
                <li><Link to="/areas-we-cover"><i className="fa-regular fa-angles-right me-1"></i> Areas We Cover</Link></li>
              </ul>
            </div>
            <div className="footer__item item-sm wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <h3 className="footer-title">Quick Links</h3>
              <ul>
                <li><Link to="/"><i className="fa-regular fa-angles-right me-1"></i> Home</Link></li>
                <li><Link to="/about"><i className="fa-regular fa-angles-right me-1"></i> About</Link></li>
                <li><Link to="/services"><i className="fa-regular fa-angles-right me-1"></i> Services</Link></li>
                <li><Link to="/solutions"><i className="fa-regular fa-angles-right me-1"></i> Solutions</Link></li>
                <li><Link to="/contact"><i className="fa-regular fa-angles-right me-1"></i> Contact</Link></li>
              </ul>
            </div>
            <div className="footer__item item-big wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
              <h3 className="footer-title">Contact Us</h3>
              <p className="mb-20">Reliable IT support for UK small businesses</p>
              <ul className="footer-contact">
                <li>
                  <i className="fa-regular fa-clock"></i>
                  <div className="info">
                    <h5>Opening Hours:</h5>
                    <p>Sunday–Saturday: 9 am–10 pm <small>(24/7 Helpdesk)</small></p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <div className="info">
                    <h5>Phone:</h5>
                    <p><a href="tel:+447459425326">+44 7459 425326</a></p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <div className="info">
                    <h5>Email:</h5>
                    <p><a href="mailto:contact@techsupportinc.co.uk">contact@techsupportinc.co.uk</a></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="container">
            <div className="d-flex gap-1 flex-wrap align-items-center justify-content-md-between justify-content-center">
              <p className="wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">
                &copy; All Copyright {currentYear} by <a href="https://techsupportinc.co.uk">Tech Support Inc</a> | Design and Developed By : <a target='_blank' href="https://creatxsoftware.com">Creatx Software Limited</a>
              </p>
              <ul className="d-flex align-items-center gap-4 wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                <li><a href="#0">Terms & Conditions</a></li>
                <li><a href="#0">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer area end here */}

      {/* Back to top area start here */}
      <div className="scroll-up">
        <svg className="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* Back to top area end here */}
    </>
  );
};

export default Footer;
