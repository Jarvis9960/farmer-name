import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NewPinImg from "../assets/images/create-new-pin-img.png";
import BackBtn from "../assets/images/Button-Back.png";
import Loader from "../components/Loader";

const ConfirmPaymentPin = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
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
    navigate("/confirmation");
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
  return (
    <>
      {/* <!-- ====================================== Confirm payment pin Screen ===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <div className="back-btn back-btn2">
            <Link to="/subscription_payment" onClick={handleBackClick}>
              <img className="profile-pic" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Enter Your PIN</h1>
          </div>
          <div className="verify-section-main">
            <img
              className="verify-img"
              src={NewPinImg}
              alt="create-new-pin-img"
            />
            <p className="sub-text">Enter your PIN Number to confirm payment</p>
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
            <div
              className="bottom-fix-btn onboarding-next-btn-Subscribe"
              onClick={handleSignIn}
            >
              <Link to="/confirmation">Continue</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Confirm payment pin Screen End===================================== --> */}
    </>
  );
};
export default ConfirmPaymentPin;
