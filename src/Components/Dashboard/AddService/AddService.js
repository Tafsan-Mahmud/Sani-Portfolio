import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddService.css';
import swal from 'sweetalert';
import Modal from 'react-modal';
import srvcPkCmng from './IMG_4203-01.jpg';
import srvcPkCmng2 from './IMG_2258-02.jpg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';


const AddService = () => {

    const checkIsComing = true;
    const [addInput, setAddInput] = useState('');
    const [todoFkDta, setTodoFkDta] = useState([]);
    const [serviceAllData, setServiceAllData] = useState([]);
    const [serviceNameInput, setServiceNameInput] = useState('');
    const [srvsDiscription, setSrvsDiscription] = useState('');

    // console.log(serviceNameInput)
    console.log(serviceAllData)


    const handleTodoSet = () => {
        if (!addInput) {
            alert('Please Write Something')
        } else {
            // const randomId = Math.floor(Math.random() * 1000000);
            setTodoFkDta([...todoFkDta, { id: Math.floor(Math.random() * 10000), Service: addInput }]);
            setAddInput('');
        }

    }
    const handleDeleteItem = (id) => {
        const updateData = [...todoFkDta].filter(data => data.id !== id);
        setTodoFkDta(updateData);
    }
    const handleStoreAllData = (x) => {
        // x.preventDefault()

        setServiceAllData({
            ServiceTittle: serviceNameInput,
            serviceImage: srvcPkCmng,
            lisOfServices: todoFkDta,
            Discription: srvsDiscription
        });
    }

    const modalon = () => {
        setAddInput('')
        swal({
            title: "Warning",
            text: "Sorry You can not add More Service List !!",
            icon: "warning",
            // buttons: true,
            dangerMode: true,
        });
    }
    return (
        <div id="addService">
            <div className="main-add-service-sec">
                <Sidebar></Sidebar>
                <div className="addservice-content-sec">
                    <h1 id="addService-ttl-m">Add Service</h1>
                    <div className="add-srvc-content">
                        <div className="service-coming-img-sec">
                            {
                                checkIsComing && <img id='srvs-incoming-img' src={srvcPkCmng} alt="" />
                            }
                            {
                                checkIsComing === false && <img id='srvs-incoming-img' src={srvcPkCmng2} alt="" />
                            }

                        </div>
                        <form id='srvs-main-form' onSubmit={handleStoreAllData} className="w-100" action='' autoComplete='off'>
                            <div className="up-section">
                                <h4>Choose service image</h4>
                                <input type="file" name="" id="service-image" />
                                <label htmlFor="service-image"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Photo</label>
                            </div>
                            <div className="add-srvc-all-input">
                                <div className="srvc-input-data">
                                    <input type="text" onChange={(e) => setServiceNameInput(e.target.value)} required name="Name" />
                                    <span>Service Name</span>
                                    <div className="underline-add-srvc"></div>
                                </div>
                                <div className="srvs-todo-add-sec">
                                    <span>Add Services ({6 - todoFkDta.length})</span>
                                    <div className='srvc-todo-add-OR-not-add-btn'>

                                        <input id='srvs-todo' placeholder='Write Todo Services' value={addInput} onChange={(e) => setAddInput(e.target.value)} type="text" />
                                        {
                                            todoFkDta.length === 6 && <button onClick={modalon} type="button" className='srvs-add-btn-disable' ><i class="fas fa-exclamation"></i> Add</button>
                                        }
                                        {
                                            todoFkDta.length < 6 && < button className='srvs-add-btn-active' type="button" onClick={handleTodoSet}><i class="fas fa-plus"></i> Add</button>
                                        }
                                    </div>
                                </div>
                                <div className="srvs-todo-listed-sec">
                                    {
                                        todoFkDta.concat().reverse().map(data => <li key={data.id} className='srvs-todos-dsgn'>{data.Service} <i onClick={() => handleDeleteItem(data.id)} id='srvs-todo-delet-btn' class="far fa-trash-alt"></i></li>
                                        )
                                    }
                                </div>
                                <div className="srvs-tex-discription">
                                    <span>Discription</span>
                                    <textarea onChange={(e) => setSrvsDiscription(e.target.value)} required name="description" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="srvs-sbmt-sec">
                                <div className="srvs-sbmt-btn-sec">
                                    <input type="submit" value="Submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default AddService;