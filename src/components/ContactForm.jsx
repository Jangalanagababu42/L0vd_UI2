// import { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

// import arrow from '../assets/arrow.svg';
// import telegram_logo from '../assets/telegram_logo.svg';

// const ContactForm = () => {
//   const [usermail, setUsermail] = useState('');
//   const [usermessage, setUsermessage] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const formRef = useRef();
//   const serviceID = 'service_7tv6i8d';
//   const templateID = 'template_kxo9zzp';
//   const publicKey = 'xRZftC_mTl-WLZwVa';

//   const HandleForm = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(serviceID, templateID, formRef.current, {
//         publicKey,
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//           setUsermail('');
//           setUsermessage('');
//           setIsSubmitted(true); // Set submission state to true
//           setTimeout(() => {
//             setIsSubmitted(false); // Reset after 2 seconds
//           }, 2000); // 2 seconds timeout
//         },
//         (error) => {
//           console.log('FAILED...', error);
//         }
//       );
//   };
//   return (
//     <section className="py-16">
//       <div className="container font-poppins mx-auto px-4 grid grid-cols-1 md:grid-cols-14 gap-4">
//         {/* Section Title */}
//         <h2 className="col-span-1 md:col-start-2 md:col-span-12 text-2xl md:text-3xl font-black mb-8 text-center">
//           CONTACT US AND GET YOUR{' '}
//           <span className="text-blue-600">PERSONALIZED OFFER </span>
//         </h2>

//         {/* Form Container */}
//         <div className="col-span-1 md:col-start-2 md:col-span-12 bg-blue-600 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-14 gap-6 items-center">
//           {/* Title and Inquire Section */}
//           <div className="col-span-1 md:col-start-2 md:col-span-5 text-left">
//             <h3 className="text-white text-2xl md:text-3xl font-black">
//               Ready to get started?
//             </h3>
//             <p className="text-white mt-4 font-regular">
//               Inquire for additional info from L0vd and get your personalized
//               solution.
//             </p>
//           </div>

//           {/* Arrow Icon */}
//           <div className="col-span-1 md:col-start-7 md:col-span-2 flex justify-center items-center mt-6 md:mt-0">
//             <img
//               src={arrow}
//               alt="arrow"
//               className="w-12 md:w-16 rotate-90 md:rotate-0"
//             />
//           </div>

//           {/* Right Section - Email and Request */}

//           <div className="col-span-1 md:col-start-9 md:col-span-5 grid grid-cols-1 gap-4 mt-6 md:mt-0 font-medium">
//             <form ref={formRef} onSubmit={HandleForm}>
//               {/* Email Input */}
//               <div className="col-span-1 mb-4">
//                 <input
//                   type="email"
//                   name="user_email"
//                   placeholder="Email"
//                   className="w-full px-4 py-3 rounded-lg"
//                   value={usermail}
//                   required
//                   onChange={(e) => setUsermail(e.target.value)}
//                 />
//               </div>
//               {/* Request Textarea */}
//               <div className="col-span-1 mb-4">
//                 <textarea
//                   name="message"
//                   placeholder="Your request"
//                   className="w-full px-4 py-3 rounded-lg"
//                   value={usermessage}
//                   rows="4"
//                   required
//                   onChange={(e) => setUsermessage(e.target.value)}
//                 ></textarea>
//               </div>

//               {/* Buttons */}
//               <div className="col-span-1 flex flex-col space-y-4 ">
//                 <button
//                   type="submit"
//                   // value="Send"
//                   className={`bg-black text-white px-6 py-3 rounded-lg w-full md:w-1/2 transition-all duration-200 ${
//                     isSubmitted ? 'checkmark-animation' : ''
//                   }`}  >
//                    {isSubmitted ? (
//                     <span className="checkmark">✔</span>
//                   ) : (
//                     'Contact us'
//                   )}
//                 </button>
//                 <a
//                   href="https://t.me/your_telegram"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-main-blue text-white px-6 py-3 rounded-lg flex justify-center items-center  w-full  md:w-1/2	 "
//                 >
//                   Telegram
//                   <img
//                     src={telegram_logo}
//                     alt="Telegram"
//                     className="h-4 ml-1"
//                   />
//                 </a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import arrow from "../assets/arrow.svg";
import telegram_logo from "../assets/telegram_logo.svg";

const ContactForm = () => {
  const [usermail, setUsermail] = useState("");
  const [usermessage, setUsermessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission state
  const [isReverting, setIsReverting] = useState(false); // Track if animation is reverting
  const [showContactUs, setShowContactUs] = useState(true); // Control when to show "Contact Us" button
  const formRef = useRef();
  const serviceID = "service_7tv6i8d";
  const templateID = "template_kxo9zzp";
  const publicKey = "xRZftC_mTl-WLZwVa";

  const HandleForm = (e) => {
    e.preventDefault();
    setShowContactUs(false); // Hide "Contact Us" button when submitting
    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey).then(
      () => {
        console.log("SUCCESS!");
        setUsermail("");
        setUsermessage("");
        setIsSubmitted(true); // Start the forward typing animation
        setTimeout(() => {
          setIsReverting(true); // Start the reverse animation
          setTimeout(() => {
            setIsSubmitted(false); // Finish the process
            setIsReverting(false); // Finish the reverse typing
            setShowContactUs(true); // Show "Contact Us" button again
          }, 2000); // Duration for reverse animation (un-typing)
        }, 4000); // Keep the message for 4 seconds before reversing
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <section className="py-16">
      <div className="container font-poppins mx-auto px-4 grid grid-cols-1 md:grid-cols-14 gap-4">
        {/* Section Title */}
        <h2 className="col-span-1 md:col-start-2 md:col-span-12 text-2xl md:text-3xl font-black mb-8 text-center">
          CONTACT US AND GET YOUR{" "}
          <span className="text-blue-600">PERSONALIZED OFFER</span>
        </h2>

        {/* Form Container */}
        <div className="col-span-1 md:col-start-2 md:col-span-12 bg-gradient-to-bl from-main-blue from-0% to-blue-gradient to-100% p-8 rounded-[65px] grid grid-cols-1 md:grid-cols-14 gap-6 items-center">
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
              <div className="col-span-1 flex flex-col space-y-4 items-center">
                <div className="flex items-center space-x-4 w-full">
                  {/* Conditional button rendering */}
                  <button
                    type="submit"
                    className={`bg-black hover:bg-black-gradient text-white px-6 py-3 rounded-lg transition-all duration-200 w-full flex justify-center items-center ${
                      isSubmitted ? "checkmark-animation" : ""
                    } ${isReverting ? "revert-animation" : ""}`}
                    disabled={isSubmitted || !showContactUs} // Disable the button when submitting or after submission
                  >
                    {/* Conditional rendering for the button text */}
                    {isSubmitted && !isReverting ? (
                      <span className="checkmark">✔</span>
                    ) : showContactUs ? (
                      "Contact us"
                    ) : (
                      <span className="checkmark">✔</span>
                    )}
                  </button>

                  {/* Display the success message next to the button */}
                  {isSubmitted && (
                    <span
                      className={`typing-text ${
                        isReverting ? "reverse-typing-text" : ""
                      }`}
                    >
                      Request received
                    </span>
                  )}
                </div>
                <a
                  href="https://t.me/your_telegram"
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
    </section>
  );
};

export default ContactForm;
