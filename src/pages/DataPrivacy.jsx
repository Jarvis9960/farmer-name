import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import BackBtn from "../assets/images/Button-Back.png";

const DataPrivacy = () => {
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
      {/* <!-- ====================================== data-privacy Screen ===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <div className="back-btn back-btn2">
            <Link to="/Amigo_GPT_home" onClick={handleBackClick}>
              <img className="logo-home" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Data & Privacy</h1>
          </div>
          <div className="verify-section-main align-items-stretch">
            <h2 className="privacy_manage">Manage Your Privacy Settings</h2>
            <div className="permission-box">
              <h3 className="privacy_manage permission">Permission Given</h3>
              <p className="keep">
                Keep track of the data & permissions you’re sharing with the
                apps & sites you use.
              </p>
            </div>
            <div className="permission-box">
              <h3 className="privacy_manage permission">Search Privacy</h3>
              <p className="keep">
                Control how people can find you on PayFast.
              </p>
            </div>
            <div className="permission-box">
              <h3 className="privacy_manage permission">Blocked Contacts</h3>
              <p className="keep">
                Review & edit the people you previously blocked.
              </p>
            </div>
            <h2 className="privacy_manage data">Manage Your Data</h2>
            <div className="permission-box">
              <div className="d-flex justify-content-between">
                <h3 className="privacy_manage permission">
                  Download Your Data
                </h3>
                <div className="form-check border-bottom px-0 custom-radio">
                  <input
                    className="form-check-input-radio form-check-input-radio2"
                    type="radio"
                    name="Payment"
                    id="Payment1"
                    value="Payment1"
                    checked
                  />
                </div>
              </div>
              <p className="keep">Get a copy of your account data</p>
            </div>
            <div className="permission-box email-me">
              <div className="d-flex justify-content-between">
                <h3 className="privacy_manage permission">Correct Your Data</h3>
                <div className="form-check border-bottom px-0 custom-radio">
                  <input
                    className="form-check-input-radio form-check-input-radio2"
                    type="radio"
                    name="Payment"
                    id="Payment2"
                    value="Payment2"
                  />
                </div>
              </div>
              <p className="keep">You can correct data any time, any where.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== data-privacy Screen End===================================== --> */}
    </>
  );
};
export default DataPrivacy;
