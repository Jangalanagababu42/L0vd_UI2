import arrow from '../assets/arrow.svg';
import telegram_logo from '../assets/telegram_logo.svg';

const ContactForm = () => {
  return (
    <section className="py-16">
      <div className="container font-poppins mx-auto px-4 grid grid-cols-1 md:grid-cols-14 gap-4">
        {/* Section Title */}
        <h2 className="col-span-1 md:col-start-2 md:col-span-12 text-2xl md:text-3xl font-black mb-8 text-center">
          CONTACT US AND GET YOUR{' '}
          <span className="text-blue-600">PERSONALIZED OFFER </span>
        </h2>

        {/* Form Container */}
        <div className="col-span-1 md:col-start-2 md:col-span-12 bg-blue-600 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-14 gap-6 items-center">
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
            {/* Email Input */}
            <div className="col-span-1">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg"
                required
              />
            </div>
            {/* Request Textarea */}
            <div className="col-span-1">
              <textarea
                placeholder="Your request"
                className="w-full px-4 py-3 rounded-lg"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="col-span-1 flex flex-col space-y-4 ">
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg w-full  md:w-1/2 	"
              >
                Contact us
              </button>
              <a
                href="https://t.me/your_telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-main-blue text-white px-6 py-3 rounded-lg flex justify-center items-center  w-full  md:w-1/2	 "
              >
                Telegram
                <img src={telegram_logo} alt="Telegram" className="h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
