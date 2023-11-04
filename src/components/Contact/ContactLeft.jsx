import React from "react";
import { FaLinkedinIn, FaDiscord, FaTelegram } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[45%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center lg:flex-col">
      <div className="lg:grid lg:grid-cols-2 lg:gap-5">
        <div className="mb-4 lg:mb-0">
          <h3 className="text-3xl font-bold text-white">Teemu Hämäläinen</h3>
          <p className="text-lg font-normal text-designColor pt-4">
            Software developer
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Phone: <span className="text-lightText">044-3459658</span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Email: <span className="text-lightText">temehama(at)gmail.com</span>
          </p>
        </div>
        <div className="lg:ml-16 lg:mt-6">
          <div className="flex items-center mb-4  hover:text-designColor">
            <a
              href="https://www.linkedin.com/in/temevh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn style={iconStyle} />
            </a>
            <a
              href="https://www.linkedin.com/in/temevh/"
              className="ml-2 text-2xl hover:text-designColor"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center mb-4 hover:text-designColor">
            <a
              href="https://t.me/titeemu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram style={iconStyle} rel="noopener noreferrer" />
            </a>
            <a
              className="ml-2 text-2xl hover:text-designColor"
              href="https://t.me/titeemu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </div>
          <div className="flex items-center mb-4 hover:text-designColor">
            <a
              href="https://www.discordapp.com/users/patruunapuristin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord style={iconStyle} />
            </a>
            <a
              href="https://www.discordapp.com/users/patruunapuristin/"
              className="ml-2 text-2xl hover:text-designColor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;

const iconStyle = {
  fontSize: "1.5rem",
  onHover: "text-designColor",
};
