import React, { useEffect, useState } from "react";
import AmigoLogo from "../assets/images/logo.png";
import DotBottom from "../assets/images/dots_pattern_bottom.png";
import DotPattern from "../assets/images/dots_pattern.png";
import ImageUnscreen from "../assets/images/Image.png";
import RobotSlider2 from "../assets/images/robot-slider-img2.png";
import RobotSlider3 from "../assets/images/robot-slider-img3.png";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      className: "first_slide",
      imgSrc: ImageUnscreen,
      title: "Corteva AgroScience",
      content:
        "Proin molestie pulvinar vitae enim erat morbi eu. Malesuada eros nisi augue.",
    },
    {
      id: 1,
      className: "second_slide",
      imgSrc: RobotSlider2,
      title: "Corteva AgroScience",
      content:
        " Quisque blandit risus duis odio. In pretium nibh velit a aenean vitae porta euismod.",
    },
    {
      id: 2,
      className: "third_slide",
      imgSrc: RobotSlider3,
      title: "Corteva AgroScience",
      content:
        "Pulvinar in et eu volutpat mauris viverra ut orci. Lacus placerat volutpat pharetra a.",
    },
  ];

  const handleNext = () => {
    if (activeSlide < slides.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const handleSkip = () => {
    if (activeSlide < slides.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlideIndex = (activeSlide + 1) % slides.length;
      setActiveSlide(nextSlideIndex);
    }, 2500); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [activeSlide, slides.length]);
 
  
  return (
    <>
      <div className="site_content">
        {/* <!-- ====================================== Loader Mask ===================================== --> */}
        <div className="loader-mask1">
          <div id="splash-screen-page" className="position-relative">
            <div className="dots_pattern_img1">
              <img className="hekko" src={DotPattern} alt="dots_pattern" />
            </div>
            <div className="splash-screen-logo">
              <img className="logo_img" src={AmigoLogo} alt="logo" />
              <h1 className="AmigoGPT">Corteva Agriculture</h1>
              <p className="meets">Lorem isrum lorem isrum </p>
            </div>
            <div className="dots_pattern_img2">
              <img
                className="hekko"
                src={DotBottom}
                alt="dots_pattern_bottom"
              />
            </div>
          </div>
        </div>
        {/* <!-- ====================================== Loader Mask End===================================== --> */}
        {/* <!-- ====================================== Slider ===================================== --> */}
        <div className="container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide onboarding-slider"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`carousel-item ${slide.className} ${
                    activeSlide === index ? "active" : ""
                  }`}
                  id={`slide${slide.id + 1}`}
                >
                  <div className={`Onboarding-Screen-1 slide${slide.id + 1}`}>
                    <div className="">
                      <div className="Onboarding-Screen-1-full">
                        <div className="boarding-title">
                          <div className="Image-unscreen_main">
                            <img
                              className="Image-unscreen"
                              src={slide.imgSrc}
                              alt="Image"
                            />
                            <h2 className="welcome_to_amigo_text">
                              {slide.title}
                            </h2>
                            <p className="proin">{slide.content}</p>
                          </div>
                        </div>
                        <div className="d-flex  align-items-center  justify-content-center">
                          {index < slides.length - 1 ? (
                            <div
                              className={`onboarding-next-btn-slider bottom-fix-btn skip_btn_${
                                index + 1
                              }`}
                              onClick={handleNext}
                            >
                              <Link to="">Next</Link>
                            </div>
                          ) : (
                            <div className="onboarding-next-btn-slider bottom-fix-btn">
                              <Link to="/personal_information">Get Started</Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-indicators custom-slider-btn">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  id={`slide${slide.id}`}
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={`custom-slider-dots ${
                    activeSlide === index ? "active" : ""
                  }`}
                  onClick={() => setActiveSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
        {/* <!-- ====================================== Slider End===================================== --> */}
      </div>
    </>
  );
};
export default HomeScreen;
