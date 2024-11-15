import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import BackBtn from "../assets/images/Button-Back.png";

const Language = () => {
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
      {/* <!-- ====================================== Language Screen===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <div className="back-btn back-btn2">
            <Link to="/Amigo_GPT_home" onClick={handleBackClick}>
              <img className="logo-home" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Language</h1>
          </div>
          <div className="verify-section-main align-items-stretch">
            <div className="form-check2 change-lan-sec language-sel">
              <input
                className="form-check-input custom-input"
                name="language"
                type="radio"
                id="language1"
                checked
              />
              <label
                className="form-check-label custom-lable color-label"
                htmlFor="language1"
              >
                English (US)
              </label>
            </div>
            <div className="form-check2 change-lan-sec">
              <input
                className="form-check-input custom-input"
                name="language"
                type="radio"
                id="language2"
              />
              <label
                className="form-check-label custom-lable"
                htmlFor="language2"
              >
                English (UK)
              </label>
            </div>
            <div className="form-check2 change-lan-sec">
              <input
                className="form-check-input custom-input"
                name="language"
                type="radio"
                id="language3"
              />
              <label
                className="form-check-label custom-lable"
                htmlFor="language3"
              >
                Hindi
              </label>
            </div>
            <div className="form-check2 change-lan-sec">
              <input
                className="form-check-input custom-input"
                name="language"
                type="radio"
                id="language4"
              />
              <label
                className="form-check-label custom-lable"
                htmlFor="language4"
              >
                Spanish
              </label>
            </div>
            <div className="form-check2 change-lan-sec">
              <input
                className="form-check-input custom-input"
                name="language"
                type="radio"
                id="language5"
              />
              <label
                className="form-check-label custom-lable"
                htmlFor="language5"
              >
                French
              </label>
            </div>
            <div className="form-check2 change-lan-sec">
              <input
                className="form-check-input custom-input"
                name="language"
                type="radio"
                id="language6"
              />
              <label
                className="form-check-label custom-lable"
                htmlFor="language6"
              >
                Arabic
              </label>
            </div>
            <div className="form-check2 change-lan-sec">
              <input
                className="form-check-input custom-input"
                name="language"
                type="radio"
                id="language7"
              />
              <label
                className="form-check-label custom-lable"
                htmlFor="language7"
              >
                Bengali
              </label>
            </div>
            <div className="form-check2 change-lan-sec">
              <input
                className="form-check-input custom-input"
                name="language"
                type="radio"
                id="language8"
              />
              <label
                className="form-check-label custom-lable"
                htmlFor="language8"
              >
                Russian
              </label>
            </div>
            <div className="form-check2 change-lan-sec border-bottom-0">
              <input
                className="form-check-input custom-input"
                name="language"
                type="radio"
                id="language9"
              />
              <label
                className="form-check-label custom-lable"
                htmlFor="language9"
              >
                Chinese
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Language Screen End===================================== --> */}
    </>
  );
};
export default Language;
