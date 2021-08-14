import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id="Footer" className="pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mb-4">
                        <h2 className="ftr-ttl-tx-dsg">About Me</h2>
                        <p className="ftr-abt-p-tx-cl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quasi odio et fuga. Laboriosam sint quasi itaque, excepturi, earum aperiam eius similique dolorum repellendus voluptatum inventore quis qui nesciunt illum?</p>
                        <div className="ftr-scl-mda-icn-dsg pt-1">
                            <h5>Social Media</h5>
                            <ul>
                                <li><a className="sci-dsg-fb" href="https://www.facebook.com/sani1288" target="_bold"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a className="sci-dsg-tw" href="https://www.facebook.com/sani1288" target="_bold"><i class="fab fa-twitter"></i></a></li>
                                <li><a className="sci-dsg-ig" href="https://www.facebook.com/sani1288" target="_bold"><i class="fab fa-instagram"></i></a></li>
                                <li><a className="sci-dsg-pt" href="https://www.facebook.com/sani1288" target="_bold"><i class="fab fa-pinterest-p"></i></a></li>
                                <li><a className="sci-dsg-ytb" href="https://www.facebook.com/sani1288" target="_bold"><i class="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h2 className="ftr-ttl-tx-dsg">Useful Links</h2>
                        <ul className="useful-links">
                            <li><Link className="nav-link cstm-usefil-lnk" to='/home'>HOME</Link></li>
                            <li><Link className="nav-link cstm-usefil-lnk" to='/home'>SERVICES</Link></li>
                            <li><Link className="nav-link cstm-usefil-lnk" to='/home'>ABOUT ME</Link></li>
                            <li><Link className="nav-link cstm-usefil-lnk" to='/home'>CONTACT</Link></li>
                            <li><Link className="nav-link cstm-usefil-lnk" to='/home'>BLOG</Link></li>
                            <li className="lgn-spcl-dsg "><Link className="nav-link cstm-usefil-lnk" to='/home'>LOGIN</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h2 className="ftr-ttl-tx-dsg">Contact Me</h2>
                        <div className="lctn-nmbr-mail">
                            <div className="icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <p>834 Manda street <br /> New Yourk,FQ 27102 <br /> USA</p>
                        </div>
                        <div className="lctn-nmbr-mail">
                            <div className="icon">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <p>+8801876511805 <br />+8801876511805</p>
                        </div>
                        <div className="lctn-nmbr-mail">
                            <div className="icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <p className="lctn-nmbr-mail ml-btm-xtra"> mdsanihossain@gmail.com</p>
                        </div>
                    </div>
                    <p className="copyright-p">
                        Copyright @ {(new Date().getFullYear())} | MD.Sani Hossain All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;