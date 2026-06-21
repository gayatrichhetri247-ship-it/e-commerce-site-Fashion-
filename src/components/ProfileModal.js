"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/app/context/UserContext";

const ProfileModal = ({ open, onClose }) => {
  const { user, updateUser } = useUser();
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  useEffect(() => {
    if (!open) return;
    setProfile({
      fullName: user?.fullName || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || "",
      city: user?.city || "",
      state: user?.state || "",
      postalCode: user?.postalCode || user?.zip || "",
      country: user?.country || "",
    });
  }, [open, user]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    updateUser(profile);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-amber-950">Edit Profile</h2>
            <p className="text-sm text-gray-500">Update your personal and address details.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-pink-100 px-3 py-2 text-pink-600 hover:bg-pink-200"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Full Name</span>
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm focus:border-pink-400 focus:outline-none"
                required
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm focus:border-pink-400 focus:outline-none"
                required
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Phone</span>
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm focus:border-pink-400 focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Address</span>
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm focus:border-pink-400 focus:outline-none"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">City</span>
              <input
                type="text"
                name="city"
                value={profile.city}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm focus:border-pink-400 focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">State</span>
              <input
                type="text"
                name="state"
                value={profile.state}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm focus:border-pink-400 focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Postal Code</span>
              <input
                type="text"
                name="postalCode"
                value={profile.postalCode}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm focus:border-pink-400 focus:outline-none"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-semibold text-gray-700">Country</span>
            <input
              type="text"
              name="country"
              value={profile.country}
              onChange={handleChange}
              className="mt-2 w-full rounded-3xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm focus:border-pink-400 focus:outline-none"
            />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-3xl border border-pink-200 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-pink-50 sm:w-auto"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full rounded-3xl bg-pink-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-700 sm:w-auto"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
