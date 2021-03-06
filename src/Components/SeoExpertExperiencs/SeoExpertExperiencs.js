import React, { useEffect, useState } from 'react';
import SEOEXPRTPIC from './3-1170x1170.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersCog, faChartLine, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import './SeoExpertExperiencs.css';


const SeoExpertExperiencs = () => {
    const [animationRSP3, setAnimationRSP3] = useState(false);
    console.log(animationRSP3);
    useEffect(() => {
        if (window.innerWidth < 988) {
            setAnimationRSP3(true)
        }
    }, [animationRSP3]);
    return (
        <div id="SeoExpert">
            <div id="Seo-Expert-Experiencs-sectioon" className="pt-5 pb-5">
                <div className="container pt-5 pb-5">
                    <div className="row pt-4 pb-4 d-flex align-items-center justify-content-center">
                        <div data-aos="fade-right" data-aos-anchor-placement="top-bottom" className="your-element col-md-4 col-sm-6col-sm-6 for-SEOEXPRT-pic">
                            <img className="" src={SEOEXPRTPIC} alt="" />
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="col-md-4 col-sm-6">
                            <div className="for-SEOEXPRT-text-card">
                                <h1><FontAwesomeIcon icon={faUsersCog} /></h1>
                                <h3>SEO Experts</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem suscipit maxime ex tempore magni atque.</p>
                                <div className="extra-pwr">
                                    <a href="#">Contact Us <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                </div>
                            </div>
                        </div>
                        <div data-aos={animationRSP3 ? 'fade-down' : 'fade-left'} data-aos-anchor-placement="top-bottom" className="col-md-4 col-sm-6">
                            <div className="for-SEOEXPRT-text-card">
                                <h1><FontAwesomeIcon icon={faChartLine} /></h1>
                                <h3>10+ Years Of Experiences</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem suscipit maxime ex tempore magni atque.</p>
                                <div className="extra-pwr">
                                    <a href="#">Work With Us <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                </div>
                            </div>
                        </div>s
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeoExpertExperiencs;