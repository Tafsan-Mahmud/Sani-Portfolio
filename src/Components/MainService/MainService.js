import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import DisplyService from './DisplyService/DisplyService';
import './MainService.css';
import fakedata from '../fakeData';


const MainService = () => {
    console.log(fakedata);
    const [allServiceData, setAllServiceData] = useState([]);
    useEffect(() => {
        fetch(fakedata)
            .then(res => res.json())
            .then(data => setAllServiceData(data));
    }, [])
    // console.log(allServiceData);
    return (
        <div id="Service" className="full-service-page" >
            <div className="container">
                <div className="row">
                    <div data-aos="fade-right" className="srvc-top-text-padding">
                        <h1>Our Services...</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />dignissimos eum, autem nulla, beatae dicta reprehenderit ex, distinctio <br />  magnam culpa iste. Placeat.</p>
                    </div>
                    {
                        fakedata.map(data => <DisplyService data={data}></DisplyService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MainService;