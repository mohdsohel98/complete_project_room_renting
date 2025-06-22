import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#232f3e] text-white pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10">

        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">Company</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Popular Locations */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Popular Locations</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">Bangalore</a></li>
            <li><a href="#" className="hover:underline">Pune</a></li>
            <li><a href="#" className="hover:underline">Mumbai</a></li>
            <li><a href="#" className="hover:underline">Delhi</a></li>
            <li><a href="#" className="hover:underline">Hyderabad</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">Post Free Listing</a></li>
            <li><a href="#" className="hover:underline">PG/Flat for Rent</a></li>
            <li><a href="#" className="hover:underline">Find Flatmates</a></li>
            <li><a href="#" className="hover:underline">Owner Login</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm text-gray-300">support@rentsmart.com</p>
          <p className="text-sm text-gray-300 mt-2">+91 98765 43210</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-500">Facebook</a>
            <a href="#" className="hover:text-pink-500">Instagram</a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-600 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} RentSmart — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
