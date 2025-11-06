import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    // 1. Initialize data-background images
    if (window.jQuery) {
      window.jQuery('[data-background]').each(function() {
        window.jQuery(this).css('background-image', 'url(' + window.jQuery(this).attr('data-background') + ')');
      });
    }

    // 2. Reinitialize WOW.js for scroll animations
    if (window.WOW) {
      const wow = new window.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
      });
      wow.init();
    }

    // 3. Hover effects for choose cards
    if (window.jQuery) {
      window.jQuery(".choose__card").hover(
        function() {
          window.jQuery(this).css({
            'transform': 'translateY(-10px)',
            'box-shadow': '0 15px 40px rgba(60, 114, 252, 0.15)',
            'border-color': '#3C72FC'
          });
          window.jQuery(this).find('.icon svg circle').css({
            'fill': '#3C72FC',
            'fill-opacity': '0.2'
          });
        },
        function() {
          window.jQuery(this).css({
            'transform': 'translateY(0)',
            'box-shadow': '0 5px 20px rgba(0,0,0,0.08)',
            'border-color': 'transparent'
          });
          window.jQuery(this).find('.icon svg circle').css({
            'fill': '#3C72FC',
            'fill-opacity': '0.1'
          });
        }
      );
    }

    // 4. Hover effects for service cards
    if (window.jQuery) {
      window.jQuery(".service__card").hover(
        function() {
          window.jQuery(this).css({
            'transform': 'translateY(-8px)',
            'background': 'rgba(255,255,255,0.15)',
            'border-color': 'rgba(255,255,255,0.3)'
          });
          window.jQuery(this).find('.icon svg circle').css({
            'fill': 'white',
            'fill-opacity': '0.2'
          });
        },
        function() {
          window.jQuery(this).css({
            'transform': 'translateY(0)',
            'background': 'rgba(255,255,255,0.08)',
            'border-color': 'rgba(255,255,255,0.1)'
          });
          window.jQuery(this).find('.icon svg circle').css({
            'fill': 'white',
            'fill-opacity': '0.1'
          });
        }
      );
    }

  }, []);

  return (
    <main>
      {/* Page banner area start */}
      <section className="banner__inner-page bg-image pt-180 pb-180 bg-image"
        data-background="/assets/images/banner/banner-inner-page.jpg">
        <div className="shape2 wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
          <img src="/assets/images/banner/inner-banner-shape2.png" alt="shape" />
        </div>
        <div className="shape1 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
          <img src="/assets/images/banner/inner-banner-shape1.png" alt="shape" />
        </div>
        <div className="shape3 wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
          <img className="sway__animationX" src="/assets/images/banner/inner-banner-shape3.png" alt="shape" />
        </div>
        <div className="container">
          <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">About Us</h2>
          <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Link to="/">Home</Link><span><i className="fa-regular fa-angles-right mx-2"></i>About Us</span>
          </div>
        </div>
      </section>
      {/* Page banner area end */}

      {/* About area start */}
      <section className="about-two-area pt-120">
        <div className="about-two__shape">
          <img src="/assets/images/shape/about-two-shape.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="about-two__left-item">
                <div className="dots">
                  <img className="sway_Y__animation" src="/assets/images/shape/about-two-dot.png" alt="shape" />
                </div>
                <div className="shape-halper">
                  <img className="sway__animation" src="/assets/images/shape/about-circle-helper.png" alt="shape" />
                </div>
                <div className="image big-image">
                  <img src="/assets/images/about/about-image1.jpg" alt="about" />
                </div>
                <div className="image sm-image">
                  <img src="/assets/images/about/about-image2.png" alt="about" />
                </div>
                <div className="circle-shape">
                  <img className="animation__rotate" src="/assets/images/shape/about-two-circle.png" alt="shape" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="section-header mb-40">
                <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
                  ABOUT TECH SUPPORT INC
                </h5>
                <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  Reliable IT support for <span>UK small businesses</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                  We're Tech Support Inc — trusted IT partners for UK small businesses. We provide practical IT support, cloud migration, and cybersecurity with friendly UK-based engineers, transparent pricing and 24/7 support.
                </p>
                <p className="wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
                  We help small businesses stay <strong>secure, online and productive</strong> — with proactive support, clear pricing and <strong>24/7 UK-based help</strong> when you need it.
                </p>
              </div>
              <div className="row g-4 wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="col-md-6">
                  <div className="about__right-item">
                    <div className="icon">
                      <img src="/assets/images/icon/about-icon1.png" alt="icon" />
                    </div>
                    <div className="content">
                      <h4 className="mb-1">24/7 UK Support</h4>
                      <p>Help is just a call or ticket away, any time.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about__right-item">
                    <div className="icon">
                      <img src="/assets/images/icon/about-icon2.png" alt="icon" />
                    </div>
                    <div className="content">
                      <h4 className="mb-1">Transparent Pricing</h4>
                      <p>No hidden fees or confusing packages.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about__info mt-50 wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                <Link to="/contact" className="btn-one">Book a Free IT Health Check <i className="fa-regular fa-arrow-right-long"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About area end */}

      {/* Our Story Section */}
      <section className="about-area sub-bg pt-60 pb-60" style={{paddingBottom: '60px'}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-header mb-40">
                <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
                  OUR STORY
                </h5>
                <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  Founded to remove IT stress from <span>UK businesses</span>
                </h2>
              </div>
              <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                Tech Support Inc was founded to remove the stress and downtime that businesses suffer from unreliable IT. We partner with UK small businesses to deliver practical, cost-effective IT, cloud and cybersecurity solutions — so owners and managers can <strong>spend time growing the business instead of firefighting technology</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="cta-area pt-120 pb-120">
        <div className="container">
          <div className="cta__wrp gradient-bg" style={{padding: '50px'}}>
            <div className="section-header text-center mb-40">
              <h5 className="wow fadeInUp text-white" data-wow-delay="00ms" data-wow-duration="1500ms">
                <svg width="28" height="12" viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.75" y="0.75" width="18.5" height="10.5" rx="5.25" stroke="white" strokeWidth="1.5"></rect>
                  <rect x="8" width="20" height="12" rx="6" fill="white"></rect>
                </svg>
                OUR MISSION
              </h5>
              <h2 className="text-white wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                Keeping UK small businesses running, <span>secure and competitive</span>
              </h2>
            </div>
            <p className="text-white text-center wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              To keep UK small businesses running, secure and competitive by delivering straightforward IT support, proactive maintenance and clear advice — all with friendly, local service.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work - Process area start */}
      <section className="process-area pt-60 pb-60">
        <div className="container">
          <div className="section-header text-center mb-60">
            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
              HOW WE WORK
            </h5>
            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              Our Simple <span>3-Step Process</span>
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="process__item text-center">
                <span className="process-count">01</span>
                <div className="icon">
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#3C72FC" fillOpacity="0.1"/>
                    <path d="M35 20C26.7157 20 20 26.7157 20 35C20 43.2843 26.7157 50 35 50C43.2843 50 50 43.2843 50 35C50 26.7157 43.2843 20 35 20ZM35 45C29.4772 45 25 40.5228 25 35C25 29.4772 29.4772 25 35 25C40.5228 25 45 29.4772 45 35C45 40.5228 40.5228 45 35 45Z" fill="#3C72FC"/>
                    <path d="M35 27C30.5817 27 27 30.5817 27 35C27 39.4183 30.5817 43 35 43C39.4183 43 43 39.4183 43 35C43 30.5817 39.4183 27 35 27ZM38 36H35C34.4477 36 34 35.5523 34 35V31C34 30.4477 34.4477 30 35 30C35.5523 30 36 30.4477 36 31V34H38C38.5523 34 39 34.4477 39 35C39 35.5523 38.5523 36 38 36Z" fill="#3C72FC"/>
                  </svg>
                </div>
                <h4>Assess</h4>
                <p>We start with a quick IT Health Check to identify risks and quick wins.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="process__item text-center">
                <span className="process-count">02</span>
                <div className="icon">
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#3C72FC" fillOpacity="0.1"/>
                    <path d="M45 22H25C23.3431 22 22 23.3431 22 25V45C22 46.6569 23.3431 48 25 48H45C46.6569 48 48 46.6569 48 45V25C48 23.3431 46.6569 22 45 22Z" stroke="#3C72FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M28 28H42M28 35H42M28 42H38" stroke="#3C72FC" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4>Plan</h4>
                <p>You get a clear, jargon-free roadmap and transparent pricing.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="process__item text-center">
                <span className="process-count">03</span>
                <div className="icon">
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#3C72FC" fillOpacity="0.1"/>
                    <path d="M43 28L32 39L27 34" stroke="#3C72FC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M35 48C42.1797 48 48 42.1797 48 35C48 27.8203 42.1797 22 35 22C27.8203 22 22 27.8203 22 35C22 42.1797 27.8203 48 35 48Z" stroke="#3C72FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Support</h4>
                <p>We implement, monitor and support your systems with ongoing updates and fast response when things go wrong.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-40">
            <Link className="btn-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" to="/our-approach">
              Learn More About Our Approach <i className="fa-regular fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </section>
      {/* Process area end */}

      {/* What Makes Us Different - Choose area start */}
      <section className="choose-area sub-bg pt-120 pb-120">
        <div className="container">
          <div className="section-header text-center mb-60">
            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
              WHAT MAKES US DIFFERENT
            </h5>
            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              Why UK Small Businesses <span>Choose Us</span>
            </h2>
            <p className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{maxWidth: '700px', margin: '20px auto 0', color: '#666'}}>
              We're not like typical IT companies. Here's what makes us different and why small businesses trust us.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="choose__card text-center h-100" style={{background: '#fff', borderRadius: '15px', padding: '40px 30px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', transition: 'all 0.3s ease', border: '2px solid transparent'}}>
                <div className="icon mb-25" style={{display: 'inline-block'}}>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#3C72FC" fillOpacity="0.1"/>
                    <path d="M35 20C33.6193 20 32.5 21.1193 32.5 22.5V24.5C28.4099 25.3748 25 28.8867 25 33.5V40C25 44.9706 28.5294 49 33.5 49H36.5C41.4706 49 45 44.9706 45 40V33.5C45 28.8867 41.5901 25.3748 37.5 24.5V22.5C37.5 21.1193 36.3807 20 35 20ZM35 28C38.5899 28 41.5 30.9101 41.5 34.5V38.5C41.5 42.0899 38.5899 45 35 45C31.4101 45 28.5 42.0899 28.5 38.5V34.5C28.5 30.9101 31.4101 28 35 28Z" fill="#3C72FC"/>
                  </svg>
                </div>
                <h4 className="mb-15" style={{fontSize: '20px', fontWeight: 600, color: '#1a1a1a'}}>24/7 UK-based support</h4>
                <p style={{color: '#666', lineHeight: 1.7, margin: 0}}>Help is just a call or ticket away, any time. Real people who answer the phone.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
              <div className="choose__card text-center h-100" style={{background: '#fff', borderRadius: '15px', padding: '40px 30px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', transition: 'all 0.3s ease', border: '2px solid transparent'}}>
                <div className="icon mb-25" style={{display: 'inline-block'}}>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#3C72FC" fillOpacity="0.1"/>
                    <path d="M25 27C25 24.2386 27.2386 22 30 22H40C42.7614 22 45 24.2386 45 27V29H47C48.6569 29 50 30.3431 50 32V45C50 46.6569 48.6569 48 47 48H23C21.3431 48 20 46.6569 20 45V32C20 30.3431 21.3431 29 23 29H25V27ZM29 29H41V27C41 26.4477 40.5523 26 40 26H30C29.4477 26 29 26.4477 29 27V29ZM24 33V44H46V33H24ZM35 37C36.1046 37 37 37.8954 37 39C37 40.1046 36.1046 41 35 41C33.8954 41 33 40.1046 33 39C33 37.8954 33.8954 37 35 37Z" fill="#3C72FC"/>
                  </svg>
                </div>
                <h4 className="mb-15" style={{fontSize: '20px', fontWeight: 600, color: '#1a1a1a'}}>Small business specialists</h4>
                <p style={{color: '#666', lineHeight: 1.7, margin: 0}}>We understand budgets, compliance needs and the tools small teams actually use.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="choose__card text-center h-100" style={{background: '#fff', borderRadius: '15px', padding: '40px 30px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', transition: 'all 0.3s ease', border: '2px solid transparent'}}>
                <div className="icon mb-25" style={{display: 'inline-block'}}>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#3C72FC" fillOpacity="0.1"/>
                    <path d="M35 20C26.7157 20 20 26.7157 20 35C20 43.2843 26.7157 50 35 50C43.2843 50 50 43.2843 50 35C50 26.7157 43.2843 20 35 20ZM42.0711 32.0711L33.0711 41.0711C32.6805 41.4616 32.0474 41.4616 31.6569 41.0711L27.9289 37.3431C27.5384 36.9526 27.5384 36.3195 27.9289 35.9289C28.3195 35.5384 28.9526 35.5384 29.3431 35.9289L32.3638 38.9497L40.6569 30.6569C41.0474 30.2663 41.6805 30.2663 42.0711 30.6569C42.4616 31.0474 42.4616 31.6805 42.0711 32.0711Z" fill="#3C72FC"/>
                  </svg>
                </div>
                <h4 className="mb-15" style={{fontSize: '20px', fontWeight: 600, color: '#1a1a1a'}}>Practical, business-first</h4>
                <p style={{color: '#666', lineHeight: 1.7, margin: 0}}>Plain English tech. We focus on outcomes: uptime, security, and speed.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="choose__card text-center h-100" style={{background: '#fff', borderRadius: '15px', padding: '40px 30px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', transition: 'all 0.3s ease', border: '2px solid transparent'}}>
                <div className="icon mb-25" style={{display: 'inline-block'}}>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#3C72FC" fillOpacity="0.1"/>
                    <path d="M27 22C24.7909 22 23 23.7909 23 26V32C23 34.2091 24.7909 36 27 36H31V40H27C24.7909 40 23 41.7909 23 44V46C23 48.2091 24.7909 50 27 50H43C45.2091 50 47 48.2091 47 46V44C47 41.7909 45.2091 40 43 40H39V36H43C45.2091 36 47 34.2091 47 32V26C47 23.7909 45.2091 22 43 22H27ZM27 26H31V32H27V26ZM39 26H43V32H39V26ZM27 44H31V46H27V44ZM39 44H43V46H39V44Z" fill="#3C72FC"/>
                  </svg>
                </div>
                <h4 className="mb-15" style={{fontSize: '20px', fontWeight: 600, color: '#1a1a1a'}}>No confusing packages</h4>
                <p style={{color: '#666', lineHeight: 1.7, margin: 0}}>Straightforward service levels and transparent pricing. No hidden fees.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="choose__card text-center h-100" style={{background: '#fff', borderRadius: '15px', padding: '40px 30px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', transition: 'all 0.3s ease', border: '2px solid transparent'}}>
                <div className="icon mb-25" style={{display: 'inline-block'}}>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#3C72FC" fillOpacity="0.1"/>
                    <path d="M35 20L28 24V30C28 36.5 32 42.5 35 48C38 42.5 42 36.5 42 30V24L35 20Z" stroke="#3C72FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M30 32L33 35L40 28" stroke="#3C72FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="mb-15" style={{fontSize: '20px', fontWeight: 600, color: '#1a1a1a'}}>We own the problem</h4>
                <p style={{color: '#666', lineHeight: 1.7, margin: 0}}>We take full responsibility. No vendor chasing or finger-pointing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Choose area end */}

      {/* Services We Manage - Service area start */}
      <section className="service-area secondary-bg pt-120 pb-120">
        <div className="container">
          <div className="section-header text-center mb-60">
            <h5 className="wow fadeInUp text-white" data-wow-delay="00ms" data-wow-duration="1500ms">
              <svg width="28" height="12" viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.75" y="0.75" width="18.5" height="10.5" rx="5.25" stroke="white" strokeWidth="1.5"></rect>
                <rect x="8" width="20" height="12" rx="6" fill="white"></rect>
              </svg>
              SERVICES WE COMMONLY MANAGE
            </h5>
            <h2 className="text-white wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              Complete IT Support for <span>Your Business</span>
            </h2>
            <p className="text-white wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{maxWidth: '700px', margin: '20px auto 0', opacity: 0.9}}>
              From day-to-day support to strategic IT planning, we cover everything your business needs.
            </p>
          </div>
          <div className="row g-4">
            {/* Service Card 1 */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="service__card text-center h-100" style={{background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '35px 25px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease'}}>
                <div className="icon mb-20" style={{display: 'inline-block'}}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.1"/>
                    <path d="M30 17C27.2386 17 25 19.2386 25 22V24C25 26.7614 27.2386 29 30 29C32.7614 29 35 26.7614 35 24V22C35 19.2386 32.7614 17 30 17Z" fill="white"/>
                    <path d="M22 33C22 30.7909 23.7909 29 26 29H34C36.2091 29 38 30.7909 38 33V35C38 35.5523 37.5523 36 37 36H23C22.4477 36 22 35.5523 22 35V33Z" fill="white"/>
                    <path d="M25 40H35V43H25V40Z" fill="white"/>
                  </svg>
                </div>
                <h5 className="text-white mb-10" style={{fontSize: '17px', fontWeight: 600}}>Managed IT Support</h5>
                <p className="text-white" style={{opacity: 0.8, fontSize: '14px', margin: 0, lineHeight: 1.6}}>24/7 helpdesk, proactive monitoring & maintenance</p>
              </div>
            </div>
            {/* Service Card 2 */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
              <div className="service__card text-center h-100" style={{background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '35px 25px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease'}}>
                <div className="icon mb-20" style={{display: 'inline-block'}}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.1"/>
                    <path d="M23 22C23 20.3431 24.3431 19 26 19H34C35.6569 19 37 20.3431 37 22V25H39C39.5523 25 40 25.4477 40 26V38C40 38.5523 39.5523 39 39 39H21C20.4477 39 20 38.5523 20 38V26C20 25.4477 20.4477 25 21 25H23V22ZM25 25H35V22H26C25.4477 22 25 22.4477 25 23V25Z" fill="white"/>
                  </svg>
                </div>
                <h5 className="text-white mb-10" style={{fontSize: '17px', fontWeight: 600}}>Cloud & Azure</h5>
                <p className="text-white" style={{opacity: 0.8, fontSize: '14px', margin: 0, lineHeight: 1.6}}>Migration, optimization & ongoing management</p>
              </div>
            </div>
            {/* Service Card 3 */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="service__card text-center h-100" style={{background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '35px 25px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease'}}>
                <div className="icon mb-20" style={{display: 'inline-block'}}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.1"/>
                    <path d="M30 18L22 23V30C22 35.5 26 40.5 30 45C34 40.5 38 35.5 38 30V23L30 18Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="30" cy="29" r="3" fill="white"/>
                  </svg>
                </div>
                <h5 className="text-white mb-10" style={{fontSize: '17px', fontWeight: 600}}>Cybersecurity</h5>
                <p className="text-white" style={{opacity: 0.8, fontSize: '14px', margin: 0, lineHeight: 1.6}}>Threat protection, monitoring & compliance</p>
              </div>
            </div>
            {/* Service Card 4 */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="service__card text-center h-100" style={{background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '35px 25px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease'}}>
                <div className="icon mb-20" style={{display: 'inline-block'}}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.1"/>
                    <path d="M25 20H35C36.1046 20 37 20.8954 37 22V38C37 39.1046 36.1046 40 35 40H25C23.8954 40 23 39.1046 23 38V22C23 20.8954 23.8954 20 25 20Z" stroke="white" strokeWidth="2"/>
                    <path d="M27 24H33M27 28H33M27 32H30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h5 className="text-white mb-10" style={{fontSize: '17px', fontWeight: 600}}>Backup & Recovery</h5>
                <p className="text-white" style={{opacity: 0.8, fontSize: '14px', margin: 0, lineHeight: 1.6}}>Disaster recovery & business continuity</p>
              </div>
            </div>
            {/* Service Card 5 */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="service__card text-center h-100" style={{background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '35px 25px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease'}}>
                <div className="icon mb-20" style={{display: 'inline-block'}}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.1"/>
                    <circle cx="30" cy="30" r="8" stroke="white" strokeWidth="2"/>
                    <path d="M30 18V22M30 38V42M42 30H38M22 30H18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M38 22L35 25M25 35L22 38M38 38L35 35M25 25L22 22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h5 className="text-white mb-10" style={{fontSize: '17px', fontWeight: 600}}>Network & Wi-Fi</h5>
                <p className="text-white" style={{opacity: 0.8, fontSize: '14px', margin: 0, lineHeight: 1.6}}>Design, setup & ongoing network support</p>
              </div>
            </div>
            {/* Service Card 6 */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
              <div className="service__card text-center h-100" style={{background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '35px 25px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease'}}>
                <div className="icon mb-20" style={{display: 'inline-block'}}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.1"/>
                    <rect x="20" y="20" width="20" height="14" rx="2" stroke="white" strokeWidth="2"/>
                    <rect x="23" y="37" width="14" height="3" fill="white"/>
                    <path d="M26 34V37M34 34V37" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h5 className="text-white mb-10" style={{fontSize: '17px', fontWeight: 600}}>Server Management</h5>
                <p className="text-white" style={{opacity: 0.8, fontSize: '14px', margin: 0, lineHeight: 1.6}}>Physical & virtual server maintenance</p>
              </div>
            </div>
            {/* Service Card 7 */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="service__card text-center h-100" style={{background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '35px 25px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease'}}>
                <div className="icon mb-20" style={{display: 'inline-block'}}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.1"/>
                    <rect x="22" y="18" width="16" height="24" rx="2" stroke="white" strokeWidth="2"/>
                    <path d="M27 22H33M25 26H35M25 30H35M25 34H32" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h5 className="text-white mb-10" style={{fontSize: '17px', fontWeight: 600}}>Microsoft 365</h5>
                <p className="text-white" style={{opacity: 0.8, fontSize: '14px', margin: 0, lineHeight: 1.6}}>Setup, migration & collaboration tools</p>
              </div>
            </div>
            {/* Service Card 8 */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="700ms" data-wow-duration="1500ms">
              <div className="service__card text-center h-100" style={{background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '35px 25px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease'}}>
                <div className="icon mb-20" style={{display: 'inline-block'}}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.1"/>
                    <path d="M30 20L33 28H41L35 33L37 41L30 36L23 41L25 33L19 28H27L30 20Z" fill="white"/>
                  </svg>
                </div>
                <h5 className="text-white mb-10" style={{fontSize: '17px', fontWeight: 600}}>& Much More</h5>
                <p className="text-white" style={{opacity: 0.8, fontSize: '14px', margin: 0, lineHeight: 1.6}}>VoIP, hardware, licensing & consulting</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-50">
            <Link className="btn-one wow fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms" to="/services">
              View All Services <i className="fa-regular fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </section>
      {/* Service area end */}

      {/* Proudly Supporting - Brand area start */}
      <section className="brand-area pt-120 pb-120">
        <div className="container">
          <div className="section-header text-center mb-60">
            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
              PROUDLY SUPPORTING
            </h5>
            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              Trusted by <span>UK Businesses</span>
            </h2>
          </div>
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="brand__item text-center p-4">
                <div className="mb-3">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="#3C72FC" fillOpacity="0.1"/>
                    <path d="M40 20C28.954 20 20 28.954 20 40C20 51.046 28.954 60 40 60C51.046 60 60 51.046 60 40C60 28.954 51.046 20 40 20ZM40 55C31.729 55 25 48.271 25 40C25 31.729 31.729 25 40 25C48.271 25 55 31.729 55 40C55 48.271 48.271 55 40 55Z" fill="#3C72FC"/>
                    <path d="M40 30C34.477 30 30 34.477 30 40C30 45.523 34.477 50 40 50C45.523 50 50 45.523 50 40C50 34.477 45.523 30 40 30ZM45 41H40C39.447 41 39 40.553 39 40V35C39 34.447 39.447 34 40 34C40.553 34 41 34.447 41 35V39H45C45.553 39 46 39.447 46 40C46 40.553 45.553 41 45 41Z" fill="#3C72FC"/>
                  </svg>
                </div>
                <h5 className="mb-2">Libere</h5>
                <p className="mb-0 text-muted small">IT Support</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
              <div className="brand__item text-center p-4">
                <div className="mb-3">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="#3C72FC" fillOpacity="0.1"/>
                    <path d="M52 24H28C25.791 24 24 25.791 24 28V52C24 54.209 25.791 56 28 56H52C54.209 56 56 54.209 56 52V28C56 25.791 54.209 24 52 24Z" stroke="#3C72FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M40 32C35.582 32 32 35.582 32 40C32 44.418 35.582 48 40 48C44.418 48 48 44.418 48 40C48 35.582 44.418 32 40 32Z" stroke="#3C72FC" strokeWidth="2.5"/>
                    <circle cx="50" cy="30" r="2" fill="#3C72FC"/>
                  </svg>
                </div>
                <h5 className="mb-2">Coffee Island</h5>
                <p className="mb-0 text-muted small">Cloud Services</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="brand__item text-center p-4">
                <div className="mb-3">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="#3C72FC" fillOpacity="0.1"/>
                    <path d="M40 20L25 30V45C25 50.5 31 55.5 40 60C49 55.5 55 50.5 55 45V30L40 20Z" stroke="#3C72FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M40 40C42.7614 40 45 37.7614 45 35C45 32.2386 42.7614 30 40 30C37.2386 30 35 32.2386 35 35C35 37.7614 37.2386 40 40 40Z" fill="#3C72FC"/>
                    <path d="M33 48C33 45.5 35.5 43 40 43C44.5 43 47 45.5 47 48" stroke="#3C72FC" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h5 className="mb-2">GHBC</h5>
                <p className="mb-0 text-muted small">Network Support</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="brand__item text-center p-4">
                <div className="mb-3">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="#3C72FC" fillOpacity="0.1"/>
                    <path d="M26 42C26 42 28 38 34 38C40 38 42 42 48 42C54 42 56 38 56 38V24C56 24 54 28 48 28C42 28 40 24 34 24C28 24 26 28 26 28V42Z" stroke="#3C72FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M26 56V42" stroke="#3C72FC" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h5 className="mb-2">Tech Partners</h5>
                <p className="mb-0 text-muted small">Managed Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brand area end */}

      {/* Team & People Section */}
      <section className="team-area sub-bg pt-120 pb-120">
        <div className="container">
          <div className="section-header text-center mb-60">
            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
              TEAM & PEOPLE
            </h5>
            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              Meet the People Behind <span>the Service</span>
            </h2>
            <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{maxWidth: '800px', margin: '20px auto 0'}}>
              We're a small, dedicated team of experienced engineers and admins who enjoy fixing problems and making systems run smoothly. <strong>You'll get real people who answer the phone and know your environment</strong> — not a faceless script.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="team__item">
                <div className="image">
                  <img src="/assets/images/team/team-image1.jpg" alt="team" />
                </div>
                <div className="team__content">
                  <h4><a className="text-white" href="#0">Technical Lead</a></h4>
                  <span className="text-white">Senior Engineer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="team__item">
                <div className="image">
                  <img src="/assets/images/team/team-image2.jpg" alt="team" />
                </div>
                <div className="team__content">
                  <h4><a className="text-white" href="#0">Cloud Specialist</a></h4>
                  <span className="text-white">Azure & AWS Expert</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="team__item">
                <div className="image">
                  <img src="/assets/images/team/team-image3.jpg" alt="team" />
                </div>
                <div className="team__content">
                  <h4><a className="text-white" href="#0">Security Expert</a></h4>
                  <span className="text-white">Cybersecurity Specialist</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="team__item">
                <div className="image">
                  <img src="/assets/images/team/team-image4.jpg" alt="team" />
                </div>
                <div className="team__content">
                  <h4><a className="text-white" href="#0">Support Manager</a></h4>
                  <span className="text-white">Client Relations</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="team__item">
                <div className="image">
                  <img src="/assets/images/team/team-image5.jpg" alt="team" />
                </div>
                <div className="team__content">
                  <h4><a className="text-white" href="#0">Network Engineer</a></h4>
                  <span className="text-white">Infrastructure Specialist</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1000ms" data-wow-duration="1500ms">
              <div className="team__item">
                <div className="image">
                  <img src="/assets/images/team/team-image6.jpg" alt="team" />
                </div>
                <div className="team__content">
                  <h4><a className="text-white" href="#0">Systems Administrator</a></h4>
                  <span className="text-white">DevOps Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Proof - Testimonial area start */}
      <section className="testimonial-area pt-120 pb-120">
        <div className="container">
          <div className="section-header text-center mb-60">
            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
              TRUST & PROOF
            </h5>
            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              What Our Clients <span>Say</span>
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="testimonial__item">
                <svg className="coma" width="50" height="37" viewBox="0 0 50 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z" fill="#3C72FC" />
                </svg>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img src="/assets/images/testimonial/testimonial-image1.png" alt="Anna" style={{width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover'}} />
                  <div className="testi-info">
                    <h4 className="mb-1">Anna Richards</h4>
                    <p className="mb-0">Cafe Owner, Coffee Island</p>
                    <div className="star mt-1">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p>"Tech Support Inc fixed our email outage in under an hour — lifesavers! Their 24/7 support means we never worry about tech issues affecting our business."</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="testimonial__item">
                <svg className="coma" width="50" height="37" viewBox="0 0 50 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z" fill="#3C72FC" />
                </svg>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img src="/assets/images/testimonial/testimonial-image2.png" alt="Michael" style={{width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover'}} />
                  <div className="testi-info">
                    <h4 className="mb-1">Michael Thompson</h4>
                    <p className="mb-0">Managing Director, Libere</p>
                    <div className="star mt-1">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p>"We switched to Tech Support Inc for our cloud migration and couldn't be happier. They explained everything in plain English and made the transition seamless."</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="testimonial__item">
                <svg className="coma" width="50" height="37" viewBox="0 0 50 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z" fill="#3C72FC" />
                </svg>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img src="/assets/images/testimonial/testimonial-image3.png" alt="Sarah" style={{width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover'}} />
                  <div className="testi-info">
                    <h4 className="mb-1">Sarah Johnson</h4>
                    <p className="mb-0">Operations Manager, GHBC</p>
                    <div className="star mt-1">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p>"Their proactive monitoring caught a potential security breach before it became a problem. The team really knows their stuff and genuinely cares about keeping us protected."</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-60 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
            <p className="mb-3"><strong>Trusted Partners:</strong></p>
            <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
              <img src="/assets/images/brand/partner-microsoft.png" alt="Microsoft Partner" style={{height: '60px', filter: 'grayscale(100%)', opacity: 0.7, transition: 'all 0.3s ease'}} onMouseOver={(e) => {e.currentTarget.style.filter='grayscale(0%)'; e.currentTarget.style.opacity='1';}} onMouseOut={(e) => {e.currentTarget.style.filter='grayscale(100%)'; e.currentTarget.style.opacity='0.7';}} />
              <img src="/assets/images/brand/partner-veeam.png" alt="Veeam Partner" style={{height: '60px', filter: 'grayscale(100%)', opacity: 0.7, transition: 'all 0.3s ease'}} onMouseOver={(e) => {e.currentTarget.style.filter='grayscale(0%)'; e.currentTarget.style.opacity='1';}} onMouseOut={(e) => {e.currentTarget.style.filter='grayscale(100%)'; e.currentTarget.style.opacity='0.7';}} />
              <img src="/assets/images/brand/partner-sophos.png" alt="Sophos Partner" style={{height: '60px', filter: 'grayscale(100%)', opacity: 0.7, transition: 'all 0.3s ease'}} onMouseOver={(e) => {e.currentTarget.style.filter='grayscale(0%)'; e.currentTarget.style.opacity='1';}} onMouseOut={(e) => {e.currentTarget.style.filter='grayscale(100%)'; e.currentTarget.style.opacity='0.7';}} />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial area end */}

      {/* Our Promise area start */}
      <section className="cta-area pt-120 pb-120">
        <div className="container">
          <div className="cta__wrp gradient-bg" style={{padding: '50px'}}>
            <div className="section-header text-center mb-60">
              <h5 className="wow fadeInUp text-white" data-wow-delay="00ms" data-wow-duration="1500ms">
                <svg width="28" height="12" viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.75" y="0.75" width="18.5" height="10.5" rx="5.25" stroke="white" strokeWidth="1.5"></rect>
                  <rect x="8" width="20" height="12" rx="6" fill="white"></rect>
                </svg>
                OUR PROMISE
              </h5>
              <h2 className="text-white wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                What You Can Expect <span>From Us</span>
              </h2>
            </div>
            <div className="row g-4 justify-content-center">
              <div className="col-lg-3 col-md-6 text-center wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div className="icon mb-30">
                  <img src="/assets/images/icon/service-three-light-icon1.png" alt="Fast response" />
                </div>
                <h5 className="text-white mb-10">Fast response</h5>
                <p className="text-white">Clear communication when you need it</p>
              </div>
              <div className="col-lg-3 col-md-6 text-center wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                <div className="icon mb-30">
                  <img src="/assets/images/icon/service-three-light-icon2.png" alt="Honest advice" />
                </div>
                <h5 className="text-white mb-10">Honest advice</h5>
                <p className="text-white">No upsell unless it benefits you</p>
              </div>
              <div className="col-lg-3 col-md-6 text-center wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="icon mb-30">
                  <img src="/assets/images/icon/pricing-icon1.png" alt="Transparent pricing" />
                </div>
                <h5 className="text-white mb-10">Transparent pricing</h5>
                <p className="text-white">No hidden fees</p>
              </div>
              <div className="col-lg-3 col-md-6 text-center wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="icon mb-30">
                  <img src="/assets/images/icon/service-three-light-icon3.png" alt="No lock-in" />
                </div>
                <h5 className="text-white mb-10">No lock-in</h5>
                <p className="text-white">Flexible contracts with clear value</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Promise area end */}

      {/* Final CTA area start */}
      <section className="call-to-action-area sub-bg pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="section-header mb-40">
                <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
                  READY TO GET STARTED?
                </h5>
                <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  Make IT One Less Thing to <span>Worry About</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                  Book a free IT Health Check or call us on <a href="tel:+447459425326" className="primary-color"><strong>+44 7459 425 326</strong></a> — 24/7 support available
                </p>
              </div>
              <div className="d-flex gap-3 flex-wrap">
                <Link className="btn-one wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms" to="/contact">
                  <i className="fa-regular fa-calendar-check"></i> Get a Free Health Check
                </Link>
                <a className="btn-one btn-bordered wow fadeInUp" data-wow-delay="700ms" data-wow-duration="1500ms" href="tel:+447459425326">
                  <i className="fa-regular fa-phone"></i> Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA area end */}

    </main>
  );
};

export default About;
