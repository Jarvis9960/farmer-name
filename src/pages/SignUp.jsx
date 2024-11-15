import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AmigoLogo from "../assets/images/logo.png";
import FbIcon from "../assets/images/Icon-fb.png";
import GoogleIcon from "../assets/images/Icon-google.png";
import AppleIcon from "../assets/images/Icon-apple.png";
import WhatsappIcon from "../assets/images/Icon-whatsapp.png";
import BackBtn from "../assets/images/Button-Back.png";
import Loader from "../components/Loader";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

const SignUp = () => {
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
    navigate("/verify_phone_number");
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };
  return (
    <>
      {/* <!-- ====================================== Sign Up Screen===================================== --> */}
      <div className="let-you-page-main">
        <div className="let-you-screen-main">
          <header className="back-btn back-btn2 top-navbar" id="top-navbar">
            <a href="/sign_in" onClick={handleBackClick}>
              <img className="profile-pic" src={BackBtn} alt="Button-Back" />
            </a>
          </header>
          <div className="Amigo_img_main">
            <img className="Amigo_img" src={AmigoLogo} alt="logo" />
          </div>
        </div>
        <div className="footer_box footer-box-sign-up">
          <div className="lets_you_in_box lets_you_in_box4">
            <h1 className="d-none">hidden</h1>
            <h2 className="lets_you_in_text">Sign Up</h2>
            <div className="form-group">
              <div className="person_detail_main">
                <i className="ri-user-3-line"></i>
                <input
                  className="person_name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
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
              </div>
            </div>
            <button className="sign_with_pass_btn" onClick={handleSignIn}>
              Sign Up
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
          <footer id="let-you-footer">
            <div className="block-footer">
              <p>
                Already have an account? <Link to="/sign_in">Sign in</Link>
              </p>
            </div>
          </footer>
        </div>
      </div>
      {/* <!-- ====================================== Sign Up Screen End===================================== -->    */}
    </>
  );
};
export default SignUp;
