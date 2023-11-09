import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "../style/Sidebar.css";

const Sidebar = () => {
  return (
    <Nav className=" d-md-block sidebar">
      <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#section1">
              Get Started
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section2">
              Installation
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section3">
              Configuration
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section4">
              Running Apollomatic
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section5">
              Outputs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section6">
              Testing Resolvers
            </a>
          </li>
          {/* Add more navigation links for other sections as needed */}
        </ul>
      </div>
    </Nav>
  );
};

export default Sidebar;
