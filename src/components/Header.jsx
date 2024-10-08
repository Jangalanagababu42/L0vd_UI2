import { useState } from "react";
import Logo from "../assets/logo.svg";
import closeIcon from "../assets/Close icon.svg";

const Header = () => {
  const [isNotificationVisible, setNotificationVisible] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="font-poppins  sticky top-0 bg-white z-50 mb-5">
      {/* Notification Bar */}
      {isNotificationVisible && (
        <div className="relative w-full">
          <div className=" bg-black text-white grid grid-cols-14 gap-[1.25rem] items-center py-2 h-20 sm:h-16 md:h-20">
            {/* Notification Text */}
            <p className=" col-start-2 col-span-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              Our archive API is now available for 5 networks instantly
            </p>

            {/* Try Our API Button */}
            <button className="col-start-11 col-span-3 bg-main-blue hover:bg-blue-gradient text-white px-4 py-2 sm:px-6 md:px-8 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              Try our API!
            </button>

            {/* Close Button */}
            <button
              onClick={() => setNotificationVisible(false)}
              className="absolute right-0 top-1 transform -translate-x-2"
            >
              <img
                src={closeIcon}
                alt="Close"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
            </button>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="w-full grid grid-cols-14 gap-[1.25rem] items-center py-4 shadow-none">
        {/* Logo */}
        <div className="col-start-2 col-span-2 sm:col-start-2 col-span-4 flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-12 w-auto sm:h-24 md:h-14 lg:h-12 xl:h-12 2xl:h-14"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden  lg:flex col-start-8 col-span-6 items-center justify-between">
          <a
            href="#about"
            className="hover:text-blue-600 lg:text-sm  xl:text-base"
          >
            About us
          </a>
          <a
            href="#networks"
            className="hover:text-blue-600 lg:text-sm  xl:text-base"
          >
            Networks
          </a>
          <a
            href="#products"
            className="hover:text-blue-600 lg:text-sm  xl:text-base text-center"
          >
            Products
          </a>

          <button className="bg-main-blue hover:bg-blue-gradient px-5 py-2.5  lg:px-12 lg:py-2.5 2xl:px-10 2xl:py-5 rounded-xl">
            <div className=" text-xl text-white mx-5 font-bold ">
              Contact us
            </div>
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="col-start-13 col-span-2 flex justify-end lg:hidden">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-xl z-50  mr-5 "
          >
            &#9776;
          </button>
        </div>
      </nav>

      {/* Mobile Popup Menu */}
      {isMenuOpen && (
        <>
          {/* Overlay to dim the background */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setMenuOpen(false)} // Close the menu when clicking on the overlay
          ></div>

          {/* Popup Menu */}
          <div
            className={`fixed left-0 right-0 bg-white z-50 shadow-lg flex flex-col items-center space-y-4 py-8 lg:hidden ${
              isNotificationVisible ? "top-20 sm:top-16 md:top-20" : "top-0"
            }`}
            style={{
              maxHeight: "calc(100vh - 5rem)", // Adjusts max height based on notification
              overflowY: "auto", // Adds scrolling if content overflows
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-xl"
            >
              &times;
            </button>
            <a href="#about" className="hover:text-blue-600 text-lg">
              About us
            </a>
            <a href="#networks" className="hover:text-blue-600 text-lg">
              Networks
            </a>
            <a href="#products" className="hover:text-blue-600 text-lg">
              Products
            </a>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-gradient text-white px-6 py-2 rounded-lg"
            >
              Contact us
            </a>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
