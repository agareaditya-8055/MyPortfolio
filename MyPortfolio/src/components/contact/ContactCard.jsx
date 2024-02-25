import React from "react";

const ContactCard = ({ title, text, path }) => {
  return (
    <>
      <div className="flex items-center p-4 gap-10 bg-contactCard w-1/2 h-24 rounded-lg mt-12">
        <div className="flex items-center justify-center bg-svgColor w-11 h-12 rounded-3xl">
          <svg
            style={{ color: "white" }}
            stroke="white"
            fill="none"
            strokeWidth="2"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
            // viewBox="0 0 448 512"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={path}></path>
          </svg>
        </div>
        <div className="flex flex-col">
          <h3 className="text-customColor font-bold text-2xl">{title}</h3>
          <span className="text-white">{text}</span>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
