import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
export default class NavbarComp extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand style={{fontSize:'2.5rem', color:'burlywood'}} href="#home">Robot Management and Tracking</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{fontSize:'1rem'}} href="/">Deliveries</Nav.Link>
            <Nav.Link style={{fontSize:'1rem'}} href="/create">Create Delivery Log</Nav.Link>
            <Nav.Link style={{fontSize:'1rem'}} href="/robot">Create robot</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      // <nav className="navbar navbar-dark bg-dark navbar-expand-lg" style={{color:'#8739fa'}}>
      //   <div  style={{fontSize:'2rem', marginLeft:'25%'}}>Robot Management and Tracking</div>
      //   <div className="collpase navbar-collapse">
      //   <ul className="navbar-nav mr-auto">
      //     <li className="navbar-item">
      //     <Link to="/" className="nav-link">Deliveries</Link>
      //     </li>
      //     <li className="navbar-item">
      //     <Link to="/create" className="nav-link">Create Delivery Log</Link>
      //     </li>
      //     <li className="navbar-item">
      //     <Link to="/robot" className="nav-link">Create robot</Link>
      //     </li>
      //   </ul>
      //   </div>
      // </nav>
    );
  }
}