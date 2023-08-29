import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        Made with Tailwind, React and love :)
      </p>
      <p className="text-center text-gray-500 text-base">
        © {new Date().getFullYear()}.
      </p>
    </div>
  );
};

export default Footer;
