import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthProvider';


function Navbar() {
  const {auth,logout} = useAuth();

  const handleLogout= ()=>{
     logout();
      Navigate('/')
  }
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        ROOM<span className="text-green-500">Mate</span>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="bg-gray-100 text-black px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition"
        >
          Home
        </Link>

        <Link
          to="/RoomCard"
          className="bg-gray-100 text-black px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition"
        >
          Find Room
        </Link>

        {auth.role === 'lister'? <Link

          to="/RoomPosting"
          className="bg-gray-100 text-black px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition"
        >
          Post Room
        </Link> :""}



     {auth.isAuthenticated ?(

       <Link
         
          to="/auth"
          onClick = {handleLogout}
          className="bg-yellow-300 text-black px-5 py-2 rounded-full text-sm hover:bg-yellow-400 transition"
        >
          Logout
        </Link>
     ):(

        <Link
          to="/auth"
          className="bg-yellow-300 text-black px-5 py-2 rounded-full text-sm hover:bg-yellow-400 transition"
        >
          Login / Register
        </Link>
       
        )}
      
       <Link
        to="/profile"
        className="bg-yellow-300 text-black px-5 py-2 rounded-full text-sm hover:bg-yellow-400 transition"
       >
        Profile
       </Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
