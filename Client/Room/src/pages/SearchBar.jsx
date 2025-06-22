import React, { useEffect, useState } from 'react'

function SearchBar() {

 const [Query, SetQuery] = useState('');
 const [AllRoom, SetAllRoom] = useState([]);
 const [Suggestion, SetALLSuggestion] = useState([]);
 const [Loading , SetLoading] = useState(false);


  useEffect(()=>{
    fetch("https://localhost:7156/api/Room")
    .then(res=> res.json())
    .then(data=> SetAllRoom(data))
    .catch(err=> console.log(err));
  }, []);

   const HandleInputChange= (e)=>{
 const value = e.target.value;
  SetQuery(value);
  SetLoading(true);


   if ( value.length >1){
    const Filter = AllRoom.filter(room=>
      room.location.toLowerCase().includes(value.toLowerCase())
    );
    SetALLSuggestion(Filter);
   }
    else {
      SetALLSuggestion([]);
    }
  SetLoading(false);
   }
  return (
    <div className="relative w-1/2 mx-auto my-6 bg-white rounded-xl">
      <input
        type="text"
        className="w-full border rounded p-2 shadow"
        placeholder="Search by location..."
        value={Query}
        onChange={HandleInputChange}
      />

      {Loading && <div className="text-sm mt-1">Loading...</div>}

      {Suggestion.length > 0 && (
        <ul className="absolute bg-white border rounded mt-1 w-full shadow-md max-h-60 overflow-auto z-10">
        {Suggestion.map((room, index) => (
            <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
              {room.title} - <span className="text-sm text-gray-500">{room.location}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar