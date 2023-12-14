import React from 'react'
import {MdPermPhoneMsg} from "react-icons/md";
import {ImLocation2} from "react-icons/im";
import {BiMailSend} from "react-icons/bi";

const ContactInfo = () => {
    return (
        <>
            <div className="contact-content">
                <h3>Contact Here</h3>
                <p>Empowering Data Excellence</p>
                <ul className="contact-info">
                    <li>
                        <div className="media">
                            <div className="icon-area"><i><MdPermPhoneMsg/></i></div>
                            <div className="media-body contact-info-here">
                                <h5><a href="tel:+659891-2262">(+65) 9891-2262</a></h5>
                                {/* <h5><a href="tel:+0-123-097-250">+0-123-456-789</a></h5> */}
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="media">
                            <div className="icon-area"><i><ImLocation2/></i></div>
                            <div className="media-body contact-info-here">
                                <h5>DataGluon.com</h5>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="media">
                            <div className="icon-area"><i><BiMailSend/></i></div>
                            <div className="media-body contact-info-here">
                                <h5><a href="mailto:Naman@datagluon.com">Naman@datagluon.com</a></h5>
                                {/* <h5><a href="mailto:demo@mail.com">demo@mail.com</a></h5> */}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ContactInfo
