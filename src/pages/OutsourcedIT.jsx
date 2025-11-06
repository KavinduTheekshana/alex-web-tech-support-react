import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function OutsourcedIT() {
  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
      }).init();
    }

    // Set data-background attributes
    const elements = document.querySelectorAll('[data-background]');
    elements.forEach(el => {
      const bg = el.getAttribute('data-background');
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
      }
    });
  }, []);

  return (
    <main>
      {/* Page banner area start here */}
      <section className="banner__inner-page bg-image pt-180 pb-180 bg-image"
               data-background="assets/images/banner/banner-inner-page.jpg">
        <div className="shape2 wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
          <img src="assets/images/banner/inner-banner-shape2.png" alt="shape" />
        </div>
        <div className="shape1 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
          <img src="assets/images/banner/inner-banner-shape1.png" alt="shape" />
        </div>
        <div className="shape3 wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
          <img className="sway__animationX" src="assets/images/banner/inner-banner-shape3.png" alt="shape" />
        </div>
        <div className="container">
          <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Outsourced IT Support</h2>
          <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Link to="/">Home</Link><span><i className="fa-regular fa-angles-right mx-2"></i>Outsourced IT Support</span>
          </div>
        </div>
      </section>
      {/* Page banner area end here */}

      {/* Why Outsource Section */}
      <section className="about-area pt-120 pb-120" style={{background: '#fff'}}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="about__left-item">
                <img src="assets/images/about/about-image1.jpg" alt="IT Support Team" style={{borderRadius: '15px', width: '100%', height: 'auto', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="ps-lg-5">
                <div className="mb-3">
                  <span className="badge text-white px-3 py-2" style={{background: '#007bff', borderRadius: '20px', fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px'}}>
                    <i className="fa-solid fa-headset me-1"></i>SUPPORT & 24/7 HELPDESK
                  </span>
                </div>
                <h2 className="mb-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{fontSize: '2.75rem', fontWeight: '700', lineHeight: '1.3', color: '#000'}}>
                  Why Outsource Your IT Support?
                </h2>
                <p className="mb-4 wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{color: '#555', fontSize: '1.05rem', lineHeight: '1.8'}}>
                  Outsourcing your IT support gives you access to a team of experts, reduces costs, and ensures your business stays secure and productive.
                </p>
                <p className="mb-0 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1500ms" style={{color: '#555', fontSize: '1.05rem', lineHeight: '1.8'}}>
                  Focus on your core business while we handle your technology needs, proactively monitoring, maintaining, and supporting your systems 24/7. Our UK-based engineers deliver rapid response times and friendly, expert support whenever you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="service-area pt-120 pb-120" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <div className="mb-3">
                <span className="badge text-white px-3 py-2" style={{background: '#007bff', borderRadius: '20px', fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px'}}>
                  <i className="fa-solid fa-box-archive me-1"></i>COMPLETE IT SUPPORT PACKAGE
                </span>
              </div>
              <h2 className="wow fadeInUp mb-0" data-wow-delay="200ms" data-wow-duration="1500ms" style={{fontSize: '2.75rem', fontWeight: '700', color: '#000'}}>What's Included</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="card h-100 border-0 shadow-sm" style={{borderRadius: '12px', padding: '30px', transition: 'all 0.3s'}}>
                <div className="mb-3">
                  <div style={{width: '60px', height: '60px', background: '#e3f2fd', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <i className="fa-solid fa-headset" style={{fontSize: '24px', color: '#007bff'}}></i>
                  </div>
                </div>
                <h4 style={{fontSize: '1.25rem', fontWeight: '700', color: '#000', marginBottom: '15px'}}>Unlimited Support</h4>
                <p style={{color: '#666', margin: '0', lineHeight: '1.6'}}>Unlimited remote & phone support whenever you need it</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
              <div className="card h-100 border-0 shadow-sm" style={{borderRadius: '12px', padding: '30px', transition: 'all 0.3s'}}>
                <div className="mb-3">
                  <div style={{width: '60px', height: '60px', background: '#e3f2fd', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <i className="fa-solid fa-clock" style={{fontSize: '24px', color: '#007bff'}}></i>
                  </div>
                </div>
                <h4 style={{fontSize: '1.25rem', fontWeight: '700', color: '#000', marginBottom: '15px'}}>24/7 Helpdesk</h4>
                <p style={{color: '#666', margin: '0', lineHeight: '1.6'}}>Round-the-clock helpdesk with rapid response times</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="card h-100 border-0 shadow-sm" style={{borderRadius: '12px', padding: '30px', transition: 'all 0.3s'}}>
                <div className="mb-3">
                  <div style={{width: '60px', height: '60px', background: '#e3f2fd', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <i className="fa-solid fa-chart-line" style={{fontSize: '24px', color: '#007bff'}}></i>
                  </div>
                </div>
                <h4 style={{fontSize: '1.25rem', fontWeight: '700', color: '#000', marginBottom: '15px'}}>Proactive Monitoring</h4>
                <p style={{color: '#666', margin: '0', lineHeight: '1.6'}}>Continuous monitoring & preventative maintenance</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="card h-100 border-0 shadow-sm" style={{borderRadius: '12px', padding: '30px', transition: 'all 0.3s'}}>
                <div className="mb-3">
                  <div style={{width: '60px', height: '60px', background: '#e3f2fd', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <i className="fa-solid fa-shield" style={{fontSize: '24px', color: '#007bff'}}></i>
                  </div>
                </div>
                <h4 style={{fontSize: '1.25rem', fontWeight: '700', color: '#000', marginBottom: '15px'}}>Cybersecurity</h4>
                <p style={{color: '#666', margin: '0', lineHeight: '1.6'}}>Comprehensive threat protection & security management</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="card h-100 border-0 shadow-sm" style={{borderRadius: '12px', padding: '30px', transition: 'all 0.3s'}}>
                <div className="mb-3">
                  <div style={{width: '60px', height: '60px', background: '#e3f2fd', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <i className="fa-brands fa-microsoft" style={{fontSize: '24px', color: '#007bff'}}></i>
                  </div>
                </div>
                <h4 style={{fontSize: '1.25rem', fontWeight: '700', color: '#000', marginBottom: '15px'}}>Microsoft 365</h4>
                <p style={{color: '#666', margin: '0', lineHeight: '1.6'}}>Expert support for Microsoft 365 & cloud services</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
              <div className="card h-100 border-0 shadow-sm" style={{borderRadius: '12px', padding: '30px', transition: 'all 0.3s'}}>
                <div className="mb-3">
                  <div style={{width: '60px', height: '60px', background: '#e3f2fd', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <i className="fa-solid fa-network-wired" style={{fontSize: '24px', color: '#007bff'}}></i>
                  </div>
                </div>
                <h4 style={{fontSize: '1.25rem', fontWeight: '700', color: '#000', marginBottom: '15px'}}>Device Management</h4>
                <p style={{color: '#666', margin: '0', lineHeight: '1.6'}}>Complete device & network infrastructure management</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="card h-100 border-0 shadow-sm" style={{borderRadius: '12px', padding: '30px', transition: 'all 0.3s'}}>
                <div className="mb-3">
                  <div style={{width: '60px', height: '60px', background: '#e3f2fd', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <i className="fa-solid fa-location-dot" style={{fontSize: '24px', color: '#007bff'}}></i>
                  </div>
                </div>
                <h4 style={{fontSize: '1.25rem', fontWeight: '700', color: '#000', marginBottom: '15px'}}>Onsite Visits</h4>
                <p style={{color: '#666', margin: '0', lineHeight: '1.6'}}>Onsite engineer visits when remote support isn't enough</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="card h-100 border-0 shadow-sm" style={{borderRadius: '12px', padding: '30px', transition: 'all 0.3s'}}>
                <div className="mb-3">
                  <div style={{width: '60px', height: '60px', background: '#e3f2fd', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <i className="fa-solid fa-users" style={{fontSize: '24px', color: '#007bff'}}></i>
                  </div>
                </div>
                <h4 style={{fontSize: '1.25rem', fontWeight: '700', color: '#000', marginBottom: '15px'}}>UK Engineers</h4>
                <p style={{color: '#666', margin: '0', lineHeight: '1.6'}}>Friendly, experienced UK-based support engineers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding/Process Section */}
      <section className="process-area pt-120 pb-120">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center mb-60">
                <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <svg className="me-1" width="28" height="12" viewBox="0 0 28 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.75" y="0.75" width="18.5" height="10.5" rx="5.25" stroke="#3C72FC"
                        strokeWidth="1.5" />
                    <rect x="8" width="20" height="12" rx="6" fill="#3C72FC" />
                  </svg>
                  Getting Started
                </h5>
                <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">How Onboarding Works</h2>
                <p className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">We make it simple to get started with professional IT support</p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="process__item text-center">
                <div className="process__number">
                  <span>01</span>
                </div>
                <h4 className="mt-25 mb-15">Discovery Call</h4>
                <p>We discuss your business needs and current IT setup to understand your requirements</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
              <div className="process__item text-center">
                <div className="process__number">
                  <span>02</span>
                </div>
                <h4 className="mt-25 mb-15">Proposal</h4>
                <p>You receive a tailored support plan with transparent pricing and clear deliverables</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="process__item text-center">
                <div className="process__number">
                  <span>03</span>
                </div>
                <h4 className="mt-25 mb-15">Onboarding</h4>
                <p>Our engineers set up monitoring, security tools, and support infrastructure</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="process__item text-center">
                <div className="process__number">
                  <span>04</span>
                </div>
                <h4 className="mt-25 mb-15">Go Live</h4>
                <p>You enjoy seamless, expert IT support and complete peace of mind!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-area secondary-bg">
        <div className="container">
          <div className="cta__wrp pt-100 pb-100">
            <div className="section-header text-center mb-40">
              <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                <svg className="me-1" width="28" height="12" viewBox="0 0 28 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.75" y="0.75" width="18.5" height="10.5" rx="5.25" stroke="white"
                      strokeWidth="1.5" />
                  <rect x="8" width="20" height="12" rx="6" fill="white" />
                </svg>
                Get Started Today
              </h5>
              <h2 className="text-white wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Ready for Reliable IT Support?</h2>
              <p className="text-white wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">Let's discuss how we can support your business with expert, proactive IT management</p>
            </div>
            <div className="text-center wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <Link to="/contact" className="btn-one me-3" style={{background: 'white', color: '#1a1a1a !important', border: '2px solid white'}}><span style={{color: '#1a1a1a !important'}}>Contact Us</span></Link>
              <Link to="/services" className="btn-one" style={{background: 'transparent', color: 'white !important', border: '2px solid white'}}><span style={{color: 'white !important'}}>View All Services</span></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OutsourcedIT;
