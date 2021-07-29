import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="fixed-top">
            <nav id="nav-bg-clr-cstm" class="navbar navbar-expand-lg navbar-dark">
                <div class="container">
                    <Link class="navbar-brand" id="brand-name-nav" to='/home'>The Sani</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link nav-link-cstm" to="/home" >HOME</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link nav-link-cstm" to="/Service" >SERVICES</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link nav-link-cstm" to="/SeoExpert">ABOUT ME</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link nav-link-cstm" to="/smplePage">CONTACT</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link nav-link-cstm" to="/whyChoose">BLOG</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link nav-link-cstm" to="/home">LOGIN</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;