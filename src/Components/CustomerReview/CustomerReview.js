import React from 'react';
import './CustomerReview.css';
import { Swiper, SwiperSlide } from "swiper/react";
import fakeData from '../fakeData';
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper/core";
import DisplyReview from '../DisplyReview/DisplyReview';
import { useState } from 'react';

SwiperCore.use([EffectCoverflow, Pagination]);


const CustomerReview = (e) => {
    return (
        <div id="customer-review">
            <div className="top-text-rvw pt-5 pb-4 text-center">
                <h1>What Customers Say</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore optio assumenda dolor <br /> magnam laboriosam officiis ullam  earum quos suscipit? Laudantium explicabo <br />non cupiditate enim, quam eos voluptas ea temporibus!</p>
            </div>
            <Swiper className="mySwiper swiper-container"
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false
                }}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true
                }}
                pagination={true}
                loop={true}
                onSlideChange={() => console.log('slide entry')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                {
                    fakeData.map(sliderData => {
                        return (
                            <SwiperSlide className="swiper-slide">
                                <DisplyReview sliderData={sliderData} ></DisplyReview>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};

export default CustomerReview;
