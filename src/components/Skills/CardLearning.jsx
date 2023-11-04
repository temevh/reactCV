import React, { useState } from "react";
import python from "../../assets/icons/python.png";
import js from "../../assets/icons/js.png";
import react from "../../assets/icons/react.png";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
import node from "../../assets/icons/node.png";
import mongo from "../../assets/icons/mongo.png";
import git from "../../assets/icons/git.png";
import ts from "../../assets/icons/ts.png";
import vscode from "../../assets/icons/vscode.png";
import postgre from "../../assets/icons/postgre.png";

import java from "../../assets/icons/java.png";
import c from "../../assets/icons/c.png";
import dart from "../../assets/icons/dart.png";
import flutter from "../../assets/icons/flutter.png";
import firebase from "../../assets/icons/firebase.png";
import androidstudio from "../../assets/icons/androidstudio.png";
import docker from "../../assets/icons/docker.png";
import tailwind from "../../assets/icons/tailwind.png";
import redux from "../../assets/icons/redux.png";

import rust from "../../assets/icons/rust.png";
import deno from "../../assets/icons/deno.png";
import next from "../../assets/icons/next.png";

import ceepeepee from "../../assets/icons/ceepeepee.png";

const skillIconMap = {
  Python: python,
  Javascript: js,
  React: react,
  Html: html,
  CSS: css,
  Node: node,
  MongoDb: mongo,
  Git: git,
  Typescript: ts,
  vscode: vscode,
  PostgreSQL: postgre,
  "C++": ceepeepee,

  Java: java,
  C: c,
  Dart: dart,
  Flutter: flutter,
  Firebase: firebase,
  Androidstudio: androidstudio,
  Docker: docker,
  Tailwind: tailwind,
  Redux: redux,

  Rust: rust,
  Deno: deno,
  Next: next,
};

const CardLearning = ({ skill }) => {
  const skillIcon = skillIconMap[skill.name];
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-16 h-16 rounded-lg shadow-shadowOne flex items-center justify-center transition-shadow duration-200 ease-linear transform hover:shadow-xl hover:-translate-y-1 hover:shadow-designColor/100">
        <img
          className="h-12 w-12 max-w-full rounded-lg shadow-none"
          src={skillIcon}
          alt={`${skill} Icon`}
        />
      </div>
      {isHovered && (
        <div className="absolute z-50 w-44 max-w-sm p-4 bg-bodyColor border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-shadow duration-200 ease-linear transform hover:shadow-2xl hover:-translate-y-1 hover:shadow-designColor/100">
          <div className="grid grid-cols-2 gap-3 justify-between">
            <div className="flex items-center">
              <p className="text-lg pb-2 font-italic">{skill.name}</p>
              <img
                className="h-12 w-12 max-w-full rounded-lg shadow-none ml-10"
                src={skillIcon}
              />
            </div>
            <p className="col-span-2 font-bold -mb-2">Why?</p>
            <p className="col-span-2 break-words">{skill.why}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardLearning;
