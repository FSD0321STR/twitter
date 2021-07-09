import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import "../../styles/textFlow.css";

function Welcome() {
  return (
    <Card>
      <Nav variant="tabs" defaultActiveKey="#first">
        <Nav.Item>
          <Accordion>
            <Card>
              <Card style={{ width: "37rem" }}>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="dark" eventKey="1">
                    Login
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card>
                    <Card.Body>
                      <LoginForm />
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="link" size="sm">
                        I forgot my password.
                      </Button>
                    </Card.Footer>
                  </Card>
                </Accordion.Collapse>
              </Card>
              <Card style={{ width: "37rem" }}>
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="light"
                    eventKey="2"
                    border="light"
                  >
                    Register
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <RegisterForm />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Card>
          </Accordion>
        </Nav.Item>
      </Nav>
      <div className="bodyStyle">
        <h2 className="h2">Type your Crows</h2>
      </div>
    </Card>
  );
}

export default Welcome;
