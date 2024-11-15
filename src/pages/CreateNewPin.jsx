import React, { useEffect, useState } from "react";
import BackBtn from "../assets/images/Button-Back.png";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import CreateNewPinImg from "../assets/images/create-new-pin-img.png";

const CreateNewPin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [otp, setOtp] = useState(["", "", "", ""]);

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
    navigate("/finger_print_scan");
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
      {/* <!-- ====================================== Create new pin Screen ===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <div className="back-btn back-btn2">
            <Link to="/personal_information" onClick={handleBackClick}>
              <img className="profile-pic" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Create New PIN</h1>
          </div>
          <div className="verify-section-main">
            <img
              className="verify-img"
              src={CreateNewPinImg}
              alt="create-new-pin-img"
            />
            <p className="sub-text">
              Add a PIN Number to make your account more secure.
            </p>
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
              <Link to="/finger_print_scan">Continue</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Create new pin Screen End===================================== --> */}
    </>
  );
};
export default CreateNewPin;
