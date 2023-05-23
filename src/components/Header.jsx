import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, Nav, NavDropdown, Image, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsPerson, BsCart4, BsFillPeopleFill, BsLifePreserver } from 'react-icons/bs';
import logo from '../images/Screenshot 2022-11-27 101251.png';


function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className='brand text-info'>
          <Image
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />{' '}
            <b>MadanyDev</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" >
            <Nav className="ml-auto me-auto">
              <Nav.Link as={Link} to="/about">About us</Nav.Link>
              <NavDropdown title="Products" id="profile-dropdown">
                <NavDropdown.Item as={Link} to="/courses">
                  <BsFillPeopleFill className="mr-2 me-2" />
                  Courses
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/courses">
                  <BsLifePreserver className="mr-2 me-2" />
                 Services
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
              <NavDropdown title="Login" id="profile-dropdown">
                <NavDropdown.Item as={Link} to="/profile">
                  <BsPerson className="mr-2 me-2" />
                  My Account
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dashboard">
                  <BsCart4 className="mr-2 me-2" />
                  My Courses
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
              <Form className="d-flex">
                <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search"/>
                <Button variant='outline-info'>Search</Button>
              </Form>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Header;
