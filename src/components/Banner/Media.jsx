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
              <SiGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:temehama@gmail.com">
              <SiGmail />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/temevh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
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
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiTypescript />
          </span>
          <span className="bannerIcon">
            <SiFlutter />
          </span>
          <span className="bannerIcon">
            <SiPostgresql />
          </span>
          <span className="bannerIcon">
            <SiMongodb />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
