import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddService.css';
import srvcPkCmng from './IMG_4203-01.jpg';
import srvcPkCmng2 from './IMG_2258-02.jpg';
import { useState, useEffect } from 'react';

const AddService = () => {

    const checkIsComing = false;
    const todoData = JSON.parse(localStorage.getItem('TodoList'))
    const [todoFkDta, setTodoFkDta] = useState([]);
    const [numID, setNumID] = useState(1);
    console.log(numID)
    console.log(todoFkDta)

    // console.log(todoFkDta)
    const handleTodoSet = () => {
        const todo = document.getElementById('srvs-todo').value;
        setNumID(numID + 1)
        setTodoFkDta([...todoFkDta, { id: numID, Service: todo }])
    }
    useEffect(() => {
        localStorage.setItem("TodoList", JSON.stringify(todoFkDta))

    }, [todoFkDta]);



    const fkSrvsData = [
        {
            id: 1,
            Service: 'Youtube Marketing'
        },
        {
            id: 2,
            Service: 'Linkedin'
        },
        {
            id: 3,
            Service: 'Facebook Likes'
        },
        {
            id: 4,
            Service: 'Instagram Followers'
        },
        {
            id: 5,
            Service: 'SEO Marketing'
        },
        {
            id: 6,
            Service: 'Marketing'
        }

    ];

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
                        <form className="w-100" action='' autoComplete='off'>
                            <div className="up-section">
                                <h4>Choose service image</h4>
                                <input type="file" name="" id="service-image" />
                                <label htmlFor="service-image">Upload Photo</label>
                            </div>
                            <div className="add-srvc-all-input">
                                <div className="srvc-input-data">
                                    <input type="text" required name="Name" />
                                    <span>Service Name</span>
                                    <div className="underline-add-srvc"></div>
                                </div>
                                {/* <div className="srvc-input-data">
                                    <input type="text" required name="Name" />
                                    <span>Service Name</span>
                                    <div className="underline-add-srvc"></div>
                                </div> */}
                                <div className="srvs-todo-add-sec">
                                    <span>Add Services ({7 - numID})</span>
                                    <div>

                                        <input id='srvs-todo' type="text" />
                                        {
                                            numID === 7 && <button type="button" className='btn-disable' >Add</button>
                                        }
                                        {
                                            numID < 7 && < button type="button" onClick={handleTodoSet}>Add</button>
                                        }
                                    </div>
                                </div>
                                <div className="srvs-todo-listed-sec">
                                    {
                                        todoFkDta.map(data => <li className='srvs-todos-dsgn'>{data.id}-{data.Service}</li>
                                        )
                                    }
                                </div>
                            </div>
                            <input style={{marginTop:'20px'}} type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default AddService;