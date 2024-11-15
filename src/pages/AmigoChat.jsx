import React, { useEffect, useRef, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Link, useNavigate } from "react-router-dom";
import BackBtn from "../assets/images/Button-Back.png";
import AmigoLogo from "../assets/images/logo.png";
import ChatMenuImg from "../assets/images/chat-menu-img.png";
import Loader from "../components/Loader";
import { Offcanvas } from "react-bootstrap";

const AmigoChat = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleBackClick = () => {
    navigate(1); // This will navigate to the previous page in the history stack
  };

  const FakeMessages = [
    "Hey, Jessica! I’m Amigo 😊",
    "I am very happy today because I can talk with you 😍😍",
    "How are you?",
    "Not too bad, thanks",
    "What do you do?",
    "That's awesome",
    "I think you're a nice person",
    "Why do you think that?",
    "Can you explain?",
    "Anyway I've gotta go now",
    "It was a pleasure chat with you",
    "Bye",
    ":)",
  ];

  const [fakeMessageIndex, setFakeMessageIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      addFakeMessage();
    }, 1000);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMessageSubmit = () => {
    if (inputValue.trim() === "") return;

    const newMessage = {
      text: inputValue,
      sender: "user",
      timestamp: getCurrentTime(),
    };

    const botResponse = {
      text: FakeMessages[fakeMessageIndex],
      sender: "bot",
      timestamp: getCurrentTime(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputValue("");
    scrollToBottom();

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botResponse]);

      setFakeMessageIndex((prevIndex) => prevIndex + 1);
      scrollToBottom();
    }, 2000);
  };

  const addFakeMessage = () => {
    if (fakeMessageIndex < FakeMessages.length) {
      const newMessage = {
        text: FakeMessages[fakeMessageIndex],
        sender: "bot",
        timestamp: getCurrentTime(),
      };

      setMessages([...messages, newMessage]);
      setFakeMessageIndex(fakeMessageIndex + 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleMessageSubmit();
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 500); // Simulate loading time
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* <!-- ====================================== Amigo Chat Screen ===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <div className="amigo-chat-menu-main">
            <div className="d-flex align-items-center">
              <Link to="/Amigo_GPT_home" onClick={handleBackClick}>
                <img className="profile-pic" src={BackBtn} alt="Button-Back" />
              </Link>
              <h1>Amigo GPT</h1>
            </div>
            <div>
              <img
                className="chat-menu-img"
                src={ChatMenuImg}
                onClick={handleShow}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                alt="chat-menu-img"
              />
            </div>
          </div>
          {/* <!-- ======================== Side Menu =========================== --> */}
          <div className="amigo-chat-AI-main">
            <div className="chat">
              <div className="chat-title">
                <figure className="avatar">
                  <img src={AmigoLogo} alt="logo" />
                </figure>
              </div>
              <div id="mySidenav" className="sidenav">
                <Offcanvas
                  show={show}
                  className="offcanvas offcanvas-end"
                  id="offcanvasRight"
                  onHide={handleClose}
                >
                  <Offcanvas.Body className="offcanvas-body">
                    <a className="space" href="#" onclick="toggleNav()">
                      <svg
                        className="chat-menu-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <mask
                          id="mask0_3_3386"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <path d="M0 0H20V20H0V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_3_3386)">
                          <path
                            className="chat-sidenav-icon"
                            d="M4 16.7737H7.33333L16.0833 8.02369C16.3022 7.80482 16.4758 7.54498 16.5943 7.25902C16.7127 6.97305 16.7737 6.66655 16.7737 6.35702C16.7737 6.04749 16.7127 5.741 16.5943 5.45503C16.4758 5.16906 16.3022 4.90923 16.0833 4.69036C15.8645 4.47149 15.6046 4.29787 15.3187 4.17942C15.0327 4.06097 14.7262 4 14.4167 4C14.1071 4 13.8006 4.06097 13.5147 4.17942C13.2287 4.29787 12.9689 4.47149 12.75 4.69036L4 13.4404V16.7737Z"
                            stroke="#0F0F0F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="chat-sidenav-icon"
                            d="M11.917 5.52368L15.2503 8.85701"
                            stroke="#0F0F0F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                      Rename
                    </a>
                    <a className="space" href="#" onclick="toggleNav()">
                      <svg
                        className="chat-menu-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <mask
                          id="mask0_3_3378"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <path d="M0 0H20V20H0V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_3_3378)">
                          <path
                            className="chat-sidenav-icon"
                            d="M8.33301 8.33337L11.6663 11.6667M11.6663 8.33337L8.33301 11.6667"
                            stroke="#0F0F0F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="chat-sidenav-icon"
                            d="M10 2.5C16 2.5 17.5 4 17.5 10C17.5 16 16 17.5 10 17.5C4 17.5 2.5 16 2.5 10C2.5 4 4 2.5 10 2.5Z"
                            stroke="#0F0F0F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                      Clear Chat
                    </a>
                    <a className="space" href="#" onclick="toggleNav()">
                      <svg
                        className="chat-menu-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <mask
                          id="mask0_3_3369"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <path d="M0 0H20V20H0V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_3_3369)">
                          <path
                            className="chat-sidenav-icon"
                            d="M6.66699 10L10.0003 13.3333L13.3337 10"
                            stroke="#0F0F0F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="chat-sidenav-icon"
                            d="M10 6.66663V13.3333"
                            stroke="#0F0F0F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="chat-sidenav-icon"
                            d="M10 2.5C16 2.5 17.5 4 17.5 10C17.5 16 16 17.5 10 17.5C4 17.5 2.5 16 2.5 10C2.5 4 4 2.5 10 2.5Z"
                            stroke="#0F0F0F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                      Export Chat
                    </a>
                    <a href="#finger-print-modal" data-bs-toggle="modal">
                      <svg
                        className="chat-menu-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <mask
                          id="mask0_3_3360"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <path d="M0 0H20V20H0V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_3_3360)">
                          <path
                            className="chat-sidenav-icon"
                            d="M11.6667 6.66671V5.00004C11.6667 4.55801 11.4911 4.13409 11.1785 3.82153C10.866 3.50897 10.442 3.33337 10 3.33337H4.16667C3.72464 3.33337 3.30072 3.50897 2.98816 3.82153C2.67559 4.13409 2.5 4.55801 2.5 5.00004V15C2.5 15.4421 2.67559 15.866 2.98816 16.1786C3.30072 16.4911 3.72464 16.6667 4.16667 16.6667H10C10.442 16.6667 10.866 16.4911 11.1785 16.1786C11.4911 15.866 11.6667 15.4421 11.6667 15V13.3334"
                            stroke="#0F0F0F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="chat-sidenav-icon"
                            d="M7.5 10H17.5L15 7.5"
                            stroke="#0F0F0F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="chat-sidenav-icon"
                            d="M15 12.5L17.5 10"
                            stroke="#0F0F0F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                      End Session
                    </a>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
              {/* <!-- ======================================  Chat with Amigo ===================================== --> */}
              <div className="messages">
                <Scrollbars className="messages" autohide>
                  <div className="messages-content">
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`message ${
                          msg.sender === "user" ? "message-personal" : "new"
                        }`}
                      >
                        {msg.text}
                        <span className="timestamp">{msg.timestamp}</span>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                </Scrollbars>
              </div>
              <div className="chat-input">
                <div className="message-box">
                  <textarea
                    className="message-input"
                    placeholder="Write here......"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                  ></textarea>
                  <svg
                    className="specker"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <mask
                      id="mask0_3_3619"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="white" />
                    </mask>
                    <g mask="url(#mask0_3_3619)">
                      <path
                        className="specker-file"
                        d="M15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10V5Z"
                        stroke="#555555"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="specker-file"
                        d="M5 10C5 11.8565 5.7375 13.637 7.05025 14.9497C8.36301 16.2625 10.1435 17 12 17C13.8565 17 15.637 16.2625 16.9497 14.9497C18.2625 13.637 19 11.8565 19 10"
                        stroke="#555555"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="specker-file"
                        d="M8 21H16"
                        stroke="#555555"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="specker-file"
                        d="M12 17V21"
                        stroke="#555555"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                <button
                  type="submit"
                  className="message-submit"
                  onClick={handleMessageSubmit}
                >
                  <svg
                    className="send-icons"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <mask
                      id="mask0_3_3689"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="white" />
                    </mask>
                    <g mask="url(#mask0_3_3689)">
                      <path
                        className="icon-send-message"
                        d="M10 14L21 3"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="icon-send-message"
                        d="M21.0006 3L14.5006 21C14.4567 21.0957 14.3862 21.1769 14.2976 21.2338C14.209 21.2906 14.1059 21.3209 14.0006 21.3209C13.8952 21.3209 13.7921 21.2906 13.7035 21.2338C13.6149 21.1769 13.5444 21.0957 13.5006 21L10.0006 14L3.00056 10.5C2.90482 10.4561 2.82369 10.3857 2.7668 10.2971C2.70992 10.2084 2.67969 10.1053 2.67969 10C2.67969 9.89468 2.70992 9.79158 2.7668 9.70295C2.82369 9.61431 2.90482 9.54387 3.00056 9.5L21.0006 3Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </button>
              </div>
              {/* <!-- ======================================  Chat with Amigo End ===================================== --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Amigo Chat Screen End===================================== --> */}
    </>
  );
};
export default AmigoChat;
