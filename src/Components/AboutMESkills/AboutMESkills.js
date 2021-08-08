import React from 'react';
import './AboutMESkills.css';
import abtWnPic from './IMG_4203-01.jpg';


const AboutMESkills = () => {
    return (
        <div id="aboutMESkills">
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-4 p-3 mb-3 d-flex justify-content-center align-items-center">
                        <div className="aboutSkill-pic">
                            <img src={abtWnPic} alt="" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="abt-al-cnt">
                        <h3 className="abt-m-ttl">About Me</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illo et optio. Dolorem dicta molestias soluta dolor voluptatibus.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, molestiae unde non commodi quas nulla vel, voluptatem doloribus aspernatur facere reprehenderit! Iste facere, ducimus consectetur earum quos.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sunt ipsa odit! Vero itaque nulla molestiae sequi?</p>
                        </p>
                        <h4>Here are some services that I provide.</h4>
                        <div className="abt-srvc-lst">
                            <span>Youtube Boost</span>
                            <span>Youtube Boost</span>
                            <span>Twitter Follower</span>
                            <span>Twitter Follower</span>
                            <span>Instagram Like</span>
                            <span>Instagram Like</span>
                            <span>Spotify Views</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMESkills;