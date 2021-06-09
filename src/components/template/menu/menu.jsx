import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Crower</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
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
    </Navbar>
  );
}

export default Menu;
