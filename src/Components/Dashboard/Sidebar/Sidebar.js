
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = () => {

    const exampleImg = `https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png`;
    const exampleName = "MD Sani Hawlader";
    const removeNameEnd = exampleName.split(' ').slice(0, 2).join(' ');

    const [showOrLess, setShowOrLess] = useState(false);
    // console.log(showOrLess)
    const [halfOrFullName, setHalfOrFullName] = useState(true);
    console.log(halfOrFullName);

    useEffect(() => {
        if(window.innerWidth < 690){
            setHalfOrFullName(false)
        }
    }, [halfOrFullName]);

    const toggleSidebar = () => { 
        setShowOrLess(!showOrLess)
    }

    return (
        <div id="Sidebar" className={showOrLess ? 'main-Sidebar sidebar-active' : 'main-Sidebar'}>
            <div className="top-nav-sidebar">
                <span onClick={toggleSidebar}><i class="fas fa-bars"></i></span>
                <div className="user-sgn-reg-img">
                    <img src={exampleImg} alt="" />
                    <h4>{halfOrFullName ? exampleName : removeNameEnd}</h4>
                </div>
            </div>
            <div id="hide-sidebar-ext" className="all-link-sec2">
                <div className="src-lnk-cls-btn">
                   <h2 id="cstm-sdbr-h3-dsg"><i class="fab fa-phoenix-framework"></i> The Sani</h2>
                    <div className="main-lnk ">
                        <Link to='home' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-home"></i></span> Back To Home</h4></Link>
                        <Link to='#' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-user-cog"></i></span> Make Admin</h4></Link>
                        <Link to='#' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fab fa-accusoft"></i></span> Manage Service</h4></Link>
                        <Link to='#' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-plus"></i></span> Add Service</h4></Link>
                        <Link to='#' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-sort-amount-down-alt"></i></span> Total Order List</h4></Link>
                        <Link to='#' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-list-ul"></i></span> Booking List</h4></Link>
                        <Link to='#' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-star-half-alt"></i></span> Review</h4></Link>
                    </div>
                </div>
            </div>
            <div className="all-link-sec">
                <div className="src-lnk-cls-btn">
                    <h3 onClick={toggleSidebar} className="close-btn-sidebar"><i class="far fa-times-circle"></i></h3>
                    <div className="main-lnk ">
                        <Link to='home' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-home"></i></span> Back To Home</h4></Link>
                        <Link to='#' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-user-cog"></i></span> Make Admin</h4></Link>
                        <Link to='#' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fab fa-accusoft"></i></span> Manage Service</h4></Link>
                        <Link to='#' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-plus"></i></span> Add Service</h4></Link>
                        <Link to='#' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-sort-amount-down-alt"></i></span> Total Order List</h4></Link>
                        <Link to='#' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-list-ul"></i></span> Booking List</h4></Link>
                        <Link to='#' Class="cstm-lnk-dsg-sidebar nav-link"><h4><span><i class="fas fa-star-half-alt"></i></span> Review</h4></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;