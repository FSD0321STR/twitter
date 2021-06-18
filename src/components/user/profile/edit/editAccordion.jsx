import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import EditProfile from "./edit";


function EditProfileForm() {
  return (
    <Card>
      <Nav variant="tabs" defaultActiveKey="#first">
        <Nav.Item>
          <Accordion>
            <Card>
              <Card style={{ width: "37rem" }}>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="dark" eventKey="1">
                    Edit Profile
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card>
                    <Card.Body>
                      <EditProfile/>
                    </Card.Body>
                  </Card>
                </Accordion.Collapse>
              </Card>
            </Card>
          </Accordion>
        </Nav.Item>
      </Nav>
    </Card>
  );
}

export default EditProfileForm