import Card from "./Card";
import { projects } from "../data/Data";
export default function ProjectsDisplay() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 justify-center w-full p-4 -mt-10 gap-6">
      {projects.map((project, ind) => {
        return (
          <div
            key={ind}
            data-aos={"zoom-in-up"}
            data-aos-offset="-5"
            data-aos-delay={ind % 2 === 0 ? "0" : "700"}
            data-aos-duration="2000"
          >
            <Card
              title={project.title}
              desc={project.desc}
              img={project.img}
              link={project.link}
              code={project.code}
              tags={project.tags}
            />
          </div>
        );
      })}
    </div>
  );
}
