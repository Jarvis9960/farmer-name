import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import AmigoLogo from "../assets/images/logo.png";
import FbIcon from "../assets/images/Icon-fb.png";
import GoogleIcon from "../assets/images/Icon-google.png";
import AppleIcon from "../assets/images/Icon-apple.png";
import WhatsappIcon from "../assets/images/Icon-whatsapp.png";
import BackBtn from "../assets/images/Button-Back.png";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [mobile, setMobile] = useState("");

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 500); // Simulate loading time
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleSignIn = () => {
    navigate("/sign_up");
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };
  return (
    <>
      {/* <!-- ====================================== Sign In Screen===================================== --> */}
      <div className="let-you-page-main">
        <div className="let-you-screen-main">
          <header className="back-btn back-btn2 top-navbar" id="top-navbar">
            <a href="/lets_you_in" onClick={handleBackClick}>
              <img className="profile-pic" src={BackBtn} alt="Button-Back" />
            </a>
          </header>
          <div className="Amigo_img_main">
            <img className="Amigo_img" src={AmigoLogo} alt="logo" />
          </div>
        </div>
        <div className="footer_box footer_sign_in">
          <div className="container lets_you_in_box lets_you_in_box3">
            <h1 className="d-none">hidden</h1>
            <h2 className="lets_you_in_text">Sign In</h2>
            <div className="form-group">
              <div className="input-group input-group-sm">
                <IntlTelInput
                  className="form-control no-spinners"
                  placeholder="Enter Mobile Number"
                  id="mobile"
                  type="number"
                  name="mobile"
                  value={mobile} // Use email state as value
                  onChange={handleMobileChange} // Handle changes with handleChange function
                />
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>
            <button className="sign_with_pass_btn" onClick={handleSignIn}>
              Sign In
            </button>
            <div className="or" id="or-id">
              <p>or continue with</p>
            </div>
            <div className="icons_main icons_main2">
              <a href="https://www.facebook.com" target="_blank">
                <img className="icons" src={FbIcon} alt="Icon-fb" />
              </a>
              <a href="https://www.google.com" target="_blank">
                <img className="icons" src={GoogleIcon} alt="Icon-google" />
              </a>
              <a href="https://www.icloud.com" target="_blank">
                <div className="apple-main">
                  <img className="apple" src={AppleIcon} alt="Icon-apple" />
                </div>
              </a>
              <a href="https://wa.me/+12345678899" target="_blank">
                <img className="icons" src={WhatsappIcon} alt="Icon-whatsapp" />
              </a>
            </div>
          </div>
        </div>
        <footer id="let-you-footer">
          <div className="block-footer">
            <p>
              Don’t have an account? <Link to="/sign_up">Sign up</Link>
            </p>
          </div>
        </footer>
      </div>
      {/* <!-- ====================================== Sign In Screen End===================================== --> */}
    </>
  );
};
export default SignIn;
