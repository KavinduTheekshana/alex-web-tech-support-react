import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Microsoft365() {
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
    <>
      <style>
        {`
          /* License Cards Styling */
          .license-card {
              background: white;
              border-radius: 20px;
              padding: 40px 30px;
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              position: relative;
              overflow: hidden;
              box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
              height: 100%;
              display: flex;
              flex-direction: column;
              border: 3px solid transparent;
          }

          .license-card::before {
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

          .license-card:hover::before {
              transform: scaleX(1);
          }

          .license-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 20px 40px rgba(60, 114, 252, 0.15);
              border-color: #3C72FC;
          }

          .license-card.featured {
              background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
              transform: scale(1.05);
              box-shadow: 0 15px 40px rgba(60, 114, 252, 0.3);
              border-color: #3C72FC;
          }

          .license-card.featured:hover {
              transform: scale(1.08) translateY(-10px);
          }

          .license-card.featured * {
              color: white !important;
          }

          .license-card.featured .badge {
              background: rgba(255, 255, 255, 0.2) !important;
              color: white !important;
          }

          .license-card.featured .price {
              color: white !important;
          }

          .license-card.featured .feature-item i {
              color: white !important;
          }

          .license-card.featured .btn-license {
              background: white !important;
              color: #3C72FC !important;
          }

          .license-card.featured .btn-license:hover {
              background: rgba(255, 255, 255, 0.9) !important;
          }

          .license-header {
              text-align: center;
              margin-bottom: 30px;
          }

          .license-icon {
              width: 80px;
              height: 80px;
              background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
              border-radius: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 20px;
          }

          .license-card.featured .license-icon {
              background: rgba(255, 255, 255, 0.2);
          }

          .license-icon i {
              font-size: 36px;
              color: white;
          }

          .license-name {
              font-size: 1.75rem;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 10px;
          }

          .license-description {
              color: #666;
              font-size: 0.95rem;
              margin-bottom: 20px;
          }

          .price {
              font-size: 2.5rem;
              font-weight: 800;
              color: #1a1a1a;
              line-height: 1;
              margin-bottom: 8px;
          }

          .price-currency {
              font-size: 1.3rem;
              font-weight: 600;
          }

          .price-period {
              font-size: 0.9rem;
              color: #666;
              font-weight: 400;
              margin-bottom: 20px;
          }

          .feature-list {
              list-style: none;
              padding: 0;
              margin: 25px 0;
              flex-grow: 1;
          }

          .feature-item {
              padding: 10px 0;
              display: flex;
              align-items: flex-start;
          }

          .feature-item i {
              color: #3C72FC;
              margin-right: 12px;
              font-size: 14px;
              margin-top: 3px;
          }

          .feature-item span {
              flex: 1;
              color: #555;
              font-size: 0.9rem;
              line-height: 1.6;
          }

          .btn-license {
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

          .btn-license:hover {
              transform: translateY(-2px);
              box-shadow: 0 10px 25px rgba(60, 114, 252, 0.3);
              color: white;
          }

          /* Copilot Card Styling */
          .copilot-card {
              background: linear-gradient(135deg, #0F0D1D 0%, #3C72FC 100%);
              border-radius: 25px;
              padding: 60px 50px;
              color: white;
              position: relative;
              overflow: hidden;
              box-shadow: 0 15px 40px rgba(60, 114, 252, 0.3);
          }

          .copilot-card::before {
              content: '';
              position: absolute;
              top: -50%;
              right: -10%;
              width: 500px;
              height: 500px;
              background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
              border-radius: 50%;
          }

          .copilot-icon {
              width: 100px;
              height: 100px;
              background: rgba(255, 255, 255, 0.15);
              border-radius: 25px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 30px;
          }

          .copilot-icon i {
              font-size: 48px;
              color: white;
          }

          .copilot-card h3 {
              font-size: 2.5rem;
              font-weight: 800;
              margin-bottom: 20px;
              color: white;
          }

          .copilot-card .price {
              font-size: 3rem;
              color: white;
              margin-bottom: 15px;
          }

          .copilot-features {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              gap: 20px;
              margin: 30px 0;
          }

          .copilot-feature {
              display: flex;
              align-items: flex-start;
          }

          .copilot-feature i {
              color: #43e97b;
              margin-right: 12px;
              font-size: 16px;
              margin-top: 3px;
          }

          .copilot-feature span {
              color: rgba(255, 255, 255, 0.9);
              line-height: 1.6;
          }

          /* Benefits Section */
          .benefit-card {
              background: white;
              border-radius: 20px;
              padding: 40px 35px;
              text-align: center;
              transition: all 0.4s ease;
              box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
              height: 100%;
          }

          .benefit-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 20px 40px rgba(60, 114, 252, 0.15);
          }

          .benefit-icon {
              width: 80px;
              height: 80px;
              background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
              border-radius: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 25px;
              transition: all 0.4s ease;
              position: relative;
              z-index: 1;
          }

          .benefit-card:hover .benefit-icon {
              transform: scale(1.1) rotate(5deg);
          }

          .benefit-icon i {
              font-size: 36px;
              color: white !important;
              position: relative;
              z-index: 2;
              display: block;
          }

          .benefit-card h4 {
              font-size: 1.4rem;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 15px;
          }

          .benefit-card p {
              color: #666;
              line-height: 1.7;
              margin-bottom: 0;
          }

          /* Migration Process */
          .process-step {
              position: relative;
              padding-left: 80px;
              margin-bottom: 40px;
          }

          .process-number {
              position: absolute;
              left: 0;
              top: 0;
              width: 60px;
              height: 60px;
              background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
              border-radius: 15px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.5rem;
              font-weight: 800;
              color: white;
          }

          .process-step h4 {
              font-size: 1.3rem;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 10px;
          }

          .process-step p {
              color: #666;
              line-height: 1.7;
              margin-bottom: 0;
          }

          /* CTA Box */
          .cta-specialist {
              background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
              border-radius: 25px;
              padding: 60px;
              text-align: center;
              color: white;
              position: relative;
              overflow: hidden;
          }

          .cta-specialist::before {
              content: '';
              position: absolute;
              top: -50%;
              left: -10%;
              width: 500px;
              height: 500px;
              background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
              border-radius: 50%;
          }

          .cta-specialist h3 {
              font-size: 2.5rem;
              font-weight: 800;
              margin-bottom: 20px;
              color: white;
          }

          .cta-specialist p {
              font-size: 1.2rem;
              margin-bottom: 30px;
              color: rgba(255, 255, 255, 0.9);
          }

          .btn-cta-white {
              display: inline-block;
              padding: 18px 45px;
              background: white;
              color: #3C72FC;
              border-radius: 12px;
              font-weight: 700;
              font-size: 1.1rem;
              text-decoration: none;
              transition: all 0.3s ease;
          }

          .btn-cta-white:hover {
              transform: translateY(-3px);
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
              color: #3C72FC;
          }

          /* Comparison Table */
          .comparison-table {
              background: white;
              border-radius: 20px;
              overflow: hidden;
              box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          }

          .comparison-table table {
              width: 100%;
              margin-bottom: 0;
          }

          .comparison-table thead {
              background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
          }

          .comparison-table thead th {
              color: white;
              font-weight: 700;
              padding: 20px 15px;
              text-align: center;
              border: none;
          }

          .comparison-table tbody td {
              padding: 18px 15px;
              border-bottom: 1px solid #f0f0f0;
              text-align: center;
              vertical-align: middle;
          }

          .comparison-table tbody tr:last-child td {
              border-bottom: none;
          }

          .comparison-table tbody td:first-child {
              text-align: left;
              font-weight: 600;
              color: #1a1a1a;
          }

          .comparison-table i.fa-check {
              color: #43e97b;
              font-size: 18px;
          }

          .comparison-table i.fa-xmark {
              color: #ddd;
              font-size: 18px;
          }

          @media (max-width: 991px) {
              .copilot-card {
                  padding: 40px 30px;
              }

              .cta-specialist {
                  padding: 40px 30px;
              }
          }
        `}
      </style>

      <main>
        {/* Page banner area start here */}
        <section className="banner__inner-page bg-image pt-180 pb-180" data-background="assets/images/banner/banner-inner-page.jpg">
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
            <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Microsoft 365 Licensing</h2>
            <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <Link to="/">Home</Link><span><i className="fa-regular fa-angles-right mx-2"></i>Microsoft 365</span>
            </div>
          </div>
        </section>
        {/* Page banner area end here */}

        {/* Intro Section */}
        <section className="pt-120 pb-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <div className="mb-3">
                  <span className="badge text-white px-3 py-2" style={{background: '#007bff', borderRadius: '20px', fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px'}}>
                    <i className="fa-brands fa-microsoft me-1"></i>MICROSOFT 365 PARTNER
                  </span>
                </div>
                <h2 className="wow fadeInUp mb-4" data-wow-delay="200ms" data-wow-duration="1500ms" style={{fontSize: '2.75rem', fontWeight: '700', color: '#000'}}>
                  Get the Right Microsoft 365 License for Your Business
                </h2>
                <p className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{color: '#666', fontSize: '1.1rem', lineHeight: '1.8'}}>
                  As a certified Microsoft Partner, we help UK small businesses choose, deploy, and optimize Microsoft 365. From licensing right-sizing to security setup and ongoing support, we ensure you get maximum value from your investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* License Plans Section */}
        <section className="pt-60 pb-120" style={{background: '#f8f9fa'}}>
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="wow fadeInUp mb-3" data-wow-delay="200ms" data-wow-duration="1500ms" style={{fontSize: '2.5rem', fontWeight: '700', color: '#000'}}>
                  Microsoft 365 Business Plans
                </h2>
                <p className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{color: '#666', fontSize: '1.1rem'}}>
                  Choose the plan that fits your business needs. All prices are per user, per month (annual commitment).
                </p>
              </div>
            </div>

            <div className="row g-4 align-items-center mb-5">
              {/* Business Basic */}
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div className="license-card">
                  <div className="license-header">
                    <div className="license-icon">
                      <i className="fa-brands fa-microsoft"></i>
                    </div>
                    <div className="mb-3">
                      <span className="badge" style={{background: '#e3f2fd', color: '#3C72FC', fontSize: '0.75rem', fontWeight: '700', padding: '6px 15px', borderRadius: '20px'}}>BASIC</span>
                    </div>
                    <h3 className="license-name">Business Basic</h3>
                    <p className="license-description">Essential cloud productivity tools</p>
                    <div className="price">
                      <span className="price-currency">£</span>4.70
                    </div>
                    <p className="price-period">per user / month</p>
                  </div>
                  <ul className="feature-list">
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>Web & mobile versions of Office apps</span>
                    </li>
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>Microsoft Teams (chat, calls, meetings)</span>
                    </li>
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>1 TB OneDrive cloud storage</span>
                    </li>
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>Business-class email (50 GB mailbox)</span>
                    </li>
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>Security & compliance tools</span>
                    </li>
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>Standard support from Microsoft</span>
                    </li>
                  </ul>
                  <Link to="/contact?subject=Microsoft 365 Business Basic" className="btn-license">Get Started</Link>
                </div>
              </div>

              {/* Business Standard (Featured) */}
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                <div className="license-card featured">
                  <div className="license-header">
                    <div className="license-icon">
                      <i className="fa-brands fa-microsoft"></i>
                    </div>
                    <div className="mb-3">
                      <span className="badge" style={{background: 'rgba(255, 255, 255, 0.2)', color: 'white', fontSize: '0.75rem', fontWeight: '700', padding: '6px 15px', borderRadius: '20px'}}>MOST POPULAR</span>
                    </div>
                    <h3 className="license-name">Business Standard</h3>
                    <p className="license-description">Complete productivity suite with desktop apps</p>
                    <div className="price">
                      <span className="price-currency">£</span>9.40
                    </div>
                    <p className="price-period">per user / month</p>
                  </div>
                  <ul className="feature-list">
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span><strong>Desktop Office apps</strong> (Word, Excel, PowerPoint, Outlook)</span>
                    </li>
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>Microsoft Teams (chat, calls, meetings)</span>
                    </li>
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>1 TB OneDrive cloud storage</span>
                    </li>
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>Business-class email (50 GB mailbox)</span>
                    </li>
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>Webinar hosting (up to 300 attendees)</span>
                    </li>
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>Customer appointment booking</span>
                    </li>
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>Enhanced security & compliance</span>
                    </li>
                  </ul>
                  <Link to="/contact?subject=Microsoft 365 Business Standard" className="btn-license">Get Started</Link>
                </div>
              </div>

              {/* Business Premium */}
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="license-card">
                  <div className="license-header">
                    <div className="license-icon">
                      <i className="fa-brands fa-microsoft"></i>
                    </div>
                    <div className="mb-3">
                      <span className="badge" style={{background: '#fff3e0', color: '#0F0D1D', fontSize: '0.75rem', fontWeight: '700', padding: '6px 15px', borderRadius: '20px'}}>PREMIUM</span>
                    </div>
                    <h3 className="license-name">Business Premium</h3>
                    <p className="license-description">Advanced security & device management</p>
                    <div className="price">
                      <span className="price-currency">£</span>17.60
                    </div>
                    <p className="price-period">per user / month</p>
                  </div>
                  <ul className="feature-list">
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span><strong>Everything in Business Standard</strong></span>
                    </li>
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span><strong>Advanced cybersecurity</strong> (Defender for Business)</span>
                    </li>
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>Advanced threat protection</span>
                    </li>
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>Device management (MDM/MAM)</span>
                    </li>
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>Information protection & governance</span>
                    </li>
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>Azure Virtual Desktop (Windows 11)</span>
                    </li>
                    <li className="feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>Advanced compliance tools</span>
                    </li>
                  </ul>
                  <Link to="/contact?subject=Microsoft 365 Business Premium" className="btn-license">Get Started</Link>
                </div>
              </div>
            </div>

            {/* Copilot Add-on */}
            <div className="row justify-content-center">
              <div className="col-lg-10 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="copilot-card">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
                      <div className="copilot-icon">
                        <i className="fa-solid fa-robot"></i>
                      </div>
                      <h3>Microsoft 365 Copilot</h3>
                      <p style={{fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '15px'}}>AI-powered productivity assistant</p>
                      <div className="price">
                        <span className="price-currency">£</span>24.70
                      </div>
                      <p className="price-period" style={{color: 'rgba(255, 255, 255, 0.8)'}}>per user / month add-on</p>
                    </div>
                    <div className="col-lg-8">
                      <div className="copilot-features">
                        <div className="copilot-feature">
                          <i className="fa-solid fa-check"></i>
                          <span>AI assistance in Word, Excel, PowerPoint, Outlook</span>
                        </div>
                        <div className="copilot-feature">
                          <i className="fa-solid fa-check"></i>
                          <span>Summarize meetings & create action items in Teams</span>
                        </div>
                        <div className="copilot-feature">
                          <i className="fa-solid fa-check"></i>
                          <span>Generate content, drafts, and presentations</span>
                        </div>
                        <div className="copilot-feature">
                          <i className="fa-solid fa-check"></i>
                          <span>Analyze data and create insights automatically</span>
                        </div>
                        <div className="copilot-feature">
                          <i className="fa-solid fa-check"></i>
                          <span>Search across all your business data</span>
                        </div>
                        <div className="copilot-feature">
                          <i className="fa-solid fa-check"></i>
                          <span>Enterprise-grade security & privacy</span>
                        </div>
                      </div>
                      <p style={{fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '20px', marginBottom: '0'}}>
                        <i className="fa-solid fa-info-circle me-2"></i>Requires Microsoft 365 Business Standard or Premium license
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="wow fadeInUp mb-3" data-wow-delay="200ms" data-wow-duration="1500ms" style={{fontSize: '2.5rem', fontWeight: '700', color: '#000'}}>
                  Why Choose Us for Microsoft 365?
                </h2>
                <p className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{color: '#666', fontSize: '1.1rem'}}>
                  Expert deployment, configuration, and ongoing support to maximize your Microsoft 365 investment
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <h4>License Right-Sizing</h4>
                  <p>We analyze your needs to ensure you're on the optimal plan—no overpaying for unused features.</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="fa-solid fa-shield" style={{color: '#ffffff !important'}}></i>
                  </div>
                  <h4>Security Baselines</h4>
                  <p>MFA setup, conditional access policies, and security best practices configured from day one.</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="fa-solid fa-plane-departure"></i>
                  </div>
                  <h4>Migration & Adoption</h4>
                  <p>Seamless email and data migration from your existing platform, plus user training and adoption support.</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="fa-solid fa-headset"></i>
                  </div>
                  <h4>24/7 Helpdesk Option</h4>
                  <p>Add our 24/7 IT support for round-the-clock assistance with Microsoft 365 and all your IT needs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Process Section */}
        <section className="pt-120 pb-120" style={{background: '#f8f9fa'}}>
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="wow fadeInUp mb-3" data-wow-delay="200ms" data-wow-duration="1500ms" style={{fontSize: '2.5rem', fontWeight: '700', color: '#000'}}>
                  Our Microsoft 365 Setup Process
                </h2>
                <p className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{color: '#666', fontSize: '1.1rem'}}>
                  A proven approach to getting your team up and running quickly and securely
                </p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="process-step wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <div className="process-number">1</div>
                  <h4>Discovery & License Assessment</h4>
                  <p>We analyze your current setup, user requirements, and business needs to recommend the right Microsoft 365 licenses and features.</p>
                </div>

                <div className="process-step wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                  <div className="process-number">2</div>
                  <h4>Tenant Setup & Security Configuration</h4>
                  <p>We provision your Microsoft 365 tenant, configure security baselines including MFA, conditional access, and implement data protection policies.</p>
                </div>

                <div className="process-step wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="process-number">3</div>
                  <h4>Email & Data Migration</h4>
                  <p>Seamless migration of your existing emails, contacts, calendars, and files from your current platform to Microsoft 365 with zero downtime.</p>
                </div>

                <div className="process-step wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="process-number">4</div>
                  <h4>User Training & Adoption Support</h4>
                  <p>Comprehensive training for your team on Microsoft 365 apps, Teams collaboration, and security best practices to ensure successful adoption.</p>
                </div>

                <div className="process-step wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{marginBottom: 0}}>
                  <div className="process-number">5</div>
                  <h4>Ongoing Support & Optimization</h4>
                  <p>Continuous monitoring, license management, security updates, and ongoing user support to maximize your Microsoft 365 investment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="wow fadeInUp mb-3" data-wow-delay="200ms" data-wow-duration="1500ms" style={{fontSize: '2.5rem', fontWeight: '700', color: '#000'}}>
                  Compare Microsoft 365 Plans
                </h2>
                <p className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{color: '#666', fontSize: '1.1rem'}}>
                  Detailed feature comparison to help you choose the right plan
                </p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-12 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                <div className="comparison-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th style={{textAlign: 'left'}}>Feature</th>
                        <th>Business Basic</th>
                        <th>Business Standard</th>
                        <th>Business Premium</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Desktop Office Apps (Word, Excel, PowerPoint, Outlook)</td>
                        <td><i className="fa-solid fa-xmark"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                      </tr>
                      <tr>
                        <td>Web & Mobile Office Apps</td>
                        <td><i className="fa-solid fa-check"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                      </tr>
                      <tr>
                        <td>Microsoft Teams (Chat, Calls, Meetings)</td>
                        <td><i className="fa-solid fa-check"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                      </tr>
                      <tr>
                        <td>Business Email (Outlook) - 50 GB Mailbox</td>
                        <td><i className="fa-solid fa-check"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                      </tr>
                      <tr>
                        <td>1 TB OneDrive Cloud Storage per User</td>
                        <td><i className="fa-solid fa-check"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                      </tr>
                      <tr>
                        <td>SharePoint & Microsoft Lists</td>
                        <td><i className="fa-solid fa-check"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                      </tr>
                      <tr>
                        <td>Webinar Hosting (up to 300 attendees)</td>
                        <td><i className="fa-solid fa-xmark"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                      </tr>
                      <tr>
                        <td>Customer Appointment Booking (Bookings)</td>
                        <td><i className="fa-solid fa-xmark"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                      </tr>
                      <tr>
                        <td>Advanced Threat Protection</td>
                        <td><i className="fa-solid fa-xmark"></i></td>
                        <td><i className="fa-solid fa-xmark"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                      </tr>
                      <tr>
                        <td>Microsoft Defender for Business (Cybersecurity)</td>
                        <td><i className="fa-solid fa-xmark"></i></td>
                        <td><i className="fa-solid fa-xmark"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                      </tr>
                      <tr>
                        <td>Device Management (MDM/MAM)</td>
                        <td><i className="fa-solid fa-xmark"></i></td>
                        <td><i className="fa-solid fa-xmark"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                      </tr>
                      <tr>
                        <td>Information Protection & Data Loss Prevention</td>
                        <td><i className="fa-solid fa-xmark"></i></td>
                        <td><i className="fa-solid fa-xmark"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                      </tr>
                      <tr>
                        <td>Azure Virtual Desktop (Windows 11)</td>
                        <td><i className="fa-solid fa-xmark"></i></td>
                        <td><i className="fa-solid fa-xmark"></i></td>
                        <td><i className="fa-solid fa-check"></i></td>
                      </tr>
                      <tr>
                        <td><strong>Price per User/Month (Annual)</strong></td>
                        <td><strong>£4.70</strong></td>
                        <td><strong>£9.40</strong></td>
                        <td><strong>£17.60</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-120 pb-120" style={{background: '#f8f9fa'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="cta-specialist">
                  <h3><i className="fa-solid fa-comments me-3"></i>Speak to a Licensing Specialist</h3>
                  <p>Not sure which plan is right for your business? Our Microsoft 365 experts will help you choose the optimal licenses, plan your migration, and ensure a smooth deployment.</p>
                  <Link to="/contact?subject=Microsoft 365 Licensing Consultation" className="btn-cta-white">
                    <i className="fa-solid fa-calendar-check me-2"></i>Book a Free Consultation
                  </Link>
                  <p style={{fontSize: '0.95rem', marginTop: '25px', marginBottom: '0', color: 'rgba(255, 255, 255, 0.8)'}}>
                    <i className="fa-solid fa-phone me-2"></i>Or call us directly: <a href="tel:+447459425326" style={{color: 'white', textDecoration: 'none'}}><strong>+44 7459 425326</strong></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Microsoft365;
