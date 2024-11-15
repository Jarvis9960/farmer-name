import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import BackBtn from "../assets/images/Button-Back.png";

const BankCards = () => {
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
      {/* <!-- ====================================== Bank Card Screen ===================================== --> */}
      <div class="verification-main">
        <div class="container verify-screen-main p-0">
          <div class="back-btn back-btn2">
            <Link to="/Amigo_GPT_home" onClick={handleBackClick}>
              <img className="logo-home" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>Banks & Cards</h1>
          </div>
          <div class="verify-section-main align-items-stretch">
            <form>
              <div class="form-check border-bottom px-0 custom-radio">
                <Link to="/add_new_card">
                  <svg
                    class="svg-edit"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g>
                      <path
                        d="M2.33203 15.6666H5.66536L14.4154 6.91663C14.6342 6.69776 14.8079 6.43793 14.9263 6.15196C15.0448 5.86599 15.1057 5.5595 15.1057 5.24997C15.1057 4.94044 15.0448 4.63394 14.9263 4.34797C14.8079 4.06201 14.6342 3.80217 14.4154 3.5833C14.1965 3.36443 13.9367 3.19081 13.6507 3.07236C13.3647 2.95391 13.0582 2.89294 12.7487 2.89294C12.4392 2.89294 12.1327 2.95391 11.8467 3.07236C11.5607 3.19081 11.3009 3.36443 11.082 3.5833L2.33203 12.3333V15.6666Z"
                        stroke="#00D061"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.25 4.41663L13.5833 7.74996"
                        stroke="#00D061"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.332 14.8333H17.332"
                        stroke="#00D061"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.832 12.3333V17.3333"
                        stroke="#00D061"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </Link>
                <div class="form-check-label checkout-modal-lbl-payment">
                  <span class="payment-type border-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M0 28.8H32V32H0V28.8ZM3.2 16H6.4V27.2H3.2V16ZM11.2 16H14.4V27.2H11.2V16ZM17.6 16H20.8V27.2H17.6V16ZM25.6 16H28.8V27.2H25.6V16ZM0 8L16 0L32 8V14.4H0V8ZM16 9.6C16.8837 9.6 17.6 8.88365 17.6 8C17.6 7.11635 16.8837 6.4 16 6.4C15.1163 6.4 14.4 7.11635 14.4 8C14.4 8.88365 15.1163 9.6 16 9.6Z"
                        fill="#00D061"
                      />
                    </svg>
                  </span>
                  <div class="card-text-america">
                    <div class="bank-america-text">Bank of America</div>
                    <div class="america-card-number">
                      <span class="america-card-active">Active</span>| Card
                      Number **** 4625
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-check border-bottom px-0 custom-radio">
                <Link to="/add_new_card">
                  <svg
                    class="svg-edit"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <mask
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <path d="M0 0H20V20H0V0Z" fill="white" />
                    </mask>
                    <g>
                      <path
                        d="M2.33203 15.6666H5.66536L14.4154 6.91663C14.6342 6.69776 14.8079 6.43793 14.9263 6.15196C15.0448 5.86599 15.1057 5.5595 15.1057 5.24997C15.1057 4.94044 15.0448 4.63394 14.9263 4.34797C14.8079 4.06201 14.6342 3.80217 14.4154 3.5833C14.1965 3.36443 13.9367 3.19081 13.6507 3.07236C13.3647 2.95391 13.0582 2.89294 12.7487 2.89294C12.4392 2.89294 12.1327 2.95391 11.8467 3.07236C11.5607 3.19081 11.3009 3.36443 11.082 3.5833L2.33203 12.3333V15.6666Z"
                        stroke="#00D061"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.25 4.41663L13.5833 7.74996"
                        stroke="#00D061"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.332 14.8333H17.332"
                        stroke="#00D061"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.832 12.3333V17.3333"
                        stroke="#00D061"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </Link>
                <div class="form-check-label checkout-modal-lbl-payment">
                  <span class="payment-type border-0">
                    <svg
                      width="31"
                      height="19"
                      viewBox="0 0 31 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.0974 16.4389C13.5053 17.7698 11.4401 18.5733 9.1833 18.5733C4.14818 18.5733 0.0664062 14.5737 0.0664062 9.63996C0.0664062 4.70622 4.14818 0.706627 9.1833 0.706627C11.4401 0.706627 13.5053 1.51009 15.0974 2.84102C16.6894 1.51009 18.7547 0.706627 21.0114 0.706627C26.0465 0.706627 30.1283 4.70622 30.1283 9.63996C30.1283 14.5737 26.0465 18.5733 21.0114 18.5733C18.7547 18.5733 16.6894 17.7698 15.0974 16.4389Z"
                        fill="#ED0006"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.0957 16.4389C17.0557 14.8004 18.2985 12.3624 18.2985 9.63996C18.2985 6.91754 17.0557 4.47955 15.0957 2.84102C16.6878 1.51009 18.753 0.706627 21.0098 0.706627C26.0449 0.706627 30.1267 4.70622 30.1267 9.63996C30.1267 14.5737 26.0449 18.5733 21.0098 18.5733C18.753 18.5733 16.6878 17.7698 15.0957 16.4389Z"
                        fill="#F9A000"
                      />
                    </svg>
                  </span>
                  <div class="card-text-america">
                    <div class="bank-america-text">Master Card</div>
                    <div class="america-card-number">
                      <span class="america-card-active">Active</span>| Card
                      Number **** 7887
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-check border-bottom px-0 custom-radio">
                <Link to="/add_new_card">
                  <svg
                    class="svg-edit"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <mask
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <path d="M0 0H20V20H0V0Z" fill="white" />
                    </mask>
                    <g>
                      <path
                        d="M2.33203 15.6666H5.66536L14.4154 6.91663C14.6342 6.69776 14.8079 6.43793 14.9263 6.15196C15.0448 5.86599 15.1057 5.5595 15.1057 5.24997C15.1057 4.94044 15.0448 4.63394 14.9263 4.34797C14.8079 4.06201 14.6342 3.80217 14.4154 3.5833C14.1965 3.36443 13.9367 3.19081 13.6507 3.07236C13.3647 2.95391 13.0582 2.89294 12.7487 2.89294C12.4392 2.89294 12.1327 2.95391 11.8467 3.07236C11.5607 3.19081 11.3009 3.36443 11.082 3.5833L2.33203 12.3333V15.6666Z"
                        stroke="#00D061"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.25 4.41663L13.5833 7.74996"
                        stroke="#00D061"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.332 14.8333H17.332"
                        stroke="#00D061"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.832 12.3333V17.3333"
                        stroke="#00D061"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </Link>

                <div class="form-check-label checkout-modal-lbl-payment">
                  <span class="payment-type border-0">
                    <svg
                      class="visa"
                      width="33"
                      height="12"
                      viewBox="0 0 33 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.44956 11.1443H5.68016L3.60344 3.05649C3.50487 2.68445 3.29558 2.35555 2.98772 2.20053C2.21942 1.81097 1.3728 1.50093 0.449219 1.34457V1.03319H4.9105C5.52623 1.03319 5.98802 1.50093 6.06498 2.04417L7.1425 7.87819L9.91055 1.03319H12.603L8.44956 11.1443ZM14.1409 11.1443H11.5254L13.6791 1.03319H16.2945L14.1409 11.1443ZM19.6795 3.83429C19.7565 3.28971 20.2183 2.97833 20.7571 2.97833C21.6037 2.90014 22.5259 3.05651 23.2956 3.44472L23.7574 1.26775C22.9877 0.956368 22.1411 0.800003 21.3728 0.800003C18.8343 0.800003 16.9871 2.20055 16.9871 4.14432C16.9871 5.62305 18.2955 6.39948 19.2191 6.86723C20.2183 7.33362 20.6031 7.64501 20.5262 8.1114C20.5262 8.811 19.7565 9.12238 18.9882 9.12238C18.0646 9.12238 17.141 8.88918 16.2958 8.49962L15.834 10.6779C16.7576 11.0662 17.7568 11.2225 18.6803 11.2225C21.5267 11.2994 23.2956 9.90016 23.2956 7.80002C23.2956 5.1553 19.6795 5.00028 19.6795 3.83429ZM32.4472 11.1443L30.3705 1.03319H28.1399C27.6781 1.03319 27.2163 1.34457 27.0624 1.81097L23.2168 11.1443H25.9092L26.4466 9.66695H29.7548L30.0627 11.1443H32.4472ZM28.528 3.75611L29.2963 7.56683H27.1426L28.528 3.75611Z"
                      />
                    </svg>
                  </span>
                  <div class="card-text-america">
                    <div class="bank-america-text">Visa</div>
                    <div class="america-card-number">
                      <span class="america-card-inactive">Inactive</span>| Card
                      Number **** 2540
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-check border-bottom px-0 custom-radio">
                <Link to="/add_new_card">
                  <svg
                    class="svg-edit"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <mask
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <path d="M0 0H20V20H0V0Z" fill="white" />
                    </mask>
                    <g>
                      <path
                        d="M2.33203 15.6666H5.66536L14.4154 6.91663C14.6342 6.69776 14.8079 6.43793 14.9263 6.15196C15.0448 5.86599 15.1057 5.5595 15.1057 5.24997C15.1057 4.94044 15.0448 4.63394 14.9263 4.34797C14.8079 4.06201 14.6342 3.80217 14.4154 3.5833C14.1965 3.36443 13.9367 3.19081 13.6507 3.07236C13.3647 2.95391 13.0582 2.89294 12.7487 2.89294C12.4392 2.89294 12.1327 2.95391 11.8467 3.07236C11.5607 3.19081 11.3009 3.36443 11.082 3.5833L2.33203 12.3333V15.6666Z"
                        stroke="#00D061"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.25 4.41663L13.5833 7.74996"
                        stroke="#00D061"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.332 14.8333H17.332"
                        stroke="#00D061"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.832 12.3333V17.3333"
                        stroke="#00D061"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </Link>

                <div class="form-check-label checkout-modal-lbl-payment">
                  <span class="payment-type border-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M0 28.8H32V32H0V28.8ZM3.2 16H6.4V27.2H3.2V16ZM11.2 16H14.4V27.2H11.2V16ZM17.6 16H20.8V27.2H17.6V16ZM25.6 16H28.8V27.2H25.6V16ZM0 8L16 0L32 8V14.4H0V8ZM16 9.6C16.8837 9.6 17.6 8.88365 17.6 8C17.6 7.11635 16.8837 6.4 16 6.4C15.1163 6.4 14.4 7.11635 14.4 8C14.4 8.88365 15.1163 9.6 16 9.6Z"
                        fill="#00D061"
                      />
                    </svg>
                  </span>
                  <div class="card-text-america">
                    <div class="bank-america-text">JPMorgan Bank</div>
                    <div class="america-card-number">
                      <span class="america-card-active">Active</span>| Card
                      Number **** 4625
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div class="print-continue-btn-head">
              <div
                class="onboarding-next-btn-plus bottom-fix-btn"
                onclick="location.to='add_new_card'"
              >
                <Link to="/add_new_card">+ Link a New Card</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== Bank Card Screen End ===================================== --> */}
    </>
  );
};
export default BankCards;
