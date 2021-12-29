import React, { useEffect, useState } from 'react';
import './TotalOrderList.css';
import Sidebar from '../Sidebar/Sidebar';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import index from 'react-typical';
import XXXxx from '../../../XXXxx';


const TotalOrderList = () => {

    const [allOrderList, setAllOrderList] = useState([])
    useEffect(() => {

        // fetch('https://quiet-stream-56783.herokuapp.com/allBooking')
        //     .then(res => res.json())
        //     .then(data => {
        //         setAllOrderList(data);
        //     })
    }, [allOrderList])

    return (
        <div id="total-order-list">
            <Sidebar></Sidebar>
            <div className="mrgin-f-respo-sd-br">
                <div className="main-wrp-content-sec">
                    <h1 id="total-odr-list-h1">Total Order List</h1>
                    <div className="total-order-content">
                        <div class="my-responsive-table">
                            <table class="table order-table-style table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-color-p" scope="col">Sr No</th>
                                        <th className="text-color-p" scope="col">Name</th>
                                        <th className="text-color-p" scope="col">Email</th>
                                        <th className="text-color-p" scope="col">Service Name</th>
                                        <th className="text-color-p" scope="col">Payment Id</th>
                                        <th className="text-color-p" scope="col">Change Status</th>
                                    </tr>
                                </thead>
                                <tbody className="style-something">

                                    {
                                        allOrderList.map((data, index) => {
                                            <tr>
                                                <td className="text-color-p">{index + 1}</td>
                                                <td className="text-color-p">{data.name}</td>
                                                <td className="text-color-p">{data.email}</td>
                                                <td className="text-color-p">{data.serviceName}</td>
                                                <td className="text-color-p">{data.paymentId}</td>
                                                <td className="text-color-p"><button className="m-bkng-status">{data.status}</button></td>
                                            </tr>

                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalOrderList;
