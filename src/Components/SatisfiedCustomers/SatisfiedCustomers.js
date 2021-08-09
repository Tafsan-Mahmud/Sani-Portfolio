import React from 'react';
import './SatisfiedCustomers.css';
import mblPic from './cpy.png';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const SatisfiedCustomers = () => {

    return (
        <div id="Satisfied-Customers">
            <div className="container">
                <div className="row">
                    <div data-aos="fade-right" className="col-md-4 mb-2 mt-4">
                        <div className="stft-cstmr-mbl-pic d-flex justify-content-center align-items-center">
                            <img src={mblPic} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7 mb-5 mt-5 d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div data-aos="fade-down" className="stft-cstmr-top-txt text-center">
                                <h3>Our Numbers of Satisfied Customers</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia cumque voluptates, sit debitis earum unde quos. Deserunt eos unde hic.</p>
                            </div>
                            <div data-aos="fade-up" className="col-md-6  d-flex justify-content-center align-items-center">
                                <div className="stft-cstmr-insd-txt text-center">
                                    <div className="stft-cstmr-insd-txt-dvx mt-1 mb-2">
                                        <h1><CountUp end={145} duration={5} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>+</h1>
                                        <h5>Satisfied Customers</h5>
                                    </div>
                                    <div className="stft-cstmr-insd-txt-dvx mt-1 mb-2">
                                        <h1><CountUp end={65} duration={4} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>+</h1>
                                        <h5>Passionate Employees</h5>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="col-md-6 d-flex justify-content-center align-items-center">
                                <div className="stft-cstmr-insd-txt text-center">
                                    <div className="stft-cstmr-insd-txt-dvx mt-1 mb-2">
                                        <h1><CountUp end={13} duration={3} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>+</h1>
                                        <h5>Top SEO Companies</h5>
                                    </div>
                                    <div className="stft-cstmr-insd-txt-dvx mt-1 mb-2">
                                        <h1><CountUp end={364} duration={6} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>+</h1>
                                        <h5>Sucessful SEO Campaigns</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SatisfiedCustomers;