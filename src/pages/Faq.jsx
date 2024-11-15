import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import BackBtn from "../assets/images/Button-Back.png";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="nested-accordion">
      <h3 className={`faq-txt1 ${isOpen ? "selected" : ""}`} onClick={onClick}>
        {title}
      </h3>
      {isOpen && <div className="comment mt-12">{content}</div>}
    </div>
  );
};

const Faq = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  const handleTopClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handleBackClick = () => {
    navigate(1); // This will navigate to the previous page in the history stack
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 500); // Simulate loading time
  }, []);

  if (loading) {
    return <Loader />;
  }

  const accordionData = [
    {
      sectionTitle: "General",
      items: [
        {
          title: "What is Amigo GPT?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "Is Amigo GPT free to use?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "How do I can delete my account?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
      ],
    },
    {
      sectionTitle: "How to send message to Amigo GPT",
      items: [
        {
          title: "What is Amigo GPT?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "Is Amigo GPT free to use?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "How do I can delete my account?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
      ],
    },
    {
      sectionTitle: "How I can leave chat with Amigo GPT?",
      items: [
        {
          title: "What is Amigo GPT?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "Is Amigo GPT free to use?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "How do I can delete my account?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
      ],
    },
    {
      sectionTitle: "How do I delete chat with Amigo GPT?",
      items: [
        {
          title: "What is Amigo GPT?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "Is Amigo GPT free to use?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "How do I can delete my account?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
      ],
    },
    {
      sectionTitle: "How do I export chat in Amigo GPT?",
      items: [
        {
          title: "How can I submit a refund request?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "When will I receive my refund?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "Why was my refund request denied?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "What is a “credit refund”?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
      ],
    },
  ];
  return (
    <>
      {/* <!-- ====================================== FAQ Screen ===================================== --> */}
      <div className="verification-main">
        <div className="container verify-screen-main p-0">
          <div className="back-btn back-btn2">
            <Link to="/Amigo_GPT_home" onClick={handleBackClick}>
              <img className="logo-home" src={BackBtn} alt="Button-Back" />
            </Link>
            <h1>FAQs</h1>
            <h2 className="d-none">hidden</h2>
          </div>
          <div className="verify-section-main align-items-stretch">
            <section id="faq-sec">
              {accordionData.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className={`nested-accordion ${
                    openIndex === `top-${sectionIndex}` ? "selected" : ""
                  }`}
                >
                  <h3
                    className={`boder-top ${
                      openIndex === `top-${sectionIndex}` ? "selected" : ""
                    }`}
                    onClick={() => handleTopClick(`top-${sectionIndex}`)}
                  >
                    {section.sectionTitle}
                  </h3>
                  <div className="comment">
                    {openIndex === `top-${sectionIndex}` &&
                      section.items.map((item, index) => (
                        <AccordionItem
                          key={index}
                          title={item.title}
                          content={item.content}
                          isOpen={openIndex === `${sectionIndex}-${index}`}
                          onClick={() =>
                            handleClick(`${sectionIndex}-${index}`)
                          }
                        />
                      ))}
                  </div>
                </div>
              ))}
              {/* <div className="nested-accordion">
                <h3 className="boder-top">How to send message to Amigo GPT</h3>
                <div className="comment">
                  <div className="nested-accordion">
                    <h3 className="faq-txt1">What is Amigo GPT?</h3>
                    <div className="comment">
                      Ultricies facilisis risus integer nibh. In vestibulum
                      porttitor ac augue orci. Dui id aliquet pharetra arcu duis
                      condimentum accumsan. Elementum feugiat lectus tellus mi.
                      Sed donec proin lorem nunc gravida. Pharetra dui tincidunt
                      sociis odio tellus. Bibendum mauris at id elementum ut ut.
                    </div>
                  </div>
                  <div className="nested-accordion">
                    <h3 className="faq-txt1">Is Amigo GPT free to use?</h3>
                    <div className="comment">
                      Ultricies facilisis risus integer nibh. In vestibulum
                      porttitor ac augue orci. Dui id aliquet pharetra arcu duis
                      condimentum accumsan. Elementum feugiat lectus tellus mi.
                      Sed donec proin lorem nunc gravida. Pharetra dui tincidunt
                      sociis odio tellus. Bibendum mauris at id elementum ut ut.
                    </div>
                  </div>
                  <div className="nested-accordion">
                    <h3 className="faq-txt1">
                      How do I can delete my account?
                    </h3>
                    <div className="comment">
                      Ultricies facilisis risus integer nibh. In vestibulum
                      porttitor ac augue orci. Dui id aliquet pharetra arcu duis
                      condimentum accumsan. Elementum feugiat lectus tellus mi.
                      Sed donec proin lorem nunc gravida. Pharetra dui tincidunt
                      sociis odio tellus. Bibendum mauris at id elementum ut ut.
                    </div>
                    <div className="boder-top1"></div>
                  </div>
                </div>
              </div>
              <div className="nested-accordion">
                <h3 className="boder-top">
                  How I can leave chat with Amigo GPT?
                </h3>
                <div className="comment">
                  <div className="nested-accordion">
                    <h3 className="faq-txt1">What is Amigo GPT?</h3>
                    <div className="comment">
                      Ultricies facilisis risus integer nibh. In vestibulum
                      porttitor ac augue orci. Dui id aliquet pharetra arcu duis
                      condimentum accumsan. Elementum feugiat lectus tellus mi.
                      Sed donec proin lorem nunc gravida. Pharetra dui tincidunt
                      sociis odio tellus. Bibendum mauris at id elementum ut ut.
                    </div>
                  </div>
                  <div className="nested-accordion">
                    <h3 className="faq-txt1">Is Amigo GPT free to use?</h3>
                    <div className="comment">
                      Ultricies facilisis risus integer nibh. In vestibulum
                      porttitor ac augue orci. Dui id aliquet pharetra arcu duis
                      condimentum accumsan. Elementum feugiat lectus tellus mi.
                      Sed donec proin lorem nunc gravida. Pharetra dui tincidunt
                      sociis odio tellus. Bibendum mauris at id elementum ut ut.
                    </div>
                  </div>
                  <div className="nested-accordion">
                    <h3 className="faq-txt1">
                      How do I can delete my account?
                    </h3>
                    <div className="comment">
                      Ultricies facilisis risus integer nibh. In vestibulum
                      porttitor ac augue orci. Dui id aliquet pharetra arcu duis
                      condimentum accumsan. Elementum feugiat lectus tellus mi.
                      Sed donec proin lorem nunc gravida. Pharetra dui tincidunt
                      sociis odio tellus. Bibendum mauris at id elementum ut ut.
                    </div>
                    <div className="boder-top1"></div>
                  </div>
                </div>
              </div>
              <div className="nested-accordion">
                <h3 className="boder-top">
                  How do I delete chat with Amigo GPT?
                </h3>
                <div className="comment">
                  <div className="nested-accordion">
                    <h3 className="faq-txt1">What is Amigo GPT?</h3>
                    <div className="comment">
                      Ultricies facilisis risus integer nibh. In vestibulum
                      porttitor ac augue orci. Dui id aliquet pharetra arcu duis
                      condimentum accumsan. Elementum feugiat lectus tellus mi.
                      Sed donec proin lorem nunc gravida. Pharetra dui tincidunt
                      sociis odio tellus. Bibendum mauris at id elementum ut ut.
                    </div>
                  </div>
                  <div className="nested-accordion">
                    <h3 className="faq-txt1">Is Amigo GPT free to use?</h3>
                    <div className="comment">
                      Ultricies facilisis risus integer nibh. In vestibulum
                      porttitor ac augue orci. Dui id aliquet pharetra arcu duis
                      condimentum accumsan. Elementum feugiat lectus tellus mi.
                      Sed donec proin lorem nunc gravida. Pharetra dui tincidunt
                      sociis odio tellus. Bibendum mauris at id elementum ut ut.
                    </div>
                  </div>
                  <div className="nested-accordion">
                    <h3 className="faq-txt1">
                      How do I can delete my account?
                    </h3>
                    <div className="comment">
                      Ultricies facilisis risus integer nibh. In vestibulum
                      porttitor ac augue orci. Dui id aliquet pharetra arcu duis
                      condimentum accumsan. Elementum feugiat lectus tellus mi.
                      Sed donec proin lorem nunc gravida. Pharetra dui tincidunt
                      sociis odio tellus. Bibendum mauris at id elementum ut ut.
                    </div>
                    <div className="boder-top1"></div>
                  </div>
                </div>
              </div>
              <div className="nested-accordion">
                <h3 className="boder-top">
                  How do I export chat in Amigo GPT?
                </h3>
                <div className="comment">
                  <div className="nested-accordion">
                    <h3 className="faq-txt1">What is Amigo GPT?</h3>
                    <div className="comment">
                      Ultricies facilisis risus integer nibh. In vestibulum
                      porttitor ac augue orci. Dui id aliquet pharetra arcu duis
                      condimentum accumsan. Elementum feugiat lectus tellus mi.
                      Sed donec proin lorem nunc gravida. Pharetra dui tincidunt
                      sociis odio tellus. Bibendum mauris at id elementum ut ut.
                    </div>
                  </div>
                  <div className="nested-accordion">
                    <h3 className="faq-txt1">Is Amigo GPT free to use?</h3>
                    <div className="comment">
                      Ultricies facilisis risus integer nibh. In vestibulum
                      porttitor ac augue orci. Dui id aliquet pharetra arcu duis
                      condimentum accumsan. Elementum feugiat lectus tellus mi.
                      Sed donec proin lorem nunc gravida. Pharetra dui tincidunt
                      sociis odio tellus. Bibendum mauris at id elementum ut ut.
                    </div>
                  </div>
                  <div className="nested-accordion">
                    <h3 className="faq-txt1">
                      How do I can delete my account?
                    </h3>
                    <div className="comment">
                      Ultricies facilisis risus integer nibh. In vestibulum
                      porttitor ac augue orci. Dui id aliquet pharetra arcu duis
                      condimentum accumsan. Elementum feugiat lectus tellus mi.
                      Sed donec proin lorem nunc gravida. Pharetra dui tincidunt
                      sociis odio tellus. Bibendum mauris at id elementum ut ut.
                    </div>
                  </div>
                </div>
              </div> */}
            </section>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== FAQ Screen End===================================== --> */}
    </>
  );
};
export default Faq;
