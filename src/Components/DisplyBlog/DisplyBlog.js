import React from 'react';
import { useState } from 'react';
import './DisplyBlog.css';

const DisplyBlog = (props) => {
    const { id, blogImage, tittle, shortDisCription } = props.BlogData;

    const [blogMore, setBlogMore] = useState(false)
    const changeBlogTextHight = () => {
        setBlogMore(!blogMore)
    }
    const changeBlogTextHightBody = () => {
        setBlogMore(false)
    }

    return (
        <div className="col-md-4 mt-4">
            <div className={blogMore ? 'blg-m-crd-dsg blg-hight-active' : 'blg-m-crd-dsg'}>
                <div onClick={changeBlogTextHightBody} className="blg-Img-dsg">
                    <img src={blogImage} alt="" />
                </div>
                <div className="blg-c-p-dsg">
                    <div onClick={changeBlogTextHightBody} className="more-blg-txt">
                        <h4>{tittle}</h4>
                        <p>{shortDisCription}</p>
                    </div>
                    <a onClick={changeBlogTextHight} class="blg-btn-cstm"></a>
                </div>
            </div>
        </div>
    );
};

export default DisplyBlog;