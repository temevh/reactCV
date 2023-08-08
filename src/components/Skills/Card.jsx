import React from "react";
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

const skillIconMap = {
  Python: python,
  Javascript: js,
  React: react,
  Html: html,
  css: css,
  Node: node,
  Mongo: mongo,
  Git: git,
  Typescript: ts,
  vscode: vscode,
  Postgre: postgre,

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

const Card = ({ skill }) => {
  const skillIcon = skillIconMap[skill.name];

  return (
    <div className="w-16 h-16 rounded-lg flex items-center justify-center transition-shadow duration-200 ease-linear transform hover:shadow-xl hover:-translate-y-1 hover:shadow-designColor/100">
      <img
        className="h-12 w-12 max-w-full rounded-lg shadow-none"
        src={skillIcon}
        alt={`${skill} Icon`}
      />
    </div>
  );
};

export default Card;
