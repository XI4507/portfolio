import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          "Hi there! I am an MCA postgraduate with a strong passion for web
          development and a focus on React. I have self-taught myself HTML, CSS,
          Tailwind, ReactJS, and JavaScript, and have built several dynamic and
          intuitive web applications, including a frontend food ordering web
          app. With a solid foundation in modern web development tools and
          technologies, I am always eager to learn and explore new ways to
          create stunning web experiences".
        </p>
      </div>
    </div>
  );
};

export default About;
