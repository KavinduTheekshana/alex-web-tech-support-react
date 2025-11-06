import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  return (
    <section className="case-area pt-120 pb-120">
      <div className="container">
        <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
          <div className="section-header">
            <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
              <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
              FROM OUR CASE studies
            </h5>
            <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
              We Delivered Best Solution
            </h2>
          </div>
          <Link to="/solutions" className="btn-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            view All Solutions <i className="fa-regular fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
      <div className="swiper case__slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="case__item">
              <div className="image case__image">
                <img src="/assets/images/case/case-image4.jpg" alt="case study" />
              </div>
              <div className="case__content">
                <span className="primary-color sm-font">Security</span>
                <h3><Link to="/solutions" className="text-white primary-hover">Network Security</Link></h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="case__item">
              <div className="image case__image">
                <img src="/assets/images/case/case-image2.jpg" alt="case study" />
              </div>
              <div className="case__content">
                <span className="primary-color sm-font">Technology</span>
                <h3><Link to="/solutions" className="text-white primary-hover">Data Backup & Recovery</Link></h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="case__item">
              <div className="image case__image">
                <img src="/assets/images/case/case-image3.jpg" alt="case study" />
              </div>
              <div className="case__content">
                <span className="primary-color sm-font">Solution</span>
                <h3><Link to="/solutions" className="text-white primary-hover">Web Development</Link></h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="case__item">
              <div className="image case__image">
                <img src="/assets/images/case/case-image1.jpg" alt="case study" />
              </div>
              <div className="case__content">
                <span className="primary-color sm-font">Services</span>
                <h3><Link to="/solutions" className="text-white primary-hover">Managed IT Services</Link></h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="case__item">
              <div className="image case__image">
                <img src="/assets/images/case/case-image5.jpg" alt="case study" />
              </div>
              <div className="case__content">
                <span className="primary-color sm-font">Services</span>
                <h3><Link to="/solutions" className="text-white primary-hover">Cloud Solutions</Link></h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="case__item">
              <div className="image case__image">
                <img src="/assets/images/case/case-image6.jpg" alt="case study" />
              </div>
              <div className="case__content">
                <span className="primary-color sm-font">Solution</span>
                <h3><Link to="/solutions" className="text-white primary-hover">Software Development</Link></h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="case__item">
              <div className="image case__image">
                <img src="/assets/images/case/case-image1.jpg" alt="case study" />
              </div>
              <div className="case__content">
                <span className="primary-color sm-font">Services</span>
                <h3><Link to="/solutions" className="text-white primary-hover">IT Consulting</Link></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-60 text-center wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="dot case__dot"></div>
      </div>
    </section>
  );
};

export default CaseStudies;
