import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import DarkLightSEC from '../DarkLightSEC/DarkLightSEC';
import './ServiceDetails.css';
import SingleServiceData from '../fakeData';
import { useParams } from 'react-router-dom'; import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap';
// import Select from 'react-select';
import countryList from 'react-select-country-list'


const ServiceDetails = () => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState('')
    const [allCountry, setAllCountry] = useState([])
    const [singleData, setSingleData] = useState({})
    const [forMapSingleData, setForMapSingleData] = useState([])
    const { id, ServiceName, ServiceImage, ShortDisCription, } = singleData;
    const options = useMemo(() => countryList().getData(), [])

    const countryChangeHandler = value => {
        setValue(value)
    }
    const { Sid } = useParams();
    console.log(parseInt(Sid));
    useEffect(() => {
        fetch('https://laravel-world.com/api/countries')
            .then(res => res.json())
            .then(country => setAllCountry(country.data))
        const findedData = SingleServiceData.find(data2 => data2.id === parseInt(Sid));
        setSingleData(findedData);
        setForMapSingleData(findedData.allServices)
    }, [])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(allCountry)
    return (
        <div id='main-Service-details-pg'>
            <div className="sample-nav-bar-ServiceDetail">
                <h2 className="the-sani-main-logo-ServiceDetail"><i class="fab fa-phoenix-framework"></i> The Sani</h2>
                <div className="DLmode-BackHome-ServiceDetail">
                    <Link style={{ textDecoration: 'none' }} to='/home'><li>Home</li></Link>
                    <Link style={{ textDecoration: 'none' }} to='/Dashboard'><li>Dashboard</li></Link>
                    <span></span>
                    <DarkLightSEC></DarkLightSEC>
                </div>
            </div>
            <div className="ServiceDetail-Content">
                <h1 id='detailServiceName-img'><img className='detail-srvs-img' src={ServiceImage} alt="" /> {ServiceName}</h1>
                <div className="content-details-services">
                    <div className="all-topic-details-srvs">
                        {
                            forMapSingleData.map(data => <p><FontAwesomeIcon style={{ color: '#cc4831' }} icon={faAngleRight} /> {data.topic}</p>)
                        }
                    </div>
                    <div className="detail-service-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique hic, culpa iusto nostrum tempore quam quae doloremque, labore eos cum cumque modi officiis veritatis corrupti, ipsam blanditiis! Inventore provident dignissimos quos totam ut labore odio, mollitia corrupti dolor aperiam dolore non voluptatum libero voluptas odit a itaque ipsa deleniti iusto est voluptate porro? Et explicabo dolor dolorem? Incidunt nisi, id soluta ducimus optio necessitatibus, autem libero quae exercitationem blanditiis tenetur eaque architecto unde sequi culpa magni delectus tempore ipsam voluptatibus hic? Iste amet dolorem unde? Veritatis, facere, voluptates aliquam perferendis magni itaque ratione deleniti sint expedita accusantium temporibus! Velit quod atque quo odit accusantium libero labore soluta quibusdam! Ipsam repellat, cumque beatae dicta architecto itaque at modi ducimus, cum, commodi expedita enim? Tenetur ipsum tempora magni dolorem, possimus in quod ut dolores voluptatibus facere sit necessitatibus quia cum nobis dignissimos consectetur error eius exercitationem corrupti doloribus aliquam adipisci! Corrupti expedita modi fuga ullam hic delectus maiores, sunt sed corporis illo maxime, ipsum optio animi aliquam voluptatibus. Placeat a, minima quae cumque quia velit esse culpa voluptatem vitae vel quidem temporibus nemo sapiente eaque. Aliquam tenetur earum, assumenda doloribus voluptatem provident libero. Voluptatem soluta dolore commodi pariatur beatae, minus dicta eos.</p>
                    </div>
                </div>
                <div className="Modal-boking-service">
                    <Modal
                        show={show}
                        backdrop="static"
                        keyboard={false}
                        centered
                    >
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel exercitationem incidunt provident nulla eius quo dolores animi velit a labore quibusdam quae numquam debitis eum, blanditiis repellat aliquid, totam dolorem, dolor corrupti? Id sapiente ipsum, iste repellat pariatur accusantium, quaerat, vel totam temporibus consectetur cupiditate quibusdam facilis. Asperiores accusantium iure nemo saepe, aut iusto accusamus repellat quae explicabo, omnis eligendi sapiente perspiciatis! Incidunt aut fugiat aspernatur. Quod laboriosam sint officiis sequi pariatur voluptatibus nam aperiam commodi mollitia quo harum alias, veniam, saepe assumenda quia velit ex. Molestiae officia, nemo eius ducimus ullam nihil mollitia tempore, perferendis cum, nam eaque ratione.</p>

                        <select value={value} onChange={(e) => countryChangeHandler(e.target.value)}>
                            {
                                allCountry.map(country => <option>{country.name}</option>)
                            }

                        </select>


                        <button onClick={handleClose}><i class="fas fa-money-check"></i> Booking</button>
                    </Modal>
                </div>
                <div className="booking-Specific-service">
                    <button onClick={handleShow}><i class="fas fa-money-check"></i> Booking</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;