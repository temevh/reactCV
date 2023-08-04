import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "A full stack developer. ",
      "A computer science student. ",
      "An avid gym goer. ",
      "A full-time nerd.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Hi! </h4>
        <h1 className="text-6xl font-bold text-white">
          My name is
          <span className="text-designColor capitalize"> Teemu Hämäläinen</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor cursorBlinking="true" cursorStyle="|" cursorColor="#FF6B6B" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a <b style={{ color: "#FF6B6B" }}>computer science</b> student
          with a passion for everything tech related. Through my{" "}
          <b style={{ color: "#FF6B6B" }}>
            studies, work and personal projects{" "}
          </b>{" "}
          I have gotten used to working with a variety of
          <b style={{ color: "#FF6B6B" }}> different technologies</b>, people
          and situations. Alongside my studies i work at{" "}
          <b style={{ color: "#FF6B6B" }}> Twoday Finland</b> as a software
          developer
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
