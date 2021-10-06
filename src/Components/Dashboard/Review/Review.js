import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
// import StarsRating from 'stars-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { Rating } from 'react-simple-star-rating'
import './Review.css';

const Review = () => {
    const [starCount, setStarCount] = useState(null)
    console.log('my county', starCount);
    const ratingChanged = (value) => {
        setStarCount(value)
    }
    return (
        <div id="main-review">
            <div className="wrap-pg-revw">
                <Sidebar></Sidebar>
                <div className="review-all-input">
                    <h1 id="review-ttl-h">Add a Review</h1>
                    <div className="main-user-inp-rvw">
                        <form className="w-100 wrap-rvw" action="" autoComplete="off">
                            <div className="upload-rvw-img-star-rate">
                                <div className="rvw-up-img">
                                    <p>Upload Your Image</p>
                                    <input type="file" name="image_URL" required id="upload-rvw-img" accept="image/*" />
                                    <label htmlFor="upload-rvw-img"><FontAwesomeIcon icon={faCloudUploadAlt} /> Choose a Photo</label>
                                </div>
                                <div className="star-sec">
                                    <p>Give Me Rate</p>
                                    <Rating
                                        onClick={ratingChanged}
                                        ratingValue={starCount}
                                        fillColor='#ffd700'
                                        size={44}
                                    />
                                </div>
                            </div>
                            <div className="rvw-all-input">
                                <div className="rvw-input-data">
                                    <input type="text" required name="Name" />
                                    <span>Your Name</span>
                                    <div className="underline-rvw"></div>
                                </div>
                                <div className="rvw-input-data">
                                    <input type="text" required name="Title" />
                                    <span>Your Title</span>
                                    <div className="underline-rvw"></div>
                                </div>
                                <div className="rvw-input-data">
                                    <textarea required name="description" rows="3"></textarea>
                                    <span>Your Comment</span>
                                    <div className="underline-rvw2"></div>
                                </div>
                            </div>
                            <div className="typ-submit-Review">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;









