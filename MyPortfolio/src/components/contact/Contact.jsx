import React from "react";
import ContactCard from "./ContactCard";
import { contactCard } from "../../utils/contants/Contant";
import { useSelector } from "react-redux";

const Contact = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className="flex flex-col p-8 my-12 mx-72 h-auto bg-achieveColor rounded-lg">
      <h3 className="text-customColor text-4xl font-bold mt-3">CONTACT ME :</h3>

      <div className="flex gap-4">
        {contactCard.map((item) => (
          <ContactCard
            key={item.id}
            title={item.title}
            text={item.text}
            path={item.path}
          />
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-4xl text-center text-customColor font-semibold">
          GET IN TOUCH
        </h3>
        <p className={`my-4 text-lg ${isDarkMode && "text-textColor"}`}>
          Thank you for visiting my portfolio. If you have any questions or
          would like to explore potential opportunities, please don't hesitate
          to reach out. I am constantly looking for new opportunities in
          industry, I am willing to work in the field of web-development.
        </p>
      </div>
    </div>
  );
};

export default Contact;
