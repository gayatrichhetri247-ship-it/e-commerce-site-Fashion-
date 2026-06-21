import React from "react";
import Link from "next/link";
import Image from "next/image";
const Page = () => {
  return (
    <div className="p-4 sm:p-8 md:p-14 bg-linear-to-r from-pink-100 via-yellow-50 to-pink-50 min-h-screen flex flex-col items-center gap-6">
      
      {/* Dashboard Top Header Banner */}
      <div className="flex flex-col items-center text-center gap-2">
        <div className="text-4xl sm:text-5xl select-none">🛠️</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-amber-950 tracking-tight">
          Owner Dashboard
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 max-w-sm sm:max-w-xl">
          Add new pieces or remove items from your boutique ♡
        </p>
      </div>

      {/* Main Workspace Layout Container */}
      <div className="flex flex-col xl:flex-row w-full max-w-7xl py-4 sm:py-8 gap-6 lg:gap-8 justify-between items-start">
        
        {/* Left Side: Create/Add Product Form Block */}
        <div className="w-full xl:w-1/2 h-fit border border-pink-200/40 py-6 px-4 sm:px-8 rounded-2xl bg-pink-50/90 backdrop-blur-sm shadow-xl shadow-pink-200/40">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">Add a new product</h2>
          
          <form className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-bold text-gray-700">Product name</label>
              <input
                type="text"
                placeholder="Off Shoulder T-shirt"
                className="text-sm border border-gray-200 p-2.5 rounded-xl bg-white focus:outline-pink-400"
              />
            </div>

            {/* Split Row: Category & Price */}
            <div className="flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-6">
              <div className="flex flex-col gap-1.5 w-full sm:w-1/2">
                <label className="text-xs sm:text-sm font-bold text-gray-700">Category</label>
                <input
                  type="text"
                  placeholder="Dresses"
                  className="text-sm border border-gray-200 p-2.5 rounded-xl bg-white focus:outline-pink-400"
                />
              </div>
              <div className="flex flex-col gap-1.5 w-full sm:w-1/2">
                <label className="text-xs sm:text-sm font-bold text-gray-700">Price (RS.)</label>
                <input
                  type="number"
                  placeholder="5000"
                  className="text-sm border border-gray-200 p-2.5 rounded-xl bg-white focus:outline-pink-400"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-bold text-gray-700">Image Url</label>
              <input
                type="url"
                placeholder="https://image1/..."
                className="text-sm border border-gray-200 p-2.5 rounded-xl bg-white focus:outline-pink-400"
              />
            </div>

            {/* Split Row: Colors & Sizes */}
            <div className="flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-6">
              <div className="flex flex-col gap-1.5 w-full sm:w-1/2">
                <label className="text-xs sm:text-sm font-bold text-gray-700">Colors (comma separated)</label>
                <input
                  type="text"
                  placeholder="blue,pink,green,white"
                  className="text-sm border border-gray-200 p-2.5 rounded-xl bg-white focus:outline-pink-400"
                />
              </div>
              <div className="flex flex-col gap-1.5 w-full sm:w-1/2">
                <label className="text-xs sm:text-sm font-bold text-gray-700">Sizes (comma separated)</label>
                <input
                  type="text"
                  placeholder="XS, S, M, L"
                  className="text-sm border border-gray-200 p-2.5 rounded-xl bg-white focus:outline-pink-400"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-bold text-gray-700">Description</label>
              <textarea
                placeholder="Beautiful offshoulder tops..."
                rows="4"
                className="text-sm border border-gray-200 p-2.5 rounded-xl bg-white focus:outline-pink-400 resize-none"
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 active:scale-[0.99] text-white font-bold rounded-3xl py-3 px-4 shadow-md shadow-pink-200 transition-all text-sm sm:text-base cursor-pointer mt-2">
              Add Product ♡
            </button>
          </form>
        </div>

        {/* Right Side: Current Available Live Boutique Inventory Items */}
        <div className="w-full xl:w-1/2 flex flex-col gap-5 bg-white py-6 px-4 sm:px-8 rounded-2xl shadow-xl shadow-pink-200/30 border border-gray-100">
          
          {/* Header row content counts */}
          <div className="flex justify-between items-center border-b border-gray-100 pb-3">
            <div className="flex items-center">
              <p className="font-bold text-base sm:text-xl text-gray-800">Current products</p>
              <p className="ml-1.5 text-base sm:text-xl text-pink-600 font-extrabold">(16)</p>
            </div>
            <Link href="/admin/adminlogin">
              <button className="py-1.5 px-4 border border-pink-200 hover:bg-pink-50 text-gray-700 hover:text-pink-600 rounded-3xl text-xs sm:text-sm font-bold transition-colors cursor-pointer">
                Sign Out
              </button>
            </Link>
          </div>

          {/* Infinite Scrollable or Rendered Items Layout Wrapper */}
          <div className="flex flex-col gap-4 max-h-145 overflow-y-auto pr-1 no-scrollbar">
            
            {/* Repeated Product Item Mock Block Row Template */}
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div key={item} className="flex justify-between items-center gap-4 p-2 rounded-xl hover:bg-pink-50/40 transition-colors border-b border-gray-50 last:border-0 pb-3 last:pb-0">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <Image
                    src="/images/about/story.jpg"
                    alt="product preview thumbnail"
                    className="h-14 w-14 sm:h-16 sm:w-16 rounded-lg object-cover shrink-0 border border-gray-100 shadow-sm"
                  />
                  <div className="min-w-0 flex flex-col justify-center">
                    <div className="font-bold text-xs sm:text-sm text-gray-800 truncate" title="Rosewater Tulle Midi Dress">
                      Rosewater Tulle Midi Dress
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5">
                      Dresses · <span className="text-amber-950 font-semibold">RS. 5000</span>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="py-1.5 px-3.5 bg-pink-100 hover:bg-pink-200 text-pink-700 text-xs font-bold rounded-3xl transition-colors cursor-pointer shrink-0">
                    Remove
                  </button>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default Page;