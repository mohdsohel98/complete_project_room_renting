import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RoomBooking from './RoomBooking';

function RoomDetails() {
  const { state: room } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!room) navigate('/');
  }, [room, navigate]);

  if (!room) return null;

  const baseUrl = 'https://localhost:7156';

  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={`${baseUrl}${room.imageUrl}`}
            alt={room.title}
            className="w-full h-full object-cover"
          />
          <div className="bg-pink-700 text-white text-sm p-2 font-semibold">
            🟣 4 people already contacted since last week
          </div>
        </div>

        {/* Details Section */}
        <div className="lg:w-1/2 p-6 space-y-4">
          <div>
            <h1 className="text-xl font-bold text-gray-800">{room.title}</h1>
            <p className="text-sm text-gray-600">{room.location}</p>
          </div>

          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex justify-between border-b pb-2">
              <span>🏷️ Rent:</span>
              <span className="font-semibold">₹{room.price}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>📍 Address:</span>
              <span className="text-right">{room.address || 'N/A'}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>🛋️ Furnishing:</span>
              <span>{room.furnishing || 'Furnished'}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>👥 Available For:</span>
              <span>{room.genderPreference} (Capacity: {room.capacity || 'N/A'})</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>🛏️ Room Type:</span>
              <span>{room.roomType}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>🛠️ Configuration:</span>
              <span>{room.configuration || '2 Bedrooms, 2 Bathrooms, No Balcony'}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>📅 Available From:</span>
              <span>{room.availableFrom || 'Immediate'}</span>
            </div>
            <div className="flex justify-between">
              <span>🧑‍💼 Posted By:</span>
              <span>Dealer on {room.postedDate || 'May 27, 2025'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Component */}
      <div className="mt-8">
        <RoomBooking roomId = {room.id} />
      </div>
    </main>
  );
}

export default RoomDetails;
