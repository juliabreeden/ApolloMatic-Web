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
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

import { LinkContainer } from "react-router-bootstrap";

const ApolloNavbar = () => {
  return (
    <>
      <Navbar expand="md" className="sticky-top bg-body-tertiary">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src="img/logo/logoBold.png"
                width="70"
                height="40"
                className="d-inline-block align-top"
                alt="ApolloMatic logo"
              /> Apollo Matic
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/playground">
                <Nav.Link>Playground</Nav.Link>
              </LinkContainer>
              {/* <Nav.Link >Link</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ApolloNavbar;

/*<ul>
      <li>
        <NavLink to="/">home</NavLink>
      </li>
      <li>
        <NavLink to="/playground">Playground</NavLink>
      </li>
    </ul>
 */
