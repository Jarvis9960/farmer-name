import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import BackBtn from "../assets/images/Button-Back.png";
import FbImg from "../assets/images/facebook.png";
import InstaImg from "../assets/images/insta.png";
import TwitterImg from "../assets/images/twitter.png";
import YoutubeImg from "../assets/images/youtube.png";

const AboutAmigoSection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleBackClick = () => {
    navigate(1); // This will navigate to the previous page in the history stack
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 500); // Simulate loading time
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {/* <!-- ====================================== About Screen Start===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <header className="back-btn back-btn2 top-navbar" id="top-navbar">
            <Link to="/Amigo_GPT_home" onClick={handleBackClick}>
              <img className="logo-home" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>About Amigo GPT</h1>
          </header>
          <div className="verify-section-main align-items-stretch">
            <div className="about_text_content">
              <p className="about-content">
                Fusce amet rhoncus amet duis dignissim. Vulputate ultrices eget
                condimentum sit ullamcorper et dolor. Mauris in velit elit
                egestas pellentesque. Iaculis vitae in convallis tincidunt in
                leo phasellus donec volutpat.
              </p>
              <p className="about-content">
                Sed tempor consequat vivamus sagittis lorem in lorem. Mattis
                metus venenatis molestie risus pellentesque diam risus sit
                vestibulum. Molestie orci eget nunc risus egestas.
              </p>
              <p className="about-content">
                Morbi semper sed risus velit tincidunt. In volutpat eu tortor
                mauris ipsum tincidunt in ut eu. Ut odio orci commodo nisl nunc
                lacus erat porttitor. Non sed quisque elit dignissim. Purus at
                sit amet tempus mauris congue id nulla. Diam aenean ullamcorper
                sed eros lorem libero arcu sit. Sed nunc nulla id et ornare
                laoreet malesuada. Ac in eu turpis vitae.
              </p>
            </div>
            <h2 className="follow_us">Follow Us</h2>
            <div className="media-icon-main">
              <a href="https://www.facebook.com">
                <img className="media-icon" src={FbImg} alt="facebook" />
                <p className="media-icon-name">Facebook</p>
              </a>
              <a href="https://www.instagram.com">
                <img className="media-icon" src={InstaImg} alt="insta" />
                <p className="media-icon-name">Instagram</p>
              </a>
              <a href="https://twitter.com">
                <img
                  className="media-icon"
                  src={TwitterImg}
                  alt="twitter.png"
                />
                <p className="media-icon-name">Twitter</p>
              </a>
              <a href="https://www.youtube.com">
                <img className="media-icon" src={YoutubeImg} alt="youtube" />
                <p className="media-icon-name">YouTube</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== About Screen End===================================== --> */}
    </>
  );
};
export default AboutAmigoSection;
