"use client";

import { useState } from "react";
import { useUser } from "@/app/context/UserContext";

const ProfilePage = () => {
  const { user, updateUser } = useUser();
  const [profile, setProfile] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    city: user?.city || "",
    state: user?.state || "",
    postalCode: user?.postalCode || "",
    country: user?.country || "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    updateUser(profile);
    window.alert("Profile updated successfully.");
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-pink-100 via-yellow-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl rounded-3xl bg-white/90 p-8 shadow-2xl border border-pink-100">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-amber-950">Your Profile</h1>
            <p className="max-w-xl text-sm text-gray-500">
              Manage your personal details and saved shipping address.
            </p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Full Name</span>
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm text-gray-900 focus:border-pink-400 focus:outline-none"
                placeholder="Daisy Darling"
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
                className="mt-2 w-full rounded-3xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm text-gray-900 focus:border-pink-400 focus:outline-none"
                placeholder="daisydarling@gmail.com"
                required
              />
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Phone</span>
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm text-gray-900 focus:border-pink-400 focus:outline-none"
                placeholder="9876543210"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Address</span>
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm text-gray-900 focus:border-pink-400 focus:outline-none"
                placeholder="123 Flower Road"
              />
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">City</span>
              <input
                type="text"
                name="city"
                value={profile.city}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm text-gray-900 focus:border-pink-400 focus:outline-none"
                placeholder="Kathmandu"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-gray-700">State</span>
              <input
                type="text"
                name="state"
                value={profile.state}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm text-gray-900 focus:border-pink-400 focus:outline-none"
                placeholder="Bagmati"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Postal Code</span>
              <input
                type="text"
                name="postalCode"
                value={profile.postalCode}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm text-gray-900 focus:border-pink-400 focus:outline-none"
                placeholder="44600"
              />
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-gray-700">Country</span>
              <input
                type="text"
                name="country"
                value={profile.country}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm text-gray-900 focus:border-pink-400 focus:outline-none"
                placeholder="Nepal"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-3xl bg-pink-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
