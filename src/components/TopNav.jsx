import React from "react";
import { Link } from "react-scroll";
import { navLinksdata } from "./data/Data";

const TopNav = () => {
  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 pr-4 pl-4">
      <div className="flex items-center">
        <p className="font-bold text-5xl">TH</p>
      </div>
      <div className="md:flex items-center justify-end gap-1 lg:gap-4">
        <ul className="hidden md:inline-flex items-center gap-1 lg:gap-4">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
