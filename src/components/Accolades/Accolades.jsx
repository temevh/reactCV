import Title from "../Layouts/Title";
import Achievements from "./Achievements";
import Certificates from "./Certificates";

const Accolades = () => {
  return (
    <section
      id="accolades"
      className="w-full py-10 border-b-[1px] border-b-black"
    >
      <Title title="Accolades" des="What have I achieved" />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Certificates />
        <Achievements />
      </div>
    </section>
  );
};

export default Accolades;
