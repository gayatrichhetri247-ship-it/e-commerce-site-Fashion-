import React from "react";

const page = () => {
  return (
    <div className="flex justify-around items-center h-screen px-26 py-4  gap-28 bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-100">
      <div className="flex gap-4 flex-col">
        <div className="px-2 h-8 rounded-3xl bg-white w-fit flex gap-2 items-center">
          <img
            src="images/home-page/tulip.png"
            alt="Tulip"
            className="w-4 h-4"
          />{" "}
          <span className="text-sm">New Spring Collection</span>{" "}
        </div>
        <div className="flex flex-col gap-2 ">
          <span className="text-6xl font-extrabold text-amber-950">Bloom into</span>
          <span className="text-pink-500 text-6xl font-extrabold capitalize"> your softest era</span>
        </div>
        <div className=" text-md w-96 text-gray-500">
          Dreamy dresses, cloud-soft knits and twirly skirts in every shade of
          pretty. Dress like the main character, darling. ♡
        </div>
        <div className="flex gap-6 mt-6">
          <div className="w-46 text-center cursor-pointer py-2 bg-pink-600 text-white rounded-3xl font-bold">Shop Now</div>
          <div className="w-46 text-center cursor-pointer py-2 bg-white text-pink-600 border border-pink-600 rounded-3xl font-bold">Explore Dresses</div>
        </div>
      </div>
      <div className="relative ">
         <div className= " absolute top-0 left-62 rotate-12 flex flex-col  items-start bg-pink-600 w-fit py-2 px-4 text-white font-bold text-xs rounded-4xl  ">
          <span>20% Off</span>
          <span>End of Season Sale</span>
        </div>
        <img
          src="/images/home-page/home-girl-image.jpg"
          alt="Image of a girl in a spring dress"
          className="w-96 h-auto border-8 border-white rounded-2xl"
        />
       
      </div>
    </div>
  );
};

export default page;
