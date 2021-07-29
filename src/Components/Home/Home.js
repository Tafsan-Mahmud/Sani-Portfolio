import React, { useEffect } from 'react';
import homeMainPic from './IMG_4203-01 (1).jpg';
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faDownload, faUser } from '@fortawesome/free-solid-svg-icons'
import './Home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])
    return (
        <div id="home">
            <div id="home-section-with-core-content">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div data-aos="fade-right" data-aos-anchor-placement="top-bottom" className="col-md-6 mb-4">
                            <div className="home-main-text">
                                <h5>Hello, im<span>_</span></h5>
                                <h1>Sani Hossain</h1>
                                <h4><FontAwesomeIcon icon={faBullhorn} /> <Typical steps={['Hello world!', 3000, 'jshdsfad', 3000, 'hisdjbjchbds', 3000, 'Sani hossain', 3000,]} loop={Infinity} wrapper="b" /></h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at minima perferendis ut cupiditate dolor optio magnam voluptatem, adipisci vero harum! Consequatur quis a iusto optio ex atque ipsam, dolor ipsum, vel nihil perspiciatis nesciunt. Laborum veritatis, nam accusamus, nesciunt molestias fugiat ratione officiis qui, vero exercitationem magnam est ex?</p>
                                <button type="button" class="my-button-cstm"><FontAwesomeIcon icon={faUser} /> Hire ME</button>
                                <button type="button" class="ml-4 my-button-cstm-rem"><FontAwesomeIcon icon={faDownload} /> Resume</button>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" className="col-md-6 mb-4">
                            <div className="home-image">
                                <img src={homeMainPic} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;