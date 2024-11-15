import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import VisaIcon from "../assets/images/visa-icon.png";
import BackBtn from "../assets/images/Button-Back.png";
import DatePicker from "react-datepicker";

const AddNewCard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [cvv, setCvv] = useState("");
  const [username, setUsername] = useState("");

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
    navigate("/payment_method");
  };

  // datepicker
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date
      ? date
          .toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .split("/")
          .reverse()
          .join("-")
      : "**/**";
    document.getElementById("lokiExpiryDate").textContent = formattedDate;
  };

  // cvv functionality
  const validateInputcvv = (event) => {
    let inputValue = event.target.value.replace(/\D/g, "");
    if (inputValue.length > 3) {
      inputValue = inputValue.slice(0, 3);
    }
    setCvv(inputValue);
  };

  // username functionality

  const updateLokiBox = (lokiBoxId, inputValue) => {
    document.getElementById(lokiBoxId).innerText = inputValue;
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
    updateLokiBox("lokiCardName", event.target.value);
  };

  return (
    <>
      {/* <!-- ====================================== Add New card Screen===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <div className="back-btn back-btn2">
            <Link to="/bank_cards" onClick={handleBackClick}>
              <img className="logo-home" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Add New Card</h1>
          </div>
          <div className="verify-section-main align-items-stretch">
            <div className="position-relative demo-visa">
              <div>
                <img className="hello-visa" src={VisaIcon} alt="visa" />
              </div>
              <p className="card-hidden-number" id="lokiCardNumber">
                *** **** **** 0000
              </p>
              <div className="card-name-jessica-main">
                <p className="card-name-jessica" id="lokiCardName">
                  Jessica Smith
                </p>
                <div className="card-name-jessica-main-sub">
                  <p className="card-date-cvv" id="lokiExpiryDate">
                    **/**
                  </p>
                  <p className="card-date-cvv" id="lokiCVV">
                    {cvv || "***"}
                  </p>
                </div>
              </div>
            </div>
            <div className="new_password_input" id="new-card-inputs">
              <div className="form-item">
                <input
                  type="text"
                  id="username"
                  autoComplete="off"
                  required
                  value={username}
                  onChange={handleInputChange}
                />
                <label className="info-person" for="username">
                  Card Name
                </label>
              </div>
              <div className="form-item">
                <input
                  type="text"
                  required
                  pattern="\d*"
                  className="no-spinners"
                  id="cardNumber"
                  maxlength="16"
                  oninput="maskNumber(this)"
                />
                <label className="info-person" for="cardNumber">
                  Card Number
                </label>
              </div>
              <div className="date-number-cvv">
                <div className="form-item">
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd-yy"
                    className="no-spinners"
                    placeholderText="Expiry Date"
                    required
                  />
                  <label className="info-person" for="datepicker">
                    {/* Expiry Date */}
                  </label>
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    className="no-spinners"
                    id="threeDigitInput"
                    maxLength="3"
                    value={cvv}
                    onChange={validateInputcvv}
                    required
                  />
                  <label className="info-person" for="threeDigitInput">
                    CVV
                  </label>
                </div>
              </div>
            </div>
            <div className="print-continue-btn-head">
              <div
                className="bottom-fix-btn onboarding-next-btn-plus"
                onClick={handleSignIn}
              >
                <Link to="/payment_method">Add My Card</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Add New card Screen End===================================== --> */}
    </>
  );
};
export default AddNewCard;
