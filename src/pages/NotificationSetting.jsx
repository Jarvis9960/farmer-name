import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import BackBtn from "../assets/images/Button-Back.png";

const NotificationSetting = () => {
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
      {/* <!-- ====================================== Notifiaction Setting Screen===================================== --> */}
      <div class="verification-main">
        <div class="container verify-screen-main p-0">
          <div class="back-btn back-btn2">
            <Link to="/Amigo_GPT_home" onClick={handleBackClick}>
              <img className="logo-home" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Notification Settings</h1>
          </div>
          <div class="verify-section-main align-items-stretch">
            <h2 class="will-notify">We will notify you when...</h2>
            <div class="swiches-toggle">
              <p class="remember">Your invoices are paid</p>
              <div class="check-box">
                <input type="checkbox" checked />
              </div>
            </div>
            <div class="swiches-toggle">
              <p class="remember"> Someone request money from you</p>
              <div class="check-box">
                <input type="checkbox" checked />
              </div>
            </div>
            <div class="swiches-toggle">
              <p class="remember">You send money to someone</p>
              <div class="check-box">
                <input type="checkbox" />
              </div>
            </div>
            <div class="swiches-toggle">
              <p class="remember">You receive money from someone</p>
              <div class="check-box">
                <input type="checkbox" checked />
              </div>
            </div>
            <div class="swiches-toggle">
              <p class="remember">You purchase something</p>
              <div class="check-box">
                <input type="checkbox" />
              </div>
            </div>
            <div class="swiches-toggle">
              <p class="remember">You receive a QR code payment</p>
              <div class="check-box">
                <input type="checkbox" checked />
              </div>
            </div>
            <div class="swiches-toggle">
              <p class="remember">You receive a direct payment</p>
              <div class="check-box">
                <input type="checkbox" checked />
              </div>
            </div>
            <div class="swiches-toggle">
              <p class="remember">You receive a subscriptions info</p>
              <div class="check-box">
                <input type="checkbox" />
              </div>
            </div>
            <div class="swiches-toggle">
              <p class="remember">You receive announcements & offers</p>
              <div class="check-box">
                <input type="checkbox" />
              </div>
            </div>
            <div class="swiches-toggle border-bottom-0 email-me">
              <p class="remember">You receive an app updates info</p>
              <div class="check-box">
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Notifiaction Setting Screen End===================================== --> */}
    </>
  );
};
export default NotificationSetting;
