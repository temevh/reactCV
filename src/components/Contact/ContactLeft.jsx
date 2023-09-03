import React from "react";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">Teemu Hämäläinen</h3>
        <p className="text-lg font-normal text-designColor pt-4">
          Software developer
        </p>
        <p className="text-base text-gray-400 tracking-wide pb-7">
          If you feel like I could be a good fit for your team or you would like
          to discuss anything, feel free to contact me!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">044-3459658</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">temehama(at)gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default ContactLeft;
