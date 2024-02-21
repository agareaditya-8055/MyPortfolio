import React from "react";

const Body = () => {
  return (
    <main className="flex mt-[7rem] mx-auto px-28">
      <div className="flex flex-col w-1/2 flex-wrap">
        <div className="space-y-4">
          <h2 className="text-5xl mb-4">Hey,</h2>{" "}
          <span className="text-2xl"> My name is Aditya |</span>
          <p className="text-3xl leading-[3rem]">
            <span className="border-b-2 border-purple-700 font-bold text-customColor ">
              Turning passion into proficiency,
            </span>
            {""}
            {"  "}I am a self-taught web developer who believes in skill and is
            on an exciting journey through the boundless realm of web
            development.
          </p>
        </div>
        <div className="flex space-x-4 mt-4">
          <a
            href="/resume"
            className="px-4 py-2 border bg-blue-500 text-white hover:bg-white hover:border-blue-700 hover:text-blue-500 rounded-md font-medium"
          >
            Resume
          </a>
          <a
            href="/about"
            className="px-4 py-2 border bg-blue-500 text-white hover:bg-white hover:border-blue-700 hover:text-blue-500 rounded-md font-medium"
          >
            More About Me
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2">
        <img
          src="https://images.unsplash.com/photo-1707817812089-586ca2bfe711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
          alt="Aditya"
          className="w-96 h-96 rounded-full shadow"
        />
      </div>
    </main>
  );
};

export default Body;
