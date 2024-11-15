import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import BackBtn from "../assets/images/Button-Back.png";
import ConfirmOtpImg from "../assets/images/confirm-otp-img.png";

const ConfirmOtp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(59);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500); // Simulate loading time
  }, []);

  const handleSignIn = () => {
    navigate("/new_password");
  };

  const handleBackClick = () => {
    navigate(1); // This will navigate to the previous page in the history stack
  };

  // Otp Section
  const validateInput = (value, index) => {
    let newValue = value.replace(/\D/g, "");
    if (newValue.length > 1) {
      newValue = newValue[0];
    }
    const newOtp = [...otp];
    newOtp[index] = newValue;
    setOtp(newOtp);
  };

  const handleChange = (e, index) => {
    validateInput(e.target.value, index);
  };

  // Count timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      {/* <!-- ====================================== Confirm OTP Screen ===================================== --> */}
      {loading ? (
        <Loader />
      ) : (
        <div className="verification-main">
          <div className="container verify-screen-main p-0">
            <div className="back-btn back-btn2">
              <a href="/forget_password" onClick={handleBackClick}>
                <img className="profile-pic" src={BackBtn} alt="Button-Back" />
              </a>
              <h1>Confirm OTP</h1>
            </div>
            <div className="verify-section-main">
              <img
                className="verify-img"
                src={ConfirmOtpImg}
                alt="confirm-otp-img"
              />
              <p className="sub-text">Code has been send to +1 234 *** **99</p>
              <div className="otp-field">
                {otp.map((val, index) => (
                  <input
                    key={index}
                    type="text"
                    className="no-spinners"
                    value={val}
                    onChange={(e) => handleChange(e, index)}
                    maxLength={1}
                  />
                ))}
              </div>
              <div className="block-footer resend-otp">
                <p>
                  {" "}
                  Code Expire in <span id="countdowntimer">
                    {timeLeft}
                  </span>{" "}
                </p>
              </div>
              <div
                className="bottom-fix-btn onboarding-next-btn-Subscribe"
                onClick={handleSignIn}
              >
                <Link to="/new_password">Confirm</Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <!-- ====================================== Confirm OTP Screen End===================================== --> */}
    </>
  );
};
export default ConfirmOtp;
