import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import arrow from "../assets/arrow.svg";
import telegram_logo from "../assets/telegram_logo.svg";
import crossIcon from "../assets/Cross icon.svg";

const ContactForm = () => {
  const [usermail, setUsermail] = useState("");
  const [popmail, setPopmail] = useState("");
  const [usermessage, setUsermessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef();
  const serviceID = import.meta.env.VITE_SERVICE_ID;

  const templateID = import.meta.env.VITE_TEMPLATE_ID;

  const publicKey = import.meta.env.VITE_PUBIC_KEY;

  const HandleForm = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey).then(
      () => {
        console.log("SUCCESS!");
        setPopmail(usermail);
        setUsermail("");
        setUsermessage("");
        // setIsSubmitted(true); // Form submission successful
        setShowPopup(true); // Show popup on successful form submission
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <section className="py-16 relative" id="contactus">
      <div className="container font-poppins mx-auto px-4 grid grid-cols-1 md:grid-cols-14 gap-4">
        {/* Section Title */}
        <h2 className="col-span-1 md:col-start-2 md:col-span-12 text-2xl md:text-3xl font-black mb-8 text-center">
          CONTACT US AND GET YOUR{" "}
          <span className="text-blue-600">PERSONALIZED OFFER</span>
        </h2>

        {/* Form Container */}
        <div className="col-span-1 md:col-start-2 md:col-span-12 bg-gradient-to-bl from-main-blue from-0% to-blue-gradient to-100% p-8 rounded-[16px] md:rounded-[65px] grid grid-cols-1 md:grid-cols-14 gap-6 items-center">
          {/* Title and Inquire Section */}
          <div className="col-span-1 md:col-start-2 md:col-span-5 text-left">
            <h3 className="text-white text-2xl md:text-3xl font-black">
              Ready to get started?
            </h3>
            <p className="text-white mt-4 font-regular">
              Inquire for additional info from L0vd and get your personalized
              solution.
            </p>
          </div>

          {/* Arrow Icon */}
          <div className="col-span-1 md:col-start-7 md:col-span-2 flex justify-center items-center mt-6 md:mt-0">
            <img
              src={arrow}
              alt="arrow"
              className="w-12 md:w-16 rotate-90 md:rotate-0"
            />
          </div>

          {/* Right Section - Email and Request */}
          <div className="col-span-1 md:col-start-9 md:col-span-5 grid grid-cols-1 gap-4 mt-6 md:mt-0 font-medium">
            <form ref={formRef} onSubmit={HandleForm}>
              {/* Email Input */}
              <div className="col-span-1 mb-4">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg"
                  value={usermail}
                  required
                  onChange={(e) => setUsermail(e.target.value)}
                />
              </div>
              {/* Request Textarea */}
              <div className="col-span-1 mb-4">
                <textarea
                  name="message"
                  placeholder="Your request"
                  className="w-full px-4 py-3 rounded-lg"
                  value={usermessage}
                  rows="4"
                  required
                  onChange={(e) => setUsermessage(e.target.value)}
                ></textarea>
              </div>

              {/* Buttons */}
              <div className="col-span-1 flex flex-col space-y-4 sm:w-full md:w-1/2 md:items-left">
                <div className="flex items-center space-x-4 w-full">
                  {/* Conditional button rendering */}
                  <button
                    type="submit"
                    className="bg-black hover:bg-black-gradient text-white px-6 py-3 rounded-lg transition-all duration-200 w-full flex justify-center items-center cursor-pointer"
                    // Disable the button when submitting or after submission
                  >
                    {/* Conditional rendering for the button text */}
                    Contact us
                  </button>
                </div>
                <a
                  href="https://t.me/L0vd_staking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-main-blue hover:bg-blue-gradient text-white px-6 py-3 rounded-lg flex justify-center items-center w-full"
                >
                  Telegram
                  <img
                    src={telegram_logo}
                    alt="Telegram"
                    className="h-4 ml-1"
                  />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Popup after successful submission */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white items-center rounded-[16px] md:rounded-[40px] p-4 sm:p-8 w-[80%] sm:w-[500px] h-[300px] md:h-[380px] relative ring-1 ring-main-blue">
            {/* Cross Icon for closing */}
            <div
              className="absolute top-3 right-3 md:top-8 md:right-8 cursor-pointer"
              onClick={() => setShowPopup(false)}
            >
              <img src={crossIcon} alt="Close" className="w-4 h-4" />
            </div>

            <div className="w-full sm:w-[396px] flex flex-col items-left justify-between space-y-[20px] sm:space-y-[40px] mt-4 md:mt-2 md:ml-5">
              <p className="text-sm md:text-xl font-poppins font-black text-left">
                Dear <span className="text-main-blue">{popmail}</span>,
                <br />
                We received your request!
              </p>
              <p className="text-left text-grey-color text-sm font-poppins font-regular">
                Our team will be in touch shortly during the next 24 hours with
                the proposed solution!
              </p>
              <div className="w-full sm:w-[396px] flex flex-col space-y-[10px] sm:space-y-[14px] font-poppins font-medium">
                <button
                  className="w-full h-[50px] sm:h-[53px] bg-black text-white rounded-lg px-[20px] py-[10px]"
                  onClick={() => setShowPopup(false)}
                >
                  Get back to page
                </button>
                <a
                  href="https://t.me/L0vd_staking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-[50px] sm:h-[53px] bg-main-blue text-white rounded-lg flex items-center justify-center px-[20px] py-[10px]"
                  onClick={() => setShowPopup(false)}
                >
                  Join Telegram group
                  <img
                    src={telegram_logo}
                    alt="Telegram"
                    className="h-4 ml-2"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
