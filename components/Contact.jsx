import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 pt-20 text-white flex justify-center items-center"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg w-full md:w-2/3 lg:w-1/2">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Send me a message below:</p>
        </div>

        <div className="w-full flex justify-center">
          <form
            action="https://getform.io/f/2bbd358c-1037-42ec-9266-e0ae4cdda806"
            method="POST"
            className="flex flex-col w-full md:w-2/3"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
