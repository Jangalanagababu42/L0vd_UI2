import { HashLink } from "react-router-hash-link";

import telegram_logo from "../assets/telegram_logo.svg";
import github_logo from "../assets/github_logo.svg";
import twitter_logo from "../assets/twitter_logo.svg";
import LovdWhite from "../assets/LovdWhite_Logo.svg";

const Footer = () => {
  const scrollWithOffset = (el) => {
    const yOffset = -80; // Change this value to match your navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <footer className="bg-main-blue text-white py-8">
      <div className="container mx-auto px-4">
        {/* Grid layout with 14 columns */}
        <div className="grid grid-cols-1 md:grid-cols-14 gap-6 items-start">
          {/* Company Links - span from column 2 to column 3 */}
          <div className="col-span-1 md:col-start-2 md:col-span-3 flex flex-col space-y-4 items-center md:items-start">
            <h3 className="text-xl font-bold">Company</h3>
            <ul className="space-y-2">
              <li className="text-center">
                <HashLink
                  smooth
                  to="#aboutus"
                  className="hover:text-blue-400"
                  scroll={scrollWithOffset}
                >
                  {" "}
                  About us
                </HashLink>
              </li>
              <li className="text-center lg:text-left">
                <a
                  href="https://chain-services.l0vd.com/"
                  className="hover:text-blue-400"
                >
                  Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Social Networks - span from column 4 to column 6 */}
          <div className="col-span-1 md:col-start-5 md:col-span-4 flex flex-col space-y-4 items-center md:items-start">
            <h3 className="text-xl font-bold">Social Networks</h3>
            <div className="flex space-x-9">
              <a
                href="https://x.com/L0vdstaking"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter_logo} alt="Twitter" className="w-7 h-7" />
              </a>
              <a
                href="https://t.me/L0vd_staking"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={telegram_logo} alt="Telegram" className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/L0vd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github_logo} alt="GitHub" className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Lovd Logo and Copyright - aligned to the right */}
          <div className="col-span-1 lg:mr-20  md:col-start-11 md:col-span-4 flex flex-col items-center space-y-4 md:items-end gap-y-4">
            <img src={LovdWhite} alt="Lovd Logo" className="w-28" />
            <p className="text-center md:text-right">
              &copy; L0vd Inc. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
