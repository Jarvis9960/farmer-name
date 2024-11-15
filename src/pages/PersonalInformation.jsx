import React, { useEffect, useState } from "react";
import GirlImg from "../assets/images/girl.png";
import BackBtn from "../assets/images/Button-Back.png";
import CongradulationsImg from "../assets/images/congratulations.png";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import DatePicker from "react-datepicker";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";
import { Modal, Button } from "react-bootstrap";
import VideoKYC from "../components/VideoKYC ";

const PersonalInformation = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState(GirlImg); // Default profile image
  const [showLoader, setShowLoader] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    navigate("#finger-print-modal");
  };

  // upload img
  const readURL = (input) => {
    if (input.target.files && input.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(input.target.files[0]);
    }
  };

  const handleFileChange = (event) => {
    readURL(event);
  };

  const handleUploadClick = () => {
    document.querySelector(".file-upload").click();
  };

  const handleContinueClick = () => {
    setShowLoader(true);

    // Simulate loader for 3 seconds
    setTimeout(() => {
      // setShowLoader(false);
      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "/submit_video_kyc";
      }, 2000);
    }, 2000);
  };
  return (
    <>
      {/* <!-- ====================================== Personal Information Screen===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <div className="back-btn back-btn2">
            <Link to="/" onClick={handleBackClick}>
              <img className="profile-pic" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Personal Information</h1>
          </div>
          <div className="verify-section-main verify-section-main-forget">
            {/* <VideoKYC /> */}
            <div className="new_password_input">
              <div className="form-item">
                <input
                  type="text"
                  id="First_Name"
                  autoComplete="off"
                  required
                />
                <label className="info-person" htmlFor="First_Name">
                  First Name
                </label>
              </div>
              <div className="form-item">
                <input type="text" id="Last_Name" autoComplete="off" required />
                <label className="info-person" htmlFor="Last_Name">
                  Last Name
                </label>
              </div>
              <div className="form-item">
                <input
                  type="text"
                  id="Email_Address"
                  autoComplete="off"
                  required
                />
                <label className="info-person" htmlFor="Email_Address">
                  Email Address
                </label>
              </div>
              <div className="form-item">
                <input
                  type="number"
                  id="mobile_number"
                  className="no-spinners"
                  autoComplete="off"
                  required
                />
                <label className="info-person" htmlFor="mobile_number">
                  Mobile Number
                </label>
              </div>
              <div className="form-item">
                <DatePicker
                  id="datepicker"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd-MM-yyyy"
                  placeholderText="Date of Birth(DD/MM/YYYY)"
                  className="form-control"
                />
                <label
                  className="info-person"
                  htmlFor="datepicker"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                >
                  {/* Date of Birth(DD/MM/YYYY) */}
                </label>
                <svg
                  className="edit-info"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g>
                    <path
                      className="edit-info-calender"
                      d="M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7Z"
                      stroke="#0F0F0F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className=" edit-info-calender"
                      d="M16 3V7"
                      stroke="#0F0F0F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className=" edit-info-calender"
                      d="M8 3V7"
                      stroke="#0F0F0F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className=" edit-info-calender"
                      d="M4 11H20"
                      stroke="#0F0F0F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className=" edit-info-calender"
                      d="M8 15H10V17H8V15Z"
                      stroke="#0F0F0F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div
              className="bottom-fix-btn onboarding-next-btn print-continue-btn"
              onClick={handleShow}
              data-bs-toggle="modal"
            >
              <Link
                to="#finger-print-modal"
                data-bs-toggle="modal"
                onClick={handleContinueClick}
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Personal Information Screen===================================== --> */}
      {/* <!-- ====================================== Personal information Screen Modal ===================================== --> */}
      <Modal
        className="modal fade"
        id="finger-print-modal"
        show={show}
        onHide={handleClose}
        centered
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content finger-modal-content">
            <Modal.Body>
              <div className="finger-print-modal-popup">
                <div className="finger-img-sec">
                  <img src={CongradulationsImg} alt="Congratulation-img" />
                </div>
                <div className="finger-content-sec mt-32">
                  <h2 className="congratulations">Congratulations!</h2>
                  <p className="few-sec">
                    Your Information is store securely. please record you video
                    and submit for video kyc
                  </p>
                  {showLoader && (
                    <div className="loader2">
                      <div className="sk-fading-circle">
                        <div className="sk-circle1 sk-circle"></div>
                        <div className="sk-circle2 sk-circle"></div>
                        <div className="sk-circle3 sk-circle"></div>
                        <div className="sk-circle4 sk-circle"></div>
                        <div className="sk-circle5 sk-circle"></div>
                        <div className="sk-circle6 sk-circle"></div>
                        <div className="sk-circle7 sk-circle"></div>
                        <div className="sk-circle8 sk-circle"></div>
                        <div className="sk-circle9 sk-circle"></div>
                        <div className="sk-circle10 sk-circle"></div>
                        <div className="sk-circle11 sk-circle"></div>
                        <div className="sk-circle12 sk-circle"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Modal.Body>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default PersonalInformation;
