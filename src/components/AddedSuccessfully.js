"use client";

const PopupMessage = ({ show, message }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-end justify-center bg-black/30 z-50">
      <div className="bg-pink-600 px-8 py-4 rounded-2xl shadow-2xl text-center">

        <h2 className=" font-bold text-white text-md">
          {message}
        </h2>
      </div>
    </div>
  );
};

export default PopupMessage;