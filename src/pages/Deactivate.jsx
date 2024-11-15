import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import BackBtn from "../assets/images/Button-Back.png";

const Deactivate = () => {
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
      {/* <!-- ====================================== Deactivate Screen ===================================== --> */}
      <div class="verification-main">
        <div class="container verify-screen-main p-0">
          <div class="back-btn back-btn2">
            <Link to="/delete_deactivate" onClick={handleBackClick}>
              <img className="profile-pic" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Deactivate</h1>
          </div>
          <div class="amigo-chat-AI-main">
            <h2 class="privacy_manage">
              Jessica Smith: Deactivate this account?
            </h2>
            <p class="leave-text deactivate_your_account">
              If you deactivate your account:
            </p>
            <ul class="deactivate-list">
              <li>No one will see your account and content.</li>
              <li>Information that isn’t stored in your account.</li>
              <li>
                Amigo GPT will continue to keep your data so that you can
                recover it when you reactivate your account.
              </li>
              <li>
                You can reactivate your account and recover all content anytime
                by using the same login details.
              </li>
            </ul>
            <div class="print-continue-btn-head">
              <div
                class="onboarding-next-btn-plus bottom-fix-btn"
                onClick={handleSignIn}
              >
                <Link to="/">Deactivate</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Deactivate Screen End===================================== --> */}
    </>
  );
};
export default Deactivate;
