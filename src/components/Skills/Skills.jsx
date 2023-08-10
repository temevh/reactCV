import Card from "./Card";
import CardLearning from "./CardLearning";
import Title from "../Layouts/Title";
import {
  mostUsed,
  someExperience,
  learning,
  wantingToLean,
} from "../data/Data";

const Skills = () => {
  return (
    <section id="skills" className="w-full py-10 border-b-[1px] border-b-black">
      <Title title="Skills" des="What I know" />
      <p className="italic font-md -mt-8 text-slate-300/50">
        Psst! Hover for more info
      </p>
      <div
        className="grid grid-cols-1"
        data-te-animation-init
        data-te-animation-start="onScroll"
        data-te-animation-on-scroll="repeat"
        data-te-animation-reset="true"
        data-te-animation="[slide-right_1s_ease-in-out]"
      >
        <p className="text-left text-4xl font-bold whitespace-nowrap mt-2 mb-4">
          Most used
        </p>
        <div className="grid grid-cols-12 gap-22">
          {mostUsed.map((skill) => (
            <Card skill={skill} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1  pt-2">
        <p className="text-left text-4xl font-bold whitespace-nowrap mt-2 mb-4">
          Some experience
        </p>
        <div className="grid grid-cols-11 gap-2">
          {someExperience.map((skill) => (
            <Card skill={skill} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-1">
          <p className="text-left text-4xl font-bold whitespace-nowrap mt-2 mb-4">
            Currently learning
          </p>
          <div className="grid grid-cols-7">
            {learning.map((skill) => (
              <CardLearning skill={skill} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1  pt-2">
          <p className="text-left text-4xl font-bold whitespace-nowrap mt-2 mb-4">
            Wanting to learn
          </p>
          <div className="grid grid-cols-6 ">
            {wantingToLean.map((skill) => (
              <CardLearning skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
