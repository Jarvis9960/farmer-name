import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import BackBtn from "../assets/images/Button-Back.png";

const Delete = () => {
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
    navigate("/");
  };
  return (
    <>
      {/* <!-- ====================================== Delete Screen ===================================== --> */}
      <div class="verification-main">
        <div class="container verify-screen-main p-0">
          <div class="back-btn back-btn2">
            <Link to="/delete_deactivate" onClick={handleBackClick}>
              <img className="profile-pic" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Delete Account</h1>
          </div>
          <div class="verify-section-main align-items-stretch">
            <h2 class="privacy_manage">Why are you leaving PayFast?</h2>
            <p class="leave-text deactivate_your_account support">
              We’re sorry to see you go! We’d love to know why you want to
              delete your account, so we can improve the app and support our
              community.
            </p>
            <div class="d-flex justify-content-between leaving-box">
              <h3 class="privacy_manage permission p-0">
                I’m leaving temporarily
              </h3>
              <div class="form-check border-bottom px-0 custom-radio">
                <input
                  class="form-check-input-radio form-check-input-radio2"
                  type="radio"
                  name="action"
                  value="delete"
                />
              </div>
            </div>
            <div class="d-flex justify-content-between leaving-box">
              <h3 class="privacy_manage permission p-0">
                I’m on PayFast too much
              </h3>
              <div class="form-check border-bottom px-0 custom-radio">
                <input
                  class="form-check-input-radio form-check-input-radio2"
                  type="radio"
                  name="action"
                  value="delete"
                />
              </div>
            </div>
            <div class="d-flex justify-content-between leaving-box">
              <h3 class="privacy_manage permission p-0">
                Too many irrelevant ads
              </h3>
              <div class="form-check border-bottom px-0 custom-radio">
                <input
                  class="form-check-input-radio form-check-input-radio2"
                  type="radio"
                  name="action"
                  value="delete"
                />
              </div>
            </div>
            <div class="d-flex justify-content-between leaving-box">
              <h3 class="privacy_manage permission p-0">
                Trouble getting startrd
              </h3>
              <div class="form-check border-bottom px-0 custom-radio">
                <input
                  class="form-check-input-radio form-check-input-radio2"
                  type="radio"
                  name="action"
                  value="delete"
                />
              </div>
            </div>
            <div class="d-flex justify-content-between leaving-box">
              <h3 class="privacy_manage permission p-0">
                I have multiple account
              </h3>
              <div class="form-check border-bottom px-0 custom-radio">
                <input
                  class="form-check-input-radio form-check-input-radio2"
                  type="radio"
                  name="action"
                  value="delete"
                  checked
                />
              </div>
            </div>
            <div class="d-flex justify-content-between leaving-box border-bottom-0">
              <h3 class="privacy_manage permission p-0">Another reason</h3>
              <div class="form-check border-bottom px-0 custom-radio">
                <input
                  class="form-check-input-radio form-check-input-radio2"
                  type="radio"
                  name="action"
                  value="delete"
                />
              </div>
            </div>
            <p class="tapping">
              Tapping “Delete Account” will delete PayFast account
              <span class="jesssmi">Jessica Smith.</span>
            </p>
            <div class="print-continue-btn-head">
              <div
                class="onboarding-next-btn-plus2 bottom-fix-btn"
                onClick={handleSignIn}
              >
                <Link to="/">Delete Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Delete Screen End===================================== --> */}
    </>
  );
};
export default Delete;
