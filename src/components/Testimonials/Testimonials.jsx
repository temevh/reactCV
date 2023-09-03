import React from "react";
import { testimonials } from "../data/Data";
import Card from "./Card";

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 xl:gap-4">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
