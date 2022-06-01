import React, { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import Modal from 'react-modal';
import './DisplyManageService.css';
import srvcPkCmng from './219983.png';
import srvcPkCmng2 from './768px-Circle-icons-profile.svg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#root');



const DisplyManageService = (props) => {
    const fackUserIsComing = false
    const [modalPosition, setModalPosition] = useState({
        trues: '-20% ,-80%',
        falses: '-50% , -50%'
    })
    // const trueModal = '-40% ,-60%';
    // const falseModal = '-50% , -50%';
    const [modaltransform, setModaltransform] = useState(true)
    console.log(modaltransform)
    const [addInput, setAddInput] = useState('')
    const [todoArraydata, setTodoArraydata] = useState([])
    useEffect(() => {
        if (window.innerWidth < 800) {
            setModaltransform(false)
        }
    }, [])
    const customStyles = {
        content: {
            padding: '0',
            border: '0',
            top: `${modaltransform ? '80%' : '50%'}`,
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            // position: "absulate",
            overflow: "visible",
            transition: '1s',
            zindex: '50',
            transform: `translate(${modaltransform ? modalPosition.trues : modalPosition.falses})`,
        },
        overlay: {
            background: '#00000096'
        }
    };
    console.log(todoArraydata);
    const modalon = () => {
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
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleTodoData = () => {
        if (addInput === '') {
            alert('Please Write Something')
        }
        else {
            setTodoArraydata([...todoArraydata, { id: Math.floor(Math.random() * 10000), Service: addInput }])
            setAddInput('')
        }
    }
    const handleDeleteTodo = (id) => {
        const filteredData = [...todoArraydata].filter(data => data.id !== id);
        setTodoArraydata(filteredData);
    }
    const todoModalon = () => {
        setAddInput('')
        swal({
            title: "Warning",
            text: "Sorry You can not add More Service List !!",
            icon: "warning",
            // buttons: true,
            dangerMode: true,
        });
    }

    const { id, ServiceImage, ServiceName, ShortDisCription, allServices } = props.ManageData;
    return (
        <div className="srvc-mng-crd">
            <div className="mng-img-ttl">
                <div className="onlyimgsize">
                    <img src={ServiceImage} alt="" />
                </div>
                <h4>{ServiceName}</h4>
            </div>
            <p id="mng-srvc-id"><span id="mng-srvc-id-span">Service ID :</span> Obe3Re544v346v</p>
            <div className="wrap-mng-srvc-tpc">
                {
                    allServices.map(data => <p id="mng-srvc-topic">{data.topic}</p>)
                }
            </div>
            <p id="nrml-dsrpt">{ShortDisCription}</p>

            <div className="edit-or-delete-btn">
                <button onClick={openModal} id="edit-mng-btn">Edit Text</button>
                <button onClick={modalon} id="delete-mng-btn">Delete</button>
            </div>
            <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={false} style={customStyles} >
                <div className="Manage-Service-Editing-sec">
                    <button className='btn-mng-srvs-modal-edit-close' onClick={closeModal}><FontAwesomeIcon icon={faTimesCircle} /></button>
                    <div id='manage-main-form-edit' action="" autoComplete='off'>
                        <div className="manage-up-section">
                            <h4>Choose service image</h4>
                            <input type="file" name="" id="service-image" />
                            <div className='manage-up-fack-image'>
                                <label htmlFor="service-image"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Photo</label>
                                <div className="manage-service-image-edit">
                                    {
                                        fackUserIsComing ? <img src={srvcPkCmng} alt="" /> : <img src={srvcPkCmng2} alt="" />
                                    }
                                </div>
                            </div>

                        </div>
                        <div className="manage-srvs-all-inputs">
                            <div className="manage-srvc-name-input-data">
                                <input type="text" required name="Name" />
                                <span>Service Name</span>
                                <div className="underline-manage-srvc-edit-name"></div>
                            </div>
                            <div className="manage-srvc-todo-add-sec">
                                <span>Add Services ({6 - todoArraydata.length})</span>
                                <div className='manage-srvc-todo-add-not-add-btn'>
                                    <input id='srvs-todo' placeholder='Write Todo Services' value={addInput} onChange={(e) => setAddInput(e.target.value)} type="text" />
                                    {
                                        todoArraydata.length === 6 && <button onClick={todoModalon} type="button" className='manage-srvs-add-btn-disable' ><i class="fas fa-exclamation"></i> Add</button>
                                    }
                                    {
                                        todoArraydata.length < 6 && < button onClick={handleTodoData} className='manage-srvs-add-btn-active' type="button" ><i class="fas fa-plus"></i> Add</button>
                                    }
                                </div>

                                <div className="manage-srvs-todo-listed">
                                    {
                                        todoArraydata.concat().reverse().map(data => <li key={data.id} className='manage-srvs-todos-dsgn'>{data.Service} <i onClick={() => handleDeleteTodo(data.id)} id='manage-srvs-todo-delet-btn' class="far fa-trash-alt"></i></li>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="manage-srvs-tex-discription">
                                <span>Discription</span>
                                <textarea required name="description" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="manage-srvs-sbmt-sec">
                            <div className="manage-srvs-sbmt-btn-sec">
                                <input onClick={props.handlenotify} type="submit" value="Submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default DisplyManageService;

