// import { useState } from 'react';
// import Logo from '../assets/logo.svg';
// import closeIcon from '../assets/Close icon.svg';

// const Header = () => {
//   const [isNotificationVisible, setNotificationVisible] = useState(true);
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 bg-white z-50 mb-5">
//       {/* Notification Bar */}
//       {isNotificationVisible && (
//         <div className="relative">
//           <div className="bg-black text-white grid grid-cols-12 items-center px-4 py-2 h-20 sm:h-16 md:h-20">
//             {/* Notification Text */}
//             <p className="col-start-1 col-span-8 sm:col-span-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
//               Our archive API is now available for 5 networks instantly
//             </p>

//             {/* Button */}
//             <button className="col-start-10 col-span-2 bg-blue-600 text-white px-2 py-1 sm:px-4 md:px-6 lg:px-8 xl:px-10 sm:py-1 md:py-2 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
//               Try our API !
//             </button>
//           </div>

//           {/* Close Button */}
//           <button
//             onClick={() => setNotificationVisible(false)}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2"
//           >
//             <img
//               src={closeIcon}
//               alt="Close"
//               className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
//             />
//           </button>
//         </div>
//       )}

//       {/* Navigation Bar */}
//       <nav className="max-w-7xl lg:max-w-8xl xl:max-w-9xl 2xl:max-w-full mx-auto grid grid-cols-12 items-center py-4 px-8 shadow-none">
//         {/* Logo */}
//         <div className="col-span-2 flex items-center">
//           <img
//             src={Logo}
//             alt="Logo"
//             className="h-12 w-auto lg:h-14 xl:h-16 2xl:h-20"
//           />
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex md:col-start-7 md:col-span-6 items-center justify-end space-x-8">
//           <a
//             href="#about"
//             className="hover:text-blue-600 text-lg lg:text-xl xl:text-2xl"
//           >
//             About us
//           </a>
//           <a
//             href="#networks"
//             className="hover:text-blue-600 text-lg lg:text-xl xl:text-2xl"
//           >
//             Networks
//           </a>
//           <a
//             href="#products"
//             className="hover:text-blue-600 text-lg lg:text-xl xl:text-2xl"
//           >
//             Products
//           </a>
//           <a
//             href="#contact"
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg lg:px-8 xl:px-10 lg:py-3 xl:py-4 lg:text-xl xl:text-2xl"
//           >
//             Contact us
//           </a>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="col-span-10 flex justify-end md:hidden">
//           <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-xl">
//             &#9776;
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden flex flex-col items-center space-y-4 bg-white py-4">
//           <a href="#about" className="hover:text-blue-600 text-lg">
//             About us
//           </a>
//           <a href="#networks" className="hover:text-blue-600 text-lg">
//             Networks
//           </a>
//           <a href="#products" className="hover:text-blue-600 text-lg">
//             Products
//           </a>
//           <a
//             href="#contact"
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg"
//           >
//             Contact us
//           </a>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
// import { useState } from 'react';
// import Logo from '../assets/logo.svg';
// import closeIcon from '../assets/Close icon.svg';

// const Header = () => {
//   const [isNotificationVisible, setNotificationVisible] = useState(true);
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 bg-white z-50 mb-5">
//       {/* Notification Bar */}
//       {isNotificationVisible && (
//         <div className="relative">
//           <div className="bg-black text-white grid grid-cols-14 gap-5 items-center py-2 h-20 sm:h-16 md:h-20">
//             {/* Notification Text */}
//             <p className="col-start-2 col-end-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
//               Our archive API is now available for 5 networks instantly
//             </p>

//             {/* Button */}
//             <button className="col-start-11 col-end-13 bg-blue-600 text-white px-4 py-2 sm:px-6 md:px-8 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
//               Try our API!
//             </button>

//             {/* Close Button */}
//             <button
//               onClick={() => setNotificationVisible(false)}
//               className="absolute col-start-14 top-2 right-2"
//             >
//               <img
//                 src={closeIcon}
//                 alt="Close"
//                 className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
//               />
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Navigation Bar */}
//       <nav className="w-full grid grid-cols-14 gap-5 items-center py-4 shadow-none">
//         {/* Logo */}
//         <div className="col-start-2 col-span-1 flex items-center">
//           <img
//             src={Logo}
//             alt="Logo"
//             className="h-12 w-auto lg:h-14 xl:h-16 2xl:h-20"
//           />
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex col-start-8 col-span-6 items-center justify-end space-x-4">
//           <a
//             href="#about"
//             className="hover:text-blue-600 text-lg lg:text-xl xl:text-2xl col-start-8 col-span-1"
//           >
//             About us
//           </a>
//           <a
//             href="#networks"
//             className="hover:text-blue-600 text-lg lg:text-xl xl:text-2xl col-start-9 col-span-1"
//           >
//             Networks
//           </a>
//           <a
//             href="#products"
//             className="hover:text-blue-600 text-lg lg:text-xl xl:text-2xl col-start-10 col-end-11"
//           >
//             Products
//           </a>
//           <a
//             href="#contact"
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg lg:px-8 xl:px-10 lg:py-3 xl:py-4 lg:text-xl xl:text-2xl col-start-11 col-end-13"
//           >
//             Contact us
//           </a>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="col-start-13 col-span-2 flex justify-end md:hidden">
//           <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-xl">
//             &#9776;
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden flex flex-col items-center space-y-4 bg-white py-4">
//           <a href="#about" className="hover:text-blue-600 text-lg">
//             About us
//           </a>
//           <a href="#networks" className="hover:text-blue-600 text-lg">
//             Networks
//           </a>
//           <a href="#products" className="hover:text-blue-600 text-lg">
//             Products
//           </a>
//           <a
//             href="#contact"
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg"
//           >
//             Contact us
//           </a>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
// import { useState } from 'react';
// import Logo from '../assets/logo.svg';
// import closeIcon from '../assets/Close icon.svg';

// const Header = () => {
//   const [isNotificationVisible, setNotificationVisible] = useState(true);
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 bg-white z-50 mb-5">
//       {/* Notification Bar */}
//       {isNotificationVisible && (
//         <div className="relative w-full">
//           <div className="bg-black text-white grid grid-cols-14 gap-[1.25rem] items-center py-2 h-20 sm:h-16 md:h-20">
//             {/* Notification Text */}
//             <p className="col-start-2 col-span-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
//               Our archive API is now available for 5 networks instantly
//             </p>

//             {/* Try Our API Button */}
//             <button className="col-start-11 col-span-3 bg-blue-600 text-white px-4 py-2 sm:px-6 md:px-8 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
//               Try our API!
//             </button>

//             {/* Close Button */}
//             <button
//               onClick={() => setNotificationVisible(false)}
//               className="absolute right-0 top-1 transform -translate-x-2" // Adjust positioning
//             >
//               <img
//                 src={closeIcon}
//                 alt="Close"
//                 className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
//               />
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Navigation Bar */}
//       <nav className="w-full grid grid-cols-14 gap-[1.25rem] items-center py-4 shadow-none">
//         {/* Logo */}
//         <div className="col-start-2 col-span-2 flex items-center">
//           <img
//             src={Logo}
//             alt="Logo"
//             className="h-12 w-auto lg:h-14 xl:h-16 2xl:h-20"
//           />
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden lg:flex col-start-8 col-span-6 items-center justify-between">
//           <a
//             href="#about"
//             className="hover:text-blue-600 text-lg lg:text-xl xl:text-2xl"
//           >
//             About us
//           </a>
//           <a
//             href="#networks"
//             className="hover:text-blue-600 text-lg lg:text-xl xl:text-2xl"
//           >
//             Networks
//           </a>
//           <a
//             href="#products"
//             className="hover:text-blue-600 text-lg lg:text-xl xl:text-2xl text-center"
//           >
//             Products
//           </a>
//           <a
//             href="#contact"
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg lg:px-8 xl:px-10 lg:py-3 xl:py-4 lg:text-xl xl:text-2xl"
//           >
//             Contact us
//           </a>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className=" h-12 w-auto col-start-13 col-span-2 flex justify-end lg:hidden ">
//           <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-xl z-50">
//             &#9776;
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden flex flex-col items-center space-y-4 bg-white py-4">
//           <a href="#about" className="hover:text-blue-600 text-lg">
//             About us
//           </a>
//           <a href="#networks" className="hover:text-blue-600 text-lg">
//             Networks
//           </a>
//           <a href="#products" className="hover:text-blue-600 text-lg">
//             Products
//           </a>
//           <a
//             href="#contact"
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg"
//           >
//             Contact us
//           </a>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
import { useState } from 'react';
import Logo from '../assets/logo.svg';
import closeIcon from '../assets/Close icon.svg';

const Header = () => {
  const [isNotificationVisible, setNotificationVisible] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white z-50 mb-5">
      {/* Notification Bar */}
      {isNotificationVisible && (
        <div className="relative w-full">
          <div className="bg-black text-white grid grid-cols-14 gap-[1.25rem] items-center py-2 h-20 sm:h-16 md:h-20">
            {/* Notification Text */}
            <p className="col-start-2 col-span-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              Our archive API is now available for 5 networks instantly
            </p>

            {/* Try Our API Button */}
            <button className="col-start-11 col-span-3 bg-blue-600 text-white px-4 py-2 sm:px-6 md:px-8 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
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
        <div className="col-start-2 col-span-2 flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-12 w-auto lg:h-14 xl:h-16 2xl:h-20"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex col-start-8 col-span-6 items-center justify-between">
          <a
            href="#about"
            className="hover:text-blue-600 text-lg lg:text-xl xl:text-2xl"
          >
            About us
          </a>
          <a
            href="#networks"
            className="hover:text-blue-600 text-lg lg:text-xl xl:text-2xl"
          >
            Networks
          </a>
          <a
            href="#products"
            className="hover:text-blue-600 text-lg lg:text-xl xl:text-2xl text-center"
          >
            Products
          </a>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg lg:px-8 xl:px-10 lg:py-3 xl:py-4 lg:text-xl xl:text-2xl"
          >
            Contact us
          </a>
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
          <div className="fixed top-0 left-0 right-0 h-1/3 bg-white z-50 shadow-lg flex flex-col items-center space-y-4 py-8 lg:hidden">
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
              className="bg-blue-600 text-white px-6 py-2 rounded-lg"
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
