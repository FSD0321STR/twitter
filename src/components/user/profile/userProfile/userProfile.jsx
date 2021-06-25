import React from "react";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

function UserProfile() {
  return (
    <Card style={{ width: "20rem" }}>
      <Col xxs={6} md={4}>
        <Image
          src="../src/assets/images/imgAvatar.png"
          roundedCircle
          width={175}
          height={175}
        />
      </Col>
      <Card.Body>
        <Card.Title>@userName </Card.Title>

        <Card.Text>
          BIO:
          <tr>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </tr>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Name</ListGroupItem>
        <ListGroupItem>City</ListGroupItem>
        <ListGroupItem>URL</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button variant="primary">Crows</Button>
        <Button variant="primary">Likes</Button>
        <Button variant="primary">Message</Button>
      </Card.Body>
    </Card>
  );
}

export default UserProfile;
