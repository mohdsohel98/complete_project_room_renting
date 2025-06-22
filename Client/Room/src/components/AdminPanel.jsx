import React, { useState } from 'react';

function AdminPanel() {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li
            className={`cursor-pointer ${activeTab === 'users' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
            onClick={() => setActiveTab('users')}
          >
            All Users
          </li>
          <li
            className={`cursor-pointer ${activeTab === 'rooms' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
            onClick={() => setActiveTab('rooms')}
          >
            All Rooms
          </li>
          <li
            className={`cursor-pointer ${activeTab === 'bookings' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
            onClick={() => setActiveTab('bookings')}
          >
            All Bookings
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 bg-gray-50">
        {activeTab === 'users' && (
          <div>
            <h1 className="text-2xl font-bold mb-4">All Users</h1>
            <p>Here you can manage all registered users.</p>
          </div>
        )}
        {activeTab === 'rooms' && (
          <div>
            <h1 className="text-2xl font-bold mb-4">All Rooms</h1>
            <p>Here you can view and manage all room listings.</p>
          </div>
        )}
        {activeTab === 'bookings' && (
          <div>
            <h1 className="text-2xl font-bold mb-4">All Bookings</h1>
            <p>Here you can view all bookings made by users.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
