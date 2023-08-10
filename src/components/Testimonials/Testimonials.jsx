import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import { testimonials } from "../data/Data";

const Testimonials = () => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={6000}
      stopOnHover={true}
    >
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="px-8 py-6 rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group relative max-w-md mx-auto"
        >
          <p className="italic pb-4">"{testimonial.desc}"</p>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-designColor">
            {testimonial.title}, {testimonial.org}
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default Testimonials;
