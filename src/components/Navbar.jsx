// import {
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   Link,
//   NavLink,
// } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import { LinkContainer } from "react-router-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "../style/ApolloMatic_Navbar.css";

const ApolloNavbar = () => {
  return (
    <>
      <Navbar expand="md" className="sticky-top apollo-nav">
        <div className="container-fluid">
          {/* <GoogleFont font="Roboto" /> */}
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src="img/logo/logo-blk.png"
                width="70"
                height="40"
                className="d-inline-block align-top"
                alt="ApolloMatic logo"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/docs">
                <Nav.Link>Docs</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about-us">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/playground">
                <Nav.Link>Playground</Nav.Link>
              </LinkContainer>
              {/* Change Git to be a git icon ... font awesome? */}
              <a
                className="git-link"
                target="_blank"
                href="https://github.com/oslabs-beta/ApolloMatic"
              >
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default ApolloNavbar;

// This class was previously added to the Nav
{
  /* <Nav className="me-auto"></Nav> */
}
