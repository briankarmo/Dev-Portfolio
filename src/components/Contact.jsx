import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 pt-20 text-white flex justify-center items-center px-4"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg w-full md:w-2/3 lg:w-1/2">
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </h2>
          <p className="py-6 text-gray-400">Send me a message below:</p>
        </div>

        {/* Form Section */}
        <div className="w-full flex justify-center">
          <form
            action="https://getform.io/f/2bbd358c-1037-42ec-9266-e0ae4cdda806"
            method="POST"
            className="flex flex-col w-full md:w-2/3 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-3 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="p-3 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              required
              className="p-3 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            ></textarea>

            {/* Submit Button - Matched Styling */}
            <button className="bg-gradient-to-r from-gray-600 to-gray-400 text-white font-semibold px-6 py-3 rounded-md 
                               hover:shadow-[0px_0px_15px_rgba(160,160,160,0.8)] hover:scale-105 transition-all duration-300 
                               text-lg tracking-wide drop-shadow-md mx-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
