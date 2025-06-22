import React, { useEffect, useState } from "react";
import { useAuth } from "../Auth/AuthProvider";

function Profile() {
  const { auth } = useAuth();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");


   const [showRoom , SetShowRoom] = useState(false);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = auth.user?.id;
        const res = await fetch(`https://localhost:7156/api/User/${userId}/profile`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });

        if (!res.ok) throw new Error(`Failed to fetch profile: ${res.status}`);
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error("Profile fetch error:", err);
        setError("Unable to load profile.");
      }
    };

    if (auth.isAuthenticated) {
      fetchProfile();
    }
  }, [auth]);

  if (!auth.isAuthenticated) {
    return <p className="mt-20 text-center">Please login to view your profile.</p>;
  }

  if (error) {
    return <p className="mt-20 text-center text-red-600">{error}</p>;
  }

  if (!profile) {
    return <p className="mt-20 text-center">Loading profile…</p>;
  }

  const {
    fullName = "User",
    email = "Not provided",
    totalBookings = 0,
    bookings = [],
    listedRooms = [],
  } = profile;

  const role = auth.user?.role || "User";
  const firstName = fullName.split(" ")[0] || "User";
  const avatarUrl = `https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(firstName || "U")}`;

  const colours = {
    emerald: "bg-emerald-100 text-emerald-700",
    indigo: "bg-indigo-100 text-indigo-700",
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-slate-50 p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Welcome back, {firstName}!
      </h1>

      <img
        src={avatarUrl}
        alt={fullName}
        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow mb-8"
      />

      <div className="w-full max-w-3xl grid gap-6 grid-cols-1 md:grid-cols-2">
        <section className="bg-white rounded-2xl shadow p-6 space-y-4">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <p className="text-sm"><span className="text-gray-500 mr-1">Full Name:</span><span className="font-medium">{fullName}</span></p>
          <p className="text-sm"><span className="text-gray-500 mr-1">Email:</span><span className="font-medium">{email}</span></p>
          <p className="text-sm"><span className="text-gray-500 mr-1">Role:</span><span className="font-medium">{role}</span></p>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 space-y-6">
          <h2 className="text-lg font-semibold">Statistics</h2>
          
          {role.toLowerCase() === "lister" && (
            <div
            onClick={()=> SetShowRoom(!showRoom)}
             className={`rounded-xl p-6 text-center ${colours.emerald}`}>
              <p className="text-3xl font-bold">{listedRooms.length}</p>
              <p className="mt-1 font-medium">Rooms Listed</p>
            </div>

          )}

          <div className={`rounded-xl p-6 text-center ${colours.indigo}`}>
            <p className="text-3xl font-bold">Total Booking </p>
            <p className="mt-1 font-medium">{totalBookings}</p>
          </div>
        </section>

        {showRoom && listedRooms.length > 0 && (
  <div className="w-full max-w-3xl mt-8 space-y-4">
    <h2 className="text-xl font-semibold text-gray-800">Your Listed Rooms</h2>
    {listedRooms.map((room) => (
      <div
        key={room.roomId}
        className="bg-white rounded-xl shadow p-4 border hover:border-emerald-400 transition"
      >
        <p className="text-lg font-semibold">{room.title}</p>
        <p className="text-sm text-gray-600">Location: {room.location}</p>
      </div>
    ))}
  </div>
)}

      </div>

      {/* You can list bookings or rooms in table below if needed */}
      <p className="mt-10 text-xs text-gray-400">
        Last updated: {new Date().toLocaleString()}
      </p>
    </div>
  );
}

export default Profile;
