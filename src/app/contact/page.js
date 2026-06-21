import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen w-full p-4 sm:p-8 md:p-12 bg-linear-to-r from-pink-100 via-yellow-50 to-pink-50 flex flex-col items-center gap-6">
      
      {/* Top Header Banner */}
      <div className="flex flex-col gap-1.5 text-center mt-4">
        <div className="text-4xl select-none">💌</div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-amber-950 tracking-tight">Say hello</h1>
        <p className="text-xs sm:text-sm text-gray-700 max-w-xs sm:max-w-md">
          We would love to hear from you, darling ♡
        </p>
      </div>

      {/* Main Split Layout Container */}
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-6xl py-6 md:p-12 gap-10 lg:gap-8 items-start">
        
        {/* Left Side: Brand Info / Touch Points */}
        <div className="flex flex-col gap-6 w-full lg:w-5/12">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-extrabold text-gray-800">Get in touch</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Questions about an order, sizing, or just want to chat about
              pretty things? Our sweet support team is here for you.
            </p>
          </div>

          {/* Contact Methods Container */}
          <div className="flex flex-col gap-4">
            {/* Email Field */}
            <div className="flex gap-4 items-center bg-white/40 p-3 rounded-2xl border border-pink-200/20 backdrop-blur-xs">
              <div className="text-2xl sm:text-3xl select-none">E</div>
              <div className="text-sm">
                <p className="text-pink-600 font-bold">Email</p>
                <p className="text-gray-700 text-xs sm:text-sm font-medium break-all">girlishfashion@gmail.com</p>
              </div>
            </div>

            {/* Phone Field */}
            <div className="flex gap-4 items-center bg-white/40 p-3 rounded-2xl border border-pink-200/20 backdrop-blur-xs">
              <div className="text-2xl sm:text-3xl select-none">P</div>
              <div className="text-sm">
                <p className="text-pink-600 font-bold">Phone</p>
                <p className="text-gray-700 text-xs sm:text-sm font-medium">+977 9867524170</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Message Contact Form Wrapper */}
        <div className="w-full lg:w-7/12 bg-white px-5 py-6 sm:p-10 rounded-2xl shadow-xl shadow-pink-200/40 border border-pink-100/30">
          <form className="flex flex-col gap-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">Send a message</h3>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-bold text-gray-700 pl-1">Name</label>
              <input
                type="text"
                placeholder="Daisy Darling"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-2xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all text-gray-800 placeholder-gray-400"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-bold text-gray-700 pl-1">Email</label>
              <input
                type="email"
                placeholder="daisy@gmail.com"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-2xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all text-gray-800 placeholder-gray-400"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-bold text-gray-700 pl-1">Subject</label>
              <input
                type="text"
                placeholder="I have a question about..."
                className="w-full px-4 py-2.5 border border-gray-200 rounded-2xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all text-gray-800 placeholder-gray-400"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-bold text-gray-700 pl-1">Message</label>
              <textarea
                placeholder="Tell us everything..."
                rows="4"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-2xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all text-gray-800 placeholder-gray-400 resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="bg-pink-600 hover:bg-pink-700 active:scale-[0.99] w-full h-12 rounded-2xl text-white font-bold transition-all shadow-md shadow-pink-100 text-sm sm:text-base cursor-pointer mt-2"
            >
              Send Message ♡
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Page;