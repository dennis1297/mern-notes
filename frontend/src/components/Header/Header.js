import React from 'react';
import Container from 'react-bootstrap/Container';
import { Form, FormControl } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">Note Zipper</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className='m-auto'>

        <Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2'/>
          </Form>
        </Nav>
         </Nav>

          <Nav >
            <Nav.Link href="#home">My Notes</Nav.Link>
            <NavDropdown title="Dennis Thomson" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
        //  <Form inline>
        //       <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
        //      </Form>