import React from "react";

const page = () => {
  return (
    <div className="p-14 bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-50 h-auto flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <div className="text-5xl">🛠️</div>
        <div className="text-5xl font-bold mt-4">Owner Dashboard</div>
        <div className=" text-gray-700 text-sm">
          Add new pieces or remove items from your boutique ♡
        </div>
      </div>
      <div className="flex w-full py-8 px-2 gap-8 justify-between ">
        <div className="w-1/2 h-fit border py-6 px-8 rounded-2xl border-pink-200 bg-pink-50 shadow-lg shadow-pink-200 ">
          <div className="text-xl font-bold">Add a new product</div>
          <form className="mt-2 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className=" font-bold">Product name</label>
              <input
                type="text"
                placeholder="Up Showlder T-shirt"
                className="text-sm border p-2 rounded-xl bg-white"
              />
            </div>
            <div className="flex justify-between w-full gap-6">
              <div className="flex flex-col gap-1 w-1/2">
                <label className=" font-bold">Category</label>
                <input
                  type="text"
                  placeholder="Dresses"
                  className="text-sm border p-2 rounded-xl bg-white "
                />
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <label className=" font-bold">Price (RS.)</label>
                <input
                  type="number"
                  placeholder="5000"
                  className="text-sm border p-2 rounded-xl bg-white  "
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className=" font-bold">Image Url</label>
              <input
                type="url"
                placeholder="https://image1/..."
                className="text-sm border p-2 rounded-xl bg-white"
              />
            </div>
            <div className="flex justify-between w-full gap-6">
              <div className="flex flex-col gap-1 w-1/2">
                <label className=" font-bold">Colors (comma separated)</label>
                <input
                  type="text"
                  placeholder="blue,pink,green,white"
                  className="text-sm border p-2 rounded-xl bg-white "
                />
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <label className=" font-bold">Sizes (comma separated)</label>
                <input
                  type="text"
                  placeholder="XS, S, M, L"
                  className="text-sm border p-2 rounded-xl bg-white "
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className=" font-bold">Description</label>
              <textarea
                placeholder="Beautiful upshoulder tops..."
                rows="4"
                className="text-sm border p-2 rounded-xl bg-white"
              ></textarea>
            </div>
            <button className="w-full bg-pink-600 text-white font-bold rounded-3xl px-2 py-3 cursor-pointer">
              Add Product♡
            </button>
          </form>
        </div>
        <div className="w-1/2 flex flex-col gap-6 bg-white py-6 px-8 rounded-2xl">
          <div className="flex justify-between">
            <div className="flex ">
              <p className="font-bold text-xl">Current products</p>{" "}
              <p className="ml-1 text-xl text-pink-600 font-bold"> (16)</p>
            </div>
            <button className="py-2 px-4 border border-pink-200 rounded-3xl text-sm font-bold">
              Sign Out
            </button>
          </div>

          {/* products */}
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div>
                <img
                  src="/images/about/story.jpg"
                  alt="product1"
                  className="h-18 w-18 rounded-lg"
                />
              </div>
              <div className="mt-8">
                <div className="font-bold">Rosewater Tulle Midi Dress</div>
                <div className="text-xs text-gray-700">Dresses · RS.5000</div>
              </div>
            </div>
            <div>
              <button className="py-2 px-4 bg-pink-100 text-pink-700 font-bold rounded-3xl">Remove</button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div>
                <img
                  src="/images/about/story.jpg"
                  alt="product1"
                  className="h-18 w-18 rounded-lg"
                />
              </div>
              <div className="mt-8">
                <div className="font-bold">Rosewater Tulle Midi Dress</div>
                <div className="text-xs text-gray-700">Dresses · RS.5000</div>
              </div>
            </div>
            <div>
              <button className="py-2 px-4 bg-pink-100 text-pink-700 font-bold rounded-3xl">Remove</button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div>
                <img
                  src="/images/about/story.jpg"
                  alt="product1"
                  className="h-18 w-18 rounded-lg"
                />
              </div>
              <div className="mt-8">
                <div className="font-bold">Rosewater Tulle Midi Dress</div>
                <div className="text-xs text-gray-700">Dresses · RS.5000</div>
              </div>
            </div>
            <div>
              <button className="py-2 px-4 bg-pink-100 text-pink-700 font-bold rounded-3xl">Remove</button>
            </div>
          </div>


          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div>
                <img
                  src="/images/about/story.jpg"
                  alt="product1"
                  className="h-18 w-18 rounded-lg"
                />
              </div>
              <div className="mt-8">
                <div className="font-bold">Rosewater Tulle Midi Dress</div>
                <div className="text-xs text-gray-700">Dresses · RS.5000</div>
              </div>
            </div>
            <div>
              <button className="py-2 px-4 bg-pink-100 text-pink-700 font-bold rounded-3xl">Remove</button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div>
                <img
                  src="/images/about/story.jpg"
                  alt="product1"
                  className="h-18 w-18 rounded-lg"
                />
              </div>
              <div className="mt-8">
                <div className="font-bold">Rosewater Tulle Midi Dress</div>
                <div className="text-xs text-gray-700">Dresses · RS.5000</div>
              </div>
            </div>
            <div>
              <button className="py-2 px-4 bg-pink-100 text-pink-700 font-bold rounded-3xl">Remove</button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div>
                <img
                  src="/images/about/story.jpg"
                  alt="product1"
                  className="h-18 w-18 rounded-lg"
                />
              </div>
              <div className="mt-8">
                <div className="font-bold">Rosewater Tulle Midi Dress</div>
                <div className="text-xs text-gray-700">Dresses · RS.5000</div>
              </div>
            </div>
            <div>
              <button className="py-2 px-4 bg-pink-100 text-pink-700 font-bold rounded-3xl">Remove</button>
            </div>
          </div>


          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div>
                <img
                  src="/images/about/story.jpg"
                  alt="product1"
                  className="h-18 w-18 rounded-lg"
                />
              </div>
              <div className="mt-8">
                <div className="font-bold">Rosewater Tulle Midi Dress</div>
                <div className="text-xs text-gray-700">Dresses · RS.5000</div>
              </div>
            </div>
            <div>
              <button className="py-2 px-4 bg-pink-100 text-pink-700 font-bold rounded-3xl">Remove</button>
            </div>
          </div>


          
        </div>
      </div>
    </div>
  );
};

export default page;
