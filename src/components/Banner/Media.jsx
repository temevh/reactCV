import React from "react";
import { FaLinkedinIn, FaReact, FaTypescript } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiGithub,
  SiGmail,
  SiPostgresql,
  SiFlutter,
  SiTypescript,
  SiInstagram,
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
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          MOST USED TECHNOLOGIES
        </h2>
        <div className="flex gap-2">
          <span className="bannerIcon">
            <FaReact style={iconStyle} />
          </span>
          <span className="bannerIcon">
            <SiTypescript style={iconStyle} />
          </span>
          <span className="bannerIcon">
            <SiFlutter style={iconStyle} />
          </span>
          <span className="bannerIcon">
            <SiPostgresql style={iconStyle} />
          </span>
          <span className="bannerIcon">
            <SiMongodb style={iconStyle} />
          </span>
        </div>
      </div>
    </div>
  );
};

const iconStyle = {
  color: "#FF6B6B",
};

export default Media;
