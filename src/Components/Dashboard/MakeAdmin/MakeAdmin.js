import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './MakeAdmin.css';

const MakeAdmin = () => {
    return (
        <div id="makeAdmin">
            <div className="main-admin-sec">
                <Sidebar></Sidebar>
                <div className="add-admin-sec">
                    <h1>Make an Admin</h1>
                    <div className="add-content">
                        <form action="">
                            <div className="input-data-admin">
                                <input required type="text" name="" />
                                <div className="underline-admin"></div>
                                <span>Email</span>
                            </div>
                            <div className="xmpl-admin">
                                <div className="typ-submit-admin">
                                    <input type="submit" value="Submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;