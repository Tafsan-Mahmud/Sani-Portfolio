import React, { useEffect, useState } from 'react';
import './WhyChooseMe.css';
import WhyChooseMeImg from './10-1170x722.png';

const WhyChooseMe = () => {
    const [animationRSP5, setAnimationRSP5] = useState(false);
    console.log(animationRSP5);
    useEffect(()=>{
        if (window.innerWidth < 988) {
            setAnimationRSP5(true)
        }
    },[animationRSP5]);
    return (
        <div id="whyChoose">
            <div className="Why-Choose-Me-bg">
                <div className="container mt-5 mb-5">
                    <div className="row mt-3 mb-3 d-flex justify-content-center align-items-center">
                        <div data-aos="fade-right" className="col-md-6">
                            <img className="w-100 spin-img-chose" src={WhyChooseMeImg} alt="" />
                        </div>
                        <div data-aos={animationRSP5 ? 'fade-up' : 'fade-left'} className="col-md-6">
                            <div className="choose-me mb-4">
                                <h1>Why Choose Me</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima deserunt molestiae modi tempore atque nam rerum deleniti</p>
                            </div>
                            <div className="choose-me mb-4">
                                <h2>01</h2>
                                <h3>95% Successful Rate</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima deserunt molestiae modi tempore atque nam rerum deleniti</p>
                            </div>
                            <div className="choose-me mb-4">
                                <h2>02</h2>
                                <h3>Time Effeciency</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima deserunt molestiae modi tempore atque nam rerum deleniti</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseMe;