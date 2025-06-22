import React from "react";

const RentalAgreementHome = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gray-50 min-h-screen">
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          Getting Rental Agreement <br />
          made easy, quick and <br />
          affordable
        </h1>
        <p className="text-lg text-gray-600 mt-6">
          Lowest Price Guaranteed!! Create your rental agreement online in
          minutes
        </p>
        <button className="mt-8 button text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-green-600 transition-all">
          Create Now &gt;
        </button>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img
          src="/images/Agrrement.png"
          alt="Rental Agreement Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default RentalAgreementHome;
