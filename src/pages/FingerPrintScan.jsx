import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import BackBtn from "../assets/images/Button-Back.png";

const FingerPrintScan = () => {
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
    navigate("/language_select");
  };
  return (
    <>
      {/* <!-- ====================================== Finger print Screen ===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <div className="back-btn back-btn2">
            <Link to="/create_new_pin" onClick={handleBackClick}>
              <img className="profile-pic" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Set Your Finger Print</h1>
          </div>
          <div className="verify-section-main">
            <p className="sub-text secure">
              Add a PIN Number to make your account more secure.
            </p>
            <div className="scanner_main ">
              <div className="scan">
                <div className="fingerprint"></div>
              </div>
              <p className="sub-text">
                Please put your finger on the finger print scanner to get
                started.
              </p>
            </div>
            <div
              className="finger_print_button bottom-fix-btn"
              onClick={handleSignIn}
            >
              <Link to="/language_select">Continue</Link>
            </div>
            <div className="onboarding-next-btn-skip" onClick={handleSignIn}>
              <Link to="/language_select"> Skip, I’ll do this later</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Finger print Screen End===================================== --> */}
    </>
  );
};
export default FingerPrintScan;
