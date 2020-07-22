import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="appHeader">

            {/*Name*/}
            <div className="name">
                <div className="firstName">Takato</div> 
                <div className="lastName">Cox</div>
            </div>

            {/*Social Media Icons*/}
            <div className="icons">
                <a href="https://www.linkedin.com/in/TakatoCox/">
                <img className="icon" alt="link" src="https://img.icons8.com/office/48/000000/linkedin.png"/>   
                </a>
                <a href="https://github.com/TakatoCox">
                <img className="icon" alt="link" src="https://img.icons8.com/nolan/48/github.png"/>   
                </a>
                <a href="https://docs.google.com/document/d/17x78GsGFIEqwOXpiOVHv75TfW4YqPMDjze80vF58Kdk/edit?usp=sharing">
                <img className="icon" alt="link" src="https://img.icons8.com/ultraviolet/40/000000/resume.png"/>   
                </a>   
            </div>

            {/*Buttons*/}
            <div className="headButtonContainer">
                <Link to="/about">
                <button className="headButton">About</button>
                </Link>
                <Link to="/projects">
                <button className="headButton">Projects</button>
                </Link>
                <Link to="/contact">
                <button className="headButton">Contact</button>
                </Link>           
            </div>
        </div>
     );
}
 
export default Header