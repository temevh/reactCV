import React from "react";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-full px-8 py-6 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group relative">
      <div className="h-64 overflow-y-hidden">
        <div className="flex h-full flex-col gap-6 transition-transform duration-500">
          <div className="w-8 h-6 flex flex-col justify-between">
            {icon ? (
              <span className="text-4xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg md:text-xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
