import * as React from "react";
import Title from "../Layouts/Title";
import ProjectsDisplay from "./index";

//https://github.com/daniel-jebarson/daniel-jebarson.github.io/blob/master/src/constants/index.js
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-10 border-b-[1px] border-b-black"
    >
      <Title title="Projects" des="What I have done" />
      <ProjectsDisplay />
    </section>
  );
};

export default Projects;
