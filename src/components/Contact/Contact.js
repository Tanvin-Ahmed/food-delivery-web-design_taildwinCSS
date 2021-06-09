import React from "react";

const Contact = () => {
  return (
    <section className="bg-yellow-200 h-screen flex flex-col justify-center items-center">
      <form className="flex flex-col justify-center items-center md:w-3/6 sm:w-full w-full p-4 bg-yellow-300 rounded-2xl">
        <h2 className="text-2xl mb-3 font-bold text-white">Contact Form</h2>
        <input
          type="email"
          className="form-input border-none w-full px-3 py-2 text-gray-700 rounded-2xl focus:outline-none mb-2"
          placeholder="Your Email"
          required
        />
        <textarea
          className="w-full px-3 py-2 text-gray-700 border rounded-2xl focus:outline-none mb-2"
          rows="4"
          placeholder="Message"
          required
        ></textarea>
        <button
          type="submit"
          className="flex justify-center items-center py-2 px-5 rounded text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none"
        >
          Send{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
        </button>
      </form>
    </section>
  );
};

export default Contact;
