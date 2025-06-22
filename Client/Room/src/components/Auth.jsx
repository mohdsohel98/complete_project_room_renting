import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleView = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden md:flex md:w-1/2 bg-blue-600 relative">
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
          alt="Modern apartment interior"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
        />
        <div className="relative z-10 p-12 text-white">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Room</h1>
          <p className="text-xl">
            Join thousands of students and professionals finding their ideal living space
          </p>
        </div>
      </div>

      {/* Right side - Auth Forms */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-full max-w-md">
          {/* Toggle Buttons */}
          <div className="flex mb-8 mx-6">
            <div className="bg-gray-100 p-1 rounded-lg w-full flex">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 rounded-md transition-colors ${
                  isLogin ? 'bg-blue-600 text-white' : 'text-gray-700'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 rounded-md transition-colors ${
                  !isLogin ? 'bg-blue-600 text-white' : 'text-gray-700'
                }`}
              >
                Register
              </button>
            </div>
          </div>

          {isLogin ? (
            <Login onToggleView={toggleView} />
          ) : (
            <Register onToggleView={toggleView} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
