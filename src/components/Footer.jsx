// import telegram_logo from "../assets/telegram_logo.svg";
// import github_logo from "../assets/github_logo.svg";
// import twitter_logo from "../assets/twitter_logo.svg";
// import LovdWhite from "../assets/LovdWhite_Logo.svg";

// const Footer = () => {
//   return (
//     <footer className="bg-blue-600 text-white py-8">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//         {/* Company Links */}
//         <div className="space-y-4 text-center md:text-left">
//           <h3 className="text-xl font-bold">Company</h3>
//           <ul className="space-y-2">
//             <li>
//               <a href="#about" className="hover:text-blue-400">
//                 About us
//               </a>
//             </li>
//             <li>
//               <a href="#docs" className="hover:text-blue-400">
//                 Docs
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Social Networks */}
//         <div className="space-y-4 text-center">
//           <h3 className="text-xl font-bold">Social Networks</h3>
//           <ul className="flex justify-center md:justify-start space-x-4">
//             <li>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-400"
//               >
//                 <img src={twitter_logo} alt="Twitter" className="w-6 h-6" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://t.me/your_telegram"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-400"
//               >
//                 <img src={telegram_logo} alt="Telegram" className="w-6 h-6" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-400"
//               >
//                 <img src={github_logo} alt="GitHub" className="w-6 h-6" />
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Logo and Copyright */}
//         <div className="space-y-4 text-center md:text-right">
//           <img
//             src={LovdWhite}
//             alt="Heart Logo"
//             className="mx-auto md:ml-auto mb-2 w-24"
//           />
//           <p>&copy; L0vd Inc. All rights reserved</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import telegram_logo from '../assets/telegram_logo.svg';
// import github_logo from '../assets/github_logo.svg';
// import twitter_logo from '../assets/twitter_logo.svg';
// import LovdWhite from '../assets/LovdWhite_Logo.svg';

// const Footer = () => {
//   return (
//     <footer className="bg-blue-600 text-white py-8">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-14 gap-8 items-center">
//         {/* Company Links */}
//         <div className="col-span-14 md:col-start-2 md:col-span-2 space-y-4 text-center md:text-left">
//           <h3 className="text-xl font-bold">Company</h3>
//           <ul className="space-y-2">
//             <li>
//               <a href="#about" className="hover:text-blue-400">
//                 About us
//               </a>
//             </li>
//             <li>
//               <a href="#docs" className="hover:text-blue-400">
//                 Docs
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Social Networks */}
//         <div className="col-span-14 md:col-start-4 md:col-span-2 space-y-4 text-center">
//           <h3 className="text-xl font-bold">Social Networks</h3>
//           <ul className="flex justify-center space-x-4">
//             <li>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-400"
//               >
//                 <img src={twitter_logo} alt="Twitter" className="w-8 h-8" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://t.me/your_telegram"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-400"
//               >
//                 <img src={telegram_logo} alt="Telegram" className="w-8 h-8" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-400"
//               >
//                 <img src={github_logo} alt="GitHub" className="w-8 h-8" />
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Logo */}
//         <div className="col-span-14  md:col-start-13 md:col-span-1 text-center md:text-right">
//           <img
//             src={LovdWhite}
//             alt="Lovd Logo"
//             className="mx-auto md:ml-auto mb-2 w-16"
//           />
//         </div>

//         {/* Copyright */}
//         <div className="col-span-14 md:col-start-11 md:col-span-3 text-center md:text-right space-y-2">
//           <p>&copy; L0vd Inc. All rights reserved</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import telegram_logo from '../assets/telegram_logo.svg';
import github_logo from '../assets/github_logo.svg';
import twitter_logo from '../assets/twitter_logo.svg';
import LovdWhite from '../assets/LovdWhite_Logo.svg';

const Footer = () => {
  return (
    <footer className="bg-main-blue text-white py-8">
      <div className="container font-poppins mx-auto grid grid-cols-1 md:grid-cols-14 gap-8 items-center">
        {/* Company Links */}
        <div className="col-span-14 md:col-start-2 md:col-span-2 space-y-4 text-center md:text-left">
          <h3 className="text-xl font-bold">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-blue-400 font-medium ">
                About us
              </a>
            </li>
            <li>
              <a href="#docs" className="hover:text-blue-400 font-medium">
                Docs
              </a>
            </li>
          </ul>
        </div>

        {/* Social Networks */}
        <div className="col-span-14 md:col-start-4 md:col-span-2 space-y-4 text-center">
          <h3 className="text-xl font-bold">Social Networks</h3>
          <ul className="flex justify-center space-x-4">
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <img src={twitter_logo} alt="Twitter" className="w-6 h-7" />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/your_telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <img src={telegram_logo} alt="Telegram" className="w-8 h-8" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <img src={github_logo} alt="GitHub" className="w-8 h-8" />
              </a>
            </li>
          </ul>
        </div>

        {/* Lovd Logo */}
        <div className="col-span-14 md:col-start-13 md:col-span-1 text-center md:text-right self-end ">
          <img
            src={LovdWhite}
            alt="Lovd Logo"
            className="mx-auto md:mx-0 w-28 md:w-28" // Increased logo size here
          />
        </div>

        {/* Copyright */}
        <div className="font-regular col-span-14 md:col-start-11 md:col-span-3 text-center md:text-right ">
          <p>&copy; L0vd Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
