import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import BackBtn from "../assets/images/Button-Back.png";

const DeleteDeactivate = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedAction, setSelectedAction] = useState("");

  const handleBackClick = () => {
    navigate(1); // This will navigate to the previous page in the history stack
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 500); // Simulate loading time
  }, []);

  if (loading) {
    return <Loader />;
  }

  const continueAction = () => {
    if (selectedAction === "delete") {
      navigate("/delete");
    } else if (selectedAction === "deactivate") {
      navigate("/deactivate");
    }
  };
  return (
    <>
      {/* <!-- ====================================== Delete Deactivate Screen ===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <div className="back-btn back-btn2">
            <Link to="/Amigo_GPT_home" onClick={handleBackClick}>
              <img className="profile-pic" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Delete or Deactivate</h1>
            <h2 className="d-none">hidden</h2>
          </div>
          <div className="verify-section-main align-items-stretch">
            <p className="leave-text">
              If you want to leave Amigo GPT temporarily, simply deactivate your
              account. If you choose to delete your account instead, you won’t
              be able to recover it after 30 days.
            </p>
            <form id="deleteDeactivateForm">
              <div className="permission-box permission-box2">
                <div className="d-flex justify-content-between">
                  <h3 className="privacy_manage permission">
                    Deactivate Account
                  </h3>
                  <div className="form-check border-bottom px-0 custom-radio">
                    {/* <input
                      className="form-check-input-radio form-check-input-radio2"
                      type="radio"
                      name="action"
                      value="deactivate"
                    /> */}
                    <input
                      className="form-check-input-radio form-check-input-radio2"
                      type="radio"
                      name="action"
                      value="deactivate"
                      checked={selectedAction === "deactivate"}
                      onChange={(e) => setSelectedAction(e.target.value)}
                    />
                  </div>
                </div>
                <p className="keep">
                  No one can see your account, including all content that is
                  stored in it. Reactivate your account and recover all content
                  anytime.
                </p>
              </div>
              <div className="permission-box permission-box-bottom">
                <div className="d-flex justify-content-between">
                  <h3 className="privacy_manage permission">
                    Delete Account Permanently
                  </h3>
                  <div className="form-check border-bottom px-0 custom-radio">
                    {/* <input
                      className="form-check-input-radio form-check-input-radio2"
                      type="radio"
                      name="action"
                      value="delete"
                    /> */}
                    <input
                      className="form-check-input-radio form-check-input-radio2"
                      type="radio"
                      name="action"
                      value="delete"
                      checked={selectedAction === "delete"}
                      onChange={(e) => setSelectedAction(e.target.value)}
                    />
                  </div>
                </div>
                <p className="keep">
                  Your account and content will be deleted permanently. You may
                  cancel the deletion request by reactivating your account
                  within 30 days.
                </p>
              </div>
            </form>
            <div className="print-continue-btn-head">
              <div
                className="onboarding-next-btn-plus  bottom-fix-btn"
                onClick={continueAction}
              >
                <a onClick={continueAction} href="javascript:void(0)">
                  Continue
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Delete Deactivate Screen End===================================== --> */}
    </>
  );
};
export default DeleteDeactivate;
