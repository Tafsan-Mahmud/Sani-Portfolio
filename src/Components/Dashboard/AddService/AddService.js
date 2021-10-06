import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddService.css';

const AddService = () => {
    return (
        <div id="addService">
            <Sidebar></Sidebar>
            <div className="main-add-service-sec">
                <div className="addservice-content-wrp">
                    <h1 id="addService-ttl-m">Add Order</h1>
                    <div className="add-srvc-content">
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;