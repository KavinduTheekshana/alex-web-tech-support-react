import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function OurApproach() {
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
          /* Approach Section Cards */
          .approach-card {
              background: white;
              border-radius: 25px;
              padding: 50px 40px;
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
              margin-bottom: 40px;
              transition: all 0.4s ease;
              border: 2px solid transparent;
          }

          .approach-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 20px 50px rgba(60, 114, 252, 0.15);
              border-color: #3C72FC;
          }

          .approach-icon {
              width: 100px;
              height: 100px;
              background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
              border-radius: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 30px;
              transition: all 0.4s ease;
          }

          .approach-card:hover .approach-icon {
              transform: scale(1.1) rotate(5deg);
          }

          .approach-icon i {
              font-size: 45px;
              color: white;
          }

          .approach-card h3 {
              font-size: 2rem;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 20px;
          }

          .approach-card p {
              color: #666;
              font-size: 1.05rem;
              line-height: 1.8;
              margin-bottom: 20px;
          }

          .approach-card ul {
              list-style: none;
              padding: 0;
              margin: 25px 0;
          }

          .approach-card ul li {
              padding: 12px 0;
              color: #444;
              font-size: 1.05rem;
              display: flex;
              align-items: start;
              line-height: 1.6;
          }

          .approach-card ul li i {
              color: #3C72FC;
              margin-right: 15px;
              font-size: 1.2rem;
              margin-top: 3px;
          }

          .approach-card ul li strong {
              color: #1a1a1a;
              font-weight: 700;
          }

          /* Value Props Grid */
          .value-props {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 30px;
              margin-top: 60px;
          }

          .value-prop-card {
              background: white;
              padding: 40px 30px;
              border-radius: 20px;
              text-align: center;
              box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
              transition: all 0.3s ease;
              border: 2px solid transparent;
          }

          .value-prop-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 15px 40px rgba(60, 114, 252, 0.15);
              border-color: #3C72FC;
          }

          .value-prop-icon {
              width: 80px;
              height: 80px;
              background: linear-gradient(135deg, rgba(60, 114, 252, 0.1) 0%, rgba(15, 13, 29, 0.1) 100%);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 25px;
              transition: all 0.3s ease;
          }

          .value-prop-card:hover .value-prop-icon {
              background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
          }

          .value-prop-icon i {
              font-size: 35px;
              color: #3C72FC;
              transition: all 0.3s ease;
          }

          .value-prop-card:hover .value-prop-icon i {
              color: white;
          }

          .value-prop-card h4 {
              font-size: 1.3rem;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 15px;
          }

          .value-prop-card p {
              color: #666;
              line-height: 1.7;
              margin-bottom: 0;
              font-size: 1rem;
          }

          /* CTA Section */
          .cta-section {
              background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
              border-radius: 30px;
              padding: 70px 50px;
              text-align: center;
              color: white;
              margin-top: 80px;
          }

          .cta-section h2 {
              color: white;
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 20px;
          }

          .cta-section p {
              color: rgba(255, 255, 255, 0.9);
              font-size: 1.2rem;
              margin-bottom: 35px;
              line-height: 1.7;
          }

          .cta-buttons {
              display: flex;
              gap: 20px;
              justify-content: center;
              flex-wrap: wrap;
          }

          .btn-white {
              background: white;
              color: #3C72FC;
              padding: 18px 40px;
              border-radius: 12px;
              font-weight: 700;
              font-size: 1.1rem;
              text-decoration: none;
              transition: all 0.3s ease;
              display: inline-block;
          }

          .btn-white:hover {
              transform: translateY(-3px);
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
              color: #3C72FC;
          }

          .btn-outline-white {
              background: transparent;
              color: white;
              padding: 18px 40px;
              border-radius: 12px;
              font-weight: 700;
              font-size: 1.1rem;
              text-decoration: none;
              border: 2px solid white;
              transition: all 0.3s ease;
              display: inline-block;
          }

          .btn-outline-white:hover {
              background: white;
              color: #3C72FC;
              transform: translateY(-3px);
          }

          @media (max-width: 991px) {
              .approach-card {
                  padding: 40px 30px;
              }

              .cta-section {
                  padding: 50px 30px;
              }

              .cta-section h2 {
                  font-size: 2rem;
              }

              .cta-buttons {
                  flex-direction: column;
                  align-items: center;
              }

              .btn-white,
              .btn-outline-white {
                  width: 100%;
                  max-width: 300px;
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
            <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Our Approach</h2>
            <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <Link to="/">Home</Link>
              <span><i className="fa-regular fa-angles-right mx-2"></i></span>
              <Link to="/about">About</Link>
              <span><i className="fa-regular fa-angles-right mx-2"></i>Our Approach</span>
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
                    <i className="fa-solid fa-compass me-1"></i>OUR PHILOSOPHY
                  </span>
                </div>
                <h2 className="wow fadeInUp mb-4" data-wow-delay="200ms" data-wow-duration="1500ms" style={{fontSize: '2.75rem', fontWeight: '700', color: '#000'}}>
                  IT Support That Actually Makes Sense
                </h2>
                <p className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{color: '#666', fontSize: '1.1rem', lineHeight: '1.8'}}>
                  No jargon. No surprises. No hiding behind technical language. We believe IT support should be <strong>clear, reliable, and constantly improving</strong> — just like your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Approach Sections */}
        <section className="pb-60">
          <div className="container">
            {/* Plain-English IT */}
            <div className="row wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="col-12">
                <div className="approach-card">
                  <div className="approach-icon">
                    <i className="fa-solid fa-comments"></i>
                  </div>
                  <h3>Plain-English IT</h3>
                  <p>
                    <strong>We speak your language, not tech jargon.</strong> You didn't start a business to become an IT expert — you need a partner who can explain things clearly, fix problems fast, and never make you feel stupid for asking questions.
                  </p>
                  <p>
                    Our engineers are trained to communicate in plain English. Whether you're on the phone, reading a report, or sitting through a quarterly review, you'll always understand what's happening with your IT — and why it matters.
                  </p>

                  <h5 style={{fontWeight: '700', color: '#1a1a1a', marginTop: '30px', marginBottom: '15px', fontSize: '1.2rem'}}>What this means for you:</h5>
                  <ul>
                    <li>
                      <i className="fa-solid fa-check-circle"></i>
                      <span><strong>No tech jargon:</strong> We explain everything in terms that make sense to business owners, not IT departments.</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-check-circle"></i>
                      <span><strong>Clear documentation:</strong> Every change, update, and recommendation is documented in plain English — no acronyms unless we explain them first.</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-check-circle"></i>
                      <span><strong>Patient support:</strong> Ask the same question five times if you need to — our job is to make sure you understand, not to show off how clever we are.</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-check-circle"></i>
                      <span><strong>Business-focused advice:</strong> We translate technical decisions into business impact — cost, risk, productivity, and opportunity.</span>
                    </li>
                  </ul>

                  <p style={{marginTop: '25px', fontStyle: 'italic', color: '#555'}}>
                    <i className="fa-solid fa-quote-left me-2" style={{color: '#3C72FC'}}></i>
                    "If we can't explain it in a way you understand, we haven't done our job properly."
                  </p>
                </div>
              </div>
            </div>

            {/* Accountable Support */}
            <div className="row wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="col-12">
                <div className="approach-card">
                  <div className="approach-icon">
                    <i className="fa-solid fa-shield" style={{color: '#ffffff !important'}}></i>
                  </div>
                  <h3>Accountable Support</h3>
                  <p>
                    <strong>We take ownership of your IT, so you don't have to.</strong> When something goes wrong, you won't get excuses, finger-pointing, or "it's not our fault." You'll get a named engineer, a clear plan, and a promise to fix it — fast.
                  </p>
                  <p>
                    Accountability means transparency. You'll always know who's responsible for your IT, what they're working on, and how your systems are performing. No hiding behind ticket numbers or offshore call centres.
                  </p>

                  <h5 style={{fontWeight: '700', color: '#1a1a1a', marginTop: '30px', marginBottom: '15px', fontSize: '1.2rem'}}>What this means for you:</h5>
                  <ul>
                    <li>
                      <i className="fa-solid fa-check-circle"></i>
                      <span><strong>Named engineers:</strong> You'll have a dedicated team who know your business, your systems, and your people.</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-check-circle"></i>
                      <span><strong>UK-based support:</strong> All our engineers are based in the UK. No language barriers, no time zones, no outsourcing.</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-check-circle"></i>
                      <span><strong>Clear SLAs:</strong> We commit to response times in writing — and we track them. You'll see our performance in every monthly report.</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-check-circle"></i>
                      <span><strong>Proactive monitoring:</strong> We don't wait for you to call us. Our systems alert us to problems before they affect your team.</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-check-circle"></i>
                      <span><strong>Honest conversations:</strong> If we make a mistake, we own it. If something's going to cost more than expected, we tell you upfront.</span>
                    </li>
                  </ul>

                  <p style={{marginTop: '25px', fontStyle: 'italic', color: '#555'}}>
                    <i className="fa-solid fa-quote-left me-2" style={{color: '#3C72FC'}}></i>
                    "Your IT is our responsibility. If it breaks, we fix it — no excuses, no blame games."
                  </p>
                </div>
              </div>
            </div>

            {/* Continuous Improvement */}
            <div className="row wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="col-12">
                <div className="approach-card">
                  <div className="approach-icon">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <h3>Continuous Improvement</h3>
                  <p>
                    <strong>Your IT should get better over time, not just stay the same.</strong> We don't just "keep the lights on" — we actively look for ways to make your systems faster, safer, and more cost-effective.
                  </p>
                  <p>
                    Every quarter, we review your IT performance, identify opportunities, and recommend improvements. Some are quick wins (like automating a manual task). Others are strategic (like planning a cloud migration or upgrading security). Either way, you're always moving forward.
                  </p>

                  <h5 style={{fontWeight: '700', color: '#1a1a1a', marginTop: '30px', marginBottom: '15px', fontSize: '1.2rem'}}>What this means for you:</h5>
                  <ul>
                    <li>
                      <i className="fa-solid fa-check-circle"></i>
                      <span><strong>Quarterly reviews:</strong> Every three months, we sit down (virtually or in person) to review performance, discuss challenges, and plan improvements.</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-check-circle"></i>
                      <span><strong>Proactive recommendations:</strong> We suggest upgrades, optimisations, and cost savings — you decide what makes sense for your business.</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-check-circle"></i>
                      <span><strong>Performance tracking:</strong> Monthly reports show ticket trends, system uptime, security health, and response times — so you can see improvement over time.</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-check-circle"></i>
                      <span><strong>Cost optimisation:</strong> We regularly audit your software licenses, cloud spend, and hardware to make sure you're not overpaying.</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-check-circle"></i>
                      <span><strong>Future-ready IT:</strong> Technology moves fast. We make sure your systems keep pace — without risky "big bang" upgrades.</span>
                    </li>
                  </ul>

                  <p style={{marginTop: '25px', fontStyle: 'italic', color: '#555'}}>
                    <i className="fa-solid fa-quote-left me-2" style={{color: '#3C72FC'}}></i>
                    "Good IT support doesn't just fix problems — it prevents them. Great IT support makes your business better every quarter."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Props Section */}
        <section className="py-80" style={{background: '#f8f9fa'}}>
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="wow fadeInUp mb-3" data-wow-delay="200ms" data-wow-duration="1500ms" style={{fontSize: '2.5rem', fontWeight: '700', color: '#000'}}>
                  Why Our Approach Works
                </h2>
                <p className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{color: '#666', fontSize: '1.1rem'}}>
                  These aren't just nice ideas — they're practical commitments we make to every client
                </p>
              </div>
            </div>

            <div className="value-props">
              <div className="value-prop-card wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div className="value-prop-icon">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <h4>No Surprises</h4>
                <p>Transparent pricing, clear SLAs, and honest advice. You'll always know what you're paying for and why.</p>
              </div>

              <div className="value-prop-card wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                <div className="value-prop-icon">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <h4>Fast Response</h4>
                <p>UK-based engineers, 24/7 availability, and guaranteed response times. When you need help, we're there.</p>
              </div>

              <div className="value-prop-card wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="value-prop-icon">
                  <i className="fa-solid fa-users"></i>
                </div>
                <h4>Named Team</h4>
                <p>You'll work with the same engineers who know your business. No ticket numbers, no call centres.</p>
              </div>

              <div className="value-prop-card wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div className="value-prop-icon">
                  <i className="fa-solid fa-shield-alt"></i>
                </div>
                <h4>Proactive Security</h4>
                <p>We monitor for threats, patch vulnerabilities, and train your team — before problems become crises.</p>
              </div>

              <div className="value-prop-card wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                <div className="value-prop-icon">
                  <i className="fa-solid fa-file-chart-line"></i>
                </div>
                <h4>Clear Reporting</h4>
                <p>Monthly performance reports in plain English. See exactly what we're doing and how your IT is performing.</p>
              </div>

              <div className="value-prop-card wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="value-prop-icon">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <h4>Strategic Advice</h4>
                <p>Quarterly reviews, proactive recommendations, and long-term planning — your IT gets smarter over time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-120">
          <div className="container">
            <div className="cta-section wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <h2>Ready to Experience IT Support Done Right?</h2>
              <p>
                Let's talk about your IT challenges. Book a free consultation and discover how our approach can transform your technology from a headache into a competitive advantage.
              </p>
              <div className="cta-buttons">
                <Link to="/contact?subject=Book Free Consultation" className="btn-white">
                  <i className="fa-solid fa-calendar-check me-2"></i>Book Free Consultation
                </Link>
                <Link to="/services" className="btn-outline-white">
                  <i className="fa-solid fa-list-check me-2"></i>View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default OurApproach;
