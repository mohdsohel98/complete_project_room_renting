import React from 'react'
import Room1 from "/images/Room1.jpg";
import SearchBar from './SearchBar';
import RoomCard from './RoomCard';
import HowItWork from './HowItWork';
import RentalAgreementHome from './RentalAgrrementHome';
import BondHome from './BondHome';

function Home() {
  return (
  
  <>
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(/images/Room2.jpg)',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 to-neutral-800/60 z-0"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
          Find Your Perfect <span className="text-primary-400">Living Space</span>
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Connect with roommates and find your ideal place to live. 
          Thousands of rooms and flatmates waiting for you.
        </p>
        
        <div>
      <SearchBar />
    </div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-white">
          <div className="bg-neutral-800/50 backdrop-blur-sm px-4 py-2 rounded-lg">
            <div className="font-bold text-2xl">5000+</div>
            <div className="text-sm text-neutral-200">Available Rooms</div>
          </div>
          <div className="bg-neutral-800/50 backdrop-blur-sm px-4 py-2 rounded-lg">
            <div className="font-bold text-2xl">3200+</div>
            <div className="text-sm text-neutral-200">Happy Roommates</div>
          </div>
          <div className="bg-neutral-800/50 backdrop-blur-sm px-4 py-2 rounded-lg">
            <div className="font-bold text-2xl">150+</div>
            <div className="text-sm text-neutral-200">Cities Covered</div>
          </div>
        </div>
      </div>
       
    </div>
  
    <RoomCard />
    <HowItWork />
    <RentalAgreementHome />
    <BondHome />
  
</>
  )
}

export default Home