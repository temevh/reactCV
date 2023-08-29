import React from "react";
import { FaLinkedinIn, FaDiscord, FaTelegram } from "react-icons/fa";
import {
  SiGithub,
  SiInstagram,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://github.com/temevh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub style={iconStyle} />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="instagram.com/titeemu">
              <SiInstagram style={iconStyle} />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/temevh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn style={iconStyle} />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://t.me/titeemu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram style={iconStyle} />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/temevh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord style={iconStyle} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

const iconStyle = {
  color: "#ff8439",
};

export default Media;
