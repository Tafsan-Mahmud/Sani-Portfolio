import React from 'react';
import Home from '../Home/Home';
import MainService from '../MainService/MainService';
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
        </div>
    );
};

export default FullPage;