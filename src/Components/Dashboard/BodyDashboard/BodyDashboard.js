import React from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './BodyDashboard.css';

const BodyDashboard = () => {
    const [d, setD] = useState(10);
    console.log(d);

    const kicuaktaPluse = () => {
        const fn = d + 1
        setD(fn)

    }
    const kicuaktaMinus = () => {
        if (d > 0) {
            const fn = d - 1
            setD(fn)
        }


    }

    return (
        <div id="BodyDashboard">
            <div className="container-fluid mgnpdn">
                <Sidebar></Sidebar>
                <div className="main-dashboard-body">
                    <h1>{d}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus maiores rerum, quasi in officia quisquam! Atque eveniet unde quisquam temporibus modi repudiandae vel aspernatur nostrum, quibusdam adipisci architecto commodi odio autem dolorum veritatis est illo, repellat dolore culpa. Beatae, quas pariatur nam in, iure illum ad eaque quae corporis reprehenderit nulla atque deleniti quos quidem quia voluptatum expedita asperiores! Voluptas itaque consectetur dolore porro, non iste consequatur laudantium distinctio quaerat quos quae provident? Culpa sequi, adipisci quidem mollitia nam magnam unde earum deserunt facere  <button onClick={kicuaktaPluse}>pluse</button><button onClick={kicuaktaMinus}>minuse</button> dolor totam voluptatem impedit eveniet laborum sunt nostrum, eius sit veniam id voluptate. Ipsam culpa veritatis ullam magnam laboriosam quas aliquam corrupti blanditiis delectus sequi unde aspernatur vero nulla quod, natus cumque animi dolor? Officiis saepe beatae, blanditiis architecto repellendus eligendi at molestias suscipit. Voluptatibus ut dolorum debitis molestiae quas harum ea aut, deleniti voluptas incidunt quae fuga quod, nihil qui voluptatem eos perferendis repellendus! Eos quasi distinctio consequatur, recusandae sapiente saepe neque, quod corporis praesentium veritatis optio itaque inventore hic nihil vero dignissimos iusto qui? Unde voluptate quo cum velit saepe architecto nemo dolorum, quibusdam vero, quas alias veritatis porro, explicabo ea provident earum blanditiis et voluptates veniam! Facilis porro fugiat libero ipsam. Praesentium.</p>
                </div>

            </div>
        </div>
    );
};

export default BodyDashboard;