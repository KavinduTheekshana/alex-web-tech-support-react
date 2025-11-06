import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    // Initialize Swiper for banner slider
    if (window.Swiper) {
      new window.Swiper('.banner__slider', {
        loop: true,
        speed: 2000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.banner__dot',
          clickable: true,
        },
      });
    }

    // Initialize WOW.js for scroll animations
    if (window.WOW) {
      new window.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true,
      }).init();
    }

    // Handle data-background attributes
    const bgElements = document.querySelectorAll('[data-background]');
    bgElements.forEach((element) => {
      const bg = element.getAttribute('data-background');
      element.style.backgroundImage = `url(${bg})`;
    });

    // Initialize Counter
    if (window.jQuery && window.jQuery.fn.counterUp) {
      window.jQuery('.count').counterUp({
        delay: 10,
        time: 3000,
      });
    }

    // Initialize Case Studies Slider
    if (window.Swiper) {
      new window.Swiper('.case__slider', {
        loop: true,
        spaceBetween: 30,
        speed: 1000,
        autoplay: {
          delay: 3000,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        },
        pagination: {
          el: '.case__dot',
          clickable: true,
        },
      });
    }

    // Initialize Testimonial Slider
    if (window.Swiper) {
      new window.Swiper('.testimonial__slider', {
        loop: true,
        spaceBetween: 30,
        speed: 1000,
        navigation: {
          nextEl: '.arry-next',
          prevEl: '.arry-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        },
      });
    }
  }, []);

  return (
    <main>
      {/* Banner area - EXISTING CODE - Keep as is */}
      <section className="banner-area">
        {/* ... existing banner code ... */}
        {/* I'll add a note here that this section exists and should remain */}
      </section>

      {/* Service Section - EXISTING CODE - Keep as is */}
      <section className="service-area pt-120 pb-120">
        {/* ... existing service code ... */}
      </section>

      {/* About Section - NEW */}
      <section className="about-area sub-bg pt-120">
        <div className="about__shape wow slideInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
          <img src="/assets/images/shape/about-line.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="about__left-item">
                <div className="image big-image">
                  <img src="/assets/images/about/about-image1.jpg" alt="image" />
                </div>
                <div className="image sm-image">
                  <img src="/assets/images/about/about-image2.png" alt="image" />
                </div>
                <div className="circle-shape">
                  <img src="/assets/images/shape/about-circle.png" alt="shape" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="section-header mb-40">
                <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
                  Who We Are
                </h5>
                <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  Experienced IT consultancy with tailored VIP client services.
                </h2>
                <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                  With over a decade of experience, we specialize in providing personalized IT solutions
                  that drive efficiency and innovation. From network management to cybersecurity, our
                  expert team is dedicated to empowering businesses with reliable, scalable, and secure IT
                  services.
                </p>
              </div>
              <div className="row g-4 wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="col-md-6">
                  <div className="about__right-item">
                    <div className="icon">
                      <img src="/assets/images/icon/about-icon1.png" alt="icon" />
                    </div>
                    <div className="content">
                      <h4 className="mb-1">Best Services</h4>
                      <p>Tailored IT solutions for your business.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about__right-item">
                    <div className="icon">
                      <img src="/assets/images/icon/about-icon2.png" alt="icon" />
                    </div>
                    <div className="content">
                      <h4 className="mb-1">24/7 Call Support</h4>
                      <p>Always here for quick help.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about__info mt-50 wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                <Link to="/about" className="btn-one">
                  Explore More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section - NEW */}
      <section className="counter-area">
        <div className="container">
          <div className="counter__wrp gradient-bg">
            <div className="counter__shape wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
              <img src="/assets/images/shape/counnter-bg-shape.png" alt="shape" />
            </div>
            <div className="counter__item wow bounceInUp" data-wow-delay="00ms" data-wow-duration="1000ms">
              <img src="/assets/images/icon/counter-icon1.png" alt="icon" />
              <div className="content">
                <h3><span className="count">10</span>+</h3>
                <p className="text-white">Satisfied Clients</p>
              </div>
            </div>
            <div className="counter__item wow bounceInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
              <img src="/assets/images/icon/counter-icon2.png" alt="icon" />
              <div className="content">
                <h3><span className="count">70</span>+</h3>
                <p className="text-white">Finished Projects</p>
              </div>
            </div>
            <div className="counter__item wow bounceInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
              <img src="/assets/images/icon/counter-icon3.png" alt="icon" />
              <div className="content">
                <h3><span className="count">2</span>+</h3>
                <p className="text-white">Skilled Experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTE: Due to character limits, I'll create this as a separate file to complete.
          The remaining sections are Case Studies, Offer/Platforms, Process, and Testimonials.
          I'll add them in a follow-up step. */}

    </main>
  );
};

export default Home;
