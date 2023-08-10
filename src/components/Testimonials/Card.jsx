const Card = ({ testimonial }) => {
  return (
    <div className="mt-2 px-4 py-4 h-50 rounded-lg shadow-shadowOne items-center flex flex-col justify-center from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024]">
      <p className="italic font-white text-center pb-2">"{testimonial.desc}"</p>
      <p className="font-bold text-center">{testimonial.name}</p>
      <p className="text-designColor text-center">
        {testimonial.title}, {testimonial.org}
      </p>
    </div>
  );
};

export default Card;
