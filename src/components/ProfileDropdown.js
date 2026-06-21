"use client";

import { useEffect, useRef, useState } from "react";
import { useUser } from "@/app/context/UserContext";
import ProfileModal from "@/components/ProfileModal";

const ProfileDropdown = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const dropdownRef = useRef(null);
  const { logout } = useUser();

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const initials = user?.fullName
    ? user.fullName
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : user?.email
    ? user.email.charAt(0).toUpperCase()
    : "U";

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white font-bold shadow-lg transition hover:bg-pink-600"
      >
        {initials}
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-3 w-72 overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-2xl">
          <div className="p-4 border-b border-pink-100">
            <p className="text-sm font-semibold text-gray-900">{user?.fullName || "Profile"}</p>
            <p className="text-xs text-gray-500 truncate">{user?.email || "No email provided"}</p>
          </div>

          <div className="p-4 space-y-3 text-sm text-gray-700">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setShowEditModal(true);
              }}
              className="w-full rounded-2xl bg-pink-50 px-3 py-2 font-medium text-pink-700 transition hover:bg-pink-100"
            >
              Edit Profile
            </button>

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                logout();
              }}
              className="w-full rounded-2xl bg-pink-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-pink-700"
            >
              Logout
            </button>
          </div>
        </div>
      )}
      <ProfileModal open={showEditModal} onClose={() => setShowEditModal(false)} />
    </div>
  );
};

export default ProfileDropdown;
