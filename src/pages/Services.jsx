import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Services() {
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
          <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">IT Services</h2>
          <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Link to="/">Home</Link><span><i className="fa-regular fa-angles-right mx-2"></i>IT Services</span>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="service-inner-area pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            {/* Service 1 - IT Infrastructure Management */}
            <div className="col-lg-4 col-md-6">
              <div className="service-two__item">
                <div className="image">
                  <img src="/assets/images/service/service-image1.jpg" alt="IT Infrastructure Management" />
                </div>
                <div className="service-two__content">
                  <div className="icon">
                    <img src="/assets/images/icon/service-two-icon1.png" alt="icon" />
                  </div>
                  <div className="shape">
                    <img src="/assets/images/shape/service-two-item-shape.png" alt="shape" />
                  </div>
                  <h4><a href="#0" className="primary-hover">IT Infrastructure Management</a></h4>
                  <ul>
                    <li className="dots">Server and network management</li>
                    <li className="dots">Virtualization (VMware, HyperV)</li>
                    <li className="dots">Cloud infrastructure (Azure, Oracle Cloud, 365)</li>
                    <li className="dots">Backup and disaster recovery solutions</li>
                    <li className="dots">Storage management (SAN, NAS)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2 - Cloud Services */}
            <div className="col-lg-4 col-md-6">
              <div className="service-two__item">
                <div className="image">
                  <img src="/assets/images/service/service-image2.jpg" alt="Cloud Services" />
                </div>
                <div className="service-two__content">
                  <div className="icon">
                    <img src="/assets/images/icon/service-two-icon2.png" alt="icon" />
                  </div>
                  <div className="shape">
                    <img src="/assets/images/shape/service-two-item-shape.png" alt="shape" />
                  </div>
                  <h4><a href="#0" className="primary-hover">Cloud Services</a></h4>
                  <ul>
                    <li className="dots">Cloud migration (Azure, IaaS, PaaS, SaaS)</li>
                    <li className="dots">Identity management using Azure Active Directory</li>
                    <li className="dots">Cloud security and backup (Datto, Cloud Ally)</li>
                    <li className="dots">Virtual desktop infrastructure (VDI/AVD)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3 - Technical Support & Helpdesk */}
            <div className="col-lg-4 col-md-6">
              <div className="service-two__item">
                <div className="image">
                  <img src="/assets/images/service/service-image3.jpg" alt="Technical Support" />
                </div>
                <div className="service-two__content">
                  <div className="icon">
                    <img src="/assets/images/icon/service-two-icon3.png" alt="icon" />
                  </div>
                  <div className="shape">
                    <img src="/assets/images/shape/service-two-item-shape.png" alt="shape" />
                  </div>
                  <h4><a href="#0" className="primary-hover">Technical Support & Helpdesk</a></h4>
                  <ul>
                    <li className="dots">1st/2nd/3rd line technical support</li>
                    <li className="dots">End-user support (Windows, Mac OS)</li>
                    <li className="dots">Office 365 and SharePoint support</li>
                    <li className="dots">Remote and onsite troubleshooting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 4 - System Administration */}
            <div className="col-lg-4 col-md-6">
              <div className="service-two__item">
                <div className="image">
                  <img src="/assets/images/service/service-image4.jpg" alt="System Administration" />
                </div>
                <div className="service-two__content">
                  <div className="icon">
                    <img src="/assets/images/icon/service-two-icon4.png" alt="icon" />
                  </div>
                  <div className="shape">
                    <img src="/assets/images/shape/service-two-item-shape.png" alt="shape" />
                  </div>
                  <h4><a href="#0" className="primary-hover">System Administration</a></h4>
                  <ul>
                    <li className="dots">Active Directory, DNS, DHCP, GPO management</li>
                    <li className="dots">Windows Server administration</li>
                    <li className="dots">PowerShell scripting for automation</li>
                    <li className="dots">File server and WSUS management</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 5 - Cybersecurity Services */}
            <div className="col-lg-4 col-md-6">
              <div className="service-two__item">
                <div className="image">
                  <img src="/assets/images/service/service-image5.jpg" alt="Cybersecurity Services" />
                </div>
                <div className="service-two__content">
                  <div className="icon">
                    <img src="/assets/images/icon/service-two-icon6.png" alt="icon" />
                  </div>
                  <div className="shape">
                    <img src="/assets/images/shape/service-two-item-shape.png" alt="shape" />
                  </div>
                  <h4><a href="#0" className="primary-hover">Cybersecurity Services</a></h4>
                  <ul>
                    <li className="dots">Endpoint protection (Antivirus, Cisco Umbrella)</li>
                    <li className="dots">Data and email security (Barracuda, Mimecast)</li>
                    <li className="dots">VPN/P2P security</li>
                    <li className="dots">Zero-trust architecture (Cisco)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 6 - Virtualization & Backup */}
            <div className="col-lg-4 col-md-6">
              <div className="service-two__item">
                <div className="image">
                  <img src="/assets/images/service/service-image6.jpg" alt="Virtualization & Backup" />
                </div>
                <div className="service-two__content">
                  <div className="icon">
                    <img src="/assets/images/icon/service-two-icon6.png" alt="icon" />
                  </div>
                  <div className="shape">
                    <img src="/assets/images/shape/service-two-item-shape.png" alt="shape" />
                  </div>
                  <h4><a href="#0" className="primary-hover">Virtualization & Backup</a></h4>
                  <ul>
                    <li className="dots">VMware, Citrix, Dell EMC virtualization services</li>
                    <li className="dots">Backup solutions (Veeam, Datto)</li>
                    <li className="dots">Disaster recovery and business continuity planning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 7 - Cloud Collaboration Tools */}
            <div className="col-lg-4 col-md-6">
              <div className="service-two__item">
                <div className="image">
                  <img src="/assets/images/service/service-image7.jpg" alt="Cloud Collaboration Tools" />
                </div>
                <div className="service-two__content">
                  <div className="icon">
                    <img src="/assets/images/icon/service-two-icon6.png" alt="icon" />
                  </div>
                  <div className="shape">
                    <img src="/assets/images/shape/service-two-item-shape.png" alt="shape" />
                  </div>
                  <h4><a href="#0" className="primary-hover">Cloud Collaboration Tools</a></h4>
                  <ul>
                    <li className="dots">Microsoft Teams, WebEx, Zoom setup and administration</li>
                    <li className="dots">SharePoint configuration and user training</li>
                    <li className="dots">Power BI implementation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 8 - Project Management */}
            <div className="col-lg-4 col-md-6">
              <div className="service-two__item">
                <div className="image">
                  <img src="/assets/images/service/service-image8.jpg" alt="Project Management" />
                </div>
                <div className="service-two__content">
                  <div className="icon">
                    <img src="/assets/images/icon/service-two-icon6.png" alt="icon" />
                  </div>
                  <div className="shape">
                    <img src="/assets/images/shape/service-two-item-shape.png" alt="shape" />
                  </div>
                  <h4><a href="#0" className="primary-hover">Project Management</a></h4>
                  <ul>
                    <li className="dots">IT project planning and execution</li>
                    <li className="dots">Vendor management and collaboration</li>
                    <li className="dots">Budget management and forecasting for IT projects</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 9 - Hardware & Peripheral Support */}
            <div className="col-lg-4 col-md-6">
              <div className="service-two__item">
                <div className="image">
                  <img src="/assets/images/service/service-image9.jpg" alt="Hardware Support" />
                </div>
                <div className="service-two__content">
                  <div className="icon">
                    <img src="/assets/images/icon/service-two-icon6.png" alt="icon" />
                  </div>
                  <div className="shape">
                    <img src="/assets/images/shape/service-two-item-shape.png" alt="shape" />
                  </div>
                  <h4><a href="#0" className="primary-hover">Hardware & Peripheral Support</a></h4>
                  <ul>
                    <li className="dots">Setup and configuration of servers (Dell PowerEdge)</li>
                    <li className="dots">Printer, POS, AV, and video conferencing solutions</li>
                    <li className="dots">Desktop and laptop setup (Windows/Mac)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 10 - Hospitality IT Solutions */}
            <div className="col-lg-4 col-md-6">
              <div className="service-two__item">
                <div className="image">
                  <img src="/assets/images/service/service-image10.jpg" alt="Hospitality IT" />
                </div>
                <div className="service-two__content">
                  <div className="icon">
                    <img src="/assets/images/icon/service-two-icon6.png" alt="icon" />
                  </div>
                  <div className="shape">
                    <img src="/assets/images/shape/service-two-item-shape.png" alt="shape" />
                  </div>
                  <h4><a href="#0" className="primary-hover">Hospitality IT Solutions</a></h4>
                  <ul>
                    <li className="dots">IPTV, IP telephony, and CCTV setup (NVR/DVR)</li>
                    <li className="dots">WiFi HSIA implementation for hotels and resorts</li>
                    <li className="dots">Music and AV system support for hospitality businesses</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 11 - Automation & Workflow Optimization */}
            <div className="col-lg-4 col-md-6">
              <div className="service-two__item">
                <div className="image">
                  <img src="/assets/images/service/service-image11.jpg" alt="Automation" />
                </div>
                <div className="service-two__content">
                  <div className="icon">
                    <img src="/assets/images/icon/service-two-icon6.png" alt="icon" />
                  </div>
                  <div className="shape">
                    <img src="/assets/images/shape/service-two-item-shape.png" alt="shape" />
                  </div>
                  <h4><a href="#0" className="primary-hover">Automation & Workflow Optimization</a></h4>
                  <ul>
                    <li>Microsoft Power Automate workflows</li>
                    <li>Zapier automation integration</li>
                    <li>System and process automation for efficiency</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 12 - Software & Application Management */}
            <div className="col-lg-4 col-md-6">
              <div className="service-two__item">
                <div className="image">
                  <img src="/assets/images/service/service-image12.jpg" alt="Software Management" />
                </div>
                <div className="service-two__content">
                  <div className="icon">
                    <img src="/assets/images/icon/service-two-icon6.png" alt="icon" />
                  </div>
                  <div className="shape">
                    <img src="/assets/images/shape/service-two-item-shape.png" alt="shape" />
                  </div>
                  <h4><a href="#0" className="primary-hover">Software & Application Management</a></h4>
                  <ul>
                    <li className="dots">SCCM, Lansweeper, and Okta administration</li>
                    <li className="dots">Integration with third-party applications (Sage, Dropbox)</li>
                    <li className="dots">SaaS application management</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 13 - Training & Onboarding */}
            <div className="col-lg-4 col-md-6">
              <div className="service-two__item">
                <div className="image">
                  <img src="/assets/images/service/service-image13.jpg" alt="Training" />
                </div>
                <div className="service-two__content">
                  <div className="icon">
                    <img src="/assets/images/icon/service-two-icon6.png" alt="icon" />
                  </div>
                  <div className="shape">
                    <img src="/assets/images/shape/service-two-item-shape.png" alt="shape" />
                  </div>
                  <h4><a href="#0" className="primary-hover">Training & Onboarding</a></h4>
                  <ul>
                    <li className="dots">Development of training materials for IT systems</li>
                    <li className="dots">Employee onboarding and technical training (Microsoft Viva)</li>
                    <li className="dots">IT training for non-technical staff</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 14 - Network Administration & Security */}
            <div className="col-lg-4 col-md-6">
              <div className="service-two__item">
                <div className="image">
                  <img src="/assets/images/service/service-image14.jpg" alt="Network Administration" />
                </div>
                <div className="service-two__content">
                  <div className="icon">
                    <img src="/assets/images/icon/service-two-icon5.png" alt="icon" />
                  </div>
                  <div className="shape">
                    <img src="/assets/images/shape/service-two-item-shape.png" alt="shape" />
                  </div>
                  <h4><a href="#0" className="primary-hover">Network Administration & Security</a></h4>
                  <ul>
                    <li className="dots">LAN/WAN, MPLS, VPN setup and management</li>
                    <li className="dots">Firewall and security management (Sophos, Cisco Meraki)</li>
                    <li className="dots">VLAN/VLSM configurations</li>
                    <li className="dots">WiFi design and deployment (CISCO, Aruba, UniFi, Ruckus)</li>
                    <li className="dots">Network monitoring and performance optimization</li>
                    <li className="dots">Network router and switch configuration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 15 - Web Development Services */}
            <div className="col-lg-4 col-md-6">
              <div className="service-two__item">
                <div className="image">
                  <img src="/assets/images/service/service-image15.jpg" alt="Web Development" />
                </div>
                <div className="service-two__content">
                  <div className="icon">
                    <img src="/assets/images/icon/service-two-icon5.png" alt="icon" />
                  </div>
                  <div className="shape">
                    <img src="/assets/images/shape/service-two-item-shape.png" alt="shape" />
                  </div>
                  <h4><a href="#0" className="primary-hover">Web Development Services</a></h4>
                  <ul>
                    <li className="dots">Custom Website Development</li>
                    <li className="dots">E-Commerce Platforms Development</li>
                    <li className="dots">Responsive Web Design</li>
                    <li className="dots">Content Management Systems (CMS)</li>
                    <li className="dots">Web Application Development</li>
                    <li className="dots">SEO Optimization</li>
                    <li className="dots">UI/UX Design</li>
                    <li className="dots">Web Hosting & Maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
