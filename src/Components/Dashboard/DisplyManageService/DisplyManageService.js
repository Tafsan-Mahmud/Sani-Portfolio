import React from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import Modal from 'react-modal';
import './DisplyManageService.css';
import srvcPkCmng from './IMG_4203-01.jpg';
import srvcPkCmng2 from './IMG_2258-02.jpg';


Modal.setAppElement('#root');
const customStyles = {
    content: {
        padding:'0',
        border:'0',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transition: '1s',
        zindex: '50',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        background: '#00000096'
    }
};


const DisplyManageService = (props) => {
   
    const [y, sety] = useState(false)


    console.log(y);
    const xmpl = () => {
        sety(!y)
    }

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

                    xmpl()
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

    const { id, ServiceImage, ServiceName, ShortDisCription, allServices } = props.ManageData;
    return (
        <div className="srvc-mng-crd">
            <div className="mng-img-ttl">
                <div className="onlyimgsize">
                    <img src={ServiceImage} alt="" />
                </div>
                <h4>{ServiceName}</h4>
            </div>
            <p id="mng-srvc-id">Service ID : Obe3Re544v346v</p>
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
            <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={false} style={customStyles} contentLabel="Example Modal" >
                <button onClick={closeModal}>close</button>
                <div className="Manage-Service-Editing-sec">
                    {/* copy-code */}


                    {/* copy-code */}
                </div>
            </Modal>
        </div>
    );
};

export default DisplyManageService;

