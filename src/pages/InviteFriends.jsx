import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import BackBtn from "../assets/images/Button-Back.png";
import FriendImg1 from "../assets/images/friend1.jpg";
import FriendImg2 from "../assets/images/friend2.png";
import FriendImg3 from "../assets/images/friend3.jpg";
import FriendImg4 from "../assets/images/friend4.jpg";
import FriendImg5 from "../assets/images/friend5.jpg";
import FriendImg6 from "../assets/images/friend6.jpg";
import FriendImg7 from "../assets/images/friend7.png";
import FriendImg8 from "../assets/images/friend8.png";
import FriendImg9 from "../assets/images/friend9.png";
import FriendImg10 from "../assets/images/friend10.jpg";

const InviteFriends = () => {
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
      {/* <!-- ====================================== Invite Frinds Screen===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <div className="back-btn back-btn2">
            <Link to="/Amigo_GPT_home" onClick={handleBackClick}>
              <img className="logo-home" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Invite Friends</h1>
            <h2 className="d-none">hidden</h2>
            <h3 className="d-none">hidden</h3>
          </div>
          <div className="verify-section-main align-items-stretch">
            <div className="invite-friend-full">
              <div className="invite-friend-wrapper">
                <div className="invite-img">
                  <img src={FriendImg1} alt="friend-img" />
                </div>
                <div className="invite-content">
                  <h4 className="friend-name">Aayan Smith</h4>
                  <p className="friend-no">
                    <a href="tel:+1-200-555-0125">+1-200-555-0125</a>
                  </p>
                </div>
                <div className="friend-invite">
                  <div className="friend-select">
                    <input
                      type="checkbox"
                      id="select-friend1"
                      name="select-language"
                      checked
                    />
                    <label
                      className="custom-radio-sel-friend "
                      htmlFor="select-friend1"
                    >
                      Invited
                    </label>
                  </div>
                </div>
              </div>
              <div className="invite-friend-wrapper">
                <div className="invite-img">
                  <img src={FriendImg2} alt="friend-img" />
                </div>
                <div className="invite-content">
                  <h4 className="friend-name">Abilima Vanikawa</h4>
                  <p className="friend-no">
                    <a href="tel:+1-200-555-0125">+1-202-555-0365</a>
                  </p>
                </div>
                <div className="friend-invite">
                  <div className="friend-select">
                    <input
                      type="checkbox"
                      id="select-friend2"
                      name="select-language"
                    />
                    <label
                      className="custom-radio-sel-friend "
                      htmlFor="select-friend2"
                    >
                      Invited
                    </label>
                  </div>
                </div>
              </div>
              <div className="invite-friend-wrapper">
                <div className="invite-img">
                  <img src={FriendImg3} alt="friend-img" />
                </div>
                <div className="invite-content">
                  <h4 className="friend-name">Alan Williamson</h4>
                  <p className="friend-no">
                    <a href="tel:+1-200-555-0125">+1-300-452-6523</a>
                  </p>
                </div>
                <div className="friend-invite">
                  <div className="friend-select">
                    <input
                      type="checkbox"
                      id="select-friend3"
                      name="select-language"
                    />
                    <label
                      className="custom-radio-sel-friend "
                      htmlFor="select-friend3"
                    >
                      Invited
                    </label>
                  </div>
                </div>
              </div>
              <div className="invite-friend-wrapper">
                <div className="invite-img">
                  <img src={FriendImg4} alt="friend-img" />
                </div>
                <div className="invite-content">
                  <h4 className="friend-name">Albert Alenxander</h4>
                  <p className="friend-no">
                    <a href="tel:+1-200-555-0125">+1-202-555-0119</a>
                  </p>
                </div>
                <div className="friend-invite">
                  <div className="friend-select">
                    <input
                      type="checkbox"
                      id="select-friend4"
                      name="select-language"
                    />
                    <label
                      className="custom-radio-sel-friend "
                      htmlFor="select-friend4"
                    >
                      Invited
                    </label>
                  </div>
                </div>
              </div>
              <div className="invite-friend-wrapper">
                <div className="invite-img">
                  <img src={FriendImg5} alt="friend-img" />
                </div>
                <div className="invite-content">
                  <h4 className="friend-name">Alyassa Russel</h4>
                  <p className="friend-no">
                    <a href="tel:+1-200-555-0125">+1-300-456-0123</a>
                  </p>
                </div>
                <div className="friend-invite">
                  <div className="friend-select">
                    <input
                      type="checkbox"
                      id="select-friend5"
                      name="select-language"
                      checked
                    />
                    <label
                      className="custom-radio-sel-friend "
                      htmlFor="select-friend5"
                    >
                      Invited
                    </label>
                  </div>
                </div>
              </div>
              <div className="invite-friend-wrapper">
                <div className="invite-img">
                  <img src={FriendImg6} alt="friend-img" />
                </div>
                <div className="invite-content">
                  <h4 className="friend-name">Anthony Robetson</h4>
                  <p className="friend-no">
                    <a href="tel:+1-200-555-0125">+1-200-555-0125</a>
                  </p>
                </div>
                <div className="friend-invite">
                  <div className="friend-select">
                    <input
                      type="checkbox"
                      id="select-friend6"
                      name="select-language"
                    />
                    <label
                      className="custom-radio-sel-friend "
                      htmlFor="select-friend6"
                    >
                      Invited
                    </label>
                  </div>
                </div>
              </div>
              <div className="invite-friend-wrapper">
                <div className="invite-img">
                  <img src={FriendImg7} alt="friend-img" />
                </div>
                <div className="invite-content">
                  <h4 className="friend-name">Arianna Cooper</h4>
                  <p className="friend-no">
                    <a href="tel:+1-200-555-0125">+1-302-555-0365</a>
                  </p>
                </div>
                <div className="friend-invite">
                  <div className="friend-select">
                    <input
                      type="checkbox"
                      id="select-friend7"
                      name="select-language"
                      checked
                    />
                    <label
                      className="custom-radio-sel-friend "
                      htmlFor="select-friend7"
                    >
                      Invited
                    </label>
                  </div>
                </div>
              </div>
              <div className="invite-friend-wrapper">
                <div className="invite-img">
                  <img src={FriendImg8} alt="friend-img" />
                </div>
                <div className="invite-content">
                  <h4 className="friend-name">Aayan Smith</h4>
                  <p className="friend-no">
                    <a href="tel:+1-200-555-0125">+1-202-555-0365</a>
                  </p>
                </div>
                <div className="friend-invite">
                  <div className="friend-select">
                    <input
                      type="checkbox"
                      id="select-friend8"
                      name="select-language"
                    />
                    <label
                      className="custom-radio-sel-friend "
                      htmlFor="select-friend8"
                    >
                      Invited
                    </label>
                  </div>
                </div>
              </div>
              <div className="invite-friend-wrapper">
                <div className="invite-img">
                  <img src={FriendImg9} alt="friend-img" />
                </div>
                <div className="invite-content">
                  <h4 className="friend-name">Pedro Huard</h4>
                  <p className="friend-no">
                    <a href="tel:+1-200-555-0125">+1-200-555-0125</a>
                  </p>
                </div>
                <div className="friend-invite">
                  <div className="friend-select">
                    <input
                      type="checkbox"
                      id="select-friend9"
                      name="select-language"
                    />
                    <label
                      className="custom-radio-sel-friend "
                      htmlFor="select-friend9"
                    >
                      Invited
                    </label>
                  </div>
                </div>
              </div>
              <div className="invite-friend-wrapper">
                <div className="invite-img">
                  <img src={FriendImg10} alt="friend-img" />
                </div>
                <div className="invite-content">
                  <h4 className="friend-name">Albert Alenxander</h4>
                  <p className="friend-no">
                    <a href="tel:+1-200-555-0125">+1-200-125-0125</a>
                  </p>
                </div>
                <div className="friend-invite">
                  <div className="friend-select">
                    <input
                      type="checkbox"
                      id="select-friend10"
                      name="select-language"
                    />
                    <label
                      className="custom-radio-sel-friend "
                      htmlFor="select-friend10"
                    >
                      Invited
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Invite Frinds Screen End===================================== --> */}
    </>
  );
};
export default InviteFriends;
