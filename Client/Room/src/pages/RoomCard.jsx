import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const RoomCard = () => {
  const [rooms, setRooms] = useState([]);
  const baseUrl = 'https://localhost:7156'; // Backend base URL
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${baseUrl}/api/Room`)
      .then(res => res.json())
      .then(data => setRooms(data))
      .catch(err => console.error(err));
  }, []);

   const handleClick=room=>{
   navigate (`/RoomDetails/${room.id}`, { state: room });
   }
  

  return (
    <div>
     
      <div className="px-6 py-8">
        <div className='mb-4'><SearchBar/></div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Featured Listings</h2>
            <p className="text-sm text-gray-600">
              Discover some of the best rooms and flats available now
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-10">
        {rooms.map(room => {
          const amenities = room.amenities?.split(',') || [];

          return (

            <div
               
              key={room.id}
              onClick={()=>  handleClick(room)}

              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white hover:shadow-md transition duration-300 flex flex-col"
            >
              <img
                src={`${baseUrl}${room.imageUrl}`}
                alt={room.title}
                className="w-full h-36 object-cover"
              />

              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-lg font-bold text-gray-800 mb-1">{room.title}</h2>
                  <p className="text-sm text-gray-600 mb-2">{room.description}</p>

                  <div className="text-sm text-gray-700 space-y-1 mb-2">
                    <p><strong> Location:</strong> {room.location}</p>
                    <p><strong> Price:</strong> ₹{room.price}</p>
                    <p><strong> Type:</strong> {room.roomType}</p>
                    <p><strong> Gender Preference:</strong> {room.genderPreference}</p>
                    <p><strong> Contact:</strong> {room.contact}</p>
                  </div>
                </div>
                  
                <div className="mt-3">
                  <p className="text-sm font-semibold text-gray-700 mb-1">🛠️ Amenities:</p>
                  <div className="flex flex-wrap gap-2">
                    {amenities.map((item, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
                      >
                        {item.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomCard;
