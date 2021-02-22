import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from '../../assets/imgs/logo3.png';

function Header() {

  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">
      <img src={Logo} width="90" height="40" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/cadastrodeproduto">
          Vender
        </Nav.Link>
        <Nav.Link href="/listadeprodutos">Produtos</Nav.Link>
        <NavDropdown title="Categorias" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Beleza</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Casa e Eletrodomésticos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Moda</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Tecnologia</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Buscar produtos..." className="mr-sm-2" />
        <Button variant="outline-secondary">ir</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header;
