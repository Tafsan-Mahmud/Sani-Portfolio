import React from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'


const ContactUs = () => {
    return (
        <div id="Contact-us">
            <section className="contact-cnt">
                <div className="cnt-bg-blur">
                    <div className="content-cnt">
                        <h2>Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, cumque saepe. Blanditiis, expedita ipsam itaque fuga distinctio Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                    </div>
                    <div className="coontaineeer">
                        <div className="contactInfo-cnt">
                            <div className="info-blur-box">
                                <div className="box-cnt">
                                    <div className="icons-cnt">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </div>
                                    <div className="text-cnt">
                                        <h3>Address</h3>
                                        <p>4637 pailot Camp Road, <br /> Owatonna,Minnesota,59889</p>
                                    </div>
                                </div>
                                <div className="box-cnt">
                                    <div className="icons-cnt">
                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                    </div>
                                    <div className="text-cnt">
                                        <h3>Phone</h3>
                                        <p>+21651523</p>
                                    </div>
                                </div>
                                <div className="box-cnt">
                                    <div className="icons-cnt">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className="text-cnt">
                                        <h3>Email</h3>
                                        <p>kjhiwmnaeuh@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contactForm-cnt">
                            <form action="">
                                <h2>Send Message</h2>
                                <div className="inputBox-cnt">
                                    <input type="text" name="" required />
                                    <span>Full Name</span>
                                </div>
                                <div className="inputBox-cnt">
                                    <input type="text" name="" required />
                                    <span>Subject</span>
                                </div>
                                <div className="inputBox-cnt">
                                    <input type="text" name="" required />
                                    <span>Email</span>
                                </div>
                                <div className="inputBox-cnt">
                                    <textarea name="" required></textarea>
                                    <span>Type Your Message . . .</span>
                                </div>
                                <div className="inputBox-cnt">
                                    <input type="submit" value="Send" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;