import React from "react";

const page = () => {
  return (
    <div className="flex justify-between items-center h-screen px-14 py-10  gap-28 bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-100">
      <div className="flex gap-4 flex-col">
        <div className="px-6 h-10 rounded-3xl text-lg bg-white w-fit flex gap-4 items-center border border-pink-200">
          <img
            src="images/home-page/tulip.png"
            alt="Tulip"
            className="w-5 h-5"
          />{" "}
          <span className="text-sm">New Spring Collection</span>{" "}
        </div>
        <div className="flex flex-col gap-2 ">
          <span className="text-7xl font-extrabold text-amber-950">Bloom into</span>
          <span className="text-pink-500 text-7xl font-extrabold capitalize"> your softest era</span>
        </div>
        <div className=" text-md w-96 text-gray-500">
          Dreamy dresses, cloud-soft knits and twirly skirts in every shade of
          pretty. Dress like the main character, darling. ♡
        </div>
        <div className="flex gap-6 mt-6">
          <div className="w-60 text-center cursor-pointer py-4 text-lg bg-pink-600 text-white rounded-3xl font-bold">Shop Now</div>
          <div className="w-60 text-center cursor-pointer py-4 text-lg bg-white text-pink-600 border border-pink-600 rounded-3xl font-bold">Explore Dresses</div>
        </div>
      </div>
      <div className="bottom-18">
        
        <img
          src="/images/home-page/home-girl-image.jpg"
          alt="Image of a girl in a spring dress"
          className="w-[450px] h-auto border-8 border-white rounded-2xl "
        />
         <div className= " relative bottom-[520px] left-76 rotate-12 flex flex-col  items-start bg-pink-600 w-fit py-2 px-6 text-white font-bold text-sm  rounded-4xl  ">
          <span>20% Off</span>
          <span>End of Season Sale</span>
        </div>
       
      </div>
    </div>
  );
};

export default page;
