import React, { useState } from 'react';
import './DisplyReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



const DisplyReview = (props) => {
    console.log(props.onSlide)
    const { ServiceImage, postId, id, Star, name, ServiceName, ShortDisCription, body, website, allServices } = props.sliderData;
    const [readM, setReadM] = useState(false)
    console.log(readM)
    const readMoreOrLess = () => {
        setReadM(!readM)
    }
    const againChange = () => {
        setReadM(false)
    }
    return (
        <div className={readM ? 'main-card-rvw active-height' : 'main-card-rvw'}>
            <div onClick={againChange} className="img-name-tittle d-flex justify-content-start align-items-center">
                <img src={ServiceImage} alt="" />
                <div className="nm-ttl">
                    <h5>{ServiceName}</h5>
                    <p>@{ShortDisCription.slice(0, 15)}</p>
                </div>
            </div>
            <div onClick={againChange} className="Star-Rate d-flex justify-content-start align-items-center">
                <h4>
                    {Star === 1 && <div>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon className="star-disable" icon={faStar} />
                        <FontAwesomeIcon className="star-disable" icon={faStar} />
                        <FontAwesomeIcon className="star-disable" icon={faStar} />
                        <FontAwesomeIcon className="star-disable" icon={faStar} /></div>}
                    {Star === 2 && <div>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon className="star-disable" icon={faStar} />
                        <FontAwesomeIcon className="star-disable" icon={faStar} />
                        <FontAwesomeIcon className="star-disable" icon={faStar} /></div>}
                    {Star === 3 && <div>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon className="star-disable" icon={faStar} />
                        <FontAwesomeIcon className="star-disable" icon={faStar} /></div>}
                    {Star === 4 && <div>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon className="star-disable" icon={faStar} /></div>}
                    {Star === 5 && <div>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /></div>}
                </h4>
            </div>
            <div onClick={againChange} className="user-comment">
                <p>{ShortDisCription + ShortDisCription + ShortDisCription + ShortDisCription + ShortDisCription + ShortDisCription + ShortDisCription + ShortDisCription} </p>
            </div>
            <a onClick={readMoreOrLess} className="see-more-rvw"></a>
        </div>
    );
};

export default DisplyReview;