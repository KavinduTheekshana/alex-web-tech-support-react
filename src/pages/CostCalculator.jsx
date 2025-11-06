import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CostCalculator() {
  const [userCount, setUserCount] = useState(10);
  const [selectedPlan, setSelectedPlan] = useState(99);
  const [addons, setAddons] = useState({
    helpdesk247: false,
    onsite: false,
    security: false,
    backup: false,
    compliance: false
  });

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

  const calculateCosts = () => {
    const baseCost = userCount * selectedPlan;
    let addonsCost = 0;
    const addonsBreakdown = [];

    if (addons.helpdesk247) {
      const cost = 50 * userCount;
      addonsCost += cost;
      addonsBreakdown.push({
        name: '24/7 Priority Helpdesk',
        value: cost,
        users: userCount
      });
    }

    if (addons.onsite) {
      const cost = 150;
      addonsCost += cost;
      addonsBreakdown.push({
        name: 'On-site Support Allowance',
        value: cost,
        users: null // flat fee
      });
    }

    if (addons.security) {
      const cost = 35 * userCount;
      addonsCost += cost;
      addonsBreakdown.push({
        name: 'Advanced Security Package',
        value: cost,
        users: userCount
      });
    }

    if (addons.backup) {
      const cost = 25 * userCount;
      addonsCost += cost;
      addonsBreakdown.push({
        name: 'Backup & Disaster Recovery',
        value: cost,
        users: userCount
      });
    }

    if (addons.compliance) {
      const cost = 40 * userCount;
      addonsCost += cost;
      addonsBreakdown.push({
        name: 'Compliance Management (GDPR/ISO)',
        value: cost,
        users: userCount
      });
    }

    const totalCost = baseCost + addonsCost;

    return { baseCost, addonsCost, totalCost, addonsBreakdown };
  };

  const costs = calculateCosts();

  const handleAddonChange = (addonKey) => {
    setAddons(prev => ({
      ...prev,
      [addonKey]: !prev[addonKey]
    }));
  };

  return (
    <main>
      <style>
        {`
          /* Calculator Card Styling */
          .calculator-card {
            background: white;
            border-radius: 25px;
            padding: 50px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            margin-bottom: 40px;
          }

          .form-section {
            margin-bottom: 35px;
          }

          .form-section h4 {
            font-size: 1.3rem;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
          }

          .form-section h4 i {
            color: #3C72FC;
            margin-right: 12px;
            font-size: 1.4rem;
          }

          .form-label {
            font-weight: 600;
            color: #333;
            margin-bottom: 10px;
            font-size: 0.95rem;
          }

          .form-control {
            border: 2px solid #e0e0e0;
            border-radius: 12px;
            padding: 12px 18px;
            font-size: 1rem;
            transition: all 0.3s ease;
          }

          .form-control:focus {
            border-color: #3C72FC;
            box-shadow: 0 0 0 4px rgba(60, 114, 252, 0.1);
            outline: none;
          }

          .form-range {
            height: 8px;
            border-radius: 5px;
          }

          .form-range::-webkit-slider-thumb {
            background: #3C72FC;
            width: 20px;
            height: 20px;
          }

          .form-range::-moz-range-thumb {
            background: #3C72FC;
            width: 20px;
            height: 20px;
          }

          .user-count-display {
            display: inline-block;
            background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
            color: white;
            padding: 8px 20px;
            border-radius: 20px;
            font-weight: 700;
            font-size: 1.1rem;
            margin-left: 15px;
          }

          /* Plan Selection Cards */
          .plan-options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-bottom: 25px;
          }

          .plan-option {
            position: relative;
            cursor: pointer;
          }

          .plan-option input[type="radio"] {
            position: absolute;
            opacity: 0;
          }

          .plan-option label {
            display: block;
            padding: 20px;
            border: 3px solid #e0e0e0;
            border-radius: 15px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            background: white;
          }

          .plan-option input[type="radio"]:checked + label {
            border-color: #3C72FC;
            background: linear-gradient(135deg, rgba(60, 114, 252, 0.05) 0%, rgba(15, 13, 29, 0.05) 100%);
          }

          .plan-option label .plan-name {
            font-weight: 700;
            font-size: 1.1rem;
            color: #1a1a1a;
            margin-bottom: 8px;
          }

          .plan-option label .plan-price {
            color: #3C72FC;
            font-weight: 700;
            font-size: 1rem;
          }

          /* Checkbox Options */
          .addon-option {
            background: #f8f9fa;
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            transition: all 0.3s ease;
            border: 2px solid transparent;
          }

          .addon-option:hover {
            background: #fff;
            border-color: #3C72FC;
            box-shadow: 0 5px 15px rgba(60, 114, 252, 0.1);
          }

          .addon-option input[type="checkbox"] {
            width: 22px;
            height: 22px;
            margin-right: 15px;
            cursor: pointer;
            accent-color: #3C72FC;
          }

          .addon-info {
            flex: 1;
          }

          .addon-info .addon-title {
            font-weight: 700;
            color: #1a1a1a;
            font-size: 1.05rem;
            margin-bottom: 5px;
          }

          .addon-info .addon-desc {
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 0;
          }

          .addon-price {
            font-weight: 700;
            color: #3C72FC;
            font-size: 1.1rem;
            margin-left: 20px;
          }

          /* Results Card */
          .results-card {
            background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
            border-radius: 25px;
            padding: 50px;
            color: white;
            text-align: center;
            position: sticky;
            top: 100px;
          }

          .results-card h3 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: white;
          }

          .cost-breakdown {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 25px;
            margin-bottom: 25px;
          }

          .cost-item {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 10px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            gap: 15px;
          }

          .cost-item:last-child {
            border-bottom: none;
          }

          .cost-item .label {
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.95rem;
            flex: 1;
            text-align: left;
            line-height: 1.5;
          }

          .cost-item .value {
            color: white;
            font-weight: 700;
            font-size: 1rem;
            white-space: nowrap;
            flex-shrink: 0;
            text-align: right;
          }

          .total-cost {
            margin: 30px 0;
          }

          .total-cost .label {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 10px;
            color: rgba(255, 255, 255, 0.9);
          }

          .total-cost .amount {
            font-size: 4rem;
            font-weight: 800;
            color: white;
            line-height: 1;
            margin-bottom: 10px;
          }

          .total-cost .amount .currency {
            font-size: 2.5rem;
          }

          .total-cost .period {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.8);
          }

          .savings-badge {
            display: inline-block;
            background: rgba(67, 233, 123, 0.2);
            color: #43e97b;
            padding: 8px 20px;
            border-radius: 20px;
            font-weight: 700;
            font-size: 0.9rem;
            margin-top: 15px;
          }

          .btn-get-quote {
            width: 100%;
            padding: 18px 35px;
            background: white;
            color: #3C72FC;
            border: none;
            border-radius: 12px;
            font-weight: 700;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: block;
            text-align: center;
          }

          .btn-get-quote:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
            color: #3C72FC;
          }

          .disclaimer {
            margin-top: 20px;
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.6;
          }

          /* Features List */
          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            margin-top: 60px;
          }

          .feature-item {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
          }

          .feature-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(60, 114, 252, 0.15);
          }

          .feature-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #3C72FC 0%, #0F0D1D 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
          }

          .feature-icon i {
            font-size: 28px;
            color: white;
          }

          .feature-item h5 {
            font-size: 1.2rem;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 10px;
          }

          .feature-item p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 0;
          }

          @media (max-width: 991px) {
            .calculator-card {
              padding: 30px;
            }

            .results-card {
              position: relative;
              top: 0;
              margin-top: 40px;
            }

            .total-cost .amount {
              font-size: 3rem;
            }
          }
        `}
      </style>

      {/* Page banner area start */}
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
          <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Cost Calculator</h2>
          <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Link to="/">Home</Link><span><i className="fa-regular fa-angles-right mx-2"></i>Cost Calculator</span>
          </div>
        </div>
      </section>
      {/* Page banner area end */}

      {/* Intro Section */}
      <section className="pt-120 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="mb-3">
                <span className="badge text-white px-3 py-2" style={{background: '#007bff', borderRadius: '20px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px'}}>
                  <i className="fa-solid fa-calculator me-1"></i>INSTANT ESTIMATE
                </span>
              </div>
              <h2 className="wow fadeInUp mb-4" data-wow-delay="200ms" data-wow-duration="1500ms" style={{fontSize: '2.75rem', fontWeight: 700, color: '#000'}}>
                Calculate Your IT Support Costs
              </h2>
              <p className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{color: '#666', fontSize: '1.1rem', lineHeight: 1.8}}>
                Get an instant estimate of your monthly IT support costs. Simply adjust the options below to match your business needs and see real-time pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="pb-120">
        <div className="container">
          <div className="row">
            {/* Calculator Form */}
            <div className="col-lg-7 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="calculator-card">
                <form id="costCalculatorForm">
                  {/* Number of Users */}
                  <div className="form-section">
                    <h4><i className="fa-solid fa-users"></i>Number of Users</h4>
                    <label className="form-label">How many employees need IT support?</label>
                    <input
                      type="range"
                      className="form-range"
                      min="5"
                      max="100"
                      value={userCount}
                      step="1"
                      onChange={(e) => setUserCount(parseInt(e.target.value))}
                    />
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span style={{color: '#666'}}>5 users</span>
                      <span className="user-count-display">{userCount} users</span>
                      <span style={{color: '#666'}}>100 users</span>
                    </div>
                  </div>

                  {/* Support Plan Selection */}
                  <div className="form-section">
                    <h4><i className="fa-solid fa-shield-halved"></i>Support Plan</h4>
                    <label className="form-label">Choose your support level</label>
                    <div className="plan-options">
                      <div className="plan-option">
                        <input
                          type="radio"
                          name="plan"
                          id="planEssential"
                          value="99"
                          checked={selectedPlan === 99}
                          onChange={() => setSelectedPlan(99)}
                        />
                        <label htmlFor="planEssential">
                          <div className="plan-name">Essential</div>
                          <div className="plan-price">£99/user/mo</div>
                        </label>
                      </div>
                      <div className="plan-option">
                        <input
                          type="radio"
                          name="plan"
                          id="planProfessional"
                          value="149"
                          checked={selectedPlan === 149}
                          onChange={() => setSelectedPlan(149)}
                        />
                        <label htmlFor="planProfessional">
                          <div className="plan-name">Professional</div>
                          <div className="plan-price">£149/user/mo</div>
                        </label>
                      </div>
                      <div className="plan-option">
                        <input
                          type="radio"
                          name="plan"
                          id="planPremium"
                          value="249"
                          checked={selectedPlan === 249}
                          onChange={() => setSelectedPlan(249)}
                        />
                        <label htmlFor="planPremium">
                          <div className="plan-name">Premium</div>
                          <div className="plan-price">£249/user/mo</div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Add-ons */}
                  <div className="form-section">
                    <h4><i className="fa-solid fa-puzzle-piece"></i>Additional Services</h4>

                    {/* 24/7 Helpdesk */}
                    <div className="addon-option">
                      <input
                        type="checkbox"
                        id="addon247"
                        checked={addons.helpdesk247}
                        onChange={() => handleAddonChange('helpdesk247')}
                      />
                      <div className="addon-info">
                        <div className="addon-title">24/7 Priority Helpdesk</div>
                        <div className="addon-desc">Round-the-clock support access with priority response</div>
                      </div>
                      <div className="addon-price">+£50/user</div>
                    </div>

                    {/* On-site Support */}
                    <div className="addon-option">
                      <input
                        type="checkbox"
                        id="addonOnsite"
                        checked={addons.onsite}
                        onChange={() => handleAddonChange('onsite')}
                      />
                      <div className="addon-info">
                        <div className="addon-title">On-site Support Allowance</div>
                        <div className="addon-desc">4 on-site engineer visits per quarter included</div>
                      </div>
                      <div className="addon-price">+£150/mo</div>
                    </div>

                    {/* Advanced Security */}
                    <div className="addon-option">
                      <input
                        type="checkbox"
                        id="addonSecurity"
                        checked={addons.security}
                        onChange={() => handleAddonChange('security')}
                      />
                      <div className="addon-info">
                        <div className="addon-title">Advanced Security Package</div>
                        <div className="addon-desc">Enhanced threat protection, EDR, and security monitoring</div>
                      </div>
                      <div className="addon-price">+£35/user</div>
                    </div>

                    {/* Backup & DR */}
                    <div className="addon-option">
                      <input
                        type="checkbox"
                        id="addonBackup"
                        checked={addons.backup}
                        onChange={() => handleAddonChange('backup')}
                      />
                      <div className="addon-info">
                        <div className="addon-title">Backup & Disaster Recovery</div>
                        <div className="addon-desc">Automated backups with 30-day retention and fast recovery</div>
                      </div>
                      <div className="addon-price">+£25/user</div>
                    </div>

                    {/* Compliance */}
                    <div className="addon-option">
                      <input
                        type="checkbox"
                        id="addonCompliance"
                        checked={addons.compliance}
                        onChange={() => handleAddonChange('compliance')}
                      />
                      <div className="addon-info">
                        <div className="addon-title">Compliance Management (GDPR/ISO)</div>
                        <div className="addon-desc">Ongoing compliance monitoring and reporting</div>
                      </div>
                      <div className="addon-price">+£40/user</div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Results Card */}
            <div className="col-lg-5 wow fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="results-card">
                <h3>Your Estimated Monthly Cost</h3>

                <div className="cost-breakdown">
                  <div className="cost-item">
                    <span className="label">Base Plan ({userCount} users)</span>
                    <span className="value">£{costs.baseCost.toLocaleString()}</span>
                  </div>
                  {costs.addonsBreakdown.map((addon, index) => (
                    <div className="cost-item" key={index}>
                      <span className="label">
                        {addon.name} {addon.users ? `(${addon.users} users)` : ''}
                      </span>
                      <span className="value">£{addon.value.toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="total-cost">
                  <div className="label">Total Monthly Cost</div>
                  <div className="amount">
                    <span className="currency">£</span><span>{costs.totalCost.toLocaleString()}</span>
                  </div>
                  <div className="period">per month + VAT</div>
                  {costs.totalCost >= 2000 && (
                    <div className="savings-badge">
                      <i className="fa-solid fa-piggy-bank me-2"></i>Save 15% with annual billing
                    </div>
                  )}
                </div>

                <Link to="/contact?subject=Get Exact Quote" className="btn-get-quote">
                  <i className="fa-solid fa-envelope-open-text me-2"></i>Get Your Exact Quote
                </Link>

                <p className="disclaimer">
                  <i className="fa-solid fa-info-circle me-1"></i>
                  This is an estimate. Final pricing may vary based on your specific requirements. Contact us for an accurate quote tailored to your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-60 pb-120" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="wow fadeInUp mb-3" data-wow-delay="200ms" data-wow-duration="1500ms" style={{fontSize: '2.5rem', fontWeight: 700, color: '#000'}}>
                What's Included in Every Plan
              </h2>
              <p className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{color: '#666', fontSize: '1.1rem'}}>
                All our support plans include these essential services at no extra cost
              </p>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-item wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="feature-icon">
                <i className="fa-solid fa-headset"></i>
              </div>
              <h5>Unlimited Remote Support</h5>
              <p>As many support tickets as you need with no hidden charges or limits</p>
            </div>

            <div className="feature-item wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
              <div className="feature-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h5>Proactive Monitoring</h5>
              <p>24/7 system monitoring to catch and fix issues before they impact your business</p>
            </div>

            <div className="feature-item wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="feature-icon">
                <i className="fa-solid fa-cloud-arrow-up"></i>
              </div>
              <h5>Software Updates</h5>
              <p>Regular patching and updates to keep your systems secure and up-to-date</p>
            </div>

            <div className="feature-item wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="feature-icon">
                <i className="fa-solid fa-user-shield"></i>
              </div>
              <h5>Cybersecurity Essentials</h5>
              <p>Basic antivirus, firewall management, and security monitoring included</p>
            </div>

            <div className="feature-item wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="feature-icon">
                <i className="fa-brands fa-microsoft"></i>
              </div>
              <h5>Microsoft 365 Support</h5>
              <p>Expert assistance with Email, Teams, SharePoint, and all Office apps</p>
            </div>

            <div className="feature-item wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
              <div className="feature-icon">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <h5>Monthly Reporting</h5>
              <p>Detailed reports on system health, incidents, and resolution times</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CostCalculator;
