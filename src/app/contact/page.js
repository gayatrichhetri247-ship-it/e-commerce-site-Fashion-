import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-2 items-center w-full p-12  bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-50 flex flex-col items-center">
      <div className="flex flex-col gap-2 text-center">
        <div className="text-4xl">💌</div>
        <div className="text-4xl font-extrabold">Say hello</div>
        <div className="text-sm text-gray-700">We would love to hear from you, darling ♡</div>
      </div>

      <div className="flex justify-between w-full p-16">
        
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-extrabold">Get in touch</h1>
            <p className="text-sm text-gray-700 w-[470px]">
              Questions about an order, sizing, or just want to chat about
              pretty things? Our sweet support team is here for you.
            </p>
          </div>

          <div className="mt-4 flex gap-6">
            <div className="text-3xl">📧</div>
            <div className="text-sm">
              <p className="text-pink-600 font-bold">Email</p>
              <p className="text-gray-700 text-xs">hello@blushandbloom.com</p>
            </div>
          </div>

          <div className="mt-4 flex gap-6">
            <div className="text-3xl">📞</div>
            <div className="text-sm">
              <p className="text-pink-600 font-bold">Phone</p>
              <p className="text-gray-700 text-xs">+977 9867524170</p>
            </div>
          </div>
        </div>

        <div className="w-[600px]  bg-white px-10 py-8 rounded-2xl">
          <form className="flex flex-col gap-4">
            <div className="text-xl font-bold">Send a message</div>

            <div className="flex flex-col gap-2">
              <label className=" font-bold">Name</label>
              <input
                type="text"
                placeholder="Daisy Darling"
                className="w-full px-4 py-2 border rounded-2xl bg-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className=" font-bold">Email</label>
              <input
                type="email"
                placeholder="daisy@gmail.com"
                className="w-full px-4 py-2 border rounded-2xl bg-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className=" font-bold">Subject</label>
              <input
                type="text"
                placeholder="I have a question about..."
                className="w-full px-4 py-2 border rounded-2xl bg-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className=" font-bold">Message</label>
              <textarea
                placeholder="Tell us everything"
                rows="4"
                className="w-full px-4 py-2 border rounded-2xl bg-white"
              ></textarea>
            </div>

            <button type="submit" className="bg-pink-600 w-full h-12 rounded-2xl text-white font-bold">
              Send Message ♡
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;