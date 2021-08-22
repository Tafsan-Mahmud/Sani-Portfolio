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
                                <h5>Hello, im</h5>
                                <h1>Sani Hossain</h1>
                                <h4><FontAwesomeIcon icon={faBullhorn} /> <Typical steps={['Hello world!', 3000, 'jshdsfad', 3000, 'hisdjbjchbds', 3000, 'Sani hossain', 3000,]} loop={Infinity} wrapper="b" /></h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at minima perferendis ut cupiditate dolor optio magnam voluptatem, adipisci vero harum! Consequatur quis a iusto optio ex atque ipsam, dolor ipsum, vel nihil perspiciatis nesciunt. Laborum veritatis, nam accusamus, nesciunt molestias fugiat ratione officiis qui, vero exercitationem magnam est ex?</p>
                                <button type="button" class="my-button-cstm"><FontAwesomeIcon icon={faUser} /> Hire ME</button>
                                <button type="button" class="ml-4 my-button-cstm-rem"><FontAwesomeIcon icon={faDownload} /> Resume</button>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="col-md-6 mb-4 d-flex justify-content-evenly align-items-center">
                            <div className="home-image">
                                <img src={homeMainPic} alt="" />
                            </div>
                            <div className="home-scl-mda-icn-dsg">
                                <ul>
                                    <li><a className="sci-dsg-fb-h" href="https://www.facebook.com/sani1288" target="_bold"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a className="sci-dsg-tw-h" href="https://www.facebook.com/sani1288" target="_bold"><i class="fab fa-twitter"></i></a></li>
                                    <li><a className="sci-dsg-ig-h" href="https://www.facebook.com/sani1288" target="_bold"><i class="fab fa-instagram"></i></a></li>
                                    <li><a className="sci-dsg-pt-h" href="https://www.facebook.com/sani1288" target="_bold"><i class="fab fa-pinterest-p"></i></a></li>
                                    <li><a className="sci-dsg-ytb-h" href="https://www.facebook.com/sani1288" target="_bold"><i class="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;