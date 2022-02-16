import React, { useEffect, useState } from 'react';
import './TotalOrderList.css';
import Sidebar from '../Sidebar/Sidebar';
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';
import fkTblDta from '../../../FakeData3';





const TotalOrderList = () => {

    const [allOrderList, setAllOrderList] = useState([])
    useEffect(() => {
        setAllOrderList(fkTblDta);
    }, [allOrderList])



    const SWALmodalon = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }

    return (
        <div id="total-order-list">
            <Sidebar></Sidebar>
            <div className="WRP-total-order-list">
                <div className="middle-h1-ttl-ord-lst">
                    <h1 id='total-odr-list-h1'>Total Order List</h1>
                </div>
                <div className="main-content-ttl-list">
                    <table className="table cstm-dsgn-tbl-ttl-ord-lst">
                        <thead>
                            <tr>
                                <th className="text-color-p" scope="col">Sr No</th>
                                <th className="text-color-p" scope="col">Name</th>
                                <th className="text-color-p" scope="col">Email</th>
                                <th className="text-color-p" scope="col">Service Name</th>
                                <th className="text-color-p" scope="col">Payment Id</th>
                                <th className="text-color-p" scope="col">Change Status</th>
                                <th className="text-color-p" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className="style-something">

                            {
                                allOrderList.map((data, index) => {
                                    return <tr>
                                        <td className="text-color-p">{index + 1}</td>
                                        <td className="text-color-p">{data.name}</td>
                                        <td className="text-color-p">{data.Email}</td>
                                        <td className="text-color-p">{data.serviceName}</td>
                                        <td className="text-color-p">{data.PaymentID}</td>
                                        <td className="text-color-p">
                                            <div id={data.Status} class="dropdown">
                                                <button className="CSTM-dprdwn-btn-ttlord-lst dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    {data.Status}
                                                </button>
                                                <ul className="dropdown-menu bg-drpdwn-ttl-ord-lst" aria-labelledby="dropdownMenuButton1">
                                                    <li class="dropdown-item dropdown-item-cstm" onClick=''>Pending</li>
                                                    <li class="dropdown-item dropdown-item-cstm" onClick=''>On going</li>
                                                    <li class="dropdown-item dropdown-item-cstm" onClick=''>Done</li>
                                                </ul>
                                            </div>

                                        </td>
                                        <td>
                                            <button onClick={SWALmodalon} class="Action-btn-ttl-ord-lst">Delete</button>
                                        </td>
                                    </tr>


                                })
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default TotalOrderList;

