import React from "react";
import profilePic from "../../assets/images/LinkkariKuva.jpg";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 object-contain"
        src={profilePic}
        alt="picture"
      />
    </div>
  );
};

export default RightBanner;
