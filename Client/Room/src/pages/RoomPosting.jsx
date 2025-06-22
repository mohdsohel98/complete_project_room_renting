import React, { useState } from 'react';
import { useAuth } from '../Auth/AuthProvider';
import { Navigate } from 'react-router-dom';

const RoomPosting = () => {
  const [form, setForm] = useState({
    title: '',
    price: '',
    location: '',
    roomType: '',
    genderPreference: '',
    contact: '',
    description: '',
    amenities: [],
  });
  const [images, setImages] = useState([]);
  const {auth} = useAuth();

 if (!auth.isAuthenticated){
  return  <Navigate to = '/login'/>
 }
  if (auth.role !== 'lister'){
     return <Navigate to ='/'/>
  }



  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAmenityChange = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => {
      let newAmenities = [...prev.amenities];
      if (checked) {
        newAmenities.push(value);
      } else {
        newAmenities = newAmenities.filter((item) => item !== value);
      }
      return { ...prev, amenities: newAmenities };
    });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('title', form.title);
  formData.append('price', parseFloat(form.price));
  formData.append('location', form.location);
  formData.append('roomType', form.roomType);
  formData.append('genderPreference', form.genderPreference);
  formData.append('contact', form.contact);
  formData.append('description', form.description);

  form.amenities.forEach((amenity) => formData.append('amenities', amenity));

  if (images.length > 0) {
    formData.append('Image', images[0]);  // Important: key 'Image' matches backend property
  } else {
    alert('Please upload at least one image.');
    return;
  }

  try {
    const response = await fetch('https://localhost:7156/api/Room', {
      method: 'POST',
      headers:{
        'Authorization': `Bearer ${auth.token}`
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to post listing');
    }

    const data = await response.json();
    alert('Room posted successfully!');
    console.log(data);

    setForm({
      title: '',
      price: '',
      location: '',
      roomType: '',
      genderPreference: '',
      contact: '',
      description: '',
      amenities: [],
    });
    setImages([]);
  } catch (error) {
    console.error(error);
    alert('Error while posting room');
  }
};


  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Post a Room</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border rounded p-2"
          required
        />

        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price (INR)"
          className="w-full border rounded p-2"
          required
        />

        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border rounded p-2"
          required
        />

        <select
          name="roomType"
          value={form.roomType}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        >
          <option value="">Select Room Type</option>
          <option value="Private">Private</option>
          <option value="Shared">Shared</option>
        </select>

        <select
          name="genderPreference"
          value={form.genderPreference}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        >
          <option value="">Gender Preference</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Any">Any</option>
        </select>

        <input
          type="text"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          placeholder="Contact Number"
          className="w-full border rounded p-2"
          required
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Room Description"
          className="w-full border rounded p-2"
          required
        />

        <div>
          <label className="font-semibold block mb-1">Amenities:</label>
          <div className="flex flex-wrap gap-4">
            {['Wi-Fi', 'Parking', 'Laundry', 'AC', 'Heating'].map((amenity) => (
              <label key={amenity} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={amenity}
                  checked={form.amenities.includes(amenity)}
                  onChange={handleAmenityChange}
                />
                <span>{amenity}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="font-semibold block mb-1">Upload Images:</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 transition"
        >
          Post Room
        </button>
      </form>
    </div>
  );
};

export default RoomPosting;
