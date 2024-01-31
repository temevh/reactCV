import React from "react";

const Footer = () => {
  return (
    <div className="w-full pt-4">
      <p className="text-center text-gray-500 text-base">
        Made with Tailwind, React and love ❤
      </p>
      <a
        className="block text-center text-gray-500 text-base py-2"
        href="https://github.com/temevh/reactCV"
      >
        Click{" "}
        <b style={{ color: "#ff8439" }}>
          {" "}
          {""}
          here
        </b>{" "}
        for source code
      </a>
      <p className="text-center text-gray-500 text-base">
        © {new Date().getFullYear()}.
      </p>
    </div>
  );
};

export default Footer;
