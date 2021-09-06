import React from 'react';
import './ManageService.css';
import Sidebar from '../Sidebar/Sidebar';
import fakeService from '../../fakeData';
import DisplyManageService from '../DisplyManageService/DisplyManageService';

const ManageService = () => {
    return (
        <div id="manage-service">
            <Sidebar></Sidebar>
            <div className="manage-all-service-sec">
                <h1>Manage Your Services</h1>
                <div className="mng-all-sc">
                    {
                        fakeService.map(mngSdata => <DisplyManageService ManageData={mngSdata}></DisplyManageService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageService;