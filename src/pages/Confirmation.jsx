import React, { useEffect, useState } from "react";
import ConfirmationImg from "../assets/images/confirmation-img.png";
import BackBtn from "../assets/images/Button-Back.png";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Confirmation = () => {
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
    navigate("/alert");
  };

  return (
    <>
      {/* <!-- ====================================== Confirmation Screen ===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <div className="back-btn back-btn2">
            <Link to="/confirm_payment_pin" onClick={handleBackClick}>
              <img className="profile-pic" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Confirmation</h1>
          </div>
          <div className="verify-section-main">
            <div className="subscription-amigo-logo-main">
              <img
                className="verify-img"
                src={ConfirmationImg}
                alt="confirmation-img"
              />
            </div>
            <h2 className="thank-you-subscriptions">
              Thank You For Your Subscriptions!
            </h2>
            <p className="sub-text tellus">
              Sagittis sit ipsum tellus vitae dui sed. Elementum auctor magna et
              a montes.
            </p>
            <div
              className=" bottom-fix-btn onboarding-next-btn-Subscribe"
              onClick={handleSignIn}
            >
              <Link to="/alert">Go To Home</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Confirmation Screen End===================================== --> */}
    </>
  );
};
export default Confirmation;