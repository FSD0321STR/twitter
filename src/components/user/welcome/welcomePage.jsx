import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import "../../styles/textFlow.css";
import { CardGroup } from "react-bootstrap";

function Welcome() {
  return (
    <CardGroup className="welcomeBackG">
      <Nav variant="tabs" defaultActiveKey="#first">
        <Nav.Item>
          <Accordion>
            <Card className="bodyStyleLeft">
              <Card className="loginCard">
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="dark" eventKey="1">
                    Login
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card className="loginBack">
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
              <Card style={{ width: "37rem" }} className="registerCard">
                <Card.Header >
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
      <Card className="bodyStyleRight">
        <div>
          

          <h2 className="h2">
          <p>
            <img src="../src/assets/images/logo.png" width="70" height="70" />
          </p>
            Hello Crower!</h2>
        </div>
      </Card>
    </CardGroup>
  );
}

export default Welcome;
