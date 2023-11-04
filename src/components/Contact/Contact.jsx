import React from "react";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-4 border-b-[1px] border-b-black">
      <h1 className="text-center text-3xl pb-4">
        If you feel like I would be a good fit for your team!
      </h1>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-center">
          <ContactLeft />
        </div>
      </div>
    </section>
  );
};

export default Contact;
