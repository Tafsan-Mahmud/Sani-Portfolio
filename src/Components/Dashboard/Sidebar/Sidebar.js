import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = () => {
    const [showOrLess, setShowOrLess] = useState(false)
    const toggleSidebar = () => {
        setShowOrLess(!showOrLess)
    }
    console.log(showOrLess)
    return (
        <div id="Sidebar" className={showOrLess ? 'main-Sidebar sidebar-show' : 'main-Sidebar'}>
            <div className="brand-nm d-flex justify-content-center">
                {
                    showOrLess === false && <h2><span><i class="fab fa-phoenix-framework"></i></span> The Sani</h2>
                }

                <h2 onClick={toggleSidebar}>{showOrLess ? <i class="fas fa-bars"></i> : <i class="fas fa-times"></i>}</h2>
            </div>
            <div className="link-sec">
                <div className="all-Lnk-dv">
                    <Link className="lnk-stl-cstm" to='/home'><h5><span><i class="fas fa-home"></i></span>
                     {showOrLess === false && ' Back To Home'}</h5></Link>
                    <Link className="lnk-stl-cstm" to='/home'>  <h5><span><i class="fab fa-accusoft"></i></span> {showOrLess === false && 'Manage Service'}</h5></Link>
                    <Link className="lnk-stl-cstm" to='/home'> <h5><span><i class="fas fa-user-cog"></i></span> {showOrLess === false && 'Make Admin'}</h5></Link>
                    <Link className="lnk-stl-cstm" to='/home'>   <h5><span><i class="fas fa-plus"></i></span> {showOrLess === false && 'Add Service'}</h5></Link>
                    <Link className="lnk-stl-cstm" to='/home'>  <h5><span><i class="fas fa-sort-amount-down-alt"></i></span> {showOrLess === false && 'Total Order List'}</h5></Link>
                    <Link className="lnk-stl-cstm" to='/home'> <h5><span><i class="fas fa-list-ul"></i></span> {showOrLess === false && 'Booking List'}</h5></Link>
                    <Link className="lnk-stl-cstm" to='/home'>  <h5><span><i class="fas fa-star-half-alt"></i></span> {showOrLess === false && 'Review'}</h5></Link>
                </div>
            </div>
            <div className="logout-btn-sdbr">
                <button>Log Out <i class="fas fa-sign-out-alt"></i></button>
            </div>
        </div>
    );
};

export default Sidebar;