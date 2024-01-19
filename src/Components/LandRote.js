import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router,Routes,Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import Navbar from './Navbar';
import Footer from './Footer';
import HomeShowAd from './Pages/HomeShowAd';
import Hero from './Pages/Hero';
import HCourse from './Pages/HCourse';
import Defining from './Pages/Defining';
import Reviews from './Pages/Reviews';
import Testimonial from './Pages/Testimonial';


const LandRote = () => {
    return (
        <div>
           
            <Navbar/>
            <HomeShowAd></HomeShowAd>
            <Hero></Hero>
            <HCourse></HCourse>
            <Defining></Defining>
            <Reviews></Reviews>
            <Testimonial></Testimonial>
            <Footer/> 
            
        </div>
    )
}

export default LandRote
