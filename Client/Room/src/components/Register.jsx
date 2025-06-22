import React, { useState } from 'react';
import { use } from 'react';

function Register({ onToggleView }) {
  // State for all form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Seeker'); 
   const [phone , setPhone] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      fullName,
      email,
      password,
      role,
      phone,
     role: role.toLowerCase(),
    };

    try {
      const response = await fetch('https://localhost:7156/api/User', {  
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert('Registered successfully!');
        setFullName('');
        setEmail('');
        setPassword('');
        setRole('Seeker');
      } else {
        const errorData = await response.json();
        alert('Registration failed: ' + (errorData.message || 'Unknown error'));
      }
    } catch (error) {
      alert('Network error: ' + error.message);
    }
  };

  return (
    <div className="w-full max-w-md p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Account</h2>
      <p className="text-gray-600 mb-8">Join us and find or post your perfect space</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
            placeholder="John Doe"
            required
            autoComplete="name"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
            placeholder="your@email.com"
            required
            autoComplete="email"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
            placeholder="••••••••"
            required
            autoComplete="new-password"
          />
        </div>

   
               <div>
  <label className="block text-gray-700 mb-1" htmlFor="phone">Phone</label>
  <input
    id="phone"
    type="tel"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
    placeholder="Phone number "
    required
  />
</div>


        <div>
          <label className="block text-gray-700 mb-1" htmlFor="role">Select Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
            required
          >
            <option value="Seeker">Seeker</option>
            <option value="Lister">Lister</option>
             <option value="Lister">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Register
        </button>
      </form>

      <p className="mt-6 text-center text-gray-600">
        Already have an account?{' '}
        <button onClick={onToggleView} className="text-blue-600 hover:underline">
          Login
        </button>
      </p>
    </div>
  );
}

export default Register;
