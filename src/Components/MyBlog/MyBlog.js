import React from 'react';
import NavBar from '../NavBar/NavBar';
import './MyBlog.css';
import BlogFakeData from '../fakeData2';
import DisplyBlog from '../DisplyBlog/DisplyBlog';


const MyBlog = () => {
    console.log(BlogFakeData)

    return (
        <div id="myBlog">
            <NavBar></NavBar>
            <div className="container">
                <div className="row mb-5">
                    {
                        BlogFakeData.map(data => <DisplyBlog BlogData={data}></DisplyBlog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyBlog;