import React from "react";
import Card from "react-bootstrap/Card";

//Esto pide un tweet al backend y lo printea en esta card   :)

function TweetCard() {
  return (
    <Card style={{ width: "50rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Text>
          Some quick example text to type some example crows
        </Card.Text>
        <Card.Link href="#">recrow</Card.Link>
        <Card.Link href="#">❤</Card.Link>
        <Card.Link href="#">respond</Card.Link>
        <Card.Link href="#">share</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TweetCard;
