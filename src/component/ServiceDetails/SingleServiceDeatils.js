import React from 'react'
import img from '../../assets/img/project-details/2.png'
import { useLocation } from 'react-router-dom';
import { OurServiceData } from '../Home/OurService/OurServicesData';


const SingleServiceDeatils = (props) => {
    const location=useLocation();
    // const {state}=props.location;
    // console.log(props);
    // console.log(location,"location");
    const loc=location.state;
    console.log(loc,"loc");
    // var needed;
    const needed = OurServiceData.filter(item => item.id  ===loc);
    console.log(needed,"needed");
    // OurServiceData.map( (data)=>( data.id===loc ? (console.log(data)):(needed=null) ));
    // console.log(needed,"needed");

    return (
        <>
            <section id="service-details" className="py100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="service-details-img">
                                <img alt="" src={needed[0].img2} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h2 className="pt10">{needed[0].heading}</h2>
                                    <p>{needed[0].paragraph}</p>
                                    <p>{needed[0].paragraph2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleServiceDeatils
