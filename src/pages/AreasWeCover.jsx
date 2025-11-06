import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function AreasWeCover() {
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
          /* Coverage Areas Styling */
          .coverage-section {
              background: white;
              border-radius: 25px;
              padding: 50px 40px;
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
              margin-bottom: 40px;
              transition: all 0.3s ease;
          }

          .coverage-section:hover {
              transform: translateY(-5px);
              box-shadow: 0 15px 45px rgba(60, 114, 252, 0.12);
          }

          .coverage-icon {
              width: 90px;
              height: 90px;
              background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
              border-radius: 18px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 25px;
          }

          .coverage-icon i {
              font-size: 40px;
              color: white;
          }

          .coverage-section h3 {
              font-size: 1.8rem;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 20px;
          }

          .coverage-section p {
              color: #666;
              font-size: 1.05rem;
              line-height: 1.8;
              margin-bottom: 25px;
          }

          /* Area Lists */
          .area-list {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 15px;
              margin-top: 25px;
          }

          .area-item {
              background: #f8f9fa;
              padding: 15px 20px;
              border-radius: 12px;
              color: #444;
              font-size: 0.95rem;
              display: flex;
              align-items: center;
              transition: all 0.3s ease;
              border: 2px solid transparent;
          }

          .area-item:hover {
              background: white;
              border-color: #3C72FC;
              transform: translateX(5px);
          }

          .area-item i {
              color: #3C72FC;
              margin-right: 10px;
              font-size: 1rem;
          }

          /* Service Highlights */
          .service-highlights {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              gap: 25px;
              margin-top: 40px;
          }

          .highlight-card {
              background: white;
              padding: 35px 25px;
              border-radius: 18px;
              text-align: center;
              box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
              transition: all 0.3s ease;
              border: 2px solid transparent;
          }

          .highlight-card:hover {
              transform: translateY(-5px);
              border-color: #3C72FC;
              box-shadow: 0 10px 30px rgba(60, 114, 252, 0.15);
          }

          .highlight-icon {
              width: 70px;
              height: 70px;
              background: linear-gradient(135deg, rgba(60, 114, 252, 0.1) 0%, rgba(15, 13, 29, 0.1) 100%);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 20px;
              transition: all 0.3s ease;
          }

          .highlight-card:hover .highlight-icon {
              background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
          }

          .highlight-icon i {
              font-size: 30px;
              color: #3C72FC;
              transition: all 0.3s ease;
          }

          .highlight-card:hover .highlight-icon i {
              color: white;
          }

          .highlight-card h4 {
              font-size: 1.2rem;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 12px;
          }

          .highlight-card p {
              color: #666;
              line-height: 1.6;
              margin-bottom: 0;
              font-size: 0.95rem;
          }

          /* Map Section */
          .map-section {
              background: linear-gradient(135deg, rgba(60, 114, 252, 0.05) 0%, rgba(15, 13, 29, 0.05) 100%);
              border-radius: 25px;
              padding: 60px 50px;
              text-align: center;
              margin-top: 60px;
          }

          .map-section h3 {
              font-size: 2rem;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 20px;
          }

          .map-section p {
              color: #666;
              font-size: 1.1rem;
              line-height: 1.8;
              margin-bottom: 35px;
              max-width: 800px;
              margin-left: auto;
              margin-right: auto;
          }

          /* CTA Box */
          .cta-box {
              background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
              border-radius: 25px;
              padding: 60px 50px;
              text-align: center;
              color: white;
              margin-top: 60px;
          }

          .cta-box h3 {
              color: white;
              font-size: 2.2rem;
              font-weight: 700;
              margin-bottom: 20px;
          }

          .cta-box p {
              color: rgba(255, 255, 255, 0.9);
              font-size: 1.15rem;
              margin-bottom: 35px;
              line-height: 1.7;
          }

          .cta-box .btn-white {
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

          .cta-box .btn-white:hover {
              transform: translateY(-3px);
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
              color: #3C72FC;
          }

          /* Response Times */
          .response-times {
              background: white;
              border-radius: 20px;
              padding: 40px;
              box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
              margin-top: 40px;
          }

          .response-times h4 {
              font-size: 1.5rem;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 25px;
              text-align: center;
          }

          .response-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 25px;
          }

          .response-item {
              text-align: center;
              padding: 25px 20px;
              background: #f8f9fa;
              border-radius: 15px;
              transition: all 0.3s ease;
          }

          .response-item:hover {
              background: linear-gradient(135deg, rgba(60, 114, 252, 0.05) 0%, rgba(15, 13, 29, 0.05) 100%);
              transform: scale(1.05);
          }

          .response-item .time {
              font-size: 2.5rem;
              font-weight: 800;
              color: #3C72FC;
              line-height: 1;
              margin-bottom: 10px;
          }

          .response-item .label {
              font-size: 0.9rem;
              color: #666;
              font-weight: 600;
          }

          @media (max-width: 991px) {
              .coverage-section {
                  padding: 40px 30px;
              }

              .area-list {
                  grid-template-columns: 1fr;
              }

              .cta-box {
                  padding: 40px 30px;
              }

              .cta-box h3 {
                  font-size: 1.8rem;
              }

              .map-section {
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
            <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Areas We Cover</h2>
            <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <Link to="/">Home</Link>
              <span><i className="fa-regular fa-angles-right mx-2"></i>Areas We Cover</span>
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
                    <i className="fa-solid fa-map-location-dot me-1"></i>UK-WIDE COVERAGE
                  </span>
                </div>
                <h2 className="wow fadeInUp mb-4" data-wow-delay="200ms" data-wow-duration="1500ms" style={{fontSize: '2.75rem', fontWeight: '700', color: '#000'}}>
                  Local Engineers, National Coverage
                </h2>
                <p className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{color: '#666', fontSize: '1.1rem', lineHeight: '1.8'}}>
                  Whether you need <strong>on-site support in London</strong> or <strong>remote assistance UK-wide</strong>, we've got you covered. Fast response times, local knowledge, and 24/7 availability wherever you are.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="pb-60">
          <div className="container">
            {/* Central London */}
            <div className="row wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="col-12">
                <div className="coverage-section">
                  <div className="coverage-icon">
                    <i className="fa-solid fa-building"></i>
                  </div>
                  <h3>Central London</h3>
                  <p>
                    Full on-site and remote IT support across Central London. Our engineers can be with you within <strong>2-4 hours</strong> for urgent issues, with same-day service available for most areas.
                  </p>
                  <div className="area-list">
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Westminster</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>City of London</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Camden</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Islington</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Kensington & Chelsea</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Tower Hamlets</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Southwark</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Lambeth</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Hackney</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Hammersmith & Fulham</div>
                  </div>
                </div>
              </div>
            </div>

            {/* North London */}
            <div className="row wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="col-12">
                <div className="coverage-section">
                  <div className="coverage-icon">
                    <i className="fa-solid fa-compass"></i>
                  </div>
                  <h3>North London</h3>
                  <p>
                    On-site IT support across North London with fast response times. Ideal for businesses in residential and commercial areas.
                  </p>
                  <div className="area-list">
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Barnet</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Enfield</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Haringey</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Waltham Forest</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Finchley</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Highgate</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Wood Green</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Tottenham</div>
                  </div>
                </div>
              </div>
            </div>

            {/* South London */}
            <div className="row wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="col-12">
                <div className="coverage-section">
                  <div className="coverage-icon">
                    <i className="fa-solid fa-map-pin"></i>
                  </div>
                  <h3>South London</h3>
                  <p>
                    Professional IT support for South London businesses. Same-day on-site visits available for urgent issues.
                  </p>
                  <div className="area-list">
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Croydon</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Bromley</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Lewisham</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Greenwich</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Wandsworth</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Merton</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Sutton</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Kingston upon Thames</div>
                  </div>
                </div>
              </div>
            </div>

            {/* East London */}
            <div className="row wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
              <div className="col-12">
                <div className="coverage-section">
                  <div className="coverage-icon">
                    <i className="fa-solid fa-location-arrow"></i>
                  </div>
                  <h3>East London</h3>
                  <p>
                    Fast IT support for East London's thriving business districts, including Canary Wharf and Stratford.
                  </p>
                  <div className="area-list">
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Newham</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Redbridge</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Barking & Dagenham</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Havering</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Canary Wharf</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Stratford</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Ilford</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Romford</div>
                  </div>
                </div>
              </div>
            </div>

            {/* West London */}
            <div className="row wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="col-12">
                <div className="coverage-section">
                  <div className="coverage-icon">
                    <i className="fa-solid fa-street-view"></i>
                  </div>
                  <h3>West London</h3>
                  <p>
                    Comprehensive IT support across West London, including Heathrow corridor business areas.
                  </p>
                  <div className="area-list">
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Ealing</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Hounslow</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Hillingdon</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Brent</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Harrow</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Richmond upon Thames</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Uxbridge</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Hayes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Greater London & Home Counties */}
            <div className="row wow fadeInUp" data-wow-delay="700ms" data-wow-duration="1500ms">
              <div className="col-12">
                <div className="coverage-section">
                  <div className="coverage-icon">
                    <i className="fa-solid fa-map"></i>
                  </div>
                  <h3>Greater London & Home Counties</h3>
                  <p>
                    On-site and remote support for businesses in Greater London and surrounding counties. Next-day on-site visits available.
                  </p>
                  <div className="area-list">
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Hertfordshire</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Essex</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Surrey</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Kent</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Berkshire</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Buckinghamshire</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>St Albans</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Watford</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Reading</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Guildford</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Slough</div>
                    <div className="area-item"><i className="fa-solid fa-location-dot"></i>Luton</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Remote UK-Wide */}
            <div className="row wow fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="col-12">
                <div className="coverage-section">
                  <div className="coverage-icon">
                    <i className="fa-solid fa-laptop"></i>
                  </div>
                  <h3>Remote Support — UK-Wide</h3>
                  <p>
                    <strong>Full remote IT support available anywhere in the UK.</strong> 24/7 monitoring, helpdesk access, cloud management, and proactive maintenance — no matter where your business is located.
                  </p>
                  <p style={{fontWeight: '600', color: '#3C72FC'}}>
                    <i className="fa-solid fa-check-circle me-2"></i>Perfect for businesses outside our on-site coverage area
                    <br />
                    <i className="fa-solid fa-check-circle me-2"></i>Remote-first companies and distributed teams
                    <br />
                    <i className="fa-solid fa-check-circle me-2"></i>Cost-effective support with the same high-quality service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Highlights */}
        <section className="py-80" style={{background: '#f8f9fa'}}>
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="wow fadeInUp mb-3" data-wow-delay="200ms" data-wow-duration="1500ms" style={{fontSize: '2.5rem', fontWeight: '700', color: '#000'}}>
                  What You Get in Every Area
                </h2>
                <p className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{color: '#666', fontSize: '1.1rem'}}>
                  The same high-quality service, whether you're in Central London or remote across the UK
                </p>
              </div>
            </div>

            <div className="service-highlights">
              <div className="highlight-card wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div className="highlight-icon">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <h4>24/7 Support</h4>
                <p>Round-the-clock monitoring and helpdesk access, no matter where you're based</p>
              </div>

              <div className="highlight-card wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                <div className="highlight-icon">
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <h4>Named Engineers</h4>
                <p>Dedicated UK-based engineers who know your business and systems</p>
              </div>

              <div className="highlight-card wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="highlight-icon">
                  <i className="fa-solid fa-shield" style={{color: '#3C72FC !important'}}></i>
                </div>
                <h4>Proactive Monitoring</h4>
                <p>24/7 system monitoring to catch issues before they affect your business</p>
              </div>

              <div className="highlight-card wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="highlight-icon">
                  <i className="fa-solid fa-truck-fast"></i>
                </div>
                <h4>Fast Response</h4>
                <p>Guaranteed response times with same-day on-site visits where available</p>
              </div>
            </div>

            {/* Response Times */}
            <div className="response-times wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <h4>Our Response Times</h4>
              <div className="response-grid">
                <div className="response-item">
                  <div className="time">2-4h</div>
                  <div className="label">Central London On-site</div>
                </div>
                <div className="response-item">
                  <div className="time">4-6h</div>
                  <div className="label">Greater London On-site</div>
                </div>
                <div className="response-item">
                  <div className="time">1 Day</div>
                  <div className="label">Home Counties On-site</div>
                </div>
                <div className="response-item">
                  <div className="time">24/7</div>
                  <div className="label">Remote Support UK-wide</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="pb-60">
          <div className="container">
            <div className="map-section wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <h3>
                <i className="fa-solid fa-map-location-dot me-3" style={{color: '#3C72FC'}}></i>
                Not Sure If We Cover Your Area?
              </h3>
              <p>
                We're constantly expanding our on-site coverage. Even if your area isn't listed, we can provide <strong>full remote support UK-wide</strong>, with on-site visits arranged as needed. Get in touch to discuss your requirements.
              </p>
              <Link to="/contact?subject=Check Coverage Area" className="btn-one" style={{padding: '15px 35px', fontSize: '1rem'}}>
                <i className="fa-solid fa-phone me-2"></i>Check Your Area
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-120">
          <div className="container">
            <div className="cta-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <h3>Need On-Site Support in Your Area?</h3>
              <p>
                Whether you need an engineer on-site today or want to set up regular visits, we're here to help. Contact us to discuss your location and support requirements — we'll confirm availability and response times for your area.
              </p>
              <Link to="/contact?subject=Request On-site Support" className="btn-white">
                <i className="fa-solid fa-calendar-check me-2"></i>Request On-site Support
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AreasWeCover;
