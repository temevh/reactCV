import React from "react";
import {
  FaLinkedinIn,
  FaDiscord,
  FaTelegram,
  FaDownload,
} from "react-icons/fa";
import { SiGithub } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lg:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 -mt-16">
          Find me on
        </h2>
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
              href="https://www.discordapp.com/users/patruunapuristin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord style={iconStyle} />
            </a>
          </span>
        </div>
      </div>
      <div className="pl-10">
        <h2 className="text-base uppercase font-titleFont mb-2 lg:-mt-6">
          Check out my resume!
        </h2>
        <div className="flex items-center gap-2">
          <a
            href="https://drive.google.com/file/d/1E7zyljzi5_CsHjGF4510s63GfcR8mCzs/view?usp=sharing"
            download="TeemuHamalainenResume.pdf"
            className="hover:text-designColor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload style={iconStyle} />
          </a>
          <a
            href="https://drive.google.com/file/d/1E7zyljzi5_CsHjGF4510s63GfcR8mCzs/view?usp=sharing"
            download="TeemuHamalainenResume.pdf"
            className="hover:text-designColor"
            target="_blank"
            rel="noopener noreferrer"
          >
            View/download my resume
          </a>
        </div>
      </div>
    </div>
  );
};

const iconStyle = {
  color: "#ff8439",
};

export default Media;
