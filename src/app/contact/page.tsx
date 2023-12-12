import React from "react";

const ContactPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 lg:w-1/2 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] w-full items-center justify-center  text-red-500">
      <h1 className="text-4xl mt-10 mb-10 text-gray-300 font-bold ">
        Contact Us!
      </h1>
      <form className="flex flex-wrap gap-6">
        <div className="w-full flex flex-col gap-6 ">
          <input
            className="ring-1 ring-red-200 p-4 rounded-sm placeholder:text-red-200 outline-none"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="ring-1 ring-red-200 p-4 rounded-sm placeholder:text-red-200 outline-none"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            rows={3}
            className="ring-1 ring-red-200 p-4 rounded-sm placeholder:text-red-200 outline-none"
            placeholder="Send us your messages!"
            name="messageS"
          />
        </div>
        <button className="bg-red-500 text-white py-4 px-8 hover:bg-red-400 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
