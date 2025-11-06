import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
  useEffect(() => {
    // Initialize data-background images
    if (window.jQuery) {
      window.jQuery('[data-background]').each(function() {
        window.jQuery(this).css('background-image', 'url(' + window.jQuery(this).attr('data-background') + ')');
      });
    }

    // Reinitialize WOW.js for scroll animations
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
      <style>{`
        .pricing-card {
          background: white;
          border-radius: 20px;
          padding: 45px 35px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .pricing-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #3C72FC 0%, #0F0D1D 100%);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .pricing-card:hover::before {
          transform: scaleX(1);
        }

        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .pricing-card.featured {
          background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
          transform: scale(1.05);
          box-shadow: 0 15px 40px rgba(60, 114, 252, 0.3);
        }

        .pricing-card.featured:hover {
          transform: scale(1.08) translateY(-10px);
        }

        .pricing-card.featured * {
          color: white !important;
        }

        .pricing-card.featured .badge {
          background: rgba(255, 255, 255, 0.2) !important;
          color: white !important;
        }

        .pricing-card.featured .price {
          color: white !important;
        }

        .pricing-card.featured .feature-item i {
          color: white !important;
        }

        .pricing-card.featured .btn-pricing {
          background: white !important;
          color: #3C72FC !important;
        }

        .pricing-card.featured .btn-pricing:hover {
          background: rgba(255, 255, 255, 0.9) !important;
        }

        .plan-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .plan-name {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 15px;
        }

        .plan-description {
          color: #666;
          font-size: 0.95rem;
          margin-bottom: 20px;
        }

        .price {
          font-size: 3rem;
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1;
          margin-bottom: 10px;
        }

        .price-currency {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .price-period {
          font-size: 1rem;
          color: #666;
          font-weight: 400;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 30px 0;
          flex-grow: 1;
        }

        .feature-item {
          padding: 12px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: flex-start;
        }

        .feature-item:last-child {
          border-bottom: none;
        }

        .feature-item i {
          color: #43e97b;
          margin-right: 12px;
          font-size: 16px;
          margin-top: 3px;
        }

        .feature-item.unavailable i {
          color: #ddd;
        }

        .feature-item span {
          flex: 1;
          color: #555;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .btn-pricing {
          width: 100%;
          padding: 15px 30px;
          border-radius: 12px;
          background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
          color: white;
          border: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          text-align: center;
          display: block;
          text-decoration: none;
        }

        .btn-pricing:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(60, 114, 252, 0.3);
          color: white;
        }

        .pricing-notes {
          background: #f8f9fa;
          border-radius: 15px;
          padding: 40px;
          margin-top: 60px;
        }

        .pricing-notes h4 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 20px;
        }

        .pricing-notes ul {
          list-style: none;
          padding: 0;
        }

        .pricing-notes li {
          padding: 10px 0;
          color: #555;
          font-size: 0.95rem;
          line-height: 1.7;
          display: flex;
          align-items: flex-start;
        }

        .pricing-notes li i {
          color: #3C72FC;
          margin-right: 12px;
          margin-top: 3px;
        }

        .helpdesk-badge {
          display: inline-block;
          background: #3C72FC;
          color: white;
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-left: 8px;
          text-transform: uppercase;
        }

        .cta-boxes {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        .cta-box {
          background: white;
          border-radius: 20px;
          padding: 40px 35px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .cta-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }

        .cta-box-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
        }

        .cta-box-icon i {
          font-size: 32px;
          color: white;
        }

        .cta-box h4 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 15px;
        }

        .cta-box p {
          color: #666;
          margin-bottom: 25px;
          line-height: 1.6;
        }
      `}</style>

      {/* Page banner area */}
      <section className="banner__inner-page bg-image pt-180 pb-180" data-background="/assets/images/banner/banner-inner-page.jpg">
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
          <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Pricing</h2>
          <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Link to="/">Home</Link><span><i className="fa-regular fa-angles-right mx-2"></i>Pricing</span>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="pt-120 pb-120" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <div className="mb-3">
                <span className="badge text-white px-3 py-2" style={{background: '#007bff', borderRadius: '20px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px'}}>
                  <i className="fa-solid fa-tag me-1"></i>TRANSPARENT PRICING
                </span>
              </div>
              <h2 className="wow fadeInUp mb-3" data-wow-delay="200ms" data-wow-duration="1500ms" style={{fontSize: '2.75rem', fontWeight: 700, color: '#000'}}>Choose Your IT Support Plan</h2>
              <p className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{color: '#666', fontSize: '1.1rem'}}>Flexible, transparent pricing with no hidden fees. All plans include proactive monitoring and UK-based support.</p>
            </div>
          </div>

          <div className="row g-4 align-items-center">
            {/* Essential Plan */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="pricing-card">
                <div className="plan-header">
                  <div className="mb-3">
                    <span className="badge" style={{background: 'rgba(60, 114, 252, 0.1)', color: '#3C72FC', fontSize: '0.75rem', fontWeight: 700, padding: '6px 15px', borderRadius: '20px'}}>ESSENTIAL</span>
                  </div>
                  <h3 className="plan-name">Essential Support</h3>
                  <p className="plan-description">Perfect for small businesses starting their IT journey</p>
                  <div className="price">
                    <span className="price-currency">£</span>99
                  </div>
                  <p className="price-period">per user / month</p>
                </div>

                <ul className="feature-list">
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span><strong>Business Hours Support</strong><br />9am - 6pm, Monday to Friday</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Unlimited remote support</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Proactive system monitoring</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Monthly security updates</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Device management</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Microsoft 365 support</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>4-hour response SLA</span>
                  </li>
                  <li className="feature-item unavailable">
                    <i className="fa-solid fa-xmark"></i>
                    <span>24/7 Helpdesk</span>
                  </li>
                  <li className="feature-item unavailable">
                    <i className="fa-solid fa-xmark"></i>
                    <span>Onsite visits included</span>
                  </li>
                  <li className="feature-item unavailable">
                    <i className="fa-solid fa-xmark"></i>
                    <span>Dedicated account manager</span>
                  </li>
                </ul>

                <Link to="/contact" className="btn-pricing">Get Started</Link>
              </div>
            </div>

            {/* Professional Plan (Featured) */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
              <div className="pricing-card featured">
                <div className="plan-header">
                  <div className="mb-3">
                    <span className="badge" style={{background: 'rgba(255, 255, 255, 0.2)', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '6px 15px', borderRadius: '20px'}}>MOST POPULAR</span>
                  </div>
                  <h3 className="plan-name">Professional Support</h3>
                  <p className="plan-description">Comprehensive IT support with 24/7 helpdesk access</p>
                  <div className="price">
                    <span className="price-currency">£</span>149
                  </div>
                  <p className="price-period">per user / month</p>
                </div>

                <ul className="feature-list">
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span><strong>24/7 Helpdesk</strong><span className="helpdesk-badge">24/7</span><br />Round-the-clock support</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Unlimited remote & phone support</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Proactive monitoring & maintenance</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Advanced cybersecurity protection</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Priority device management</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Microsoft 365 expert support</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>1-hour response SLA</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>2 onsite visits per quarter</span>
                  </li>
                  <li className="feature-item unavailable">
                    <i className="fa-solid fa-xmark"></i>
                    <span>Unlimited onsite visits</span>
                  </li>
                  <li className="feature-item unavailable">
                    <i className="fa-solid fa-xmark"></i>
                    <span>Dedicated account manager</span>
                  </li>
                </ul>

                <Link to="/contact" className="btn-pricing">Get Started</Link>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="pricing-card">
                <div className="plan-header">
                  <div className="mb-3">
                    <span className="badge" style={{background: '#0F0D1D', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '6px 15px', borderRadius: '20px'}}>PREMIUM</span>
                  </div>
                  <h3 className="plan-name">Premium Support</h3>
                  <p className="plan-description">Complete managed IT with dedicated account management</p>
                  <div className="price">
                    <span className="price-currency">£</span>249
                  </div>
                  <p className="price-period">per user / month</p>
                </div>

                <ul className="feature-list">
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span><strong>24/7 Priority Helpdesk</strong><span className="helpdesk-badge">24/7 VIP</span><br />Premium support access</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Unlimited remote, phone & onsite support</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Proactive monitoring & optimization</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Enterprise-grade cybersecurity</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Complete infrastructure management</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Microsoft 365 & cloud optimization</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>30-minute response SLA</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Unlimited onsite engineer visits</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Strategic IT consulting included</span>
                  </li>
                </ul>

                <Link to="/contact" className="btn-pricing">Get Started</Link>
              </div>
            </div>
          </div>

          {/* Pricing Notes */}
          <div className="pricing-notes wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="row">
              <div className="col-lg-6">
                <h4><i className="fa-solid fa-circle-info me-2" style={{color: '#3C72FC'}}></i>Important Notes</h4>
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span><strong>Minimum 5 users</strong> — All plans require a minimum of 5 users</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span><strong>VAT not included</strong> — All prices exclude VAT at 20%</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span><strong>12-month contract</strong> — Annual commitment with monthly billing available</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span><strong>Setup fee waived</strong> — No setup or onboarding fees for new clients</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <h4><i className="fa-solid fa-clock me-2" style={{color: '#3C72FC'}}></i>Service Level Agreements (SLAs)</h4>
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span><strong>Essential:</strong> 4-hour response time during business hours</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span><strong>Professional:</strong> 1-hour response time, 24/7 availability</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span><strong>Premium:</strong> 30-minute response time, priority support</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span><strong>Uptime guarantee:</strong> 99.9% uptime SLA on all monitored systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Boxes Section */}
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="wow fadeInUp mb-3" data-wow-delay="200ms" data-wow-duration="1500ms" style={{fontSize: '2.5rem', fontWeight: 700, color: '#000'}}>Need Help Choosing?</h2>
              <p className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{color: '#666', fontSize: '1.1rem'}}>We're here to help you find the perfect IT support solution for your business</p>
            </div>
          </div>

          <div className="cta-boxes">
            <div className="cta-box wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="cta-box-icon">
                <i className="fa-solid fa-comments"></i>
              </div>
              <h4>Talk to Our Team</h4>
              <p>Speak with one of our IT experts to discuss your requirements and get a personalized recommendation</p>
              <Link to="/contact" className="btn-one" style={{color: 'white'}}><span style={{color: 'white'}}>Contact Us</span></Link>
            </div>

            <div className="cta-box wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
              <div className="cta-box-icon" style={{background: 'linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%)'}}>
                <i className="fa-solid fa-calculator"></i>
              </div>
              <h4>Cost Calculator</h4>
              <p>Use our interactive calculator to estimate your monthly IT support costs based on your team size</p>
              <Link to="/contact?subject=Cost Calculator" className="btn-one" style={{color: 'white'}}><span style={{color: 'white'}}>Calculate Costs</span></Link>
            </div>

            <div className="cta-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="cta-box-icon" style={{background: 'linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%)'}}>
                <i className="fa-solid fa-file-lines"></i>
              </div>
              <h4>Compare Plans</h4>
              <p>Download our detailed comparison guide to see all features and benefits side-by-side</p>
              <Link to="/contact?subject=Plan Comparison" className="btn-one" style={{color: 'white'}}><span style={{color: 'white'}}>Get Comparison</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-120 pb-120" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <div className="mb-3">
                <span className="badge text-white px-3 py-2" style={{background: '#007bff', borderRadius: '20px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px'}}>
                  <i className="fa-solid fa-circle-question me-1"></i>FREQUENTLY ASKED QUESTIONS
                </span>
              </div>
              <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{fontSize: '2.5rem', fontWeight: 700, color: '#000'}}>Pricing FAQs</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="accordion" id="pricingFAQ">
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms" style={{border: 'none', borderRadius: '15px', overflow: 'hidden'}}>
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" style={{fontWeight: 600, fontSize: '1.1rem', padding: '20px 25px'}}>
                      What is the minimum commitment?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#pricingFAQ">
                    <div className="accordion-body" style={{padding: '20px 25px', color: '#666', lineHeight: 1.7}}>
                      All plans require a 12-month contract with a minimum of 5 users. We offer monthly billing for your convenience, and there are no setup fees for new clients.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms" style={{border: 'none', borderRadius: '15px', overflow: 'hidden'}}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" style={{fontWeight: 600, fontSize: '1.1rem', padding: '20px 25px'}}>
                      Can I upgrade or downgrade my plan?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#pricingFAQ">
                    <div className="accordion-body" style={{padding: '20px 25px', color: '#666', lineHeight: 1.7}}>
                      Yes! You can upgrade your plan at any time with immediate effect. Downgrades can be arranged at your next renewal date. Contact your account manager to discuss changes.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{border: 'none', borderRadius: '15px', overflow: 'hidden'}}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" style={{fontWeight: 600, fontSize: '1.1rem', padding: '20px 25px'}}>
                      What happens if I need more than the included onsite visits?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#pricingFAQ">
                    <div className="accordion-body" style={{padding: '20px 25px', color: '#666', lineHeight: 1.7}}>
                      Additional onsite visits can be arranged at £150 per visit for Essential and Professional plans. Premium plan customers enjoy unlimited onsite visits at no extra cost.
                    </div>
                  </div>
                </div>

                <div className="accordion-item wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{border: 'none', borderRadius: '15px', overflow: 'hidden'}}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" style={{fontWeight: 600, fontSize: '1.1rem', padding: '20px 25px'}}>
                      Are there any hidden costs?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#pricingFAQ">
                    <div className="accordion-body" style={{padding: '20px 25px', color: '#666', lineHeight: 1.7}}>
                      No hidden fees! Our pricing is completely transparent. The only additional costs would be hardware purchases, third-party software licenses, or additional onsite visits beyond your plan's allowance.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pricing;
