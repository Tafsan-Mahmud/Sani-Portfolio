import React from 'react';
import './DisplyService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const DisplyService = (props) => {
    const { ServiceImage, postId, id, name, ServiceName, ShortDisCription, body, website, allServices } = props.data
    return (
        <div data-aos="fade-up" className="col-md-4 mb-5 pb-5">
            <div className="service-crd-dsgn">
                <div className="srvc-box">
                    <div className="srvc-img-nme d-flex align-items-center justify-content-center mb-3">
                        <img className="pb-2" src={ServiceImage} alt="" />
                        <h4 className="pb-2">{ServiceName}</h4>
                    </div>
                    {/* <p className="text-center mb-2">{ShortDisCription}</p> */}
                    {
                        allServices.map(allFD => <h6><FontAwesomeIcon style={{ color: '#00c000' }} icon={faCheck} /> {allFD.topic}</h6>)
                    }
                    <div className="d-flex align-items-center justify-content-center mt-4">
                        <div className="cstm-glow-btn">
                            <button className="srvc-deal-btn">Deal With Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplyService;