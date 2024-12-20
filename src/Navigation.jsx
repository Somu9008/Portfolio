import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { Link } from "react-scroll";

export default function Navigation() {
  let [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  let handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="left-nav">
        <h2>
          <Link to="hero" smooth={true} offset={-150} duration={700}>
            MERN Stack Developer
          </Link>
        </h2>
      </div>
      <div onClick={toggleOpen} className="hamberger">
        <div className={` one ${isOpen ? "wrongOne" : ""}`}></div>
        <div className={`two ${isOpen ? "wrongTwo" : ""}`}></div>
        <div className={`three ${isOpen ? "wrongThree" : ""}`}></div>
      </div>
      <ul className={`right-nav ${isOpen ? "toggle-menu" : ""}`}>
        <li>
          <Link
            onClick={handleCloseMenu}
            to="hero"
            smooth={true}
            offset={-150}
            duration={700}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            onClick={handleCloseMenu}
            to="about"
            smooth={true}
            offset={-150}
            duration={700}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            onClick={handleCloseMenu}
            to="skills"
            smooth={true}
            offset={-50}
            duration={700}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            onClick={handleCloseMenu}
            to="experience"
            smooth={true}
            offset={-50}
            duration={700}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            onClick={handleCloseMenu}
            to="project"
            smooth={true}
            offset={-100}
            duration={700}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={handleCloseMenu}
            to="contact"
            smooth={true}
            offset={-80}
            duration={700}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
