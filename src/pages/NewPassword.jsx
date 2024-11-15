import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import BackBtn from "../assets/images/Button-Back.png";
import NewPasswordImg from "../assets/images/new_password-img.png";
import EyeiconFill from "../assets/images/eye-off-fill.svg";
import Eyeicon from "../assets/images/eye-fill.svg";

const NewPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [iconClass, setIconClass] = useState("fas fa-eye-slash");
  const handleBackClick = () => {
    navigate(1); // This will navigate to the previous page in the history stack
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 500); // Simulate loading time
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleSignIn = () => {
    navigate("/personal_information");
  };

  // const togglePasswordVisibility = () => {
  //   setIsPasswordVisible(!isPasswordVisible);
  // };

  const togglePasswordVisibility = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setIconClass("fas fa-eye");
    } else {
      setPasswordType("password");
      setIconClass("fas fa-eye-slash");
    }
  };
  return (
    <>
      {/* <!-- ====================================== New Password Screen===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <div className="back-btn back-btn2">
            <Link to="/confirm_otp" onClick={handleBackClick}>
              <img className="profile-pic" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Create New Password</h1>
          </div>
          <div className="verify-section-main verify-section-main-forget">
            <img
              className="verify-img"
              src={NewPasswordImg}
              alt="new_password-img"
            />
            <p className="sub-text forget-pass">Create Your New Password</p>
            <div className="new_password_input">
              <div className="form-item">
                <input
                  type={passwordType}
                  id="password"
                  autoComplete="off"
                  required
                />
                <label className="info-person" htmlFor="password">
                  New Password
                </label>
                <i
                  className={iconClass}
                  onClick={togglePasswordVisibility}
                  id="eye"
                ></i>
              </div>
              <div className="form-item">
                {/* <input
                  type="password"
                  id="confirm-password"
                  autoComplete="off"
                  required
                /> */}
                <input
                  type={passwordType}
                  id="confirm-password"
                  autoComplete="off"
                  required
                />
                <label className="info-person" htmlFor="confirm-password">
                  Re Enter New Password
                </label>
                <i
                  className={iconClass}
                  onClick={togglePasswordVisibility}
                  id="eye"
                ></i>
              </div>
            </div>
            <div
              className="bottom-fix-btn onboarding-next-btn"
              onClick={handleSignIn}
            >
              <Link to="/personal_information">Change Password</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== New Password Screen End===================================== --> */}
    </>
  );
};
export default NewPassword;
