import React from "react";
<<<<<<< HEAD
=======
import handleLogout from "../menu/logOut";
>>>>>>> feed
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container margin-left="30px">
        <Row className="justify-content-md-center">
          <Col md={1}>
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
                <Nav.Link href="/Pedro">Home</Nav.Link>
                <Nav.Link href="#action2">Notifications</Nav.Link>
                <Nav.Link href="#action3">Profile</Nav.Link>
                <Nav.Link href="#action4">Messages</Nav.Link>
                <NavDropdown title="Configuration" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action5">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">
                    Log Out{" "}
                    <img
                      width="18"
                      height="18"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUwNS42NjQsMjQzLjczOWwtNTQuNzgzLTM4LjYyMmMtOS45MjYtNi45OTctMjMuNjQ1LDAuMTI4LTIzLjY0NSwxMi4yNnYyMy42MjJIMTY0LjE5NiAgICBjLTguMjg0LDAtMTUuMDAxLDYuNzE2LTE1LjAwMSwxNS4wMDFTMTU1LjkxMiwyNzEsMTY0LjE5NiwyNzFoMjYzLjAzOHYyMy42MjFjMCwxMi4yMTIsMTMuNzkyLDE5LjIwNCwyMy42NDQsMTIuMjZsNTQuNzgzLTM4LjYyMiAgICBDNTE0LjAyNywyNjIuMzY1LDUxNC4xOTYsMjQ5Ljc2Nyw1MDUuNjY0LDI0My43Mzl6IiBmaWxsPSIjZmY3ZjdmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik00MzAuNDcxLDM1Mi4zMTdjLTcuMTY5LTQuMTQ2LTE2LjM0Ny0xLjY5OC0yMC40OTYsNS40NzRjLTM1LjIzNiw2MC45MTYtMTAxLjEwMywxMDEuODExLTE3Ni4zNzIsMTAxLjgxMSAgICBjLTExMi4yNjYsMC0yMDMuNjAyLTkxLjMzNi0yMDMuNjAyLTIwMy42MDJTMTIxLjMzNyw1Mi4zOTgsMjMzLjYwMyw1Mi4zOThjNzUuMzE5LDAsMTQxLjE1Niw0MC45MzMsMTc2LjM3MSwxMDEuODA5ICAgIGM0LjE0OCw3LjE3MiwxMy4zMjgsOS42MTksMjAuNDk2LDUuNDc0YzcuMTcxLTQuMTQ4LDkuNjIxLTEzLjMyNSw1LjQ3NC0yMC40OTZDMzk1LjQxOCw2OS4xMjcsMzE5LjcyOSwyMi4zOTcsMjMzLjYwMywyMi4zOTcgICAgQzEwNC40OSwyMi4zOTcsMCwxMjYuODc2LDAsMjU2YzAsMTI5LjExMywxMDQuNDc5LDIzMy42MDMsMjMzLjYwMywyMzMuNjAzYzg2LjE2MywwLDE2MS44MzMtNDYuNzYzLDIwMi4zNDItMTE2Ljc5ICAgIEM0NDAuMDkyLDM2NS42NDIsNDM3LjY0MiwzNTYuNDY2LDQzMC40NzEsMzUyLjMxN3oiIGZpbGw9IiNmZjdmN2YiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    />
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col md={4}>
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
