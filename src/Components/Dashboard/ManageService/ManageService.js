import React from 'react';
import './ManageService.css';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../Sidebar/Sidebar';
import fakeService from '../../fakeData';
import DisplyManageService from '../DisplyManageService/DisplyManageService';
import { toast, ToastContainer } from 'react-toastify';

const ManageService = () => {
    const handlenotify = () => {
        const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 2000));
        toast.promise(
            resolveAfter3Sec,{
            pending: 'Promise is pending',
            success: 'update your newest data 👌',
            error: 'Promise rejected 🤯'
        })
    }
    return (
        <div id="manage-service">
            <Sidebar></Sidebar>
            <div className="manage-all-service-sec">
                <h1>Manage Your Services</h1>
                <div className="mng-all-sc">
                    {
                        fakeService.map(mngSdata => <DisplyManageService handlenotify={handlenotify} ManageData={mngSdata}></DisplyManageService>)
                    }
                </div>
            </div>
            <ToastContainer
            autoClose="2000"
            theme='light' />
        </div>
    );
};

export default ManageService;