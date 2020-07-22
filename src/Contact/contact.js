import React from 'react';
// import { Link } from 'react-router-dom';
import "./contact.css"


const Contact = () => {
    return ( 
        <div className="contactBackground">
            {/* <div className="buttonContainer">
            <div className="titleC">Contact</div>
                <Link to="/PersonalProfile">
                    <button className="exit">X</button>
                </Link>
            </div>   */}
            <div className="paragraph">
                <div className="contactBar">
                    <div className="barTitle">Name:</div><br/>
                    <div className="personalInfo">Takato Cox</div>
                </div>
                <div className="contactBar">
                    <div className="barTitle">Email:</div><br/>
                    <div className="personalInfo">takatocox@gmail.com</div>
                </div>
                <div className="contactBar">
                    <div className="barTitle">Phone:</div><br/>
                    <div className="personalInfo">(847)977-0740</div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;

