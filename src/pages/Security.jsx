import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import BackBtn from "../assets/images/Button-Back.png";

const Security = () => {
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

  const handleSignIn = () => {
    navigate("/create_new_pin");
  };

  const handleForgetPassword = () => {
    navigate("/forget_password");
  };
  return (
    <>
      {/* <!-- ====================================== Security Screen===================================== --> */}
      <div class="verification-main">
        <div class="container verify-screen-main p-0">
          <div class="back-btn back-btn2">
            <Link to="/Amigo_GPT_home" onClick={handleBackClick}>
              <img className="logo-home" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Security</h1>
          </div>
          <div class="verify-section-main align-items-stretch">
            <div class="swiches-toggle">
              <p class="remember">Remember Me</p>
              <div class="check-box">
                <input type="checkbox" checked />
              </div>
            </div>
            <div class="swiches-toggle">
              <p class="remember">Biometric ID</p>
              <div class="check-box">
                <input type="checkbox" checked />
              </div>
            </div>
            <div class="swiches-toggle">
              <p class="remember">Face ID</p>
              <div class="check-box">
                <input type="checkbox" />
              </div>
            </div>
            <div class="swiches-toggle border-bottom-0">
              <p class="remember">Two-Factor Authentication</p>
              <div class="check-box">
                <input type="checkbox" checked />
              </div>
            </div>
            <button
              class="end-session cancel-btn security-bottom-btns"
              onClick={handleSignIn}
            >
              Change PIN
            </button>
            <button
              class="end-session cancel-btn"
              onClick={handleForgetPassword}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Security Screen End===================================== --> */}
    </>
  );
};
export default Security;
