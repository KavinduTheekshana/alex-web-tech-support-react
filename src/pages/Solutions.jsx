import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Solutions() {
  useEffect(() => {
    // Initialize data-background images
    if (window.jQuery) {
      window.jQuery('[data-background]').each(function() {
        window.jQuery(this).css('background-image', 'url(' + window.jQuery(this).attr('data-background') + ')');
      });
    }

    // Reinitialize WOW.js
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
  }, []);

  return (
    <main>
      <style>
        {`
          .choose__card {
            cursor: pointer;
          }
          .choose__card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(60, 114, 252, 0.15) !important;
            border-color: #3C72FC !important;
          }
          .choose__card:hover .icon svg circle {
            fill: #3C72FC;
            fill-opacity: 0.2;
          }
          .service__card {
            cursor: pointer;
          }
          .service__card:hover {
            transform: translateY(-8px);
            background: rgba(255,255,255,0.15) !important;
            border-color: rgba(255,255,255,0.3) !important;
          }
          .service__card:hover .icon svg circle {
            fill: white;
            fill-opacity: 0.2;
          }
        `}
      </style>

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
          <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Outsourced IT Support</h2>
          <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Link to="/">Home</Link><span><i className="fa-regular fa-angles-right mx-2"></i>Outsourced IT Support</span>
          </div>
        </div>
      </section>
      {/* Page banner area end */}

      {/* Introduction Section */}
      <section className="about-area pt-120 pb-120">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="about__image">
                <img src="/assets/images/about/about-image1.jpg" alt="Outsourced IT Support" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header mb-20">
                <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
                  OUTSOURCED IT SUPPORT
                </h5>
                <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  Your Complete <span>IT Department</span>
                </h2>
              </div>
              <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                Get enterprise-level IT support without the enterprise costs. Our outsourced IT support services provide UK small businesses with a dedicated team of experts who act as your IT department.
              </p>
              <p className="wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
                From 24/7 helpdesk support to strategic IT planning, we handle everything so you can focus on running your business. No more juggling multiple vendors or worrying about technology issues.
              </p>
              <div className="about__info mt-30 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="row g-4">
                  <div className="col-sm-6">
                    <div className="d-flex gap-3 align-items-center">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#3C72FC" fillOpacity="0.1"/>
                        <path d="M20 12C18.3431 12 17 13.3431 17 15V16C17 17.6569 18.3431 19 20 19C21.6569 19 23 17.6569 23 16V15C23 13.3431 21.6569 12 20 12Z" fill="#3C72FC"/>
                        <path d="M15 21C15 19.3431 16.3431 18 18 18H22C23.6569 18 25 19.3431 25 21V22C25 22.5523 24.5523 23 24 23H16C15.4477 23 15 22.5523 15 22V21Z" fill="#3C72FC"/>
                        <circle cx="20" cy="26" r="1" fill="#3C72FC"/>
                      </svg>
                      <h4 className="mb-0" style={{fontSize: '18px', fontWeight: 600}}>24/7 UK Support</h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex gap-3 align-items-center">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#3C72FC" fillOpacity="0.1"/>
                        <rect x="14" y="13" width="12" height="14" rx="1.5" stroke="#3C72FC" strokeWidth="1.5"/>
                        <path d="M17 16H23M17 19H23M17 22H20" stroke="#3C72FC" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <h4 className="mb-0" style={{fontSize: '18px', fontWeight: 600}}>Fixed Monthly Costs</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section with Cards */}
      <section className="service-area secondary-bg pt-120 pb-120">
        <div className="container">
          <div className="section-header text-center mb-60">
            <h5 className="wow fadeInUp text-white" data-wow-delay="00ms" data-wow-duration="1500ms">
              <svg width="28" height="12" viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.75" y="0.75" width="18.5" height="10.5" rx="5.25" stroke="white" strokeWidth="1.5"></rect>
                <rect x="8" width="20" height="12" rx="6" fill="white"></rect>
              </svg>
              WHAT'S INCLUDED
            </h5>
            <h2 className="text-white wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Complete <span>IT Support Services</span></h2>
            <p className="text-white wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{maxWidth: '700px', margin: '20px auto 0', opacity: 0.9}}>Everything your business needs to stay secure, productive, and running smoothly.</p>
          </div>
          <div className="row g-4">
            {/* Support & 24/7 Helpdesk - Featured First */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="service__card text-center h-100" style={{background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '40px 30px', border: '2px solid #3C72FC', transition: 'all 0.3s ease'}}>
                <div className="badge mb-20" style={{background: '#3C72FC', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 600}}>FEATURED</div>
                <div className="icon mb-25" style={{display: 'inline-block'}}>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="white" fillOpacity="0.15"/>
                    <path d="M35 18C32.2386 18 30 20.2386 30 23V25C30 27.7614 32.2386 30 35 30C37.7614 30 40 27.7614 40 25V23C40 20.2386 37.7614 18 35 18Z" fill="white"/>
                    <path d="M27 33C27 30.7909 28.7909 29 31 29H39C41.2091 29 43 30.7909 43 33V35C43 35.5523 42.5523 36 42 36H28C27.4477 36 27 35.5523 27 35V33Z" fill="white"/>
                    <path d="M30 40H40V45C40 45.5523 39.5523 46 39 46H31C30.4477 46 30 45.5523 30 45V40Z" fill="white"/>
                    <circle cx="35" cy="50" r="2" fill="white"/>
                  </svg>
                </div>
                <h4 className="text-white mb-15" style={{fontSize: '22px', fontWeight: 700}}>Support & 24/7 Helpdesk</h4>
                <p className="text-white" style={{opacity: 0.9, fontSize: '15px', margin: '0 0 20px', lineHeight: 1.7}}>Round-the-clock UK-based support desk. Phone, email, or ticket — get help whenever you need it from real IT experts.</p>
                <ul className="text-white text-start" style={{opacity: 0.85, fontSize: '14px', listStyle: 'none', padding: 0}}>
                  <li style={{marginBottom: '8px'}}>✓ 24/7/365 availability</li>
                  <li style={{marginBottom: '8px'}}>✓ UK-based support team</li>
                  <li style={{marginBottom: '8px'}}>✓ Average response: &lt;15 minutes</li>
                  <li style={{marginBottom: '8px'}}>✓ Remote & on-site support</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
              <div className="service__card text-center h-100" style={{background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '40px 30px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease'}}>
                <div className="icon mb-25" style={{display: 'inline-block'}}>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="white" fillOpacity="0.1"/>
                    <path d="M35 20L25 27V35C25 42.5 30 48.5 35 53C40 48.5 45 42.5 45 35V27L35 20Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M35 32C36.6569 32 38 33.3431 38 35C38 36.6569 36.6569 38 35 38C33.3431 38 32 36.6569 32 35C32 33.3431 33.3431 32 35 32Z" fill="white"/>
                    <path d="M30 43C30 40.5 32 38.5 35 38.5C38 38.5 40 40.5 40 43" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h5 className="text-white mb-15" style={{fontSize: '19px', fontWeight: 600}}>Proactive Monitoring</h5>
                <p className="text-white" style={{opacity: 0.8, fontSize: '14px', margin: 0, lineHeight: 1.6}}>We monitor your systems 24/7 and fix issues before they impact your business. Automated alerts and preventive maintenance.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="service__card text-center h-100" style={{background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '40px 30px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease'}}>
                <div className="icon mb-25" style={{display: 'inline-block'}}>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="white" fillOpacity="0.1"/>
                    <path d="M28 23C28 21.3431 29.3431 20 31 20H39C40.6569 20 42 21.3431 42 23V27H44C44.5523 27 45 27.4477 45 28V45C45 45.5523 44.5523 46 44 46H26C25.4477 46 25 45.5523 25 45V28C25 27.4477 25.4477 27 26 27H28V23Z" stroke="white" strokeWidth="2"/>
                    <path d="M32 24H38V27H32V24Z" fill="white"/>
                  </svg>
                </div>
                <h5 className="text-white mb-15" style={{fontSize: '19px', fontWeight: 600}}>Strategic IT Planning</h5>
                <p className="text-white" style={{opacity: 0.8, fontSize: '14px', margin: 0, lineHeight: 1.6}}>Technology roadmaps, budgeting, and planning aligned with your business goals. We think ahead so you don't have to.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="service__card text-center h-100" style={{background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '40px 30px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease'}}>
                <div className="icon mb-25" style={{display: 'inline-block'}}>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="white" fillOpacity="0.1"/>
                    <rect x="25" y="22" width="20" height="26" rx="2" stroke="white" strokeWidth="2"/>
                    <path d="M29 27H41M29 32H41M29 37H38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h5 className="text-white mb-15" style={{fontSize: '19px', fontWeight: 600}}>Cloud Services</h5>
                <p className="text-white" style={{opacity: 0.8, fontSize: '14px', margin: 0, lineHeight: 1.6}}>Azure & AWS migrations, Microsoft 365 setup, and cloud optimization. Move to the cloud with confidence.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="service__card text-center h-100" style={{background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '40px 30px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease'}}>
                <div className="icon mb-25" style={{display: 'inline-block'}}>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="white" fillOpacity="0.1"/>
                    <rect x="25" y="25" width="20" height="20" rx="2" stroke="white" strokeWidth="2"/>
                    <path d="M35 30V40M30 35H40" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h5 className="text-white mb-15" style={{fontSize: '19px', fontWeight: 600}}>Cybersecurity</h5>
                <p className="text-white" style={{opacity: 0.8, fontSize: '14px', margin: 0, lineHeight: 1.6}}>Threat protection, security monitoring, compliance support, and employee training to keep your business safe.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
              <div className="service__card text-center h-100" style={{background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '40px 30px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease'}}>
                <div className="icon mb-25" style={{display: 'inline-block'}}>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="white" fillOpacity="0.1"/>
                    <circle cx="35" cy="35" r="10" stroke="white" strokeWidth="2"/>
                    <path d="M35 20V25M35 45V50M50 35H45M25 35H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M45 25L41 29M29 41L25 45M45 45L41 41M29 29L25 25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h5 className="text-white mb-15" style={{fontSize: '19px', fontWeight: 600}}>Network Management</h5>
                <p className="text-white" style={{opacity: 0.8, fontSize: '14px', margin: 0, lineHeight: 1.6}}>Network design, Wi-Fi setup, firewall management, and performance optimization for reliable connectivity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="choose-area sub-bg pt-120 pb-120">
        <div className="container">
          <div className="section-header text-center mb-60">
            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
              WHY OUTSOURCE YOUR IT?
            </h5>
            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">The <span>Benefits</span> of Outsourced IT</h2>
            <p className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{maxWidth: '700px', margin: '20px auto 0', color: '#666'}}>Why UK small businesses choose outsourced IT support over hiring in-house staff.</p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="choose__card text-center h-100" style={{background: '#fff', borderRadius: '15px', padding: '40px 30px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', transition: 'all 0.3s ease', border: '2px solid transparent'}}>
                <div className="icon mb-25" style={{display: 'inline-block'}}>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#3C72FC" fillOpacity="0.1"/>
                    <path d="M30 28H40M30 32H40M30 36H35" stroke="#3C72FC" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M25 24C25 22.3431 26.3431 21 28 21H42C43.6569 21 45 22.3431 45 24V46C45 47.6569 43.6569 49 42 49H28C26.3431 49 25 47.6569 25 46V24Z" stroke="#3C72FC" strokeWidth="2.5"/>
                    <circle cx="35" cy="43" r="1.5" fill="#3C72FC"/>
                  </svg>
                </div>
                <h4 className="mb-15" style={{fontSize: '20px', fontWeight: 600, color: '#1a1a1a'}}>Predictable Costs</h4>
                <p style={{color: '#666', lineHeight: 1.7, margin: 0}}>Fixed monthly fees instead of unpredictable break-fix costs. Budget with confidence.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
              <div className="choose__card text-center h-100" style={{background: '#fff', borderRadius: '15px', padding: '40px 30px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', transition: 'all 0.3s ease', border: '2px solid transparent'}}>
                <div className="icon mb-25" style={{display: 'inline-block'}}>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#3C72FC" fillOpacity="0.1"/>
                    <circle cx="30" cy="30" r="6" stroke="#3C72FC" strokeWidth="2.5"/>
                    <circle cx="44" cy="30" r="6" stroke="#3C72FC" strokeWidth="2.5"/>
                    <circle cx="30" cy="45" r="6" stroke="#3C72FC" strokeWidth="2.5"/>
                    <circle cx="44" cy="45" r="6" stroke="#3C72FC" strokeWidth="2.5"/>
                  </svg>
                </div>
                <h4 className="mb-15" style={{fontSize: '20px', fontWeight: 600, color: '#1a1a1a'}}>Entire IT Team</h4>
                <p style={{color: '#666', lineHeight: 1.7, margin: 0}}>Access to specialists across all IT areas — for less than one full-time salary.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="choose__card text-center h-100" style={{background: '#fff', borderRadius: '15px', padding: '40px 30px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', transition: 'all 0.3s ease', border: '2px solid transparent'}}>
                <div className="icon mb-25" style={{display: 'inline-block'}}>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#3C72FC" fillOpacity="0.1"/>
                    <circle cx="35" cy="35" r="15" stroke="#3C72FC" strokeWidth="2.5"/>
                    <path d="M35 22V35L42 42" stroke="#3C72FC" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="mb-15" style={{fontSize: '20px', fontWeight: 600, color: '#1a1a1a'}}>Faster Response</h4>
                <p style={{color: '#666', lineHeight: 1.7, margin: 0}}>No waiting for the "IT person" to come back from holiday. We're always available.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="choose__card text-center h-100" style={{background: '#fff', borderRadius: '15px', padding: '40px 30px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', transition: 'all 0.3s ease', border: '2px solid transparent'}}>
                <div className="icon mb-25" style={{display: 'inline-block'}}>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#3C72FC" fillOpacity="0.1"/>
                    <path d="M35 20L28 24V32C28 38 32 43 35 48C38 43 42 38 42 32V24L35 20Z" stroke="#3C72FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M31 33L34 36L40 30" stroke="#3C72FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="mb-15" style={{fontSize: '20px', fontWeight: 600, color: '#1a1a1a'}}>Proactive Protection</h4>
                <p style={{color: '#666', lineHeight: 1.7, margin: 0}}>We prevent problems instead of just fixing them. Less downtime, fewer emergencies.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="choose__card text-center h-100" style={{background: '#fff', borderRadius: '15px', padding: '40px 30px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', transition: 'all 0.3s ease', border: '2px solid transparent'}}>
                <div className="icon mb-25" style={{display: 'inline-block'}}>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#3C72FC" fillOpacity="0.1"/>
                    <path d="M25 30L35 25L45 30V45L35 50L25 45V30Z" stroke="#3C72FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="35" cy="37" r="5" stroke="#3C72FC" strokeWidth="2.5"/>
                  </svg>
                </div>
                <h4 className="mb-15" style={{fontSize: '20px', fontWeight: 600, color: '#1a1a1a'}}>Latest Technology</h4>
                <p style={{color: '#666', lineHeight: 1.7, margin: 0}}>Access to enterprise-grade tools and expertise without the enterprise price tag.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
              <div className="choose__card text-center h-100" style={{background: '#fff', borderRadius: '15px', padding: '40px 30px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', transition: 'all 0.3s ease', border: '2px solid transparent'}}>
                <div className="icon mb-25" style={{display: 'inline-block'}}>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#3C72FC" fillOpacity="0.1"/>
                    <path d="M22 35H28M42 35H48M35 22V28M35 42V48" stroke="#3C72FC" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="35" cy="35" r="8" stroke="#3C72FC" strokeWidth="2.5"/>
                  </svg>
                </div>
                <h4 className="mb-15" style={{fontSize: '20px', fontWeight: 600, color: '#1a1a1a'}}>Scale as You Grow</h4>
                <p style={{color: '#666', lineHeight: 1.7, margin: 0}}>Easy to add users, services, or support as your business expands.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="process-area pt-120 pb-120">
        <div className="container">
          <div className="section-header text-center mb-60">
            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
              HOW IT WORKS
            </h5>
            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Getting Started is <span>Simple</span></h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="process__item text-center">
                <div className="icon mb-30">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="#3C72FC" fillOpacity="0.1"/>
                    <text x="40" y="52" textAnchor="middle" fill="#3C72FC" fontSize="32" fontWeight="bold">1</text>
                  </svg>
                </div>
                <h4 className="mb-15">Free IT Assessment</h4>
                <p>We'll review your current setup and identify opportunities for improvement — no obligation.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="process__item text-center">
                <div className="icon mb-30">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="#3C72FC" fillOpacity="0.1"/>
                    <text x="40" y="52" textAnchor="middle" fill="#3C72FC" fontSize="32" fontWeight="bold">2</text>
                  </svg>
                </div>
                <h4 className="mb-15">Smooth Onboarding</h4>
                <p>We'll document your systems, set up monitoring, and ensure everything is secure and optimized.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="process__item text-center">
                <div className="icon mb-30">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="#3C72FC" fillOpacity="0.1"/>
                    <text x="40" y="52" textAnchor="middle" fill="#3C72FC" fontSize="32" fontWeight="bold">3</text>
                  </svg>
                </div>
                <h4 className="mb-15">Ongoing Support</h4>
                <p>Enjoy peace of mind with 24/7 monitoring, helpdesk support, and regular check-ins.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Outsourced IT Support */}
      <section className="about-area pt-40 pb-20">
        <div className="container">
          <div className="section-header text-center mb-30">
            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
              UNDERSTANDING OUTSOURCING
            </h5>
            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">What Is <span>Outsourced IT Support?</span></h2>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
              <p className="mb-20" style={{fontSize: '16px', lineHeight: 1.8}}>
                Outsourced IT support means getting seamless tech operations at your fingertips without the burden of building your own IT team. We handle all the technical aspects of your business, including providing the manpower and equipment needed for your unique requirements.
              </p>
              <p style={{fontSize: '16px', lineHeight: 1.8}}>
                By outsourcing your IT support services, you get to focus on growing your business while we do what we do best. Whether you're shifting from an in-house team or another provider, the transition is seamless with minimal disruption to your operations.
              </p>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="about__image">
                <img src="/assets/images/about/about-image2.png" alt="What is Outsourced IT" style={{width: '500px', maxWidth: '100%', height: 'auto'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Transition */}
      <section className="process-area secondary-bg pt-120 pb-120">
        <div className="container">
          <div className="section-header text-center mb-60">
            <h5 className="wow fadeInUp text-white" data-wow-delay="00ms" data-wow-duration="1500ms">
              <svg width="28" height="12" viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.75" y="0.75" width="18.5" height="10.5" rx="5.25" stroke="white" strokeWidth="1.5"></rect>
                <rect x="8" width="20" height="12" rx="6" fill="white"></rect>
              </svg>
              SMOOTH TRANSITION
            </h5>
            <h2 className="text-white wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Making the Switch is <span>Seamless</span></h2>
            <p className="text-white wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{maxWidth: '800px', margin: '20px auto 0', opacity: 0.9}}>
              Whether you're working with another outsourced team or using in-house support, our onboarding ensures little to no disruption to your day-to-day operations.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="text-center" style={{padding: '30px 20px'}}>
                <div className="icon mb-20">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.1"/>
                    <path d="M22 28H38M22 32H35" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M20 22C20 20.8954 20.8954 20 22 20H38C39.1046 20 40 20.8954 40 22V38C40 39.1046 39.1046 40 38 40H22C20.8954 40 20 39.1046 20 38V22Z" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h5 className="text-white mb-10">Email Migration</h5>
                <p className="text-white" style={{opacity: 0.8, fontSize: '14px'}}>Seamless transfer of all email accounts and data</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
              <div className="text-center" style={{padding: '30px 20px'}}>
                <div className="icon mb-20">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.1"/>
                    <rect x="22" y="18" width="16" height="24" rx="2" stroke="white" strokeWidth="2"/>
                    <path d="M26 22H34M26 26H34M26 30H31" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h5 className="text-white mb-10">Hardware Setup</h5>
                <p className="text-white" style={{opacity: 0.8, fontSize: '14px'}}>Physical installation and configuration</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="text-center" style={{padding: '30px 20px'}}>
                <div className="icon mb-20">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.1"/>
                    <circle cx="25" cy="25" r="5" stroke="white" strokeWidth="2"/>
                    <circle cx="35" cy="25" r="5" stroke="white" strokeWidth="2"/>
                    <path d="M20 38C20 35 23 32 25 32H35C37 32 40 35 40 38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h5 className="text-white mb-10">User Training</h5>
                <p className="text-white" style={{opacity: 0.8, fontSize: '14px'}}>Briefings and training for your team</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="text-center" style={{padding: '30px 20px'}}>
                <div className="icon mb-20">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.1"/>
                    <circle cx="30" cy="30" r="10" stroke="white" strokeWidth="2"/>
                    <path d="M30 20V25M30 35V40M40 30H35M25 30H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h5 className="text-white mb-10">Network Setup</h5>
                <p className="text-white" style={{opacity: 0.8, fontSize: '14px'}}>User accounts, networks, and passwords</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-area pt-120 pb-120">
        <div className="container">
          <div className="section-header text-center mb-60">
            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
              COMMON QUESTIONS
            </h5>
            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Frequently Asked <span>Questions</span></h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item wow fadeInUp mb-3" data-wow-delay="00ms" style={{border: '1px solid #e5e5e5', borderRadius: '10px', overflow: 'hidden'}}>
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" style={{fontWeight: 600, background: '#f8f9fa'}}>
                      What does it mean when something is outsourced?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      "Outsourcing" is when a company hires a third party to perform services that are usually done by hiring their own employees. For instance, a company can hire outsourced IT instead of establishing their own in-house IT department. Outsourcing is typically undertaken by companies who want to cut down on expenses while accessing expert services.
                    </div>
                  </div>
                </div>

                <div className="accordion-item wow fadeInUp mb-3" data-wow-delay="100ms" style={{border: '1px solid #e5e5e5', borderRadius: '10px', overflow: 'hidden'}}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" style={{fontWeight: 600}}>
                      What is the benefit of outsourcing?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      The main benefit is reducing expenses while accessing expertise and high-quality services—often better than an in-house team can provide. Another key benefit is increased efficiency. By outsourcing IT tasks to a competent third-party company, your resources can focus on other areas, resulting in higher productivity.
                    </div>
                  </div>
                </div>

                <div className="accordion-item wow fadeInUp mb-3" data-wow-delay="200ms" style={{border: '1px solid #e5e5e5', borderRadius: '10px', overflow: 'hidden'}}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" style={{fontWeight: 600}}>
                      Why do companies outsource IT?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Companies outsource IT to reduce costs and focus more on their core business goals and planning. For instance, a company can outsource their IT helpdesk, freeing up time to be spent on marketing, sales, or product development instead.
                    </div>
                  </div>
                </div>

                <div className="accordion-item wow fadeInUp mb-3" data-wow-delay="300ms" style={{border: '1px solid #e5e5e5', borderRadius: '10px', overflow: 'hidden'}}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" style={{fontWeight: 600}}>
                      Why is it cheaper to outsource?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Reduced operational costs are the primary reason. Because outsourced IT specialists don't work on-site, businesses save money on equipment, resources like electricity, office space, and employee benefits. Moreover, many outsourcing companies offer highly competitive prices for their services.
                    </div>
                  </div>
                </div>

                <div className="accordion-item wow fadeInUp mb-3" data-wow-delay="400ms" style={{border: '1px solid #e5e5e5', borderRadius: '10px', overflow: 'hidden'}}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" style={{fontWeight: 600}}>
                      What does "managed IT service" mean?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      A "managed IT service" is when a business outsources certain IT services to a third-party IT professional or managed service provider (MSP). Services range from simple tasks like maintaining IT equipment to complete outsourcing of an entire IT function to an external team.
                    </div>
                  </div>
                </div>

                <div className="accordion-item wow fadeInUp" data-wow-delay="500ms" style={{border: '1px solid #e5e5e5', borderRadius: '10px', overflow: 'hidden'}}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" style={{fontWeight: 600}}>
                      Is IT outsourcing still relevant?
                    </button>
                  </h2>
                  <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Absolutely! The concept is increasingly popular. With fast-evolving technology, digital outsourcing delivers faster, cheaper, and more effective services. Outsourcing IT has become a very popular trend among small and medium companies, and this isn't likely to change in the foreseeable future.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-area secondary-bg pt-120 pb-120">
        <div className="container">
          <div className="cta__wrp gradient-bg" style={{padding: '60px 40px'}}>
            <div className="row align-items-center">
              <div className="col-lg-8 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                <h2 className="text-white mb-20">Ready to Outsource Your IT?</h2>
                <p className="text-white mb-0" style={{fontSize: '18px', opacity: 0.9}}>Get a free IT assessment and find out how much time and money you could save with outsourced IT support.</p>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0 wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
                <Link to="/contact" className="btn-one">Get Free Assessment <i className="fa-regular fa-arrow-right-long"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Solutions;
