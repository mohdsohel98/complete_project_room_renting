import React, { useEffect, useState } from 'react';
import { useAuth } from '../Auth/AuthProvider';
import { desc } from 'framer-motion/client';

function RoomBooking({roomId}) {
  // dummy owner data (could come from props or API)
  const owner = {
    name: 'Manju Gupta',
    listed: 1,
    locality: 'Block D Mansa Ram Park',
  };
 
 const {auth} = useAuth();

   
  // simple form state
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'I am interested in this Property.',
    agreed: false,
  });


 useEffect(()=>{
  if(auth.user){
    setForm((f)=>({
      ...f,
      name: auth.user.fullName,
      email: auth.user.email
    }))
  }
 },[auth?.user])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
  };

   

   const handleSubmit = async(e)=>{
    e.preventDefault();
     if (!form.agreed) {
       alert('Please agree to terms and conditions.');
       return;
     }

 const payLoad = {
   id :0,
   roomId :roomId,
   name : form.name,
   email : form.email,
   phone : form.phone,
    preference : form.role,
   description : form.message,
 }

    try{
      const  res =  await fetch('https://localhost:7156/api/RoomBooking/CreateBooking', {
        method: 'POST',
        headers :{
          'Content-Type' : 'application/json',
          'Authorization': `Bearer ${auth?.token}`
        }, 
        body : JSON.stringify(payLoad)
      });
      if (!res.ok ) throw  new Error('Booking Failed');
       const data = await res.json();
        console.log('Booking response:', data);
       alert('Booking submitted successfully ✅');
    

       const whatsappMessage = encodeURIComponent(`Hi, I am ${form.name}. ${form.message}`);
    const phoneWithCountryCode = "91" + form.phone;
    window.open(`https://wa.me/${phoneWithCountryCode}?text=${whatsappMessage}`, "_blank");

        setForm((f)=>({
          ...f,
        
          phone : '',
          message : '',
          agreed : false
        }));   
    }
 catch(err){
 console.error(err);
 alert ('Booking failed: ' + err.message);
 }

   };

  return (
    <div className="bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* ---------- LEFT: Owner details ---------- */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Owner Details</h2>

          <div className="flex items-center gap-4">
            <div className="w-24 h-24 bg-gray-400 rounded"></div>
            <div>
              <h3 className="text-2xl font-semibold">{owner.name}</h3>
              <p className="text-gray-500">Owner</p>
            </div>
          </div>

          <button className="bg-teal-500 text-white px-6 py-2 rounded">
            View Phone Number
          </button>

          <p className="text-blue-600">
            Properties Listed: <span className="font-bold">{owner.listed}</span>
          </p>
          <p>
            <strong>Localities :</strong> {owner.locality}
          </p>
        </div>

        {/* ---------- RIGHT: Enquiry form ---------- */}
        <form
          className="md:w-1/2 bg-white p-6 rounded shadow space-y-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Send enquiry to Owner
          </h2>

          <div className="flex gap-8">
            {['Individual', 'Dealer'].map((r) => (
              <label key={r} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value={r}
                  checked={form.role === r}
                  onChange={handleChange}
                  required
                />
                {r}
              </label>
            ))}
          </div>

          <input
            name="name"
            placeholder="Name"
            className="w-full border p-2 rounded"
            value={form?.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={form.email}
            onChange={handleChange}
            required
          />
          <div className="flex">
            <select
              className="border p-2 rounded-l w-28 text-gray-500 bg-gray-100"
              disabled
            >
              <option>IND (+91)</option>
            </select>
            <input
              name="phone"
              placeholder="Phone Number"
              className="flex-grow border p-2 rounded-r"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            className="w-full border p-2 rounded"
            value={form.message}
            onChange={handleChange}
            maxLength={400}
            rows={4}
          />

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="agreed"
              checked={form.agreed}
              onChange={handleChange}
            />
            I agree to the&nbsp;
            <a href="#" className="text-blue-600">
              Terms & Conditions
            </a>
            &nbsp;and&nbsp;
            <a href="#" className="text-blue-600">
              Privacy Policy
            </a>
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send Email & SMS
          </button>
        </form>
      </div>
    </div>
  );
}

export default RoomBooking;
