import React from "react";
import Title from "../Layouts/Title";
import Card from "./Card";
import { featuresData } from "../data/Data";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full lg:py-10 py-6 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Can Do" />
      <div className="grid grid-cols-1 -mt-6 lg:-mt-0 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
