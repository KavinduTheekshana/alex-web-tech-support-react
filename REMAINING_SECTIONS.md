# Remaining Homepage Sections to Add

You have 3 more sections to add to complete the homepage. Add these **before the closing `</main>` tag** in `src/pages/Home.jsx`.

---

## Current Progress
✅ Banner Section
✅ Service Section (Why Choose Us)
✅ About Section
✅ Counter Section
✅ Case Studies Section
⏳ **Technology Platforms Section** (NEXT)
⏳ Process Flow Section
⏳ Testimonials Section

---

## Instructions

Open `src/pages/Home.jsx` and find the line:
```jsx
</main>
```

Add the following sections **BEFORE** that closing tag.

---

## SECTION 4: Technology Platforms / Offer Section

Due to the file size (contains 6 complete SVG icons), I've created separate component files in the `/home/teki/Desktop/MY/php to react/php/alex-web-tech-support-react/src/components/sections` folder.

### Quick Add Method:

1. I've already created `/src/components/sections` folder
2. Create these files (or I can create them for you):
   - `TechnologyPlatforms.jsx`
   - `ProcessFlow.jsx`
   - `Testimonials.jsx`

3. Then in Home.jsx, import them at the top:
```jsx
import TechnologyPlatforms from '../components/sections/TechnologyPlatforms';
import ProcessFlow from '../components/sections/ProcessFlow';
import Testimonials from '../components/sections/Testimonials';
```

4. Add them before `</main>`:
```jsx
      <TechnologyPlatforms />
      <ProcessFlow />
      <Testimonials />
    </main>
```

---

## Alternative: Add Directly to Home.jsx

If you prefer to add the sections directly (without separate component files), use the code below. **Note: This will make Home.jsx very large (~1500+ lines).**

### Add this code before `</main>` in Home.jsx:

```jsx
      {/* Technology Platforms / Offer Section */}
      <section className="offer-area secondary-bg pt-120 pb-200">
        <div className="offer__shadow wow fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
          <img src="/assets/images/shape/offer-shadow-shape.png" alt="shadow" />
        </div>
        <div className="offer__shape-left">
          <img className="wow fadeInUpBig" data-wow-delay="400ms" data-wow-duration="1500ms"
            src="/assets/images/shape/offer-bg-shape-left.png" alt="shape" />
        </div>
        <div className="offer__shape-right">
          <img className="wow fadeInDownBig" data-wow-delay="400ms" data-wow-duration="1500ms"
            src="/assets/images/shape/offer-bg-shape-right.png" alt="shape" />
        </div>
        <div className="container">
          <div className="d-flex gap-4 flex-wrap align-items-center justify-content-between mb-95">
            <div className="section-header">
              <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
                Our offering
              </h5>
              <h2 className="text-white wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                Enhance and Pioneer Using <br /> Technology Trends
              </h2>
            </div>
          </div>
          <div className="row g-4">
            {/* Platform 1: Website */}
            <div className="col-lg-2 col-md-4 col-sm-6 wow bounceInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="offer__item">
                <div className="shape-top">
                  <img src="/assets/images/shape/offter-item-shape-top.png" alt="shape" />
                </div>
                <div className="shape-bottom">
                  <img src="/assets/images/shape/offter-item-shape-bottom.png" alt="shape" />
                </div>
                <div className="offer__icon">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 0C10.3961 0 0 5.74724 0 18C0 29.9409 9.99921 36 18 36C31.7268 36 36 23.974 36 18C36 9.18425 29.2535 0 18 0ZM13.826 1.6937C11.948 3.29528 10.389 5.94567 9.38268 9.23386C8.07874 8.46142 6.8811 7.50472 5.81811 6.39213C8.01496 4.08898 10.7929 2.47323 13.826 1.6937ZM5.04567 7.25669C6.23622 8.49685 7.58976 9.55276 9.06378 10.389C8.51102 12.5362 8.18504 14.9173 8.14252 17.4189H1.17638C1.30394 13.6843 2.66457 10.1197 5.04567 7.25669ZM5.04567 28.7433C2.65748 25.8803 1.30394 22.3158 1.17638 18.5811H8.14252C8.18504 21.0898 8.51102 23.4638 9.06378 25.611C7.59685 26.4543 6.24331 27.5032 5.04567 28.7433ZM5.81811 29.615C6.8811 28.5024 8.07874 27.5457 9.38268 26.7732C10.389 30.0543 11.948 32.7118 13.826 34.3134C10.7929 33.5268 8.01496 31.911 5.81811 29.615ZM17.4189 34.7953C14.4 34.4126 11.7992 31.0394 10.3961 26.2063C12.5646 25.1079 14.9598 24.4913 17.4189 24.3992V34.7953ZM17.4189 23.2441C14.8535 23.3291 12.3591 23.9598 10.0984 25.0654C9.62362 23.0811 9.34016 20.8913 9.29764 18.5811H17.4189V23.2441ZM17.4189 17.4189H9.29764C9.34016 15.1087 9.62362 12.9189 10.0984 10.9346C12.3661 12.0402 14.8606 12.6709 17.4189 12.7559V17.4189ZM17.4189 11.6008C14.9528 11.5157 12.5646 10.8921 10.3961 9.7937C11.7992 4.95354 14.4 1.5874 17.4189 1.20472V11.6008ZM30.9543 7.25669C33.3354 10.1197 34.6961 13.6843 34.8236 17.4189H27.8646C27.8221 14.9102 27.4961 12.5362 26.9433 10.389C28.4102 9.54567 29.7638 8.49685 30.9543 7.25669ZM30.1819 6.38504C29.1189 7.49764 27.9213 8.45433 26.6173 9.22677C25.611 5.94567 24.052 3.29528 22.174 1.68661C25.2071 2.47323 27.985 4.08898 30.1819 6.38504ZM18.5811 1.20472C21.6 1.5874 24.2008 4.96063 25.6039 9.7937C23.4354 10.8921 21.0472 11.5087 18.5811 11.6008V1.20472ZM18.5811 12.7559C21.1465 12.6709 23.6409 12.0402 25.9016 10.9346C26.3764 12.9189 26.6598 15.1087 26.7024 17.4189H18.5811V12.7559ZM18.5811 18.5811H26.7024C26.6598 20.8913 26.3764 23.0811 25.9016 25.0654C23.6195 23.9424 21.1233 23.3213 18.5811 23.2441V18.5811ZM18.5811 34.7953V24.3992C21.0472 24.4843 23.4354 25.1079 25.6039 26.2063C24.2008 31.0465 21.6 34.4126 18.5811 34.7953ZM22.174 34.3063C24.052 32.7047 25.611 30.0543 26.6173 26.7661C27.9213 27.5386 29.1189 28.4953 30.1819 29.6079C27.985 31.911 25.2071 33.5268 22.174 34.3063ZM30.9543 28.7433C29.7638 27.5032 28.4102 26.4543 26.9433 25.611C27.4961 23.4638 27.8221 21.0827 27.8646 18.5811H34.8236C34.6961 22.3158 33.3354 25.8803 30.9543 28.7433Z" fill="#3C72FC" />
                  </svg>
                </div>
                <h4 className="text-white mt-20">Website</h4>
              </div>
            </div>
            {/* Platform 2-6: Android, IOS, Watch, TV, IOT */}
            {/* NOTE: These contain large SVG code - see the PHP file lines 617-763 for complete code */}
            {/* I'll add them in the actual component files to save space here */}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="process-area pt-120 pb-120">
        <div className="container">
          <div className="section-header text-center mb-60">
            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
              Our Proven Process
            </h5>
            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              How We Deliver Excellence
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="process__item mb-100">
                <div className="process-arry bobble__animation">
                  <img src="/assets/images/process/process-arry.png" alt="arrow icon" />
                </div>
                <div className="process__image">
                  <img src="/assets/images/process/process-image1.png" alt="process" />
                  <span className="process-number">1</span>
                </div>
                <div className="process__content">
                  <h4 className="mt-25 mb-10">Consultation</h4>
                  <p>We begin by understanding your business needs and goals to craft tailored IT solutions.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="process__item mb-100">
                <div className="process-arry bobble__animation">
                  <img src="/assets/images/process/process-arry.png" alt="arrow icon" />
                </div>
                <div className="process__image">
                  <img src="/assets/images/process/process-image2.png" alt="process" />
                  <span className="process-number">2</span>
                </div>
                <div className="process__content">
                  <h4 className="mt-25 mb-10">Implementation</h4>
                  <p>Seamless integration of the latest technologies to ensure efficient operations.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="process__item">
                <div className="process__image">
                  <img src="/assets/images/process/process-image3.png" alt="process" />
                  <span className="process-number">3</span>
                </div>
                <div className="process__content">
                  <h4 className="mt-25 mb-10">Ongoing Support</h4>
                  <p>Continuous monitoring and support to keep your systems running smoothly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-area secondary-bg pt-120 pb-120">
        <div className="container">
          <div className="section-header text-center mb-60">
            <h5 className="wow fadeInUp text-white" data-wow-delay="00ms" data-wow-duration="1500ms">
              <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
              CLIENT TESTIMONIALS
            </h5>
            <h2 className="wow fadeInUp text-white" data-wow-delay="200ms" data-wow-duration="1500ms">
              What Our Clients Say About Us
            </h2>
            <p className="wow fadeInUp text-white" data-wow-delay="400ms" data-wow-duration="1500ms" style={{opacity: 0.9}}>
              Real stories from businesses we've helped stay secure, online, and productive
            </p>
          </div>

          <div className="swiper testimonial__slider wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="swiper-wrapper">
              {/* Testimonial 1 */}
              <div className="swiper-slide">
                <div className="testimonial__item">
                  <svg className="coma" width="50" height="37" viewBox="0 0 50 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z" fill="#3C72FC" />
                  </svg>
                  <div className="d-flex align-items-center gap-3">
                    <img src="/assets/images/testimonial/testimonial-image1.png" alt="client" />
                    <div className="testi-info">
                      <h4>Sarah Mitchell</h4>
                      <p>Operations Director, Sterling & Co.</p>
                      <div className="star mt-1">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-30">"Tech Support Inc transformed our IT infrastructure. Their 24/7 helpdesk means we're never left struggling with technical issues. Professional, responsive, and excellent value for money."</p>
                </div>
              </div>
              {/* Add remaining 4 testimonials following the same pattern */}
            </div>
          </div>

          <div className="testimonial__arry-btn mt-60 text-center wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
            <button className="arry-prev testimonial__arry-prev"><i className="fa-light fa-chevron-left"></i></button>
            <button className="arry-next testimonial__arry-next active"><i className="fa-light fa-chevron-right"></i></button>
          </div>
        </div>
      </section>
```

---

## What I'll Do Next

I'll create the complete component files for you with all the SVG code and testimonials. This is the cleanest approach.

Would you like me to:
1. ✅ Create separate component files (RECOMMENDED - cleaner code)
2. ❌ Add everything directly to Home.jsx (makes the file very large)

I recommend Option 1 for maintainability.
