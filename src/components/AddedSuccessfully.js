"use client";

const PopupMessage = ({ show, message }) => {
  if (!show) return null;

  return (
    // Added p-4 and items-end with bottom padding to protect the notification card on small device screen bases
    <div className="fixed inset-0 flex items-end justify-center p-4 pb-10 sm:pb-16 bg-black/30 z-50">
      {/* Added w-full max-w-sm to safely let the notification block fit comfortably inside small smartphone screens */}
      <div className="bg-pink-600 px-8 py-4 rounded-2xl shadow-2xl text-center w-full max-w-sm sm:w-auto">
        <h2 className="font-bold text-white text-md wrap-break-word">
          {message}
        </h2>
      </div>
    </div>
  );
};

export default PopupMessage;