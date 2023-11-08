import React from "react";
import {
  FaLinkedinIn,
  FaDiscord,
  FaTelegram,
  FaDownload,
} from "react-icons/fa";
import { SiGithub, SiInstagram } from "react-icons/si";
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
        <div className="flex gap-4">
          <div className="flex gap-4">
            <a
              href="https://drive.google.com/file/d/1tJ6d2tI7koU0HShx-McpgnlAcBpBGvGH/view"
              download="TeemuHamalainenResume.pdf"
              className="mt-3"
              rel="noopener noreferrer"
            >
              <FaDownload style={iconStyle} />
            </a>
            <a
              href="https://drive.google.com/file/d/1tJ6d2tI7koU0HShx-McpgnlAcBpBGvGH/view"
              download="TeemuHamalainenResume.pdf"
              className="lg:pb-10 hover:text-designColor"
              target="_blank"
              rel="noopener noreferrer"
            >
              View/download my resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const iconStyle = {
  color: "#ff8439",
};

export default Media;
