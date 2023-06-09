import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
        </div>
        <div>
            <p>Phone Number :- +918447475070</p>
            <p>Email :-rakeshsingh9625@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;