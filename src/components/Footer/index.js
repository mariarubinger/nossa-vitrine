import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {

  return (
    <Navbar bg="light" expand="lg">
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <p>Copyright© 2021</p>

     {/*  <Nav className="mr-auto">
        <Nav.Link href="/vender">Vender</Nav.Link>
        <Nav.Link href="/produtos">Produtos</Nav.Link>
      </Nav> */}
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Footer;
