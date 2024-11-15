import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import BackBtn from "../assets/images/Button-Back.png";

const MarketingPreferences = () => {
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

  return (
    <>
      {/* <!-- ====================================== Marketing Prefrences Screen===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <div className="back-btn back-btn2">
            <Link to="/Amigo_GPT_home" onClick={handleBackClick}>
              <img className="logo-home" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Marketing Preferences</h1>
          </div>
          <div className="verify-section-main align-items-stretch">
            <h2 className="remember relevant">
              We’ll send info that’s relevant to you. You can choose what you’d
              like to get from us and how we should send it.
            </h2>
            <h2 className="news-text">News</h2>
            <p className="remember send-important">
              we’ll send important info about our products and benefits to help
              you get the most from your account.
            </p>
            <div className="swiches-toggle">
              <p className="remember">Email me</p>
              <div className="check-box">
                <input type="checkbox" checked />
              </div>
            </div>
            <h2 className="news-text">Offers</h2>
            <p className="remember send-important">
              From travel to technology and fashion to food. we’ll send
              discounts and offers from our partner brands.
            </p>
            <div className="swiches-toggle">
              <p className="remember">Email me</p>
              <div className="check-box">
                <input type="checkbox" checked />
              </div>
            </div>
            <h2 className="news-text">Surveys</h2>
            <p className="remember send-important">
              From time to time, we’ll invite you to share your opinions. By
              taking part, you can help us create an even better PayFast.
            </p>
            <div className="swiches-toggle border-bottom-0 email-me">
              <p className="remember">Email me</p>
              <div className="check-box">
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Marketing Prefrences Screen End===================================== --> */}
    </>
  );
};
export default MarketingPreferences;
