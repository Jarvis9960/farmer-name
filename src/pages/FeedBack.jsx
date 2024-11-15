import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import BackBtn from "../assets/images/Button-Back.png";
import AngleIcon from "../assets/images/angle-down.svg";

const FeedBack = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Choose Your Subject");

  const handleBackClick = () => {
    navigate(1); // This will navigate to the previous page in the history stack
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 500); // Simulate loading time
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  const handleItemClick = (value, text) => {
    setSelectedItem(text);
    setIsActive(false);
  };

  const handleSignIn = () => {
    navigate("/Amigo_GPT_home");
  };

  return (
    <>
      {/* <!-- ====================================== Feedback Screen ===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <div className="back-btn back-btn2">
            <Link to="/Amigo_GPT_home" onClick={handleBackClick}>
              <img className="logo-home" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Your Feedback</h1>
          </div>
          <div className="verify-section-main align-items-stretch">
            <div className="sign-in-full-section ">
              <form className="forget-password-screen-form">
                <div className="feedback-sec">
                  <label className="feedback-lbl"> Your Email Address</label>
                  <input
                    type="email"
                    id="Email"
                    placeholder="Write here"
                    className="feedback-sec-txt"
                  />
                </div>
                <label className="feedback-lbl feedback-text-spacer">
                  {" "}
                  Select Subject (Optional)
                </label>
                <a className="select-dropdown__button">
                  <div className="select-dropdown">
                    <div
                      className="select-dropdown__button"
                      onClick={handleButtonClick}
                    >
                      <span>{selectedItem}</span>
                      <img
                        src={AngleIcon}
                        className={`fa-solid fa-angle-down ${
                          isActive ? "rotate" : ""
                        }`}
                      ></img>
                    </div>
                    <ul
                      className={`select-dropdown__list ${
                        isActive ? "active" : ""
                      }`}
                    >
                      <li
                        data-value="1"
                        className="select-dropdown__list-item"
                        onClick={() => handleItemClick(1, "Good")}
                      >
                        Good
                      </li>
                      <li
                        data-value="2"
                        className="select-dropdown__list-item"
                        onClick={() => handleItemClick(2, "Bad")}
                      >
                        Bad
                      </li>
                      <li
                        data-value="3"
                        className="select-dropdown__list-item"
                        onClick={() => handleItemClick(3, "Excellent")}
                      >
                        Excellent
                      </li>
                      <li
                        data-value="4"
                        className="select-dropdown__list-item"
                        onClick={() => handleItemClick(4, "Other")}
                      >
                        Other
                      </li>
                    </ul>
                  </div>
                </a>
                <div className="feedback-text feedback-text-spacer">
                  <label className="feedback-lbl">Description</label>
                  <textarea
                    rows="4"
                    className="feedback-tp"
                    placeholder="Write here..."
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="print-continue-btn-head">
              <div
                className="onboarding-next-btn-plus bottom-fix-btn"
                onClick={handleSignIn}
              >
                <Link to="/Amigo_GPT_home">Submit</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Feedback Screen End===================================== --> */}
    </>
  );
};
export default FeedBack;
