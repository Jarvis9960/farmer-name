import React, { useEffect, useState } from "react";
import BackBtn from "../assets/images/Button-Back.png";
import NotificationImg from "../assets/images/notification-img.png";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
const NotificationAlllow = () => {
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
    navigate("/forget_password");
  };
  return (
    <>
      {/* <!-- ====================================== Notifiaction Allow Screen===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <div className="back-btn back-btn2">
            <a href="/verify_phone_number" onClick={handleBackClick}>
              <img src={BackBtn} alt="Button-Back" />
            </a>
            <h1>Notification</h1>
          </div>
          <div className="verify-section-main">
            <img
              className="verify-img"
              src={NotificationImg}
              alt="notification-img"
            />
            <p className="sub-text notified">
              Stay notified about new car, offer status and other updates. You
              can turn off any time from setting.
            </p>
            <div
              className="bottom-fix-btn Allow_notification_btn"
              onClick={handleSignIn}
            >
              <Link to="/forget_password">Allow</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Notifiaction Allow Screen End===================================== -->  */}
    </>
  );
};
export default NotificationAlllow;
