import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

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
          <img
            className="icon"
            alt="link"
            src="https://img.icons8.com/office/48/000000/linkedin.png"
          />
        </a>
        <a href="https://github.com/TakatoCox">
          <img
            className="icon"
            alt="link"
            src="https://img.icons8.com/nolan/48/github.png"
          />
        </a>
        <a href="https://docs.google.com/document/d/12NAE6bKLwK9AStNlwRNnemfZIx9ssbIMHFEdi2Bi0Os/edit?usp=sharing">
          <img
            className="icon"
            alt="link"
            src="https://img.icons8.com/ultraviolet/40/000000/resume.png"
          />
        </a>
      </div>

      {/*Buttons*/}
      <ul className="headButtonContainer">
        <li className="button">
          <NavLink
            to="/PersonalProfile"
            activeClassName="current"
            style={{ textDecoration: "none", color: "white" }}
          >
            Home
          </NavLink>
        </li>
        <li className="button">
          <NavLink
            to="/about"
            activeClassName="current"
            style={{ textDecoration: "none", color: "white" }}
          >
            About
          </NavLink>
        </li>
        <li className="button">
          <NavLink
            to="/projects"
            activeClassName="current"
            style={{ textDecoration: "none", color: "white" }}
          >
            Projects
          </NavLink>
        </li>
        <li className="button">
          <NavLink
            to="/contact"
            activeClassName="current"
            style={{ textDecoration: "none", color: "white" }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
