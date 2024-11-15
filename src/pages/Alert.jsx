import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackBtn from "../assets/images/Button-Back.png";
import AlertImg from "../assets/images/alert-img.png";
import Loader from "../components/Loader";

const Alert = () => {
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
    navigate("/plus_subscription");
  };

  const handleAmigo = () => {
    navigate("/Amigo_GPT_home");
  };
  return (
    <>
      {/* <!-- ====================================== Alert Screen ===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <div className="back-btn back-btn2">
            <Link to="/confirmation" onClick={handleBackClick}>
              <img className="profile-pic" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Alert</h1>
          </div>
          <div className="verify-section-main">
            <div className="subscription-amigo-logo-main">
              <img className="verify-img" src={AlertImg} alt="alert-img" />
            </div>
            <h2 className="thank-you-subscriptions">
              Sorry! Your Order Has Failed!
            </h2>
            <p className="sub-text tellus">
              Venenatis praesent lorem tincidunt morbi ultrices quis dolor.
              Pellentesque nulla.
            </p>
            <div className="try_again_button" onClick={handleSignIn}>
              <Link to="/plus_subscription">Try Again</Link>
            </div>
            <div className="go-to-home" onClick={handleAmigo}>
              <Link to="/Amigo_GPT_home">Go To Home </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Alert Screen End===================================== --> */}
    </>
  );
};
export default Alert;
