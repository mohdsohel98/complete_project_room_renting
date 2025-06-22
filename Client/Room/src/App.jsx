import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import RoomCard from './pages/RoomCard';
import HowItWork from './pages/HowItWork';
import RentalAgreementHome from './pages/RentalAgrrementHome';
import BondHome from './pages/BondHome';
import Footer from './components/Footer';
import Footer1 from './pages/Fotter1';
import AuthPage from './components/Auth';
import RoomPosting from './pages/RoomPosting';
import AuthProvider from './Auth/AuthProvider';
import RoomBooking from './pages/RoomBooking';
import RoomDetails from './pages/RoomDetails';
import Profile from './pages/Profile';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <AuthProvider>
    <Router>
      
      <Navbar />
      
      <Routes>
        {/*  home section  */}


            <Route path="/" element={<Home />} />
            <Route path="/RoomCard" element={<RoomCard />} />
         
           <Route path = "/RoomDetails/:id" element= {<RoomDetails/>}/>
           
           <Route path="/admin" element={<AdminPanel/>} />

            {/* Login Logout section  */}
        
         <Route path='/Auth' element={<AuthPage/>}/>
          {/*  Room posting section  */}
          <Route path = "/RoomPosting" element = {<RoomPosting/>}/>
         <Route path='/profile' element= {<Profile/>}/>
      </Routes>

      <Footer1 />
      <Footer />
    </Router>
    </AuthProvider>
  );
}

export default App;
