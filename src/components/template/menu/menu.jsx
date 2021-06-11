import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col
} from "react-bootstrap";

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container 
      margin-left = "30px" 
      >
      <Row className="justify-content-md-center" > 
      <Col md={1} > 
      <Navbar.Brand href="/">
      <img
        src="../src/assets/images/logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      </Navbar.Brand>
      </Col>
      
      <Col md={1}>
      <Navbar.Brand href="/">

        <span>Crower</span>
        
      </Navbar.Brand>
      </Col>
      <Col md={6}>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#action2">Notifications</Nav.Link>
          <Nav.Link href="#action3">Profile</Nav.Link>
          <Nav.Link href="#action4">Messages</Nav.Link>
          <NavDropdown title="Configuration" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action5">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action6">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action7">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Link
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Col>
        <Col md={4} >
        <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
      </Col>
      </Row>
      </Container>
    </Navbar>
  );
}

export default Menu;
