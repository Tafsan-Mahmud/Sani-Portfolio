import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import CustomerReview from '../CustomerReview/CustomerReview';
import Home from '../Home/Home';
import MainService from '../MainService/MainService';
import MobileServices from '../MobileServices/MobileServices';
import NavBar from '../NavBar/NavBar';
import SeoExpertExperiencs from '../SeoExpertExperiencs/SeoExpertExperiencs';
import WhyChooseMe from '../WhyChooseMe/WhyChooseMe';

const FullPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Home></Home>
            <SeoExpertExperiencs></SeoExpertExperiencs>
            <MainService></MainService>
            <WhyChooseMe></WhyChooseMe>
            <MobileServices></MobileServices>
            <CustomerReview></CustomerReview>
            <ContactUs></ContactUs>
        </div>
    );
};

export default FullPage;