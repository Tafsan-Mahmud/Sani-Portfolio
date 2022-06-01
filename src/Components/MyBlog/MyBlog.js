import React from 'react';
import './MyBlog.css';
import BlogFakeData from '../fakeData2';
import DisplyBlog from '../DisplyBlog/DisplyBlog';
import DarkLightSEC from '../DarkLightSEC/DarkLightSEC';
import { Link } from 'react-router-dom';


const MyBlog = () => {
    console.log(BlogFakeData)

    return (
        <div id="myBlog">
            <div className="sample-nav-bar-prjct-blg">
                <h2 className="the-sani-main-logoblg-prjct"><i class="fab fa-phoenix-framework"></i> The Sani</h2>
                <div className="DLmode-BackHome-blg-prjct">
                   <Link style={{textDecoration:'none'}} to='/home'><li>Home</li></Link> 
                   <Link style={{textDecoration:'none'}} to='/Dashboard'><li>Dashboard</li></Link> 
                    <span></span>
                    <DarkLightSEC></DarkLightSEC>
                </div>
            </div>
            <div className="container">
                <div className="ttl-blog-sec">
                    <h1>My Blog & Projects</h1>
                </div>
                <div style={{ position: 'relative', paddingTop: '6vh', paddingBottom: '4vh' }} className="row mb-5">
                    <h3 className='prjct-ttl-m-blg'>Projects</h3>
                    {
                        BlogFakeData.map(data => <DisplyBlog BlogData={data}></DisplyBlog>)
                    }
                </div>
                <div style={{ position: 'relative', paddingTop: '8vh' }} className="row mb-5">
                    <h3 className='prjct-ttl-m-blg'>Blog</h3>
                    {
                        BlogFakeData.map(data => <DisplyBlog BlogData={data}></DisplyBlog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyBlog;